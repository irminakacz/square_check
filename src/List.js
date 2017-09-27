import React, { Component } from 'react';
import Task from './Task';
import './List.css';

class List extends Component {

  render() {
    const tasks = this.props.list.tasks.map(task => {
      return <Task key={ "task_" + task.id } task={ task } />;
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
