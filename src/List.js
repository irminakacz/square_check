import React, { Component } from 'react';
import Task from './Task';
import './List.css';

class List extends Component {

  constructor() {
    super();
    this.checkTask = this.checkTask.bind(this);
  }

  checkTask() {
    this.forceUpdate();
  }

  render() {
    const tasks = this.props.list.tasks.map(task => {
      return (
        <Task 
          key={ "task_" + task.id } 
          task={ task } 
          checkTask={ this.checkTask }
          conn={ this.props.conn }
        />
      );
    });


    return (
      <div className="List">
        <div id="list-title">{ this.props.list.title }</div>
        <div id="list-tasks">
          { tasks }
        </div>
      </div>
    );
  }
}

export default List;
