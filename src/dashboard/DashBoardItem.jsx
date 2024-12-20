import React from "react";
import { Typography, Stack, Chip, Box } from "@mui/material";

const DashBoardItem = ({ data }) => {
  const { label, value, icon, chip, percentage } = data;

  return (
    <>
      <Box
        sx={{
          p: 3,
          display: "flex",
          flexDirection: "column",
          borderRadius: "10px",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          backgroundColor: "#fff",
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={1}
        >
          <Typography variant="customTitle">{label}</Typography>
          <Chip label={chip} size="small" color="secondary" />
        </Stack>
        <Typography
          variant="customTitle"
          sx={{ margin: "20px 0", fontWeight: "bold" }}
        >
          {value}
        </Typography>
        <Stack direction="row" alignItems="center" spacing={2}>
          <Chip
            label={percentage}
            size="small"
            color="success"
            variant="outlined"
          />
          <Typography variant="caption" color="textSecondary">
            Since last month
          </Typography>
        </Stack>
      </Box>
    </>
  );
};

export default DashBoardItem;
