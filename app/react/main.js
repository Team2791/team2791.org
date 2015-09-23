import React from "react";

import Router from "react-router";

// import App from "App.js";

var App = require("./App.js"),
    NotFound = require("./pages/utils/NotFound.jsx"),
    Home = require("./pages/Home.jsx");

// window.React = React;

const pages = [
    {
        name: "Home",
        route: "/home",
        page: Home
    },
    {
        name: "Updates",
        route: "/updates",
        page: require("./pages/Updates.jsx")
    },
    {
        name: "About",
        route: "/about",
        page: require("./pages/About.jsx")
    },
    {
        name: "Get Involved",
        route: "/involved",
        page: require("./pages/Involved.jsx")
    },
    {
        name: "Sponsors",
        route: "/sponsors",
        page: require("./pages/Sponsors.jsx")
    },
    [
        {
            name: "Sign In",
            route: "sign_in",
            page: require("./pages/members/SignIn.jsx")
        },
        {
            name: "Calendar",
            route: "calendar",
            page: require("./pages/members/Calendar.jsx")
        }
    ]
];

class AppWrapper extends React.Component { 
    render() {
        return (
            <App pages={pages} />
        );
    }
}

var Route = Router.Route,
    DefaultRoute = Router.DefaultRoute,
    NotFoundRoute = Router.NotFoundRoute;

var innerRoutes = pages.slice(0, -1).map((val, i) => {
    return <Route path={val.route} handler={val.page} name={val.name} />
}).concat(pages[pages.length - 1].map((val, i) => {
    return <Route path={"/members/" + val.route} handler={val.page} name={val.name} />
}));


var routes = (
    <Route handler={AppWrapper}>
        { innerRoutes }
        <DefaultRoute handler={Home} />
        <NotFoundRoute handler={NotFound} />
    </Route>
);

Router.run(routes, Router.HistoryLocation, (Root) => {
    React.render(<Root/>, document.body);
});
