import React from "react";
import { AppBar, Toolbar, Typography, Avatar } from "@mui/material";

const Header = () => {
  return (
    <AppBar position="static" color="secondary">
      <Toolbar>
        <Avatar src="/logo.jpg" alt="Bake My Cake Logo" sx={{ marginRight: 2 }} />
        <Typography variant="h5" component="div">
          Bake My Cake
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
