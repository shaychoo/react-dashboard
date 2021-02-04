import React from "react";
import { Line } from "react-chartjs-2";

const data = {
  labels: ["1", "2", "3", "4", "5", "6"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      fill: false,
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgba(255, 99, 132, 0.2)"
    }
  ]
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true
        }
      }
    ]
  }
};

const LineChart = () => {
  return (
    <>
      {/* <div className="header">
        <div className="links">
          <a
            className="btn btn-gh"
            href="https://github.com/reactchartjs/react-chartjs-2/blob/react16/example/src/charts/Line.js"
          >
            Github Source
          </a>
        </div>
      </div> */}
      <Line data={data} options={options} />
    </>
  );
};

export default LineChart;
