import React, { Component } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import { Dashboard } from "../Components/Dashboard/Dashboard";
import  {ArticlesDetails} from "../Components/ArticlesDeatils/ArticlesDetails"

export class Routes extends Component {
    render() {
        return (
            <Switch>
              <Route exact path="/" component={Dashboard}/>
               <Route exact path='/:id' component={ArticlesDetails}/>

            </Switch>
        )
    }
}

export default Routes
