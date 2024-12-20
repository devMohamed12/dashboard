import { createApi } from "@reduxjs/toolkit/query/react";
import { supabase } from "../../supabase";

const baseQueryWithSupabase = async ({
  tableName,
  method,
  body,
  eqName,
  eqID,
}) => {
  let query = supabase.from(tableName);

  if (method === "GET") {
    query = query.select(body);

    if (eqName && eqID) {
      query = query.eq(eqName, eqID);
    }

    const { data, error } = await query;
    if (error) {
      return { error: error.message };
    }
    return { data };
  }

  if (method === "POST") {
    const { data, error } = await query.insert(body);
    if (error) {
      return { error: error.message };
    }
    return { data };
  }

  if (method === "PUT") {
    const { data, error } = await query.update(body).eq(eqName, eqID);
    if (error) {
      return { error: error.message };
    }
    return { data };
  }

  if (method === "DELETE") {
    const { data, error } = await query.delete().eq(eqName, eqID);
    if (error) {
      return { error: error.message };
    }
    return { data };
  }

  return { error: "Unsupported method" };
};

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithSupabase,
  endpoints: (builder) => ({
    fetchData: builder.query({
      query: ({ tableName, selectedFields, eqName = "", eqID = "" }) => ({
        tableName,
        method: "GET",
        body: selectedFields,
        eqName,
        eqID,
      }),
    }),
    addData: builder.mutation({
      query: ({ tableName, addedData, eqName, eqID }) => ({
        tableName,
        method: "POST",
        body: addedData,
      }),
    }),
    updateData: builder.mutation({
      query: ({ tableName, updateData, eqName, eqID }) => ({
        tableName,
        method: "PUT",
        body: updateData,
        eqName,
        eqID,
      }),
    }),
    deleteData: builder.mutation({
      query: ({ tableName, eqName, eqID }) => ({
        tableName,
        method: "DELETE",
        eqName,
        eqID,
      }),
    }),
  }),
});

export const { 
  useFetchDataQuery, 
  useAddDataMutation, 
  useUpdateDataMutation,
  useDeleteDataMutation 
} = apiSlice;
