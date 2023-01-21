import React from "react";
import { NavLink } from "react-router-dom";
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
        <tbody>
          <tr className="sectionThree-navigation">
            <td id="prev" onClick={(e) => console.log(e.target.value)}>
              First
            </td>
            <td id="one">
              <NavLink
                to="#one"
                className={({ isActive }) => (isActive ? "active-nav" : "")}
              >
                1
              </NavLink>
            </td>

            <td id="two">
              <NavLink
                to="#two"
                className={({ isActive }) => (isActive ? "active-nav" : "")}
              >
                2
              </NavLink>
            </td>
            <td id="three">
              <NavLink
                to="#three"
                className={({ isActive }) => (isActive ? "active-nav" : "")}
              >
                3
              </NavLink>
            </td>
            <td id="next">Next</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default SectionThree;
