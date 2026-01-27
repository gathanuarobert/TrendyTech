import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { 
      name: "Products",  
      dropdown: [
        { name: "Electronics", path: "/electronics" },
        { name: "CCTV kits", path: "/cctvKits" },
        { name: "Electric Fences", path: "/electricFence" }
      ] 
    },
    { 
      name: "Services",  
      dropdown: [
        { name: "CCTV Installation", path: "/cctvInstallation" },
        { name: "Electric Fence Installation", path: "/electricFenceInstallation" },
        { name: "CCTV Footage Recovery", path: "/recovery" }
      ] 
    },
    { name: "Contacts", href: "/contacts" },
    { name: "Why Us", href: "/whyUs" }
  ];

  // Desktop Hover Logic with Delay
  const handleMouseEnter = (name) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(name);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 400); // 400ms delay so it doesn't vanish instantly
  };

  return (
    <nav 
      className={`fixed top-0 w-full z-[100] transition-all duration-500 px-6 md:px-16 flex items-center justify-between 
      ${isScrolled && !isMenuOpen 
        ? "bg-[#050505] backdrop-blur-xl border-b border-white/10 py-4 shadow-[0_10px_30px_rgba(0,0,0,0.5)]" 
        : "bg-transparent py-8"}`}
    >
      <h1 className="text-2xl font-bold text-yellow-400 z-[110]">
        Trendy<span className="text-white">Tech</span>
      </h1>
      
      {/* Desktop Links */}
      <ul className="hidden md:flex space-x-10 text-base font-bold tracking-wider">
        {navLinks.map((item) => (
          <li 
            key={item.name} 
            className="relative group cursor-pointer"
            onMouseEnter={() => item.dropdown && handleMouseEnter(item.name)}
            onMouseLeave={handleMouseLeave}
          >
            <Link to={item.href || "#"} className="text-white/90 hover:text-yellow-400 transition-colors uppercase font-bold flex items-center gap-1">
              {item.name}
              {item.dropdown && (
                <span className={`text-[10px] transition-transform duration-300 ${activeDropdown === item.name ? "rotate-180" : ""}`}>▼</span>
              )}
            </Link>

            {item.dropdown && activeDropdown === item.name && (
              <div 
                className="absolute top-full left-0 mt-2 w-64 bg-[#0a0a0a] border border-white/10 py-4 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200"
                onMouseEnter={() => handleMouseEnter(item.name)}
              >
                {item.dropdown.map((sub) => (
                  <Link key={sub.name} to={sub.path} className="block px-6 py-2 text-sm text-gray-400 hover:text-yellow-400 hover:bg-white/5 transition-all">
                    {sub.name}
                  </Link>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>

      {/* Hamburger Toggle */}
      <button className="md:hidden z-[110] focus:outline-none p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
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

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-black flex flex-col items-center justify-center transition-all duration-500 ease-in-out md:hidden z-[105] ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        <div className="flex flex-col items-center space-y-6 w-full px-10">
          {navLinks.map((item, i) => (
            <div key={item.name} className="flex flex-col items-center w-full">
              <div className="flex items-center gap-2">
                <Link 
                  to={item.href || "#"} 
                  className={`text-2xl font-bold uppercase tracking-[0.2em] transition-all duration-700 transform ${isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`} 
                  style={{ transitionDelay: `${i * 100}ms` }} 
                  onClick={() => !item.dropdown && setIsMenuOpen(false)}
                >
                  <span className="hover:text-yellow-400 transition-colors">{item.name}</span>
                </Link>
                {item.dropdown && (
                  <button 
                    onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                    className="text-yellow-400 text-xl transition-transform duration-300"
                    style={{ transform: activeDropdown === item.name ? 'rotate(180deg)' : 'rotate(0deg)' }}
                  >
                    ▼
                  </button>
                )}
              </div>
              
              {/* Mobile Dropdown with Seamless Transition */}
              {item.dropdown && (
                <div className={`grid transition-all duration-500 ease-in-out w-full ${activeDropdown === item.name ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0 mt-0"}`}>
                  <div className="overflow-hidden flex flex-col items-center space-y-3 bg-white/5 w-full py-2 rounded">
                    {item.dropdown.map((sub) => (
                      <Link 
                        key={sub.name} 
                        to={sub.path} 
                        onClick={() => {
                          setIsMenuOpen(false);
                          setActiveDropdown(null);
                        }} 
                        className="text-gray-400 uppercase text-sm hover:text-yellow-400 py-2 w-full text-center transition-colors"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;