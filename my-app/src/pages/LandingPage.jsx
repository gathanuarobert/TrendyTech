import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar"; // Make sure the path to your Navbar file is correct

export default function LandingPage() {
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
    { name: "Smart CCTV Camera", image: "https://images.unsplash.com/photo-1590613607026-15c463e30ca5?q=80&w=387", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore." },
    { name: "Smart TV", image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?q=80&w=400", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore." },
    { name: "Smartphone", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=400", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore." },
    { name: "Security System", image: "https://images.unsplash.com/photo-1589935447067-5531094415d1?q=80&w=400", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore." },
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
      
      {/* INJECTED NAVBAR COMPONENT */}
      <Navbar />

      {/* SECTIONS */}
      <section className="relative h-screen flex items-center px-6 md:px-20">
        {heroImages.map((img, i) => (
          <div key={i} className={`absolute inset-0 transition-opacity duration-1500 ease-in-out ${i === bgIndex ? "opacity-100" : "opacity-0"}`} style={{ backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0.2) 100%), url(${img})`, backgroundSize: "cover", backgroundPosition: "center" }} />
        ))}
        <div className="relative z-10 max-w-3xl">
          <h2 className="text-4xl md:text-7xl font-extrabold leading-tight">Smart Electronics for a <span className="text-yellow-400">Smarter Life</span></h2>
          <p className="mt-8 text-xl md:text-2xl text-gray-300 max-w-xl">Premium CCTV cameras, smartphones and TVs — security and entertainment in one place.</p>
        </div>
      </section>

      <section className="bg-black py-24 px-6 md:px-16 border-b border-white/5">
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
                <span className="text-7xl md:text-8xl font-black text-white">8+</span>
                <div className="flex flex-col">
                  <span className="text-yellow-400 font-bold uppercase tracking-widest text-sm">Years of</span>
                  <span className="text-white font-black text-2xl uppercase tracking-tighter">Experience</span>
                </div>
              </div>
              <div className="mt-4 w-20 h-1 bg-yellow-400"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-16 py-24 bg-black relative z-10 border-t border-white/5">
        <h3 className="text-3xl md:text-5xl font-bold text-center mb-16 tracking-widest uppercase">EXPLORE OUR <span className="text-yellow-400">SERVICES</span></h3>
        <div className="hidden md:grid grid-cols-4 gap-6 max-w-7xl mx-auto">
          {products.map((product, i) => (
            <div key={i} className="bg-[#0a0a0a] border border-white/5 p-8 rounded-sm flex flex-col items-center text-center transition-all duration-300 hover:bg-[#111] hover:border-yellow-400/50 group">
              <div className="h-40 flex items-center justify-center mb-8"><img src={product.image} alt={product.name} className="max-h-full object-contain group-hover:scale-110 transition-transform duration-500" /></div>
              <h4 className="text-lg font-bold uppercase tracking-widest mb-4">{product.name}</h4>
              <p className="text-gray-400 text-xs leading-relaxed mb-8">{product.desc}</p>
              <button className="mt-auto bg-yellow-400 text-black font-bold py-3 px-6 rounded-sm hover:bg-white transition-colors flex items-center gap-2 text-xs uppercase tracking-wider">See More <span>→</span></button>
            </div>
          ))}
        </div>

        <div className="md:hidden relative overflow-hidden" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
          <div className={`flex ${animate ? "transition-transform duration-700 ease-in-out" : ""}`} style={{ transform: `translateX(-${index * 100}%)` }}>
            {slides.map((product, i) => (
              <div key={i} className="min-w-full px-4">
                <div className="bg-[#0a0a0a] border border-white/5 p-10 rounded-sm flex flex-col items-center text-center">
                  <div className="h-48 flex items-center justify-center mb-8">
                    <img src={product.image} alt={product.name} className="max-h-full object-contain" />
                  </div>
                  <h4 className="text-xl font-bold uppercase tracking-widest mb-4">{product.name}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed mb-8">{product.desc}</p>
                  <button className="bg-yellow-400 text-black font-bold py-3 px-8 rounded-sm text-sm uppercase tracking-wider">
                    See More →
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-6 mt-10">
            <button onClick={prevSlide} className="w-12 h-12 flex items-center justify-center border border-yellow-400/30 text-yellow-400 rounded-full font-bold">←</button>
            <button onClick={nextSlide} className="w-12 h-12 flex items-center justify-center border border-yellow-400/30 text-yellow-400 rounded-full font-bold">→</button>
          </div>
        </div>
      </section>

      <footer className="bg-[#0a0a0a] pt-24 pb-12 px-6 md:px-16 relative overflow-hidden border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h3 className="text-xl md:text-2xl font-bold uppercase tracking-widest text-white mb-4">Let's talk about your needs.</h3>
            <h2 className="text-4xl md:text-7xl font-light text-gray-400 tracking-tight">Get in touch with us.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
            <div className="space-y-6 text-gray-400 text-lg md:text-xl">
              <div className="flex items-start gap-4">
                <span className="text-yellow-400 mt-1">📍</span>
                <p>Jasmine Centre – Suite C5, Block C, Westlands, Nairobi Kenya</p>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-yellow-400 mt-1">📞</span>
                <p>(+254) 0792735124</p>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-yellow-400 mt-1">✉️</span>
                <p className="hover:text-yellow-400 transition-colors">info@trendytech.co.ke</p>
              </div>
            </div>
            <div className="flex flex-col gap-6 items-start md:items-end">
              <button className="text-xl font-bold border-b-2 border-white/20 hover:border-yellow-400 pb-1 uppercase tracking-widest">Company Profile</button>
              <button className="text-xl font-bold border-b-2 border-white/20 hover:border-yellow-400 pb-1 uppercase tracking-widest">Leave a message</button>
            </div>
          </div>
          <div className="mt-32 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 uppercase tracking-widest gap-4">
            <p>© {new Date().getFullYear()} TrendyTech | All Rights Reserved</p>
            <p>Developed by <span className="text-white font-bold transition-colors underline underline-offset-4">Apex Software Solutions</span></p>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 left-0 h-40 opacity-10 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 1000 100" preserveAspectRatio="none">
             <path d="M0 100 V80 H50 V60 H100 V90 H150 V50 H200 V85 H250 V30 H300 V90 H350 V70 H400 V95 H450 V40 H500 V80 H550 V20 H600 V90 H650 V60 H700 V85 H750 V45 H800 V90 H850 V75 H900 V95 H950 V35 H1000 V100 Z" fill="none" stroke="white" strokeWidth="1" />
          </svg>
        </div>
      </footer>
    </div>
  );
}