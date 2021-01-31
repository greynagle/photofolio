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
                My Links:
                <nav class="contacts">
                    <a
                        href="https://www.instagram.com/grey.nagle/"
                        target="_blank"
                    >
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href="mailto:grey.nagle@gmail.com">
                        <FontAwesomeIcon icon={faEnvelope} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/grey-nagle-703b60113/"
                        target="_blank"
                    >
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a href="https://github.com/greynagle" target="_blank">
                        <FontAwesomeIcon icon={faGithubSquare} />
                    </a>
                </nav>
                <p class="copy">&copy; 2020 Grey Nagle</p>
            </>
        );
    }
}

export default Footer;
