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
        <Typography variant="body2" fontFamily="Poppins" marginBottom="30px">
          New to Education Bot?{" "}
          <Link href="#" color="#63C2CF" fontWeight="bold">
            Create an account.
          </Link>
        </Typography>

        {/* Name Input */}
        <Typography sx={{lineHeight: '0px', fontSize: "14px", fontWeight: 'bold', color: "black", fontFamily: "Poppins"}}>
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
            }
          }}
          InputProps={{
            sx: { 
                fontSize: '14px',
                borderRadius: "10px",
                fontFamily: "Poppins",
                marginBottom: "20px",
                "& .MuiInputBase-input": {
                    paddingY: "8px",
                },
            },
          }}
        />

        {/* Email Input */}
        <Typography sx={{lineHeight: '0px', fontSize: "14px", fontWeight: 'bold', color: "black", fontFamily: "Poppins"}}>
            Email
        </Typography>
        <TextField
          placeholder="Enter your email"
          variant="outlined"
          fullWidth
          margin="normal"
          InputLabelProps={{
            sx: {
                fontSize: "14px",
                fontFamily: "Poppins",
            }
          }}
          InputProps={{
            sx: { 
                fontSize: '14px',
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
        <Typography sx={{lineHeight: '0px', fontSize: "14px", fontWeight: 'bold', color: "black", fontFamily: "Poppins"}}>
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
            }
          }}
          InputProps={{
            sx: { 
                fontSize: '14px',
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
      {/* <Box
        width="60%"
        height="100%"
        sx={{
          bgcolor: "linear-gradient(to bottom, #C1EDF3, #F4EFC5)",
          background: "linear-gradient(to bottom, #C1EDF3, #F4EFC5)",
          borderRadius: "20px",
        }}
      />
    </Box> */}
        <img
        src="/assets/about.png"
        alt="Description of image"
        style={{
          width: "60%",
          height: "100%",
          borderRadius: "20px",
          objectFit: "cover",
        }}
      />
    </Box>
  );
};

export default Login;