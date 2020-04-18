import React, { Component } from "react";
import "./Navigation.scss";

export class Nav extends Component {
  render() {
    return (
      <div className="page-nav">
        <nav className="global-nav">
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Community</a>
          <a href="">Spaces</a>
          <a href="">Membership</a>
          <a href="">Contact</a>
        </nav>
      </div>
    );
  }
}
