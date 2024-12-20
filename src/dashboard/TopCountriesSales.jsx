import React from "react";
import { Box, Typography, Card, CardContent, List } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { topCountriesSalesData } from "./Data";
import CountriesItem from "./CountriesItem";

const TopCountriesSales = () => {
  return (
    <Card sx={{ boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" , borderRadius: 3 }}>
      <CardContent>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={2}
        >
          <Typography variant="customTitle">Top Countries By Sales</Typography>
          <Typography variant="subtitle2" color="textSecondary">
            View all
          </Typography>
        </Box>
        <Box mb={2}>
          <Typography my={2}>$37,802</Typography>
          <Typography variant="subtitle1">
            1.56% <ArrowUpwardIcon fontSize="small" /> since last weekend
          </Typography>
        </Box>
        <List>
          {topCountriesSalesData.map((country, index) => (
            <CountriesItem key={index} country={country} />
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default TopCountriesSales;
