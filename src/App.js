import React from 'react';
import Nav from './components/Nav'
import './App.css';
import Items from './components/Items'

const App = () => {
  return (
    <div className="App-header">
      <div className="navWrap">
        <Nav />
      </div>
      <h1 className="head">Clothing</h1>
      <div className="itemWrap">
        <Items />
      </div>
    </div>
  )
}

export default App;
