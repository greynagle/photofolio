import React, { Component } from "react";
import config from "../config";
import "./App.css";
import ApiContext from "../ApiContext";
import Header from "../header/Header";
import SideNav from "../sidenav/SideNav"
import Main from "../main/Main";
import Footer from "../footer/Footer";

import bio from "../bio/Bio"
// import projects from "../projects/projects"
// import contact from "../contact/contact"


class App extends Component {
    constructor(props) {
        super(props);
    }

	renderMainRoutes() {
        return (
            <>
                <Route exact path="/" component={Main} />
                <Route path="/bio" component={bio} />
                {/* <Route path="/projects" component={projects} /> */}
                {/* <Route path="/contact" component={contact} /> */}
            </>
        );
    }

    render() {
        const value = {};
        return (
            <ApiContext.Provider value={value}>
                <div className="App">
                    <header className="App-header">
                        <Header />
                    </header>
                    <main className="App-main">
                        <SideNav />
                        <Main />
						{this.renderMainRoutes()}
                    </main>
                    <footer className="App-footer">
                        <Footer />
                    </footer>
                </div>
            </ApiContext.Provider>
        );
    }
}

export default App;
