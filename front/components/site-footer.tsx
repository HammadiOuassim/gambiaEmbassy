import Link from "next/link";
import { Crest } from "@/components/crest";

export function SiteFooter({ className = "" }: { className?: string }) {
  return (
    <footer className={`overflow-hidden bg-embassy-deep text-white ${className}`}>
      <div className="bg-[#0e5c48]">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-3 px-4 py-4 sm:px-6 md:flex-row md:items-center">
          <div>
            <h2 className="text-xl font-semibold tracking-tight md:text-2xl">
              Are you a Gambian citizen living in Qatar?
            </h2>
            <p className="mt-2 max-w-xl text-sm text-white/80">
              Register securely to receive consular updates, access digital services and help us
              support you in an emergency.
            </p>
          </div>
          <Link
            href="/register"
            className="inline-flex items-center gap-2 rounded-full bg-[#CE1126] px-5 py-3 text-sm font-semibold text-white"
          >
            <ShieldIcon />
            Register as Citizen in Qatar
          </Link>
        </div>
      </div>
      <div className="h-1.5 bg-white" />
      <div className="bg-embassy-deep">
      <div className="mx-auto grid w-full max-w-7xl gap-x-6 gap-y-4 px-4 py-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-5">
        <div className="md:col-span-1">
          <div className="flex items-center gap-3">
            <Crest className="h-9 w-9" />
            <span>
              <span className="block text-xs font-semibold tracking-wide">EMBASSY OF THE GAMBIA</span>
              <span className="block text-[11px] text-white/60">DOHA · STATE OF QATAR</span>
            </span>
          </div>
          <p className="mt-4 text-sm text-white/70">
            Serving Gambian citizens and strengthening relations between The Gambia and the State of
            Qatar.
          </p>
        </div>
        <FooterCol
          title="Embassy Location"
          lines={["West Bay Diplomatic Area", "Doha, State of Qatar", "+974 4486 7117", "consular@dohaembassy.gm"]}
        />
        <div>
          <h3 className="text-sm font-semibold">Consular Hours</h3>
          <p className="mt-2 text-sm leading-5 text-white/70">Sunday–Thursday</p>
          <p className="text-sm leading-5 text-white/70">08:30–14:00</p>
          <p className="mt-1.5 text-sm leading-5 text-white/70">Friday–Saturday: Closed</p>
          <p className="mt-1.5 text-sm font-medium text-amber-200">Support/helpline visual</p>
        </div>
        <FooterCol
          title="Quick Links"
          lines={["Citizen registration", "Book an appointment", "Consular forms", "Latest notices", "Contact the Embassy"]}
          hrefs={["/register", "/#services", "/#services", "/#news", "/#location"]}
        />
        <FooterCol
          title="Legal & Privacy"
          lines={["Privacy policy", "Terms of use", "Cookie policy", "Accessibility statement", "Data protection", "Embassy administration"]}
          hrefs={["/#", "/#", "/#", "/#", "/#", "/admin"]}
        />
      </div>
      </div>
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-2 border-t border-white/10 px-4 py-3 text-xs text-white/50 sm:px-6 md:flex-row md:justify-between">
        <p>© 2026 Embassy of The Gambia in Doha. Official government service.</p>
        <p>Secure · Accessible · Privacy-respecting</p>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  lines,
  hrefs,
}: {
  title: string;
  lines: string[];
  hrefs?: string[];
}) {
  return (
    <div>
      <h3 className="text-sm font-semibold">{title}</h3>
      <ul className="mt-2 space-y-1.5 text-sm leading-5 text-white/70">
        {lines.map((line, index) => (
          <li key={line}>
            {hrefs ? (
              <Link href={hrefs[index]} className="hover:text-white">
                {line}
              </Link>
            ) : (
              line
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" />
    </svg>
  );
}
