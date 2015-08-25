import React from "react";

import Router from "react-router";

// import App from "App.js";

var App = require("./App.js");

// window.React = React;

/*console.log("in main.js");

React.render(<App/>, document.getElementById("main"));
*/

console.log("in mian.js");

const pages = [
    {
        name: "Home",
        route: "/home"
    },
    {
        name: "Updates",
        route: "/updates"
    },
    {
        name: "About",
        route: "/about"
    },
    {
        name: "Get Involved",
        route: "/involved"
    },
    {
        name: "Sponsors",
        route: "/sponsors"
    },
    [
        {
            name: "Sign In",
            route: "/members/sign_in"
        },
        {
            name: "Calendar",
            route: "/members/calendar"
        }
    ]
];

class Home extends React.Component {
    render() {
        return <h2>Home</h2>;
    }
}

class About extends React.Component {
    render() {
        return <h2>About</h2>;
    }
}

class AppWrapper extends React.Component { 
    render() {
        return (
            <App pages={pages} />
        );
    }
}

var Route = Router.Route;

var DefaultRoute = Router.DefaultRoute;

var routes = (
    <Route handler={AppWrapper}>
        <Route path="/home" handler={Home} />
        <Route path="/about" handler={About} />
        <DefaultRoute handler={Home} />
    </Route>
);

Router.run(routes, Router.HistoryLocation, (Root) => {
    React.render(<Root/>, document.body);
});
