import React, { Component } from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
    faInstagram,
    faGithubSquare,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

class Footer extends Component {
    render() {
        return (
            <>
                <nav className="contacts">
                    <a
                        href="https://www.instagram.com/grey.nagle/"
                        target="_blank"
                    >
                        <FontAwesomeIcon icon={faInstagram} size={'2x'}/>
                    </a>
                    <a href="mailto:grey.nagle@gmail.com">
                        <FontAwesomeIcon icon={faEnvelope} size={'2x'}/>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/grey-nagle-703b60113/"
                        target="_blank"
                    >
                        <FontAwesomeIcon icon={faLinkedin} size={'2x'}/>
                    </a>
                    <a href="https://github.com/greynagle" target="_blank">
                        <FontAwesomeIcon icon={faGithubSquare} size={'2x'}/>
                    </a>
                </nav>
                <p className="copy">&copy; 2020 Grey Nagle</p>
            </>
        );
    }
}

export default Footer;
