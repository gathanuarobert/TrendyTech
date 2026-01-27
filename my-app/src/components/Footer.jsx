import React from 'react';

const Footer = () => {
  return (
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
            <button className="text-xl font-bold border-b-2 border-white/20 hover:border-yellow-400 pb-1 uppercase tracking-widest transition-all">Company Profile</button>
            <button className="text-xl font-bold border-b-2 border-white/20 hover:border-yellow-400 pb-1 uppercase tracking-widest transition-all">Leave a message</button>
          </div>
        </div>
        <div className="mt-32 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 uppercase tracking-widest gap-4">
          <p>© {new Date().getFullYear()} TrendyTech | All Rights Reserved</p>
          <p>Developed by <span className="text-white font-bold transition-colors underline underline-offset-4">Apex Software Solutions</span></p>
        </div>
      </div>
      {/* Decorative SVG Waveform */}
      <div className="absolute bottom-0 right-0 left-0 h-40 opacity-10 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1000 100" preserveAspectRatio="none">
           <path d="M0 100 V80 H50 V60 H100 V90 H150 V50 H200 V85 H250 V30 H300 V90 H350 V70 H400 V95 H450 V40 H500 V80 H550 V20 H600 V90 H650 V60 H700 V85 H750 V45 H800 V90 H850 V75 H900 V95 H950 V35 H1000 V100 Z" fill="none" stroke="white" strokeWidth="1" />
        </svg>
      </div>
    </footer>
  );
};

export default Footer;