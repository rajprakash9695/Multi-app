import { Box, Container, Typography } from "@mui/material";
import React from "react";

function Home() {
  return (
    <Container>
      {/* <Typography>Home</Typography> */}
      <Box mt={5}>
        <img
          src="https://i.pinimg.com/originals/d1/40/fa/d140fa7454523f708c72d2242a9c970d.png"
          alt="image"
          width={1100}
        />
      </Box>
    </Container>
  );
}

export default Home;
