import { SeoPage } from "@/components/SeoPage";
import { buildPageMetadata } from "@/lib/metadata";

const title = "MySQL UNIX_TIMESTAMP Converter";
const description =
  "Convert MySQL UNIX_TIMESTAMP() values to dates. Decode epoch seconds from MySQL and MariaDB columns.";

export const metadata = buildPageMetadata({
  title,
  description,
  path: "/mysql-unix-timestamp",
});

export default function Page() {
  return (
    <SeoPage
      title={title}
      description={description}
    >
      <h2>MySQL epoch columns</h2>
      <p>
        MySQL&apos;s <code>UNIX_TIMESTAMP()</code> and{' '}
        <code>FROM_UNIXTIME()</code> work in seconds. Paste a column value to
        verify what date was stored, or convert a date back to an epoch for a
        query filter.
      </p>
      <h2>Example</h2>
      <p>
        <code>SELECT FROM_UNIXTIME(1700000000);</code> — or paste{' '}
        <code>1700000000</code> into Stamply for an instant check.
      </p>
    </SeoPage>
  );
}
