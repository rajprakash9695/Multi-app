import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import { Link, Navigate } from "react-router-dom";

function PageNotFound() {
  return (
    <Container>
      <Box
        sx={{
          height: "80vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h3">Page Not Found</Typography>
        <Link to="/">
          <Button variant="contained">Go to Home</Button>
        </Link>
      </Box>
    </Container>
  );
}

export default PageNotFound;
