import { db } from "@/db";
import { dataEntry } from "@/db/schema";

export async function getDataEntry() {
  await db.select().from(dataEntry);
}
