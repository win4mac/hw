import React, { Component } from "react";
import "./Contact.scss";

export class Contact extends Component {
  render() {
    return (
      <div className="page-contact" id="section6">
        <div className="page-contact-back">
          <div className="page-contact__content">
            <h1 className="contact-content__h1">CONTACT US</h1>
          </div>
          <div className="contact-content">
            <div className="page-contact__descr">
              <span className="contact-content__descr">
                ADDRESS: 500 TERRY FRANCOIS STREET SAN FRANSISCO, CA 94158
              </span>
              <span className="contact-content__descr">
                TEL: 123-456-7890 | INFO@MYSITE.COM
              </span>
            </div>
          </div>
          <div className="contact-content__form">
            Subscribe For Updates and Promotions
          </div>
        </div>
        <div className="google-maps"></div>
      </div>
    );
  }
}
