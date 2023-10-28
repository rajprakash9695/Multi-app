// import {
//   Box,
//   Button,
//   Card,
//   CardContent,
//   CardHeader,
//   Container,
//   TextField,
//   Typography,
// } from "@mui/material";
// import React, { useState } from "react";

// function Signup() {
//   const [initialValue, setInitialValue] = useState({
//     name: "",
//     password: "",
//     email: "",
//   });

//   const [value, setValue] = useState(null);

//   //   console.log("log", value);
//   //   console.log("log", initialValue);
//   const handleChange = (e) => {
//     // setInitialValue(e.target.value);
//     // console.log("ok");

//     const { name, value } = e.target;
//     setInitialValue((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // setInitialValue({ ...initialValue });
//     // console.log(initialValue);
//     setValue({ ...initialValue });
//   };

//   return (
//     <Box textAlign={"center"}>
//       <Container maxWidth={"sm"}>
//         <Card>
//           <CardHeader title="Signup" />
//           <CardContent
//             sx={{
//               display: "flex",
//               flexDirection: "column",
//               gap: "15px",
//             }}
//           >
//             <form onSubmit={handleSubmit}>
//               <TextField
//                 variant="outlined"
//                 fullWidth
//                 label="Name"
//                 name="name"
//                 value={initialValue.name}
//                 onChange={handleChange}
//               />
//               <TextField
//                 variant="outlined"
//                 type="password"
//                 fullWidth
//                 label="Password"
//                 name="password"
//                 value={initialValue.password}
//                 onChange={handleChange}
//               />
//               <TextField
//                 variant="outlined"
//                 fullWidth
//                 type="email"
//                 name="email"
//                 value={initialValue.email}
//                 onChange={handleChange}
//                 label="Email"
//               />
//               <Button onSubmit={handleSubmit}>Submit</Button>
//             </form>
//             {value && <Typography> Email: {value.name}</Typography>}
//           </CardContent>
//         </Card>
//       </Container>
//     </Box>
//   );
// }

// export default Signup;

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  // console.log("log", inputData);
  // console.log("log1", displayData);
  const handleSubmit = (e) => {
    e.preventDefault();
    setDisplayData({ ...inputData });
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
            <form onSubmit={handleSubmit}>
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
                <Button type="submit">Submit</Button>
              </Box>
            </form>
            {displayData && (
              <Typography>
                Name: {displayData.name}, Email: {displayData.email} , Password:{" "}
                {displayData.password} , Confirm Password:{" "}
                {displayData.cfPassword}
              </Typography>
            )}
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}

export default Signup;
