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
            {/* <div className="footer-logo"> */}
            <div className="footer-logo__fb"></div>
            {/* </div> */}

            {/* <div className="footer-logo"> */}
            <div className="footer-logo__tw"></div>
            {/* </div> */}
          </nav>
        </div>
      </footer>
    );
  }
}
