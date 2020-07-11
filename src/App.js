import React from 'react';
import Date from './modules/Date/Date.js';
import Rf433Button from './modules/Rf433Button/Rf433Button.js';
import './App.css';

export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        <div className="app__upper">
          <Rf433Button onCommand="5393" offCommand="5396" label="Lights" />
        </div>

        <div className="app__center">

        </div>

        <div className="app__lower">
          <Date />
        </div>
      </div>
    );
  }

  
}
