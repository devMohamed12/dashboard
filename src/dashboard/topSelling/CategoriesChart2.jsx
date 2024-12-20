import React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { Box, Typography } from "@mui/material";
import { CategoriesData } from "../Data";

const CategoriesChart = () => {
  

  return (
    <Box sx={{ backgroundColor: "white", p: 4, borderRadius: 2 }}>
      <Typography variant="customTitle">Categories Chart</Typography>
      <Box my={1}>
        <PieChart series={CategoriesData} height={300} />
      </Box>
    </Box>
  );
};

export default CategoriesChart;
