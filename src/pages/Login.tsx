import { Box, Button, TextField, Typography } from "@mui/material";
import useLogin from "../hooks/useLogin";
import Header from "../compornents/header";
import Footer from "../compornents/footer";

const Login = () => {
  const { formValues, formErrors, handleEditChange, handleSubmit } = useLogin();

  return (
    <>
      <Header />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <form onSubmit={handleSubmit}>
          <Typography variant="h5" gutterBottom>
            ログイン
          </Typography>
          <TextField
            fullWidth
            label="メールアドレス"
            margin="normal"
            onChange={(e) => handleEditChange(e)}
            name="mailAddress"
            error={!!formErrors.mailAddress}
            helperText={formErrors.mailAddress}
            value={formValues.mailAddress}
          />
          <TextField
            fullWidth
            label="パスワード"
            type="password"
            margin="normal"
            onChange={(e) => handleEditChange(e)}
            name="password"
            error={!!formErrors.password}
            helperText={formErrors.password}
            value={formValues.password}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
          >
            ログイン
          </Button>
        </form>
      </Box>
      <Footer />
    </>
  );
};

export default Login;
