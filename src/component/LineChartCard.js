import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function LineChartCard({ chartName }) {
  const data = {
    labels: [0, 5, 10, 15, 20, 25],
    datasets: [
      {
        label: "Today",
        data: [10, 10, 5, 2, 20, 30, 45],
      },
      {
        label: "Yeasterday",
        data: [39, 19, 9, 28, 2, 23, 37],
      },
    ],
    options: {
      plugins: {
        title: {
          display: true,
          text: chartName,
        },
      },
    },
  };
  return (
    <div className="bg-white px-2 py-4 my-2">
      <Line data={data} options={data.options} />
    </div>
  );
}

export default LineChartCard;
