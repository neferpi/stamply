import { SeoPage } from "@/components/SeoPage";
import { buildPageMetadata } from "@/lib/metadata";

const title = "JavaScript Timestamp Converter";
const description =
  "Convert JavaScript Date timestamps (milliseconds) to readable dates. Perfect for Date.now() and getTime() values.";

export const metadata = buildPageMetadata({
  title,
  description,
  path: "/javascript-timestamp-converter",
});

export default function Page() {
  return (
    <SeoPage
      title={title}
      description={description}
      defaultUnit="ms"
    >
      <h2>Built for JS Date values</h2>
      <p>
        In JavaScript, <code>Date.now()</code> and <code>date.getTime()</code>
        return milliseconds since the Unix epoch. This page defaults to
        milliseconds so pasted values decode correctly the first time.
      </p>
      <h2>Quick tip</h2>
      <p>
        <code>new Date(1710000000000).toISOString()</code> is the programmatic
        equivalent — Stamply gives you the same result with copy buttons and
        timezone presets.
      </p>
    </SeoPage>
  );
}
