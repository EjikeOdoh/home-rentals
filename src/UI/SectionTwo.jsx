import React from "react";
import "./sectionTwo.css";
import sectionTwo from "../assets/sectionTwo.png";
import IconCard from "../components/IconCard";
import { mLC } from "../data";

const SectionTwo = () => {
  return (
    <section className="sectionTwo">
      <h2 className="sectionTwo-heading">
        <span>Minimum living cost</span> takes care of everything
      </h2>
      <div className="sectionTwo-context">
        <div className="sectionTwo-img">
          <img src={sectionTwo} alt="Pool" />
        </div>
        <div className="sectionTwo-content">
          {mLC.map((x, index) => {
            return (
              <article key={index} className="sectionTwo-box">
                <IconCard>{x.icon}</IconCard>
                <h3 className="sectionTwo-text">{x.text}</h3>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
