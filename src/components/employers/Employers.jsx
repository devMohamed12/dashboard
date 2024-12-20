import { Typography } from "@mui/material";
import EmployersTable from "./EmployersTable";

const Employers = () => {
  return (
    <>
      <Typography
        variant="customTitle"
        sx={{ fontSize: "2rem", mb: 4 }}
      >
        Employers
      </Typography>
      <EmployersTable />
    </>
  );
};

export default Employers;
