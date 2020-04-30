import React, { Component } from "react";
import "./Space.scss";

export class Space extends Component {
  render() {
    return (
      <div className="page-space" id="section4">
        <div className="page-space__description">
          <div className="space-description">
            <h1 className="space-header">
              <span className="space-header__header">Space</span>
            </h1>
            <h3 className="space-text">
              <p className="space-text__descr">
                I'm a paragraph. Click here to add your own text and edit me.
              </p>
            </h3>
          </div>
        </div>
        <div className=""></div>
      </div>
    );
  }
}
