import React, { Component } from "react";
import "./Main.css";
import image from "./mush.jpg";

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
        event.persist();
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
        event.persist();
        this.setState({ mouseOverImage: { [event.target.id]: true } });
    };

    leaveImage = (event) => {
        this.setState({ mouseOverImage: { [event.target.id]: false } });
    };

    render() {
        // const imageList = this.state.imageList
        return (
            <div className="container">
                <img
                    id="test"
                    src={image}
                    alt="mushers on log"
                    width="200"
                    onClick={this.handleClick}
                />
                <div
                    className={this.state.clicked["test"] ? null : "overlay"}
                    id="test"
                    onClick={this.handleClick}
                >
                    <span
                        className={
                            this.state.clicked["test"] ? "hidden" : "text"
                        }
                    >
                        Fungi
                    </span>
                </div>
                {this.state.clicked["test"] && <p className="description">clicked</p>}
            </div>
        );
    }
}

export default Main;
