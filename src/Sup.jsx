import React, { useEffect, useState } from "react";
import { supabase } from "./supabase";

const Sup = () => {
  const [clinics, setClinics] = useState([]);
  const [Drs, setDrs] = useState([]);

  useEffect(() => {
    const fetchClinics = async () => {
      let { data: clinics, error } = await supabase.from("clinics").select("*");

      console.log(clinics, "clinics");
      if (error) {
        console.error("Error fetching clinics:", error);
      } else {
        setClinics(clinics);
      }
    };

    fetchClinics();
    getDocinClinic();
    
  }, []);

   

  const getDocinClinic = async () => {
    // let { data: drs, error } = await supabase
    //   .from("doctors") // Main table
    //   .select("doctors.id, doctors.dr_name") // Select only relevant columns from doctors
    //   .join("clinics_doctors", "doctors.id", "clinics_doctors.dr_ids") // Join using dr_ids from clinics_doctors
    //   .eq("clinics_doctors.clinic_ids", 1); // Filter by specific clinic_id (in this case, 1)
    let { data: drs, error } = await supabase
    
      .from("clinics_doctors")
      .select("doctors(*) ,clinic_ids ")
      .eq("clinic_ids", 2);  
    setDrs(drs);
    console.log(drs, "drs");
    console.log("Doctors in Clinic:", drs);

    if (error) {
      console.error("Error fetching doctors:", error);
    } else {
      console.log("Doctors in clinic:", drs);
    }
  };

  //  const fetchData = async({tableName, selectedFildes, eqName = "" , eqID=""}) => {

  //   let { data, error } = await supabase
  //     .from(tableName)
  //      .select(selectedFildes)
  //    .eq(eq, 1);
  //   return data;
  // }

  // fetchData({tableName: "clinics" ,  selectedFildes: "clinics"});
  // fetchData({ tableName: "clinics_doctors",selectedFildes: "doctors(*) ,clinic_ids"} );
 


 const addDoc = async () => {
   try {
     // Insert a new doctor
     const { data: doctorData, error: doctorError } = await supabase
       .from("doctors")
       .insert([{ id: 5, dr_name: "dr5" }]);

     if (doctorError) throw doctorError; // Throw an error if the doctor insertion fails
     console.log("Doctor Data inserted:", doctorData);

     // Insert a new entry in the clinics_doctors table
     const { data: clinicDoctorData, error: clinicDoctorError } = await supabase
       .from("clinics_doctors")
       .insert([{ id: 4, clinic_ids: 1, dr_ids: 5 }]);

     if (clinicDoctorError) throw clinicDoctorError; // Throw an error if the clinic-doctor insertion fails
     console.log("Clinic-Doctor Data inserted:", clinicDoctorData);
   } catch (error) {
     console.error("Error inserting data:", error);
   }
 };

  
 
  return (
    <div>
      <h1>Clinics</h1>
      <button onClick={()=>addDoc()}>add doctor</button>
      {clinics.map((clinic) => (
        <div key={clinic.id}>
          Clinic ID: {clinic.id }
          <span>{ clinic.name}</span>
        </div>
      ))}
      <FormModal/>
    </div>
  );
};

export default Sup;


import { Modal, Box, Button, Typography, TextField } from "@mui/material";

// Custom styling for the modal
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
  
const FormModal = () => {
  const [item, setItem] = useState({}); // State to manage form data
  const [open, setOpen] = useState(false); // State to manage modal open/close

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItem({
      ...item,
      [name]: value,
    });
  };

  const addItem = async (item) => {
    try {
      const { data, error } = await supabase.from("clinics").insert([item]);
      if (error) throw error;
      console.log("Data inserted:", data);
    } catch (error) {
      console.error("Error inserting data:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form data:", item); // Log form data
    await addItem(item); // Wait for the addItem function to complete
    handleClose(); // Close the modal after submitting
  };

  // Define a basic style for the modal content
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>
        Open Form Modal
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Fill the Form
          </Typography>
          <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            <TextField
              fullWidth
              margin="normal"
              id="id"
              name="id"
              label="ID"
              variant="outlined"
              value={item.id || ""} // Corrected key
              onChange={handleChange}
            />
            <TextField
              fullWidth
              margin="normal"
              id="name"
              name="name"
              label="Name"
              variant="outlined"
              value={item.name || ""} // Corrected key
              onChange={handleChange}
            />
            <Button
              variant="contained"
              color="primary"
              type="submit"
              sx={{ mt: 2 }}
            >
              Submit
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

 