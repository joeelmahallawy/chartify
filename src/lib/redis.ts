import { createClient } from "redis";

export const client = createClient({
  url: process.env.NEXT_PUBLIC_REDIS_CONNECTION_URL,
});
