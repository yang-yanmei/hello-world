import React from 'react';
import ReactDOM from 'react-dom';
import User from './components/root.jsx';

let attachElement = document.getElementById('react-app');
var user = {name:'Sun', city:'Nanjing'};

ReactDOM.render(<h1>Hello World</h1>, attachElement);//实例化根组件，并启动应用

