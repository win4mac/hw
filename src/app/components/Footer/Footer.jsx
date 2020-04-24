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
            <a href="http://twitter.com" alt="twitter">
              <img src="../../../src/assets/img/twitter_logo.webp"></img>
            </a>
            <img src="../../../src/assets/img/twitter_logo.webp"></img>
            <img src="../../../src/assets/img/twitter_logo.webp"></img>
          </nav>
        </div>
      </footer>
    );
  }
}
