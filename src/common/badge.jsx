import React from "react";

const Badge = ({ icon, category }) => {
  return (
    <div className="badge">
      <img src={icon} alt="icon" />
      <b>{category}</b>
    </div>
  );
};

export default Badge;
