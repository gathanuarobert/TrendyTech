import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import CctvInstallation from "./components/CctvInstallation";
import ElectricFence from "./components/ElectricFence";
import Electronics from "./components/Electronics";
import Recovery from "./components/Recovery";
import ElectricFenceInstallation from "./components/ElectricFenceInstallation";
import CCTVKits from "./components/CCTVKits";
import Contacts from "./pages/Contacts";
import Products from "./pages/Products";
import Services from "./pages/Services";
import WhyUs from "./pages/WhyUs";

// This helper function resets the scroll to the top every time the URL changes
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const AppRoutes = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='/products' element={<Products />} />
        <Route path='/services' element={<Services />} />
        <Route path='/whyUs' element={<WhyUs />} />
        <Route path='/cctvInstallation' element={<CctvInstallation />} />
        <Route path='/electricFence' element={<ElectricFence />} />
        <Route path='/electronics' element={<Electronics />} />
        <Route path='/recovery' element={<Recovery />} />
        <Route path='/electricFenceInstallation' element={<ElectricFenceInstallation />} />
        <Route path='/cctvKits' element={<CCTVKits />} />
      </Routes>
    </>
  );
}

export default AppRoutes;