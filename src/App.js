import React, { Component } from "react"; //different
import logo from "./logo.svg";
import "./App.css";
import Plus from "./img/plus.svg";
import TodoItem from "./components/TodoItem";
import TrafficLight from "./components/TrafficLight";

class App extends Component {
  constructor() {
    super();
    this.state = {
      newState: '',
      todoItems: [
        { title: "Buy little rice", isComplete: true },
        { title: "Go to play video game", isComplete: false },
        { title: "Code to do list", isComplete: false },
      ],
    };
    
    this.onClickAddItem = this.onClickAddItem.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onClicked(item) {
    return (event) => {
      const isComplete = item.isComplete;
      const { todoItems } = this.state;
      const index  = todoItems.indexOf(item);
      this.setState({
        todoItems: [
          ...todoItems.slice(0, index),
          {
            ...item,
            isComplete: !isComplete,
          },
          ...todoItems.slice(index + 1),
        ],
      });
    };
  }

  onClickAddItem(event){
    const text = event.target.value;
    if(event.keyCode === 13){
      this.setState({
        newItem: "",
        todoItems:[
          {title: text, isComplete: false},
          ...this.state.todoItems
        ]
      })
    }
  }
  
  onChange(event){
    this.setState({
      newItem: event.target.value
    })
  }

  render() {
    const { todoItems, newItem } = this.state;
    let plus = Plus
    if (todoItems.length) {
      return (
        <div className="App">
          <div className="Header">
            <img src={plus} alt="" width={32} height={32}/>
            <input 
              value={newItem} 
              type="text" 
              placeholder="Add a new item..." 
              onKeyUp={this.onClickAddItem}
              onChange={this.onChange}/>
          </div>
          {
            todoItems.map((item, index) => 
              <TodoItem
                key={index}
                item={item}
                onClick={this.onClicked(item)}
              />
            )}
        </div>
      );
    }
  }
}

export default App;
