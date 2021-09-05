import { useStoreState } from "../store";
import React from "react";
import { HorizontalBar, Chart } from "react-chartjs-2";
import useChartColors from "../Utils/useChartColors";
const DatasetsColors = {
  Switzerland: "255, 99, 132",
  Spain: "54, 162, 235",
  Iran: "255, 206, 86",
  Denmark: "75, 192, 192",
  Turkey: "75, 192, 192",
  Canada: "53, 102, 255",
  "United Kingdom": "153, 102, 255",
  Finland: "153, 102, 255",
  Australia: "255, 159, 64",
  Brazil: "200, 200, 200"
};
// const data = {
//   labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
//   datasets: [
//     {
//       label: "# of Votes",
//       data: [12, 19, 3, 5, 2, 3],
//       backgroundColor: [
//         "rgba(255, 99, 132, 0.2)",
//         "rgba(54, 162, 235, 0.2)",
//         "rgba(255, 206, 86, 0.2)",
//         "rgba(75, 192, 192, 0.2)",
//         "rgba(153, 102, 255, 0.2)",
//         "rgba(255, 159, 64, 0.2)"
//       ],
//       borderColor: [
//         "rgba(255, 99, 132, 1)",
//         "rgba(54, 162, 235, 1)",
//         "rgba(255, 206, 86, 1)",
//         "rgba(75, 192, 192, 1)",
//         "rgba(153, 102, 255, 1)",
//         "rgba(255, 159, 64, 1)"
//       ],
//       borderWidth: 1
//     }
//   ]
// };

const defaultDatasetOptions = {
  borderWidth: 1
};

const options = {
  responsive: true,

  maintainAspectRatio: false,
  scales: {
    xAxes: [
      {
        ticks: {
          beginAtZero: true,
          stepSize: 1
        }
      }
    ]
  }
};

const HorizontalBarChart = () => {
  const [dataValues, labels] = useStoreState(
    (state) => state.chartsData.ChartData
  )["country"];

  const colors = useChartColors(DatasetsColors, labels);

  const data = {
    datasets: [{ data: [...dataValues], ...colors, ...defaultDatasetOptions }],
    labels: labels
  };
  console.log(data);

  return (
    <>
      <HorizontalBar data={data} options={options} />
    </>
  );
};

export default HorizontalBarChart;
