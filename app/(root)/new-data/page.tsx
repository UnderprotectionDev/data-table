"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ENUM_TYPE, insertDataEntrySchema } from "@/db/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function NewData() {
  const form = useForm<z.infer<typeof insertDataEntrySchema>>({
    resolver: zodResolver(insertDataEntrySchema),
    defaultValues: {
      textType: "",
      varcharType: "",
      booleanType: true,
      integerType: 0,
      decimalType: "0",
      enumType: "enum1",
    },
  });

  function onSubmit(values: z.infer<typeof insertDataEntrySchema>) {
    console.log(values);
  }

  return (
    <div className="flex items-center justify-center min-h-screen w-screen">
      <Card>
        <CardHeader>
          <CardTitle>New Data</CardTitle>

          <CardDescription>
            Create a new data entry for the system.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="textType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Text Type</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Text Type"
                        {...field}
                        value={field.value || ""}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="varcharType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Varchar Type</FormLabel>

                    <FormControl>
                      <Input
                        placeholder="Varchar Type"
                        {...field}
                        value={field.value}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="booleanType"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>Boolean Type</FormLabel>
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="integerType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Integer Type</FormLabel>

                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Integer Type"
                        {...field}
                        onChange={(e) => field.onChange(Number(e.target.value))}
                        value={field.value}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="decimalType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Decimal Type</FormLabel>

                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Decimal Type"
                        step="0.01"
                        {...field}
                        value={field.value ?? ""}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="enumType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Enum Type</FormLabel>

                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value ?? "enum1"}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a verified email to display" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {ENUM_TYPE.enumValues.map((enumValue: string) => (
                          <SelectItem key={enumValue} value={enumValue}>
                            {enumValue}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full">
                Submit
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
