import React, { useState } from 'react';
import { Chart as ChartJS } from "chart.js/auto";
import { Bar, Line, Doughnut, Pie, Radar, PolarArea } from "react-chartjs-2";

function Total_Trade({ metrics }) {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { name: 'Table', component: TableView },
    { name: 'Cards', component: CardsView },
    { name: 'Chart', component: ChartView },
  ];

  const CurrentComponent = tabs[activeTab].component;

  function TableView() {
    return (
      <div className="table-container">
        <table className="metrics-table">
          <thead>
            <tr className="table-header">
              {metrics.map((k, i) => (
                <th key={i} className="table-head">
                  {k.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr className="table-row">
              {metrics.map((k, i) => (
                <td key={i} className="table-cell">
                  {k.value}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

  function CardsView() {
    return (
      <div className="cards-grid">
        {metrics.map((metric, i) => (
          <div key={i} className="metric-card">
            <div className="metric-label">{metric.label}</div>
            <div className="metric-value">{metric.value}</div>
          </div>
        ))}
      </div>
    );
  }

  function ChartView() {
    const chartData = {
      labels: metrics.map(m => m.label),
      datasets: [{
        data: metrics.map(m => parseFloat(m.value) || 0),
        backgroundColor: 'rgba(59, 130, 246, 0.5)',
      }]
    };

    return (
      <div className="chart-container">
        <Bar data={chartData} options={{ responsive: true }} />
      </div>
    );
  }

  return (
    <div className="total-trade-container">
      <h2 className="container-title">Analytics Data</h2>
      
      {/* Tab Buttons */}
      <div className="tabs-navigation">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`tab-button ${activeTab === index ? 'tab-active' : 'tab-inactive'}`}
          >
            {tab.name}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        <CurrentComponent />
      </div>
    </div>
  );
}

export default Total_Trade;