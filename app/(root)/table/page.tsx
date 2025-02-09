import { getDataEntry, searchTable } from "@/actions/data-entry.action";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Form from "next/form";

export default async function TableManager({
  searchParams,
}: {
  searchParams: Promise<{ query: string }>;
}) {
  const data = (await searchParams).query
    ? await searchTable((await searchParams).query)
    : await getDataEntry();

  return (
    <div className="p-6 space-y-4">
      <div className="flex items-center justify-between">
        <Form action="/table" className="flex gap-2 w-full">
          <Input
            name="query"
            className="flex-1 px-3 py-2 border rounded-md"
            placeholder="Search in text and variable text..."
            defaultValue={(await searchParams).query}
          />
          <Button type="submit">Search</Button>
        </Form>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Text Content</TableHead>
              <TableHead>Variable Text</TableHead>
              <TableHead>True/False Value</TableHead>
              <TableHead>Number Value</TableHead>
              <TableHead>Decimal Value</TableHead>
              <TableHead>Enum Type</TableHead>
              <TableHead>Creation Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.textType}</TableCell>
                <TableCell>{item.varcharType}</TableCell>
                <TableCell>{item.booleanType?.toString()}</TableCell>
                <TableCell>{item.integerType}</TableCell>
                <TableCell>{item.decimalType}</TableCell>
                <TableCell>{item.enumType}</TableCell>
                <TableCell>
                  {item.created_at
                    ? new Date(item.created_at).toLocaleDateString()
                    : "N/A"}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
