/* global chrome */
import React, { Component } from "react";
import styled from "styled-components";
import watermelon16 from "./watermelon-16.png";
import watermelon24 from "./watermelon-24.png";
import watermelon32 from "./watermelon-32.png";
import watermelon64 from "./watermelon-64.png";
import watermelon128 from "./watermelon-128.png";
import NewTab from "./Components/NewTab";

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
