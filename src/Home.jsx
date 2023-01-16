import React from "react";
import Input from "./components/Input";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./home.css";
import SectionFour from "./UI/sectionFour";
import SectionThree from "./UI/SectionThree";
import SectionTwo from "./UI/SectionTwo";

const Home = () => {
  return (
    <div>
      <Header />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <section></section>
      <Input />
      <Footer />
    </div>
  );
};

export default Home;
