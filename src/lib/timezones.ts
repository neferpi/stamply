export type TimezonePreset = {
  id: string;
  label: string;
  /** IANA timezone, or "local" for browser local */
  tz: string;
};

export const TIMEZONE_PRESETS: TimezonePreset[] = [
  { id: "local", label: "Local", tz: "local" },
  { id: "utc", label: "UTC", tz: "UTC" },
  { id: "est", label: "Eastern (US)", tz: "America/New_York" },
  { id: "cst", label: "Central (US)", tz: "America/Chicago" },
  { id: "mst", label: "Mountain (US)", tz: "America/Denver" },
  { id: "pst", label: "Pacific (US)", tz: "America/Los_Angeles" },
  { id: "gmt", label: "London", tz: "Europe/London" },
  { id: "cet", label: "Berlin", tz: "Europe/Berlin" },
  { id: "ist", label: "India", tz: "Asia/Kolkata" },
  { id: "jst", label: "Tokyo", tz: "Asia/Tokyo" },
  { id: "aest", label: "Sydney", tz: "Australia/Sydney" },
];
