import React from "react";
import "./home.css";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import IconCard from "./components/IconCard";
import Pool from "./assets/pool.png";
import { mLC } from "./data";

const Home = () => {
  return (
    <div>
      <section>
        <h2 className="section-2-heading">
          <span>Minimum living cost</span> takes care of everything
        </h2>
        <div className="section-2-content">
          <div className="section-2-image">
            <img src={Pool} />
          </div>
          <div className="section-2-box">
            {mLC.map((x) => {
              return (
                <article className="section-2-infobox">
                  <IconCard>{x.icon}</IconCard>
                  <h3 className="infoBox-text">{x.text}</h3>
                </article>
              );
            })}
          </div>
        </div>
      </section>
      <section></section>
      <section></section>
    </div>
  );
};

export default Home;
