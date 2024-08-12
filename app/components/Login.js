"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Box, Typography, TextField, Button, Link, Stack } from "@mui/material";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../utils/firebaseConfig"; // Assuming you've set up Google provider

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async () => {
    try {
      if (isSignUp) {
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
      router.push("/");
      setError("");
    } catch (err) {
      setError("Failed to authenticate. Please check your credentials.");
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      setError("");
    } catch (err) {
      setError("Failed to sign in with Google.");
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="row"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      bgcolor="white"
    >
      {/* Left Side - Login Form */}
      <Box
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        justifyContent="center"
        p={5}
        width="40%"
        height="100%"
        padding="55px"
      >
        {/* Logo */}
        <Box display="flex" alignItems="center" marginBottom="25px">
          <img
            src="/assets/logo.png"
            alt="Education Bot Logo"
            style={{ height: 40 }}
          />
          <Typography
            variant="h6"
            component="div"
            sx={{ fontWeight: "bold", color: "black", fontFamily: "Poppins" }}
          >
            Education Bot
          </Typography>
        </Box>

        {/* Welcome Back */}
        <Typography
          variant="h4"
          gutterBottom
          sx={{ fontWeight: "bold", color: "black", fontFamily: "Poppins" }}
        >
          {isSignUp ? "Create an Account" : "Welcome back!"}
        </Typography>

        {/* Toggle Between Sign-In and Sign-Up */}
        <Typography variant="body2" fontFamily="Poppins" marginBottom="30px">
          {isSignUp ? "Already have an account? " : "New to Education Bot? "}
          <Link
            href="#"
            onClick={() => setIsSignUp(!isSignUp)}
            color="#63C2CF"
            fontWeight="bold"
          >
            {isSignUp ? "Sign in." : "Create an account."}
          </Link>
        </Typography>

        {/* Name Input - Only Show During Sign-Up */}
        {isSignUp && (
          <>
            <Typography
              sx={{
                lineHeight: "0px",
                fontSize: "14px",
                fontWeight: "bold",
                color: "black",
                fontFamily: "Poppins",
              }}
            >
              Name
            </Typography>
            <TextField
              placeholder="Enter your name"
              variant="outlined"
              fullWidth
              margin="normal"
              InputLabelProps={{
                sx: {
                  fontFamily: "Poppins",
                },
              }}
              InputProps={{
                sx: {
                  fontSize: "14px",
                  borderRadius: "10px",
                  fontFamily: "Poppins",
                  marginBottom: "20px",
                  "& .MuiInputBase-input": {
                    paddingY: "8px",
                  },
                },
              }}
            />
          </>
        )}

        {/* Email Input */}
        <Typography
          sx={{
            lineHeight: "0px",
            fontSize: "14px",
            fontWeight: "bold",
            color: "black",
            fontFamily: "Poppins",
          }}
        >
          Email
        </Typography>
        <TextField
          placeholder="Enter your email"
          variant="outlined"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          InputLabelProps={{
            sx: {
              fontSize: "14px",
              fontFamily: "Poppins",
            },
          }}
          InputProps={{
            sx: {
              fontSize: "14px",
              borderRadius: "10px",
              fontFamily: "Poppins",
              marginBottom: "20px",
              "& .MuiInputBase-input": {
                paddingY: "8px",
              },
            },
          }}
        />

        {/* Password Input */}
        <Typography
          sx={{
            lineHeight: "0px",
            fontSize: "14px",
            fontWeight: "bold",
            color: "black",
            fontFamily: "Poppins",
          }}
        >
          Password
        </Typography>
        <TextField
          placeholder="Enter your password"
          variant="outlined"
          type="password"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          InputLabelProps={{
            sx: {
              fontFamily: "Poppins",
            },
          }}
          InputProps={{
            sx: {
              fontSize: "14px",
              borderRadius: "10px",
              fontFamily: "Poppins",
              "& .MuiInputBase-input": {
                paddingY: "8px",
              },
            },
          }}
        />

        {/* Error Message */}
        {error && (
          <Typography color="error" sx={{ marginTop: 2 }}>
            {error}
          </Typography>
        )}

        {/* Sign In/Sign Up Button */}
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleSubmit}
          boxShadow="none"
          sx={{
            marginTop: 3,
            borderRadius: "10px",
            paddingY: 1.5,
            textTransform: "none",
            fontFamily: "Poppins",
            bgcolor: "#63C2CF",
            "&:hover": {
              bgcolor: "#4DA9B6",
              boxShadow: "none",
            },
          }}
        >
          {isSignUp ? "Sign Up" : "Sign In"}
        </Button>

        {/* Google Sign In Button */}
        <Button
          variant="outlined"
          fullWidth
          onClick={handleGoogleSignIn}
          sx={{
            marginTop: 2,
            borderRadius: "10px",
            paddingY: 1.5,
            color: "black",
            borderColor: "#63C2CF",
            borderWidth: "2px",
            textTransform: "none",
            fontFamily: "Poppins",
            fontWeight: "bold",
            "&:hover": {
              borderColor: "#63C2CF",
              borderWidth: "2px",
            },
          }}
          startIcon={
            <img
              src="/assets/google-icon.png"
              alt="Google Icon"
              style={{ height: 20 }}
            />
          }
        >
          Sign in with Google
        </Button>
      </Box>

      {/* Right Side - Image/Gradient */}
      <Box
        width="60%"
        height="100%"
        sx={{
          bgcolor: "linear-gradient(to bottom, #C1EDF3, #F4EFC5)",
          borderRadius: "20px",
          padding: "55px",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            color: "black",
            fontFamily: "Poppins",
            marginBottom: "20px",
          }}
        >
          Introducing
        </Typography>
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            color: "#63C2CF",
            fontFamily: "Poppins",
            marginBottom: "20px",
          }}
        >
          Education Bot
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontFamily: "Poppins",
            color: "black",
            fontSize: "18px",
            lineHeight: "1.5",
          }}
        >
          Effortlessly navigate your academic journey with our AI-driven
          customer support bot.
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontFamily: "Poppins",
            color: "black",
            fontSize: "18px",
            lineHeight: "1.5",
            marginTop: "10px",
          }}
        >
          Whether you need help with course enrollment deadlines, finding the
          right courses, or learning more about professors, our smart assistant
          is here to provide instant, accurate answers.
        </Typography>
      </Box>
    </Box>
  );
};

export default Login;
