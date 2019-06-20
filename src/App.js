/* global chrome */
import React, { Component } from "react";
import ReactToPrint from "react-to-print";
import lampara16 from "./lampara-16.png";
import NewTab from "./Components/NewTab";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <NewTab />
      </div>
    );
  }
}

export default App;
