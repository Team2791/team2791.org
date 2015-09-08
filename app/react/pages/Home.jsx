import React from "react";

import {Jumbotron} from "react-bootstrap";

class Home extends React.Component {

    render() {
        return (
            <div>
                <Jumbotron id="homeJumbo" componentClass="header">
                    <div className="container">
                        <h1>Team 2791</h1>
                        <p>A FRC robotics team from Latham, NY</p>
                    </div>
                </Jumbotron>
                <div className="container">
                    <div className="row">
                        <div className="col-md-9 col-sm-12 col-xs-12">
                            <div className="row">
                                <div className="col-md-4 col-sm-4 col-xs-4">
                                    hai1
                                </div>
                                <div className="col-md-4 col-sm-4 col-xs-4">
                                    hai2
                                </div>
                                <div className="col-md-4 col-sm-4 col-xs-4">
                                    hai3
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-8 col-md-offset-2">
                                    SPONSORS
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 hidden-sm hidden-xs">
                            <a className="twitter-timeline" href="https://twitter.com/FRC2791" data-widget-id="565287852091928579">Tweets by @FRC2791</a>
                            {!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'https':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs")}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
