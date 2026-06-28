import { NextResponse } from "next/server";
import { getFeaturedProperties } from "@/lib/trackProperties";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const properties = await getFeaturedProperties(6);

    return NextResponse.json(
      {
        ok: true,
        properties,
      },
      {
        headers: {
          "Cache-Control": "s-maxage=300, stale-while-revalidate=1800",
        },
      }
    );
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unable to load properties";

    return NextResponse.json(
      {
        ok: false,
        error: message,
        properties: [],
      },
      { status: 502 }
    );
  }
}
