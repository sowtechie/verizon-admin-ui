import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return <React.Fragment>
            <div>
                home page
            </div>
        </React.Fragment>
    }
}