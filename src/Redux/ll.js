


// crud data


// get data

export const fetchData = async ({
  tableName,
  selectedFields,
  eqName = "",
  eqID = "",
}) => {
  let query = supabase.from(tableName).select(selectedFields);

  // Apply condition if `eqName` and `eqID` are provided
  if (eqName && eqID) {
    query = query.eq(eqName, eqID);
  }

  const { data, error } = await query;

  if (error) {
    console.error("Error fetching data:", error);
    return null;
  }
  return data;
};

// fetchData({
//   tableName: "clinics_doctors",
//   selectedFildes: "doctors(*) ,clinic_ids",
// });
 
// add data
export const handleAdd = async ({
  parent_database,
  parent_name,
  parent_id,
  child_id,
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

//  await handleAdd({
//    parent_database: "clinics_doctors",
//    parent_name: "clinic_ids",
//    parent_id: item.clinic,
//    child_name: "dr_ids",
//    child_id: item.id,
//  });


// handle update
export const handleUpdate = async(item,id) => {
    console.log(item , "item" );
    console.log(id, "id");
    const { data: doctorData, error: doctorError } = await supabase
    .from('doctors')
    .update({   age: 55 })
    .eq('id', id);

  if (doctorError) {
    console.error("Error updating doctor:", doctorError);
  }
    
}

// handle delete
export const deleteDoctor = async (doctorId) => {
    console.log(doctorId , "hdndleDelte");
  // Delete the doctor from the doctors table
  const { data, error } = await supabase.rpc(
    "delete_doctor_and_related_records",
    { id: doctorId }
  );

  if (error) {
    console.error("Error deleting doctor:", error);
  } else {
    console.log("Doctor and related records deleted successfully.");
  }
};
//   const deleteDoctor = async (doctorId) => {
//   // Delete the doctor from the doctors table
//   const { data, error } = await supabase
//     .from('doctors')
//     .delete()
//       .eq('id', doctorId);
 

//   if (error) {
//     console.error("Error deleting doctor:", error);
//   } else {
//     console.log("Doctor deleted successfully.");
//   }
// };

