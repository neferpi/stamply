import type { ReactNode } from "react";
import { TimestampConverter } from "./TimestampConverter";

type Props = {
  title: string;
  description: string;
  defaultUnit?: "s" | "ms";
  children?: ReactNode;
};

export function SeoPage({
  title,
  description,
  defaultUnit = "s",
  children,
}: Props) {
  return (
    <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-10">
      <div className="mb-8 max-w-2xl">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          {title}
        </h1>
        <p className="mt-3 text-zinc-600 dark:text-zinc-400">{description}</p>
      </div>
      <TimestampConverter heading={title} defaultUnit={defaultUnit} />
      {children && (
        <article className="seo-copy mt-12 max-w-2xl space-y-4 text-zinc-700 dark:text-zinc-300 [&_code]:rounded [&_code]:bg-zinc-100 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-sm dark:[&_code]:bg-zinc-800 [&_h2]:mt-8 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-zinc-900 dark:[&_h2]:text-zinc-100 [&_li]:ml-5 [&_li]:list-disc [&_p]:leading-relaxed [&_ul]:space-y-1">
          {children}
        </article>
      )}
    </main>
  );
}
