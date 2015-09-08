import React from "react";
import {Navbar, Nav, NavItem, MenuItem, DropdownButton} from "react-bootstrap";
import {NavItemLink, MenuItemLink} from "react-router-bootstrap";

class TeamNav extends React.Component {
    /*
        Props:
        navTabs: array like dis
        [
            {
                "eventKey": somenum, // STARTING AT 3
                "to": somepath,
                "name": sometext
            }
        ]
    */
    constructor(props) {
        super(props);
    }

    render() {
        // TODO: implement https://github.com/react-bootstrap/react-router-bootstrap

        /*
            will be NavItemLink with "to": 
            and MenuItemLink with "to":
        */
        let navItems = this.props.navTabs.slice(0, -1).map((val, i) => {
                return <NavItemLink to={ val.route } eventKey={i + 3}>{ val.name }</NavItemLink>
            }),
            last = this.props.navTabs[this.props.navTabs.length - 1],
            members = last.map((val, i) => {
                    return <MenuItemLink to={ "/members/" + val.route } eventKey={i.toString()}>{ val.name }</MenuItemLink>
                });

        return (
            <Navbar fixedTop inverse brand="2791" toggleNavKey={0}>
                <Nav id="topNav" eventKey={0}>
                    { navItems }
                    <DropdownButton className="membersButton" bsStyle="primary" eventKey={2} title="Members">
                        { members }
                    </DropdownButton>
                </Nav>
            </Navbar>
        );
    }
}

TeamNav.propTypes = {
    navTabs: React.PropTypes.array
};

export default TeamNav;
