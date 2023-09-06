import React from "react";
import SummarySection from "../summarySection";
import ResaultSection from "../resaultSection";

const Card = () => {
  return (
    <div className="card">
      <div className="card-container">
        <ResaultSection />
        <SummarySection />
      </div>
    </div>
  );
};

export default Card;
