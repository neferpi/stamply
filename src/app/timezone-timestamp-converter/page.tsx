import { SeoPage } from "@/components/SeoPage";
import { buildPageMetadata } from "@/lib/metadata";

const title = "Timezone Timestamp Converter";
const description =
  "Convert Unix timestamps across timezones. Preview the same instant in Eastern, Pacific, London, Tokyo, and more.";

export const metadata = buildPageMetadata({
  title,
  description,
  path: "/timezone-timestamp-converter",
});

export default function Page() {
  return (
    <SeoPage
      title={title}
      description={description}
    >
      <h2>One instant, many zones</h2>
      <p>
        A Unix timestamp is timezone-agnostic. Use the presets to preview how
        that same moment appears in New York, London, Tokyo, and other common
        zones — without changing your system clock.
      </p>
      <h2>Daylight saving</h2>
      <p>
        Zone rules (including DST) are applied by the browser&apos;s Intl APIs,
        so summer and winter offsets stay accurate.
      </p>
    </SeoPage>
  );
}
