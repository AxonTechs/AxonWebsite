import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { ROUTES } from "./routerConfig";
import Particle from "../components/Particle/particle";
import ClickAway from "../pages/Click/ClickAway";

const AppRoutes = () => {
  return (
    <>
      <Routes> 
        <Route
          path={ROUTES.Home}
          element={
            <> 
              <Particle/>
              <Navbar /> 
              <ClickAway/>
            </>
           }
         />
       </Routes>
    </>
  );
};

export default AppRoutes;
