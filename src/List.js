import React, { Component } from 'react';
import Task from './Task';
import axios from 'axios'
import './List.css';

class List extends Component {

  constructor() {
    super();
    this.state = {
      tasks: []
    }
    this.checkTask = this.checkTask.bind(this);
  }

  componentDidMount() {
    let tasks = [];

    let conn = axios.create({
      baseURL: localStorage.getItem('baseURL'),
      headers: { Authorization: "JWT " + localStorage.getItem("token") }
    });

    conn.get("/lists/" + this.props.list.id + "/").then(response => {
      response.data.tasks.forEach(task => {
        tasks.push({
          id: task.id,
          task: task.task, 
          done: task.done
        });
      })

      this.setState({
        tasks: tasks
      });
    });
  }


  checkTask() {
    this.forceUpdate();
  }

  render() {
    const tasks = this.state.tasks.map(task => {
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
