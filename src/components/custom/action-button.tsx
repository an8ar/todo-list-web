import { MoreVertical } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import axios from "axios";
import { useState } from "react";
import { TodoFormDialog } from "@/features/todo/components/todo-form-dialog";
import { ITodo } from "@/features/todo/components";
import { useForm } from "react-hook-form";
interface ActionButtonProps {
  todo: ITodo;
  onTodoChanged: () => void;
}
export function ActionButton({ todo, onTodoChanged }: ActionButtonProps) {
  const [open, setOpen] = useState(false);

  const form = useForm();
  const handdleStatusChange = () => {
    axios
      .put(`http://localhost:3000/api/todo/${todo.id}`, { ...form.watch() })
      .then(() => {
        onTodoChanged();
      });
  };
  const handleDelete = () => {
    axios.delete(`http://localhost:3000/api/todo/${todo.id}`).then(() => {
      onTodoChanged();
    });
  };
  return (
    <div className="ml-auto">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant={"outline"} size={"icon"}>
            <MoreVertical className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Choose an action</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem onClick={() => setOpen(true)}>
              <span>Edit</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={handleDelete}>
              <span>Delete</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
        </DropdownMenuContent>
      </DropdownMenu>
      <TodoFormDialog
        todo={todo}
        form={form}
        open={open}
        setOpen={setOpen}
        handleSubmit={handdleStatusChange}
      />
    </div>
  );
}
