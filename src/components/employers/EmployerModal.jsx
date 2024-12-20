import {
  Box,
  Modal,
  Typography,
  TextField,
  Button,
  Stack,
} from "@mui/material";
import { useState, useEffect } from "react";

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

const EmployerModal = ({
  open,
  onClose,
  method = "add",
  employer = {},
  handleUpdate = () => {},
  handleAdd = () => {},
}) => {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    monthlyTarget: "",
    evaluation: "",
    contactEmail: "",
    contactPhone: "",
  });

  // Update form data when employer changes
  useEffect(() => {
    setFormData({
      id: employer?.id || "",
      name: employer?.name || "",
      location: employer?.location || "",
      monthlyTarget: employer?.monthlyTarget || "",
      evaluation: employer?.evaluation || "",
      contactEmail: employer?.contactEmail || "",
      contactPhone: employer?.contactPhone || "",
    });
  }, [employer, method]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (method === "update") {
      handleUpdate(formData.id, formData);
    } else if (method === "add") {
      handleAdd({ ...formData, id: Date.now() }); // Generate a unique ID
    }
    onClose(); // Close modal after submit
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={style}>
        <Typography variant="h5" component="h2" gutterBottom>
          {method === "update" ? "Edit Employer" : "Add Employer"}
        </Typography>
        <form onSubmit={handleSubmit}>
          <Stack spacing={2}>
            <TextField
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              fullWidth
              variant="outlined"
              required
            />
            <TextField
              label="Location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              fullWidth
              variant="outlined"
              required
            />
            <TextField
              label="Monthly Target"
              name="monthlyTarget"
              value={formData.monthlyTarget}
              onChange={handleChange}
              fullWidth
              variant="outlined"
              required
            />
            <TextField
              label="Evaluation"
              name="evaluation"
              value={formData.evaluation}
              onChange={handleChange}
              fullWidth
              variant="outlined"
              required
            />
            <TextField
              label="Contact Email"
              name="contactEmail"
              value={formData.contactEmail}
              onChange={handleChange}
              fullWidth
              variant="outlined"
              required
            />
            <TextField
              label="Contact Phone"
              name="contactPhone"
              value={formData.contactPhone}
              onChange={handleChange}
              fullWidth
              variant="outlined"
              required
            />
            <Button type="submit" variant="contained" color="primary" fullWidth>
              {method === "update" ? "Update Employer" : "Add Employer"}
            </Button>
          </Stack>
        </form>
      </Box>
    </Modal>
  );
};

export default EmployerModal;
