import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "primary.main",
        color: "white",
        textAlign: "center",
        py: 2,
        position: "relative",
        bottom: 0,
      }}
    >
      <Typography variant="body2">
        © 2025 Kei Matsuura. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
