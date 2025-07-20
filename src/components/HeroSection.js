import React from "react";
import { Typography, Box } from "@mui/material";

const HeroSection = () => {
  return (
    <Box sx={{ padding: 4, backgroundColor: "#fff3e0", textAlign: "center" }}>
      <Typography variant="h3" gutterBottom>
        Indulge in Sweet Delights
      </Typography>
      <Typography variant="h6" gutterBottom>
        Discover a world of delicious cakes, cookies, and brownies.
      </Typography>
      <Box component="img"
        src="./cakes/Berries Summer Cupcakes.jpg"
        alt="Delicious Cakes"
        sx={{ width: "60%", borderRadius: 4, marginTop: 2 }}
      />
    </Box>
  );
};

export default HeroSection;
