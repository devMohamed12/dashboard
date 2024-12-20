
const FormModal = () => {
  const [item, setItem] = useState({}); // State to manage form data
  const [open, setOpen] = useState(false); // State to manage modal open/close
  const [clinics, setClinics] = useState([]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //2 req
  // 1 names of clinics to make it in multi select
  // 2 post request

  const fetchClinics = async () => {
    const { data: clinics, error } = await supabase
      .from("clinics")
      .select("id,name");

    setClinics(clinics);
    console.log(clinics, "clinicsssssssssss");
  };

  const addDRtoClinic = async () => {
    const { data: drss, error: e1 } = await supabase
      .from("doctors")
      .insert([{ id: item.id, dr_name: item.name }]);
    console.log(drss, "drs");
    console.log(e1, "e1");
    console.log(item, "dr");
    // const { data: drss2, error: e2 } = await supabase
    // .from("clinics_doctors")
    // .insert([{ id: item.id, clinic_ids: item.clinic, dr_ids: item.id }]);
    // console.log(drss2, "drs2222");
    // console.log(e2 , "e22222");
  };

 const handleAdd = async ({
   parent_database,
   parent_name,
   parent_id  ,
   child_id  ,
   child_name,
 }) => {
   const { data, error } = await supabase
     .from(parent_database)
     .insert([{ [parent_name]: parent_id, [child_name]: child_id }]);

   if (error) {
     console.log("Error inserting data:", error);
   } else {
     console.log("Data inserted successfully:", data);
   }
 };


  


  const handleChange = (e) => {
    const { name, value } = e.target;
    setItem({
      ...item,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await addDRtoClinic();
    await  handleAdd({
       parent_database: "clinics_doctors",
       parent_name: "clinic_ids",
       parent_id: item.clinic,
       child_name: "dr_ids",
       child_id: item.id,
     });
     console.log("Form data:", item); // Log form data
    // await addItem(item); // Wait for the addItem function to complete
    // handleClose(); // Close the modal after submitting
  };

  useEffect(() => {
    fetchClinics();
  }, []);

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
            <FormControl margin="normal" fullWidth>
              <InputLabel id="demo-simple-select-label">clinic</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={item.clinic}
                name="clinic"
                label="clinic"
                onChange={handleChange}
              >
                {clinics.map(({ id, name }) => (
                  <MenuItem key={id} value={id}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
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
