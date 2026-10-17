import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const staffs = sqliteTable("staffs", {
	id: text()
		.primaryKey()
		.$defaultFn(() => crypto.randomUUID()),
	name: text().notNull(),
	phoneNumber: int().notNull(),
	image: text(),
});

export const events = sqliteTable("events", {
	id: text()
		.primaryKey()
		.$defaultFn(() => crypto.randomUUID()),
	staff: text().references(() => staffs.id, { onDelete: "set null" }),
});
