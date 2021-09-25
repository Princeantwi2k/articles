import React from "react";
import { useParams } from "react-router-dom";
import { Container, Col, Row } from "react-bootstrap";

const Blog1 = () => {
  const { id } = useParams();
  let [product] = props.business.filter((business) => business.id === id);
  return (
    <div className="bloglist d-grid gap-2">
      <Container>
        <Row>
          <Col sm={4} md={4} className="items-img">
            <img
              src={product.multimedia?.[0].url}
              alt="pic"
              className="item img-responsive"
            />
          </Col>
          <Col sm={8} md={8}>
            <h1 className="items-name">{product.title}</h1>
            <p>{product.abtract}</p>
            <Example />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Blog1;
