import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // Added for the seamless reveal
import Navbar from './Navbar';
import Footer from './Footer';
// Importing smartHomeData from your productData file
import { smartHomeData } from '../data/productData';

const SmartHome = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeCard, setActiveCard] = useState(null); 
  const [searchQuery, setSearchQuery] = useState(""); 
  const itemsPerPage = 10;
  const phoneNumber = "254792735124";

  const allSmartHome = smartHomeData;

  // --- ANIMATION VARIANTS ---
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  // --- SEARCH LOGIC ---
  const filteredProducts = useMemo(() => {
    return allSmartHome.filter(item => 
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, allSmartHome]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  // --- PAGINATION LOGIC ---
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const handleWhatsApp = (productName) => {
    const message = encodeURIComponent(`Hello TrendyTech, I am interested in the ${productName} from your Smart Home collection.`);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-black text-white relative">
      <Navbar />

      {/* Content Wrapper */}
      <div className={`transition-all duration-500 ${activeCard ? "opacity-0 pointer-events-none scale-95" : "opacity-100"}`}>
        <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-yellow-400/10 to-transparent pointer-events-none" />

        <div className="pt-44 pb-20 px-6 md:px-16 relative z-10">
          
          {/* HEADER SECTION */}
          <motion.header 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="flex flex-col items-center text-center max-w-5xl mx-auto mb-16"
          >
            <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-6 leading-none">
              Smart Home <span className="text-yellow-400">Automation</span>
            </h1>
            <p className="text-gray-400 text-base md:text-lg max-w-2xl leading-relaxed border-t border-yellow-400/30 pt-6">
              Step into the future with our range of {allSmartHome.length} intelligent home solutions. Control your environment, enhance your comfort, and secure your sanctuary with the touch of a button.
            </p>

            <div className="mt-10 w-full max-w-md relative group">
              <input 
                type="text" 
                placeholder="Search smart products..." 
                value={searchQuery}
                onChange={handleSearchChange}
                className="w-full bg-zinc-900/50 border border-white/10 px-6 py-4 rounded-full text-sm focus:outline-none focus:border-yellow-400/50 transition-all placeholder:text-zinc-600 font-bold tracking-wider"
              />
              <span className="absolute right-6 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-yellow-400 transition-colors">🔍</span>
            </div>
          </motion.header>

          {/* PRODUCT GRID */}
          {currentProducts.length > 0 ? (
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8"
            >
              {currentProducts.map((item) => (
                <motion.div 
                  key={item.id}
                  variants={fadeInUp}
                  onClick={() => setActiveCard(item)}
                  className="group cursor-pointer bg-zinc-900/30 border border-white/5 p-4 transition-all duration-300 hover:border-yellow-400/50 hover:bg-zinc-900/50"
                >
                  <div className="relative aspect-square overflow-hidden mb-6 bg-zinc-800">
                    <img 
                      src={item.image || "https://images.unsplash.com/photo-1558002038-103792e07a70?q=80&w=500"} 
                      alt={item.name} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="text-xs uppercase font-bold tracking-tighter bg-yellow-400 text-black px-4 py-2">Quick View</span>
                    </div>
                  </div>
                  <h3 className="text-sm font-bold uppercase tracking-widest mb-2 line-clamp-1">{item.name}</h3>
                  <p className="text-yellow-400 font-black text-lg">{item.price}</p>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-20 italic text-zinc-600 tracking-widest">
              No smart home devices found matching your search.
            </div>
          )}

          {/* PAGINATION */}
          {filteredProducts.length > itemsPerPage && (
            <div className="mt-20 flex justify-center items-center gap-6">
              <button 
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(prev => prev - 1)}
                className={`px-6 py-2 border rounded-full text-xs font-bold uppercase tracking-widest transition-all ${currentPage === 1 ? 'border-zinc-800 text-zinc-800' : 'border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black'}`}
              >Prev</button>
              
              <span className="text-xs font-bold tracking-[0.5em] text-zinc-500 uppercase">
                  Page <span className="text-white">{currentPage}</span> of {totalPages}
              </span>

              <button 
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(prev => prev + 1)}
                className={`px-6 py-2 border rounded-full text-xs font-bold uppercase tracking-widest transition-all ${currentPage === totalPages ? 'border-zinc-800 text-zinc-800' : 'border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black'}`}
              >Next</button>
            </div>
          )}
        </div>
        
        <Footer />
      </div>

      {/* MODAL POPUP */}
      <AnimatePresence>
        {activeCard && (
          <div className="fixed inset-0 z-[1000] flex items-center justify-center p-2 md:p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/95 backdrop-blur-sm" 
              onClick={() => setActiveCard(null)}
            ></motion.div>
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative bg-[#0d0d0d] border border-white/10 w-full max-w-md md:max-w-4xl max-h-[90vh] overflow-hidden flex flex-col md:flex-row shadow-2xl"
            >
              <button onClick={() => setActiveCard(null)} className="absolute top-3 right-4 z-[1010] text-white/70 hover:text-yellow-400 text-2xl p-2 transition-colors md:top-4 md:right-4">✕</button>
              <div className="w-full md:w-1/2 h-48 sm:h-64 md:h-auto overflow-hidden bg-zinc-800">
                <img src={activeCard.image} alt={activeCard.name} className="w-full h-full object-cover" />
              </div>
              <div className="w-full md:w-1/2 p-6 md:p-12 overflow-y-auto">
                <div className="flex flex-col h-full text-left">
                  <span className="text-yellow-400 text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] mb-2 block">Innovation & Lifestyle</span>
                  <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter leading-tight mb-3 md:mb-4">{activeCard.name}</h2>
                  <div className="flex gap-1 text-yellow-400 mb-4 text-xs md:text-sm">
                    {[...Array(5)].map((_, i) => <span key={i}>★</span>)}
                  </div>
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6">{activeCard.desc}</p>
                  <div className="mt-auto">
                    <p className="text-xl md:text-3xl font-black text-white mb-6">{activeCard.price}</p>
                    <button onClick={() => handleWhatsApp(activeCard.name)} className="w-full bg-[#25D366] text-white py-3 md:py-4 font-bold uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-[#1fb355] transition-all active:scale-95">
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.319 1.592 5.448 0 9.886-4.438 9.889-9.886.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.735-.981z"/></svg>
                      Buy Via WhatsApp
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SmartHome;