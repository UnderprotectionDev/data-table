"use server";

import { db } from "@/db";
import { dataEntry, insertDataEntrySchema } from "@/db/schema";
import { actionClient } from "@/lib/safe-action";
import { flattenValidationErrors } from "next-safe-action";
import { z } from "zod";
import { ilike, or } from "drizzle-orm";

export async function getDataEntry() {
  const data = await db
    .select({
      id: dataEntry.id,
      textType: dataEntry.textType,
      varcharType: dataEntry.varcharType,
      integerType: dataEntry.integerType,
      decimalType: dataEntry.decimalType,
      booleanType: dataEntry.booleanType,
      enumType: dataEntry.enumType,
      created_at: dataEntry.created_at,
    })
    .from(dataEntry);
  return data;
}

export const saveDataEntryAction = actionClient
  .metadata({
    actionName: "saveDataEntry",
  })

  .schema(insertDataEntrySchema, {
    handleValidationErrorsShape: async (ve) =>
      flattenValidationErrors(ve).fieldErrors,
  })
  .stateAction(
    async ({
      parsedInput: {
        textType,
        varcharType,
        integerType,
        decimalType,
        booleanType,
        enumType,
      },
    }: {
      parsedInput: z.infer<typeof insertDataEntrySchema>;
    }) => {
      await db
        .insert(dataEntry)
        .values({
          textType,
          varcharType,
          integerType,
          decimalType,
          booleanType,
          enumType,
        })
        .returning();
    }
  );

export async function searchTable(query: string) {
  const data = await db
    .select()
    .from(dataEntry)
    .where(
      or(
        ilike(dataEntry.textType, `%${query}%`),
        ilike(dataEntry.varcharType, `%${query}%`)
      )
    );

  return data;
}
