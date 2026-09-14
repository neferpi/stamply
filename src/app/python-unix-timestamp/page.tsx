import { SeoPage } from "@/components/SeoPage";
import { buildPageMetadata } from "@/lib/metadata";

const title = "Python Unix Timestamp Converter";
const description =
  "Convert Python time.time() and datetime timestamps. Decode epoch seconds from Python apps into readable dates.";

export const metadata = buildPageMetadata({
  title,
  description,
  path: "/python-unix-timestamp",
});

export default function Page() {
  return (
    <SeoPage
      title={title}
      description={description}
    >
      <h2>Python epoch values</h2>
      <p>
        Python&apos;s <code>time.time()</code> returns seconds since the epoch
        (often with a fractional part). Paste the integer seconds here to see the
        matching date in UTC and local time.
      </p>
      <h2>Related Python APIs</h2>
      <ul>
        <li><code>datetime.datetime.utcfromtimestamp(ts)</code></li>
        <li><code>datetime.fromtimestamp(ts, tz=timezone.utc)</code></li>
        <li><code>calendar.timegm(...)</code> for the reverse direction</li>
      </ul>
    </SeoPage>
  );
}
