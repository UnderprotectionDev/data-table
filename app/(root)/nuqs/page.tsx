import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Form from "next/form";

export default function NuqsPage() {
  return (
    <div className="p-6 space-y-4">
      <div className="grid grid-cols-5 gap-4 items-center justify-between">
        <Form action="/nuqs" className="flex gap-2 w-full">
          <Input
            name="query"
            className="flex-1 px-3 py-2 border rounded-md"
            placeholder="Search in text and variable text..."
          />
          <Button type="submit">Search</Button>
        </Form>
        <Form action="/nuqs" className="flex gap-2 w-full">
          <Input
            name="query"
            className="flex-1 px-3 py-2 border rounded-md"
            placeholder="Search in text and variable text..."
          />
          <Button type="submit">Search</Button>
        </Form>
        <Form action="/nuqs" className="flex gap-2 w-full">
          <Input
            name="query"
            className="flex-1 px-3 py-2 border rounded-md"
            placeholder="Search in text and variable text..."
          />
          <Button type="submit">Search</Button>
        </Form>
        <Form action="/nuqs" className="flex gap-2 w-full">
          <Input
            name="query"
            className="flex-1 px-3 py-2 border rounded-md"
            placeholder="Search in text and variable text..."
          />
          <Button type="submit">Search</Button>
        </Form>
        <Form action="/nuqs" className="flex gap-2 w-full">
          <Input
            name="query"
            className="flex-1 px-3 py-2 border rounded-md"
            placeholder="Search in text and variable text..."
          />
          <Button type="submit">Search</Button>
        </Form>
      </div>
    </div>
  );
}
