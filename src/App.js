import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Travel from "./Travel";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">My travels</h1>
        </header>
        <Travel
          destination="Hobbiton"
          country="New Zealand"
          distance="19 167 km"
          photo="https://i1.wp.com/have-clothes-will-travel.com/wp-content/uploads/2017/05/IMG_4659.jpg?resize=1020%2C680&ssl=1"
        />
        <Travel
          destination="Vallée d'Aoste"
          country="Italie"
          distance="684 km"
          photo="https://p8.storage.canalblog.com/88/15/1438199/109578404_o.jpg"
        />
      </div>
    );
  }
}

export default App;
