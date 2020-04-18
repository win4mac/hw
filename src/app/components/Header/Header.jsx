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
            <h1>The Annex.</h1>
          </div>
          <Nav />
        </div>
      </header>
    );
  }
}
