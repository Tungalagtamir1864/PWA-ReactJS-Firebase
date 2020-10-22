import React from 'react';
// import ReactDOM from 'react-dom';
// import logo from './logo.svg';
import './App.css';
import CatalogA from './CatalogA'
import 'bootstrap/dist/css/bootstrap.min.css'
// import { CSSTransitionGroup } from 'react-transition-group'


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div className="Card">
        <h1>Digital Store</h1>

        <CatalogA />
        </div>
      </header>
    </div>
  );
}

export default App;
