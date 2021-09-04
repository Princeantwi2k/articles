import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Movielist = (props) => {
  return (
    <>
      {props.movies.map((movies, index) => (
        <div key={index} className="d-flex justify-content-start m-3 ">
          <Card className="card">
            <img
              src={movies.multimedia.src}
              alt="pic"
              className="img-responsive img"
            />
            <h5>
              {" "}
              <span style={{ color: `orangered` }}>title</span> :{" "}
              {movies.display_title}
            </h5>
            <h5>
              <span style={{ color: `aqua` }}>headline </span>:{" "}
              {movies.headline}
            </h5>
            <h5>
              <span style={{ color: `orangered` }}>summary_short</span> :{" "}
              {movies.summary_short}
            </h5>
            <h5>
              {" "}
              <span style={{ color: `aqua` }}>publication_date</span>:{" "}
              {movies.publication_date}
            </h5>
          </Card>
        </div>
      ))}
      <button>
        <Link to="/home">Home</Link>
      </button>
    </>
  );
};

export default Movielist;
