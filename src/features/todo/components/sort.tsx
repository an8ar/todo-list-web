import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { StatusType } from ".";

interface SortProps {
  todos: {
    topic: string;
    description: string;
    status: StatusType;
    id: number;
  }[];
  setTodo: React.Dispatch<
    React.SetStateAction<
      {
        topic: string;
        description: string;
        status: StatusType;
        id: number;
      }[]
    >
  >;
}

export function Sort({ todos, setTodo }: SortProps) {
  const handleValueChange = (selectedValue: StatusType) => {
    const sortedTodos = [...todos].sort((a, b) => {
      if (a.status === selectedValue && b.status !== selectedValue) {
        return -1;
      }
      if (a.status !== selectedValue && b.status === selectedValue) {
        return 1;
      }
      return 0;
    });

    setTodo(sortedTodos);
  };

  return (
    <div className="min-w-100">
      <Select onValueChange={handleValueChange}>
        <SelectTrigger>
          <SelectValue placeholder="Sort by" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Pending" className="text-yellow-500">
            Pending
          </SelectItem>
          <SelectItem value="InProgress" className="text-green-500">
            In Progress
          </SelectItem>
          <SelectItem value="Completed" className="text-blue-500">
            Completed
          </SelectItem>
          <SelectItem value="Failed" className="text-red-500">
            Failed
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
