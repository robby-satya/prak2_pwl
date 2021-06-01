
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';

import "./assets/styles.css"

import WebScrap from "./page/scrap";

export default class App extends Component {

  constructor(props){
    super(props);
    this.state ={
      useActivenav: "webScrap",
    }
  }

  render() {
    return (
      <Router>
        <div className="container">
          <div className="navbar">
            <h2>Tugas Scrapping</h2>
          </div>
          <div className="content">
            <Switch>
              <Route exact path="/" component={WebScrap} />
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}
