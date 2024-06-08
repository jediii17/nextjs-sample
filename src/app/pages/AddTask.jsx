"use client";

import { AiOutlinePlus } from "react-icons/ai";

import { useState } from "react";
import Modal from "../../components/Modal";

const AddTask = ({handleNewTask}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [text, setText] = useState("");

  const handleSubmitNewTodo = async (e) => {
    e.preventDefault();
    // submit the new task to the create api ...
    

    const response = await fetch('api/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text: text })
    })
    if(response.ok){
      const data = await response.json();
      //console.log(data)
      handleNewTask(data)
      setModalOpen(false)
      setText("")
    
    }
    
  };

  return (
    <div>
      <button
        onClick={() => setModalOpen(true)}
        className='btn btn-primary w-full'
      >
        Add new task <AiOutlinePlus className='ml-2' size={18} />
      </button>

      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <form onSubmit={handleSubmitNewTodo}>
          <h3 className='font-bold text-lg'>Add new task</h3>
          <div className='modal-action'>
            <input
              value={text}
              onChange={(e) => setText(e.target.value)}
              type='text'
              placeholder='Type here'
              className='input input-bordered w-full'
            />
            <button type='submit' className='btn'>
              Submit
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AddTask;