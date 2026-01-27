import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const WhyUs = () => {
  const [activeCard, setActiveCard] = useState(null);

  const trustCards = [
    {
      title: "Experienced Team",
      desc: "Highly experienced tech specialists to guide & assist your requirements. No high-pressure sales, just expert advice.",
      icon: "👤"
    },
    {
      title: "Quality Equipment",
      desc: "We have partnered with global leaders for the latest equipment to protect your home and business property.",
      icon: "🏅"
    },
    {
      title: "Accredited",
      desc: "We are fully registered and accredited to offer professional security and electronic services in Nairobi, Kenya.",
      icon: "✅"
    }
  ];

  const benefits = [
    { title: "Better Security", text: "With surveillance cameras monitoring your entire building, you have a bird’s-eye-view over everything. Catch crime in progress or assist police with clear evidence." },
    { title: "Deter Criminals", text: "Visible CCTV cameras are an excellent deterrent. Burglars look for easy targets; simply installing cameras helps prevent crime before it starts." },
    { title: "Protect Your Staff", text: "Lone employees are targets, especially on remote sites. A CCTV system offers them extra protection and peace of mind while they work." },
    { title: "Health & Safety", text: "Identify accident-prone areas through video analysis. If an accident happens, your cameras provide proof of exactly how it occurred." },
    { title: "Time Monitoring", text: "A convenient, non-intrusive way to monitor the number of hours and presence each employee spends at work." },
    { title: "Market Research", text: "Monitor foot traffic and customer behavior to optimize your store's performance and understand traffic patterns." }
  ];

  return (
    <div className="min-h-screen bg-black text-white relative font-sans">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1698908701146-1ea6c4ebbabe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fE5pZ2h0JTIwY2l0eSUyMHN1cnZlaWxsYW5jZXxlbnwwfHwwfHx8MA%3D%3D" 
            alt="Security Essence" 
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        </div>

        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-4">
            Why <span className="text-yellow-400">Choose Us?</span>
          </h1>
          <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
        </div>
      </section>

      {/* --- OUR STORY SECTION --- */}
      <section className="py-20 px-6 md:px-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-yellow-400 font-bold tracking-widest uppercase text-sm block mb-2">Est 2020</span>
            <h2 className="text-4xl md:text-6xl font-black uppercase mb-6 leading-tight">Our Story</h2>
            <div className="space-y-4 text-gray-400 text-lg leading-relaxed">
              <p>
                TrendyTech started with a simple observation: in a rapidly growing city like Nairobi, high-end technology and reliable security shouldn't be a luxury—they should be a standard. 
              </p>
              <p>
                What began as a small passion project in 2020 has evolved into a premier destination for electronics and surveillance. We realized that people weren't just looking for gadgets; they were looking for peace of mind and smarter ways to live.
              </p>
              <p>
                Today, we bridge the gap between innovation and protection, ensuring every home and business we touch is smarter, safer, and ready for the future.
              </p>
            </div>
          </div>
          
          {/* --- TRUST CARDS (Matching Theme) --- */}
          <div className="grid grid-cols-1 gap-6">
            {trustCards.map((card, idx) => (
              <div 
                key={idx} 
                className="bg-zinc-900/50 border border-white/10 p-8 rounded-2xl hover:border-yellow-400/50 transition-all duration-300 group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform inline-block">
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold uppercase text-yellow-400 mb-2">{card.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CORE BENEFITS SECTION (The Text you provided) --- */}
      <section className="py-20 bg-zinc-950 border-y border-white/5 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">The Power of <span className="text-yellow-400">Total Surveillance</span></h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto uppercase tracking-widest text-xs">Innovation in protection</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="relative p-8 bg-black border border-white/5 hover:bg-zinc-900 transition-colors group">
                <div className="absolute top-0 left-0 w-1 h-0 bg-yellow-400 group-hover:h-full transition-all duration-300"></div>
                <h4 className="text-yellow-400 font-bold uppercase mb-4 tracking-wider">{benefit.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {benefit.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WhyUs;