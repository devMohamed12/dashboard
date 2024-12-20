import React from "react";
import { useParams } from "react-router-dom";
import { useFetchDataQuery } from "../../Redux/api/apiSlice";
import { Box, Stack, Typography } from "@mui/material";

const Product = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useFetchDataQuery({
    tableName: "products2",
    selectedFields: "*",
    eqName: "id",
    eqID: id,
  });
  const product = data ? data[0] : "";

  console.log(product, "product");
  if (isLoading) return <Typography>Loading...</Typography>;

  return (
    <Box sx={{ p: 4, bgcolor: "white", borderRadius: 2 }}>
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Box>
          <Typography variant="customTitle">
            {product?.title || "title"}
          </Typography>
          <Typography variant="h6">price : {product?.price || 0}</Typography>
          <Typography variant="body1">
            category : {product?.category || "category"}
          </Typography>
          <Typography variant="body1">sup : {product?.sup || "sup"}</Typography>
        </Box>
        <Box>
          <img src={product?.imageSrc} alt={product?.title} />
        </Box>
      </Stack>

      <Box sx={{ mt: 2 }}>
        <Typography variant="body1">
          {product?.description ||
            "lorem ipsum dolor sit amet lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit amet"}
        </Typography>

        {/* <Typography variant="customTitle">Related Products</Typography> */}
      </Box>
    </Box>
  );
};

export default Product;
