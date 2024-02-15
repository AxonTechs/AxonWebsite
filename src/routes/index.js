import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "../layout/Header/Navbar";
import { ROUTES } from "./routerConfig";
import Home from "../pages/Home";
import Footer from "../layout/Footer/Footer";
import About from "../pages/About/";
import Portfolio from "../pages/Portfolio";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import Career from "../pages/Career";

const AppRoutes = () => { 
  const location = useLocation();
  const pathsWithoutFooter = ["/career"];

  const hideFooter = pathsWithoutFooter.includes(location.pathname);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path={ROUTES.Home} element={<Home />} />
        <Route path={ROUTES.About} element={<About />} />
        <Route path={ROUTES.Portfolio} element={<Portfolio/>} />
        <Route path={ROUTES.Blog} element={<Blog/>} />
        <Route path={ROUTES.Career} element={<Career/>} />
        <Route path={ROUTES.Contact} element={<Contact/>} />
      </Routes>
      {!hideFooter && <Footer />}
    </>
  );
};

export default AppRoutes;
