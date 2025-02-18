import { useState } from "react";

interface Task {
  text: string;
  isEditing: boolean;
  completed: boolean;
}

function useTasks() {
  const [input, setinput] = useState<Task[]>([
    { text: "", isEditing: true, completed: false },
  ]);

  const handleClick = () => {
    setinput((prevInput) => [
      ...prevInput,
      { text: "", isEditing: true, completed: false },
    ]);
  };

  const toggleCompleted = (index: number) => {
    setinput((prevInput) => {
      const newTasks = [...prevInput];
      newTasks[index].completed = true;
      return newTasks;
    });

    setTimeout(() => {
      setinput((prevInput) => prevInput.filter((_, i) => i !== index));
    }, 2000);
  };

  function handleEnterPress(index: any) {
    setinput((prevInput) => {
      const newTasks = [...prevInput];
      newTasks[index].isEditing = false;
      return newTasks;
    });
  }

  const handleEditChange = (index: any, value: string) => {
    setinput((prevInput) => {
      const newTasks = [...prevInput];
      newTasks[index].text = value;
      return newTasks;
    });
  };

  const handleReEdit = (index: any) => {
    setinput((prevInput) => {
      const newTasks = [...prevInput];
      newTasks[index].isEditing = true;
      return newTasks;
    });
  };

  return {
    input,
    handleClick,
    toggleCompleted,
    handleEnterPress,
    handleEditChange,
    handleReEdit,
  };
}

export default useTasks;
