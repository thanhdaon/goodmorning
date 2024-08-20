import { defineConfig } from "drizzle-kit";
import { env } from "~/lib/env";

export default defineConfig({
  schema: "db/schema.ts",
  out: "db/drizzle",
  dialect: "mysql",
  dbCredentials: {
    url: env.MYSQL_URL,
  },
});
