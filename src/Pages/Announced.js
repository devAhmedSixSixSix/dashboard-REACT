import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import AnotherTable from "../component/AnotherTable";
import DataTable from "../component/DataTable";
import LineChartCard from "../component/LineChartCard";

function Announced() {
  return (
    <div>
      <Container>
        <Row className="mb-5">
          <Col>
            <h2 className="text-primary">Announced Today</h2>
          </Col>
        </Row>
        <Row className="bg-white py-5 mb-5  d-flex align-items-center">
          <Col>
            <h6 className="fw-lighter">Today, 25 May, 2022</h6>
            <h2 className="text-primary">372929</h2>
            <LineChartCard />
          </Col>
          <Col className="mt-3">
            <DataTable />
          </Col>
        </Row>
        <Row className="bg-white py-5 d-flex align-items-center">
          <Col>
            <h6 className="fw-lighter">Daily Average</h6>
            <h2 className="text-primary">463924</h2>
            <LineChartCard />
          </Col>
          <Col className="mt-3">
            <AnotherTable />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Announced;
