"use client"

import React from 'react'
import { FiEdit } from "react-icons/fi";
import { FiTrash2 } from "react-icons/fi";
import { useState } from 'react';
import { IoCloseCircleSharp } from "react-icons/io5";
import { deleteTodo, editTodo } from '@/api';
import { useRouter } from 'next/navigation';



interface Todo {
    id: string;
    text: string;
    
  }
  interface TaskProps {
    task: Todo;
  }

function Task({task}:TaskProps) {
  const [openModelEdit,setOpenModelEdit]=useState(false);
  const [newEditValue,setNewEditValue]=useState(task.text);
  const [openModelDelete,setOpenModelDelete]=useState(false);

  const router=useRouter();

  const handleEdit = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("inside eidit");
    await editTodo({
    id:task.id,
    text:newEditValue
   });
    setNewEditValue("");
    router.refresh();
  };
  const handleDelete=async (id:string)=>
  {
    await deleteTodo(id);
    setOpenModelDelete(false);
    router.refresh();
  }
  return (
    <tr key={task.id}>
    <td className="p-4">
      <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
       {task.text}
      </p>
    </td>
    <td className="p-5 flex gap-5 ">
    <FiEdit onClick={()=>{setOpenModelEdit(true)}} cursor='pointer' className="text-blue-500" size={24}/>
    {openModelEdit && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50 ">
          <div className="modal-box bg-white rounded-lg p-4 relative w-full md:w-1/4">
            <button
              onClick={() => setOpenModelEdit(false)}
              className="absolute top-2 right-2 mr-1 text-gray-500 hover:text-gray-700 w-4 h-4"
            >
              <IoCloseCircleSharp size={24} />
            </button>
            <form onSubmit={handleEdit}>
              <h3 className="font-bold text-large">Edit the task</h3>
              <div className="modal-action">
                <input
                  value={newEditValue}
                  onChange={(e) => {
                    setNewEditValue(e.target.value);
                  }}
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                />
                <button
                  type="submit"
                  className="btn btn-primary"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    <FiTrash2 onClick={()=>{setOpenModelDelete(true)}} cursor='pointer' className="text-red-500" size={24}/>
    {openModelDelete && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
          <div className="modal-box bg-white rounded-lg p-4 relative w-full md:w-1/4">
            <button
              onClick={() => setOpenModelDelete(false)}
              className="absolute top-2 right-2 mr-1 text-gray-500 hover:text-gray-700 w-4 h-4"
            >
              <IoCloseCircleSharp size={24} />
            </button>
            <div className='model-action'>
            <h3 className='font-bold text-lg'>Are you sure you want to delete this task?</h3>
            <div className='flex justify-end pt-4'>
            <button onClick={()=>{
              handleDelete(task.id);
            }}  className='flex justify-end btn btn-primary'>Yes</button>

            </div>
           
          </div>
          </div>
         
        </div>
      )}
    </td>
   
  </tr>
  )
}

export default Task