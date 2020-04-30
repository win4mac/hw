import React, { Component } from "react";
import ReactDOM from "react-dom";
import Slider from "react-slick";
import { Header } from "./components/Header/Header.jsx";
// import { HashRouter as Router, Route, Link } from "react-router-dom";
import { Home } from "./components/Home/Home.jsx";
import { AboutUs } from "./components/AboutUs/AboutUs.jsx";
import { Community } from "./components/Community/Community.jsx";
import { Space } from "./components/Space/Space.jsx";
import { Contact } from "./components/Contact/Contact.jsx";
import { Membership } from "./components/Membership/Membership.jsx";
import { Footer } from "./components/Footer/Footer.jsx";
import { Link } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div className="page">
        <Header />
        <main>
          <Home />
          <AboutUs />
          <Community />
          <Space />
          <Membership />
          <Contact />
        </main>
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector(".body-page"));
