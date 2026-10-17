import { env } from "cloudflare:workers";
import { drizzle } from "drizzle-orm/d1";

export interface Env {
	catering_backend_db: D1Database;
}

export const db = drizzle(env.catering_backend_db);
