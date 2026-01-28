import React, { useEffect, useState } from "react";
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

// --- LOADER COMPONENT (with Fade Transition) ---
const Loader = ({ isExiting }) => (
  <div className={`fixed inset-0 z-[200] bg-black flex flex-col items-center justify-center transition-opacity duration-500 ${isExiting ? "opacity-0" : "opacity-100"}`}>
    <div className="relative flex items-center justify-center">
      {/* Spinning Ring */}
      <div className="w-24 h-24 border-2 border-yellow-400/20 border-t-yellow-400 rounded-full animate-spin"></div>
      {/* Glowing Core */}
      <div className="absolute w-12 h-12 bg-yellow-400 rounded-full animate-pulse blur-sm opacity-50"></div>
      <div className="absolute w-8 h-8 bg-yellow-400 rounded-full shadow-[0_0_20px_rgba(250,204,21,0.8)]"></div>
    </div>
    <div className="mt-8 text-center">
      <h2 className="text-2xl font-black uppercase tracking-[0.5em] text-white animate-pulse">
        Trendy<span className="text-yellow-400">Tech</span>
      </h2>
      <p className="text-yellow-400/40 text-[10px] uppercase tracking-[0.3em] mt-4">Initializing Secure Connection...</p>
    </div>
  </div>
);

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const AppRoutes = () => {
  const [loading, setLoading] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const location = useLocation();

  const triggerLoader = (duration) => {
    setLoading(true);
    setIsExiting(false);
    
    // Start fading out slightly before the loading ends
    const exitTimer = setTimeout(() => setIsExiting(true), duration - 500);
    const finishTimer = setTimeout(() => setLoading(false), duration);
    
    return () => {
      clearTimeout(exitTimer);
      clearTimeout(finishTimer);
    };
  };

  // Run on first site entry
  useEffect(() => {
    triggerLoader(2500); // 2.5 seconds for the very first visit
  }, []);

  // Run every time the page changes
  useEffect(() => {
    triggerLoader(1200); // 1.2 seconds for page-to-page transitions
  }, [location.pathname]);

  return (
    <>
      {loading && <Loader isExiting={isExiting} />}
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