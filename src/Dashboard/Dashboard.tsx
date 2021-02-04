import * as React from "react";
import { Card, Grid, CardHeader, CardContent } from "@material-ui/core";
import HorizontalBarChart from "../charts/HorizontalBarChart";
import DoughnutChart from "../charts/DoughnutChart";
import VerticalBar from "../charts/VerticalBar";
import LineChart from "../charts/LineChart";
import FilterPanel from "./FilterPanel";
import ChartCard from "./ChartCard";

const Dashboard = () => {
  return (
    <>
      <FilterPanel />

      <Grid container spacing={3}>
        <Grid item xs={4}>
          <ChartCard title="Line Chart">
            <LineChart />
          </ChartCard>
        </Grid>

        <Grid item xs={4}>
          <ChartCard title="Doughnut Chart">
            <DoughnutChart />
          </ChartCard>
        </Grid>
        <Grid item xs={4}>
          <ChartCard title="Vertical Bar">
            <VerticalBar />
          </ChartCard>
        </Grid>

        <Grid item xs={6}>
          <ChartCard title="Horizontal Bar Chart">
            <HorizontalBarChart />
          </ChartCard>
        </Grid>
        <Grid item xs={6}>
          <ChartCard title="Doughnut Chart">
            <DoughnutChart />
          </ChartCard>
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;
