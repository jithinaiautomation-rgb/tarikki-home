
import React from 'react';

const TrustedBy: React.FC = () => {
  const partners = [
    { name: 'Greenwood', type: 'High School', icon: 'school' },
    { name: 'Oakridge', type: 'Academy', icon: 'local_library' },
    { name: 'The International', type: 'School', icon: 'public' },
    { name: 'Horizon', type: 'Prep', icon: 'history_edu' },
  ];

  return (
    <section className="border-y border-slate-200 dark:border-white/5 bg-white/50 dark:bg-background-dark/50 backdrop-blur-sm py-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-[10px] font-bold tracking-[0.2em] text-slate-500 dark:text-slate-500 uppercase mb-8">
          Trusted by Leading Schools Across the Globe
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 grayscale transition-all hover:grayscale-0 hover:opacity-100">
          {partners.map((p) => (
            <div key={p.name} className="flex items-center gap-3">
              <span className="material-icons-round text-3xl text-slate-700 dark:text-slate-300">{p.icon}</span>
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-none text-slate-800 dark:text-white">{p.name}</span>
                <span className="text-[10px] tracking-widest uppercase text-slate-500">{p.type}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
