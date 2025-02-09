import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Form from "next/form";
import { DataTable } from "./data-table";

export default async function DataTablePage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const { searchText } = await searchParams;

  return (
    <div className="p-6 space-y-4">
      <div className="flex items-center justify-between">
        {!searchText && (
          <Form action="/datatable" className="flex gap-2 items-center">
            <Input
              name="searchText"
              type="text"
              placeholder="Search Data"
              className="w-full"
              defaultValue={searchText}
            />
            <Button type="submit">Search</Button>
          </Form>
        )}
      </div>
      <div>
        <DataTable />
      </div>
    </div>
  );
}
