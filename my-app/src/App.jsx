import React from "react";
import { Route, Routes} from "react-router-dom";
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

const AppRoutes = () => {
  return (
    
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
    
  );
}

export default AppRoutes;