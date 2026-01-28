import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { motion } from 'framer-motion'; // 1. Added Framer Motion

const CctvInstallation = () => {
  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const steps = [
    { title: "Site Survey", desc: "We analyze your property to identify critical blind spots and entry points." },
    { title: "Custom Design", desc: "We select the perfect high-definition kits tailored to your specific environment." },
    { title: "Pro Installation", desc: "Our engineers handle the wiring and mounting with surgical precision." },
    { title: "Remote Setup", desc: "We link your cameras to your smartphone for 24/7 global monitoring." }
  ];

  return (
    <div className="min-h-screen bg-black text-white relative font-sans">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://plus.unsplash.com/premium_photo-1728848993113-69c351ec7264?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2N0dnxlbnwwfHwwfHx8MA%3D%3D" 
            alt="Professional CCTV Installation" 
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        </motion.div>

        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="relative z-10 text-center px-6 max-w-4xl mt-20"
        >
          <span className="text-yellow-400 font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Security Excellence</span>
          <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-6 leading-tight">
            Professional <span className="text-yellow-400">CCTV Installation</span> Services in Nairobi Kenya
          </h1>
          <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
        </motion.div>
      </section>

      {/* --- INTRO CONTENT --- */}
      <section className="py-24 px-6 md:px-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Your Trusted <span className="text-yellow-400">Security Partner</span></h2>
            <div className="w-16 h-1 bg-yellow-400"></div>
            <div className="text-gray-400 text-lg leading-relaxed space-y-4">
              <p>
                <span className="text-white font-bold">TrendyTech Security Systems</span> is an accredited specialist CCTV installation company in Nairobi, Kenya. With more than 10 years’ experience in both the domestic and commercial service sectors, we bring unparalleled expertise to your doorstep.
              </p>
              <p>
                We are also a comprehensive provider of alarm systems, access control systems, and electric fences in Nairobi, Kenya. For a cost-effective, professional, and reliable answer to your CCTV and security issues, turn to the experts.
              </p>
              <p className="border-l-4 border-yellow-400 pl-6 italic">
                "Our engineers continue to excel in their delivery of professional CCTV installation services and maintenance support throughout Kenya."
              </p>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-zinc-900/50 p-1 border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1676630656246-3047520adfdf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNjdHYlMjB0ZWNobmljaWFucyUyMGluc3RhbGxpbmclMjBDQ1RWJTIwY2FtZXJhc3xlbnwwfHwwfHx8MA%3D%3D" 
              alt="CCTV Technician at work" 
              className="rounded-xl grayscale hover:grayscale-0 transition-all duration-700 object-cover w-full h-full"
            />
          </motion.div>
        </div>
      </section>

      {/* --- THE MAGIC: PROCESS STEPS --- */}
      <section className="py-20 bg-zinc-950 border-y border-white/5 px-6 md:px-16">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-7xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl font-black uppercase tracking-widest mb-2">How We <span className="text-yellow-400">Secure You</span></h2>
          <p className="text-zinc-500 text-xs uppercase tracking-[0.5em]">The TrendyTech Standard</p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {steps.map((step, idx) => (
            <motion.div 
              key={idx} 
              variants={fadeInUp}
              className="group relative p-8 bg-black border border-white/5 hover:border-yellow-400/50 transition-all"
            >
              <span className="text-6xl font-black text-white/5 absolute -top-4 -right-2 group-hover:text-yellow-400/10 transition-colors">
                0{idx + 1}
              </span>
              <h4 className="text-yellow-400 font-bold uppercase mb-4 tracking-wider">{step.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* --- CTA SECTION --- */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="py-24 text-center px-6"
      >
        <h3 className="text-2xl md:text-4xl font-black uppercase mb-8">Ready to secure your premises?</h3>
        <button 
          onClick={() => window.open(`https://wa.me/254792735124?text=I need a CCTV installation quote.`, '_blank')}
          className="bg-yellow-400 text-black px-12 py-4 font-bold uppercase tracking-widest hover:bg-white transition-all active:scale-95"
        >
          Request Free Quote
        </button>
      </motion.section>

      <Footer />
    </div>
  );
};

export default CctvInstallation;