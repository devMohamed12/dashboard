import { Chip } from "@mui/material";
import { Link } from "react-router-dom";
import { getChipColor } from "../../hanldeChipColor";

export const employersColumns = [
  {
    field: "id",
    headerName: "id",
    width: 100,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "employerID",
    headerName: "Employer ID",
    width: 120,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "name",
    headerName: "Name",
    description: "This column displays the full name of the employee.",
    sortable: false,
    width: 180,
    align: "center",
    headerAlign: "center",
    renderCell: (params) => (
      <Link
        to={`/employer/${params.row.id}`}
        style={{
          textDecoration: "none",
          color: "inherit",
          display: "block",
        }}
      >
        {params.row.name || ""}
      </Link>
    ),
  },
  {
    field: "location",
    headerName: "Location",
    type: "singleSelect",
    width: 130,
    valueOptions: ["Cairo", "Alexandria", "Giza", "Luxor", "Aswan"],
    align: "center",
    headerAlign: "center",
  },
 
  {
    field: "evaluation",
    headerName: "Evaluation",
    type: "singleSelect",
    width: 130,
    valueOptions: ["Excellent", "Good", "Satisfactory", "Needs Improvement"],
    align: "center",
    headerAlign: "center",
    renderCell: (params) => (
      <Chip
        label={params.value}
        color={getChipColor("evaluation", params.value || "Satisfactory")}
        sx={{ fontSize: "1rem" }}
      />
    ),
  },
  {
    field: "contactEmail",
    headerName: "Contact Email",
    width: 220,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "contactPhone",
    headerName: "Contact Phone",
    width: 160,
    align: "center",
    headerAlign: "center",
  },
 
];
