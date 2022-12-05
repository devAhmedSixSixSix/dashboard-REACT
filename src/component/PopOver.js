import React from "react";
import Button from "react-bootstrap/esm/Button";

function PopOver({ hidePop }) {
  return (
    <div className="bg-white my-popover p-5 text-center">
      <div>
        <h2 className="mb-3">Confirm Logout</h2>
        <p>
          Are you sure you want to logout from
          <strong> Logistic Dashboard?</strong>
        </p>
        <div>
          <Button variant="primary m-1" onClick={hidePop}>
            Cancel
          </Button>
          <Button variant="success m-1">Logout</Button>
        </div>
      </div>
    </div>
  );
}

export default PopOver;
