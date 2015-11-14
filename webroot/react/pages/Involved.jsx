import React from "react";
import {Button} from "react-bootstrap";
import {Link} from "react-router";

class Involved extends React.Component {

    componentDidMount() {
        $('.accordion a').click(function(j) {
            if(!j.toElement.host) {
                var dropDown = $(this).closest('li').find('div');

                $(this).closest('.accordion').find('div').not(dropDown).slideUp();

                if ($(this).hasClass('active')) {
                    $(this).removeClass('active');
                } else {
                    $(this).closest('.accordion').find('a.active').removeClass('active');
                    $(this).addClass('active');
                }

                dropDown.stop(false, true).slideToggle();
                // j.preventDefault();
            }
        });
    }

    render() {
        return (
            <div className="container">
                <div className="page-header">
                    <h2>Get Involved</h2>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <ul className="accordion">
                            <li id="high_school">
                                <a className="fold">High School Students</a>
                                <div>
                                    <h3>Join!</h3>
                                    <p>All Shaker High School students may join Shaker Robotics. Listen to the announcements in September and November for more information.</p>
                                    <p>Be aware that Robotics members are expected to be in attendance for at least 40 hours in order to go to competition. Also, those students who want to be directors cannot participate in winter sports.</p>
                                    <p>Other high schoolers can search for events and teams near them <a className="accLink"href="http://www.usfirst.org/whats-going-on">here.</a></p>
                                </div>
                            </li>
                            <li id="college">
                                <a className="fold">College Students</a>
                                <div>
                                    <h3>Mentoring</h3>
                                    <p>If you are majoring in a STEM field and/or have high school experience with FIRST, go to school in the Capital Region, and are interested in becoming a mentor, <a href="mailto:ShakerRobotics@team2791.org">let us know.</a> If you are interested, but live elsewhere, <a href="http://www.usfirst.org/whats-going-on">find a team near you.</a></p>
                                </div>
                            </li>
                            <li id="adult">
                                <a className="fold">Adult Professionals</a>
                                <div>
                                    <h3>Mentoring</h3>
                                    <p>If you're interested in mentoring and live in the Latham or Albany area, <a href="mailto:ShakerRobotics@team2791.org">let us know!</a> If you are interested, but live elsewhere, <a href="http://www.usfirst.org/whats-going-on">find a team near you.</a></p>
                                </div>
                            </li>
                            <li id="parent">
                                <a className="fold">Parents</a>
                                <div>
                                    <h3>Volunteer</h3>
                                    <p>We're glad to have any members' parents and members of the North Colonie community help out. <a href="mailto:ShakerRobotics@team2791.org">Contact us for more information.</a></p>
                                    <p>Parents may also volunteer for our regional robotics competition, the <a href="http://www.techvalleyfirst.org/index.php?page=volunteer">New York Tech Valley Regional</a>.</p>
                                </div>
                                <div>
                                    <h3>Feed us!</h3>
                                    <p>Throughout the year, especially during build season, we work on our robot for over five hours a day. And we get hungry. </p>
                                    <p>At the beginning of build season, parents may sign up to bring meals for Mondays or Wednesdays. Participating parents should keep in mind that there are often more than 50 ravenous teens, some of which have dietary restrictions, such as nut allergies. Also, a vegetarian option is required.</p>
                                </div>
                            </li>
                            <li id="sponsor">
                                <a className="fold">Sponsors</a>
                                <div>
                                    <h3>Contribute</h3>
                                    <p>View our current sponsors <Link to="/sponsors">here</Link>.</p>
                                    <ul>
                                        <li><strong>Platinum sponsors</strong> get their large logo placed on our website, robot, team T-shirt, and team banner. Also, they receive official sponsor plaque and plugs in media articles about us.</li>
                                        <li><strong>Gold sponsors</strong> get their medium logo on the website, robot, team T-shirt, and team banner, along with an official sponsor plaque.</li>
                                        <li><strong>Silver sponsors</strong> get their small logo on the website, robot, team T-shirt, and team banner, along with an official sponsor plaque.</li>
                                        <li><strong>Bronze sponsors</strong> are listed on our website.</li>
                                    </ul>
                                    <Button href="mailto:ShakerRobotics@team2791.org">Contact us to find out more.</Button>
                                </div>
                            </li>
                            <li id="teacher">
                                <a className="fold">Teachers</a>
                                <div>
                                    <h3>Start a team!</h3>
                                    <p>To start a team, you need:</p>
                                    <ul>
                                        <li><strong>Ten or more students</strong>.</li>
                                        <li><strong>Two to three professional engineers</strong> to guide the building of the robot.</li>
                                        <li><strong>Two to three adult volunteers</strong> to handle logistics, including registration and fundraising.</li>
                                        <li><strong>Sponsors.</strong> The 2015 registration fee for rookie teams is $5000, not including costs robot materials, transportation, etc.</li>
                                        <li><strong>A meeting place.</strong> C105 in Shaker is taken, sorry.</li>
                                        <li><strong>Tools and time.</strong> Some sort of workshop and materials for your robot are essential. Teams have made their robots out of all sorts of materials, including <a href="http://i.imgur.com/wI6H3j3.jpg">wood!</a></li>
                                    </ul>
                                    <p><Button href="http://www.usfirst.org/roboticsprograms/frc/start-an-frc-team">Learn more here.</Button></p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Involved;
