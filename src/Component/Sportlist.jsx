import React from "react";
import "./Tech.css";

const Sportlist = (props) => {
  return (
    <>
      {props.sport.map((sport, idx) => (
        <div key={idx}>
          <div className="businessHome">
            <img src={sport.multimedia?.[0].url} alt="pic" className="pic" />
            <h5 className="text">
              <span style={{ color: "red" }}>Title:</span> {sport.title}
            </h5>
            <h5 className="text">
              <span style={{ color: "red" }}>abstract :</span>
              {sport.abstract}
            </h5>
            <h5 className="text">
              {" "}
              <span style={{ color: "red" }}>byline: </span>
              {sport.byline}
            </h5>
            <h5 className="text">
              <span style={{ color: "red" }}>published_date :</span>{" "}
              {sport.published_date}
            </h5>
            <h5 className="text">
              <span style={{ color: "red" }}>item_type :</span>{" "}
              {sport.item_type}
            </h5>
          </div>
        </div>
      ))}
    </>
  );
};

export default Sportlist;
