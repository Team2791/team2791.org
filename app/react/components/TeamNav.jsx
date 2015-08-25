import React from "react";
import {Navbar, Nav, NavItem, MenuItem, DropdownButton} from "react-bootstrap";

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
                return <NavItem eventKey={i + 3}>{ val.name }</NavItem>
            }),
            last = this.props.navTabs[this.props.navTabs.length - 1],
            members = last.map((val, i) => {
                    return <MenuItem eventKey={i.toString()}>{ val.name }</MenuItem>
                });

        return (
            <Navbar inverse brand="Team 2791" toggleNavKey={0}>
                <Nav eventKey={0}>
                    { navItems }
                    
                </Nav>
                <DropdownButton className="membersButton" bsStyle="primary" eventKey={2} title="Members">
                    { members }
                </DropdownButton>
            </Navbar>
        );
    }
}

TeamNav.propTypes = {
    navTabs: React.PropTypes.array
};

export default TeamNav;
