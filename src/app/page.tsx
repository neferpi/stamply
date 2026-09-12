import Link from "next/link";
import { TimestampConverter } from "@/components/TimestampConverter";
import { buildPageMetadata } from "@/lib/metadata";
import { SEO_PAGES, SITE_DESCRIPTION, SITE_NAME } from "@/lib/site";

export const metadata = buildPageMetadata({
  title: `${SITE_NAME} — Free Unix Timestamp Converter`,
  description: SITE_DESCRIPTION,
  path: "/",
});

export default function HomePage() {
  return (
    <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-10">
      <div className="mb-8 max-w-2xl">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
          Free Unix timestamp converter
        </h1>
        <p className="mt-3 text-lg text-zinc-600 dark:text-zinc-400">
          Convert epoch seconds and milliseconds to human-readable dates — UTC,
          local time, and ISO 8601. Fast, private, no signup.
        </p>
      </div>

      <TimestampConverter />

      <section className="mt-14">
        <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
          Popular converters
        </h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {SEO_PAGES.map((p) => (
            <li key={p.path}>
              <Link
                href={p.path}
                className="block rounded-xl border border-zinc-200 bg-white p-4 transition hover:border-emerald-400 hover:shadow-sm dark:border-zinc-700 dark:bg-zinc-900 dark:hover:border-emerald-600"
              >
                <span className="font-medium text-zinc-900 dark:text-zinc-100">
                  {p.title}
                </span>
                <span className="mt-1 block text-sm text-zinc-500">
                  {p.description}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
