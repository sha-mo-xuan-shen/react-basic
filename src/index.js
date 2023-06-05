
//React 核心包
import React from 'react';
//React 渲染包
import ReactDOM from 'react-dom/client';
//全局样式
import './index.css';
//入口文件
import App from './App.js';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //严格模式节点需要去掉
  //userEffect的执行时机
    <App />
);