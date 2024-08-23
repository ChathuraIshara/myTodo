const baseurl="http://localhost:3001";

export const getAllTodos=async ()=>
{
    const res=await fetch(`${baseurl}/tasks`);
    const todos=await res.json();
    return todos;
}