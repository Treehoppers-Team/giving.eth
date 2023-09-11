import React from "react";
import { cn } from "@/lib/utils";
import { ReloadIcon } from "@radix-ui/react-icons";
import { Check, ChevronsUpDown } from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm, useFieldArray } from "react-hook-form";

import { campaignCategoriesStub } from "@/stubs/campaignCategories";
import { suppliersStub } from "@/stubs/suppliers";
import Link from "next/link";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  name: z.string().nonempty({ message: "Campaign name is required" }),
  category: z.string().nonempty({ message: "Category is required" }),
  endDate: z.string().refine((value) => !isNaN(parseInt(value)), {
    message: "End Date is required",
  }),
  description: z.string().nonempty({ message: "Description is required" }),
  targetAmount: z
    .string(),
  commitments: z
    .array(
      z.object({
        supplier: z
          .string()
          .refine((value) => suppliersStub.map((s) => s.value).includes(value)), // Validate supplier value
        percentage: z
          .number()
          .int()
          .min(0, { message: "Percentage must be a positive integer" })
          .max(100, { message: "Percentage cannot exceed 100%" }),
      })
    )
    .refine(
      (value) =>
        value.reduce(
          (total, commitment) => total + commitment.percentage,
          0
        ) === 100
    ),
});

const index = () => {
  const [categoryIsOpen, setCategoryOpen] = React.useState(false);
  // form definition
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      category: "",
      endDate: "1", // Initialize with null value for date fields
      description: "",
      targetAmount: "0",
      commitments: [{ supplier: "", percentage: 0 }], // Initialize with the first supplier
    },
    mode: "all",
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "commitments",
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Layout>
      <div className="pt-16 w-full flex justify-center">
        <div className="flex flex-col gap-4 w-[45vh]">
          <h1 className="text-4xl font-bold mb-4">Create Campaign</h1>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 ">
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Campaign Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Rainforest Restoration"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Your organisation's registered name.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>Category</FormLabel>
                      <Popover
                        open={categoryIsOpen}
                        onOpenChange={setCategoryOpen}
                      >
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant="outline"
                              role="combobox"
                              className={cn(
                                "justify-between",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value
                                ? campaignCategoriesStub.find(
                                    (category) => category.value === field.value
                                  )?.label
                                : "Select category"}
                              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-full p-0">
                          <Command>
                            <CommandInput placeholder="Search categories..." />
                            <CommandEmpty>No category found.</CommandEmpty>
                            <CommandGroup className="max-h-60 overflow-y-auto">
                              {campaignCategoriesStub.map((category) => (
                                <CommandItem
                                  value={category.label}
                                  key={category.value}
                                  onSelect={() => {
                                    form.setValue("category", category.value);
                                    setCategoryOpen(false);
                                  }}
                                >
                                  <Check
                                    className={cn(
                                      "mr-2 h-4 w-4",
                                      category.value === field.value
                                        ? "opacity-100"
                                        : "opacity-0"
                                    )}
                                  />
                                  {category.label}
                                </CommandItem>
                              ))}
                            </CommandGroup>
                          </Command>
                        </PopoverContent>
                      </Popover>
                      <FormDescription>
                        Your organisation's impact domain
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="endDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>End Date</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="targetAmount"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Target Amount</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="Target Amount"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {fields.map((commitment, index) => (
                  <div key={commitment.id} className="space-y-4">
                    <div className="flex space-x-4">
                      <FormField
                        control={form.control}
                        name={`commitments.${index}.supplier`}
                        render={({ field }) => (
                          <div className="flex-grow">
                            <FormLabel>Supplier</FormLabel>
                            <FormControl>
                              <select {...field} className="select-field">
                                <option value="" disabled>
                                  Select Supplier
                                </option>
                                {suppliersStub.map((supplier) => (
                                  <option
                                    key={supplier.value}
                                    value={supplier.value}
                                  >
                                    {supplier.label}
                                  </option>
                                ))}
                              </select>
                            </FormControl>
                            <FormMessage />
                          </div>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name={`commitments.${index}.percentage`}
                        render={({ field }) => (
                          <div className="flex-grow">
                            <FormLabel>Percentage</FormLabel>
                            <FormControl>
                              <Input
                                type="number"
                                placeholder="Percentage"
                                {...field}
                                min="0"
                                max="100"
                                onChange={(e) => {
                                  // Parse the input value as a float
                                  const parsedValue = parseFloat(
                                    e.target.value
                                  );

                                  // Check if the parsed value is a valid number
                                  if (!isNaN(parsedValue)) {
                                    // Set the parsed value as the field value
                                    field.onChange(parsedValue);
                                  } else {
                                    // If the input is not a valid number, you can handle it here
                                    // For example, you can display an error message or prevent it from being set
                                    // field.onChange(""); // Clear the field value or handle the error as needed
                                  }
                                }}
                              />
                            </FormControl>
                            <FormMessage />
                          </div>
                        )}
                      />
                    </div>

                    <Button
                      type="button"
                      onClick={() => remove(index)}
                      className="text-red-500"
                    >
                      Remove
                    </Button>
                  </div>
                ))}

                <Button
                  type="button"
                  onClick={() =>
                    append(
                      { supplier: "", percentage: 0 },
                      { shouldFocus: true }
                    )
                  }
                >
                  Add Commitment
                </Button>
              </div>
                <Button
                  type="submit"
                  disabled={
                    form.formState.isSubmitting
                  }
                >
                  <Link href="/">
                  {form.formState.isSubmitting ? (
                    <>
                      <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                      <p>Please wait</p>
                    </>
                  ) : (
                    <p>Submit</p>
                  )}
                  </Link>
                </Button>
            </form>
          </Form>
        </div>
      </div>
    </Layout>
  );
};

export default index;
