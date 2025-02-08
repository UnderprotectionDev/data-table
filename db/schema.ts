import {
  pgTable,
  uuid,
  text,
  decimal,
  boolean,
  timestamp,
  varchar,
  integer,
  date,
  pgEnum,
} from "drizzle-orm/pg-core";
import {
  createInsertSchema,
  createSelectSchema,
  createUpdateSchema,
} from "drizzle-zod";

export const ENUM_TYPE = pgEnum("enum_type", ["enum1", "enum2", "enum3"]);

export const dataEntry = pgTable("data_entry", {
  id: uuid("id").notNull().primaryKey().defaultRandom(),
  textType: text("text_type"),
  varcharType: varchar("varchar_type").unique().notNull(),
  booleanType: boolean("boolean_type").notNull().default(true),
  integerType: integer("integer_type").notNull(),
  decimalType: decimal("decimal_type", { precision: 10, scale: 2 }).notNull(),
  enumType: ENUM_TYPE("enum_type").default("enum1"),
  dateType: date("date_type").defaultNow(),

  created_at: timestamp("created_at", { withTimezone: true }).defaultNow(),
  updated_at: timestamp("updated_at", { withTimezone: true }).defaultNow(),
});

export const insertDataEntrySchema = createInsertSchema(dataEntry);
export const updateDataEntrySchema = createUpdateSchema(dataEntry);
export const selectDataEntrySchema = createSelectSchema(dataEntry);
