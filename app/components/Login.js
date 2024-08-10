import React from "react";
import { Box, Typography, TextField, Button, Link, Stack } from "@mui/material";

const Login = () => {
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
        width="45%"
        height="100%"
        padding="55px"
      >
        {/* Logo */}
        <Box display="flex" alignItems="center" marginBottom="25px">
          <img src="/assets/logo.png" alt="Education Bot Logo" style={{ height: 40 }} />
          <Typography variant="h6" component="div" sx={{fontWeight: 'bold', color: "black", fontFamily: "Poppins"}}>
          Education Bot
          </Typography>
        </Box>

        {/* Welcome Back */}
        <Typography variant="h4" gutterBottom sx={{fontWeight: 'bold', color: "black", fontFamily: "Poppins"}}>
          Welcome back!
        </Typography>

        {/* Sign Up Link */}
        <Typography variant="body2" fontFamily="Poppins">
          New to Education Bot?{" "}
          <Link href="#" color="#63C2CF" fontWeight="bold">
            Create an account.
          </Link>
        </Typography>

        {/* Email Input */}
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          InputProps={{
            sx: { 
                borderRadius: "10px" 
            },
          }}
          placeholder="Enter your email"
        />

        {/* Password Input */}
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          fullWidth
          margin="normal"
          InputProps={{
            sx: { borderRadius: "10px" },
          }}
          placeholder="Enter your password"
        />

        {/* Sign In Button */}
        <Button
          variant="contained"
          color="primary"
          fullWidth
          boxShadow="none"
          sx={{ marginTop: 3,
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
          Sign in
        </Button>

        {/* Google Sign In Button */}
        <Button
          variant="outlined"
          fullWidth
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
          startIcon={<img src="/assets/google-icon.png" alt="Google Icon" style={{ height: 20 }} />}
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
          background: "linear-gradient(to bottom, #C1EDF3, #F4EFC5)",
          borderRadius: "20px",
        }}
      />
    </Box>
  );
};

export default Login;