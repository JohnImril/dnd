import React from "react";
import d20 from "./icons/d20.svg";
import archive from "./icons/scrollicon.svg";
import map from "./icons/map.svg";

import "./App.css";

const App = () => {
  return (
    <div className="app">
      <header className="app-header">
        <div className="cards">
          <a
            href="https://archive.thedirtysagestavern.com"
            className="app-header__link"
          >
            <img src={archive} className="logo" alt="logo" />
            Archive
          </a>
          <a
            href="https://foundry.thedirtysagestavern.com"
            className="app-header__link"
          >
            <img src={d20} className="App-logo" alt="logo" />
            Table
          </a>
          <a
            href="https://map.thedirtysagestavern.com"
            className="app-header__link"
          >
            <img src={map} className="logo" alt="logo" />
            Map
          </a>
        </div>
      </header>
      <div className="container"></div>
    </div>
  );
};

export default App;
