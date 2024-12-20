import { DataGrid } from "@mui/x-data-grid";
import { Typography, Box } from "@mui/material";
import { useFetchDataQuery } from "../../Redux/api/apiSlice";
import { productColumns } from "../Data";

const TopSellingProducts = () => {
  const {
    data: products,
    error,
    isLoading,
  } = useFetchDataQuery({
    tableName: "products2",
    selectedFields: "(*)",
  });
 
  const rows = products?.slice(0, 20).map((product) => ({
    id: product.id,
    title: product.title,
    price: product.price,
    category: product.category,
    image: product.imageSrc,
  }));

  return (
    <Box sx={{ backgroundColor: "white", p: 3, borderRadius: 2 }}>
      <Typography variant="customTitle">Top selling product</Typography>
      <DataGrid
        sx={{ mt: 2, border: "none" }}
        rows={rows}
        columns={productColumns}
        loading={isLoading}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 4 },
          },
        }}
      />
    </Box>
  );
};

export default TopSellingProducts;
