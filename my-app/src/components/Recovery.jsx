import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Recovery = () => {
  const recoveryScenarios = [
    { title: "Accidental Deletion", desc: "Mistakenly wiped footage or formatted hard drives are often 100% recoverable if handled quickly." },
    { title: "Physical Damage", desc: "Recovery from DVRs/NVRs damaged by fire, water, power surges, or physical impact." },
    { title: "Corrupted Data", desc: "Fixing 'Unreadable' or 'Unsupported Format' errors caused by system crashes during recording." },
    { title: "Overwritten Files", desc: "Advanced forensic deep-scanning to retrieve frames even after the system has started looping." }
  ];

  return (
    <div className="min-h-screen bg-black text-white relative font-sans">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200" 
            alt="Data Recovery and Digital Forensics" 
            className="w-full h-full object-cover opacity-40 grayscale"
          />
          {/* Cyan/Yellow Digital Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl mt-20">
          <span className="text-yellow-400 font-bold uppercase tracking-[0.4em] text-xs mb-4 block">Digital Forensic Lab</span>
          <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-6 leading-tight">
            Expert <span className="text-yellow-400">CCTV Footage</span> Recovery Services
          </h1>
          <p className="text-zinc-400 uppercase tracking-widest text-sm max-w-2xl mx-auto">
            When evidence is lost, TrendyTech brings it back. High-success data retrieval for all DVR & NVR systems in Nairobi.
          </p>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mt-8"></div>
        </div>
      </section>

      {/* --- CORE CONTENT --- */}
      <section className="py-24 px-6 md:px-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none">
              Lost Evidence <br />
              <span className="text-yellow-400">Is Not Gone Forever.</span>
            </h2>
            <div className="text-gray-400 text-lg leading-relaxed space-y-6">
              <p>
                At <span className="text-white font-bold underline decoration-yellow-400">TrendyTech</span>, we understand that CCTV footage is often the only witness to a critical event. Whether your DVR hard drive has crashed, files were intentionally deleted, or the system suffered a power surge, our forensic team has the tools to intervene.
              </p>
              <p>
                We specialize in <strong>CCTV Video Forensics</strong> across Nairobi, utilizing state-of-the-art data reconstruction techniques. We support all major brands, including Hikvision, Dahua, and Samsung, bypassing physical damage to restore logical video structures.
              </p>
              <div className="p-6 border border-zinc-800 bg-zinc-900/30 rounded-lg">
                <h4 className="text-white font-bold uppercase text-sm mb-2">Our Policy:</h4>
                <p className="text-yellow-400 font-black tracking-widest text-xl uppercase italic">No Data – No Charge</p>
              </div>
            </div>
          </div>

          {/* Scenario Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {recoveryScenarios.map((item, idx) => (
              <div key={idx} className="p-8 bg-zinc-900/50 border border-white/5 rounded-2xl hover:border-yellow-400/50 transition-all group">
                <h3 className="text-yellow-400 font-bold uppercase mb-3 text-sm tracking-widest">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- THE RECOVERY PROCESS (Magic Section) --- */}
      <section className="py-20 bg-zinc-950 border-y border-white/5 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div className="text-left">
              <h2 className="text-3xl font-black uppercase">The Recovery <span className="text-yellow-400">Protocol</span></h2>
              <p className="text-zinc-500 text-xs uppercase tracking-widest mt-2">Security & Confidentiality Guaranteed</p>
            </div>
            <div className="text-yellow-400 font-black text-6xl opacity-10">FORENSICS</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-1">
            {[
              { step: "01", title: "Evaluation", detail: "Free diagnostic of the storage media." },
              { step: "02", title: "Imaging", detail: "Creating a bit-by-bit forensic clone." },
              { step: "03", title: "Extraction", detail: "Rebuilding corrupted video streams." },
              { step: "04", title: "Delivery", detail: "Secure return of recovered evidence." }
            ].map((proc, i) => (
              <div key={i} className="bg-black p-8 border border-white/5 group hover:bg-yellow-400 transition-all duration-500">
                <span className="block text-yellow-400 group-hover:text-black font-black text-3xl mb-6">{proc.step}</span>
                <h4 className="text-white group-hover:text-black font-bold uppercase mb-2">{proc.title}</h4>
                <p className="text-gray-500 group-hover:text-black/70 text-sm">{proc.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CALL TO ACTION --- */}
      <section className="py-24 text-center px-6">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="inline-block px-4 py-1 border border-yellow-400 text-yellow-400 text-xs font-bold uppercase tracking-widest mb-4">
            Urgent Assistance Required?
          </div>
          <h3 className="text-3xl md:text-5xl font-black uppercase mb-4 leading-none text-stroke-white">Don't Write <span className="text-yellow-400">New Data!</span></h3>
          <p className="text-gray-500 text-lg">
            Every second the DVR stays on increases the risk of overwriting. Turn off your system and contact our experts immediately.
          </p>
          <button 
            onClick={() => window.open(`https://wa.me/254792735124?text=EMERGENCY: I need help recovering lost CCTV footage.`, '_blank')}
            className="bg-yellow-400 text-black px-12 py-5 font-black uppercase tracking-[0.2em] hover:bg-white transition-all transform hover:-translate-y-1 shadow-xl"
          >
            Start Emergency Recovery
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Recovery;