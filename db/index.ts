import { drizzle } from "drizzle-orm/mysql-proxy";
import { queryFn } from "~/db/proxy";
import { goodmornings } from "~/db/schema";

export const db = drizzle(queryFn, { schema: { goodmornings } });
