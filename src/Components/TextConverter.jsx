import {
  Box,
  Button,
  Container,
  TextField,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import React, { useState, useRef } from "react";

function TextConverter() {
  const [inputdata, setInputData] = useState("");
  const [converted, setConerted] = useState("");
  const textInputRef = useRef(null);

  //   console.log(inputdata);

  const handleUpperCase = (e) => {
    // console.log("Upper case");
    if (!inputdata) {
      alert("Please enter text");
    } else {
      setConerted(inputdata.toUpperCase());
      setInputData("");
    }
  };

  const handleLowerCase = () => {
    if (!inputdata) {
      alert("Please enter text");
    } else {
      setConerted(inputdata.toLowerCase());
      setInputData("");
    }
  };

  //
  const handleCopy = () => {
    if (!converted) {
      alert("Nothing to copy.");
      return;
    }

    // Create a temporary input element to copy text to the clipboard
    const tempInput = document.createElement("input");
    tempInput.value = converted;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);

    alert("Text copied to clipboard!");
  };

  return (
    <Container>
      <Box textAlign={"center"}>
        <Box mb={2}>
          <Typography variant="h4" fontFamily={"unset"} fontSize={"40px"}>
            Text Converter
          </Typography>
        </Box>
        <Box>
          <TextField
            fullWidth
            label="Enter Your Text"
            value={inputdata}
            onChange={(e) => setInputData(e.target.value)}
          />
        </Box>
        <Box display={"flex"} gap={2} flexWrap={"wrap"} my={2}>
          <Button variant="contained" onClick={handleUpperCase}>
            UpperCase
          </Button>
          <Button variant="contained" color="warning" onClick={handleLowerCase}>
            LowerCase
          </Button>
          {/* <Button variant="contained" color="secondary">
            LowerCase
          </Button>
          <Button variant="contained" color="success">
            LowerCase
          </Button> */}
        </Box>
        <Box>
          <Typography>Copy Your Text</Typography>
        </Box>
        <Box display={"flex"} gap={1}>
          <TextField
            fullWidth
            value={converted}
            inputRef={textInputRef}
            onChange={() => {}}
          />
          <Button variant="outlined" onClick={handleCopy}>
            Copy
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default TextConverter;
