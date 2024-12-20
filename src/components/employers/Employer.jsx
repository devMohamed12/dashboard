import { Typography, Box, Grid, Paper, Chip, Stack } from "@mui/material";

import { Link, useParams } from "react-router-dom";

import { DataGrid } from "@mui/x-data-grid";
import { useFetchDataQuery } from "../../Redux/api/apiSlice";

const Employer = () => {
  const employerID = useParams().id;
  const {
    data: employer,
    error: employerError,
    isLoading: isLoadingEmployer,
  } = useFetchDataQuery({
    tableName: "clinics_doctors",
    selectedFields: "clinics(*),doctors(*)",
    eqName: "dr_ids",
    eqID: employerID,
  });
  console.log(employer, "employer");

  const user = {
    id: 2,

    lastName: "Lannister",
    firstName: "Cersei",
    age: 42,
    image: "https://via.placeholder.com/150",
    position: "super admin",
  };

  return (
    <Paper
      elevation={0}
      sx={{ p: 2, display: "flex", flexDirection: "column" }}
    >
      <div style={{ minHeight: 400, width: "100%" }}>
        <Grid
          container
          spacing={2}
          sx={{ pt: 3, px: 4, pb: 3 }}
          justifyContent={"center"}
        >
          {/* first row  */}
          <Grid item xs={12} md={8}>
            <Typography variant="h6">
              name : {user.name || "ahmed adel"}
            </Typography>
            <Typography variant="h6" sx={{ my: 3 }}>
              age : {user.age || 50}
            </Typography>
            <Typography variant="h6">
              position :{" "}
              <Chip
                label={user.position || "doctor"}
                color="primary"
                sx={{ fontSize: "1rem" }}
              />
            </Typography>
          </Grid>

          <Grid item xs={12} md={4} sx={{ textAlign: "center" }}>
            <img
              variant="square"
              alt={user.name || "ahmed adel"}
              src={"https://via.placeholder.com/200"}
              sx={{ height: "200px" }}
            />
            {/* <img src="" alt="" /> */}
          </Grid>

          {/* second row  */}
          <Grid item md={6}>
            <Typography
              variant="customTitle"
              textAlign={"left"}
              sx={{ textAlign: "left", my: 5 }}
            >
              {user.fullName || "ahmed adel"}
            </Typography>
          </Grid>
        </Grid>
      </div>
    </Paper>
  );
};

export default Employer;

/*

  const fetchClinics = async() => {
    const { data: clinics } = await supabase
      .from("clinics_doctors")
      .select("id,clinic_ids,dr_ids, doctors(*),clinics(*)");
    console.log(clinics, "data")
  }

  useEffect(() => {
    fetchClinics();
  }, []);

  const fetchDoctors = async () => { 
    const { data: doctors } = await supabase
    .from("doctors")
    .select("*, clinics(*), clinics_doctors(*), patients(*)")
    .eq("id", 1);
    console.log("========================================")
    console.log(doctors, "doctors")
    console.log("========================================")
  }

  const fetchPatients = async () => {
    const { data: patients } = await supabase
      .from("patients")
      .select("*, doctors(*), clinics(*)");
    
    console.log("========================================");
    console.log(patients, "patients");
    console.log("========================================");
  };

  useEffect(() => {
    fetchDoctors();
    fetchPatients();
  }, []);

*/
