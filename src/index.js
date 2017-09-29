import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let baseURL = null;
if (process.env.REACT_APP_DEV) {
  localStorage.setItem('baseURL', 'http://localhost:8000' );
} else {
  localStorage.setItem('baseURL', 'https://square-check-api.herokuapp.com');
}

ReactDOM.render(<App />, document.getElementById('root'));
