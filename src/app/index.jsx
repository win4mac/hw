import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Header } from "./components/Header/Header.jsx";
import { Footer } from "./components/Footer/Footer.jsx";
// import { HashRouter as Router, Route, Link } from "react-router-dom";
import { Home } from "./components/Home/Home.jsx";
import { Contact } from "./components/Contact/Contact.jsx";
import { Membership } from "./components/Membership/Membership.jsx";

class App extends React.Component {
  render() {
    return (
      <div className="page">
        <Header />
        <main>
          <Home />
          <Membership />
          <Contact />
        </main>
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector(".body-page"));
