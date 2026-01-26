import React, { useEffect, useRef, useState } from "react";

export default function LandingPage() {
  // --- NAVBAR & MOBILE MENU STATE ---
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  const navLinks = ["Home", "Products", "Services", "Contacts", "Why Us"];

  return (
    <div className={`min-h-screen bg-black text-white overflow-hidden ${isMenuOpen ? 'h-screen' : ''}`}>
      
      {/* SEAMLESS NAVBAR */}
      <nav 
        className={`fixed top-0 w-full z-[100] transition-all duration-500 px-6 md:px-16 flex items-center justify-between ${
          isScrolled && !isMenuOpen
          ? "bg-black/80 backdrop-blur-lg border-b border-white/10 py-4" 
          : "bg-transparent py-8"
        }`}
      >
        <h1 className="text-2xl font-bold text-yellow-400 z-[110]">
          Trendy<span className="text-white">Tech</span>
        </h1>
        
        <ul className="hidden md:flex space-x-10 text-base font-bold tracking-wider">
          {navLinks.map((item) => (
            <li key={item} className="group relative cursor-pointer text-white/90 hover:text-yellow-400 transition-colors uppercase font-bold">
              {item}
            </li>
          ))}
        </ul>
        
        <button 
          className="md:hidden z-[110] focus:outline-none p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <span className="text-4xl font-light text-yellow-400">✕</span>
          ) : (
            <div className="space-y-1.5">
              <span className="block w-8 h-0.5 bg-yellow-400 rounded"></span>
              <span className="block w-8 h-0.5 bg-yellow-400 rounded"></span>
              <span className="block w-8 h-0.5 bg-yellow-400 rounded"></span>
            </div>
          )}
        </button>

        <div className={`fixed inset-0 bg-black flex flex-col items-center justify-center transition-all duration-500 ease-in-out md:hidden z-[105] ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
          <div className="flex flex-col items-center space-y-10">
            {navLinks.map((item, i) => (
              <a key={item} href={`#${item.toLowerCase()}`} className={`text-3xl font-bold uppercase tracking-[0.2em] transition-all duration-700 transform ${isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`} style={{ transitionDelay: `${i * 100}ms` }} onClick={() => setIsMenuOpen(false)}>
                <span className="hover:text-yellow-400 transition-colors">{item}</span>
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center px-6 md:px-20">
        {heroImages.map((img, i) => (
          <div key={i} className={`absolute inset-0 transition-opacity duration-1500 ease-in-out ${i === bgIndex ? "opacity-100" : "opacity-0"}`} style={{ backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0.2) 100%), url(${img})`, backgroundSize: "cover", backgroundPosition: "center" }} />
        ))}
        <div className="relative z-10 max-w-3xl">
          <h2 className="text-4xl md:text-7xl font-extrabold leading-tight">
            Smart Electronics for a <span className="text-yellow-400">Smarter Life</span>
          </h2>
          <p className="mt-8 text-xl md:text-2xl text-gray-300 max-w-xl">
            Premium CCTV cameras, smartphones and TVs — security and entertainment in one place.
          </p>
        </div>
      </section>

      {/* PROFESSIONAL SERVICES SECTION */}
      <section className="bg-black py-20 px-6 md:px-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter leading-[1.1]">
              Professional CCTV <br /> 
              Installation Services <br /> 
              <span className="text-yellow-400 text-3xl md:text-5xl block mt-2 font-black">in Nairobi Kenya</span>
            </h3>
          </div>
          <div className="flex flex-col gap-6">
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
              <span className="text-white font-bold">TrendyTech Security Systems</span> is an accredited specialist CCTV installation company in Nairobi Kenya, with more than 10 years’ experience in both the domestic and commercial service sectors.
            </p>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed">
              We are also a comprehensive provider of alarm systems, access control systems, and electric fences in Nairobi Kenya. Turn to TrendyTech Security Systems for a reliable answer to your security issues.
            </p>
            <div className="mt-6 pt-6 border-t border-white/10 flex items-center gap-6">
              <div className="text-6xl md:text-8xl font-black text-white">8+</div>
              <div className="flex flex-col">
                <span className="text-yellow-400 font-bold uppercase tracking-widest text-sm">Years of</span>
                <span className="text-white font-black text-2xl uppercase tracking-tight">Experience</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPLORE PRODUCTS SECTION */}
      <section className="px-6 md:px-16 py-24 bg-black relative z-10 border-t border-white/5">
        <h3 className="text-3xl md:text-5xl font-bold text-center mb-16 tracking-widest uppercase">
          EXPLORE OUR <span className="text-yellow-400">SERVICES</span>
        </h3>

        {/* DESKTOP VIEW: Static Grid (4 columns) */}
        <div className="hidden md:grid grid-cols-4 gap-6 max-w-7xl mx-auto">
          {products.map((product, i) => (
            <div key={i} className="bg-[#0a0a0a] border border-white/5 p-8 rounded-sm flex flex-col items-center text-center transition-all duration-300 hover:bg-[#111] hover:border-yellow-400/50 group">
              <div className="h-40 flex items-center justify-center mb-8">
                <img src={product.image} alt={product.name} className="max-h-full object-contain group-hover:scale-110 transition-transform duration-500" />
              </div>
              <h4 className="text-lg font-bold uppercase tracking-widest mb-4">{product.name}</h4>
              <p className="text-gray-400 text-xs leading-relaxed mb-8">{product.desc}</p>
              <button className="mt-auto bg-yellow-400 text-black font-bold py-3 px-6 rounded-sm hover:bg-white transition-colors flex items-center gap-2 text-xs uppercase tracking-wider">
                See More <span>→</span>
              </button>
            </div>
          ))}
        </div>

        {/* MOBILE VIEW: Slider */}
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

      {/* FOOTER */}
      <footer className="border-t border-gray-800 px-6 md:px-16 py-12 text-sm text-gray-400 flex flex-col md:flex-row justify-between bg-black items-center">
        <p>© {new Date().getFullYear()} TrendyTech. All rights reserved.</p>
        <div className="flex gap-8 mt-6 md:mt-0 uppercase font-bold tracking-widest text-xs">
          <span className="hover:text-yellow-400 cursor-pointer">Privacy</span>
          <span className="hover:text-yellow-400 cursor-pointer">Terms</span>
          <span className="hover:text-yellow-400 cursor-pointer">Support</span>
        </div>
      </footer>
    </div>
  );
}