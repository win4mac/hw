import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Nav } from "../Navigation/Navigation.jsx";
import "./Header.scss";

export class Header extends Component {
  render() {
    return (
      <header className="page-header">
        <div className="page-header__content content-wrapper">
          <div className="logo">
            <a
              className="logo__link"
              href="https://illial.wixsite.com/mysite-15"
              target="_self"
            ></a>
            <h1>The Annex</h1>
            <span className="logo-point">
              <span className="logo-point__text">.</span>
            </span>
          </div>
          <Nav />
        </div>
      </header>
    );
  }
}
