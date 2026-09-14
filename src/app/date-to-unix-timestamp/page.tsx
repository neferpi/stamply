import { SeoPage } from "@/components/SeoPage";
import { buildPageMetadata } from "@/lib/metadata";

const title = "Date to Unix Timestamp Converter";
const description =
  "Convert any date and time to a Unix timestamp. Get epoch seconds or milliseconds for APIs, databases, and scripts.";

export const metadata = buildPageMetadata({
  title,
  description,
  path: "/date-to-unix-timestamp",
});

export default function Page() {
  return (
    <SeoPage
      title={title}
      description={description}
    >
      <h2>Date → Unix timestamp</h2>
      <p>
        Pick a calendar date and time to get the matching Unix epoch. Toggle
        seconds or milliseconds depending on whether you need classic Unix time
        or JavaScript-style <code>Date.getTime()</code> values.
      </p>
      <h2>Common use cases</h2>
      <ul>
        <li>Building API payloads that expect epoch integers.</li>
        <li>Writing SQL filters with Unix time columns.</li>
        <li>Debugging scheduled jobs that fire at a specific wall-clock time.</li>
      </ul>
    </SeoPage>
  );
}
