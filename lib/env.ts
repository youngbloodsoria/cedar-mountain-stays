// lib/env.ts
import "server-only";

function clean(value: string): string {
  return value.trim().replace(/^['"]|['"]$/g, "");
}

function required(name: string): string {
  const v = process.env[name];
  if (!v || v.trim().length === 0) {
    throw new Error(
      `Missing required environment variable: ${name}. Add it to .env.local (local) or Vercel Env Vars (prod).`
    );
  }
  return clean(v);
}

export const TRACK_ENV = {
  baseUrl: required("TRACK_API_BASE_URL"),
  apiKey: required("TRACK_API_KEY"),
  apiSecret: required("TRACK_API_SECRET"),
} as const;
