import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom' ;
import NavBar from './components/NavBar.js';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div className="Wrapper">
            <div className="NavBar">
              <NavBar />
            </div>
            <p>
                What is Lorem Ipsum?
                Lorem Ipsum is simply dummy text of the
                printing and typesetting industry. Lorem Ipsum has
                been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to mak
                e a type specimen book. It has survived not only five centuries, but also th
                e leap into electronic typesetting, remaining essentially unchanged.
                It was popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop publishing
                software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
