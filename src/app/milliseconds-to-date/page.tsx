import { SeoPage } from "@/components/SeoPage";
import { buildPageMetadata } from "@/lib/metadata";

const title = "Milliseconds to Date Converter";
const description =
  "Convert Unix timestamps in milliseconds to readable dates. Perfect for JavaScript Date.getTime() values.";

export const metadata = buildPageMetadata({
  title,
  description,
  path: "/milliseconds-to-date",
});

export default function Page() {
  return (
    <SeoPage title={title} description={description} defaultUnit="ms">
      <h2>Milliseconds since epoch</h2>
      <p>
        JavaScript, Java, and many telemetry systems store time as milliseconds
        since the Unix epoch. Paste a value like <code>1700000000000</code> to
        decode it into a readable date, ISO 8601 string, and timezone-aware
        views.
      </p>
      <h2>Why milliseconds matter</h2>
      <p>
        Millisecond precision is useful for event ordering, latency measurement,
        and correlating client and server logs. This page defaults to
        milliseconds so you do not have to toggle units every time.
      </p>
    </SeoPage>
  );
}
