import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import InfoCard from "../component/InfoCard";
import LineChartCard from "../component/LineChartCard";

function Dashboard() {
  return (
    <div>
      <Container>
        <Row>
          <Col sm={6} lg={3} className="mb-3">
            <InfoCard title="Announced Today" numbers="235600" />
          </Col>
          <Col sm={6} lg={3} className="mb-3">
            <InfoCard title="Prepared Today" numbers="16738" />
          </Col>
          <Col sm={6} lg={3} className="mb-3">
            <InfoCard title="Sorted Today" numbers="286320" />
          </Col>
          <Col sm={6} lg={3} className="mb-3">
            <InfoCard title="Distributed Today" numbers="92861" />
          </Col>
        </Row>

        <Row className="mt-5">
          <Col xs={12} lg={6}>
            <LineChartCard chartName="Announced Today" />
          </Col>
          <Col xs={12} lg={6}>
            <LineChartCard chartName="Prepared Today" />
          </Col>
        </Row>
        <Row>
          <Col xs={12} lg={6}>
            <LineChartCard chartName="Sorted Today" />
          </Col>
          <Col xs={12} lg={6}>
            <LineChartCard chartName="Distributed Today" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Dashboard;
