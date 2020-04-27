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
            <figure className="footer-logo footer-logo__twit"></figure>
            <div className="footer-logo footer-logo__fb"></div>

            <a
              href="https://instagram.com/wix/"
              target="_blank"
              data-content="https://instagram.com/wix/"
            >
              <figure className="footer-logo footer-logo__insta"> </figure>
            </a>
          </nav>
        </div>
      </footer>
    );
  }
}
