import React from "react";
import { Card } from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Toplist = ({ top }) => {
  return (
    <>
      {top.map((top, id) => (
        <Link to={`/blog2/${top.id}`} className="links">
          <div key={id}>
            <Card className="card">
              <img src={top.src} alt="pic" className="img-responsive img" />
              <h5>
                {" "}
                <span style={{ color: `aqua` }}>title</span> :{" "}
                {top.display_title}
              </h5>
              <h5>
                <span style={{ color: `aqua` }}>headline </span>: {top.headline}
              </h5>
              <h5>
                <span style={{ color: `aqua` }}>summary_short</span> :{" "}
                {top.summary_short}
              </h5>
              <h5>
                {" "}
                <span style={{ color: `aqua` }}>publication_date</span>:{" "}
                {top.publication_date}
              </h5>
            </Card>
          </div>
        </Link>
      ))}
    </>
  );
};

const mapStateToProps = (state) => {
  return { top: state.top };
};

export default connect(mapStateToProps)(Toplist);
