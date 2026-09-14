import { SeoPage } from "@/components/SeoPage";
import { buildPageMetadata } from "@/lib/metadata";

const title = "Online Timestamp Converter";
const description =
  "Free online timestamp converter. Convert Unix timestamps and dates instantly — no signup, works offline after load.";

export const metadata = buildPageMetadata({
  title,
  description,
  path: "/online-timestamp-converter",
});

export default function Page() {
  return (
    <SeoPage
      title={title}
      description={description}
    >
      <h2>Fast online conversion</h2>
      <p>
        Stamply is a lightweight online timestamp converter focused on speed and
        clarity. Load once, then convert as many values as you need.
      </p>
      <h2>Features</h2>
      <ul>
        <li>Seconds and milliseconds</li>
        <li>UTC + local + ISO 8601</li>
        <li>Timezone presets and one-click copy</li>
      </ul>
    </SeoPage>
  );
}
