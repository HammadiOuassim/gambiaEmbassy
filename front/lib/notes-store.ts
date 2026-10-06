import { get, put, BlobNotFoundError } from "@vercel/blob";
import { promises as fs } from "fs";
import path from "path";

export type Note = {
  id: string;
  text: string;
  createdAt: string;
  page: string;
};

const BLOB_PATH = "embassy-notes.json";
const filePath = path.join(process.cwd(), "data", "notes.json");

const STORAGE_SETUP_ERROR =
  "Notes cannot be saved in the app folder on Vercel. Connect a private Blob store to this project, then redeploy.";

let queue: Promise<unknown> = Promise.resolve();

function enqueue<T>(task: () => Promise<T>): Promise<T> {
  const run = queue.then(task, task);
  queue = run.then(
    () => undefined,
    () => undefined,
  );
  return run;
}

export function isStorageSetupError(error: unknown): error is Error {
  return error instanceof Error && error.message === STORAGE_SETUP_ERROR;
}

function useBlobStore() {
  return process.env.VERCEL === "1";
}

export function isNote(value: unknown): value is Note {
  if (!value || typeof value !== "object") return false;
  const note = value as Note;
  return (
    typeof note.id === "string" &&
    note.id.length > 0 &&
    note.id.length <= 80 &&
    typeof note.text === "string" &&
    note.text.length > 0 &&
    note.text.length <= 2000 &&
    typeof note.createdAt === "string" &&
    !Number.isNaN(Date.parse(note.createdAt)) &&
    typeof note.page === "string" &&
    note.page.startsWith("/") &&
    note.page.length <= 200
  );
}

function parseNotes(raw: string): Note[] {
  const parsed: unknown = JSON.parse(raw);
  if (!Array.isArray(parsed)) return [];
  return parsed.filter(isNote);
}

async function readFile(): Promise<Note[]> {
  try {
    return parseNotes(await fs.readFile(filePath, "utf8"));
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") return [];
    throw error;
  }
}

async function writeFile(notes: Note[]) {
  await fs.mkdir(path.dirname(filePath), { recursive: true });
  await fs.writeFile(filePath, `${JSON.stringify(notes, null, 2)}\n`, "utf8");
}

async function readBlob(): Promise<Note[]> {
  if (!process.env.BLOB_READ_WRITE_TOKEN && !process.env.BLOB_STORE_ID) {
    throw new Error(STORAGE_SETUP_ERROR);
  }
  try {
    const result = await get(BLOB_PATH, { access: "private", useCache: false });
    if (!result || result.statusCode !== 200) return [];
    return parseNotes(await new Response(result.stream).text());
  } catch (error) {
    if (error instanceof BlobNotFoundError) return [];
    throw error;
  }
}

async function writeBlob(notes: Note[]) {
  if (!process.env.BLOB_READ_WRITE_TOKEN && !process.env.BLOB_STORE_ID) {
    throw new Error(STORAGE_SETUP_ERROR);
  }
  await put(BLOB_PATH, JSON.stringify(notes, null, 2), {
    access: "private",
    addRandomSuffix: false,
    allowOverwrite: true,
    contentType: "application/json",
  });
}

async function readNotes() {
  return useBlobStore() ? readBlob() : readFile();
}

async function writeNotes(notes: Note[]) {
  if (useBlobStore()) await writeBlob(notes);
  else await writeFile(notes);
}

export function listNotes() {
  return enqueue(() => readNotes());
}

export function addNote(input: { text: string; page: string }) {
  return enqueue(async () => {
    const notes = await readNotes();
    const note: Note = {
      id: crypto.randomUUID(),
      text: input.text,
      createdAt: new Date().toISOString(),
      page: input.page,
    };
    await writeNotes([note, ...notes]);
    return note;
  });
}

export function importNotes(incoming: Note[]) {
  return enqueue(async () => {
    const notes = await readNotes();
    const seen = new Set(notes.map((note) => note.id));
    const merged = [...incoming.filter((note) => !seen.has(note.id)), ...notes];
    await writeNotes(merged);
    return merged;
  });
}

export function removeNote(id: string) {
  return enqueue(async () => {
    const notes = await readNotes();
    const updated = notes.filter((note) => note.id !== id);
    await writeNotes(updated);
    return updated;
  });
}
