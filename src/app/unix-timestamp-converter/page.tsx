import { SeoPage } from "@/components/SeoPage";
import { buildPageMetadata } from "@/lib/metadata";

const title = "Unix Timestamp Converter";
const description =
  "Convert Unix timestamps to dates and dates to Unix epochs instantly. Seconds and milliseconds, UTC and local time.";

export const metadata = buildPageMetadata({
  title,
  description,
  path: "/unix-timestamp-converter",
});

export default function Page() {
  return (
    <SeoPage title={title} description={description}>
      <h2>What is a Unix timestamp?</h2>
      <p>
        A Unix timestamp (also called epoch time) is the number of seconds — or
        sometimes milliseconds — that have elapsed since 00:00:00 UTC on 1
        January 1970. It is the standard way servers, databases, and APIs store
        moments in time without timezone ambiguity.
      </p>
      <h2>How to use this converter</h2>
      <ul>
        <li>Paste an epoch value to see the human-readable date.</li>
        <li>Pick a date and time to get the corresponding Unix timestamp.</li>
        <li>Toggle between seconds and milliseconds.</li>
        <li>Use timezone presets to preview the same instant in other zones.</li>
        <li>Hit <strong>Now</strong> to load the current time instantly.</li>
      </ul>
    </SeoPage>
  );
}
