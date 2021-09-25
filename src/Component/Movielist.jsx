import React from "react";
import "./Tech.css";

const Movielist = (props) => {
  return (
    <>
      {props.magazen.map((magazen, idx) => (
        <div key={idx}>
          <img src={magazen.multimedia?.[0].url} alt="pic" className="pic" />
          <h5 className="text">
            <span style={{ color: "red" }}>Title:</span> {magazen.title}
          </h5>
          <h5 className="text">
            <span style={{ color: "red" }}>abstract :</span>
            {magazen.abstract}
          </h5>
          <h5 className="text">
            {" "}
            <span style={{ color: "red" }}>byline: </span>
            {magazen.byline}
          </h5>
          <h5 className="text">
            <span style={{ color: "red" }}>published_date :</span>{" "}
            {magazen.published_date}
          </h5>
          <h5 className="text">
            <span style={{ color: "red" }}>item_type :</span>{" "}
            {magazen.item_type}
          </h5>
        </div>
      ))}
    </>
  );
};

export default Movielist;
