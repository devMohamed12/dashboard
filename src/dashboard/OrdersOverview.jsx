import React from 'react'
import DashBoardItem from './DashBoardItem';
import { ordersData } from './Data';
import { Grid } from '@mui/material';

const OrdersOverview = () => {
  return (
    <>
      <Grid item  container spacing={3}>
        {ordersData.map((item, index) => (
          <Grid item xs={12} md={6} lg={3} key={index}>
            <DashBoardItem data={item} />
          </Grid>
        ))}
      </Grid> 
    </>
  );
}

export default OrdersOverview;