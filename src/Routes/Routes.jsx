import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Dashboard } from "../Components/Dashboard/Dashboard";
import { ArticlesDetails } from "../Components/ArticlesDeatils/ArticlesDetails";
import { Register } from "../Components/Register/Register";

export class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/" component={Register} />
        <Route exact path="/:id" component={ArticlesDetails} />
      </Switch>
    );
  }
}

export default Routes;
