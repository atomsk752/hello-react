import React, { Component, Fragment } from 'react';
import './App.css';
import MyComponent from './MyComponent';

class App extends Component {
  render() {

    const text = 'a u awesome?';
    const condition = true;
    const style = {
      backgroundColor: 'gray',
      border: '1px solid black',
      height: Math.round(Math.random() * 300) + 50,
      width: Math.round(Math.random() * 300) + 50,
      WebkitTransition: 'all',
      MozTransition: 'all',
      msTransition: 'all'
    };

    return (
      
      <div className="my-div">
        <MyComponent/>
        <h1>Hello react!</h1>
        <h2>{text}</h2>
        {
          condition && 'show'
        }
        <div style={style}></div>
      </div>
      );
  }
}

export default App;
