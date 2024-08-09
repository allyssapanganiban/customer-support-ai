import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
// import logo from '../../app/assets/logo.png'

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ bgcolor: "transparent", boxShadow: "none" }}>
      <Toolbar sx={{ justifyContent: "space-between", padding: "10px 20px" }}>
        <Box display="flex" alignItems="center">
          <img src="/assets/logo.png" alt="Education Bot Logo" style={{ height: 40 }} />
          <Typography variant="h6" component="div" sx={{ marginLeft: 0.2, color: "black", fontFamily: "Poppins"}}>
          <span style={{ fontWeight: 'bold' }}>Education Bot</span>
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
                "&:hover": {
                    bgcolor: "#4DA9B6",
            },
            }}>
          Sign out
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;