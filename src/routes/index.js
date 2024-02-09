import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../layout/Header/Navbar";
import { ROUTES } from "./routerConfig";
import Home from "../pages/Home";


const AppRoutes = () => {
  return (
    <> 
     <Navbar />
      <Routes> 
        <Route
          path={ROUTES.Home}
          element={<Home/>
           }
         />
       </Routes>
    </>
  );
};

export default AppRoutes;
