import React from "react";
import Input from "./components/Input";
import "./home.css";
import SectionFour from "./UI/sectionFour";
import SectionThree from "./UI/SectionThree";
import SectionTwo from "./UI/SectionTwo";

const Home = () => {
  return (
    <div>
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <section></section>
      <Input />
    </div>
  );
};

export default Home;
