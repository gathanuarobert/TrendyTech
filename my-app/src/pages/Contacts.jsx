import React from 'react';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion'; // 1. Added Framer Motion

const Contacts = () => {
  const phoneNumber = "+254792735124";
  const emailAddress = "info@trendytech.co.ke"; 
  const businessHours = "Mon - Sat: 8:00 AM - 6:00 PM";

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

  const contactMethods = [
    {
      title: "WhatsApp Us",
      value: "Chat with an Expert",
      action: () => window.open(`https://wa.me/${phoneNumber.replace('+', '')}?text=Hello TrendyTech, I have an inquiry regarding your security systems.`, '_blank'),
      icon: (
        <svg className="w-8 h-8 fill-current text-[#25D366]" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.319 1.592 5.448 0 9.886-4.438 9.889-9.886.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.735-.981z"/>
        </svg>
      ),
      label: "Instant Response"
    },
    {
      title: "Call Directly",
      value: phoneNumber,
      action: () => window.open(`tel:${phoneNumber}`),
      icon: (
        <span className="text-3xl">📞</span>
      ),
      label: "Available 24/7"
    },
    {
      title: "Email Support",
      value: emailAddress,
      action: () => window.open(`mailto:${emailAddress}`),
      icon: (
        <span className="text-3xl">✉️</span>
      ),
      label: "Detailed Inquiries"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white relative">
      <Navbar />

      {/* --- HERO IMAGE SECTION --- */}
      <section className="relative h-[45vh] md:h-[55vh] flex items-center justify-center overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://plus.unsplash.com/premium_photo-1681487394066-fbc71a037573?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c3VydmVpbGxhbmNlfGVufDB8fDB8fHww" 
            alt="Security Hub" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
        </motion.div>

        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="relative z-10 text-center px-6 mt-20"
        >
          <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-4">
            Get In <span className="text-yellow-400">Touch</span>
          </h1>
          <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
        </motion.div>
      </section>

      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-400/5 blur-[120px] pointer-events-none" />

      {/* Content Wrap */}
      <main className="pt-20 pb-20 px-6 md:px-16 relative z-10 max-w-7xl mx-auto">
        
        {/* Header Section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-20"
        >
          <span className="text-yellow-400 font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Connect with us</span>
          <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-8">
            Let's Secure <br />
            <span className="text-yellow-400 text-stroke-white">Your Future.</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-xl border-l-2 border-yellow-400 pl-6 py-2">
            Have questions about a CCTV installation or an electronic device? 
            Skip the forms and reach out to our technical team directly.
          </p>
        </motion.div>

        {/* Action Cards Grid */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20"
        >
          {contactMethods.map((method, idx) => (
            <motion.button
              key={idx}
              variants={fadeInUp}
              onClick={method.action}
              className="group relative bg-zinc-900/30 border border-white/5 p-10 text-left transition-all duration-500 hover:bg-zinc-900/60 hover:border-yellow-400/50 overflow-hidden"
            >
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-yellow-400/10 rounded-full blur-2xl group-hover:bg-yellow-400/20 transition-all" />
              
              <div className="mb-6">{method.icon}</div>
              
              <span className="text-yellow-400 text-[10px] font-bold uppercase tracking-widest mb-2 block opacity-60">
                {method.label}
              </span>
              
              <h3 className="text-2xl font-black uppercase tracking-tighter mb-1">
                {method.title}
              </h3>
              
              <p className="text-gray-400 font-medium group-hover:text-white transition-colors">
                {method.value}
              </p>

              <div className="mt-8 flex items-center gap-2 text-yellow-400 text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0">
                Launch Now <span>→</span>
              </div>
            </motion.button>
          ))}
        </motion.div>

        {/* Business Info Footer */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between gap-8"
        >
          <div>
            <h4 className="text-sm font-black uppercase tracking-widest text-zinc-500 mb-4">Operations</h4>
            <p className="text-xl font-bold">{businessHours}</p>
          </div>
          <div className="md:text-right">
            <h4 className="text-sm font-black uppercase tracking-widest text-zinc-500 mb-4">Location</h4>
            <p className="text-xl font-bold">Nairobi, Kenya</p>
            <p className="text-zinc-500 text-sm">Serving clients nationwide</p>
          </div>
        </motion.div>

      </main>
    </div>
  );
};

export default Contacts;