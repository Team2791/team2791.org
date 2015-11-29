import React from "react";

class SocialFooter extends React.Component {

    render() {
        return (
            <div className="row" id="socialFooter">
                &copy; 2015 FIRST Team 2791 Shaker Robotics
                <div className="col-md-6 col-md-offset-3">
                    <ul className="social">
                        <li className="facebook"><a href="https://www.facebook.com/Team2791"><i className="fa fa-facebook fa-3x"></i></a></li>
                        <li className="twitter"><a href="http://twitter.com/FRC2791"><i className="fa fa-twitter fa-3x"></i></a></li>
                        <li className="email"><a href="mailto:ShakerRobotics@team2791.org"><i className="fa fa-envelope fa-3x"></i></a></li>
                        <li className="github"><a href="https://github.com/Team2791"><i className="fa fa-github fa-3x"></i></a></li>
                        <li className="youtube"><a href="https://www.youtube.com/user/FRC2791/feed"><i className="fa fa-youtube-play fa-3x"></i></a></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default SocialFooter;
