import {
  Box,
  Modal,
  Typography,
  TextField,
  Button,
  Stack,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import { useState, useEffect } from "react";
import { supabase } from "../../supabase";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const ProductModal = ({
  open,
  onClose,
  method = "add",
  product = {},
  handleUpdate = () => {},
  handleAdd = () => {},
  categories,
}) => {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    subCategory: "",
  });
  const [imagePreview, setImagePreview] = useState(null);
  const [filteredSubcategories, setFilteredSubcategories] = useState([]);

  useEffect(() => {
    setFormData({
      id: product?.id || "",
      title: product?.title || "",
    });
  }, [product, method]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === "category") {
      const selectedCategory = categories.find((cat) => cat.category === value);
      if (selectedCategory) {
        setFilteredSubcategories(
          selectedCategory.subcategories
            ? selectedCategory.subcategories.split(", ")
            : []
        );
      } else {
        setFilteredSubcategories([]);
      }
    }
  };

  const handleFileChange = async (e) => {
    const { data, error } = await supabase.storage
      .from("products")
      .upload(`public/${e.target.files[0].name}`, e.target.files[0]);

    clg
    if (error) {
      console.error("Error uploading image:", error);
      return;
    }
    const imageUrl = `https://yttotxyuhvseelckaeer.supabase.co/storage/v1/object/public/products/public/${e.target.files[0].name}`;
    setImagePreview(imageUrl);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (method === "update") {
      handleUpdate(formData.id, formData);
    } else if (method === "add") {
      await handleAdd({
        title: formData.title,
        id: 3336,
        imageSrc: imagePreview,
      });
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={style}>
        <Typography variant="h5" component="h2" gutterBottom>
          {method === "update" ? "Edit Product" : "Add Product"}
        </Typography>
        <form onSubmit={handleSubmit}>
          <Stack spacing={2}>
            <TextField
              label="Title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              fullWidth
              variant="outlined"
              required
            />

            <FormControl fullWidth variant="outlined">
              <InputLabel>Category</InputLabel>
              <Select
                name="category"
                value={formData.category}
                onChange={handleChange}
                label="Category"
              >
                {categories?.map(({ category }, index) => (
                  <MenuItem key={index} value={category}>
                    {category}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl fullWidth variant="outlined">
              <InputLabel>Subcategory</InputLabel>
              <Select
                name="subCategory"
                value={formData.subCategory}
                onChange={handleChange}
                label="Subcategory"
              >
                {filteredSubcategories.map((sub, index) => (
                  <MenuItem key={index} value={sub}>
                    {sub}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <TextField
              type="file"
              name="image"
              onChange={handleFileChange}
              fullWidth
              variant="outlined"
            />
            {imagePreview && (
              <img
                src={imagePreview}
                alt="Preview"
                style={{ width: "100%", height: "auto" }}
              />
            )}
            <Button type="submit" variant="contained" color="primary" fullWidth>
              {method === "update" ? "Update Product" : "Add Product"}
            </Button>
          </Stack>
        </form>
      </Box>
    </Modal>
  );
};

export default ProductModal;
