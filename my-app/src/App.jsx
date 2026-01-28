import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion"; // 1. Added Framer Motion
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

// --- LOADER COMPONENT ---
const Loader = ({ isExiting }) => (
  <div className={`fixed inset-0 z-[200] bg-black flex flex-col items-center justify-center transition-opacity duration-500 ${isExiting ? "opacity-0" : "opacity-100"}`}>
    <div className="relative flex items-center justify-center">
      <div className="w-24 h-24 border-2 border-yellow-400/20 border-t-yellow-400 rounded-full animate-spin"></div>
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

// --- NEW PAGE WRAPPER FOR SEAMLESS REVEAL ---
const PageReveal = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

const AppRoutes = () => {
  const [loading, setLoading] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const location = useLocation();

  const triggerLoader = (duration) => {
    setLoading(true);
    setIsExiting(false);
    const exitTimer = setTimeout(() => setIsExiting(true), duration - 500);
    const finishTimer = setTimeout(() => setLoading(false), duration);
    return () => {
      clearTimeout(exitTimer);
      clearTimeout(finishTimer);
    };
  };

  useEffect(() => {
    triggerLoader(2500); 
  }, []);

  useEffect(() => {
    triggerLoader(1200); 
  }, [location.pathname]);

  return (
    <>
      {loading && <Loader isExiting={isExiting} />}
      <ScrollToTop />
      
      {/* 2. Wrap Routes in AnimatePresence for transition support */}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageReveal><LandingPage /></PageReveal>} />
          <Route path='/contacts' element={<PageReveal><Contacts /></PageReveal>} />
          <Route path='/products' element={<PageReveal><Products /></PageReveal>} />
          <Route path='/services' element={<PageReveal><Services /></PageReveal>} />
          <Route path='/whyUs' element={<PageReveal><WhyUs /></PageReveal>} />
          <Route path='/cctvInstallation' element={<PageReveal><CctvInstallation /></PageReveal>} />
          <Route path='/electricFence' element={<PageReveal><ElectricFence /></PageReveal>} />
          <Route path='/electronics' element={<PageReveal><Electronics /></PageReveal>} />
          <Route path='/recovery' element={<PageReveal><Recovery /></PageReveal>} />
          <Route path='/electricFenceInstallation' element={<PageReveal><ElectricFenceInstallation /></PageReveal>} />
          <Route path='/cctvKits' element={<PageReveal><CCTVKits /></PageReveal>} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default AppRoutes;