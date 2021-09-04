import React from "react";
import { Card } from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Favoritelist = ({ favorite }) => {
  return (
    <>
      {favorite.map((favorite, id) => (
        <Link to={`/blog1/${favorite.id}`} className="links">
          <div key={id}>
            <Card className="card">
              <img
                src={favorite.src}
                alt="pic"
                className="img-responsive img"
              />
              <h5>
                {" "}
                <span style={{ color: `red` }}>title</span> :{" "}
                {favorite.display_title}
              </h5>
              <h5>
                <span style={{ color: `yellow` }}>headline </span>:{" "}
                {favorite.headline}
              </h5>
              <h5>
                <span style={{ color: `yellow` }}>summary_short</span> :{" "}
                {favorite.summary_short}
              </h5>
              <h5>
                {" "}
                <span style={{ color: `green` }}>publication_date</span>:{" "}
                {favorite.publication_date}
              </h5>
            </Card>
          </div>
        </Link>
      ))}
    </>
  );
};

const mapStateToProps = (state) => {
  return { favorite: state.favorite };
};

export default connect(mapStateToProps)(Favoritelist);
