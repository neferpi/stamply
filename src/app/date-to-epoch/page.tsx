import { SeoPage } from "@/components/SeoPage";
import { buildPageMetadata } from "@/lib/metadata";

const title = "Date to Epoch Converter";
const description =
  "Convert a calendar date to Unix epoch time. Supports seconds and milliseconds with UTC and local presets.";

export const metadata = buildPageMetadata({
  title,
  description,
  path: "/date-to-epoch",
});

export default function Page() {
  return (
    <SeoPage
      title={title}
      description={description}
    >
      <h2>Calendar date → epoch</h2>
      <p>
        Choose year, month, day, and time to produce the matching epoch integer.
        Ideal when you know the wall-clock moment and need the numeric form.
      </p>
      <h2>Tips</h2>
      <ul>
        <li>Confirm whether your system expects seconds or milliseconds.</li>
        <li>Use timezone presets when the date is in a zone other than local.</li>
      </ul>
    </SeoPage>
  );
}
