import React, { Component } from "react";
import "./Footer.scss";

export class Footer extends Component {
  render() {
    return (
      <footer className="page-footer ">
        <div className="content-wrapper page-footer__content">
          <div className="footer-copyright">
            © 2023 by Annex. Proudly created with Wix.com
          </div>
          <nav className="footer-nav">
            <div className="footer-logo">
              <a
                className="footer-logo__link"
                href="http://www.twitter.com/wix"
                target="_blank"
                data-content="http://www.twitter.com/wix"
              ></a>
              <div className="footer-logo__link_twit"></div>
            </div>
            <div className="footer-logo">
              <a
                className="footer-logo__link"
                href="http://www.facebook.com/wix"
                target="_blank"
                data-content="http://www.facebook.com/wix"
              ></a>
              <div className="footer-logo__link_fb"></div>
            </div>
            <div className="footer-logo">
              <a
                className="footer-logo__link"
                href="https://instagram.com/wix"
                target="_blank"
                data-content="https://instagram.com/wix"
              ></a>
              <div className="footer-logo__link_insta"></div>
            </div>
          </nav>
        </div>
      </footer>
    );
  }
}
