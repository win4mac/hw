import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "./Navigation.scss";

export class Nav extends Component {
  render() {
    return (
      <div className="page-nav">
        <nav className="global-nav">
          <Link
            activeClass="act"
            to="section1"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Home
          </Link>
          <Link
            activeClass="act"
            to="section2"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            About
          </Link>
          <Link
            activeClass="act"
            to="section3"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Community
          </Link>
          <Link
            activeClass="act"
            to="section4"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Spaces
          </Link>
          <Link
            activeClass="act"
            to="section5"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Membership
          </Link>
          <Link
            activeClass="act"
            to="section6"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Contact
          </Link>
        </nav>
      </div>
    );
  }
}
