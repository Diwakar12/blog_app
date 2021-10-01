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
         <div class="back-top back-top-show"><i class="bi bi-arrow-up-short"></i></div> 
      </Fragment>

    )
  }
}

export default App

