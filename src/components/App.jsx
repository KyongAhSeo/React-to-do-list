import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import AddIcon from "@material-ui/icons/Add";
import PlaylistAddCheckIcon from "@material-ui/icons/PlaylistAddCheck";
import Fab from "@material-ui/core/Fab";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems(function (prevItems) {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

  function deleteItem(id) {
    setItems(function (prevItems) {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>
          <PlaylistAddCheckIcon />
          To Do List
        </h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <Fab aria-label="add" onClick={addItem}>
          <AddIcon />
        </Fab>
      </div>
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <ToDoItem key={index} id={index} text={todoItem} onChecked={deleteItem} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
