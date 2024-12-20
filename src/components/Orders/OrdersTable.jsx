import React, { useState } from "react";
import { useFetchDataQuery } from "../../Redux/api/apiSlice";
 import Order from "./Order";
import { Box, Pagination } from "@mui/material";

const OrdersTable = () => {
  const { data, isLoading } = useFetchDataQuery({
    tableName: "orders",
    selectedFields: "*",
  });

  

  
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const paginatedData = data?.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil((data?.length || 0) / itemsPerPage);
  

  return (
    <Box sx={{ minHeight: "600px"  }}>
      {paginatedData?.map((order) => (
        <Order key={order.id} order={order} />
      ))}

      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
        />
      </Box>
    </Box>
  );
};

export default OrdersTable;
