import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { productsColumns } from "../utils/tables/columns/productsColumns";
import {
  useFetchDataQuery,
  useAddDataMutation,
  useUpdateDataMutation,
  useDeleteDataMutation,
} from "../../Redux/api/apiSlice";
import { Button, TextField } from "@mui/material";
import ProductModal from "./ProductModal";
// import Test2 from "./Test2.jsx";
import { supabase } from "../../supabase";
import Categories from "./Categories";
import SearchInput from "./SearchInput";

const ProductsTable = () => {
  // data

  const {
    data: products,
    error,
    isLoading,
  } = useFetchDataQuery({
    tableName: "products2",
    selectedFields: "(*)",
  });

  // =================== local products ===================
  const [localProducts, setLocalProducts] = useState([]);

  useEffect(() => {
    setLocalProducts(products ? products : []);
  }, [products]);

  // getting categories and subcategories
  const [categories, setCategories] = useState([]);
  
  const fetchCategories = async () => {
    try {
      const { data, error } = await supabase.rpc(
        "get_categories_with_subcategories"
      );
      if (error) {
        console.error("Supabase fetching error.", error);
        return;
      }
      console.log(data, "data");
      setCategories(data);
    } catch (error) {
      console.error("Unexpected error occurred.", error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);


  const [deleteDataMutation] = useDeleteDataMutation();
  const [addDataMutation] = useAddDataMutation();
  const [updateDataMutation] = useUpdateDataMutation();



  const handleAdd = async (newProductData) => {
    try {
      const addedProduct = await addDataMutation({
        tableName: "products2",
        addedData: newProductData,
      }).unwrap();
      console.log("Product added successfully");

      setLocalProducts((prevProducts) => [...prevProducts, addedProduct]);
    } catch (error) {
      console.error("Failed to add product: ", error);
    }
  };

  const handleUpdate = async (id, updateData) => {
    try {
      await updateDataMutation({
        tableName: "products2",
        updateData,
        eqName: "id",
        eqID: id,
      }).unwrap();
      console.log("Product updated successfully");

      setLocalProducts((prevProducts) =>
        prevProducts.map((product) =>
          product.id === id ? { ...product, ...updateData } : product
        )
      );
    } catch (error) {
      console.error("Failed to update product: ", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteDataMutation({
        tableName: "products2",
        eqName: "id",
        eqID: id,
      }).unwrap();
      console.log("Product deleted successfully");

      setLocalProducts((prevProducts) =>
        prevProducts.filter((product) => product.id !== id)
      );
    } catch (error) {
      console.error("Failed to delete product: ", error);
    }
  };
  
  const [open, setOpen] = useState(false);
  const [method, setMethod] = useState("");
  const [product, setProduct] = useState(null);
  const handleOpenAddModal = () => {
    setOpen(true);
    setMethod("add");
    setProduct(null);
  };

  const handleTest = (row) => {
    setOpen(true);
    setMethod("update");
    setProduct(row);
  };

  const rows = localProducts.map((item, index) => ({
    id: item.id || index,
    title: item.title,
    category: item.category,
    price: item.price,
    sup: item.sup,
    imageSrc: item.imageSrc,
  }));

  const columns = [
    ...productsColumns,
    {
      field: "update",
      headerName: "Update",
      width: 150,
      renderCell: (params) => (
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleTest(params.row)}
        >
          Update
        </Button>
      ),
    },
    {
      field: "delete",
      headerName: "Delete",
      width: 150,
      renderCell: (params) => (
        <Button
          variant="contained"
          color="error"
          onClick={() => handleDelete(params.row.id)}
        >
          Delete
        </Button>
      ),
    },
  ];

  return (
    <>
      {/* <Test2 /> */}
      {open && (
        <ProductModal
          open={open}
          onClose={() => setOpen(false)}
          method={method}
          product={product}
          handleUpdate={handleUpdate}
          handleAdd={handleAdd}
          categories={categories}
        />
      )}

      <Categories
        categories={categories}
        setLocalProducts={setLocalProducts}
        products={products}
      />

      <SearchInput setLocalProducts={setLocalProducts} products={products} />
      <Button
        variant="contained"
        color="success"
        onClick={handleOpenAddModal}
        sx={{ my: 2 }}
      >
        Add Product
      </Button>

      <div style={{ backgroundColor: "white", width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          loading={isLoading}
          getRowId={(row) => row.id}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
          pageSizeOptions={[10, 10]}
        />
      </div>
    </>
  );
};

export default ProductsTable;
