import React from "react";
import { Typography } from "@mui/material";

const NotFound = () => {
  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <Typography variant="h4" color="error">
        404 - Page Not Found
      </Typography>
    </div>
  );
};

export default NotFound;
