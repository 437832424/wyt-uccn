import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Globalstyle } from './createGlobalStyle'; // 全局样式控制

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Globalstyle />
  </React.StrictMode>,
  document.getElementById('root')
);
