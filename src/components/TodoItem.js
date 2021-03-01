import React, { Component } from "react";
import "./TodoItem.css";
import classNames from "classnames";
import checkBlack from '../img/check-black.svg'
import checkSuccess from '../img/check-success.svg'
class TodoItem extends Component {
  render() {
    const { item, onClick } = this.props;
    let url = checkBlack;
    if (item.isComplete){
      url = checkSuccess;
    }
    return (
      <div
        // onClick={onClick}
        className={classNames("TodoItem", {
          "TodoItem-complete": item.isComplete,
        })}
      >
        <img onClick={onClick} src={url} width={32}/>
        <p>{this.props.item.title}</p>
      </div>
    );
  }
}

export default TodoItem;
