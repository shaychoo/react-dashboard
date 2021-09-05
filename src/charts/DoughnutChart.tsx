import React from "react";
import { Doughnut, Chart } from "react-chartjs-2";
import { useStoreState } from "../store";
import useChartColors from "../Utils/useChartColors";

const DatasetsColors = {
  Ms: "255, 99, 132",
  Mr: "54, 162, 235",
  Mrs: "255, 206, 86",
  Miss: "75, 192, 192",
  Madame: "153, 102, 255",
  Monsieur: "255, 159, 64"
};

const defaultDatasetOptions = {
  borderWidth: 1
};

const options = {
  xdata: "dsadsa",
  responsive: true,
  maintainAspectRatio: false,

  legend: {
    position: "right"
  },
  elements: {
    center: {
      text: "xxx&חסמים",
      textArray: [],
      color: "#FF6384", // Default is #000000
      fontStyle: "Arial", // Default is Arial
      sidePadding: 20, // Default is 20 (as a percentage)
      minFontSize: 25, // Default is 20 (in px), set to false and text will not wrap.
      lineHeight: 25 // Default is 25 (in px), used for when text wraps
    }
  }
};

const DoughnutChart = () => {
  // const labels = useStoreState((state) => state.chartsData.labels);
  // const dataValues = useStoreState((state) => state.chartsData.dataValues);
  const [dataValues, labels] = useStoreState(
    (state) => state.chartsData.ChartData
  ).title;

  const colors = useChartColors(DatasetsColors, labels);

  const data = {
    datasets: [{ data: [...dataValues], ...colors, ...defaultDatasetOptions }],
    labels: labels
  };
  let numOfCenter =
    data.datasets[0].data.length === 0
      ? 0
      : data.datasets[0].data.reduce((a, r) => a + r);

  options.elements.center.textArray = [numOfCenter, "חסמים"];

  //data.labels = labels;
  //data.datasets[0].data = dataValues;

  Chart.defaults.global.onClick = (mouse, chart) => {
    if (chart[0]) {
      console.log(chart[0]._chart.options.xdata);
      console.log(chart[0]._model.label);
    }
  };

  Chart.pluginService.register({
    beforeDraw: function (chart) {
      if (chart.config.options.elements.center) {
        // Get ctx from string
        var ctx = chart.chart.ctx;

        // Get options from the center object in options
        var centerConfig = chart.config.options.elements.center;
        var fontStyle = centerConfig.fontStyle || "Arial";
        var txt = centerConfig.text;
        var color = centerConfig.color || "#000";
        var maxFontSize = centerConfig.maxFontSize || 75;
        var sidePadding = centerConfig.sidePadding || 20;
        var sidePaddingCalculated =
          (sidePadding / 100) * (chart.innerRadius * 2);
        // Start with a base font of 30px
        ctx.font = "30px " + fontStyle;

        // Get the width of the string and also the width of the element minus 10 to give it 5px side padding
        var stringWidth = ctx.measureText(txt).width;
        var elementWidth = chart.innerRadius * 2 - sidePaddingCalculated;

        // Find out how much the font can grow in width.
        var widthRatio = elementWidth / stringWidth;
        var newFontSize = Math.floor(30 * widthRatio);
        var elementHeight = chart.innerRadius * 2;

        //ctx.clearRect(0, 0, elementWidth, elementWidth);

        // Pick a new font size so it will not be larger than the height of label.
        var fontSizeToUse = Math.min(newFontSize, elementHeight, maxFontSize);
        var minFontSize = centerConfig.minFontSize;
        var lineHeight = centerConfig.lineHeight || 25;
        var wrapText = false;

        if (minFontSize === undefined) {
          minFontSize = 20;
        }

        if (minFontSize && fontSizeToUse < minFontSize) {
          fontSizeToUse = minFontSize;
          wrapText = true;
        }

        // Set font settings to draw it correctly.
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        var centerX = (chart.chartArea.left + chart.chartArea.right) / 2;
        var centerY = (chart.chartArea.top + chart.chartArea.bottom) / 2;
        ctx.font = fontSizeToUse + "px " + fontStyle;
        ctx.fillStyle = color;

        /* if (!wrapText) {
          ctx.fillText(txt, centerX, centerY);
          return;
        }
        */
        var words = txt.split(" ");
        var line = "";
        var lines = [];

        // Break words up into multiple lines if necessary
        for (var n = 0; n < words.length; n++) {
          var testLine = line + words[n] + " ";
          var metrics = ctx.measureText(testLine);
          var testWidth = metrics.width;
          if (testWidth > elementWidth && n > 0) {
            lines.push(line);
            line = words[n] + " ";
          } else {
            line = testLine;
          }
        }

        lines = chart.config.options.elements.center.textArray;
        // Move the center up depending on line height and number of lines
        centerY -= (lines.length / 2) * lineHeight;

        for (let n = 0; n < lines.length; n++) {
          ctx.fillText(lines[n], centerX, centerY + 10);
          centerY += lineHeight;
        }
        //Draw text in center
        // ctx.fillText(line, centerX, centerY);
      }
    }
  });

  return (
    <>
      <Doughnut data={data} options={options} />
    </>
  );
};
export default DoughnutChart;
