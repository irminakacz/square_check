import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import axios from 'axios';

let conn = null;

if (process.env.REACT_APP_DEV) {
  conn = axios.create({ 
    baseURL: 'http://localhost:8000' 
  });
} else {
  conn = axios.create({ 
    baseURL: 'https://square-check-api.herokuapp.com'
  });
}

ReactDOM.render(<App conn={ conn } />, document.getElementById('root'));
