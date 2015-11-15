import React from "react";
import marked from "marked";

var numToMonth = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

var formatDate = (d) => {
    return numToMonth[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear();
}

marked.setOptions({
    sanitize: true,
    smartypants: true
});

class UpdatesList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [
                {
                    date: new Date(2014, 5, 22),
                    title: "A Successful Season",
                    text: `
Congratulations, Team 2791! We’ve had an incredibly successful season this year, making new friends, learning new things, and most importantly, eating the wonderful food that our various family members and friends have brought in. We were able to reach several goals that we set at the end of last year, including reaching out to more female members, taking the first steps that are needed to forming our very own First Lego League Team, and once again having successful fundraisers for the club, clearly shown by the Electronics Recycling Day and Applebees. All of our team members have also have been required to take safety lessons in the metal shop, wood shop, and in various other potentially hazardous locations.

In addition to these successes during off season, we also reached an impressive level at both our events, moving past qualification matches in both events. We were one of the most impressive “landfill robots” and gained an award at each competition: The Industrial Design Award at Finger Lakes Regional and the Quality Award at the Tech Valley Regional. We are very proud of these achievements, and once again would like to thank the various members of the team and their family and friends for continuously sending support to the team. We’ve had a wonderful year, with an incredibly unique design for our robot.

Our accomplishments have been incredibly impressive this year, and we all hope to see you again next year!
                    `
                },
                {
                    date: new Date(2014, 1, 16),
                    title: "Wall of Hooks",
                    text: `
We’ve gotten our design and are going strong. We will be creating a “wall of hooks”. With an elevator system, the concept is that we would hang the totes on these hooks, which are on top of each other. When the totes are all stacked, the wall will drop, and each tote will fall on top of each other in a stable and controllable way. That’s our basic concept. If you look deeper, you see a modern and innovative wiring system, a new approach to coding, and an incoming wave of fresh and eager builders. But we can guarantee you, this team isn’t all bots. For every bolt in the robot, a word is written by our chairman’s team.

Last year was our first time going for the Chairman’s award, and we went away very proud of the work we did. We didn’t get the award, but the critics and advise the judges gave us really enlightened us. We knew that we were a young team, but there are younger, which means we are stepping up our game. This includes increasing our outreach and demos. This means expanding our team to the younger generation. This means improving our business plan, and reaching out to the community for mentors with real world business experience. We aren’t just a pretty robot, we’ve got a pretty good foundation thanks to a solid Chairman’s team.
                    `
                }
            ]
        }
    }
    render() {

        let posts = null;
        if(this.props.full) {
            posts = this.state.posts.map((val, i) => {
                return (
                    <div className="panel panel-default post-container">
                        <div className="panel-heading">
                            <h3 className="panel-title">
                                {val.title} <small className="post-meta">{formatDate(val.date)}
                            </small></h3>
                        </div>
                        <div className="panel-body post-text" dangerouslySetInnerHTML={{__html: marked(val.text)}}></div>
                    </div>
                );
            });
        }
        else {
            posts = this.state.posts.slice(0, 3).map((val, i) => {
                return (
                    <div className="panel panel-default post-container">
                        <div className="panel-heading">
                            <h4 className="panel-title">
                                {val.title} <small className="post-meta">{formatDate(val.date)}
                            </small></h4>
                        </div>
                        <div className="panel-body post-text" dangerouslySetInnerHTML={{__html: marked(val.text)}}></div>
                    </div>
                );
            });
        }
        return (
            <div className={"posts-container " + (this.props.full ? "col-md-9" : "col-md-9")}>
                {posts}
            </div>
        )
    }
}

export default UpdatesList;
