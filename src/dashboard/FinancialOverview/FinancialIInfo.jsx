import React from "react";
import { financialData } from "../Data";
import SalesChart from "./SalesChart";
import { Grid } from "@mui/material";
import DashBoardItem from "../DashBoardItem";

const FinancialInfo = () => {
  return (
    <Grid item container spacing={3}>
      {/* Render Financial Data */}
      <Grid item xs={12} md={6} container spacing={2}>
        {financialData.map((item, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <DashBoardItem data={item} />
          </Grid>
        ))}
      </Grid>

      {/* Render Sales Chart */}
      <Grid item xs={12} md={6}>
        <SalesChart />
      </Grid>
    </Grid>
  );
};

export default FinancialInfo;
