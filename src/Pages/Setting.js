import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import SettingCard from "../component/SettingCard";

function Setting() {
  return (
    <div
      style={{
        height: "100vh",
      }}
    >
      <Container>
        <Row>
          <Col>
            <h2 className="text-primary mb-5">Setting</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <SettingCard
              title="Desktop Push Notification"
              paragraph="Receive push notification on mentions, comments, alerts, edit changes, supply and target meet"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <SettingCard
              title="Desktop Push Notification"
              paragraph="Receive push notification on mentions, comments, alerts, edit changes, supply and target meet"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <SettingCard
              title="Desktop Push Notification"
              paragraph="Receive push notification on mentions, comments, alerts, edit changes, supply and target meet"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Setting;
