import React, { Component } from "react";
import "./Home.scss";

export class Home extends Component {
  render() {
    return (
      <div className="page-home">
        <div className="page-home__background">
          <div className="page-home__content home-content">
            <div className="home-content__header">
              <h1 className="header-description">
                <span className="header-description__text">CO-WORKING</span>
              </h1>
            </div>
            <div className="home-content__second-header">
              <h3 className="second-header-description">
                <span className="second-header-description__text">
                  IN AN INNOVATIVE ENVIRONMENT
                </span>
              </h3>
            </div>
            <div>
              <button></button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
