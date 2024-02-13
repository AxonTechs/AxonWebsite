import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../layout/Header/Navbar";
import { ROUTES } from "./routerConfig";
import Home from "../pages/Click";
import Footer from "../layout/Footer/Footer";


const AppRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path={ROUTES.Home}
          element={
            <> 
            <Home/>
            </>
          }
        />
      </Routes>
      <Footer/>
    </>
  );
};

export default AppRoutes;
