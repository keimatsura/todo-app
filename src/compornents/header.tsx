import { AppBar, Box, Toolbar } from "@mui/material";

const Header = () => {
  return (
    <AppBar>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box sx={{ paddingLeft: 2 }}>
          <img
            src="/assets/images/Group 1 (1).png"
            alt="Logo"
            style={{ height: "40px" }}
          />
        </Box>
        <Box></Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
