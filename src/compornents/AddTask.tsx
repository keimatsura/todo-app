import { Box, Button } from "@mui/material";

interface AddTaskProps {
  handleClick: () => void;
}

function AddTask({ handleClick }: AddTaskProps) {
  return (
    <Box sx={{ marginTop: 2, textAlign: "center" }}>
      <Button
        variant="contained"
        color="primary"
        sx={{ marginBottom: 2 }}
        onClick={handleClick}
      >
        新しいタスクを追加する
      </Button>
    </Box>
  );
}

export default AddTask;
