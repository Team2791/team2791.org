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
                </div>
            </div>
        );
    }
}

export default Updates;
