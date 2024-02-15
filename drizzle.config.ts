import type { Config } from "drizzle-kit";

if (!process.env.DATABASE_URL) throw new Error("Database URL is missing!");

export default {
  schema: "./src/db/schema.ts",
  out: "./drizzle/migrations",
  driver: "pg",
  dbCredentials: {
    connectionString: process.env.DATABASE_URL,
  },
} satisfies Config;
