import * as React from "react";
import * as styles from "./header.module.scss";
import { StaticImage } from "gatsby-plugin-image";
import classNames from "classnames";

const Header = () => {
  return (
    <div className={classNames("container", styles.wrapper)}>
      {" "}
      <div id="header-logo-small">
        <StaticImage
          src={"../../images/logo-small.png"}
          alt={"Bacalhau Project"}
          width={100}
        />
      </div>
      <div id="header-text">Bacalhau</div>
    </div>
  );
};

export default Header;
