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
      <table>
        <tr className="sectionThree-navigation">
          <td id="prev">First</td>
          <td id="1">1</td>
          <td id="2">2</td>
          <td id="3">3</td>
          <td id="next">Next</td>
        </tr>
      </table>
    </section>
  );
};

export default SectionThree;
