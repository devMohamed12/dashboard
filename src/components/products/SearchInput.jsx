import React, { useState } from "react";
import { TextField } from "@mui/material";

const SearchInput = ({ setLocalProducts, products }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    const search = e.target.value;
    setSearchQuery(search);

    setLocalProducts(
      products.filter(
        (product) =>
          product.title.toLowerCase().includes(search) ||
          product.category.toLowerCase().includes(search) ||
          product.id.toString().includes(search)
      )
    );
  };
  return (
    <TextField
      label="Search products"
      variant="outlined"
      fullWidth
      value={searchQuery}
      onChange={handleSearch}
      sx={{ mb: 2 }} // MUI system for margin-bottom
    />
  );
};

export default SearchInput;
