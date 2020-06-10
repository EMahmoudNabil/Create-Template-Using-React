import React, { Component } from 'react';
import {Route } from 'react-router-dom';
import './App.css';
import Index from './index/index'
import Navbar from './Navbar/index'
import Contact from './Contact/index'

class App extends Component {
  render(){

    return (
      <div className="App">
          <h1>Project</h1>
          <Navbar />
          <Route  exact path= '/' component ={Index} />
          <Route  path= '/contact' component ={Contact} />
      </div>
    );

  }

}

export default App;
