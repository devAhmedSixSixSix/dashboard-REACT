import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Button from "react-bootstrap/esm/Button";
import NotificationCard from "../component/NotificationCard";

function Notification() {
  return (
    <div
      style={{
        height: "100vh",
      }}
    >
      <Container>
        <Row className="text-primary mb-5">
          <Col className="d-flex align-items-center justify-content-between">
            <h2 className="text-primary">Notification</h2>
            <Button>Clear All</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <NotificationCard
              title="Unread Notification - This section will provide the information of error heading"
              paragraph="This section will prvide the description of error in detail. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non mollis lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non mollis lacus. "
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Notification;
