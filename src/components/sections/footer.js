import * as React from "react";
import * as styles from "./footer.module.scss";
import classNames from "classnames";
import Typography from "../misc/typography";
import { StaticImage } from "gatsby-plugin-image";
import topSeparator from "../../images/separator-4.svg";
import WavyWhiteLayout from "../../layouts/wavy-white-layout";
import { Link } from "gatsby";

const Footer = () => {
  return (
    <WavyWhiteLayout
      topSeparator={topSeparator}
      topSeparatorHeight={""}
      topMargin={"16vw"}
    >
      <div className={classNames("container", styles.wrapper)}>
        <div className={styles.column}>
          <Link to={"/"}>
            <StaticImage
              src={"../../images/logo-small.svg"}
              alt={"Bacalhau logo"}
              width={200}
              placeholder={"none"}
              className={styles.logo}
            />
          </Link>
        </div>
        <div className={styles.column}>
          <Link to={"https://docs.bacalhau.org/"}>
            <Typography variant="body3">
              <i className={"ci-bulb"} /> Documentation
            </Typography>
          </Link>
          <Link to={"https://filecoinproject.slack.com/archives/C02RLM3JHUY"}>
            <Typography variant="body3">
              <i className={"ci-slack"} /> Slack
            </Typography>
          </Link>
          <Link to={"https://github.com/filecoin-project/bacalhau"}>
            <Typography variant="body3">
              <i className={"ci-github"} /> Github
            </Typography>
          </Link>
        </div>
        <div className={styles.column}>
          <Link to={"https://twitter.com/filecoin/"}>
            <Typography variant="body3">About us</Typography>
          </Link>
        </div>
      </div>
    </WavyWhiteLayout>
  );
};

export default Footer;
