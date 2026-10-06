import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { AboutTabs } from "@/components/about-tabs";
import { EmbassyCard } from "@/components/embassy-card";
import { HighlightReel } from "@/components/highlight-reel";
import { NewsReel } from "@/components/news-reel";
import { serviceSlug } from "@/lib/service-links";

const staff = [
  "Consular Officer",
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
    <div className="home-snap">
      <SiteHeader />
      <main>
        <section className="home-panel hero-stripes relative flex flex-col text-white">
          <div
            className="pointer-events-none absolute -top-[121px] -right-[110px] h-[452px] w-[452px] rounded-full border border-[#c9b896]/80"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -top-[52px] -right-[41px] h-[314px] w-[314px] rounded-full border border-[#c9b896]/80"
            aria-hidden
          />
          <div className="relative z-10 mx-auto grid min-h-0 w-full max-w-7xl flex-1 grid-cols-1 items-center gap-6 px-4 py-6 sm:px-6 lg:grid-cols-2">
            <div>
              <p className="inline-flex items-center gap-2 text-xs tracking-[0.16em] text-white/80">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-300" />
                OFFICIAL DIPLOMATIC MISSION
              </p>
              <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
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
            <div className="relative aspect-[16/10] w-full max-w-[560px] justify-self-center self-center overflow-hidden rounded-[28px] shadow-2xl lg:justify-self-end">
              <Image
                src="/embassy-doha.jpg"
                alt="Embassy building in the West Bay Diplomatic Area, Doha"
                fill
                priority
                sizes="560px"
                className="object-cover object-[center_30%]"
              />
              <div className="absolute bottom-4 left-4 z-10 flex max-w-[calc(100%-2rem)] items-center gap-3 rounded-2xl bg-white/75 px-3 py-2.5 text-ink shadow-lg backdrop-blur-sm">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#e7f6ef] text-embassy">
                  <PinIcon />
                </span>
                <span>
                  <span className="block text-[10px] font-semibold tracking-[0.16em] text-muted">
                    EMBASSY IN DOHA
                  </span>
                  <span className="block text-sm font-semibold">West Bay Diplomatic Area</span>
                </span>
              </div>
            </div>
          </div>
          <HighlightReel />
        </section>

        <section className="home-panel bg-[#f6f5f2]">
          <div className="mx-auto flex h-full min-h-0 max-w-7xl flex-col justify-center px-4 py-6 sm:px-6">
            <p className="text-xs font-semibold tracking-[0.16em] text-embassy-mid">
              AMBASSADOR&apos;S MESSAGE
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
              A warm welcome from the Ambassador
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-muted">
              A message for Gambian citizens and partners in Qatar, and the team that delivers it.
            </p>
            <div className="mt-6 grid items-stretch gap-5 sm:grid-cols-[168px_1fr]">
              <div className="flex h-full min-h-40 items-center justify-center rounded-3xl border border-black/5 bg-white">
                <span className="flex h-28 w-28 items-center justify-center rounded-full bg-stone-200 text-stone-700">
                  <PersonIcon className="h-16 w-16" />
                </span>
              </div>
              <article className="rounded-3xl border border-black/5 bg-white px-6 py-5">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-semibold">Ambassador&apos;s Welcome</h3>
                  <BuildingIcon />
                </div>
                <p className="mt-3 max-w-3xl text-sm leading-6 text-muted">
                  “This Embassy is a home away from home. We support Gambian citizens in Qatar,
                  strengthen ties with the State of Qatar, and keep consular services clear and
                  respectful for every visitor.”
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-stone-100">
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
            <div className="mt-6 flex items-end justify-between gap-4">
              <h2 className="text-xl font-semibold">Embassy Staff</h2>
              <p className="hidden text-sm text-muted sm:block">The people serving citizens and partners</p>
            </div>
            <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
              {staff.map((role, index) => (
                <article
                  key={`${role}-${index}`}
                  className="min-w-0 rounded-2xl border border-black/5 bg-white px-3 py-4 text-center text-ink"
                >
                  <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-stone-200">
                    <PersonIcon />
                  </span>
                  <h3 className="mt-3 text-sm font-semibold">Full Name</h3>
                  <p className="text-xs leading-5 text-muted">{role}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <NewsSection />

        <section id="about" className="home-panel bg-[#f6f5f2] text-ink">
          <div className="mx-auto flex h-full min-h-0 max-w-7xl flex-col px-4 py-6 sm:px-6">
            <p className="text-xs font-semibold tracking-[0.16em] text-embassy-mid">
              THE NATION AND THE EMBASSY
            </p>
            <h2 className="mt-2 max-w-3xl text-2xl font-semibold tracking-tight sm:text-4xl">
              Know The Gambia, and the Embassy that serves it in Qatar
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-muted">
              History, geography and government of the country, beside the vision, values and
              mission of this Embassy: a trusted presence that keeps Gambians connected to home and
              strengthens ties with the State of Qatar.
            </p>
            <div className="mt-6 grid min-h-0 flex-1 gap-6 overflow-hidden sm:grid-cols-2">
              <AboutTabs />
              <EmbassyCard />
            </div>
          </div>
        </section>

        <section id="services" className="home-panel section-gradient text-white">
          <div className="mx-auto flex h-full min-h-0 max-w-7xl flex-col px-4 py-6 sm:px-6">
          <p className="text-center text-xs font-semibold tracking-[0.16em] text-emerald-200">
            CONSULAR SERVICES
          </p>
          <h2 className="mt-2 text-center text-2xl font-semibold tracking-tight sm:text-4xl">
            Official support, clearly guided
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-white/75">
            Start with the service you need. Each guide includes eligibility, required documents,
            fees and appointment information.
          </p>
          <div className="mx-auto mt-6 grid w-full max-w-6xl grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <article key={service.title} className="min-w-0 rounded-2xl border border-black/5 bg-white p-4 text-ink">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-embassy-soft text-embassy">
                  <BuildingIcon />
                </span>
                <h3 className="mt-3 text-sm font-semibold leading-snug">{service.title}</h3>
                <p className="mt-2 text-xs leading-5 text-muted">{service.body}</p>
                <ul className="mt-3 space-y-1 text-xs text-embassy">
                  {service.items.map((item) => (
                    <li key={item}>
                      <Link href={`/services/${serviceSlug(item)}`} className="hover:underline">
                        → {item}
                      </Link>
                    </li>
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
              className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-medium text-ink"
            >
              Contact Consular Desk
            </a>
          </div>
          </div>
        </section>

        <section id="discover" className="home-panel bg-[#f6f5f2] text-ink">
          <div className="mx-auto flex h-full min-h-0 max-w-7xl flex-col px-4 py-6 sm:px-6">
            <p className="text-xs font-semibold tracking-[0.16em] text-embassy-mid">
              DISCOVER THE GAMBIA
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-4xl">
              A destination for partnership and exploration
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-muted">
              Practical resources for investors, businesses and travellers building meaningful
              connections with The Gambia.
            </p>
            <div className="mt-6 grid min-h-0 flex-1 grid-cols-1 gap-5 md:grid-cols-3 lg:overflow-hidden">
              <DiscoverCard
                image="/card-trade.png"
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
                image="/history/history-3.jpg"
                kicker="TOP DESTINATION"
                title="Follow the River Gambia from the coast inland"
                body="The river that names the country is its defining journey, from the Atlantic shore through mangrove creeks to historic river towns."
                tags={["River Gambia", "Kunta Kinteh Island", "Banjul", "Mangrove Creeks"]}
                href="#about"
              />
            </div>
          </div>
        </section>

        <section id="location" className="home-panel section-gradient flex flex-col text-white">
          <div className="mx-auto flex h-full min-h-0 w-full max-w-7xl flex-col px-4 py-6 sm:px-6">
            <p className="text-xs font-semibold tracking-[0.16em] text-emerald-200">EMBASSY LOCATION</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-4xl">
              Find the Embassy in Doha
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-white/75">
              Locate the Embassy of the Republic of The Gambia in Doha to access in-person consular
              services and appointments.
            </p>
            <div className="relative mt-6 min-h-72 flex-1 overflow-hidden rounded-[28px] bg-[#f3efe4] lg:min-h-0">
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
        </section>
      </main>
      <SiteFooter className="home-panel flex flex-col" />
    </div>
  );
}

function NewsSection() {
  return (
    <section id="news" className="home-panel section-gradient text-white">
      <div className="mx-auto flex h-full min-h-0 max-w-7xl flex-col justify-center px-4 py-6 sm:px-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs font-semibold tracking-[0.16em] text-emerald-200">LATEST UPDATES</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">News & announcements</h2>
          <p className="mt-2 text-sm text-white/75">Verified updates from the Embassy and community.</p>
        </div>
        <a href="#news" className="rounded-full border border-white/30 px-4 py-2 text-sm">
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
    <article className="overflow-hidden rounded-3xl bg-white text-ink">
      <Image src={image} alt="" width={406} height={140} className="h-32 w-full object-cover" />
      <div className="p-4 sm:p-5">
        <p className="text-xs font-semibold tracking-[0.14em] text-embassy-mid">{kicker}</p>
        <h3 className="mt-2 text-lg font-semibold leading-snug sm:text-xl">{title}</h3>
        <p className="mt-2 text-sm leading-6 text-muted">{body}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="rounded-full bg-sand px-3 py-1 text-xs text-ink/80">
              {tag}
            </span>
          ))}
        </div>
        <a
          href={href}
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
