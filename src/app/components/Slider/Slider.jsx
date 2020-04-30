import React, { Component } from "react";
import Slider from "react-slick";
import "./slick.min.scss";
import "./slick-theme.min.scss";
import "./slider.scss";
import "./../../../images/5136_3424_s_4_2.jpg";
import "./../../../images/5184_3456_s_4_2.jpg";
import "./../../../images/6496_4331_s_4_2.jpg";
import "./../../../images/7360_5068_s_4_2.jpg";
import "./../../../images/8000_4000_s_4_2.jpg";
import "./../../../images/9000_5000_s_4_2.png";

export class SlidesPage extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
    };
    return (
      <div className="community-slides">
        <Slider {...settings}>
          <div className="slide-window">
            <h3 className="slide-window__descr">
              <img src="./images/5136_3424_s_4_2.jpg"></img>
            </h3>
          </div>
          <div className="slide-window">
            <h3 className="slide-window__descr">
              <img src="./images/9000_5000_s_4_2.png"></img>
            </h3>
          </div>
          <div className="slide-window">
            <h3 className="slide-window__descr">
              <img src="./images/8000_4000_s_4_2.jpg"></img>
            </h3>
          </div>
          <div className="slide-window">
            <h3 className="slide-window__descr">
              <img src="./images/6496_4331_s_4_2.jpg"></img>
            </h3>
          </div>
          <div className="slide-window">
            <h3 className="slide-window__descr">
              <img src="./images/7360_5068_s_4_2.jpg"></img>
            </h3>
          </div>
          <div className="slide-window">
            <h3 className="slide-window__descr">
              <img src="./images/5184_3456_s_4_2.jpg"></img>
            </h3>
          </div>
        </Slider>
      </div>
    );
  }
}
