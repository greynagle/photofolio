import React, { Component } from "react";
import "./SideNav.css";
import { Route, Link } from "react-router-dom";

class SideNav extends Component {
    render() {
        return (
            <nav>
                <ul className="side-link-list">
                    <li className="side-link">
                        <Link to={`/bio`}>Bio</Link>
                    </li>
                    <li className="side-link">
                        <Link to={'/projects'}>Projects</Link>
                    </li>
					<li className="side-link">
						<Link to={'/contact'}>Contact</Link>
					</li>
                </ul>
            </nav>
        );
    }
}

export default SideNav;
