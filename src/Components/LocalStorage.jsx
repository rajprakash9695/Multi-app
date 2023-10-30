import { Box, Button, Container, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
// import { useLocalStorage } from "../hooks/useLocalStorage";

const getLocalItems = () => {
  let item = localStorage.getItem("lists");

  if (item) {
    return JSON.parse(localStorage.getItem("lists"));
  } else {
    return [];
  }
};

function LocalStorage() {
  const [value, setValue] = useState("");
  const [data, setData] = useState([]);
  const [getdata, setGetData] = useState();
  // console.log(value);

  const handleSetLocal = () => {
    let result = setData(value);
    console.log(result);
    setValue("");
    alert("Your input is set to local storage");
  };

  const handleGetLocal = () => {
    // console.log("get");
    let result = getLocalItems();
    setGetData(result);
    // console.log("ok");
  };

  const handleRemoveLocal = () => {
    localStorage.removeItem("lists");
    alert("Item is removed from local storage");
    // console.log("removed");
  };

  // const localData = useLocalStorage();

  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(data));
  }, [data]);

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
          <Button onClick={handleSetLocal} variant="contained">
            Set Local
          </Button>
          <Button onClick={handleGetLocal} variant="contained">
            Get Local
          </Button>
          <Button variant="contained" onClick={handleRemoveLocal}>
            Remove From Local
          </Button>
        </Box>
        <Box>{getdata} </Box>
      </Box>
    </Container>
  );
}

export default LocalStorage;
