import { int, mysqlTable, text } from "drizzle-orm/mysql-core";

export const goodmornings = mysqlTable("good_morning", {
  id: int("id", { unsigned: true }).primaryKey().autoincrement(),
  content: text("content").notNull(),
});
