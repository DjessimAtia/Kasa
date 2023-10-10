import React from "react";
import "../Footer/footer.scss";
import "../../sass/app.scss";
import logoSvg from "../../Logo/logo.svg";

function Footer() {
  return (
    <footer className="container footer">
      <div className="footer_texte">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="211"
          height="68"
          viewBox="0 0 211 68"
          fill="white"
        >
          <image xlinkHref={logoSvg} width="122px" height="40px" />
        </svg>
        <p>© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
