"use client";

import { useState } from "react";
import { MessageDialog } from "@/components/message-dialog";

const paragraphs = [
  "Assalamu Alaikum and welcome to the official website of the Embassy of the Republic of The Gambia in Doha, State of Qatar.",
  "It is a great honour for me to serve as the Ambassador of the Republic of The Gambia to the State of Qatar, a country with which we share deep bonds of friendship, faith, and mutual respect.",
  "This website has been created as a bridge between The Gambia and Qatar, between our government and our cherished Gambian Community in Qatar, and between our beautiful country, The Smiling Coast of Africa, and all friends of The Gambia seeking opportunities for business, tourism, and cultural exchange.",
  "The Gambia and Qatar enjoy excellent bilateral relations under the visionary leadership of His Excellency President Adama Barrow and His Highness Sheikh Tamim bin Hamad Al Thani. Our Mission in Doha is fully committed to strengthening these ties in the area of trade and investment, labour cooperation, consular service and people-to-people contact.",
  "To our Gambian diaspora in Qatar, this Embassy is your home. Our doors are open to serve your welfare and uphold your dignity.",
  "To our Qatari brothers and sisters and the international community, I invite you to discover The Gambia, a peaceful, democratic, and investor-friendly nation.",
  "Thank you for visiting our website. We look forward to serving you.",
];

export function AmbassadorMessage() {
  const [open, setOpen] = useState(false);

  return (
    <article className="rounded-3xl border border-black/5 bg-white px-6 py-5">
      <h3 className="text-xl font-semibold">Message from the Ambassador</h3>
      <p className="mt-3 line-clamp-3 max-w-3xl text-sm leading-6 text-muted">{paragraphs[0]}</p>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="mt-2 text-sm font-semibold text-embassy hover:underline"
      >
        … see more
      </button>
      <div className="mt-4">
        <p className="text-sm font-semibold">Dr. Omar Jah</p>
        <p className="text-xs text-muted">
          Ambassador Extraordinary and Plenipotentiary of the Republic of The Gambia
        </p>
        <p className="text-xs text-muted">Doha, State of Qatar · October 3rd, 2026</p>
      </div>
      {open ? (
        <MessageDialog title="Message from the Ambassador" onClose={() => setOpen(false)}>
          {paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <p className="pt-2 font-semibold text-ink">Dr. Omar Jah</p>
          <p>Ambassador Extraordinary and Plenipotentiary of the Republic of The Gambia</p>
          <p>Doha, State of Qatar</p>
          <p>October 3rd, 2026</p>
        </MessageDialog>
      ) : null}
    </article>
  );
}
