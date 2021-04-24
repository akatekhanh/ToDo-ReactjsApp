import "./App.css";
import React, { useState } from "react";
import AddItem from "./components/AddItem";
import AppHeader from "./components/AppHeader";
import Items from "./components/Items";

function App() {
  const initialState = [
    {
      title: "Make to do list",
    },
    {
      title: "Sample text!",
    },
  ];
  const [items, setItems] = useState(initialState);
  const onClickAddItem = (e) => setItems([...items, { title: e.target.value }]);
  const showEvent = (event) => {
    console.log(event.target.value);
  };
  return (
    <div className="App">
      <AppHeader></AppHeader>
      <AddItem onClickAdd={showEvent}></AddItem>
      {items.map((item) => (
        <Items title={item.title}></Items>
      ))}
      {/* <Items title={items.title}></Items> */}
    </div>
  );
}

export default App;
