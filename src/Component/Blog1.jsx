import { useParams } from "react-router-dom";
import React from "react";
import { connect } from "react-redux";
import { Container, Col, Row } from "react-bootstrap";
import "./Blog.css";

const Blog1 = ({ favorite }) => {
  const { id } = useParams();

  let [product] = favorite.filter((favorite) => favorite.id === id);

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
                <span style={{ color: `red` }}>title</span> :{" "}
                {product.display_title}
              </h5>
              <h5>
                <span style={{ color: `yellow` }}>headline </span>:{" "}
                {product.headline}
              </h5>
              <h5>
                <span style={{ color: `yellow` }}>summary_short</span> :{" "}
                {product.summary_short}
              </h5>
              <h5>
                {" "}
                <span style={{ color: `green` }}>publication_date</span>:{" "}
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
  return { favorite: state.favorite };
};

export default connect(mapStateToprops)(Blog1);
