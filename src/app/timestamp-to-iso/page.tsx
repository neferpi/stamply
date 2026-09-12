import { SeoPage } from "@/components/SeoPage";
import { buildPageMetadata } from "@/lib/metadata";

const title = "Timestamp to ISO 8601 Converter";
const description =
  "Convert Unix timestamps to ISO 8601 format. Get RFC 3339 compatible date strings for APIs and logs.";

export const metadata = buildPageMetadata({
  title,
  description,
  path: "/timestamp-to-iso",
});

export default function Page() {
  return (
    <SeoPage title={title} description={description}>
      <h2>Unix timestamp → ISO 8601</h2>
      <p>
        ISO 8601 (and the closely related RFC 3339) strings such as{" "}
        <code>2023-11-14T22:13:20.000Z</code> are the preferred format for APIs,
        JSON payloads, and structured logs. Paste an epoch and copy the ISO
        string in one click.
      </p>
      <h2>Always in UTC</h2>
      <p>
        The ISO output uses the <code>Z</code> (Zulu) suffix, meaning UTC. That
        keeps serialization unambiguous across regions and daylight-saving
        changes.
      </p>
    </SeoPage>
  );
}
