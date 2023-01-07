import React from "react";
import "./card.css";
import Pic from "../assets/image.png";
import { MdOutlineBedroomChild } from "react-icons/md";
import { GiBathtub } from "react-icons/gi";
import { TbRectangle } from "react-icons/tb";

const Card = () => {
  return (
    <article className="property-card">
      <img src={Pic} className="property-image" />
      <div className="card-info">
        <h4 className="property-name">
          2578 Folsom Street, San Francisco, CA, 94110
        </h4>
        <div className="property-cost">
          <small>Private Room</small>
          <h4>$1200/Month</h4>
        </div>
      </div>
      <div className="property-icons">
        <div className="property-icon">
          <MdOutlineBedroomChild />
          <span>4</span>
        </div>
        <div className="property-icon">
          <GiBathtub />
          <span>2</span>
        </div>
        <div className="property-icon">
          <TbRectangle />
          <span>2</span>
        </div>
      </div>
    </article>
  );
};

export default Card;
