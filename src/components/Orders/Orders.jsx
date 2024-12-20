import { Typography } from "@mui/material";
import OrdersTable from "./OrdersTable";

const Orders = () => {
  
  return (
    <div>
      <Typography variant="customTitle"  sx={{  fontSize: "2rem",  mb: 4 }}>
        Orders
      </Typography>
      
      <OrdersTable />
    </div>
  );
};

export default Orders;
