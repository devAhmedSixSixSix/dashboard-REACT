import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import DataTable from "../component/DataTable";
import DoughnutChart from "../component/DoughnutChart";
import DropDwonCard from "../component/DropDwonCard";
import InfoCard from "../component/InfoCard";

function Preparation() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h2 className="text-primary">Preparation For Distribution</h2>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col sm={6} lg={3}>
            <DropDwonCard title="Region" />
          </Col>
          <Col sm={6} lg={3}>
            <DropDwonCard title="DM" />
          </Col>
          <Col sm={6} lg={3}>
            <DropDwonCard title="Mail Center" />
          </Col>
          <Col sm={6} lg={3}>
            <DropDwonCard title="Mail Office" />
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
        <Row className="mt-5  d-flex align-items-center">
          <Col className="mb-3">
            <DoughnutChart />
          </Col>
          <Col>
            <DataTable />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Preparation;
