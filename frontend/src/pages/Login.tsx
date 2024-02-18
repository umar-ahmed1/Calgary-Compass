import React, { useState } from "react";
import {
  Box,
  FormControl,
  Input,
  InputLabel,
  Button,
  TextField,
  Typography,
} from "@mui/material";
import { useSignup } from "../hooks/useSignup";
import { useLogin } from "../hooks/useLogin";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

type LoginProps = {};

type LoginForm = {
  email: String;
  password: String;
};

const Login: React.FC<LoginProps> = () => {
  const [loginForm, setLoginForm] = useState<LoginForm>({
    email: "",
    password: "",
  });

  const { login, loading, error } = useLogin();
  let navigate = useNavigate();
  const { user } = useAuthContext();

  React.useEffect(() => {
    if (user) {
      navigate("../");
    }
  }, [user, navigate]);

  // Handle the login form submission
  const submitForm = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    //wait to login
    await login(loginForm.email, loginForm.password);
  };

  
  return (
    <Box
      width="100%"
      height="100vh"
      sx={{ display: "flex", flexDirection: "column" }}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <FormControl sx={{ padding: 1 }}>
        <TextField
          id="email"
          value={loginForm.email}
          onChange={(event) =>
            setLoginForm((prev) => ({ ...prev, email: event.target.value }))
          }
          label="Email"
          variant="outlined"
        />
      </FormControl>
      <FormControl sx={{ padding: 1 }}>
        <TextField
          id="password"
          value={loginForm.password}
          onChange={(event) =>
            setLoginForm((prev) => ({ ...prev, password: event.target.value }))
          }
          label="Password"
          variant="outlined"
          type="password"
        />
      </FormControl>
      <Box sx={{ display: "flex" }} justifyContent={"flex-end"}>
        <Button
          onClick={(e) => submitForm(e)}
          variant="contained"
          sx={{ width: "100%" }}
        >
          Login
        </Button>
        {error && (
          <Typography
            sx={{
              color: "error.main",
              FontSize: "90px",
            }}
          >
            {error}
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default Login;
