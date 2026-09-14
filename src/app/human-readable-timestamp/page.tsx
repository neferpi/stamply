import { SeoPage } from "@/components/SeoPage";
import { buildPageMetadata } from "@/lib/metadata";

const title = "Human Readable Timestamp Converter";
const description =
  "Turn Unix timestamps into human-readable dates. Clear local and UTC formatting for logs and support tickets.";

export const metadata = buildPageMetadata({
  title,
  description,
  path: "/human-readable-timestamp",
});

export default function Page() {
  return (
    <SeoPage
      title={title}
      description={description}
    >
      <h2>Make timestamps readable</h2>
      <p>
        Raw epoch integers are hard to skim. Stamply formats them as friendly
        dates so you can explain an incident timeline or verify a booking window
        at a glance.
      </p>
      <h2>Copy what you need</h2>
      <ul>
        <li>Local formatted datetime</li>
        <li>UTC formatted datetime</li>
        <li>ISO 8601 for machines</li>
      </ul>
    </SeoPage>
  );
}
