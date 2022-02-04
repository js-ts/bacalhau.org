import * as React from "react";
import "../styles/global.scss";
import * as styles from "./index.module.scss";
import Header from "../components/sections/header";
import Hero from "../components/sections/hero";
import Footer from "../components/sections/footer";
import SectionMainImage from "../components/sections/section-main-image";

const IndexPage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <SectionMainImage />
      <Footer />
    </div>
  );
};

export default IndexPage;
