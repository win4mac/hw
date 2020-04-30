import React, { Component } from "react";
import { SlidesPage } from "../Slider/Slider.jsx";
import "./Community.scss";

export class Community extends Component {
  render() {
    return (
      <div className="page-community" id="section3">
        <div className="page-community__description">
          <div className="community-description">
            <h1 className="community-header">
              <span className="community-header__header">Our Community</span>
            </h1>
            <h3 className="community-text">
              <p className="community-text__descr">
                I'm a paragraph. Click here to add your own text and edit me.
              </p>
              <p className="community-text__descr">
                Let your users get to know you.
              </p>
            </h3>
          </div>
        </div>
        <div className="page-community__slides">
          <SlidesPage />
        </div>
      </div>
    );
  }
}
