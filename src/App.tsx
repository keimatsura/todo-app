import "./App.css";
import { Box } from "@mui/material";
import AddTask from "./compornents/AddTask";
import TaskField from "./compornents/TaskField";
import useTasks from "./hooks/useTasks";

import Header from "./compornents/header";
import Footer from "./compornents/footer";

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
    <>
      <Header />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "250px",
        }}
      >
        <Box
          sx={{
            width: "100%",
            textAlign: "center",
            mt: 2,
          }}
        >
          <AddTask handleClick={handleClick} />
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            p: 2,
            overflowY: "auto",
            width: "100%",
            maxHeight: "calc(100vh - 200px)", // ボタンの位置を変えないように調整
          }}
        >
          <TaskField
            input={input}
            toggleCompleted={toggleCompleted}
            handleEditChange={handleEditChange}
            handleEnterPress={handleEnterPress}
            handleReEdit={handleReEdit}
          />
        </Box>
        <Footer />
      </Box>
    </>
  );
}

export default App;
