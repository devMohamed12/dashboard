import { Button, Stack } from "@mui/material";
import React, { useState, useEffect } from "react";
  
const Categories = ({categories,products ,  setLocalProducts}) => {
    const [selectedCategory, setSelectedCategory] = useState("");
    
const filterByCategory = (category) => {
  setSelectedCategory(category);
  // setSearchQuery(""); // Uncomment this line if you want to clear the search query when filtering
    const filteredProducts = products.filter((product) =>
          product?.category?.includes(category)

    );
    
    console.log(filteredProducts);
  
  setLocalProducts(filteredProducts);
  console.log(category);
};
 

 
  

  return (
    <Stack direction="row" spacing={2} marginBottom={2}>
      <Button
        variant={selectedCategory === "" ? "contained" : "outlined"}
        onClick={() => filterByCategory("")}
      >
        All
      </Button>
      { categories?.map(({category}) => (
        <Button
          key={category }
          variant={selectedCategory === category  ? "contained" : "outlined"}
          onClick={() => filterByCategory(category )}
        >
          {category }
        </Button>
      ))}
    </Stack>
  );
};

export default Categories;
