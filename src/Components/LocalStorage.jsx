import { Box, Button, Container, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

function LocalStorage() {
  const [value, setValue] = useState("");
  console.log(value);

  const localData = useLocalStorage();

  return (
    <Container maxWidth="md">
      <Box
        textAlign={"center"}
        display={"flex"}
        flexDirection={"column"}
        gap={2}
      >
        <Typography variant="h4">Local Storage uses</Typography>
        <TextField
          label="Use Local storage"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Box display={"flex"} gap={1} justifyContent={"center"}>
          <Button variant="contained">Set Local</Button>
          <Button variant="contained">Get Local</Button>
          <Button variant="contained">Remove From Local</Button>
        </Box>
        <Box> jkasdhkds</Box>
      </Box>
    </Container>
  );
}

export default LocalStorage;
