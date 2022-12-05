import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import InfoCard from "../component/InfoCard";

function Sorted() {
  return (
    <div
      style={{
        height: "100vh",
      }}
    >
      <Container>
        <Row>
          <Col>
            <h2 className="text-primary">Sorted Operation</h2>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col sm={6} lg={3} className="mb-3">
            <InfoCard title="Overall Parcel Prepared" numbers="48404" />
          </Col>
          <Col sm={6} lg={3} className="mb-3">
            <InfoCard title="Total Parcel - Today" numbers="3058" />
          </Col>
          <Col sm={6} lg={3} className="mb-3">
            <InfoCard title="Total Parcel - North" numbers="2060" />
          </Col>
          <Col sm={6} lg={3} className="mb-3">
            <InfoCard title="Total Parcel - South" numbers="1988" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Sorted;
