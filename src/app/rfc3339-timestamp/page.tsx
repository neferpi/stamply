import { SeoPage } from "@/components/SeoPage";
import { buildPageMetadata } from "@/lib/metadata";

const title = "RFC 3339 Timestamp Converter";
const description =
  "Convert Unix timestamps to RFC 3339 / ISO 8601 strings. Get Zulu-time datetimes ready for APIs and JSON.";

export const metadata = buildPageMetadata({
  title,
  description,
  path: "/rfc3339-timestamp",
});

export default function Page() {
  return (
    <SeoPage
      title={title}
      description={description}
    >
      <h2>Unix → RFC 3339</h2>
      <p>
        RFC 3339 timestamps like <code>2024-01-15T08:30:00.000Z</code> are the
        web-friendly profile of ISO 8601. Convert any Unix epoch into that format
        for JSON APIs and structured logs.
      </p>
      <h2>Zulu time</h2>
      <p>
        The trailing <code>Z</code> means UTC. That keeps payloads unambiguous
        across regions and DST changes.
      </p>
    </SeoPage>
  );
}
