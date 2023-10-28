import { Box, Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <Box mt={1}>
      <Box
        display={"flex"}
        flexWrap={"wrap"}
        alignContent={"center"}
        justifyContent={"center"}
        color={"primary"}
      >
        <Link to={"/"}>
          <Button>HOME</Button>
        </Link>

        <Link to="/todo1">
          <Button>Todo</Button>
        </Link>
        <Link to="/converter">
          <Button>Text Converter</Button>
        </Link>
        <Link to="/signup">
          <Button>Signup</Button>
        </Link>
      </Box>
    </Box>
  );
}

export default Navbar;
