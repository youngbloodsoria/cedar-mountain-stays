// lib/trackClient.ts
import "server-only";
import { TRACK_ENV } from "./env";

type TrackFetchOptions = {
  method?: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  // For POST/PUT/PATCH JSON bodies
  json?: unknown;
  // Extra headers if we need them later
  headers?: Record<string, string>;
};

/**
 * Server-side fetch wrapper for Track.
 * Track PMS uses HTTP Basic Auth with the API key as username and
 * API secret as password. No secrets ever go to the browser.
 */
export async function trackFetch<T>(
  path: string,
  opts: TrackFetchOptions = {}
): Promise<T> {
  const base = TRACK_ENV.baseUrl.replace(/\/+$/, "");
  const basePath = new URL(base).pathname.replace(/\/+$/, "");
  const requestedPath = path.startsWith("/") ? path : `/${path}`;
  const p =
    basePath && requestedPath.startsWith(`${basePath}/`)
      ? requestedPath.slice(basePath.length)
      : requestedPath;
  const url = path.startsWith("http") ? path : `${base}${p}`;

  const headers: Record<string, string> = {
    Accept: "application/json",
    ...opts.headers,
    Authorization: `Basic ${Buffer.from(
      `${TRACK_ENV.apiKey}:${TRACK_ENV.apiSecret}`
    ).toString("base64")}`,
  };

  let body: string | undefined;
  if (opts.json !== undefined) {
    headers["Content-Type"] = "application/json";
    body = JSON.stringify(opts.json);
  }

  const res = await fetch(url, {
    method: opts.method ?? "GET",
    headers,
    body,
    // Avoid caching while we’re wiring auth/data shape
    cache: "no-store",
  });

  if (!res.ok) {
    // Never log secrets. Keep errors high-signal.
    const text = await res.text().catch(() => "");
    throw new Error(
      `Track API error ${res.status} ${res.statusText} for ${p}${
        text ? ` — ${text.slice(0, 300)}` : ""
      }`
    );
  }

  return (await res.json()) as T;
}
