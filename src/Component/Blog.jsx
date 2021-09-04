import { useParams } from "react-router-dom";
import React from "react";
import { connect } from "react-redux";
import { Container, Col, Row } from "react-bootstrap";
import "./Blog.css";

const Blog = ({ movies }) => {
  const { id } = useParams();

  let [product] = movies.filter((movie) => movie.id === id);

  return (
    <>
      <div className=" d-grid gap-2">
        <Container>
          <Row>
            <Col sm={4} md={4} className="items-img">
              <img src={product.src} alt="pic" className="picture" />
            </Col>
            <Col sm={8} md={8} className="text">
              <h5>
                {" "}
                <span style={{ color: `orangered` }}>title</span> :{" "}
                {product.display_title}
              </h5>
              <h5>
                <span style={{ color: `aqua` }}>headline </span>:{" "}
                {product.headline}
              </h5>
              <h5>
                <span style={{ color: `orangered` }}>summary_short</span> :{" "}
                {product.summary_short}
              </h5>
              <h5>
                {" "}
                <span style={{ color: `aqua` }}>publication_date</span>:{" "}
                {product.publication_date}
              </h5>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
const mapStateToprops = (state) => {
  return { movies: state.movies };
};

export default connect(mapStateToprops)(Blog);
