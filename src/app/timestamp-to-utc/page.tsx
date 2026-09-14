import { SeoPage } from "@/components/SeoPage";
import { buildPageMetadata } from "@/lib/metadata";

const title = "Timestamp to UTC Converter";
const description =
  "Convert Unix timestamps to UTC datetime. See the exact UTC wall clock for any epoch value.";

export const metadata = buildPageMetadata({
  title,
  description,
  path: "/timestamp-to-utc",
});

export default function Page() {
  return (
    <SeoPage
      title={title}
      description={description}
    >
      <h2>Any epoch → UTC</h2>
      <p>
        UTC is the reference for servers, CDNs, and distributed systems. Convert
        any Unix timestamp to its UTC representation without worrying about your
        laptop&apos;s timezone.
      </p>
      <h2>Why UTC matters</h2>
      <p>
        Storing and logging in UTC avoids daylight-saving surprises and makes
        cross-region debugging much easier.
      </p>
    </SeoPage>
  );
}
