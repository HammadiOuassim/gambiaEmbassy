"use client";

import { useEffect, useId, useState } from "react";
import { usePathname } from "next/navigation";

type Note = {
  id: string;
  text: string;
  createdAt: string;
  page: string;
};

const STORAGE_KEY = "gambia-embassy-notes";

function isNote(value: unknown): value is Note {
  if (!value || typeof value !== "object") return false;
  const note = value as Note;
  return (
    typeof note.id === "string" &&
    typeof note.text === "string" &&
    typeof note.createdAt === "string" &&
    typeof note.page === "string"
  );
}

function readLocalNotes(): Note[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(isNote);
  } catch {
    return [];
  }
}

function formatWhen(value: string) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  return new Intl.DateTimeFormat("en-GB", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(date);
}

export function NotesButton() {
  const pathname = usePathname();
  const titleId = useId();
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState("");
  const [notes, setNotes] = useState<Note[]>([]);
  const [ready, setReady] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;

    async function load() {
      const local = readLocalNotes();
      if (local.length > 0) {
        const imported = await fetch("/api/notes", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ notes: local }),
        });
        if (imported.ok) localStorage.removeItem(STORAGE_KEY);
      }

      const response = await fetch("/api/notes");
      if (!response.ok) throw new Error("Could not load notes");
      const data: unknown = await response.json();
      if (cancelled) return;
      setNotes(Array.isArray(data) ? data.filter(isNote) : []);
      setReady(true);
    }

    load().catch(() => {
      if (cancelled) return;
      setError("Notes could not be loaded.");
      setReady(true);
    });

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  async function saveNote() {
    const text = draft.trim();
    if (!text) return;
    setError("");
    try {
      const response = await fetch("/api/notes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text, page: pathname || "/" }),
      });
      if (!response.ok) {
        setError("The note could not be saved.");
        return;
      }
      const note: unknown = await response.json();
      if (!isNote(note)) {
        setError("The note could not be saved.");
        return;
      }
      setNotes((current) => [note, ...current.filter((item) => item.id !== note.id)]);
      setDraft("");
    } catch {
      setError("The note could not be saved.");
    }
  }

  async function removeNote(id: string) {
    setError("");
    try {
      const response = await fetch(`/api/notes?id=${encodeURIComponent(id)}`, { method: "DELETE" });
      if (!response.ok) {
        setError("The note could not be removed.");
        return;
      }
      const data: unknown = await response.json();
      setNotes(Array.isArray(data) ? data.filter(isNote) : []);
    } catch {
      setError("The note could not be removed.");
    }
  }

  return (
    <div className="fixed right-5 bottom-5 z-50 flex flex-col items-end gap-3">
      {open ? (
        <section
          role="dialog"
          aria-labelledby={titleId}
          className="flex max-h-[min(32rem,calc(100dvh-7rem))] w-[min(22rem,calc(100vw-2.5rem))] flex-col overflow-hidden rounded-3xl bg-white text-ink shadow-2xl ring-1 ring-black/10"
        >
          <div className="flex items-start justify-between gap-3 px-5 pt-5">
            <div>
              <h2 id={titleId} className="text-lg font-semibold">
                Notes
              </h2>
              <p className="mt-1 text-xs leading-5 text-muted">
                Saved in a file on the site, so they stay after you close the browser.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded-full px-2 py-1 text-sm text-muted hover:bg-sand"
              aria-label="Close notes"
            >
              ✕
            </button>
          </div>
          <form
            className="px-5 pt-4"
            onSubmit={(event) => {
              event.preventDefault();
              saveNote();
            }}
          >
            <label htmlFor="visitor-note" className="sr-only">
              Note
            </label>
            <textarea
              id="visitor-note"
              value={draft}
              onChange={(event) => setDraft(event.target.value)}
              rows={4}
              placeholder="Write a note…"
              className="w-full resize-none rounded-2xl border border-black/10 bg-sand px-3 py-2 text-sm outline-none focus:border-embassy-mid"
            />
            <button
              type="submit"
              disabled={!draft.trim()}
              className="mt-3 w-full rounded-full bg-embassy px-4 py-2 text-sm font-medium text-white disabled:opacity-40"
            >
              Save note
            </button>
            {error ? <p className="mt-2 text-xs text-red-700">{error}</p> : null}
          </form>
          <ul className="mt-4 min-h-0 flex-1 space-y-3 overflow-y-auto px-5 pb-5">
            {ready && notes.length === 0 ? (
              <li className="text-sm text-muted">No notes yet.</li>
            ) : null}
            {notes.map((note) => (
              <li key={note.id} className="rounded-2xl bg-sand px-3 py-3">
                <p className="text-sm leading-5 whitespace-pre-wrap">{note.text}</p>
                <div className="mt-2 flex items-center justify-between gap-3 text-xs text-muted">
                  <time dateTime={note.createdAt}>{formatWhen(note.createdAt)}</time>
                  <button
                    type="button"
                    onClick={() => removeNote(note.id)}
                    className="font-medium text-embassy-mid"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-label={open ? "Close notes" : "Add a note"}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-embassy text-white shadow-lg ring-4 ring-white/80"
      >
        <NoteIcon />
      </button>
    </div>
  );
}

function NoteIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <path d="M7 3.5h7.5L19 8v12.5H7z" strokeLinejoin="round" />
      <path d="M14 3.5V8h5" strokeLinejoin="round" />
      <path d="M10 13h6M10 16.5h4" strokeLinecap="round" />
    </svg>
  );
}
