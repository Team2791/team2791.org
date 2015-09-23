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
                    date: new Date(2014, 8, 4),
                    title: "Test Post 1",
                    text: `
GitHub supports many extras in Markdown that help you reference and link to people. If you ever want to direct a comment at someone, you can prefix their name with an @ symbol: Hey @kneath — love your sweater!

But I have to admit, tasks lists are my favorite:

- [x] This is a complete item
- [ ] This is an incomplete item

[Link](https://www.google.com)
                    `
                },
                {
                    date: new Date(2014, 7, 16),
                    title: "Test Post 0",
                    text: `
Sometimes you want numbered lists:

1. One
2. Two
3. Three

Sometimes you want bullet points:

* Start a line with a star
* Profit!

Alternatively,

- Dashes work just as well
- And if you have sub points, put two spaces before the dash or star:
  - Like this
  - And this
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
            <div className={"posts-container " + (this.props.full ? "col-md-9" : "col-md-12")}>
                {posts}
            </div>
        )
    }
}

export default UpdatesList;
