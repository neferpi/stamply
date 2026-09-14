import { SeoPage } from "@/components/SeoPage";
import { buildPageMetadata } from "@/lib/metadata";

const title = "Epoch Time Converter";
const description =
  "Free epoch time converter online. Convert epoch time to date and date to epoch with UTC, local, and ISO views.";

export const metadata = buildPageMetadata({
  title,
  description,
  path: "/epoch-time-converter",
});

export default function Page() {
  return (
    <SeoPage
      title={title}
      description={description}
    >
      <h2>Convert epoch time online</h2>
      <p>
        Epoch time is another name for Unix time. This converter handles both
        directions and shows UTC, local, and ISO 8601 representations together.
      </p>
      <h2>Private by design</h2>
      <p>
        Conversions run entirely in your browser. Nothing you paste is sent to a
        server.
      </p>
    </SeoPage>
  );
}
