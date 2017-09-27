import React, { Component } from 'react';
import './Task.css';

class Task extends Component {
  render() {
    return (
      <div className="Task">
        <span>[ ] { this.props.task.task }</span>
        <span id="delete">X</span>
      </div>
    );
  }
}

export default Task;
