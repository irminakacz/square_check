import React, { Component } from 'react';
import axios from 'axios'
import './LogIn.css';

class LogIn extends Component {

  constructor() {
    super();

    this.state = {
      username: "",
      password: "",
      errorMessage: ""
    }

    this.saveUsername = this.saveUsername.bind(this);
    this.savePassword = this.savePassword.bind(this);
    this.authenticate = this.authenticate.bind(this);
  }

  saveUsername(event) {
    this.setState({
      username: event.target.value
    });
  }

  savePassword(event) {
    this.setState({
      password: event.target.value
    });
  }

  authenticate(event) {
    event.preventDefault();

    let conn = axios.create({
      baseURL: localStorage.getItem("baseURL")
    });

    conn.post('/square-check-auth/', {
      username: this.state.username,
      password: this.state.password
    }).then(response => {
      localStorage.setItem("token", response.data.token);
      this.setState({
        username: "",
        password: ""
      });
      this.props.login();
    }).catch(error => {
      this.setState({
        errorMessage: "Username or password incorrect"
      });
    });
  }

  render() {
    return (
      <div>
        <div id="navbar">
          SquareCheck
        </div>
        
        <div id="form">
          <div id="login-header">
            Login
          </div>

          <div id="error-message">
          { this.state.errorMessage }
          </div>

          <form>
            <table>
            <tbody>
            <tr>
              <td>
              <label htmlFor="username">Username: </label>
              </td>
              <td>
              <input
              id="username"
              type="text" 
              value={ this.state.username } 
              onChange={ this.saveUsername }
              />
              </td>
            </tr>
            <tr>
              <td>
              <label htmlFor="password">Password: </label>
              </td>
              <td>
              <input
              id="password"
              type="password"
              value={ this.state.password }
              onChange={ this.savePassword }
              />
              </td>
            </tr>
            <tr>
              <td>
              </td>
              <td>
              <button type="submit" onClick={ this.authenticate }>Login</button>
              </td>
            </tr>
            </tbody>
            </table>
          </form>
        </div>
      </div>
    )
  }
}

export default LogIn;
