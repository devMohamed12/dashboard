import React, { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Avatar,
  Stack,
  Button,
  Pagination,
  Grid,
} from "@mui/material";
import OrderItem from "./OrderItem";

const Order = ({ order }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2; // Adjust the number of items per page as needed

  const totalPages = Math.ceil(order.products.length / itemsPerPage);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = order.products.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <Box
      sx={{
        backgroundColor: "white",
        paddingY: 3,
        paddingX: 2,
        borderRadius: 2,
        minHeight: 200,
        mb: 7,
      }}
    >
      <Box>
        {/* text content */}

        <Stack
          direction="row"
          alignItems="center"
          gap={2}
          spacing={2}
          marginBottom={1}
        >
          <Typography
            variant="h5"
            sx={{ marginBottom: 2 }}

          >
            {order.name || "N/A"}
          </Typography>
          <Typography variant="body2">
            Government: {order.government || "N/A"}
          </Typography>
        </Stack>

        <Stack
          direction="row"
          alignItems="center"
          gap={2}
          spacing={2}
          marginBottom={1}
        >
          <Typography variant="body2">Order ID: {order.id}</Typography>
          <Typography variant="body2">
            Customer ID: {order.customer_id || "N/A"}
          </Typography>
        </Stack>

        {/* orders */}
        <Box sx={{ marginTop: 4 }}>
          <Typography variant="h5" sx={{ color: "rgb(137, 92, 48)" , fontWeight: 600}} >Order Details</Typography>

          <Grid container spacing={3} alignItems="center" sx={{ marginY: 2 }}>
            {currentProducts.length > 0 ? (
              currentProducts.map((product) => (
                <Grid item xs={12} md={6}>
                  <OrderItem product={product} />
                </Grid>
              ))
            ) : (
              <Typography variant="body2">No products available</Typography>
            )}
          </Grid>
        </Box>

        {/* pagination */}

        <Stack direction="row" sx={{ marginY: 3 }} justifyContent="center">
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={handlePageChange}
            color="primary"
          />
        </Stack>
      </Box>
    </Box>
  );
};

export default Order;
