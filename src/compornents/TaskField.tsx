import { Box, Button, Typography, Checkbox } from "@mui/material";
import { TextField } from "@mui/material";

interface Task {
  text: string;
  isEditing: boolean;
  completed: boolean;
}

interface TaskFieldProps {
  input: Task[];
  toggleCompleted: (index: number) => void;
  handleEditChange: (index: number, value: string) => void;
  handleEnterPress: (index: number) => void;
  handleReEdit: (index: number) => void;
}

function TaskField({
  input,
  toggleCompleted,
  handleEditChange,
  handleEnterPress,
  handleReEdit,
}: TaskFieldProps) {
  return (
    <>
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
            <>
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
              <Button onClick={() => handleEnterPress(index)}>保存</Button>
            </>
          ) : (
            // Enter押下後
            <Typography
              sx={{
                cursor: "pointer",
                minHeight: "56px",
                display: "flex",
                alignItems: "center",
                flexGrow: 1,
                border: "1px solid transparent",
                px: 2,
                backgroundColor: "#F5F5F5",
              }}
            >
              {task.text ? task.text : "（空のタスク）"}
            </Typography>
          )}

          {!task.isEditing && (
            <Button color="warning" onClick={() => handleReEdit(index)}>
              編集
            </Button>
          )}
        </Box>
      ))}
    </>
  );
}

export default TaskField;
