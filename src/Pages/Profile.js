import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/Form";
import avatarImage from "../Assest/Images/avatar-01.png";

function Profile() {
  return (
    <div
      style={{
        height: "100vh",
      }}
    >
      <Container>
        <Row className="mb-5">
          <Col>
            <h2 className="text-primary">Profile</h2>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex align-items-center gap-5 mb-5">
            <img src={avatarImage} alt="avater" className=" rounded-circle" />
            <div>
              <h3 className="text-muted fw-lighter">Name</h3>
              <h6 className="text-muted fw-lighter mb-3">@UserName</h6>
              <Button>Edit Profile</Button>
            </div>
          </Col>
        </Row>
        <Row>
          <Form>
            <Form.Group className="mb-3 w-50" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="username@example.com"
                disabled
              />
            </Form.Group>

            <Form.Group className="mb-3 w-50" controlId="formBasicText">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="text" placeholder="Phone Number" />
            </Form.Group>
          </Form>
        </Row>
      </Container>
    </div>
  );
}

export default Profile;
