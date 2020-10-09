import React, { Component } from "react";
import Landing from "../landing/landing";

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date:''
        };
    }

    handleChange(e) {
        e.preventDefault();
        this.setState({date:e.target.value})
    };

    render() {
        return (
            <>
                <Landing />
                <form onSubmit={(e) => this.handleSubmit()}>
                    <label htmlFor="day"> Date: </label>
                    <input
                        type="date"
                        id="day"
                        name="day"
                        onChange={e => this.handleChange(e)}
                    />
                    <button type="submit">Get Info</button>
                </form>
            </>
        );
    }
}
