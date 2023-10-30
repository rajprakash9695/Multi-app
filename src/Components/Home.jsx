import { Box, Container, Typography } from "@mui/material";
import React from "react";

function Home() {
  return (
    <Container>
      <Box
        mt={5}
        sx={{
          height: "50vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* <img
          src="https://i.pinimg.com/originals/d1/40/fa/d140fa7454523f708c72d2242a9c970d.png"
          alt="image"
          width={1100}
        /> */}{" "}
        <Typography variant="h5">Welcome to my App</Typography>
        <Typography variant="body1">This ia a multi App</Typography>
        <br />
        <br />
        <br />
        <Typography variant="body1">By ... Multi-Family</Typography>
      </Box>
    </Container>
  );
}

export default Home;
