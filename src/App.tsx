import "./App.css";
import { Box } from "@mui/material";
import AddTask from "./compornents/AddTask";
import TaskField from "./compornents/TaskField";
import useTasks from "./hooks/useTasks";

function App() {
  const {
    input,
    handleClick,
    toggleCompleted,
    handleEnterPress,
    handleEditChange,
    handleReEdit,
  } = useTasks();

  return (
    <Box
      sx={{
        width: 400,
        mx: "auto",
        p: 2,
        alignItems: "center",
      }}
    >
      <AddTask handleClick={handleClick} />
      <TaskField
        input={input}
        toggleCompleted={toggleCompleted}
        handleEditChange={handleEditChange}
        handleEnterPress={handleEnterPress}
        handleReEdit={handleReEdit}
      />
    </Box>
  );
}

export default App;
