import React from "react";
import "./Tech.css";

const Sciencelist = (props) => {
  return (
    <>
      {props.science.map((science, idx) => (
        <div key={idx}>
          <div className="businessHome">
            <img src={science.multimedia?.[0].url} alt="pic" className="pic" />
            <h5 className="text">
              <span style={{ color: "red" }}>Title:</span> {science.title}
            </h5>
            <h5 className="text">
              <span style={{ color: "red" }}>abstract :</span>
              {science.abstract}
            </h5>
            <h5 className="text">
              {" "}
              <span style={{ color: "red" }}>byline: </span>
              {science.byline}
            </h5>
            <h5 className="text">
              <span style={{ color: "red" }}>published_date :</span>{" "}
              {science.published_date}
            </h5>
            <h5 className="text">
              <span style={{ color: "red" }}>item_type :</span>{" "}
              {science.item_type}
            </h5>
          </div>
        </div>
      ))}
    </>
  );
};

export default Sciencelist;
