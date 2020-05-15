import React, { Component } from "react";
import { Heartsvg } from "./../Heartsvg/Heartsvg.jsx";
import { Linksvg } from "./../Linksvg/Linksvg.jsx";

import "./Space.scss";

export class Space extends Component {
  render() {
    return (
      <div className="page-space" id="section4">
        <div className="page-space__description">
          <div className="space-description">
            <h1 className="space-header">
              <span className="space-header__header">Spaces</span>
            </h1>
            <h3 className="space-text">
              <p className="space-text__descr">
                I'm a paragraph. Click here to add your own text and edit me.
              </p>
            </h3>
          </div>
        </div>
        <div className="page-space__images">
          <div className="space-images">
            <div className="space-images__content">
              <div className="images-content bgimg__img1 img-jpg">
                <div className="images-content__back">
                  <div className="content-back__text back-text">
                    <h1 className="back-text__header">Open Space</h1>
                  </div>
                  <div className="content-back__bottom">
                    <div className="content-back__bottom_like">
                      <Heartsvg />
                    </div>
                    <div className="content-back__bottom_link">
                      <Linksvg />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-images__content">
              <div className="images-content bgimg__img2 img-jpg">
                <div className="images-content__back">
                  <div className="content-back__text back-text">
                    <h1 className="back-text__header">Open Space</h1>
                  </div>
                  <div className="content-back__bottom">
                    <div className="content-back__bottom_like">
                      <Heartsvg />
                    </div>
                    <div className="content-back__bottom_link">
                      <Linksvg />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="space-images">
            <div className="space-images__content">
              <div className="images-content bgimg__img3 img-jpg">
                <div className="images-content__back">
                  <div className="content-back__text back-text">
                    <h1 className="back-text__header">Open Space</h1>
                  </div>
                  <div className="content-back__bottom">
                    <div className="content-back__bottom_like">
                      <Heartsvg />
                    </div>
                    <div className="content-back__bottom_link">
                      <Linksvg />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-images__content">
              <div className="images-content bgimg__img4 img-jpg">
                <div className="images-content__back">
                  <div className="content-back__text back-text">
                    <h1 className="back-text__header">Open Space</h1>
                  </div>
                  <div className="content-back__bottom">
                    <div className="content-back__bottom_like">
                      <Heartsvg />
                    </div>
                    <div className="content-back__bottom_link">
                      <Linksvg />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
