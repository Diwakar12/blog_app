import React, { Component, Fragment } from "react";
import "./assets/blog.scss";
import { Routes } from "./Routes";
import PageHeader from "./shared/components/Header/PageHeader";
import { ScrollTop } from "./shared/components/ScrollTop/ScrollTop";

export class App extends Component {
  render() {
    return (
      <Fragment>
        <PageHeader />
        <Routes />
        <ScrollTop />
      </Fragment>
    );
  }
}

export default App;
