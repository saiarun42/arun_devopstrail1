import React from "react";
import "./OverviewCard.css";

export default function OverviewCard({ title, value, change, changeType, subtext }) {
  return (
    <div className="card overview-card">
      <div className="card-title">{title}</div>
      <div className="card-body">
        <div className="value-wrapper">
          <span className="card-value">{value}</span>
          {change && (
            <span className={`card-change ${changeType}`}>
              {changeType === "up" ? "↑" : "↓"} {change}
            </span>
          )}
        </div>
      </div>
      {subtext && <div className="card-subtext">{subtext}</div>}
    </div>
  );
}
