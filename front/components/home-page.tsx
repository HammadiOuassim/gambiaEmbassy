import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { AboutTabs } from "@/components/about-tabs";
import { AmbassadorMessage } from "@/components/ambassador-message";
import { EmbassyCard } from "@/components/embassy-card";
import { ConsularCardRow } from "@/components/consular-card-row";
import { HighlightReel } from "@/components/highlight-reel";
import { NewsReel } from "@/components/news-reel";
import { GlowHover } from "@/components/glow-hover";
const staff = [
  "Deputy Head of Mission",
  "Consular Officer",
  "Trade & Investment Officer",
  "Administrative Officer",
  "Protocol Officer",
  "Finance Officer",
  "Community Liaison Officer",
  "Office Assistant",
];

const consularGuide = [
  {
    title: "Travel Document Assistance",
    body: "The Embassy provides guidance to Gambian nationals concerning lost or stolen passports and other travel-document matters.",
    note: "The Embassy does not issue or renew Gambian passports. Passport issuance and renewal are handled by the competent authorities in The Gambia.",
  },
  {
    title: "Visa and Entry Requirements",
    body: "The Embassy provides information and guidance on visa requirements, entry-clearance procedures, visa exemptions, and supporting documents for travel to The Gambia.",
  },
  {
    title: "Certificates and Document Assistance",
    body: "The Embassy provides guidance on obtaining certificates, official records, Certificate of Character, and document attestation or authentication, where applicable.",
  },
  {
    title: "Civil Registration",
    body: "The Embassy provides guidance on matters relating to birth, marriage, death registration, and other civil-status documentation involving Gambian nationals.",
  },
  {
    title: "Consular Assistance",
    body: "The Embassy provides appropriate assistance and guidance to Gambian nationals facing difficulties in Qatar, including cases involving detention, hospitalization, lost documents, or other emergencies, within the limits of its mandate.",
  },
  {
    title: "Death and Repatriation Assistance",
    body: "In cases involving the death of a Gambian national in Qatar, the Embassy provides guidance and facilitates communication with the relevant authorities and family members concerning local procedures or repatriation of remains.",
  },
] as const;

const services = [
  {
    title: "Passport & Travel Documents",
    body: consularGuide[0].body,
    note: consularGuide[0].note,
    items: ["Lost or stolen passport", "Travel-document guidance", "Emergency travel"],
  },
  {
    title: "Visas & Entry Regulations",
    body: consularGuide[1].body,
    items: ["Visa requirements", "Entry regulations", "Visa exemptions", "Supporting documents"],
  },
  {
    title: "Certificates and Document Assistance",
    body: consularGuide[2].body,
    items: ["Certificates", "Official records", "Certificate of Character", "Attestation or authentication"],
  },
  {
    title: "Civil Registration",
    body: consularGuide[3].body,
    items: ["Birth registration", "Marriage registration", "Death registration", "Civil-status documents"],
  },
  {
    title: "Consular Assistance",
    body: consularGuide[4].body,
    items: ["Detention", "Hospitalization", "Lost documents", "Other emergencies"],
  },
  {
    title: "Death and Repatriation Assistance",
    body: consularGuide[5].body,
    items: ["Local procedures", "Authorities and family", "Repatriation of remains"],
  },
  /* Kept for later: Other Consular Services, General Requirements, and Contact cards.
  {
    title: "Other Consular Services",
    body: "Citizen welfare, notarial support and referrals for the Gambian community in Qatar.",
    items: ["Notarial services", "Citizen welfare", "Official letters"],
  },
  {
    title: "General Requirements",
    body: "Requirements vary depending on the service requested. Applicants may be required to provide valid identification, supporting documents, photographs, application forms, and applicable fees.",
    note: "Members of the public are advised to contact the Embassy in advance to confirm the applicable requirements and procedures.",
  },
  {
    title: "Contact",
    body: "Embassy of the Republic of The Gambia in the State of Qatar",
    contacts: [
      { label: "Telephone", value: "+974 4465 2002", href: "tel:+97444652002" },
      { label: "Email", value: "gambiaembassydoha@gmail.com", href: "mailto:gambiaembassydoha@gmail.com" },
      { label: "Office Hours", value: "Sunday–Thursday, 8:00 AM–4:00 PM" },
      { label: "Location", value: "Doha, State of Qatar" },
    ],
  },
  */
];

const news = [
  {
    tag: "Embassy announcement",
    tone: "bg-emerald-50 text-emerald-800",
    date: "28 September 2026",
    title: "The Gambian ambassador meets the Qatari minister.",
    image: "/g ambasador meet qr.jpg",
  },
  {
    tag: "Government news",
    tone: "bg-sky-50 text-sky-800",
    date: "22 September 2026",
    title: "Gambia–Qatar bilateral cooperation forum concludes in Doha",
    image: "/news-2.jpg",
  },
  {
    tag: "Consular notice",
    tone: "bg-amber-50 text-amber-800",
    date: "18 September 2026",
    title: "Updated passport renewal document checklist",
    image: "/news-3.jpg",
  },
  {
    tag: "Community event",
    tone: "bg-stone-100 text-stone-700",
    date: "12 October 2026",
    title: "Gambian community cultural evening and family programme",
    image: "/news-4.jpg",
  },
];

export function HomePage() {
  return (
    <div className="home-snap">
      <SiteHeader />
      <main>
        <section className="home-panel relative flex flex-col overflow-hidden text-white">
          <Image
            src="/hero-doha-westbay-dusk.jpg"
            alt="West Bay skyline in Doha at dusk, across the water"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_38%]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/20 to-black/5" />
          <div className="relative z-10 mx-auto flex min-h-0 w-full max-w-7xl flex-1 flex-col justify-center px-4 py-6 sm:px-6">
            <div className="-translate-y-8">
              <p className="inline-flex items-center gap-2 text-xs tracking-[0.16em] text-white/80">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-300" />
                OFFICIAL DIPLOMATIC MISSION
              </p>
              <h1 className="mt-4 text-2xl font-semibold leading-tight tracking-tight sm:text-3xl lg:text-4xl">
                Embassy of The Gambia in the State <span className="block">of Qatar</span>
              </h1>
              <p className="mt-4 max-w-lg text-base text-white/80">
                Connecting citizens, facilitating consular services, and fostering bilateral trade
                and culture.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/register"
                  className="inline-flex items-center gap-2 rounded-full bg-[#CE1126] px-5 py-2.5 text-sm font-semibold text-white transition-shadow duration-300 hover:shadow-[0_8px_22px_rgba(206,17,38,0.4)]"
                >
                  Register as Citizen in Qatar
                </Link>
                <a
                  href="#services"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-transparent bg-white px-5 py-2.5 text-sm font-semibold transition-shadow duration-300 hover:shadow-[0_8px_22px_rgba(12,28,140,0.28)] [background:linear-gradient(#fff,#fff)_padding-box,linear-gradient(90deg,#CE1126,#0C1C8C)_border-box]"
                >
                  <span className="bg-[linear-gradient(90deg,#CE1126,#0C1C8C)] bg-clip-text text-transparent">
                    Explore Consular Services →
                  </span>
                </a>
              </div>
            </div>
          </div>
          <HighlightReel />
        </section>

        <section className="home-panel !overflow-y-auto bg-[#f6f5f2] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="mx-auto flex min-h-full max-w-7xl flex-col px-4 py-6 sm:px-6">
            <p className="text-xs font-semibold tracking-[0.16em] text-embassy-mid">
              AMBASSADOR&apos;S MESSAGE
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
              A warm welcome from the Ambassador
            </h2>
            <p className="mt-2 max-w-3xl text-sm text-muted">
              Meet the Ambassador and learn more about the Embassy&apos;s commitment to Gambian
              citizens and partners in Qatar.
            </p>
            <div className="mt-6 grid items-start gap-5 md:h-[328px] md:grid-cols-[280px_1fr] md:items-stretch">
              <GlowHover className="h-full min-h-52" glowClassName="rounded-[1.75rem]">
                <div className="relative flex min-h-52 items-center justify-center rounded-3xl border border-black/10 bg-white p-6 shadow-[0_6px_14px_rgba(15,23,42,0.13)] transition-transform duration-300 group-hover:-translate-y-0.5 md:h-full">
                  <span className="flex h-40 w-40 items-center justify-center rounded-full bg-[#d9d9d9] text-stone-800">
                    <PersonIcon className="h-24 w-24" />
                  </span>
                </div>
              </GlowHover>
              <GlowHover className="h-full min-h-52" glowClassName="rounded-[1.75rem]">
                <AmbassadorMessage />
              </GlowHover>
            </div>
            <div className="mt-8 flex items-end justify-between gap-4">
              <h2 className="text-xl font-semibold text-ink">Embassy Staff</h2>
              <p className="text-right text-sm text-muted">Meet the team supporting citizens and partners</p>
            </div>
            <div className="mt-5 grid grid-cols-2 justify-items-center gap-6 lg:grid-cols-[repeat(4,220px)] lg:justify-center">
              {staff.map((role) => (
                <GlowHover
                  key={role}
                  className="w-full max-w-[220px]"
                  glowClassName="rounded-[1.4rem]"
                >
                  <article className="relative flex h-[220px] w-full flex-col items-center justify-center rounded-2xl border border-black/10 bg-white px-3 py-6 text-center text-ink shadow-[0_6px_14px_rgba(15,23,42,0.13)] transition-transform duration-300 group-hover:-translate-y-0.5">
                    <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#e4e4e4] text-stone-700">
                      <PersonIcon className="h-7 w-7" />
                    </span>
                    <h3 className="mt-4 text-sm font-semibold">Full Name</h3>
                    <p className="mt-1 text-xs leading-5 text-muted">{role}</p>
                  </article>
                </GlowHover>
              ))}
            </div>
          </div>
        </section>

     

<section
  id="services"
  className="home-panel section-stone !overflow-y-auto text-ink [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
>
  {/* ===== SECTION CONTENT LAYER WITH BACKGROUND PATTERN ===== */}
  <div className="iso-pattern-bg relative z-0 mx-auto flex min-h-full max-w-7xl flex-col px-4 py-6 sm:px-6">
    <div className="relative z-10">
      <p className="text-xs font-semibold tracking-[0.16em] text-embassy">
        Consular services
      </p>
      <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-4xl">
        Official support, clearly guided
      </h2>
      <p className="mt-3 max-w-3xl text-sm leading-7 text-muted">
        The Embassy of the Republic of The Gambia in the State of Qatar provides consular
        assistance and guidance to Gambian nationals residing in or visiting Qatar, as well as
        information to foreign nationals travelling to The Gambia.
      </p>
      <ConsularCardRow cards={services} />
      
      <div className="mt-6 flex flex-col items-start justify-between gap-4 rounded-2xl bg-sand/80 backdrop-blur-md px-5 py-4 sm:flex-row sm:items-center">
        <p className="text-sm text-ink/80">
          Unsure which service applies? Our consular team can help you choose the right route.
        </p>
        <GlowHover className="inline-flex shrink-0" glowClassName="rounded-full">
          <a
            href="#location"
            className="relative cursor-pointer rounded-full bg-[#CE1126] px-4 py-2 text-sm font-medium text-white shadow-md transition-shadow duration-200 hover:shadow-lg"
          >
            Contact Consular Desk
          </a>
        </GlowHover>
      </div>

      {/* Kept for later: full consular write-up below the cards.
      <div className="mt-8 border-t border-black/10 pt-8">
        <p className="max-w-3xl text-sm leading-7 text-ink">
          The Embassy of the Republic of The Gambia in the State of Qatar provides consular
          assistance and guidance to Gambian nationals residing in or visiting Qatar, as well as
          information to foreign nationals travelling to The Gambia.
        </p>

        <h3 className="mt-8 text-lg font-semibold tracking-tight">Services Provided</h3>
        <ol className="mt-4 grid gap-3 md:grid-cols-2">
          {consularGuide.map((item, index) => (
            <li key={item.title} className="rounded-2xl bg-white p-4">
              <div className="flex gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-embassy text-sm font-semibold text-white">
                  {index + 1}
                </span>
                <div>
                  <h4 className="text-sm font-semibold">{item.title}</h4>
                  <p className="mt-1 text-sm leading-6 text-muted">{item.body}</p>
                  {"note" in item ? (
                    <p className="mt-2 border-l-2 border-embassy pl-3 text-sm leading-6 text-ink">
                      {item.note}
                    </p>
                  ) : null}
                </div>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-4 rounded-2xl bg-white px-5 py-4">
          <h3 className="text-sm font-semibold">General Requirements</h3>
          <p className="mt-2 text-sm leading-6 text-muted">
            Requirements vary depending on the service requested. Applicants may be required to
            provide valid identification, supporting documents, photographs, application forms,
            and applicable fees.
          </p>
          <p className="mt-2 text-sm leading-6 text-ink">
            Members of the public are advised to contact the Embassy in advance to confirm the
            applicable requirements and procedures.
          </p>
        </div>

        <div className="mt-4 rounded-2xl bg-embassy px-5 py-5 text-white">
          <h3 className="text-sm font-semibold">Contact</h3>
          <p className="mt-1 text-sm text-white/80">
            Embassy of the Republic of The Gambia in the State of Qatar
          </p>
          <dl className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <dt className="text-xs tracking-wide text-white/60">Telephone</dt>
              <dd className="mt-1 text-sm font-medium">
                <a href="tel:+97444652002" className="hover:underline">
                  +974 4465 2002
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs tracking-wide text-white/60">Email</dt>
              <dd className="mt-1 text-sm font-medium">
                <a href="mailto:gambiaembassydoha@gmail.com" className="hover:underline">
                  gambiaembassydoha@gmail.com
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs tracking-wide text-white/60">Office Hours</dt>
              <dd className="mt-1 text-sm font-medium">Sunday–Thursday, 8:00 AM–4:00 PM</dd>
            </div>
            <div>
              <dt className="text-xs tracking-wide text-white/60">Location</dt>
              <dd className="mt-1 text-sm font-medium">Doha, State of Qatar</dd>
            </div>
          </dl>
        </div>
      </div>
      */}
    </div>
  </div>
</section>


        <section id="about" className="home-panel bg-[#f6f5f2] text-ink">
          <div className="mx-auto flex h-full min-h-0 max-w-7xl flex-col px-4 py-5 sm:px-6">
            <p className="text-xs font-semibold tracking-[0.16em] text-embassy-mid">
              THE EMBASSY
            </p>
            <h2 className="mt-2 max-w-3xl text-2xl font-semibold tracking-tight sm:text-3xl">
              Know The Gambia, and the Embassy that serves it in Qatar
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">
              History, geography and government beside this Embassy’s vision, values and mission in Qatar.
            </p>
            <div className="mt-5 flex min-h-0 flex-1 items-center">
              <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2">
                <GlowHover glowClassName="rounded-[1.75rem]">
                  <AboutTabs />
                </GlowHover>
                <GlowHover glowClassName="rounded-[1.75rem]">
                  <EmbassyCard />
                </GlowHover>
              </div>
            </div>
          </div>
        </section>


        <section id="discover" className="home-panel section-stone iso-pattern-bg relative z-0 text-ink">
  <div className="relative z-10 mx-auto flex h-full min-h-0 max-w-7xl flex-col px-4 py-6 sm:px-6">
    <p className="text-xs font-semibold tracking-[0.16em] text-embassy">
      DISCOVER THE GAMBIA
    </p>
    <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-4xl">
      A destination for partnership and exploration
    </h2>
    <p className="mt-3 max-w-2xl text-sm text-muted">
      Practical resources for investors, businesses and travellers building meaningful
      connections with The Gambia.
    </p>
    <div className="mt-6 flex min-h-0 flex-1 items-stretch md:items-center">
      <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-3">
        <DiscoverCard
          image="/card-trade.png"
          kicker="TRADE & INVESTMENT"
          title="West Africa’s open economy"
          body="Sector intelligence and clear routes for responsible investment."
          tags={["Sectors", "Trade"]}
        />
        <DiscoverCard
          image="/G tourism.avif"
          kicker="TOURISM"
          title="The Smiling Coast of Africa"
          body="Plan a visit shaped by nature, heritage and hospitality."
          tags={["Beaches", "Heritage"]}
        />
        <DiscoverCard
          image="/G top dest.jpg"
          kicker="TOP DESTINATION"
          title="Follow the River Gambia"
          body="From the Atlantic shore through mangrove creeks to historic towns."
          tags={["River Gambia", "Banjul"]}
          href="#about"
        />
      </div>
    </div>
  </div>
</section>
        <NewsSection />

        {/* <section id="location" className="home-panel section-stone flex flex-col text-ink">
          <div className="mx-auto flex h-full min-h-0 w-full max-w-7xl flex-col px-4 py-6 sm:px-6">
            <p className="text-xs font-semibold tracking-[0.16em] text-embassy">EMBASSY LOCATION</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-4xl">
              Find the Embassy in Doha
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-muted">
              Locate the Embassy of the Republic of The Gambia in Doha to access in-person consular
              services and appointments.
            </p>
            <div className="relative mt-6 min-h-72 flex-1 overflow-hidden rounded-[28px] border border-black/10 bg-[#f3efe4] shadow-[0_6px_14px_rgba(15,23,42,0.13)] lg:min-h-0">
              <iframe
                title="Embassy of The Gambia in the West Bay Diplomatic Area, Doha"
                src="https://maps.google.com/maps?q=West+Bay+Diplomatic+Area,+Doha,+Qatar&z=15&hl=en&output=embed"
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute right-4 bottom-4 left-4 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 text-ink shadow-sm sm:right-auto sm:max-w-sm">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-embassy text-white">
                  <PinIcon />
                </span>
                <span>
                  <span className="block text-sm font-semibold">Doha Central · Primary service centre</span>
                  <span className="block text-xs text-muted">Appointments Mon–Thu · 08:30–14:00</span>
                </span>
              </div>
            </div>
          </div>
        </section> */}

        <section id="location" className="home-panel section-stone flex flex-col text-ink">
  {/* ===== INNER CONTAINER WITH PATTERN BACKGROUND ===== */}
  <div className="iso-pattern-bg relative z-0 mx-auto flex h-full min-h-0 w-full max-w-7xl flex-col px-4 py-6 sm:px-6">
    <div className="relative z-10 flex h-full min-h-0 w-full flex-col">
      <p className="text-xs font-semibold tracking-[0.16em] text-embassy">EMBASSY LOCATION</p>
      <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-4xl">
        Find the Embassy in Doha
      </h2>
      <p className="mt-3 max-w-2xl text-sm text-muted">
        Locate the Embassy of the Republic of The Gambia in Doha to access in-person consular
        services and appointments.
      </p>
      <div className="relative mt-6 min-h-72 flex-1 overflow-hidden rounded-[28px] border border-black/10 bg-[#f3efe4] shadow-[0_6px_14px_rgba(15,23,42,0.13)] lg:min-h-0">
        <iframe
          title="Embassy of The Gambia in the West Bay Diplomatic Area, Doha"
          src="https://maps.google.com/maps?q=West+Bay+Diplomatic+Area,+Doha,+Qatar&z=15&hl=en&output=embed"
          className="h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <div className="absolute right-4 bottom-4 left-4 flex items-center gap-3 rounded-2xl bg-white/95 px-4 py-3 text-ink shadow-sm backdrop-blur-md sm:right-auto sm:max-w-sm">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-embassy text-white">
            <PinIcon />
          </span>
          <span>
            <span className="block text-sm font-semibold">Doha Central · Primary service centre</span>
            <span className="block text-xs text-muted">Appointments Mon–Thu · 08:30–14:00</span>
          </span>
        </div>
      </div>
    </div>
  </div>
</section>

 
      </main>
      <SiteFooter className="home-footer" />
    </div>
  );
}

function NewsSection() {
  return (
    <section id="news" className="home-panel bg-white text-ink">
      <div className="mx-auto flex h-full min-h-0 max-w-7xl flex-col justify-center px-4 py-6 sm:px-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs font-semibold tracking-[0.16em] text-embassy-mid">LATEST UPDATES</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">News & announcements</h2>
          <p className="mt-2 text-sm text-muted">Verified updates from the Embassy and community.</p>
        </div>
        <a href="#news" className="rounded-full border border-black/10 px-4 py-2 text-sm">
          View all updates
        </a>
      </div>
      <NewsReel items={news} />
      </div>
    </section>
  );
}

function DiscoverCard({
  image,
  kicker,
  title,
  body,
  tags,
  href = "#services",
}: {
  image: string;
  kicker: string;
  title: string;
  body: string;
  tags: string[];
  href?: string;
}) {
  return (
    <GlowHover className="h-full" glowClassName="rounded-[1.75rem]">
      <article className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-black/10 bg-white text-ink shadow-[0_6px_14px_rgba(15,23,42,0.13)] transition-transform duration-300 group-hover:-translate-y-0.5">
        <div className="relative h-44 overflow-hidden sm:h-48">
          <Image
            src={image}
            alt=""
            fill
            sizes="(min-width: 768px) 33vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
          <p className="absolute top-3 left-3 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-semibold tracking-[0.16em] text-embassy-mid">
            {kicker}
          </p>
        </div>
        <div className="flex flex-1 flex-col px-5 py-4">
          <h3 className="text-lg font-semibold leading-snug tracking-tight">{title}</h3>
          <p className="mt-2 line-clamp-2 text-sm leading-6 text-muted">{body}</p>
          <div className="mt-3 flex flex-nowrap gap-2 overflow-hidden">
            {tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="shrink-0 rounded-full bg-sand px-2.5 py-1 text-xs whitespace-nowrap text-ink/80"
              >
                {tag}
              </span>
            ))}
          </div>
          <a href={href} className="mt-auto pt-4 text-sm font-medium text-embassy">
            Explore resources →
          </a>
        </div>
      </article>
    </GlowHover>
  );
}

function PersonIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c1.5-4 4.5-6 8-6s6.5 2 8 6" />
    </svg>
  );
}

function BuildingIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M4 20h16M6 20V8l6-4 6 4v12M10 20v-5h4v5" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 21s7-6 7-11a7 7 0 10-14 0c0 5 7 11 7 11z" />
      <circle cx="12" cy="10" r="2" />
    </svg>
  );
}
