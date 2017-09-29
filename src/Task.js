import React, { Component } from 'react';
import './Task.css';
import axios from 'axios';

class Task extends Component {
  constructor() {
    super();

    this.state = {
      checkSquare: "[ ]"
    }
    this.checkTask = this.checkTask.bind(this)
  }

  componentWillMount() {
    let square = "[ ]";
    if (this.props.task.done) {
      square = "[X]";
    }
    this.setState({
      checkSquare: square
    });
  }

  checkTask(event) {
    let square = this.state.checkSquare;

    if (square === "[X]") {
      square = "[ ]";
      event.target.parentNode.style.color = "black";
    } else {
      square = "[X]";
      event.target.parentNode.style.color = "#dddddd";
    }

    let instance = axios.create({ 
      baseURL: 'http://localhost:8000' ,
      headers: { 
        Authorization: "JWT " + localStorage.getItem("token"),
        "Content-Type": "application/json"
      }
    });

    instance.delete("/tasks/" + this.props.task.id + "/"
    ).then(response => {
      console.log(response);
    }).catch(error => {
      console.log(error);
    })

    this.setState({
      checkSquare: square
    });
    this.props.checkTask();
  }

  render() {
    return (
      <div className="Task">
        <div
          onClick={ this.checkTask }
        >
          { this.state.checkSquare }
        </div>
        <div>
          { this.props.task.task }
        </div>
        <div className="delete">X</div>
      </div>
    );
  }
}

export default Task;
