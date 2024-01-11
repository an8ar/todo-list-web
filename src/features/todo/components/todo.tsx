import React from "react";
import { ActionButton } from "@/components/custom/action-button";
import { ITodo, StatusType } from ".";

interface TodoProps {
  todo: ITodo;
  onTodoChange: () => void;
}

export function Todo({ todo, onTodoChange }: TodoProps) {
  const { status, description, topic } = todo;
  const statusColors: { [key in StatusType]: string } = {
    Pending: "text-yellow-500",
    InProgress: "text-green-500",
    Completed: "text-blue-500",
    Failed: "text-red-500",
  };

  const statusColorClass = statusColors[status] || "text-gray-500"; // default color if status not found

  return (
    <div className="flex flex-col gap-2 content-center bg-slate-300 rounded-sm p-2 w-full ">
      <div className="flex">
        <h5 className="text-xl text-slate-700">{topic}</h5>
        <ActionButton todo={todo} onTodoChanged={onTodoChange} />
      </div>

      <div className="flex-grow text-sm text-slate-500">{description}</div>
      <div className={statusColorClass}>{status}</div>
    </div>
  );
}
