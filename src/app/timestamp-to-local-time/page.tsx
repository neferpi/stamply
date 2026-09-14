import { SeoPage } from "@/components/SeoPage";
import { buildPageMetadata } from "@/lib/metadata";

const title = "Timestamp to Local Time Converter";
const description =
  "Convert Unix timestamps to your local time. See local wall-clock datetime next to UTC for any epoch.";

export const metadata = buildPageMetadata({
  title,
  description,
  path: "/timestamp-to-local-time",
});

export default function Page() {
  return (
    <SeoPage
      title={title}
      description={description}
    >
      <h2>Epoch → local wall clock</h2>
      <p>
        Paste a Unix timestamp to see what time it was (or will be) on your
        local clock. Compare side by side with UTC to avoid offset mistakes.
      </p>
      <h2>Support workflows</h2>
      <p>
        Great for translating server log epochs into the time a customer actually
        experienced in their region.
      </p>
    </SeoPage>
  );
}
