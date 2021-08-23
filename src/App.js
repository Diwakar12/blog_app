import React, { Component, Fragment } from 'react';
import "./assets/travel.scss";
import { Routes } from "./Routes";
import PageHeader from "./shared/components/Header/PageHeader";


export class App extends Component {
  render() {
    return (
      <Fragment>
        <PageHeader/>
         <Routes />
      </Fragment>

    )
  }
}

export default App

