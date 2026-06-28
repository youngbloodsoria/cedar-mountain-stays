import { NextResponse } from "next/server";
import { getFeaturedProperties } from "@/lib/trackProperties";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const limitParam = searchParams.get("limit");
    const imageParam = searchParams.get("images");
    const limit = limitParam === "all" ? 80 : Number(limitParam ?? 6);
    const imageLimit = Number(imageParam ?? 1);
    const properties = await getFeaturedProperties(
      Number.isFinite(limit) ? limit : 6,
      Number.isFinite(imageLimit) ? imageLimit : 1
    );

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
