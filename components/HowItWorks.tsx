
import React from 'react';

const steps = [
  {
    number: '1',
    title: 'Assessment',
    icon: 'quiz',
    color: 'bg-primary/10 text-primary',
    desc: 'Take our immersive online questionnaire designed to uncover your interests and personality traits.'
  },
  {
    number: '2',
    title: 'Competencies',
    icon: 'psychology',
    color: 'bg-secondary/10 text-secondary',
    desc: 'Our AI analyzes your core competencies, identifying both your innate strengths and growth areas.'
  },
  {
    number: '3',
    title: 'Report',
    icon: 'description',
    color: 'bg-purple-500/10 text-purple-500',
    desc: 'Receive a comprehensive career report detailing your best-fit career paths and educational requirements.'
  },
  {
    number: '4',
    title: 'Plan',
    icon: 'map',
    color: 'bg-blue-500/10 text-blue-500',
    desc: 'Get an actionable roadmap with recommended courses, skills to build, and university suggestions.'
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">How It Works</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            A scientifically-backed 4-step journey to discovering your true potential.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div 
              key={step.number} 
              className="glass-card p-8 rounded-[2rem] relative group hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className={`w-16 h-16 rounded-full ${step.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <span className="material-icons-round text-3xl">{step.icon}</span>
              </div>
              <div className="absolute top-4 right-6 text-7xl font-bold text-slate-200 dark:text-white/5 z-0 pointer-events-none select-none">
                {step.number}
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 z-10 relative">
                {step.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed z-10 relative">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
