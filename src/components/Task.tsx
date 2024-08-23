import React from 'react'


interface Todo {
    id: number;
    text: string;
    
  }
  interface TaskProps {
    task: Todo;
  }

function Task({task}:TaskProps) {
  return (
    <tr key={task.id}>
    <td className="p-4 border-b border-blue-gray-50">
      <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
       {task.text}
      </p>
    </td>
    <td className="p-4 border-b border-blue-gray-50">
      <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
        Manager
      </p>
    </td>
   
  </tr>
  )
}

export default Task