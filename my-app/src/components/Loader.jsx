import React from 'react';

const Loader = () => {
  return (
    <div className="fixed inset-0 z-[200] bg-black flex flex-col items-center justify-center">
      <div className="relative flex items-center justify-center">
        {/* Outer Rotating Ring */}
        <div className="w-24 h-24 border-2 border-yellow-400/20 border-t-yellow-400 rounded-full animate-spin"></div>
        
        {/* Inner Pulsing Core */}
        <div className="absolute w-12 h-12 bg-yellow-400 rounded-full animate-pulse blur-sm opacity-50"></div>
        <div className="absolute w-8 h-8 bg-yellow-400 rounded-full shadow-[0_0_20px_rgba(250,204,21,0.8)]"></div>
      </div>

      {/* Brand Text */}
      <div className="mt-8 text-center">
        <h2 className="text-2xl font-black uppercase tracking-[0.5em] text-white">
          Trendy<span className="text-yellow-400">Tech</span>
        </h2>
        <div className="mt-2 flex justify-center gap-1">
          <div className="w-1 h-1 bg-yellow-400 animate-bounce [animation-delay:-0.3s]"></div>
          <div className="w-1 h-1 bg-yellow-400 animate-bounce [animation-delay:-0.15s]"></div>
          <div className="w-1 h-1 bg-yellow-400 animate-bounce"></div>
        </div>
      </div>
      
      {/* Scanning Line Effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
        <div className="w-full h-[2px] bg-yellow-400 absolute top-0 animate-[scan_3s_linear_infinite]"></div>
      </div>

      <style jsx>{`
        @keyframes scan {
          0% { top: 0%; }
          100% { top: 100%; }
        }
      `}</style>
    </div>
  );
};

export default Loader;