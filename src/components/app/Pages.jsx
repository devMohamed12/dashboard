import { Navigate, Route, Routes } from "react-router-dom";
import {
  Dashboard,
   Employers,
  Orders,
  Products,
  Product,
 } from "../index";


// import SignUp from "../auth/SignUp.jsx";
import SignIn from "../auth/SignIn.jsx";
const Pages = ({isAuthenticated=false }) => {
 

    const requireAuth = (element) => {
      return isAuthenticated ? element : <Navigate to="/signIn" />;
    };

  return (
    <Routes>

      <Route path="/" element={requireAuth(<Dashboard />)} />
      <Route path="/employers" element={requireAuth(<Employers />)} />
      <Route path="/products" element={requireAuth(<Products />)} />
      <Route path="/products/:id" element={requireAuth(<Product />)} />
      <Route path="/orders" element={requireAuth(<Orders />)} />
      <Route path="/signIn" element={<SignIn />} />
    
    </Routes>
  );
};

export default Pages;
 
 

