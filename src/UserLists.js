import React, { Component } from 'react';
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
    this.props.conn.get("/users/", {
      headers: { Authorization: "JWT " + localStorage.getItem("token") }
    }).then(response => {
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
