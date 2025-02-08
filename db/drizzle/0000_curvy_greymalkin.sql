CREATE TYPE "public"."enum_type" AS ENUM('enum1', 'enum2', 'enum3');--> statement-breakpoint
CREATE TABLE "data_entry" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"text_type" text,
	"varchar_type" varchar NOT NULL,
	"boolean_type" boolean DEFAULT true NOT NULL,
	"integer_type" integer NOT NULL,
	"decimal_type" numeric(10, 2) NOT NULL,
	"enum_type" "enum_type" DEFAULT 'enum1',
	"date_type" date DEFAULT now(),
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now(),
	CONSTRAINT "data_entry_varchar_type_unique" UNIQUE("varchar_type")
);
