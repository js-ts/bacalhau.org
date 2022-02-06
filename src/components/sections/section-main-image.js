import * as React from "react";
import * as styles from "./section-main-image.module.scss";
import classNames from "classnames";
import Typography from "../misc/typography";
import { StaticImage } from "gatsby-plugin-image";

const SectionMainImage = () => {
  return (
    <div className={classNames("container", styles.wrapper)}>
      <StaticImage
        src="../../images/main-image.png"
        alt="Bacalhau Image"
        placeholder="blurred"
        layout="fixed"
      />
    </div>
  );
};

export default SectionMainImage;
