import React, {useState} from "react";
import TaskItem from "./TaskItem";
import background from "../assets/img.jpg";



function TaskManager() {
    const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(input === "") return;
        
        setTasks([input, ...tasks]);
        setInput("");
    };

    const handleDelete = idx => {
        const newTask =tasks.filter(task => task !== idx);
        setTasks(newTask);
    }


  return (
    
    <div className="h-screen w-screen bg-blue-600 flex justify-center items-center">
      <img src="background" alt="" />
        <div className="max-w-3xl bg-white rounded-xl px-5 py-10 max-h-96">
            <form  
            onSubmit={handleSubmit} 
            className="space-x-5 flex w-[30rem] mb-10">
               
                <input type="text"
                 className="border-2 border-blue-400 p-2 rounded-md outline-none w-10/12" 
                onChange ={(e) => setInput(e,target,value)}
                value={input}

                />
                
                <button type="submit" 
                className="bg-blue-600 text-white text-lg p-5 py-2 px-5 rounded-md"
                disabled={input === ""}
                
                >Add</button>
            </form>

<div className="space-y-2 overflow-y-auto h-56">
        {
            tasks.map((task) => (
                 <TaskItem task={task} handleDelete={handleDelete}/> 
            ))
        }
     
      
     
            </div>
        </div>
    </div>
  );
}

export default TaskManager;