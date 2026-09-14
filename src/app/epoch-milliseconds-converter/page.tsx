import { SeoPage } from "@/components/SeoPage";
import { buildPageMetadata } from "@/lib/metadata";

const title = "Epoch Milliseconds Converter";
const description =
  "Convert epoch milliseconds to dates and back. Built for JavaScript Date.now(), Java Instant, and telemetry systems.";

export const metadata = buildPageMetadata({
  title,
  description,
  path: "/epoch-milliseconds-converter",
});

export default function Page() {
  return (
    <SeoPage
      title={title}
      description={description}
      defaultUnit="ms"
    >
      <h2>Milliseconds since 1970</h2>
      <p>
        Many runtimes store time as milliseconds since the Unix epoch. This page
        defaults to ms so you can paste <code>Date.now()</code> values without
        toggling units.
      </p>
      <h2>Examples</h2>
      <ul>
        <li>JavaScript: <code>Date.now()</code>, <code>getTime()</code></li>
        <li>Java: <code>System.currentTimeMillis()</code></li>
        <li>Telemetry and APM event timestamps</li>
      </ul>
    </SeoPage>
  );
}
