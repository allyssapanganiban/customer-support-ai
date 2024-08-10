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
        width="40%"
        height="100%"
      >
        {/* Logo */}
        <Typography variant="h5" fontWeight="600" color="primary.main" gutterBottom>
          <img src="/path-to-logo.png" alt="Logo" style={{ marginRight: 10 }} />
          Education Bot
        </Typography>

        {/* Welcome Back */}
        <Typography variant="h4" fontWeight="600" gutterBottom>
          Welcome back!
        </Typography>

        {/* Sign Up Link */}
        <Typography variant="body2" color="textSecondary">
          New to Education Bot?{" "}
          <Link href="#" color="primary.main">
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
            sx: { borderRadius: "10px" },
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
          sx={{ marginTop: 3, borderRadius: "10px", paddingY: 1 }}
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
            paddingY: 1,
            color: "black",
            borderColor: "lightgray",
            textTransform: "none",
          }}
          startIcon={<img src="/path-to-google-icon.png" alt="Google Icon" style={{ height: 20 }} />}
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