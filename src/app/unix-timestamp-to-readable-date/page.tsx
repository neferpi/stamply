import { SeoPage } from "@/components/SeoPage";
import { buildPageMetadata } from "@/lib/metadata";

const title = "Unix Timestamp to Readable Date";
const description =
  "Convert Unix timestamps to readable dates. Clear formatting for humans plus ISO strings for machines.";

export const metadata = buildPageMetadata({
  title,
  description,
  path: "/unix-timestamp-to-readable-date",
});

export default function Page() {
  return (
    <SeoPage
      title={title}
      description={description}
    >
      <h2>Readable dates from epochs</h2>
      <p>
        Decode any Unix timestamp into a readable date string. Keep the ISO form
        when you still need something parsers understand.
      </p>
      <h2>Avoid off-by-1000 errors</h2>
      <p>
        Mixing seconds and milliseconds is a common bug. If the date looks like
        1970 or far in the future, toggle the unit — Stamply highlights both.
      </p>
    </SeoPage>
  );
}
