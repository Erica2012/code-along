import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import TaskItem from "../components/TaskItem";
// import background from "../assets/img.jpg";
import { useTaskContext } from "../Context/tasksContext";

function TaskManager() {
  // const [tasks, setTasks] = useState(getTasksFromLocalStorage);
  const { tasks, setValue } = useTaskContext();
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input === "") return;

    const newTask = {
      id: uuid(),
      text: input,
      completed: false,
    };

    setValue([newTask, ...tasks]);
    setInput("");
  };

  const handleDelete = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setValue(newTasks);
  };

  const handleCompleted = (id) => {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          completed: !task.completed,
        };
      }
      return task;
    });
    setValue(newTasks);
  };

  const handleEdit = (id) => {
    const newTasks = tasks.filter((tasks) => {
      if (tasks.id === id) {
        setInput(tasks.text);
        return false;
      }
      return tasks;
      
    });
    setValue(newTasks);
  };

  useEffect(()=> {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  console.log(tasks);

  return (
    <div className="h-screen w-screen bg-blue-600 flex justify-center items-center">
      <img src="background" alt="" />
      <div className="max-w-3xl bg-white rounded-xl px-5 py-10 max-h-96">
        <form
          onSubmit={handleSubmit}
          className="space-x-5 flex w-[30rem] mb-10"
        >
          <input
            type="text"
            className="border-2 border-blue-400 p-2 rounded-md outline-none w-10/12"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />

          <button
            type="submit"
            className="bg-blue-600 text-white text-lg p-5 py-2 px-5 rounded-md"
            disabled={input === ""}
          >
            Add
          </button>
        </form>

        <div className="space-y-2 overflow-y-auto h-56">
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              handleDelete={handleDelete}
              handleCompleted={handleCompleted}
              handleEdit={handleEdit}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TaskManager;
