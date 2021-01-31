import React, { Component } from "react";
import config from "../config";
import "./App.css";
import ApiContext from "../ApiContext";
import Header from "../header/Header";
import SideNav from "../sidenav/SideNav"
import Main from "../main/Main";
import Footer from "../footer/Footer";

class App extends Component {
    constructor(props) {
        super(props);
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
