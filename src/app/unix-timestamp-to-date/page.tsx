import { SeoPage } from "@/components/SeoPage";
import { buildPageMetadata } from "@/lib/metadata";

const title = "Unix Timestamp to Date Converter";
const description =
  "Convert a Unix timestamp to a human-readable date. Instant UTC, local time, and ISO 8601 output.";

export const metadata = buildPageMetadata({
  title,
  description,
  path: "/unix-timestamp-to-date",
});

export default function Page() {
  return (
    <SeoPage
      title={title}
      description={description}
    >
      <h2>Unix timestamp → date</h2>
      <p>
        Paste an epoch like <code>1710000000</code> to see the calendar date in
        UTC and your local timezone. Copy ISO 8601 or locale strings in one click.
      </p>
      <h2>Auto unit detection</h2>
      <p>
        Values around 10 digits are treated as seconds; 13-digit values as
        milliseconds. Override anytime with the unit toggle.
      </p>
    </SeoPage>
  );
}
