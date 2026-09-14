import { SeoPage } from "@/components/SeoPage";
import { buildPageMetadata } from "@/lib/metadata";

const title = "Epoch Converter — Free Online Tool";
const description =
  "Free online epoch converter. Translate Unix epoch time to dates and back. Seconds, milliseconds, UTC, and local time.";

export const metadata = buildPageMetadata({
  title,
  description,
  path: "/epoch-converter",
});

export default function Page() {
  return (
    <SeoPage
      title={title}
      description={description}
    >
      <h2>What is an epoch converter?</h2>
      <p>
        An epoch converter turns the integer seconds (or milliseconds) since
        1970-01-01 UTC into a readable date — and the reverse. Stamply does both
        privately in your browser.
      </p>
      <h2>Why developers use epoch time</h2>
      <ul>
        <li>Timezone-safe storage in databases and caches.</li>
        <li>Easy math for durations and deadlines.</li>
        <li>Compact serialization in APIs and binary protocols.</li>
      </ul>
    </SeoPage>
  );
}
