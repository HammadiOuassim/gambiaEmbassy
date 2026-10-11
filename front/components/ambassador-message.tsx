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
  return (
    <article className="relative flex h-full min-h-52 flex-col rounded-3xl border border-black/10 bg-white px-6 py-6 shadow-[0_6px_14px_rgba(15,23,42,0.13)] transition-transform duration-300 group-hover:-translate-y-0.5 sm:px-8">
      <div>
        <h3 className="text-xl font-semibold text-ink">Ambassador&apos;s Welcome</h3>
      </div>
      <div className="mt-4 min-h-0 flex-1 space-y-3 overflow-y-auto pr-2 text-sm leading-7 text-muted [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <div className="mt-6 flex items-center gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#e4e4e4] text-stone-700">
          <PersonIcon />
        </span>
        <span>
          <span className="block text-sm font-semibold text-ink">Dr. Omar Jah</span>
          <span className="block text-xs leading-5 text-muted">
            Ambassador Extraordinary and Plenipotentiary of the Republic of The Gambia
          </span>
          <span className="block text-xs leading-5 text-muted">Doha, State of Qatar · October 3rd, 2026</span>
        </span>
      </div>
    </article>
  );
}

function PersonIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c1.5-4 4.5-6 8-6s6.5 2 8 6" />
    </svg>
  );
}
