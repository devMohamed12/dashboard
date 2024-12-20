import React from "react";
import { Box } from "@mui/material";
import { LineChart } from "@mui/x-charts";
import { salesData } from "../Data";

const SalesChart = () => {


  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        backgroundColor: "white",
        padding: 2,
        borderRadius: 2,
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        overflow: "auto",
      }}
    >
      <LineChart
        xAxis={salesData.xAxis}
        series={salesData.series}
        width={600}
        height={350}
      />
    </Box>
  );
};

export default SalesChart;
