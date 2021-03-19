import React, { Component } from "react";
import "./Main.css";
import image from "./mush.jpg"

const timeoutLength = 300;

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            clicked: {},
            anchorEl: null,
            mouseOverImage: {},
        };
    }

    handleClick = (event) => {
        const clickId = event.target.id;
        this.setState((prevstate) => ({
            clicked: { [clickId]: prevstate.clicked[clickId] ? false : true },
            anchorEl: event.currentTarget,
        }));
    };

    handleClose = (event) => {
        console.log(event.target);
        this.setState({ mouseOverButton: false, mouseOverMenu: false });
    };

    enterMenu = () => {
        this.setState({ mouseOverMenu: true });
    };

    enterImage = (event) => {
        this.setState({ mouseOverImage: { [event.target.id]: true } });
    };

    leaveImage = (event) => {
        this.setState({ mouseOverImage: { [event.target.id]: false } });
    };

    render() {
        // const imageList = this.state.imageList
        return (
            <div
                className={`picture ${
                    this.state.mouseOverImage["test"] &&
                    !this.state.clicked["test"] &&
                    "curvedarrow"
                }`}
                id="1"
                onMouseEnter={this.enterImage}
                onMouseLeave={this.leaveImage}
            >
                <img
                    id="test"
                    src={image}
                    alt="mushers on log"
                    width="200"
                    onClick={this.handleClick}
                />
                {this.state.clicked["test"] && <p>clicked</p>}
				
            </div>
        );
    }
}

export default Main;
