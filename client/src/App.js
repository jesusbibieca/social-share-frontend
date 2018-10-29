import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import Recipe from './components/recipe';
import store from './store';

class App extends Component {
  render() {
    return ( 
    <Provider store = { store } >
      <div className = "App" >
      <h1> Hello World!! </h1>
      <Recipe />
      </div> 
    </Provider>
    
    );
  }
}

export default App;
