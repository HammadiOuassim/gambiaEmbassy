import { promises as fs } from "fs";
import path from "path";

export type Note = {
  id: string;
  text: string;
  createdAt: string;
  page: string;
};

const filePath = path.join(process.cwd(), "data", "notes.json");

let queue: Promise<unknown> = Promise.resolve();

function enqueue<T>(task: () => Promise<T>): Promise<T> {
  const run = queue.then(task, task);
  queue = run.then(
    () => undefined,
    () => undefined,
  );
  return run;
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

async function readFile(): Promise<Note[]> {
  try {
    const raw = await fs.readFile(filePath, "utf8");
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(isNote);
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") return [];
    throw error;
  }
}

async function writeFile(notes: Note[]) {
  await fs.mkdir(path.dirname(filePath), { recursive: true });
  await fs.writeFile(filePath, `${JSON.stringify(notes, null, 2)}\n`, "utf8");
}

export function listNotes() {
  return enqueue(() => readFile());
}

export function addNote(input: { text: string; page: string }) {
  return enqueue(async () => {
    const notes = await readFile();
    const note: Note = {
      id: crypto.randomUUID(),
      text: input.text,
      createdAt: new Date().toISOString(),
      page: input.page,
    };
    await writeFile([note, ...notes]);
    return note;
  });
}

export function importNotes(incoming: Note[]) {
  return enqueue(async () => {
    const notes = await readFile();
    const seen = new Set(notes.map((note) => note.id));
    const merged = [...incoming.filter((note) => !seen.has(note.id)), ...notes];
    await writeFile(merged);
    return merged;
  });
}

export function removeNote(id: string) {
  return enqueue(async () => {
    const notes = await readFile();
    const updated = notes.filter((note) => note.id !== id);
    await writeFile(updated);
    return updated;
  });
}
