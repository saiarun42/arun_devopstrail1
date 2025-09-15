import React, { useState } from "react";
import OverviewCard from "../Overviewcard/OverviewCard";
import "./OverviewSection.css";
import Vector_plus from "../../assets/Vector_plus.svg";

export default function OverviewSection() {
  const initialCards = [
    { id: 1,
      orderId: 1, 
      title:"Total Projects", 
      value: "42", 
      change: "+3", 
      changeType: "up", 
      subtext: "vs last quarter" 
    },
    { id: 2,
      orderId: 2,
      title: "% Green", 
      value: "76%", 
      change: "+5%", 
      changeType: "up", 
      subtext: "32 of 42 projects"
     },
    { id: 3, 
      orderId: 3, 
      title: "Budget Variance", 
      value: "-2.4%", 
      change: "-1.2%",
      changeType: "down", 
      subtext: "$1.2M under budget"
     },
    { id: 4, 
      orderId: 4,
      title: "Benefits Delivered",
      value: "$8.7M",
      subtext: "YTD, 65% of target"
     },
    { id: 5,
      orderId: 5,
      title: "Milestones", 
      value: "15",
      change: "+2",
      changeType: "up",
      subtext: "Next review in 2 weeks"
     },
    { id: 6,
      orderId: 6,
      title: "Client Fulfillment",
      value: "89%",
      change: "+3%",
      changeType: "up",
      subtext: "Last month"
     },
    { id: 7,
      orderId: 7,
      title:"Team Capacity",
      value: "85%",
      change: "+2%",
      changeType: "up",
      subtext: "For 8 projects"
     },
  ];

  const widgetCards = [
    { id: 8,
      orderId: 8,
      title: "Innovation Index",
      value: "67%",
      subtext: "Based on R&D projects" 
    },
    {id: 9,
      orderId: 9,
      title: "New Card",
      value: "N/A",
      subtext: "Add your widget"
    },
    { id: 10,
      orderId: 10,
      title: "New Card",
      value: "N/A",
      subtext: "Add your widget" },
  ];

  const [cards, setCards] = useState(initialCards);
  const [widgets, setWidgets] = useState(widgetCards);
  const [showWidgets, setShowWidgets] = useState(false);

  // Drag start
  const handleDragStart = (e, index, source) => {
    e.dataTransfer.setData("startIndex", index);
    e.dataTransfer.setData("source", source);
  };

  // Allow drop
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  // Handle drop logic for swapping
  const handleDrop = (e, endIndex, target) => {
    const startIndex = parseInt(e.dataTransfer.getData("startIndex"), 10);
    const source = e.dataTransfer.getData("source");

    if (source === target && startIndex === endIndex) return;

    if (source === "main" && target === "main") {
      // Reorder inside main grid
      const updated = [...cards];
      const [moved] = updated.splice(startIndex, 1);
      updated.splice(endIndex, 0, moved);
      setCards(updated.map((c, i) => ({ ...c, orderId: i + 1 })));
    }

    if (source === "widgets" && target === "main") {
      // Swap widget with main card
      const newCards = [...cards];
      const newWidgets = [...widgets];

      const [widgetCard] = newWidgets.splice(startIndex, 1);
      const [replacedCard] = newCards.splice(endIndex, 1, widgetCard);

      setCards(newCards.map((c, i) => ({ ...c, orderId: i + 1 })));
      setWidgets([...newWidgets, replacedCard]);
    }
  };

  return (
    <section className="overview-section">
      <div className="overview-header">
        <h2>OVERVIEW</h2>
        <div className="overview-filter">
          <button className="filter-btn">Last 30 days ▾</button>
        </div>
      </div>

      {/* Main Grid */}
      <div className="overview-grid">
        {cards.map((card, index) => (
          <div
            key={card.id}
            className="draggable-card"
            draggable
            onDragStart={(e) => handleDragStart(e, index, "main")}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, index, "main")}
          >
            <OverviewCard {...card} />
          </div>
        ))}

        {/* Add Widgets Button */}
        <div className="card add-card" onClick={() => setShowWidgets(!showWidgets)}>
          <span>
            <img className="plus" src={Vector_plus} alt="Add" />
          </span>
        </div>
      </div>

      {/* Widgets Panel */}
      {showWidgets && (
        <div className="widgets-panel">
          <h3>Available Widgets</h3>
          <div className="widgets-grid">
            {widgets.map((widget, index) => (
              <div
                key={widget.id}
                className="draggable-card widget-card"
                draggable
                onDragStart={(e) => handleDragStart(e, index, "widgets")}
                onDragOver={handleDragOver}
                onDrop={(e) => handleDrop(e, index, "widgets")}
              >
                <OverviewCard {...widget} />
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
