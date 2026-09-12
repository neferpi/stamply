/** Detect whether a numeric epoch is more likely ms or seconds. */
export function detectUnit(n: number): "s" | "ms" {
  // Timestamps after year ~2001 in ms are >= 1e12; in seconds until year ~2286 are < 1e11
  const abs = Math.abs(n);
  if (abs >= 1e12) return "ms";
  if (abs < 1e11) return "s";
  // Ambiguous mid range — prefer seconds for classic Unix timestamps
  return "s";
}

export function toMilliseconds(value: number, unit: "s" | "ms"): number {
  return unit === "s" ? value * 1000 : value;
}

export function fromMilliseconds(ms: number, unit: "s" | "ms"): number {
  return unit === "s" ? Math.floor(ms / 1000) : ms;
}

export function formatInZone(
  date: Date,
  timeZone: string,
  options?: Intl.DateTimeFormatOptions
): string {
  const opts: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
    ...options,
  };
  if (timeZone !== "local") {
    opts.timeZone = timeZone;
  }
  return new Intl.DateTimeFormat("en-CA", opts).format(date);
}

export function formatIso(date: Date): string {
  return date.toISOString();
}

export function parseDateTimeLocal(
  dateStr: string,
  timeStr: string
): Date | null {
  if (!dateStr || !timeStr) return null;
  // Interpret as local wall clock
  const iso = `${dateStr}T${timeStr.length === 5 ? `${timeStr}:00` : timeStr}`;
  const d = new Date(iso);
  return Number.isNaN(d.getTime()) ? null : d;
}

export function pad2(n: number): string {
  return String(n).padStart(2, "0");
}

export function dateToLocalParts(date: Date): { date: string; time: string } {
  const y = date.getFullYear();
  const m = pad2(date.getMonth() + 1);
  const d = pad2(date.getDate());
  const h = pad2(date.getHours());
  const min = pad2(date.getMinutes());
  const s = pad2(date.getSeconds());
  return { date: `${y}-${m}-${d}`, time: `${h}:${min}:${s}` };
}
