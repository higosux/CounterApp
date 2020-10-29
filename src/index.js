import React from 'react';
// Encargado de renderizar en el html
import ReactDOM from 'react-dom';
// import FirstApp from './FirstApp';
import CounterApp from './CounterApp';

import './index.css';
    

const divRoot = document.querySelector('#root');

// ReactDOM.render( <FirstApp  greeting="Hola World"/> , divRoot);
ReactDOM.render( <CounterApp value={123} /> , divRoot);