 import { Box, Avatar, Typography } from "@mui/material";

const OrderItem = ({ product }) => {
  const { id, title, price, imageSrc, qty } = product;
  

  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        backgroundColor: "#f6f6f6",
        alignItems: "center",
        padding: "15px 20px",
        borderRadius: "9px",
      }}
    >
      <Avatar src={imageSrc} sx={{ width: 50, height: 50  , borderRadius: 2}} />
      <Box>
        <Typography variant="body1" sx={{ marginBottom: 0}}>
          {title || "product title"}
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", gap: 2, marginY: 2 }}>
          <Typography variant="body2">quantity: {qty || 1}</Typography>
        </Box>
        <Typography variant="body2">Price: ${qty  * price}</Typography>
      </Box>
    </Box>
  );
};

export default OrderItem;
