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
import { useAuthContext } from "../hooks/useAuthContext";
import { useNavigate } from "react-router-dom";

type SignUpProps = {};

type SignupForm = {
  firstName: String;
  lastName: String;
  email: String;
  password: String;
};

const SignUp: React.FC<SignUpProps> = () => {
  const [signupForm, setSignupForm] = useState<SignupForm>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const { user } = useAuthContext()
  let navigate = useNavigate();
  const [emailError, setEmailError] = useState("");
  const [passError, setPassError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [submissionError, setSubmissionError] = useState("");

  const { signup, loading, error, setError } = useSignup();

  const checkEmail = (email: string) => {
    setEmailError("");
    const emailRegex = /^([a-zA-Z0-9-.]+)@([a-zA-Z0-9-.]+)\.([a-zA-Z]{1,5})$/;
    const isValid = emailRegex.test(email);
    if (!isValid && email != "")
      setEmailError("Email not valid");
  };

  React.useEffect(() => {
    if (user) {
      navigate('../')
    }
  }, [user, navigate])

  const checkPassword = (password: string) => {
    setPassError("");
    if (password === password.toLowerCase())
      setPassError("Uppercase and Lowercase");

    if (password.length < 7)
      setPassError("At Least 7 Characters");

    const passReg = /[!-@[-`{-~]/;
    const isValid = passReg.test(password);
    if (!isValid && password != "")
      setPassError("Include a Symbol");
  };

  const checkConfirmPassword = (password: string) => {
    setPasswordError("");
    const passReg = /[!-@[-`{-~]/;
    if (password != signupForm.password)
      setPasswordError("Password does not match");
  };

  const submitForm = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setFirstNameError("");
    if (!signupForm.firstName.trim())
      setFirstNameError("First name is required.");
    setLastNameError("");
    if (!signupForm.lastName.trim())
      setLastNameError("Last name is required.");
    setSubmissionError("");
    if (
      emailError != "" ||
      passwordError != "" ||
      firstNameError != "" ||
      lastNameError != "" ||
      passError != ""
    )
      setSubmissionError("Incorrect Submission");
    else {
      await signup(
        signupForm.email,
        signupForm.password,
        signupForm.firstName,
        signupForm.lastName
      );
    }
  };

  return (
    <Box
      width="100%"
      height="100vh"
      sx={{ display: "flex", flexDirection: "column" }}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Typography
        variant="h3"
        fontWeight="700"
        width={"25%"}
        textAlign={"center"}
        color={"primaryRed"}
        pb={"20px"}
      >
        Sign Up
      </Typography>
      <FormControl sx={{ padding: 1 }}>
        <TextField
          id="email"
          value={signupForm.email}
          onChange={(event) =>
            setSignupForm((prev) => ({ ...prev, email: event.target.value }))
          }
          onBlur={(event) => checkEmail(event.target.value)}
          label="Email"
          variant="outlined"
        />
        {emailError && (
          <Typography
            sx={{
              color: "error.main",
              FontSize: "90px",
            }}
          >
            {emailError}
          </Typography>
        )}
      </FormControl>
      <FormControl sx={{ padding: 1 }}>
        <TextField
          id="firstName"
          value={signupForm.firstName}
          onChange={(event) =>
            setSignupForm((prev) => ({
              ...prev,
              firstName: event.target.value,
            }))
          }
          label="First Name"
          variant="outlined"
        />
        {firstNameError && (
          <Typography
            sx={{
              color: "error.main",
              FontSize: "90px",
            }}
          >
            {firstNameError}
          </Typography>
        )}
      </FormControl>
      <FormControl sx={{ padding: 1 }}>
        <TextField
          id="lastName"
          value={signupForm.lastName}
          onChange={(event) =>
            setSignupForm((prev) => ({ ...prev, lastName: event.target.value }))
          }
          label="Last Name"
          variant="outlined"
        />
        {lastNameError && (
          <Typography
            sx={{
              color: "error.main",
              FontSize: "90px",
            }}
          >
            {lastNameError}
          </Typography>
        )}
      </FormControl>
      <FormControl sx={{ padding: 1 }}>
        <TextField
          id="password"
          value={signupForm.password}
          onChange={(event) =>
            setSignupForm((prev) => ({ ...prev, password: event.target.value }))
          }
          onBlur={(event) => checkPassword(event.target.value)}
          label="Password"
          variant="outlined"
          type="password"
        />
        {passError && (
          <Typography
            sx={{
              color: "error.main",
              FontSize: "90px",
            }}
          >
            {passError}
          </Typography>
        )}
      </FormControl>
      <FormControl sx={{ padding: 1 }}>
        <TextField
          id="confirmPassword"
          onBlur={(event) => checkConfirmPassword(event.target.value)}
          label="Confirm Password"
          variant="outlined"
          type="Password"
        />
        {passwordError && (
          <Typography
            sx={{
              color: "error.main",
              FontSize: "90px",
            }}
          >
            {passwordError}
          </Typography>
        )}
      </FormControl>
      <Box sx={{ display: "flex" }} justifyContent={"flex-end"} flexDirection={"column"}>
        <Button
          onClick={(e) => submitForm(e)}
          variant="contained"
          sx={{ width: "100%" }}
        >
          Sign Up
        </Button>
        {submissionError && (
          <Typography
            sx={{
              color: "error.main",
              FontSize: "90px",
            }}
          >
            {submissionError}
          </Typography>
        )}
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

export default SignUp;
