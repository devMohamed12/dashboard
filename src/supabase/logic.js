
// CRUD


// get data

const fetchData = async ({
  tableName,
  selectedFields,
  eqName = "",
  eqID = "",
}) => {
  const { data, error } = await supabase
    .from(tableName)
    .select(selectedFields)
    .eq(eq, 1);
  return data;
};

fetchData({ tableName: "clinics", selectedFields: "clinics" });
fetchData({
  tableName: "clinics_doctors",
  selectedFildes: "doctors(*) ,clinic_ids",
});

//   fetchData({ tableName: "clinics", selectedFildes: "clinics" });
//   fetchData({
//     tableName: "clinics_doctors",
//     selectedFildes: "doctors(*) ,clinic_ids",
//   });

   

  const fetchData2 = async(tableName, selectedFildes) => {

    let { data, error } = await supabase
      .from(tableName)
      .select(selectedFildes);
    return data;
  }
  fetchData("clinics" , "clinics");


// ============================================


// insert


  
  const handleAdd = async (
    partent_database,
    partent_name,
    partent_id,
    child_id,
    child_name,
    child_database
  ) => {
    e.preventDefault();
    const { data: drss2, error } = await supabase
      .from(partent_database)
      .insert([{ id: 4, partent_id: id, child_id: id }]);
  };

  handleAdd("clinics_doctors", "clinic_ids", 5, dr_ids, 5);
