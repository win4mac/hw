import React, { Component } from "react";
import "./AboutUs.scss";

export class AboutUs extends Component {
  render() {
    return (
      <div className="page-about" id="section2">
        <div className="page-about__background">
          <div className="page-about__content about-content about-content__style">
            <div className="about-description">
              <h3 className="about-description__header about-header">
                <span className="about-header__text">ABOUT US</span>
              </h3>
            </div>
            <div className="about-description__content">
              <p className="about-description__text">
                I'm a paragraph. Click here to add your own text and edit me.
                It’s easy. Just click “Edit Text” or double click me to add your
                own content and make changes to the font. Feel free to drag and
                drop me anywhere you like on your page. I’m a great place for
                you to tell a story and let your users know a little more about
                you.
              </p>
              <p className="about-description__text">&#8203;</p>
              <p className="about-description__text">
                This is a great space to write long text about your company and
                your services. You can use this space to go into a little more
                detail about your company. Talk about your team and what
                services you provide. Tell your visitors the story of how you
                came up with the idea for your business and what makes you
                different from your competitors. Make your company stand out and
                show your visitors who you are.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
