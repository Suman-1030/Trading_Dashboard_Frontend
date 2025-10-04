import React from 'react'
import { Chart as ChartJS } from "chart.js/auto";
import {  Bar, Line, Doughnut, Pie, Radar, PolarArea } from "react-chartjs-2";

function PL({ metrics }) {
    console.log("PL metrics:", metrics);

    const currency = Number(
        metrics.find((m) => m.label === "PL Currency ($)")?.value || 0
      );
    const percent = Number(
        metrics.find((m) => m.label === "PL Percent (%)")?.value || 0
      );
    

  const d = {
    labels: ["Currency (₹)", "Percent (%)"],
    datasets: [
      {
        label: "P/L Breakdown",
        data: [
          Number(currency), 
          Number(percent)
        ],
        backgroundColor: [
          "rgba(75,192,192,0.8)", 
          "rgba(255,99,132,0.8)", 
        ],
      },
    ],
  };

  
  return (
    <div className='PL'>
      <div><h2>P/L Breakdown</h2></div>
      <div className='tag'>
      <div><strong>Currency:</strong> {currency}</div>  
      <div><strong>Percent(%):</strong>{percent}</div>
      </div>
      <Line data={d}  />
    </div>
  )
}

export default PL
