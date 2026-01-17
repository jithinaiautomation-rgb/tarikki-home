
import React from 'react';

const SuccessStats: React.FC = () => {
  return (
    <section className="py-24 lg:py-32 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-secondary font-script text-3xl mb-4 block">Proven Success</span>
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-10">Why Choose Tarikki360?</h2>
        
        <div className="glass-card p-12 rounded-[2.5rem] mb-12 transform hover:scale-[1.02] transition-transform duration-500">
          <div className="text-7xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary via-teal-400 to-secondary mb-6 tracking-tighter">
            150,000+
          </div>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 font-medium max-w-2xl mx-auto">
            Students across the region have discovered their perfect career path using our platform.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-slate-500 dark:text-slate-400">
          <p className="text-sm font-semibold tracking-widest uppercase">Powered by the expertise of</p>
          <div className="flex items-center gap-4 bg-white/50 dark:bg-white/5 px-6 py-2 rounded-full border border-slate-200 dark:border-white/10">
            <span className="material-icons-round text-primary">handshake</span>
            <span className="font-bold text-slate-800 dark:text-white">Nabd & Clap Smart Learn</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStats;
