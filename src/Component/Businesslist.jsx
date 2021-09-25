import React from "react";
import "./Tech.css";

const Businesslist = ({ business }) => {
  return (
    <>
      {business.map((business, idx) => (
        <div key={idx}>
          <img src={business.multimedia?.[0].url} alt="pic" className="pic" />
          <h5 className="text">
            <span style={{ color: "red" }}>Title:</span> {business.title}
          </h5>
          <h5 className="text">
            <span style={{ color: "red" }}>abstract :</span>
            {business.abstract}
          </h5>
          <h5 className="text">
            {" "}
            <span style={{ color: "red" }}>byline: </span>
            {business.byline}
          </h5>
          <h5 className="text">
            <span style={{ color: "red" }}>published_date :</span>{" "}
            {business.published_date}
          </h5>
          <h5 className="text">
            <span style={{ color: "red" }}>item_type :</span>{" "}
            {business.item_type}
          </h5>
        </div>
      ))}
    </>
  );
};

export default Businesslist;
