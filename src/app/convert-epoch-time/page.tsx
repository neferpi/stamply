import { SeoPage } from "@/components/SeoPage";
import { buildPageMetadata } from "@/lib/metadata";

const title = "Convert Epoch Time to Date";
const description =
  "Convert epoch time to date online. Supports Unix seconds and milliseconds with timezone presets.";

export const metadata = buildPageMetadata({
  title,
  description,
  path: "/convert-epoch-time",
});

export default function Page() {
  return (
    <SeoPage
      title={title}
      description={description}
    >
      <h2>Convert epoch time</h2>
      <p>
        Paste an epoch time value to reveal the calendar date. Works for both
        second-based and millisecond-based epochs used across stacks.
      </p>
      <h2>Bidirectional</h2>
      <p>
        Need the other direction? Pick a date in the same tool to generate a new
        epoch instantly.
      </p>
    </SeoPage>
  );
}
