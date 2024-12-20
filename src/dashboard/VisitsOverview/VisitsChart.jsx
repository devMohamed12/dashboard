import React from "react";
import { Box } from "@mui/material";
import { BarChart } from "@mui/x-charts";
import { VisitsData, VisitsLabels } from "../Data";

const VisitsChart = () => {


  return (
    <Box sx={{ minWidth: "1000px", height: "400px" }}>
      <BarChart
        height={350}
        series={VisitsData.map(({ data, label, color }) => ({
          data,
          label,
          id: label.toLowerCase(),
          color,
        }))}
        xAxis={[{ data: VisitsLabels, scaleType: "band" }]}
      />
    </Box>
  );
};

export default VisitsChart;
