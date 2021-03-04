import React, { Component } from "react";
import "./SideNav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Button, Menu, MenuItem } from "@material-ui/core";
import { Route, Link } from "react-router-dom";

const timeoutLength = 300;

class SideNav extends Component {
    state = {
        anchorEl: null,

        // Keep track of whether the mouse is over the button or menu
        mouseOverButton: false,
        mouseOverMenu: false,
    };

    handleClick = (event) => {
        this.setState({ open: true, anchorEl: event.currentTarget });
    };

    handleClose = (event) => {
        console.log(event.target)
		this.setState({ mouseOverButton: false, mouseOverMenu: false });
    };

    enterButton = () => {
        this.setState({ mouseOverButton: true });
    };

    leaveButton = () => {
        // Set a timeout so that the menu doesn't close before the user has time to
        // move their mouse over it
        setTimeout(() => {
            this.setState({ mouseOverButton: false });
        }, timeoutLength);
    };

    enterMenu = () => {
        this.setState({ mouseOverMenu: true });
    };

    leaveMenu = () => {
        setTimeout(() => {
            this.setState({ mouseOverMenu: false });
        }, timeoutLength);
    };

    render() {
        // Calculate open state based on mouse location
        const open = this.state.mouseOverButton || this.state.mouseOverMenu;

        return (
            <div className='nav-menu'>
                <Button
                    aria-owns={this.state.open ? "simple-menu" : null}
                    aria-haspopup="true"
                    onClick={this.handleClick}
                    onMouseEnter={this.enterButton}
                    onMouseLeave={this.leaveButton}
                >
					<FontAwesomeIcon icon={faBars} size={'2x'}/>
                    
                </Button>
                <Menu
                    id="simple-menu"
                    anchorEl={this.state.anchorEl}
                    open={open}
                    onClose={this.handleClose}
                    MenuListProps={{
                        onMouseEnter: this.enterMenu,
                        onMouseLeave: this.leaveMenu,
                    }}
                >
                    <MenuItem onClick={(e) => this.handleClose(e)}>
                        <Link to={`/bio`}>Bio</Link>
                    </MenuItem>
                    <MenuItem onClick={(e) => this.handleClose(e)}>
                        <Link to={"/projects"}>Projects</Link>
                    </MenuItem>
                    <MenuItem onClick={(e) => this.handleClose(e)}>
                        <Link to={"/contact"}>Contact</Link>
                    </MenuItem>
                </Menu>
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
