import Link from "next/link";
import { SITE_NAME } from "@/lib/site";

const NAV = [
  { href: "/unix-timestamp-converter", label: "Converter" },
  { href: "/epoch-to-date", label: "Epoch → Date" },
  { href: "/milliseconds-to-date", label: "ms → Date" },
  { href: "/utc-to-local-time", label: "UTC → Local" },
  { href: "/timestamp-to-iso", label: "→ ISO" },
];

export function SiteHeader() {
  return (
    <header className="border-b border-zinc-200 bg-white/80 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/80">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-4 py-4">
        <Link
          href="/"
          className="text-lg font-bold tracking-tight text-emerald-700 dark:text-emerald-400"
        >
          {SITE_NAME}
        </Link>
        <nav className="flex flex-wrap gap-1 text-sm">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-2.5 py-1 text-zinc-600 transition hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
