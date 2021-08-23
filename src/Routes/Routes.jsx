import React, { Component } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import { Dashboard } from "../components/Dashboard/Dashboard"

export class Routes extends Component {
    render() {
        return (
            <Switch>
              <Route path="/" component={Dashboard}/>

            </Switch>
        )
    }
}

export default Routes
