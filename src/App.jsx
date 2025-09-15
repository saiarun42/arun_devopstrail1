import React from "react";
import Layout from "./components/Layout/Layout";
import OverviewSection from "./components/OverviewSection/OverviewSection";



export default function App() {
  return (
    <Layout>
      <main style={{ maxWidth: 1200, margin: "0 auto" }}>
        <OverviewSection />
        <div style={{ height: 24 }} />
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h3 style={{ color: "#4b197f", margin: 0, fontSize: 18, fontWeight: 700 }}>PROJECT HEALTH</h3>
          <div style={{ marginLeft: 12 }}>
            <button className="filter-btn">Last 30 days ▾</button>
          </div>
        </div>
        <div style={{ height: 12 }} />
      </main>
    </Layout>
  );
}
