import React, { useState, useEffect } from "react";
import { supabase } from "../../supabase";
 
const Test2 = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCategories = async () => {
    try {

      setLoading(true);
      const { data, error } = await supabase.rpc('get_categories_with_subcategories');
      if (error) throw error;
       setCategories(data);
      console.log(data);
    } catch (error) {
      console.error('Error fetching aggregated data:', error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  



  useEffect(() => {

    fetchCategories();
  }, []); // Empty dependency array means this effect runs only once after the initial render

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;


  return (
    <div>
       
    </div>
  );
};

export default Test2;
