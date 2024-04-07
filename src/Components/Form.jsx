import { Box, Button, Container, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { json } from "react-router-dom";

function Form() {
  const [input, setInput] = useState({
    name: "",
    roll: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setInput((pre) => ({ ...pre, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit");
    console.log("input", input);
    alert(`Name is ${input.name} And Roll is ${input.roll}`);
    setInput({ name: "", roll: "" });
  };

  useEffect(() => {
    localStorage.setItem("data", {
      name: json.toString(input.name),
      roll: input.roll,
    });
  });

  return (
    <Box textAlign={"center"}>
      <Container maxWidth={"xl"}>
        <Typography variant="h4" color={"secondary"}>
          Form
        </Typography>
        <form action="" onSubmit={handleSubmit}>
          <TextField
            label="Name"
            name="name"
            value={input.name}
            onChange={handleChange}
            variant="outlined"
            required
          />
          <TextField
            label="Roll"
            name="roll"
            value={input.roll}
            onChange={handleChange}
            variant="outlined"
            required
          />
          <Button type="submit">Submit</Button>
        </form>
      </Container>
    </Box>
  );
}

export default Form;
