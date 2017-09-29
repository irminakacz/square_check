import React, { Component } from 'react';
import axios from 'axios'
import List from './List';

class UserLists extends Component {

  constructor() {
    super();

    this.state = {
      lists: []
    }
  }

  componentDidMount() {
    let lists = [];

    let conn = axios.create({
      baseURL: localStorage.getItem('baseURL'),
      headers: { Authorization: "JWT " + localStorage.getItem("token") }
    });

    conn.get("/users/").then(response => {
      response.data[0].lists.forEach(list => {
        lists.push({
          id: list.id,
          title: list.title, 
          color: list.color,
          tasks: list.tasks
        });
      })

      this.setState({
        lists: lists
      });
    });

  }

  render() {
    const lists = this.state.lists.map(list => {
      return (
        <List 
          key={ "list_" + list.id } 
          list={ list } 
          conn={ this.props.conn }
        />
      );
    });
    return (
      <div>
        { lists }
      </div>
    );
  }
}

export default UserLists;
