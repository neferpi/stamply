import { SeoPage } from "@/components/SeoPage";
import { buildPageMetadata } from "@/lib/metadata";

const title = "Unix Time Converter";
const description =
  "Free Unix time converter for epoch seconds and milliseconds. Bidirectional conversion with UTC and local time.";

export const metadata = buildPageMetadata({
  title,
  description,
  path: "/unix-time-converter",
});

export default function Page() {
  return (
    <SeoPage
      title={title}
      description={description}
    >
      <h2>Convert Unix time either way</h2>
      <p>
        Stamply converts Unix time to dates and dates to Unix time in the same
        tool. No signup, no server round-trip — everything runs locally.
      </p>
      <h2>Who it is for</h2>
      <ul>
        <li>Backend engineers decoding log timestamps</li>
        <li>Data analysts checking epoch columns</li>
        <li>Anyone verifying JWT <code>exp</code> / <code>iat</code> claims</li>
      </ul>
    </SeoPage>
  );
}
