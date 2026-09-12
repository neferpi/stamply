export const SITE_URL = "https://stamply.app";
export const SITE_NAME = "Stamply";
export const SITE_DESCRIPTION =
  "Free Unix timestamp converter. Convert epoch seconds and milliseconds to human-readable dates in UTC and local time.";

export const SEO_PAGES = [
  {
    path: "/unix-timestamp-converter",
    title: "Unix Timestamp Converter",
    description:
      "Convert Unix timestamps to dates and dates to Unix epochs instantly. Seconds and milliseconds, UTC and local time.",
  },
  {
    path: "/epoch-to-date",
    title: "Epoch to Date Converter",
    description:
      "Convert Unix epoch time to human-readable dates. Supports seconds and milliseconds with timezone presets.",
  },
  {
    path: "/milliseconds-to-date",
    title: "Milliseconds to Date Converter",
    description:
      "Convert Unix timestamps in milliseconds to readable dates. Perfect for JavaScript Date.getTime() values.",
  },
  {
    path: "/utc-to-local-time",
    title: "UTC to Local Time Converter",
    description:
      "Convert UTC timestamps to your local timezone. See both UTC and local datetime side by side.",
  },
  {
    path: "/timestamp-to-iso",
    title: "Timestamp to ISO 8601 Converter",
    description:
      "Convert Unix timestamps to ISO 8601 format. Get RFC 3339 compatible date strings for APIs and logs.",
  },
] as const;
