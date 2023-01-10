import React from "react";
import "./sectionThree.css";
import Card from "./Card";
import { imageList } from "../data";

const SectionThree = () => {
  return (
    <section className="sectionThree">
      <div className="sectionThree-heading">
        <h2 className="sectionThree-heading-text">
          <span>List</span> Of Properties
        </h2>
        <button>View All Property</button>
      </div>
      <div className="sectionThree-cards">
        {imageList.map((x, index) => {
          return <Card key={index} image={x} />;
        })}
      </div>
      <div className="sectionThree-navigation">
        <span id="prev">First</span>
        <span id="1">1</span>
        <span id="2">2</span>
        <span id="3">3</span>
        <span id="next">Next</span>
      </div>
    </section>
  );
};

export default SectionThree;
