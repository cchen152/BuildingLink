import React, {Component} from 'react';
import Login from "./guests/Login";
import {Switch, Route} from "react-router-dom";

class Main extends Component {
    render() {
        return (
            <div className="Main">
                <Switch>
                    <Route path="/login" component={Login} />
                </Switch>
            </div>
        );
    }
}

export default Main;