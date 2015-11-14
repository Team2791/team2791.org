import React from "react";
import {Nav, NavItem, Carousel, CarouselItem, Jumbotron} from "react-bootstrap";

var genCarousel = (filenames, captions, prefix, suffix, interval) => {
    let items = captions ? filenames.map((fName, i) => {
        return (
            <CarouselItem>
                <img className="timeline-image" src={prefix + fName + suffix} />
                <div className="carousel-caption">
                    <h3>{captions[i]}</h3>
                </div>
            </CarouselItem>
        );
    }) :
    filenames.map((fName, i) => {
        return (
            <CarouselItem>
                <img className="timeline-image" src={prefix + fName + suffix} />
            </CarouselItem>
        );
    });
    return (
        <Carousel interval={interval}>
            {items}
        </Carousel>
    );
};

class About extends React.Component {
    constructor(props) {
        super(props);
        // http://codepen.io/jenniferperrin/pen/xfwab
        this.state = {
            active: 1,
            contents: [
                (
                    <div className="row">
                        <div className="col-md-12">
                            <Jumbotron id="ourTeamJumbo">
                                <h1>Our Team</h1>
                                <p>Our team of 100 high schoolers, 8 mentors, and many more volunteers is dedicated to our community, our school, and, of course, robots!</p>
                            </Jumbotron>
                        </div>
                        <div className="col-md-10 col-md-offset-1">
                            <h2>Who are we?</h2>
                            <p>
                                Team 2791, founded by Shaker High School technology teachers in 2008, won the Rookie All-Star award in 2009. The team grew from 10 students that year to 20 students two years later. In 2011, we suffered one of our greatest challenge: losing one of our founding teachers to budget cuts. Parents recognized the importance of keeping the team going and stepped up to fill the roles of our lost coach. Coming out of this tough time, Shaker Robotics found its identity.
                            </p>
                            <p>
                                We began developing our image, marked by our notable blue fur hats with white bison horns denoting our school mascot and broadened our fundraising and outreach dramatically. Since this transformation, Shaker Robotics has won FIRST awards every year, increasing local awareness of FIRST with our ability to inspire.
                            </p>
                            <p>
                                Team 2791 is wholeheartedly dedicated to the ideals and goals of FIRST. Through our outreach programs and educational opportunities, we’ve spread these ideas we believe in so profoundly. Our efforts have made a difference not only in the minds of our members, but in the community as a whole. In our local area and beyond, we’re becoming known as connectors of teams to teams, minds to minds, and FIRST to the community. Through our efforts, we’ve inspired those of today, and are well-positioned to carry our legacy of FIRST-spiration into the future.
                            </p>
                            <h2>What do we do?</h2>
                            <p>
                                Starting in the month of January, the team embarks on an intensive 6-week effort to design and build a robot to compete in a game challenge that changes each year. It’s a challenging time that requires dedication and cooperation from every team member. We compete with our robot in high-energy regional competitions, where we learn to scout the strengths and limitations of other teams in order to form team alliances during the later stages of the competition. But the build and competition season is only what we do throughout the year. We conduct numerous robot demonstrations in our community to publicize the benefits of the program to other students and their families, with the goal of igniting the same passion for engineering and technology that lead each of us to join Team 2791. We organize fundraisers to help finance our goals, and presentations to reach out to the community and promote the FIRST Robotics program.
                            </p>
                        </div>
                    </div>
                ),
                (
                    <div className="row">
                        <div className="col-md-12" id="col-outreach">
                            <h2>Outreach</h2>
                            {genCarousel([
                                "msci_1",
                                "crossings_2",
                                "crossings_7",
                                "sjhs_1",
                                "crossings_1",
                                "sjhs_2",
                                "crossings_3",
                                "crossings_6",
                                "msci_2",
                                "camera",
                                "crossings_4",
                                "boy_scout1",
                                "crossings_5"
                            ], null, "/img/outreach/", ".jpg", 900)}
                            <br /><br />
                            <p>
                                Team 2791 educates the minds of young students by organizing events at local libraries, parks, and schools. 
                                We aspire to instill an appreciation of robotics in those we meet. 
                                Our demos are interactive, allowing children to engage in hands-on control of the robot under supervision. 
                                Team 2791 knows these children have great potential, and will usher a new generation of innovation. 
                                Our team has a very strong relationships with the Boy Scout of America in the New York region. 
                                Not only do the troops come to Shaker for tours of our workshop, but we also helped promote and facilitate their Nova STEM week.
                            </p>
                            <p>
                                Our team also volunteered during a Mighty Math Night for children, incorporating about 300 families 
                                from the district. We have also been active in facilitating and judging the local 8th grade science fair, 
                                offering our experience to these eager young minds. In the past summers, we have also given special needs 
                                kids at Averill Park a chance to learn about, and even drive out Robot, These demonstrations serve to inform 
                                the public about opportunities that FIRST offers, often resulting in a surge of new members.
                            </p>
                            <p>
                                Our outreach also strives to improve the welfare of others and the environment. We participated in a charity 
                                walk to benefit youth with diabetes in 2012, sponsored by the Juvenile Diabetes Research Foundation. We have 
                                also hold biannual electronics recycling events at our school. Each recycling day collected about 16,000 lbs. 
                                of electronic materials that can now be properly disposed of, in order to avoid damage to the environment.
                            </p>
                            <p>
                                Fundraisers ensure Team 2791’s financial security, spreading the ideals of FIRST, and helps us reach out and 
                                connect to our sponsors. For example, we met one of our major sponsors, PVA, through a demo at Walmart. At 
                                our annual Applebee’s fundraisers, we hand out tri-fold brochures while students answer questions about FIRST 
                                and robot building. We sell Hoffman’s car wash coupons during the holidays and Shaker car magnets at basketball 
                                games. In the fall, we make and sell handmade hats resembling our school mascot, the blue bison. Students learn 
                                what it takes to fund an organization, becoming personally invested in the program and gaining experience with 
                                real world outreach practices.
                            </p>
                        </div>
                    </div>
                ),
                (<div className="row"><div className="col-md-12">
                    <h2>Past Years</h2>
                    <ul className="timeline">
                        <li>
                            <div className="timeline-badge">
                                <a><i className="fa fa-circle" id=""></i></a>
                            </div>
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                    <h4>2014-2015 Season</h4>
                                </div>
                                <div className="timeline-body" id="carousel2015">
                                    <Carousel>
                                        <CarouselItem>
                                            <img className="timeline-image" src="/img/past_years/2015/lunk.jpg" />
                                            <div className="carousel-caption">
                                                <h3>2015 Robot: Lunk</h3>
                                            </div>
                                        </CarouselItem>
                                        <CarouselItem>
                                            <img className="timeline-image" src="/img/past_years/2015/gm_industrial.jpg" />
                                            <div className="carousel-caption">
                                                <h3>Finger Lakes Regional: GM Industrial Design Award</h3>
                                            </div>
                                        </CarouselItem>
                                        <CarouselItem>
                                            <img className="timeline-image" src="/img/past_years/2015/tech_valley_quality.jpg" />
                                            <div className="carousel-caption">
                                                <h3>Tech Valley Regional: Motorola Quality Award</h3>
                                            </div>
                                        </CarouselItem>
                                        <CarouselItem>
                                            <img className="timeline-image" src="/img/past_years/2015/vol_of_year.jpg" />
                                            <div className="carousel-caption">
                                                <h3>Tech Valley Regional: Nancy Casler Volunteer of the Year</h3>
                                            </div>
                                        </CarouselItem>
                                    </Carousel>
                                </div>
                                <div className="timeline-footer">
                                    <p className="text-right">stuff?</p>
                                </div>
                            </div>
                        </li>

                        <li className="timeline-inverted">
                            <div className="timeline-badge">
                                <a><i className="fa fa-circle invert" id=""></i></a>
                            </div>
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                    <h4>2014 Season</h4>
                                </div>
                                <div className="timeline-body">
                                    <p>Finger Lakes Quality Award Winner</p>
                                </div>
                                <div className="timeline-footer">
                                    <p className="text-right">stuff?</p>
                                </div>
                            </div>
                        </li>
                        <li className="clearfix no-float"></li>
                    </ul>
                </div></div>)
            ]
        };
        this._handleSelect = this._handleSelect.bind(this);
    }

    _handleSelect(selectedKey) {
        this.setState({
            active: selectedKey
        });
    }

    render() {
        return (
            <div className="container">
                <div className="page-header">

                    <Nav pullRight bsStyle="pills" onSelect={this._handleSelect}>
                        <NavItem active={this.state.active === 1} eventKey={1}>Our Team</NavItem>
                        <NavItem active={this.state.active === 2} eventKey={2}>Outreach</NavItem>
                        <NavItem active={this.state.active === 3} eventKey={3}>Past Years</NavItem>
                    </Nav>
                    <h1>About Us</h1>
                </div>
                
                {this.state.contents[this.state.active-1]}
            </div>
        );
    }
}

export default About;
