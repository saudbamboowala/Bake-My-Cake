import React from "react";
import { Box, Typography, Container, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#f8f8f8",
        padding: "2rem 0",
        marginTop: "auto",
        borderTop: "1px solid #e0e0e0",
      }}
    >
      <Container maxWidth="lg" sx={{ textAlign: "center" }}>
        <Typography variant="body2" color="text.secondary">
          © {new Date().getFullYear()} Bake My Cake. All rights reserved.
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          Built with ❤️ using React and Material UI.
        </Typography>
        <Typography variant="body2" sx={{ mt: 1 }}>
          <Link href="/privacy" underline="hover" color="inherit">
            Privacy Policy
          </Link>{" "}
          |{" "}
          <Link href="/terms" underline="hover" color="inherit">
            Terms of Service
          </Link>
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
