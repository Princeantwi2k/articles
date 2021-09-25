import React from "react";
import "./Tech.css";

const Techlist = ({ tech }) => {
  return (
    <>
      {tech.map((tech, idx) => (
        <div key={idx}>
          <img src={tech.multimedia?.[0].url} alt="pic" className="pic" />
          <h5 className="text">
            <span style={{ color: "red" }}>Title:</span> {tech.title}
          </h5>
          <h5 className="text">
            <span style={{ color: "red" }}>abstract :</span>
            {tech.abstract}
          </h5>
          <h5 className="text">
            {" "}
            <span style={{ color: "red" }}>byline: </span>
            {tech.byline}
          </h5>
          <h5 className="text">
            <span style={{ color: "red" }}>published_date :</span>{" "}
            {tech.published_date}
          </h5>
          <h5 className="text">
            <span style={{ color: "red" }}>item_type :</span> {tech.item_type}
          </h5>
        </div>
      ))}
    </>
  );
};

export default Techlist;
