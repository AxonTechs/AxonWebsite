import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "../layout/Header/Navbar";
import { ROUTES } from "./routerConfig";
import Home from "../pages/Home";
import Footer from "../layout/Footer/Footer";
import About from "../pages/About/";

const AppRoutes = () => { 
  const location = useLocation();
  const pathsWithoutFooter = ["/about"];

  const hideFooter = pathsWithoutFooter.includes(location.pathname);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path={ROUTES.Home} element={<Home />} />
        <Route path={ROUTES.About} element={<About />} />
      </Routes>
      {!hideFooter && <Footer />}
    </>
  );
};

export default AppRoutes;
