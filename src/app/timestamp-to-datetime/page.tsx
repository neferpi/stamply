import { SeoPage } from "@/components/SeoPage";
import { buildPageMetadata } from "@/lib/metadata";

const title = "Timestamp to DateTime Converter";
const description =
  "Convert Unix timestamps to datetime strings. Get local, UTC, and ISO formats for logs and APIs.";

export const metadata = buildPageMetadata({
  title,
  description,
  path: "/timestamp-to-datetime",
});

export default function Page() {
  return (
    <SeoPage
      title={title}
      description={description}
    >
      <h2>Timestamp → datetime</h2>
      <p>
        Turn raw epoch integers into datetime strings you can paste into tickets,
        SQL, or documentation. Includes timezone presets for quick comparisons.
      </p>
      <h2>Formats included</h2>
      <ul>
        <li>Local wall-clock datetime</li>
        <li>UTC datetime</li>
        <li>ISO 8601 / RFC 3339</li>
      </ul>
    </SeoPage>
  );
}
