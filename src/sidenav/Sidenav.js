import React, { Component } from "react";
import "./SideNav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Button, Menu, MenuItem } from "@material-ui/core";
import { Route, Link } from "react-router-dom";

const timeoutLength = 300;

class SideNav extends Component {
    state = {
        clicked: false,
    };

    handleClick = () => {
        this.setState((prevstate) => ({
            clicked: prevstate.clicked ? false : true,
        }));
    };

    // handleClose = (event) => {
    //     console.log(event.target);
    //     this.setState({ mouseOverButton: false, mouseOverMenu: false });
    // };

    // enterMenu = () => {
    //     this.setState({ mouseOverMenu: true });
    // };

    // leaveMenu = () => {
    //     setTimeout(() => {
    //         this.setState({ mouseOverMenu: false });
    //     }, timeoutLength);
    // };

    render() {
        // Calculate open state based on mouse location
        // const open = this.state.mouseOverButton || this.state.mouseOverMenu;

        return (
            <div className="nav-menu">
                <Button
                    // aria-owns={this.state.open ? "simple-menu" : null}
                    // aria-haspopup="true"
                    onClick={this.handleClick}
                >
                    <FontAwesomeIcon icon={faBars} size={"2x"} />
                </Button>

                {this.state.clicked && (
                    <nav className="hamburger">
                        <Link to={`/bio`}>Bio</Link>
                        <Link to={"/projects"}>Projects</Link>
                        <Link to={"/contact"}>Contact</Link>
                    </nav>
                )}
            </div>
        );
    }
}

export default SideNav;

{
    /* <ul className="side-link-list">
    <li className="side-link">
        <Link to={`/bio`}>Bio</Link>
    </li>
    <li className="side-link">
        <Link to={"/projects"}>Projects</Link>
    </li>
    <li className="side-link">
        <Link to={"/contact"}>Contact</Link>
    </li>
</ul>; */
}
