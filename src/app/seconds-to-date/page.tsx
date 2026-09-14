import { SeoPage } from "@/components/SeoPage";
import { buildPageMetadata } from "@/lib/metadata";

const title = "Seconds to Date Converter";
const description =
  "Convert Unix timestamps in seconds to readable dates. Classic epoch-second converter with timezone support.";

export const metadata = buildPageMetadata({
  title,
  description,
  path: "/seconds-to-date",
});

export default function Page() {
  return (
    <SeoPage
      title={title}
      description={description}
    >
      <h2>Epoch seconds → date</h2>
      <p>
        Classic Unix time counts whole seconds since the epoch. Paste a value
        such as <code>1609459200</code> (2021-01-01 00:00:00 UTC) and read the
        human date instantly.
      </p>
      <h2>When to use seconds</h2>
      <p>
        Prefer seconds for POSIX tools, many SQL <code>UNIX_TIMESTAMP()</code>
        columns, and APIs that follow the original Unix convention.
      </p>
    </SeoPage>
  );
}
