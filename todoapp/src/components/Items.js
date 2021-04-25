import React from "react";
import doneimage from "../images/check-done.png";

const Items = (props) => (
  <div className="Items">
    <img src={doneimage} alt="" />
    <p>{props.title}</p>
  </div>
);

export default Items;
