import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css'
import { CSSTransitionGroup } from 'react-transition-group'
// import Menu from './components/menu/NavBar'
// import Barang from './components/barang/Barang'

// const items = ['Home', 'Pesan Barang', 'About', 'Contact us'];



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
// ReactDOM.render(
//   <React.StrictMode>
//     <Barang barang={barang}/>
//   </React.StrictMode>,
//   document.getElementById('barang')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
