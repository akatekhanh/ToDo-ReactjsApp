import React, { useState } from "react";
import add from "../images/add.png";
const AddItems = (props) => {
  const [text, setText] = useState("");
  const onKeyUp = (event) => {
    if (event.keyCode === 13 && text.text.length > 0) {
      setText({ text: "" });
      return props.onClickAdd(event);
    }
  };

  const onChange = (event) => setText({ text: event.target.value });
  return (
    <div className="AddItem">
      <img src={add} alt="" />
      <input
        type="text"
        value={text.text}
        placeholder="Add Item"
        onChange={onChange}
        onKeyUp={onKeyUp}
      />
    </div>
  );
};
export default AddItems;
