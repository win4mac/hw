import React, { Component } from "react";
import "./Footer.scss";
import fb_logo from "./../../../images/facebook_logo.webp";
import tw_logo from "./../../../images/twitter_logo.webp";
import insta_logo from "./../../../images/instagram_logo.webp";

export class Footer extends Component {
  render() {
    return (
      <footer className="page-footer ">
        <div className="content-wrapper page-footer__content">
          <div className="footer-copyright">
            © 2023 by Annex. Proudly created with{" "}
            <a className="footer-copyright__link" href="http://www.wix.com">
              Wix.com
            </a>
          </div>
          <nav className="footer-nav">
            <div className="footer-logo">
              <a
                className="footer-logo__link"
                href="http://www.twitter.com/wix"
                target="_blank"
                data-content="http://www.twitter.com/wix"
              ></a>
              <img src={tw_logo} className="footer-logo__link_twit"></img>
            </div>
            <div className="footer-logo">
              <a
                className="footer-logo__link"
                href="http://www.facebook.com/wix"
                target="_blank"
                data-content="http://www.facebook.com/wix"
              ></a>
              <img src={fb_logo} className="footer-logo__link_fb"></img>
            </div>
            <div className="footer-logo">
              <a
                className="footer-logo__link"
                href="https://instagram.com/wix"
                target="_blank"
                data-content="https://instagram.com/wix"
              ></a>
              <img src={insta_logo} className="footer-logo__link_insta"></img>
            </div>
          </nav>
        </div>
      </footer>
    );
  }
}
