import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GamingIndex from "../components/GamingIndex";

const HomePage = props => {
    return(
        <Router>
            <Switch>
                <Route exact path="/">
                    <GamingIndex token={props.token} />
                </Route>
            </Switch>
        </Router>
    );
};

export default HomePage;