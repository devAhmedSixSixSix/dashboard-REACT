import React from "react";
import Button from "react-bootstrap/esm/Button";

function NotificationCard({ title, paragraph }) {
  return (
    <div>
      <div className="d-flex align-items-center justify-content-between">
        <h6 className="text-primary">{title}</h6>
        <p>hh:mm AM/PM</p>
      </div>
      <p className="text-muted">{paragraph}</p>
      <div className="d-flex justify-content-end">
        <Button variant="danger" className="px-4">
          Clear
        </Button>
        <Button className="ms-2 px-4">View</Button>
      </div>
    </div>
  );
}

export default NotificationCard;
