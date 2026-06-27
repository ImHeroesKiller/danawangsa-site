import { RateLimiterMemory, RateLimiterRedis } from "rate-limiter-flexible";
import Redis from "ioredis";

import { IDA_CONFIG } from "@/lib/ida/config";

type RateLimiterInstance = RateLimiterMemory | RateLimiterRedis;

let rateLimiter: RateLimiterInstance | null = null;

function createRateLimiter(): RateLimiterInstance {
  const redisUrl = process.env.REDIS_URL;

  if (redisUrl) {
    const redis = new Redis(redisUrl, {
      enableOfflineQueue: false,
      maxRetriesPerRequest: 1,
    });

    return new RateLimiterRedis({
      storeClient: redis,
      keyPrefix: "ida_chat_rl",
      points: IDA_CONFIG.rateLimitPoints,
      duration: IDA_CONFIG.rateLimitDurationSec,
    });
  }

  return new RateLimiterMemory({
    points: IDA_CONFIG.rateLimitPoints,
    duration: IDA_CONFIG.rateLimitDurationSec,
  });
}

function getRateLimiter(): RateLimiterInstance {
  if (!rateLimiter) {
    rateLimiter = createRateLimiter();
  }

  return rateLimiter;
}

export class IdaRateLimitError extends Error {
  retryAfterSec: number;

  constructor(retryAfterSec: number) {
    super("Rate limit exceeded.");
    this.name = "IdaRateLimitError";
    this.retryAfterSec = retryAfterSec;
  }
}

export async function enforceIdaRateLimit(key: string): Promise<void> {
  try {
    await getRateLimiter().consume(key, 1);
  } catch (error: unknown) {
    if (error && typeof error === "object" && "msBeforeNext" in error) {
      const msBeforeNext = Number((error as { msBeforeNext: number }).msBeforeNext);
      throw new IdaRateLimitError(Math.ceil(msBeforeNext / 1000));
    }

    throw error;
  }
}

export function buildRateLimitKey(options: {
  ip: string | null;
  sessionId?: string;
}): string {
  const ip = options.ip ?? "unknown";
  const session = options.sessionId ?? "anonymous";
  return `${ip}:${session}`;
}

export function getClientIp(request: Request): string | null {
  const forwarded = request.headers.get("x-forwarded-for");

  if (forwarded) {
    return forwarded.split(",")[0]?.trim() ?? null;
  }

  return request.headers.get("x-real-ip");
}