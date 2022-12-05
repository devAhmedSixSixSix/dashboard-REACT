import React from "react";

function InfoCard({ title, numbers }) {
  const fontSize = {
    fontSize: "19px",
  };
  return (
    <div className="bg-white p-3 h-100">
      <h4 className="fw-lighter" style={fontSize}>
        {title}
      </h4>
      <h3 className="text-primary">{numbers}</h3>
    </div>
  );
}

export default InfoCard;
