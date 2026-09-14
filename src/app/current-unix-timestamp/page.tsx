import { SeoPage } from "@/components/SeoPage";
import { buildPageMetadata } from "@/lib/metadata";

const title = "Current Unix Timestamp";
const description =
  "See the current Unix timestamp right now. Live epoch seconds and milliseconds with UTC and local time.";

export const metadata = buildPageMetadata({
  title,
  description,
  path: "/current-unix-timestamp",
});

export default function Page() {
  return (
    <SeoPage
      title={title}
      description={description}
    >
      <h2>What time is it in Unix?</h2>
      <p>
        Hit <strong>Now</strong> to load the current Unix timestamp in seconds
        or milliseconds. Useful for seeding tests, signing tokens, or checking
        that a clock is in sync.
      </p>
      <h2>UTC vs local</h2>
      <p>
        The epoch value is always absolute. Local and UTC views show how that
        same instant appears on different clocks.
      </p>
    </SeoPage>
  );
}
