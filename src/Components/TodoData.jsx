import {
  Box,
  Button,
  Container,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

function TodoData() {
  const [input, setInput] = useState("");

  const [items, setItems] = useState([]);

  const [toggle, setToggle] = useState(true);

  const [isEditItem, setIsEditItem] = useState(null);

  //   console.log(input);

  const addItem = (e) => {
    if (!input) {
      alert("Please enter your Todo");
    } else if (input && !toggle) {
      setItems(
        items.map((item) => {
          if (item.id === isEditItem) {
            console.log("ok");
            return {
              ...item,
              name: input,
            };
          }
          return item;
        })
      );
      setToggle(true);
      setInput("");
      setIsEditItem(null);
    } else {
      const allInputData = { id: new Date().getTime().toString(), name: input };

      setItems([...items, allInputData]);
      setInput([]);
    }
  };

  const handleEdit = (id) => {
    let newEditItems = items.find((item) => {
      return item.id == id;
    });
    setToggle(false);
    console.log(newEditItems);
    setInput(newEditItems.name);
    setIsEditItem(id);
  };

  const handleDelete = (index) => {
    const deleteItem = items.filter((item) => {
      return index != item.id;
    });
    setItems(deleteItem);
  };

  const handleRemoveAll = () => {
    setItems([]);
  };

  return (
    <Box>
      <Container maxWidth="md">
        <Box display={"flex"} flexDirection={"column"}>
          <Typography my={2} variant="h4">
            Add your Todo
          </Typography>
          <Box display={"flex"} gap={1}>
            <TextField
              fullWidth
              label="Add Your Task...."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            {toggle ? (
              <Button variant="outlined" onClick={addItem}>
                Add
              </Button>
            ) : (
              <Button variant="outlined" onClick={addItem}>
                Edit
              </Button>
            )}
          </Box>
          <Box>
            <Typography my={3} variant="h5">
              Your Task
            </Typography>

            <Table>
              <TableHead>
                <TableRow>
                  <TableCell align="left">Task</TableCell>
                  <TableCell align="left">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {items.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>
                      <Button
                        variant="outlined"
                        onClick={() => handleEdit(item.id)}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="outlined"
                        onClick={() => handleDelete(item.id)}
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

            <Button variant="contained" onClick={handleRemoveAll}>
              Remove All
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default TodoData;
