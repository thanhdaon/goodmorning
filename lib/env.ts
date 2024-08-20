import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    MYSQL_URL: z.string().url(),
    MYSQL_PROXY_QUERY_ENDPOINT: z.string().url(),
    MYSQL_PROXY_MIGRATE_ENDPOINT: z.string().url(),
    MYSQL_PROXY_BASIC_AUTH_TOKEN: z.string(),
  },
  client: {},
  experimental__runtimeEnv: {},
});
