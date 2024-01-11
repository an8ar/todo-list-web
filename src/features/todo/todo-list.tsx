/* eslint-disable @typescript-eslint/no-var-requires */
import React, { useEffect, useState } from "react";
import { ITodo, Todo } from "./components";
import { Button } from "@/components/ui/button";
import { TodoFormDialog } from "./components/todo-form-dialog";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Sort } from "./components/sort";

export function TodoList() {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const [open, setOpen] = useState(false);
  const form = useForm();
  const fetchTodos = () => {
    axios
      .get("http://localhost:3000/api/todo/")
      .then((response) => {
        setTodos(response.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const handleSubmit = () => {
    axios
      .post("http://localhost:3000/api/todo/", { ...form.watch() })
      .then(() => {
        setOpen(false);
        fetchTodos();
      });
  };
  return (
    <div>
      <div className="flex items-center my-2">
        <h3 className=" text-center mb-3 flex-grow">Todos</h3>
        <div className="flex ml-auto gap-2">
          <Sort todos={todos} setTodo={setTodos} />
          <Button onClick={() => setOpen(true)}>Add</Button>
        </div>
      </div>
      <div className="bg-slate-100 p-5 rounded-lg flex flex-col gap-2 ">
        {todos.map((todo, index) => (
          <div className="flex gap-2 just items-center" key={`todo-${index}`}>
            <Todo onTodoChange={fetchTodos} todo={todo} />
          </div>
        ))}
      </div>
      <TodoFormDialog
        open={open}
        setOpen={setOpen}
        form={form}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
