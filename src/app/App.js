import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import config from "../config";
import "./App.css";
import ApiContext from "../ApiContext";

class App extends Component {
    constructor(props) {
		super(props)
	}

    render() {
        const value = {};
        return (
            <ApiContext.Provider value={value}>
                <div className="App">
                    <nav className="App_nav"></nav>
                    <header className="App_header">
                        <h1>
                            <Link to="/">Photofolio</Link>{" "}
                        </h1>
                    </header>
                    <main className="App_main">
						The Main part
					</main>
                </div>
            </ApiContext.Provider>
        );
    }
}

export default App;
