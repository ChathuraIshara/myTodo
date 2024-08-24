import React from "react";
import { IoCloseCircleSharp } from "react-icons/io5";
import { useState } from "react";
import { addTodo } from "@/api";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from 'uuid';

interface ModelOProps {
  modalOpen: boolean;
  setModalOpen: (open: boolean) => void;
}

function Modal({ modalOpen, setModalOpen }: ModelOProps) {
  const router=useRouter()
  const [newTaskValue, setNewTaskValue] = useState("");

  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
   await addTodo({
    id:uuidv4(),
    text:newTaskValue
   });
    setNewTaskValue("");
    router.refresh();
  };

  return (
    <>
      {modalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50 ">
          <div className="modal-box bg-white rounded-lg p-4 relative w-full md:w-1/4">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-2 right-2 mr-1 text-gray-500 hover:text-gray-700 w-4 h-4"
            >
              <IoCloseCircleSharp size={24} />
            </button>
            <form onSubmit={handleSubmit}>
              <h3 className="font-bold text-large">Add new task</h3>
              <div className="modal-action">
                <input
                  value={newTaskValue}
                  onChange={(e) => {
                    setNewTaskValue(e.target.value);
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
    </>
  );
}

export default Modal;
