import { SeoPage } from "@/components/SeoPage";
import { buildPageMetadata } from "@/lib/metadata";

const title = "Epoch to Date Converter";
const description =
  "Convert Unix epoch time to human-readable dates. Supports seconds and milliseconds with timezone presets.";

export const metadata = buildPageMetadata({
  title,
  description,
  path: "/epoch-to-date",
});

export default function Page() {
  return (
    <SeoPage title={title} description={description}>
      <h2>Epoch → date</h2>
      <p>
        Enter a Unix epoch (for example <code>1700000000</code>) and Stamply
        shows the matching calendar date in your local timezone and in UTC. Copy
        buttons make it easy to paste results into logs, tickets, or docs.
      </p>
      <h2>Seconds vs milliseconds</h2>
      <p>
        Classic Unix time uses seconds. JavaScript&apos;s{" "}
        <code>Date.now()</code> and many databases use milliseconds. Stamply
        auto-detects the unit when the magnitude makes it obvious, and you can
        override with the Seconds / Milliseconds toggle.
      </p>
    </SeoPage>
  );
}
