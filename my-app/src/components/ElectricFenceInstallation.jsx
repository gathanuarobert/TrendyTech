import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const ElectricFenceInstallation = () => {
  const features = [
    { 
      title: "High-Tension Deterrence", 
      desc: "We use marine-grade stainless steel wire capable of delivering a powerful, non-lethal shock that stops intruders instantly." 
    },
    { 
      title: "Smart Monitoring", 
      desc: "Our systems integrate with your smartphone, sending instant alerts if the fence is cut, tampered with, or grounded." 
    },
    { 
      title: "Backup Power", 
      desc: "Standard inclusion of heavy-duty battery backups ensuring your perimeter remains active even during power outages." 
    },
    { 
      title: "Legal Compliance", 
      desc: "Full certification and installation according to Kenya's energy regulatory standards, including proper warning signage." 
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white relative font-sans">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=1200" 
            alt="High Tension Electric Fence" 
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl mt-20">
          <span className="text-yellow-400 font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Perimeter Defense</span>
          <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-6 leading-tight">
            Advanced <span className="text-yellow-400">Electric Fencing</span> Solutions in Nairobi
          </h1>
          <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
        </div>
      </section>

      {/* --- CORE CONTENT --- */}
      <section className="py-24 px-6 md:px-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
             <div className="grid grid-cols-2 gap-4">
                <div className="bg-zinc-900 p-1 rounded-lg">
                    <img src="https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=400" alt="Security Detail" className="rounded grayscale hover:grayscale-0 transition-all duration-500" />
                </div>
                <div className="bg-zinc-900 p-1 rounded-lg mt-8">
                    <img src="https://images.unsplash.com/photo-1549109926-9620d1b9bfa2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWxlY3RyaWMlMjBwZXJpbWV0ZXIlMjBmZW5jZXxlbnwwfHwwfHx8MA%3D%3D" alt="Technical Setup" className="rounded grayscale hover:grayscale-0 transition-all duration-500" />
                </div>
             </div>
          </div>

          <div className="space-y-6 order-1 lg:order-2">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">
              The Ultimate <span className="text-yellow-400">First Line</span> of Defense
            </h2>
            <div className="w-16 h-1 bg-yellow-400"></div>
            <div className="text-gray-400 text-lg leading-relaxed space-y-4">
              <p>
                <span className="text-white font-bold">TrendyTech Security</span> is a premier, accredited specialist in high-tension electric fence installations across Nairobi and the greater Kenya region. With over a decade of technical mastery, we secure both luxury residential estates and high-stakes commercial zones.
              </p>
              <p>
                Our perimeters do more than just mark a boundary; they provide a cost-effective, professional, and reliable deterrent. From high-voltage energizers to stainless steel wiring, our engineers excel in delivering systems that trigger immediate alarms upon any attempt at breach or tampering.
              </p>
              <p className="bg-zinc-900 border-l-4 border-yellow-400 p-6 italic text-gray-300">
                "We don't just install fences; we engineer peace of mind through a relentless commitment to perimeter excellence and maintenance support."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- TECHNICAL SPECS (The Magic) --- */}
      <section className="py-20 bg-zinc-950 border-y border-white/5 px-6 md:px-16 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-yellow-400/5 blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black uppercase tracking-widest mb-2">System <span className="text-yellow-400">Features</span></h2>
            <p className="text-zinc-500 text-xs uppercase tracking-[0.5em]">Engineered to Protect</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="flex gap-6 p-8 bg-black/50 border border-white/5 hover:border-yellow-400/30 transition-all group">
                <div className="text-yellow-400 text-2xl font-black italic opacity-20 group-hover:opacity-100 transition-opacity">
                  {idx + 1}.
                </div>
                <div>
                  <h4 className="text-xl font-bold uppercase mb-2 tracking-tight text-white">{feature.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-400 transition-colors">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FINAL CALL TO ACTION --- */}
      <section className="py-24 text-center px-6">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-3xl md:text-5xl font-black uppercase mb-4 leading-none">Ready to harden your <span className="text-yellow-400 text-stroke-white">Perimeter?</span></h3>
          <p className="text-gray-500 mb-10 uppercase tracking-widest text-sm">Consult with Nairobi's fencing specialists today.</p>
          <button 
            onClick={() => window.open(`https://wa.me/254792735124?text=I'm interested in a professional Electric Fence installation.`, '_blank')}
            className="group bg-yellow-400 text-black px-12 py-5 font-black uppercase tracking-[0.2em] flex items-center gap-4 mx-auto hover:bg-white transition-all active:scale-95"
          >
            Get a Free Quote
            <span className="group-hover:translate-x-2 transition-transform">→</span>
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ElectricFenceInstallation;