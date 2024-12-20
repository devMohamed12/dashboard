// import { Box, Button, TextField } from "@mui/material";
// import React, { useState } from "react";

// const Test = () => {






//   const products0 = [
//     { id: 1, name: "product 1", category: "ca1" },
//     { id: 2, name: "product 2", category: "ca2" },
//     { id: 3, name: "product 3", category: "ca3" },
//     { id: 4, name: "product 4", category: "ca1" },
//     { id: 5, name: "product 5", category: "ca2" },
//     { id: 6, name: "product 6", category: "ca3" },
//     { id: 7, name: "product 7", category: "ca1" },
//     { id: 8, name: "product 8", category: "ca2" },
//     { id: 9, name: "product 9", category: "ca3" },
//     { id: 10, name: "product 10", category: "ca3" },
//     ];
    

//     const [products, setProducts] = useState(products0);

//   const [filteredProducts, setFilteredProducts] = useState(products);
//   console.log(products, "products original");

//   const categories = ["ca1", "ca2", "ca3"];
  
//     const filterByCategory = (category) => {
      
//         if(category === "all"){
//             setFilteredProducts(products)
//         }else{
//             setFilteredProducts(products.filter((product) => product.category === category));
//         }
//   };

//   const handleSearch = (e) => {
//     const search = e.target.value.toLowerCase();
//     console.log(search, "search")
//     setFilteredProducts(products.filter((product) => product.name.toLowerCase().includes(search)));
//   };

//   return (
//     <div>
//       <TextField sx={{ display: "block", width: "70%" }} type="text" onChange={handleSearch} />
//       <Button
//           variant="contained"
//           sx={{ margin: "10px" }}
//           onClick={() => filterByCategory("all")}
//         >
//           All
//         </Button>
//       {categories.map((category) => (
//         <Button
//           variant="contained"
//           key={category}
//           sx={{ margin: "10px" }}
//           onClick={() => filterByCategory(category)}
//         >
//           {category}
//         </Button>
//       ))}

//       <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
//         {filteredProducts.map((product) => (
//           <Box
//             key={product.id}
//             sx={{
//               display: "flex",
//               justifyContent: "space-between",
//               alignItems: "center",
//               width: "25%",
//               padding: "20px",
//               fontSize: "19px",
//               backgroundColor:
//                 product.category === "ca1"
//                   ? "red"
//                   : product.category === "ca2"
//                   ? "green"
//                   : product.category === "ca3"
//                   ? "purple"
//                   : "transparent",
//             }}
//           >
//             <p>{product.name}</p>
//             <p>{product.category}</p>
//           </Box>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Test;


import React, { useEffect, useState } from 'react'
import { supabase } from '../../supabase';

const Test = () => {
  const fetchCategories = async () => {
    const { data, error } = await supabase.rpc(
      "get_categories_with_subcategories"
    );
    if (error) {
      console.error("Supbase fetching error.", error);
      return;
    }

    console.log(data, "data");
     // console.log(result, "categories");
  };
  useEffect(() => {
    fetchCategories();
  }, []);
  return (
    <div>Test</div>
  )
}

export default Test