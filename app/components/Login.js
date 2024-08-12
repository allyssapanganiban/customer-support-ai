"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../utils/firebaseConfig";
import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Link,
  Stack,
  useMediaQuery,
  useTheme,
} from "@mui/material";

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
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      display="flex"
      flexDirection="row"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      bgcolor={
        isSmallScreen ? "linear-gradient(to bottom, #C1EDF3, #F4EFC5)" : "white"
      }
    >
      {/* Left Side - Login Form */}
      <Box
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        justifyContent="center"
        p={5}
        width={isSmallScreen ? "80%" : "40%"}
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

        {/* Sign Up Link */}
        {/* Sign Up Link */}
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
          placeholder="Enter your name"
          variant="outlined"
          fullWidth
          margin="normal"
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

        {/* Sign In Button */}
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
            boxShadow: "none",
            boxShadow: "none",
            "&:hover": {
              bgcolor: "#4DA9B6",
              boxShadow: "none",
            },
          }}
        >
          Sign in
        </Button>
      </Box>

      {/* Right Side - Image/Gradient */}
      <Box
        width={isSmallScreen ? "0" : "60%"}
        height={isSmallScreen ? "0" : "100%"}
        display={isSmallScreen ? "none" : "block"}
        sx={{
          bgcolor: "linear-gradient(to bottom, #C1EDF3, #F4EFC5)",
          background: "linear-gradient(to bottom, #C1EDF3, #F4EFC5)",
          background: "linear-gradient(to bottom, #C1EDF3, #F4EFC5)",
          borderRadius: "20px",
          padding: "55px",
        }}
      >
        <Typography
          variant="h3"
          sx={{ fontWeight: "bold", color: "black", fontFamily: "Poppins" }}
        >
          Introducing
        </Typography>
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            color: "#63C2CF",
            fontFamily: "Poppins",
            marginBottom: "10px",
          }}
        >
          Education Bot
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontFamily: "Poppins",
            color: "#444444",
            fontSize: "15px",
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
            color: "#444444",
            fontSize: "15px",
            lineHeight: "1.5",
            marginTop: "10px",
            marginBottom: "30px",
          }}
        >
          Whether you need help with course enrollment deadlines, finding the
          right courses, or learning more about professors, our smart assistant
          is here to provide instant, accurate answers.
        </Typography>
        <img
          src="/assets/about.png"
          alt="Description of image"
          style={{
            maxWidth: "65%",
            maxHeight: "75%",
            display: "block",
            margin: "0 auto",
            objectFit: "contain",
          }}
        />
      </Box>
    </Box>
  );
};

export default Login;
