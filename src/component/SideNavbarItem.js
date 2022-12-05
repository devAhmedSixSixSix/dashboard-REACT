import React from "react";

function SideNavbarItem({ icon, title }) {
  const pointer = {
    cursor: "pointer",
  };
  return (
    <div
      style={pointer}
      className="d-flex align-items-center justify-content-center justify-content-lg-start  py-2 text-muted ps-3 my-nav-item"
    >
      <span className="d-block me-2">{icon}</span>
      <h5 className="mb-0 fw-lighter d-none d-lg-block">{title}</h5>
    </div>
  );
}

export default SideNavbarItem;
