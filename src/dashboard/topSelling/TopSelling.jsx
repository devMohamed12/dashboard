import { Grid } from "@mui/material";
import React from "react";
import TopSellingProducts from "./TopProducts";
import CategoriesChart from "./CategoriesChart2";


const TopSellingg = () => {
  return (
    <Grid item container spacing={2} >
      <Grid item xs={12} md={7}>
        <TopSellingProducts />
      </Grid>
      <Grid item xs={12} md={5}>
        <CategoriesChart />
      </Grid>
    </Grid>
  );
};

export default TopSellingg;

