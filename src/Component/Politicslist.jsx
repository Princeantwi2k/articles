import React from "react";
import "./Tech.css";

const Politicslist = ({ politics }) => {
  return (
    <>
      {politics.map((politics, idx) => (
        <div key={idx}>
          <div className="businessHome">
            <img src={politics.multimedia?.[0].url} alt="pic" className="pic" />
            <h5 className="text">
              <span style={{ color: "red" }}>Title:</span> {politics.title}
            </h5>
            <h5 className="text">
              <span style={{ color: "red" }}>abstract :</span>
              {politics.abstract}
            </h5>
            <h5 className="text">
              {" "}
              <span style={{ color: "red" }}>byline: </span>
              {politics.byline}
            </h5>
            <h5 className="text">
              <span style={{ color: "red" }}>published_date :</span>{" "}
              {politics.published_date}
            </h5>
            <h5 className="text">
              <span style={{ color: "red" }}>item_type :</span>{" "}
              {politics.item_type}
            </h5>
          </div>
        </div>
      ))}
    </>
  );
};

export default Politicslist;
