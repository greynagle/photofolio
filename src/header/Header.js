import React, { Component } from "react";
import "./Header.css";
import { Route, Link } from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <h1>
                <Link to="/">Photofolio</Link>{" "}
            </h1>
        );
    }
}

export default Header;
