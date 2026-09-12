"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { CopyButton } from "./CopyButton";
import {
  dateToLocalParts,
  detectUnit,
  formatInZone,
  formatIso,
  fromMilliseconds,
  parseDateTimeLocal,
  toMilliseconds,
} from "@/lib/convert";
import { TIMEZONE_PRESETS } from "@/lib/timezones";

type Unit = "s" | "ms";

type Props = {
  /** Optional heading shown above the converter */
  heading?: string;
  /** Hint for which unit to emphasize initially */
  defaultUnit?: Unit;
};

export function TimestampConverter({
  heading = "Unix Timestamp Converter",
  defaultUnit = "s",
}: Props) {
  const [unit, setUnit] = useState<Unit>(defaultUnit);
  const [epochInput, setEpochInput] = useState("");
  const [dateInput, setDateInput] = useState("");
  const [timeInput, setTimeInput] = useState("");
  const [presetId, setPresetId] = useState("local");
  const [error, setError] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  const preset = useMemo(
    () => TIMEZONE_PRESETS.find((p) => p.id === presetId) ?? TIMEZONE_PRESETS[0],
    [presetId]
  );

  const syncFromMs = useCallback(
    (ms: number, nextUnit: Unit = unit) => {
      const d = new Date(ms);
      if (Number.isNaN(d.getTime())) {
        setError("Invalid timestamp");
        return;
      }
      setError(null);
      setEpochInput(String(fromMilliseconds(ms, nextUnit)));
      const parts = dateToLocalParts(d);
      setDateInput(parts.date);
      setTimeInput(parts.time);
    },
    [unit]
  );

  // Initialize with "now" after mount to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
    const now = Date.now();
    syncFromMs(now, defaultUnit);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleEpochChange(raw: string) {
    setEpochInput(raw);
    const trimmed = raw.trim();
    if (!trimmed) {
      setError(null);
      return;
    }
    const n = Number(trimmed);
    if (!Number.isFinite(n)) {
      setError("Enter a valid number");
      return;
    }
    const detected = detectUnit(n);
    const useUnit = detected;
    if (useUnit !== unit) setUnit(useUnit);
    const ms = toMilliseconds(n, useUnit);
    const d = new Date(ms);
    if (Number.isNaN(d.getTime())) {
      setError("Timestamp out of range");
      return;
    }
    setError(null);
    const parts = dateToLocalParts(d);
    setDateInput(parts.date);
    setTimeInput(parts.time);
  }

  function handleDateTimeChange(nextDate: string, nextTime: string) {
    setDateInput(nextDate);
    setTimeInput(nextTime);
    const d = parseDateTimeLocal(nextDate, nextTime);
    if (!d) {
      if (nextDate && nextTime) setError("Invalid date/time");
      return;
    }
    setError(null);
    setEpochInput(String(fromMilliseconds(d.getTime(), unit)));
  }

  function handleUnitToggle(next: Unit) {
    const n = Number(epochInput);
    if (Number.isFinite(n) && epochInput.trim()) {
      const ms = toMilliseconds(n, unit);
      setUnit(next);
      setEpochInput(String(fromMilliseconds(ms, next)));
    } else {
      setUnit(next);
    }
  }

  function handleNow() {
    syncFromMs(Date.now(), unit);
  }

  const currentMs = useMemo(() => {
    const n = Number(epochInput);
    if (!Number.isFinite(n) || !epochInput.trim()) return null;
    return toMilliseconds(n, unit);
  }, [epochInput, unit]);

  const currentDate = currentMs !== null ? new Date(currentMs) : null;
  const validDate =
    currentDate && !Number.isNaN(currentDate.getTime()) ? currentDate : null;

  const localStr = validDate
    ? formatInZone(validDate, "local", { timeZoneName: "short" })
    : "—";
  const utcStr = validDate
    ? formatInZone(validDate, "UTC", { timeZoneName: "short" })
    : "—";
  const presetStr =
    validDate && preset
      ? formatInZone(validDate, preset.tz, { timeZoneName: "short" })
      : "—";
  const isoStr = validDate ? formatIso(validDate) : "—";
  const secStr =
    validDate !== null ? String(Math.floor(validDate.getTime() / 1000)) : "—";
  const msStr = validDate !== null ? String(validDate.getTime()) : "—";

  if (!mounted) {
    return (
      <div className="mx-auto w-full max-w-2xl rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-700 dark:bg-zinc-900">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
          {heading}
        </h2>
        <p className="mt-2 text-sm text-zinc-500">Loading converter…</p>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-2xl rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-700 dark:bg-zinc-900">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
          {heading}
        </h2>
        <button
          type="button"
          onClick={handleNow}
          className="rounded-lg bg-emerald-600 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition hover:bg-emerald-500"
        >
          Now
        </button>
      </div>

      <div className="mt-6 space-y-5">
        <div>
          <div className="mb-1.5 flex items-center justify-between">
            <label
              htmlFor="epoch"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Unix timestamp
            </label>
            <div className="flex rounded-lg border border-zinc-300 p-0.5 dark:border-zinc-600">
              <button
                type="button"
                onClick={() => handleUnitToggle("s")}
                className={`rounded-md px-2.5 py-0.5 text-xs font-medium ${
                  unit === "s"
                    ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900"
                    : "text-zinc-600 dark:text-zinc-400"
                }`}
              >
                Seconds
              </button>
              <button
                type="button"
                onClick={() => handleUnitToggle("ms")}
                className={`rounded-md px-2.5 py-0.5 text-xs font-medium ${
                  unit === "ms"
                    ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900"
                    : "text-zinc-600 dark:text-zinc-400"
                }`}
              >
                Milliseconds
              </button>
            </div>
          </div>
          <div className="flex gap-2">
            <input
              id="epoch"
              type="text"
              inputMode="numeric"
              value={epochInput}
              onChange={(e) => handleEpochChange(e.target.value)}
              className="w-full rounded-lg border border-zinc-300 bg-zinc-50 px-3 py-2 font-mono text-sm text-zinc-900 outline-none ring-emerald-500 focus:ring-2 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-100"
              placeholder={unit === "s" ? "1700000000" : "1700000000000"}
              autoComplete="off"
            />
            {epochInput && <CopyButton value={epochInput} />}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label
              htmlFor="date"
              className="mb-1.5 block text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Date (local)
            </label>
            <input
              id="date"
              type="date"
              value={dateInput}
              onChange={(e) => handleDateTimeChange(e.target.value, timeInput)}
              className="w-full rounded-lg border border-zinc-300 bg-zinc-50 px-3 py-2 text-sm text-zinc-900 outline-none ring-emerald-500 focus:ring-2 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-100"
            />
          </div>
          <div>
            <label
              htmlFor="time"
              className="mb-1.5 block text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Time (local)
            </label>
            <input
              id="time"
              type="time"
              step={1}
              value={timeInput}
              onChange={(e) => handleDateTimeChange(dateInput, e.target.value)}
              className="w-full rounded-lg border border-zinc-300 bg-zinc-50 px-3 py-2 text-sm text-zinc-900 outline-none ring-emerald-500 focus:ring-2 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-100"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="tz"
            className="mb-1.5 block text-sm font-medium text-zinc-700 dark:text-zinc-300"
          >
            Timezone preset
          </label>
          <select
            id="tz"
            value={presetId}
            onChange={(e) => setPresetId(e.target.value)}
            className="w-full rounded-lg border border-zinc-300 bg-zinc-50 px-3 py-2 text-sm text-zinc-900 outline-none ring-emerald-500 focus:ring-2 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-100"
          >
            {TIMEZONE_PRESETS.map((p) => (
              <option key={p.id} value={p.id}>
                {p.label}
                {p.tz !== "local" ? ` (${p.tz})` : ""}
              </option>
            ))}
          </select>
        </div>

        {error && (
          <p className="text-sm text-red-600 dark:text-red-400" role="alert">
            {error}
          </p>
        )}

        <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-700 dark:bg-zinc-800/60">
          <h3 className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">
            Results
          </h3>
          <dl className="mt-3 space-y-3 text-sm">
            <ResultRow label="Seconds" value={secStr} />
            <ResultRow label="Milliseconds" value={msStr} />
            <ResultRow label="Local" value={localStr} />
            <ResultRow label="UTC" value={utcStr} />
            <ResultRow label={`Preset (${preset.label})`} value={presetStr} />
            <ResultRow label="ISO 8601" value={isoStr} mono />
          </dl>
        </div>
      </div>
    </div>
  );
}

function ResultRow({
  label,
  value,
  mono,
}: {
  label: string;
  value: string;
  mono?: boolean;
}) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-2">
      <dt className="text-zinc-500 dark:text-zinc-400">{label}</dt>
      <dd className="flex items-center gap-2">
        <span
          className={`text-zinc-900 dark:text-zinc-100 ${mono ? "font-mono text-xs sm:text-sm" : ""}`}
        >
          {value}
        </span>
        {value !== "—" && <CopyButton value={value} />}
      </dd>
    </div>
  );
}
