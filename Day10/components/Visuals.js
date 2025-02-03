import React from "react";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";

import revenueData from "./Data/revenueData.json";
import sourceData from "./Data/sourceData.json";
import './Visuals.css'; // Import the CSS file

defaults.maintainAspectRatio = false;
defaults.responsive = true;

defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = "black";

export const Visuals = () => {
  return (
    <>
      <div className="dataCard revenueCard">
        <h2>Revenue and Cost</h2>
        <Bar
          data={{
            labels: revenueData.map((data) => data.label),
            datasets: [
              {
                label: "Revenue",
                data: revenueData.map((data) => data.revenue),
                backgroundColor: "#064FF0",
                borderColor: "#064FF0",
              },
              {
                label: "Cost",
                data: revenueData.map((data) => data.cost),
                backgroundColor: "#FF3030",
                borderColor: "#FF3030",
              },
            ],
          }}
          options={{
            maintainAspectRatio: false,
            responsive: true,
            elements: {
              line: {
                tension: 0.5,
              },
            },
          }}
        />
      </div>

      <div className="dataCard sourceCard">
        <h2>Source of Revenue</h2>
        <Doughnut
          data={{
            labels: sourceData.map((data) => data.label),
            datasets: [
              {
                data: sourceData.map((data) => data.value),
                backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
                hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
              },
            ],
          }}
          options={{
            maintainAspectRatio: false,
            responsive: true,
          }}
        />
      </div>
    </>
  );
};

export default Visuals;
