import React from "react";

const AddItems = (props) => {
  return (
    <div className="AddItem">
      <input type="text" onChange={props.onClickAddItem}></input>
      {/* <button onClick={props.onClickAddItem}>Add</button> */}
    </div>
  );
};
export default AddItems;
