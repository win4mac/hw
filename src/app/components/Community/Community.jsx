import React, { Component } from "react";
import "./Community.scss";

export class Community extends Component {
  render() {
    return (
      <div className="page-community">
        <div className="page-community__description">
          <div className="community-description"></div>
        </div>
        <div className="page-community__slides">
          <div className="community-slides"></div>
        </div>
      </div>
    );
  }
}
