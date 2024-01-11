import React from "react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { FieldValues, UseFormReturn } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { ITodo } from ".";

interface FormDiolog {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  form: UseFormReturn<FieldValues, any, undefined>;
  open: boolean;
  setOpen: (value: React.SetStateAction<boolean>) => void;
  todo?: ITodo;
  handleSubmit: () => void;
}
export function TodoFormDialog({
  form,
  open,
  setOpen,
  todo,
  handleSubmit,
}: FormDiolog) {
  const handleFormFinish = () => {
    console.log(form.watch());
    handleSubmit();
    setOpen(false);
  };
  return (
    <Dialog open={open} onOpenChange={() => setOpen(!open)}>
      <DialogContent>
        <Form {...form}>
          <FormField
            key={"a"}
            control={form.control}
            name="topic"
            defaultValue={todo?.topic}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Topic</FormLabel>
                <FormControl>
                  <Input placeholder="workout" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            key={"b"}
            defaultValue={todo?.description}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Input
                    placeholder="go to gym"
                    {...field}
                    defaultValue={todo?.description}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="status"
            key={"c"}
            defaultValue={todo?.status}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Status</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a status" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Pending" className="text-yellow-500">
                      Pending
                    </SelectItem>
                    <SelectItem value="InProgress" className="text-green-500">
                      Active
                    </SelectItem>
                    <SelectItem value="Completed" className="text-blue-500">
                      Completed
                    </SelectItem>
                    <SelectItem value="Failed" className="text-red-500">
                      Failed
                    </SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </Form>
        <Button onClick={handleFormFinish}>Submit</Button>
      </DialogContent>
    </Dialog>
  );
}
