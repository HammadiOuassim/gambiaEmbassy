import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { AboutTabs } from "@/components/about-tabs";
import { HighlightReel } from "@/components/highlight-reel";

const staff = [
  "Ambassador",
  "Deputy Head of Mission",
  "Consular Officer",
  "Trade & Investment Officer",
  "Administrative Officer",
];

const services = [
  {
    title: "Passport & Travel Documents",
    body: "Issuance, renewal and Emergency Travel Certificates for Gambian citizens.",
    items: ["Passport issuance", "Passport renewal", "Emergency travel"],
  },
  {
    title: "Visas & Entry Regulations",
    body: "Clear guidance for visitors, residents and official delegations travelling to The Gambia.",
    items: ["Visa requirements", "Entry regulations", "Application guidance"],
  },
  {
    title: "Civil Registration",
    body: "Secure registration of vital events and official document legalisation.",
    items: ["Birth registration", "Marriage registration", "Legalisation & attestation"],
  },
  {
    title: "Other Consular Services",
    body: "Citizen welfare, notarial support and referrals for the Gambian community in Qatar.",
    items: ["Notarial services", "Citizen welfare", "Official letters"],
  },
];

const news = [
  {
    tag: "Embassy announcement",
    tone: "bg-emerald-50 text-emerald-800",
    date: "28 September 2026",
    title: "Mobile consular desk scheduled for Al Wakrah",
    image: "/news-1.jpg",
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
    <>
      <SiteHeader />
      <main>
        <section className="hero-stripes text-white">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:py-16">
            <div>
              <p className="inline-flex items-center gap-2 text-xs tracking-[0.16em] text-white/80">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-300" />
                OFFICIAL DIPLOMATIC MISSION
              </p>
              <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                Embassy of The Gambia in the State of Qatar
              </h1>
              <p className="mt-4 max-w-lg text-base text-white/80">
                Connecting citizens, facilitating consular services, and fostering bilateral trade
                and culture.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/register"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-embassy"
                >
                  Register as Citizen in Qatar
                </Link>
                <a
                  href="#services"
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white"
                >
                  Explore Consular Services →
                </a>
              </div>
            </div>
            <div className="overflow-hidden rounded-[28px] shadow-2xl">
              <Image
                src="/embassy-building.jpg"
                alt="Embassy building in the West Bay Diplomatic Area, Doha"
                width={506}
                height={378}
                priority
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <HighlightReel />
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <p className="text-xs font-semibold tracking-[0.16em] text-embassy-mid">
            AMBASSADOR&apos;S MESSAGE
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-ink">
            A warm welcome from the Ambassador
          </h2>
          <p className="mt-2 text-sm text-muted">
            Meet the Ambassador and learn more about the Embassy&apos;s commitment to Gambian
            citizens and partners in Qatar.
          </p>
          <div className="mt-8 grid gap-6 lg:grid-cols-[280px_1fr]">
            <div className="flex items-center justify-center rounded-3xl border border-black/5 bg-white p-8">
              <span className="flex h-44 w-44 items-center justify-center rounded-full bg-stone-200 text-stone-700">
                <PersonIcon className="h-24 w-24" />
              </span>
            </div>
            <article className="rounded-3xl border border-black/5 bg-white p-8">
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-semibold">Ambassador&apos;s Welcome</h3>
                <BuildingIcon />
              </div>
              <p className="mt-4 text-sm leading-7 text-muted">
                “As Ambassador, I invite you to see this Embassy as a home away from home. We are
                here to support Gambian citizens in Qatar, strengthen bilateral ties with the State
                of Qatar, and make consular services clear, accessible and respectful for every
                visitor.”
              </p>
              <div className="mt-6 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-stone-100">
                  <PersonIcon />
                </span>
                <span>
                  <span className="block text-sm font-semibold">Full Name</span>
                  <span className="block text-xs text-muted">
                    Ambassador of The Gambia to the State of Qatar
                  </span>
                </span>
              </div>
            </article>
          </div>

          <div className="mt-14 flex items-end justify-between gap-4">
            <h2 className="text-2xl font-semibold">Embassy Staff</h2>
            <p className="hidden text-sm text-muted sm:block">
              Meet the team supporting citizens and partners
            </p>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {staff.map((role) => (
              <article key={role} className="rounded-2xl border border-black/5 bg-white px-4 py-5 text-center">
                <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-stone-200">
                  <PersonIcon />
                </span>
                <h3 className="mt-4 text-sm font-semibold">Full Name</h3>
                <p className="text-xs text-muted">{role}</p>
              </article>
            ))}
          </div>
        </section>

        <NewsSection />

        <section id="about" className="bg-[#f6f5f2] text-ink">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
            <p className="text-xs font-semibold tracking-[0.16em] text-embassy-mid">
              OUR SHARED MISSION
            </p>
            <h2 className="mt-2 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
              Bringing The Gambia closer to its citizens and partners
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-muted">
              Explore our nation, understand the Embassy&apos;s mandate and connect directly with
              the people serving the Gambian community in Qatar.
            </p>
            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              <AboutTabs />
              <article id="embassy" className="rounded-3xl bg-[#0a3a2c] p-8">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-semibold">About The Embassy</h3>
                  <BuildingIcon />
                </div>
                <p className="mt-4 text-sm leading-7 text-white/80">
                  “Our Embassy is a home away from home for Gambians and a bridge for enduring
                  cooperation with the State of Qatar.”
                </p>
                <ul className="mt-6 divide-y divide-white/10 text-sm">
                  {["Our Vision", "Our Values", "Embassy Mission"].map((item) => (
                    <li key={item} className="flex items-center justify-between py-3">
                      {item}
                      <span aria-hidden>↗</span>
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section id="services" className="bg-embassy-hero text-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <p className="text-center text-xs font-semibold tracking-[0.16em] text-emerald-200">
            CONSULAR SERVICES
          </p>
          <h2 className="mt-2 text-center text-3xl font-semibold tracking-tight sm:text-4xl">
            Official support, clearly guided
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-white/75">
            Start with the service you need. Each guide includes eligibility, required documents,
            fees and appointment information.
          </p>
          <div className="mt-10 flex gap-4 overflow-x-auto pb-2">
            {services.map((service) => (
              <article key={service.title} className="w-72 shrink-0 rounded-3xl border border-black/5 bg-white p-6 sm:w-80">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-embassy-soft text-embassy">
                  <BuildingIcon />
                </span>
                <h3 className="mt-4 text-lg font-semibold">{service.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{service.body}</p>
                <ul className="mt-4 space-y-2 text-sm text-embassy">
                  {service.items.map((item) => (
                    <li key={item}>→ {item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <div className="mt-6 flex flex-col items-start justify-between gap-4 rounded-2xl bg-sand px-5 py-4 sm:flex-row sm:items-center">
            <p className="text-sm text-ink/80">
              Unsure which service applies? Our consular team can help you choose the right route.
            </p>
            <a
              href="#location"
              className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-medium"
            >
              Contact Consular Desk
            </a>
          </div>
          </div>
        </section>

        <section id="discover" className="bg-[#f6f5f2] text-ink">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
            <p className="text-xs font-semibold tracking-[0.16em] text-embassy-mid">
              DISCOVER THE GAMBIA
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
              A destination for partnership and exploration
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-muted">
              Practical resources for investors, businesses and travellers building meaningful
              connections with The Gambia.
            </p>
            <div className="mt-8 grid gap-5 lg:grid-cols-3">
              <DiscoverCard
                image="/card-trade.jpg"
                kicker="TRADE & INVESTMENT"
                title="Grow with one of West Africa’s most open economies"
                body="Find sector intelligence and clear routes for responsible investment."
                tags={["Key Economic Sectors", "Business Procedures", "Trade Opportunities", "Useful Contacts"]}
              />
              <DiscoverCard
                image="/card-tourism.jpg"
                kicker="TOURISM"
                title="Experience the Smiling Coast of Africa"
                body="Plan an unforgettable visit shaped by nature, heritage and generous hospitality."
                tags={["Key Attractions", "Beaches", "Cultural Heritage", "Events & Festivals", "Travel & Accommodation Info"]}
              />
              <DiscoverCard
                image="/card-consular.jpg"
                kicker="CONSULAR SERVICES"
                title="Support for citizens and visitors in Qatar"
                body="Access practical guidance on passports, visas, legalisation and emergency assistance from the Embassy of The Gambia in Doha."
                tags={["Passport Services", "Visa Information", "Legalisation", "Emergency Assistance", "Contact the Embassy"]}
              />
            </div>
          </div>
        </section>

        <section id="location" className="bg-embassy-hero text-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
            <p className="text-xs font-semibold tracking-[0.16em] text-emerald-200">EMBASSY LOCATION</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
              Find the Embassy in Doha
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-white/75">
              Locate the Embassy of the Republic of The Gambia in Doha to access in-person consular
              services and appointments.
            </p>
            <div className="relative mt-8 overflow-hidden rounded-[28px] bg-[#f3efe4]">
              <iframe
                title="Embassy of The Gambia in the West Bay Diplomatic Area, Doha"
                src="https://maps.google.com/maps?q=West+Bay+Diplomatic+Area,+Doha,+Qatar&z=15&hl=en&output=embed"
                className="h-[420px] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute bottom-4 left-4 flex max-w-sm items-center gap-3 rounded-2xl bg-white px-4 py-3 text-ink shadow-sm">
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
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

function NewsSection() {
  return (
    <section id="news" className="bg-embassy-hero text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs font-semibold tracking-[0.16em] text-emerald-200">LATEST UPDATES</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight">News & announcements</h2>
          <p className="mt-2 text-sm text-white/75">Verified updates from the Embassy and community.</p>
        </div>
        <a href="#news" className="rounded-full border border-white/30 px-4 py-2 text-sm">
          View all updates
        </a>
      </div>
      <div className="mt-8 flex gap-4 overflow-x-auto pb-2">
        {news.map((item) => (
          <article key={item.title} className="w-72 shrink-0 rounded-3xl border border-black/5 bg-white p-4">
            <span className={`inline-flex rounded-full px-2.5 py-1 text-xs ${item.tone}`}>{item.tag}</span>
            <p className="mt-3 text-xs text-muted">{item.date}</p>
            <h3 className="mt-1 text-base font-semibold leading-snug">{item.title}</h3>
            <Image
              src={item.image}
              alt=""
              width={272}
              height={128}
              className="mt-4 h-28 w-full rounded-xl object-cover"
            />
            <p className="mt-3 text-sm text-embassy">Read full update →</p>
          </article>
        ))}
      </div>
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
}: {
  image: string;
  kicker: string;
  title: string;
  body: string;
  tags: string[];
}) {
  return (
    <article className="overflow-hidden rounded-3xl bg-white text-ink">
      <Image src={image} alt="" width={406} height={176} className="h-44 w-full object-cover" />
      <div className="p-5">
        <p className="text-xs font-semibold tracking-[0.14em] text-embassy-mid">{kicker}</p>
        <h3 className="mt-2 text-xl font-semibold leading-snug">{title}</h3>
        <p className="mt-2 text-sm leading-6 text-muted">{body}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="rounded-full bg-sand px-3 py-1 text-xs text-ink/80">
              {tag}
            </span>
          ))}
        </div>
        <a
          href="#services"
          className="mt-5 inline-flex rounded-full border border-black/10 px-4 py-2 text-sm"
        >
          Explore resources
        </a>
      </div>
    </article>
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
