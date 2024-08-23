import Image from "next/image";
import AddTask from "@/components/AddTask";
import ToDoLlist from "@/components/ToDoLlist";
import { getAllTodos } from "@/api";

export default async function Home() {
  const todos=await getAllTodos();
  return (
    <main className="max-w-4xl  mx-auto  mt-4 text-center">
      <div className="text-center flex flex-col gap-4 my-4">
        <h1 className="text-2xl font-bold">Todo List App</h1>
        <AddTask/>
      </div>
      <ToDoLlist todos={todos}></ToDoLlist>
     
    </main>
  );
}
