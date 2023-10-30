import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  TextField,
  Typography,
} from "@mui/material";

function Signup() {
  const [inputData, setInputData] = useState({
    name: "",
    password: "",
    email: "",
    cfPassword: "",
  });

  const [displayData, setDisplayData] = useState(null);

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setInputData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };

  let name, value;

  const handleChange = (e) => {
    name = e.target.name;
    value = e.target.value;
    setInputData({
      ...inputData,
      [name]: value,
    });
  };
  // console.log("log", inputData);
  // console.log("log1", displayData);
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setDisplayData({ ...inputData });
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Submit Click");

    const { name, password, email, cfPassword } = inputData;

    if (name && email && password && cfPassword) {
      const res = await fetch(
        "https://signup-form-c349c-default-rtdb.firebaseio.com/signup-form.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            password,
            email,
            cfPassword,
          }),
        }
      );
      if (res) {
        setInputData({
          name: "",
          password: "",
          email: "",
          cfPassword: "",
        });
        alert("data stored SuccesFully");
      }
    } else {
      alert("please fill all the data");
    }
  };

  const handleGetData = async (e) => {
    e.preventDefault();
    console.log("Get data");
    const res = await fetch(
      "https://signup-form-c349c-default-rtdb.firebaseio.com/signup-form.json",
      {
        method: "Get",
      }
    )
      .then((data) => data.json())
      .then((data) => {
        console.log("ok");
        setDisplayData(data);
        console.log(displayData);
        console.log("ok2");
      });
  };

  return (
    <Box textAlign={"center"}>
      <Container maxWidth={"sm"}>
        <Card>
          <CardHeader title="Signup" />
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "15px",
            }}
          >
            <form onSubmit={handleSubmit} method="POST">
              <Box display={"flex"} flexDirection={"column"} gap={2}>
                <TextField
                  variant="outlined"
                  fullWidth
                  label="Name"
                  name="name"
                  value={inputData.name}
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  type="password"
                  fullWidth
                  label="Password"
                  name="password"
                  value={inputData.password}
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  fullWidth
                  type="email"
                  name="email"
                  label="Email"
                  value={inputData.email}
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  fullWidth
                  type="text"
                  name="cfPassword"
                  label="Confirm Password"
                  value={inputData.cfPassword}
                  onChange={handleChange}
                />
                <Button type="submit" onClick={handleSubmit}>
                  Submit
                </Button>
              </Box>
            </form>
            {/* {displayData && (
              <Typography>
                Name: {displayData.name}, Email: {displayData.email} , Password:{" "}
                {displayData.password} , Confirm Password:{" "}
                {displayData.cfPassword}
              </Typography>
            )} */}
          </CardContent>{" "}
        </Card>
        <Button type="submit" onClick={handleGetData}>
          Get data
        </Button>
        <Box>
          {displayData && (
            <Typography>
              Name: {displayData.name}, Email: {displayData.email} , Password:{" "}
              {displayData.password} , Confirm Password:{" "}
              {displayData.cfPassword}
            </Typography>
          )}
        </Box>
      </Container>
    </Box>
  );
}

export default Signup;
