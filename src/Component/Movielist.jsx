import React from "react";
import { Card } from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Movielist = ({ movies }) => {
  return (
    <>
      {movies.map((movies, id) => (
        <Link to={`/blog/${movies.id}`} className="links">
          <div key={id}>
            <Card className="card">
              <img src={movies.src} alt="pic" className="img-responsive img" />
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
        </Link>
      ))}
    </>
  );
};

const mapStateToProps = (state) => {
  return { movies: state.movies };
};

export default connect(mapStateToProps)(Movielist);
