import React from "react";
import Button from "react-bootstrap/esm/Button";

function SettingCard({ title, paragraph }) {
  return (
    <div className="d-flex align-items-center justify-content-between my-3">
      <div>
        <h6 className="text-primary">{title}</h6>
        <p className="text-muted">{paragraph}</p>
      </div>
      <Button>Enaple</Button>
    </div>
  );
}

export default SettingCard;
