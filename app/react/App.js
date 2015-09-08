import React from "react";

import Router from "react-router";

// import TeamNav from "components/TeamNav";
var TeamNav = require("./components/TeamNav.jsx"),
    SocialFooter = require("./components/SocialFooter.jsx");

var RouteHandler = Router.RouteHandler;

class App extends React.Component {
    constructor(props) { // same as getInitialState

        super(props);

    }

    render() { 
        console.log("in App.js render");
        return (
            <div id="main">
                <TeamNav navTabs={this.props.pages} />
                <RouteHandler />
                <SocialFooter />
            </div>
        );
    }
}

export default App;
