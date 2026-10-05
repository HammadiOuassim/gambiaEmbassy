import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { serviceTitle } from "@/lib/service-links";

export default async function ServicePlaceholderPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const title = serviceTitle(slug);

  return (
    <>
      <SiteHeader />
      <main className="flex flex-1 bg-[#f6f5f2]">
        <div className="mx-auto flex w-full max-w-3xl flex-col justify-center px-4 py-16 sm:px-6">
          <p className="text-xs font-semibold tracking-[0.16em] text-embassy-mid">CONSULAR SERVICES</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-ink">{title}</h1>
          <article className="mt-6 rounded-3xl border border-black/5 bg-white p-8">
            <p className="text-sm leading-7 text-muted">
              This link does not exist for now. The page for {title} will be added later.
            </p>
            <Link
              href="/#services"
              className="mt-6 inline-flex rounded-full bg-embassy px-5 py-3 text-sm font-medium text-white"
            >
              Back to consular services
            </Link>
          </article>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
