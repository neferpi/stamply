import { SeoPage } from "@/components/SeoPage";
import { buildPageMetadata } from "@/lib/metadata";

const title = "Unix Timestamp Now";
const description =
  "Get Unix timestamp now — current epoch seconds and milliseconds. Refresh anytime with the Now button.";

export const metadata = buildPageMetadata({
  title,
  description,
  path: "/unix-timestamp-now",
});

export default function Page() {
  return (
    <SeoPage
      title={title}
      description={description}
    >
      <h2>Unix timestamp right now</h2>
      <p>
        Click <strong>Now</strong> to capture the current epoch. Copy seconds for
        POSIX-style APIs or milliseconds for JavaScript and Java.
      </p>
      <h2>Skew checks</h2>
      <p>
        Compare the value with another machine or container to spot clock skew
        before it breaks auth tokens or distributed locks.
      </p>
    </SeoPage>
  );
}
