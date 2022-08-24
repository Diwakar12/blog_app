import React, { Component, Fragment } from "react";
import "./assets/blog.scss";
import { Routes } from "./Routes";
// import PageHeader from "./shared/components/Header/PageHeader";

export class App extends Component {
  render() {
    return (
      <Fragment>        
        <Routes />        
      </Fragment>
    );
  }
}

export default App;
