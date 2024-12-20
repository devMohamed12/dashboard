import { Typography } from "@mui/material";
import ProductsTable from "./ProductsTable";
  
const Products = () => {
  

  return (
    <div>
      <Typography variant="customTitle" sx={{fontSize: "2rem"}}>Products</Typography>

      <ProductsTable />
    </div>
  );
};

export default Products;
