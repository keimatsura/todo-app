import { Box, Button } from "@mui/material";

interface AddTaskProps {
  handleClick: () => void;
}

function AddTask({ handleClick }: AddTaskProps) {
  return (
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
  );
}

export default AddTask;
