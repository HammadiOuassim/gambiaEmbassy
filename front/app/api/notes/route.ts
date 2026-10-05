import { NextResponse } from "next/server";
import { addNote, importNotes, isNote, listNotes, removeNote } from "@/lib/notes-store";

export const dynamic = "force-dynamic";

export async function GET() {
  const notes = await listNotes();
  return NextResponse.json(notes);
}

export async function POST(request: Request) {
  const body: unknown = await request.json().catch(() => null);
  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid note" }, { status: 400 });
  }

  const record = body as { text?: unknown; page?: unknown; notes?: unknown };

  if (Array.isArray(record.notes)) {
    const notes = record.notes.filter(isNote).slice(0, 100);
    const saved = await importNotes(notes);
    return NextResponse.json(saved);
  }

  const text = typeof record.text === "string" ? record.text.trim() : "";
  const page = typeof record.page === "string" && record.page.startsWith("/") ? record.page.slice(0, 200) : "/";
  if (!text || text.length > 2000) {
    return NextResponse.json({ error: "Invalid note" }, { status: 400 });
  }

  const note = await addNote({ text, page });
  return NextResponse.json(note, { status: 201 });
}

export async function DELETE(request: Request) {
  const id = new URL(request.url).searchParams.get("id") ?? "";
  if (!id || id.length > 80) {
    return NextResponse.json({ error: "Missing id" }, { status: 400 });
  }
  const notes = await removeNote(id);
  return NextResponse.json(notes);
}
