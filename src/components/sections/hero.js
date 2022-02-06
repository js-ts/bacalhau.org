import * as React from "react";
import * as styles from "./hero.module.scss";
import classNames from "classnames";

const Hero = () => {
  return (
    <div className={classNames("container", styles.wrapper)}>
      <div className={styles.mainBox}>
        <h1>Project Bacalhau</h1>
        <h2>Transforming Data.</h2>
      </div>
    </div>
  );
};

export default Hero;
