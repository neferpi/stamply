import { SeoPage } from "@/components/SeoPage";
import { buildPageMetadata } from "@/lib/metadata";

const title = "UTC to Local Time Converter";
const description =
  "Convert UTC timestamps to your local timezone. See both UTC and local datetime side by side.";

export const metadata = buildPageMetadata({
  title,
  description,
  path: "/utc-to-local-time",
});

export default function Page() {
  return (
    <SeoPage title={title} description={description}>
      <h2>UTC and local side by side</h2>
      <p>
        UTC is the reference timezone for almost all backends. Your laptop or
        phone displays local wall-clock time. Stamply shows both for any
        timestamp so you can reconcile log lines with what users actually saw.
      </p>
      <h2>Timezone presets</h2>
      <p>
        Choose Eastern, Pacific, London, Tokyo, and other common zones to
        preview the same instant without changing your system clock.
      </p>
    </SeoPage>
  );
}
