import React from "react";
import {TrashIcon} from "@heroicons/react/outline";

function TaskItem({task, handleDelete}) {
  return (
    <div className="flex items-center bg-teal-100 p-2 border-2 border-gray-300 rounded-md">
        <div className="flex-1">{task}</div>
        <button
        
         className="bg-blue-800 p-2 rounded-md"
         onClick={() =>handleDelete(task)}>
            <TrashIcon height={24} color="white" />
            </button>
        </div>
    
  );
}

export default TaskItem;


//props are been used to pass data from one component to component and they are imutable(cant be changed)
//state is a local data storage that is local to the component only and cannot be passed to other components