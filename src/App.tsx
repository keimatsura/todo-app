import "./App.css";
import { Box, Button, Typography, Checkbox } from "@mui/material";
import { TextField } from "@mui/material";
import { useState } from "react";

function App() {
  const [input, setinput] = useState([
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

  return (
    <Box
      sx={{
        width: 400,
        mx: "auto",
        p: 2,
        alignItems: "center",
      }}
    >
      <Box sx={{ mt: "auto", textAlign: "center" }}>
        <Button
          variant="contained"
          color="primary"
          sx={{ marginBottom: 2 }}
          onClick={handleClick}
        >
          タスクを追加する
        </Button>
      </Box>

      {input.map((task, index) => (
        <Box key={index} sx={{ marginBottom: 2, display: "flex" }}>
          <Checkbox
            checked={input[index].completed}
            onClick={() => {
              toggleCompleted(index);
            }}
            color="primary"
          ></Checkbox>

          {task.isEditing ? (
            // 編集中
            <TextField
              value={task.text}
              label={"タスクを入力"}
              variant="outlined"
              sx={{ flexGrow: 1 }}
              onChange={(e) => handleEditChange(index, e.target.value)}
              onKeyDown={(e) => {
                e.key === "Enter" && handleEnterPress(index);
              }}
            />
          ) : (
            // Enter押下後
            <Typography
              onClick={() => handleReEdit(index)}
              sx={{
                cursor: "pointer",
                minHeight: "56px",
                display: "flex",
                alignItems: "center",
                flexGrow: 1,
                border: "1px solid transparent",
                px: 2,
                backgroundColor: "#d3ffd3",
              }}
            >
              {task.text ? task.text : "（空のタスク）"}
            </Typography>
          )}
        </Box>
      ))}
    </Box>
  );
}

export default App;
