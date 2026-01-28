import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // 1. Added Framer Motion
import Navbar from "../components/Navbar"; 
import Footer from "../components/Footer"; 

export default function LandingPage() {
  // --- ANIMATION VARIANTS ---
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  // --- BACKGROUND SLIDER LOGIC ---
  const [bgIndex, setBgIndex] = useState(0);
  const heroImages = [
    "https://images.unsplash.com/photo-1589935447067-5531094415d1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2VjdXJpdHklMjBjYW1lcmF8ZW58MHx8MHx8fDA%3D", 
    "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?q=80&w=2000", 
    "https://www.alltechkenya.co.ke/wp-content/uploads/2022/08/Alltech-Electric-Fence-Installation-Services-In-Kenya.jpg", 
  ];

  useEffect(() => {
    const bgInterval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000); 
    return () => clearInterval(bgInterval);
  }, [heroImages.length]);

  // --- PRODUCTS DATA ---
  const products = [
    { 
      name: "Smart CCTV Camera", 
      image: "https://images.unsplash.com/photo-1590613607026-15c463e30ca5?q=80&w=387", 
      desc: "High-definition surveillance with night vision and remote mobile viewing. We provide and install complete sets for 24/7 protection.",
      path: "/cctvKits"
    },
    // { 
    //   name: "Monitors", 
    //   image: "https://images.unsplash.com/photo-1590212151175-e58edd96185b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1vbml0b3J8ZW58MHx8MHx8fDA%3D", 
    //   desc: "Immersive 4K displays featuring the latest smart apps and seamless connectivity. Upgrade your home entertainment with our premium range.",
    //   path: "/electronics"
    // },
    { 
      name: "Smartphones & Displays", 
      image: "https://images.unsplash.com/photo-1606735608655-5f784a76416e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGlwaG9uZSUyMDE0JTIwcHJvJTIwZGFya3xlbnwwfHwwfHx8MA%3D%3D", 
      desc: "Stay connected with the latest high-performance smartphones and displays. We offer top-tier brands with official warranties and technical support.",
      path: "/electronics"
    },
    { 
      name: "Electric Fence", 
      image: "https://media.istockphoto.com/id/1155284279/photo/wall-with-electrified-fence.webp?a=1&b=1&s=612x612&w=0&k=20&c=f0YE9m7Bt7EuqN3fMbHTzNs5It_zbsLVyLLl9uIRLfQ=", 
      desc: "Advanced perimeter protection featuring high-tension wires and instant alarm triggers. Secure your property with our professional fencing.",
      path: "/electricFence"
    },
    { 
      name: "Smart Home System", 
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=387", 
      desc: "Integrated smart home solutions for lighting, climate, and security control. Experience convenience and efficiency at your fingertips.",
      path: "/smartHome"
    },
  ];

  // --- MOBILE SLIDER LOGIC ---
  const slides = [products[products.length - 1], ...products, products[0]];
  const [index, setIndex] = useState(1);
  const [animate, setAnimate] = useState(true);
  const startX = useRef(0);
  const isDragging = useRef(false);

  useEffect(() => {
    const interval = setInterval(() => { setIndex((prev) => prev + 1); }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (index === slides.length - 1) {
      setTimeout(() => { setAnimate(false); setIndex(1); }, 700);
    }
    if (index === 0) {
      setTimeout(() => { setAnimate(false); setIndex(slides.length - 2); }, 700);
    }
  }, [index, slides.length]);

  useEffect(() => { if (!animate) { requestAnimationFrame(() => setAnimate(true)); } }, [animate]);

  const nextSlide = () => setIndex((prev) => prev + 1);
  const prevSlide = () => setIndex((prev) => prev - 1);

  const handleTouchStart = (e) => { startX.current = e.touches[0].clientX; isDragging.current = true; };
  const handleTouchEnd = (e) => {
    if (!isDragging.current) return;
    const diff = startX.current - e.changedTouches[0].clientX;
    if (diff > 50) nextSlide();
    if (diff < -50) prevSlide();
    isDragging.current = false;
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center px-6 md:px-20">
        {heroImages.map((img, i) => (
          <div key={i} className={`absolute inset-0 transition-opacity duration-1500 ease-in-out ${i === bgIndex ? "opacity-100" : "opacity-0"}`} style={{ backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0.2) 100%), url(${img})`, backgroundSize: "cover", backgroundPosition: "center" }} />
        ))}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="relative z-10 max-w-3xl"
        >
          <h2 className="text-4xl md:text-7xl font-extrabold leading-tight">Smart Electronics for a <span className="text-yellow-400">Smarter Life</span></h2>
          <p className="mt-8 text-xl md:text-2xl text-gray-300 max-w-xl">Premium CCTV cameras, smartphones and TVs — security and entertainment in one place.</p>
        </motion.div>
      </section>

      {/* ABOUT SECTION */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="bg-black py-24 px-6 md:px-16 border-b border-white/5"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div className="relative">
            <h3 className="text-4xl md:text-6xl font-bold leading-[1.1] tracking-tighter">
              Professional CCTV <br /> 
              Installation Services <br /> 
              <span className="text-yellow-400">in Nairobi Kenya</span>
            </h3>
          </div>
          <div className="space-y-8">
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-light">
              <span className="text-white font-semibold">TrendyTech Security Systems</span> is an accredited specialist CCTV installation company in Nairobi Kenya, with more than 10 years’ experience.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              We are also a comprehensive provider of alarm systems, access control systems, and electric fences. For a cost effective, professional and reliable answer to your security issues, turn to TrendyTech.
            </p>
            <div className="pt-8">
              <div className="flex items-baseline gap-4">
                <span className="text-7xl md:text-8xl font-black text-white">10+</span>
                <div className="flex flex-col">
                  <span className="text-yellow-400 font-bold uppercase tracking-widest text-sm">Years of</span>
                  <span className="text-white font-black text-2xl uppercase tracking-tighter">Experience</span>
                </div>
              </div>
              <div className="mt-4 w-20 h-1 bg-yellow-400"></div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* SERVICES SECTION */}
      <section className="px-6 md:px-16 py-24 bg-black relative z-10 border-t border-white/5">
        <motion.h3 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-3xl md:text-5xl font-bold text-center mb-16 tracking-widest uppercase"
        >
          EXPLORE OUR <span className="text-yellow-400">PRODUCTS</span>
        </motion.h3>
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="hidden md:grid grid-cols-4 gap-6 max-w-7xl mx-auto"
        >
          {products.map((product, i) => (
            <motion.div 
              key={i} 
              variants={fadeInUp}
              className="bg-[#0a0a0a] border border-white/5 p-8 rounded-sm flex flex-col items-center text-center transition-all duration-300 hover:bg-[#111] hover:border-yellow-400/50 group"
            >
              <div className="h-40 flex items-center justify-center mb-8"><img src={product.image} alt={product.name} className="max-h-full object-contain group-hover:scale-110 transition-transform duration-500" /></div>
              <h4 className="text-lg font-bold uppercase tracking-widest mb-4">{product.name}</h4>
              <p className="text-gray-400 text-xs leading-relaxed mb-8">{product.desc}</p>
              <Link to={product.path} className="mt-auto bg-yellow-400 text-black font-bold py-3 px-6 rounded-sm hover:bg-white transition-colors flex items-center gap-2 text-xs uppercase tracking-wider">
                See More <span>→</span>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* MOBILE SLIDER */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="md:hidden relative overflow-hidden" 
          onTouchStart={handleTouchStart} 
          onTouchEnd={handleTouchEnd}
        >
          <div className={`flex ${animate ? "transition-transform duration-700 ease-in-out" : ""}`} style={{ transform: `translateX(-${index * 100}%)` }}>
            {slides.map((product, i) => (
              <div key={i} className="min-w-full px-4">
                <div className="bg-[#0a0a0a] border border-white/5 p-10 rounded-sm flex flex-col items-center text-center">
                  <div className="h-48 flex items-center justify-center mb-8">
                    <img src={product.image} alt={product.name} className="max-h-full object-contain" />
                  </div>
                  <h4 className="text-xl font-bold uppercase tracking-widest mb-4">{product.name}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed mb-8">{product.desc}</p>
                  <Link to={product.path} className="bg-yellow-400 text-black font-bold py-3 px-8 rounded-sm text-sm uppercase tracking-wider inline-block">
                    See More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-6 mt-10">
            <button onClick={prevSlide} className="w-12 h-12 flex items-center justify-center border border-yellow-400/30 text-yellow-400 rounded-full font-bold">←</button>
            <button onClick={nextSlide} className="w-12 h-12 flex items-center justify-center border border-yellow-400/30 text-yellow-400 rounded-full font-bold">→</button>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}