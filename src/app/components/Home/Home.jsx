import React, { Component } from "react";
import "./Home.scss";
import Img from "../../../assets/img/2.jpg";

export class Home extends Component {
  render() {
    return (
      <div className="page-content home-page">
        <img src={Img}></img>
      </div>
    );
  }
}
