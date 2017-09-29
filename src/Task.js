import React, { Component } from 'react';
import './Task.css';
import axios from 'axios';

class Task extends Component {
  constructor() {
    super();

    this.state = {
    }
    this.checkTask = this.checkTask.bind(this)
  }

  componentWillMount() {
  }

  checkTask(event) {
    let instance = axios.create({ 
      baseURL: localStorage.getItem('baseURL'),
      headers: { 
        Authorization: "JWT " + localStorage.getItem("token"),
        "Content-Type": "application/json"
      }
    });

    instance.patch("/tasks/" + this.props.task.id + "/", {
      task: this.props.task.task,
      done: !this.props.task.done
    }).then(response => {
      this.props.checkTask();
    })
  }

  render() {
    const taskClasses = this.props.task.done ? "Task done" : "Task";
    const square = this.props.task.done ? "[X]" : "[ ]";
    return (
      <div className={ taskClasses }>
        <div
          onClick={ this.checkTask }
        >
          { square }
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
