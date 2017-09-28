import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import axios from 'axios';

let conn = null;

console.log(process.env.NODE_ENV);

if (process.env.NODE_ENV === 'development') {
  console.log('development');
  conn = axios.create({ 
    baseURL: 'http://localhost:8000' 
  });
} else {
  console.log('production');
  conn = axios.create({ 
    baseURL: 'https://square-check-api.herokuapp.com'
  });
}

ReactDOM.render(<App conn={ conn } />, document.getElementById('root'));
