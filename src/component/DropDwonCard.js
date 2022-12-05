import React from "react";

function DropDwonCard({ title }) {
  return (
    <div>
      <p className="mb-0">{title}</p>
      <select className="w-100 py-1 ">
        <option value="All">All</option>
      </select>
    </div>
  );
}

export default DropDwonCard;
