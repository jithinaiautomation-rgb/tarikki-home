
import React from 'react';

const StrategicPartners: React.FC = () => {
  return (
    <section className="py-24 relative bg-white/40 dark:bg-black/20 backdrop-blur-sm border-t border-slate-200 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white uppercase tracking-[0.3em] opacity-80">Strategic Partners</h2>
        </div>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-16 md:gap-32">
          <div className="text-center max-w-sm group">
            <div className="h-24 flex items-center justify-center mb-6">
              <span className="text-6xl font-black tracking-tighter text-slate-800 dark:text-white group-hover:text-primary transition-colors">NABD</span>
            </div>
            <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
              Leading educational psychology research institute providing the scientific framework for our assessments.
            </p>
          </div>
          
          <div className="text-center max-w-sm group">
            <div className="h-24 flex items-center justify-center mb-6">
              <span className="text-6xl font-script text-primary group-hover:scale-110 transition-transform">Clap</span>
              <span className="text-2xl font-bold text-slate-800 dark:text-white ml-3">Smart Learn</span>
            </div>
            <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
              Innovative EdTech solutions provider powering our AI algorithms and learning recommendations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategicPartners;
