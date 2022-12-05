import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function DoughnutChart() {
  const data = {
    labels: [
      "Missort",
      "Sent to Geo Route",
      "No Scan After TRI",
      "STS",
      "OEC Zero Counts",
    ],
    datasets: [
      {
        label: "Today",
        data: [10, 10, 5, 2, 55],
      },
    ],
    options: {
      plugins: {
        title: {
          display: true,
          text: "chartName",
        },
      },
    },
  };
  return (
    <div>
      <Doughnut data={data} options={data.options} />
    </div>
  );
}

export default DoughnutChart;
