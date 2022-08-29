import { createContext, useContext, useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const TaskContext = createContext({
  tasks: [],
  setValue: (tasks) => {},
});

export const TasksContentProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const { task, setValue } = useLocalStorage("tasks", []);

  useEffect(() => {
    setTasks(task);
  }, [task]);

  return (
    <TaskContext.Provider value={{ tasks, setValue }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = () => useContext(TaskContext);
