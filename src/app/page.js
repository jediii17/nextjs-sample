"use client";

import AddTask from "./pages/AddTask";
import TodoList from "./pages/TodoList";
import { useEffect, useState } from "react";

export default function Home() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // fetch all data here.
  }, []);

  const handleNewTask = (task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  }

  return (
    <main className='max-w-4xl mx-auto mt-4'>
      <div className='text-center my-5 flex flex-col gap-4'>
        <h1 className='text-2xl font-bold'>Todo List - NextJS</h1>
        <AddTask handleNewTask={handleNewTask} />
        <TodoList tasks={tasks} setTasks={setTasks} />
      </div>
    </main>
  );
}
