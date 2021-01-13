import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import config from "../config";
import "./App.css";
import ApiContext from "../ApiContext";

class App extends Component {
    constructor(props) {
		super(props)
	}

	renderNavRoutes() {
        return (
            <>
                <Route exact path="/" component={Home} />
                {/* <Route path="/pdm" component={PDM} />
                <Route path="/mfg" component={MFG} />
                <Route path="/routing" component={Routing} /> */}
            </>
        );
    }

    render() {
        const value = {};
        return (
            <ApiContext.Provider value={value}>
                <div className="App">
                    <header className="App_header">
                        <h1>
                            <Link to="/">Photofolio</Link>{" "}
                        </h1>
						<nav className="App_nav">{this.renderNavRoutes()}</nav>
                    </header>
                    <main className="App_main">
						Main area
					</main>
					<footer className="App_footer">
						footer
					</footer>
                </div>
            </ApiContext.Provider>
        );
    }
}

export default App;
