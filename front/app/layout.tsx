import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { NotesButton } from "@/components/notes-button";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Embassy of The Gambia in the State of Qatar",
  description:
    "Official citizen services and consular information for the Embassy of The Gambia in Doha.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        {children}
        <NotesButton />
      </body>
    </html>
  );
}
