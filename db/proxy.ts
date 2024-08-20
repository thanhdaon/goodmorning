import { RemoteCallback } from "drizzle-orm/mysql-proxy";
import { ProxyMigrator } from "drizzle-orm/mysql-proxy/migrator";
import { unstable_noStore } from "next/cache";
import { env } from "~/lib/env";

export const queryFn: RemoteCallback = async (sql, params, method) => {
  unstable_noStore();

  const response = await fetch(env.MYSQL_PROXY_QUERY_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${env.MYSQL_PROXY_BASIC_AUTH_TOKEN}`,
    },
    body: JSON.stringify({ sql, params, method }),
  });

  const json = await response.json();

  if (json.error) {
    throw new Error(json.error);
  }

  if (json.name === "Error") {
    throw new Error(json.message);
  }

  return { rows: json };
};

export const migrateFn: ProxyMigrator = async (queries) => {
  unstable_noStore();

  const response = await fetch(env.MYSQL_PROXY_MIGRATE_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${env.MYSQL_PROXY_BASIC_AUTH_TOKEN}`,
    },
    body: JSON.stringify({ queries }),
  });

  const json = await response.json();

  if (json.error) {
    throw new Error(json.error);
  }

  if (json.name === "Error") {
    throw new Error(json.message);
  }
};
