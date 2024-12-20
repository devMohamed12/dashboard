import React from "react";
import { Box, Grid } from "@mui/material";
import { Typography } from "@mui/material";
import VisitsChart from "./VisitsChart.jsx";

const VisitsOverview = () => {
  return (
    <Grid item xs={12}>
      <Box
        sx={{
          p: 2,
          borderRadius: 3,
          backgroundColor: "white",
          overflow: "auto",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography variant="customTitle" mb={3}>
          Monthly Visitors
        </Typography>
        <VisitsChart />
      </Box>
    </Grid>
  );
};

export default VisitsOverview;
