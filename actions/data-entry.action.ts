"use server";

import { db } from "@/db";
import { dataEntry, insertDataEntrySchema } from "@/db/schema";
import { actionClient } from "@/lib/safe-action";
import { flattenValidationErrors } from "next-safe-action";
import { z } from "zod";

export async function getDataEntry() {
  await db.select().from(dataEntry);
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
          varcharType,
          integerType,
          decimalType,
          booleanType,
          enumType,
          textType,
        })
        .returning();
    }
  );
