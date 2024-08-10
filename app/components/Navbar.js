import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ bgcolor: "transparent", boxShadow: "none" }}>
      <Toolbar sx={{ justifyContent: "space-between", paddingX: "5px" }}>
        <Box display="flex" alignItems="center">
          <img src="/assets/logo.png" alt="Education Bot Logo" style={{ height: 40 }} />
          <Typography variant="h6" component="div" sx={{fontWeight: 'bold', color: "black", fontFamily: "Poppins"}}>
          Education Bot
          </Typography>
        </Box>
        <Button 
            variant="contained" 
            sx={{ 
                bgcolor: "#63C2CF", 
                borderRadius: "10px", 
                fontFamily: "Poppins", 
                textTransform: "none", 
                boxShadow: "none",
                padding: "8px 25px",
                fontWeight: "bold",
                "&:hover": {
                    bgcolor: "#4DA9B6",
                    boxShadow: "none",
            },
            }}>
          Sign out
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;