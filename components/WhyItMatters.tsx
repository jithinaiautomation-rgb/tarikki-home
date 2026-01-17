
import React from 'react';

const WhyItMatters: React.FC = () => {
  const teenBenefits = [
    { title: 'Find Your Passion', desc: 'Discover career paths that genuinely excite you, not just what\'s popular.' },
    { title: 'Confidence in Choices', desc: 'Choose your high school subjects and university major with absolute certainty.' },
    { title: 'Future Readiness', desc: 'Understand the skills required for the job market of 2030 and beyond.' },
  ];

  const parentBenefits = [
    { title: 'Peace of Mind', desc: 'Reduce anxiety about your child’s future with data-driven guidance.' },
    { title: 'Save Time & Money', desc: 'Avoid costly degree changes and gap years by getting it right the first time.' },
    { title: 'Better Support', desc: 'Understand your child\'s unique strengths to support them more effectively.' },
  ];

  return (
    <section id="benefits" className="py-24 relative bg-white/40 dark:bg-black/20 backdrop-blur-sm border-y border-slate-200 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white">Why It Matters</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 relative">
          {/* Divider line for desktop */}
          <div className="hidden md:block absolute left-1/2 top-10 bottom-10 w-px bg-gradient-to-b from-transparent via-slate-300 dark:via-white/10 to-transparent -translate-x-1/2"></div>
          
          {/* For Teenagers */}
          <div className="space-y-12">
            <div className="flex items-center gap-5">
              <div className="p-5 rounded-2xl bg-primary/10 text-primary shadow-inner">
                <span className="material-icons-round text-5xl">face_retouching_natural</span>
              </div>
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white">For Teenagers</h3>
            </div>
            <ul className="space-y-8">
              {teenBenefits.map((b) => (
                <li key={b.title} className="flex items-start gap-4">
                  <span className="material-icons-round text-primary text-2xl mt-0.5">check_circle</span>
                  <div>
                    <h4 className="font-bold text-xl text-slate-900 dark:text-white">{b.title}</h4>
                    <p className="text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">{b.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* For Parents */}
          <div className="space-y-12">
            <div className="flex items-center gap-5">
              <div className="p-5 rounded-2xl bg-secondary/10 text-secondary shadow-inner">
                <span className="material-icons-round text-5xl">family_restroom</span>
              </div>
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white">For Parents</h3>
            </div>
            <ul className="space-y-8">
              {parentBenefits.map((b) => (
                <li key={b.title} className="flex items-start gap-4">
                  <span className="material-icons-round text-secondary text-2xl mt-0.5">check_circle</span>
                  <div>
                    <h4 className="font-bold text-xl text-slate-900 dark:text-white">{b.title}</h4>
                    <p className="text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">{b.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyItMatters;
