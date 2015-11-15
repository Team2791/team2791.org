import React from "react";

var UpdatesList = require("../content/UpdatesList.jsx");

class Updates extends React.Component {

    render() {
        return (
            <div className="container">
                <div className="page-header">
                    <h2>Updates</h2>
                </div>
                <div className="row">
                    <UpdatesList posts />
                    <div className="col-md-3">
                        <a className="twitter-timeline" href="https://twitter.com/FRC2791" data-widget-id="565287852091928579">Tweets by @FRC2791</a>
                        {!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'https':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs")}
                    </div>
                </div>
            </div>
        );
    }
}

export default Updates;
