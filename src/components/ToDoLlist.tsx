import { getAllTodos } from "@/api";
import React from "react";
import Task from "./Task";

interface Todo {
  id: number;
  text: string;
}

interface ToDoListProps {
  todos: Todo[];
}

export default async function ToDoLlist({ todos }: ToDoListProps) {
  return (
    <div className="relative flex flex-col w-full h-full  text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">
      <table className="w-full text-left table-auto min-w-max">
        <thead>
          <tr>
            <th className="p-4 border-b border-blue-gray-100 bg-gray-200">
              <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                Tasks
              </p>
            </th>
            <th className="p-4 border-b border-blue-gray-100 bg-gray-200">
              <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                Actions
              </p>
            </th>
          </tr>
        </thead>
        <tbody>
          {todos.map((task) => (
            <Task key={task.id} task={task}></Task>
          ))}
        </tbody>
      </table>
    </div>
  );
}
