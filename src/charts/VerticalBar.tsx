import React from "react";
import { Bar } from "react-chartjs-2";
import { useStoreState } from "../store";
import useChartColors from "../Utils/useChartColors";

const DatasetsColors = {
  male: "54, 162, 235",
  female: "255, 99, 132"
};

const defaultDatasetOptions = {
  borderWidth: 1
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  legend: {
    display: false
  },
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

const VerticalBar = () => {
  const [dataValues, labels] = useStoreState(
    (state) => state.chartsData.ChartData
  ).gender;

  const colors = useChartColors(DatasetsColors, labels);

  const data = {
    datasets: [{ data: dataValues, ...colors, ...defaultDatasetOptions }],
    labels: labels
  };

  return (
    <>
      <Bar data={data} options={options} />
    </>
  );
};
export default VerticalBar;
