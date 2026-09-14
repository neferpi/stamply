import { SeoPage } from "@/components/SeoPage";
import { buildPageMetadata } from "@/lib/metadata";

const title = "Unix Epoch Calculator";
const description =
  "Calculate Unix epoch time from any date. Free epoch calculator with seconds, milliseconds, and ISO output.";

export const metadata = buildPageMetadata({
  title,
  description,
  path: "/unix-epoch-calculator",
});

export default function Page() {
  return (
    <SeoPage
      title={title}
      description={description}
    >
      <h2>Calculate the epoch for any date</h2>
      <p>
        Use Stamply as a quick Unix epoch calculator: pick a date, get the
        integer seconds or milliseconds, and copy ISO 8601 for good measure.
      </p>
      <h2>Accuracy</h2>
      <p>
        Conversion uses standard browser date APIs. Results match what you would
        get from well-known libraries in Node, Python, and Go for civil times.
      </p>
    </SeoPage>
  );
}
