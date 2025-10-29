import { Redis } from "@upstash/redis"

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
})

export async function GET() {
  try {
    // Увеличиваем счетчик просмотров на 1
    const views = await redis.incr("page:views")

    return Response.json({ views })
  } catch (error) {
    console.error("[v0] Redis error:", error)
    return Response.json({ error: "Failed to get views" }, { status: 500 })
  }
}
