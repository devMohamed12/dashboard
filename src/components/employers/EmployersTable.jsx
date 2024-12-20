import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import {
  useFetchDataQuery,
  useAddDataMutation,
  useUpdateDataMutation,
  useDeleteDataMutation,
} from "../../Redux/api/apiSlice";
import { Button, TextField } from "@mui/material";
import EmployerModal from "./EmployerModal.jsx"; // Assume you have a similar modal component for employers
import { employersColumns } from "../utils/tables/columns/employersColumns";

const EmployersTable = () => {
  const {
    data: employers,
    error,
    isLoading,
  } = useFetchDataQuery({
    tableName: "employers",
    selectedFields: "*",
  });

  const [localEmployers, setLocalEmployers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [method, setMethod] = useState("");
  const [employer, setEmployer] = useState(null);

  useEffect(() => {
    if (employers) {
      setLocalEmployers(employers);
      console.log(employers);
    }
  }, [employers]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };


  const filteredEmployers = localEmployers.filter(
    (employer) =>
      employer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      employer.employerID.toString().includes(searchQuery.toString()) ||
      employer.id.toString().includes(searchQuery.toString())||
      employer.contactPhone.toString().includes(searchQuery.toString()) ||
      employer.contactEmail.toString().includes(searchQuery.toLocaleLowerCase())
  );

  const [addDataMutation] = useAddDataMutation();
  const [updateDataMutation] = useUpdateDataMutation();
  const [deleteDataMutation] = useDeleteDataMutation();

  const handleAdd = async (newEmployerData) => {
    try {
      const addedEmployer = await addDataMutation({
        tableName: "employers",
        addedData: newEmployerData,
      }).unwrap();
      console.log("Employer added successfully");

      setLocalEmployers((prevEmployers) => [...prevEmployers, addedEmployer]);
    } catch (error) {
      console.error("Failed to add employer: ", error);
    }
  };

  const handleUpdate = async (id, updateData) => {
    try {
      await updateDataMutation({
        tableName: "employers",
        updateData ,
        eqName: "id",
        eqID: id,
      }).unwrap();
      console.log("Employer updated successfully");

      setLocalEmployers((prevEmployers) =>
        prevEmployers.map((employer) =>
          employer.id === id ? { ...employer, ...updateData } : employer
        )
      );
    } catch (error) {
      console.error("Failed to update employer: ", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteDataMutation({
        tableName: "employers",
        eqName: "id",
        eqID: id,
      }).unwrap();
      console.log("Employer deleted successfully");

      setLocalEmployers((prevEmployers) =>
        prevEmployers.filter((employer) => employer.id !== id)
      );
    } catch (error) {
      console.error("Failed to delete employer: ", error);
    }
  };

  const handleOpenAddModal = () => {
    setOpen(true);
    setMethod("add");
    setEmployer(null);
  };

  const handleEdit = (row) => {
    setOpen(true);
    setMethod("update");
    setEmployer(row);
  };

  const rows = filteredEmployers.map((employer) => ({
    id: employer.id,
    employerID: employer.employerID || "",
    name: employer.name || "",
    location: employer.location || "",
    evaluation: employer.evaluation || "Satisfactory",
    contactEmail: employer.contactEmail || "",
    contactPhone: employer.contactPhone || "",
  }));

  const columns = [
    ...employersColumns,
    {
      field: "update",
      headerName: "Update",
      width: 150,
      renderCell: (params) => (
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleEdit(params.row)}
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
      {open && (
        <EmployerModal
          open={open}
          onClose={() => setOpen(false)}
          method={method}
          employer={employer}
          handleUpdate={handleUpdate}
          handleAdd={handleAdd}
        />
      )}
      <TextField
        label="Search employers"
        variant="outlined"
        fullWidth
        value={searchQuery}
        onChange={handleSearchChange}
        sx={{ mb: 2 }}
      />

      <Button
        variant="contained"
        color="success"
        onClick={handleOpenAddModal}
        sx={{ my: 2 }}
      >
        Add Employer
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

export default EmployersTable;
