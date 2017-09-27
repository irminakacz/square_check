import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import axios from 'axios';

const conn = axios.create({ baseURL: 'http://localhost:8000' });

ReactDOM.render(<App conn={conn} />, document.getElementById('root'));
