import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Button, TextField } from "@mui/material";

function Todo() {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState([]);

  const addItem = () => {
    if (!inputData) {
      alert("Plese enter text");
    } else {
      setItems([...items, inputData]);
      setInputData("");
    }
  };

  const handleEdit = (id, inputData) => {
    console.log("update");
    console.log(id);
    const editItem = setInputData(items.id.target.value);
  };

  const handleRemove = (id) => {
    console.log(id);
    const updatedItems = items.filter((item, index) => {
      return index != id;
    });
    setItems(updatedItems);
  };

  const removeAll = () => {
    console.log("clods");
    setItems([]);
  };

  //   consolezx.log(items);
  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img
              src="https://www.shutterstock.com/image-photo/woman-hands-typing-on-laptop-260nw-564169753.jpg"
              alt="some image"
              height="100px"
            />
            <figcaption>Add your List Here</figcaption>
            <div className="addItems">
              <TextField
                label="Add your Todo"
                type="text"
                value={inputData}
                size="small"
                title="Add"
                onChange={(e) => setInputData(e.target.value)}
              />

              <Button title="Add" variant="outlined" onClick={addItem}>
                Add
              </Button>
            </div>
            <div className="showItems">
              {" "}
              {items.map((item, index) => {
                return (
                  <div className="eachItem" key={index}>
                    <h3>{item}</h3>
                    <Button
                      variant="outlined"
                      onClick={() => handleEdit(index)}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="outlined"
                      title="remove item"
                      onClick={() => handleRemove(index)}
                    >
                      Delete
                    </Button>
                  </div>
                );
              })}
            </div>
            <div className="showItems">
              <Button variant="contained" className="btn" onClick={removeAll}>
                <span>Remove all</span>
              </Button>
            </div>
          </figure>
        </div>
      </div>
    </>
  );
}

export default Todo;
