import { Redis } from "@upstash/redis";
import { NextResponse } from "next/server";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

export async function POST(
  _req: Request,
  { params }: { params: { slug: string } }
) {
  if (process.env.NODE_ENV === "development") {
    return NextResponse.json({ views: 0 });
  }
  const views = await redis.incr(`blog:views:${params.slug}`);
  return NextResponse.json({ views });
}

export async function GET(
  _req: Request,
  { params }: { params: { slug: string } }
) {
  if (process.env.NODE_ENV === "development") {
    return NextResponse.json({ views: 0 });
  }
  const views = (await redis.get<number>(`blog:views:${params.slug}`)) ?? 0;
  return NextResponse.json({ views });
}
