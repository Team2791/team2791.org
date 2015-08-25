import React from "react";

import Router from "react-router";

// import TeamNav from "components/TeamNav";
var TeamNav = require("./components/TeamNav.jsx");

var RouteHandler = Router.RouteHandler;

class App extends React.Component {
    constructor(props) { // same as getInitialState

        super(props);

    }

    render() { 
        console.log("in App.js render");
        return (
            <div id="main" className="container">
                <TeamNav navTabs={this.props.pages} />
                <h1>App</h1>
                <RouteHandler />
            </div>
        );
    }
}

export default App;
