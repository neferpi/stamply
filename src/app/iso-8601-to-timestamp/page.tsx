import { SeoPage } from "@/components/SeoPage";
import { buildPageMetadata } from "@/lib/metadata";

const title = "ISO 8601 to Unix Timestamp";
const description =
  "Convert ISO 8601 / RFC 3339 date strings to Unix timestamps. Paste an ISO datetime and get epoch seconds or ms.";

export const metadata = buildPageMetadata({
  title,
  description,
  path: "/iso-8601-to-timestamp",
});

export default function Page() {
  return (
    <SeoPage
      title={title}
      description={description}
    >
      <h2>ISO 8601 → Unix timestamp</h2>
      <p>
        Paste or pick a datetime that matches an ISO 8601 instant (for example
        <code>2024-06-15T12:00:00.000Z</code>) and copy the corresponding Unix
        timestamp for APIs that still want integers.
      </p>
      <h2>RFC 3339 compatible</h2>
      <p>
        RFC 3339 is a profile of ISO 8601 widely used on the web. Stamply&apos;s
        ISO output uses the <code>Z</code> suffix for unambiguous UTC.
      </p>
    </SeoPage>
  );
}
