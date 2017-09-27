import React, { Component } from 'react';
import UserLists from './UserLists';
import LogOut from './LogOut';
import LogIn from './LogIn';
import './App.css'

class App extends Component {

  constructor() {
    super();
    this.logout = this.logout.bind(this);
    this.login = this.login.bind(this);
  }

  login() {
    this.forceUpdate();
  }

  logout() {
    localStorage.clear();
    this.forceUpdate();
  }

  render() {
    if (localStorage.getItem("token")) {
      return (
        <div>
        <div id="navbar">
          SquareCheck
        <LogOut logout={ this.logout }/>
        </div>
        <UserLists 
          conn={ this.props.conn } 
        />
        </div>
      )
    } else {
      return (
        <LogIn conn={ this.props.conn } reloadApp={ this.login } />
      )
    }
  }
}

export default App;
