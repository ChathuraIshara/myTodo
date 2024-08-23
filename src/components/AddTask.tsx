"use client";
import { useState } from 'react';
import React from 'react';
import { FaPlus } from "react-icons/fa";
import Modal from './Modal';

const AddTask = () => {
  const [modalOpen,setModalOpen]=useState<boolean>(false);
  return (
    <div>
      <button onClick={()=>{}} className="bg-blue-500 rounded-md p-3 w-full font-bold text-white flex items-center justify-center gap-2">ADD NEW TASK<FaPlus size={18} /></button>
      <Modal modalOpen={modalOpen}></Modal>
    </div>
  )
}

export default AddTask