import { useState, useEffect } from "react";

function useLocalStorage(key, initialValue) {
  const [task, setTask] = useState(() => {
    const result = localStorage.getItem(key);
    if (!result) return initialValue;
    return JSON.parse(result);
  });

  const setValue = (value) => {
    // const newData = data.push(value);
    const newTask = [value, ...task];
    setTask(newTask);
  };

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(task));
  }, [task, key]);

  return { task, setValue };
}

export default useLocalStorage;
