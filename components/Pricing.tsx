
import React from 'react';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 relative bg-surface-light/50 dark:bg-surface-dark/50 backdrop-blur-sm border-t border-slate-200 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Invest in the Future</h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg">Simple, transparent pricing for your career journey.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Basic Plan */}
          <div className="glass-card p-10 rounded-[2.5rem] flex flex-col border border-slate-200 dark:border-white/10 hover:border-primary/30 transition-all group">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Career Mapping</h3>
            <p className="text-slate-500 text-sm mb-6">Essential insights for starting out.</p>
            <div className="flex items-baseline gap-1 mb-8">
              <span className="text-4xl font-bold text-slate-900 dark:text-white">$49</span>
              <span className="text-slate-400 text-sm italic">one-time</span>
            </div>
            <ul className="space-y-5 mb-10 flex-1">
              {['Basic Personality Assessment', 'Top 3 Career Matches', 'Downloadable PDF Report'].map(feature => (
                <li key={feature} className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                  <span className="material-icons-round text-primary text-xl">check_circle</span>
                  {feature}
                </li>
              ))}
            </ul>
            <button className="w-full py-4 rounded-2xl border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white transition-all duration-300">
              Get Started
            </button>
          </div>

          {/* Premium Plan */}
          <div className="glass-card p-10 rounded-[2.5rem] flex flex-col relative border-2 border-secondary overflow-hidden transform md:scale-105 shadow-2xl">
            <div className="absolute top-0 right-0 bg-secondary text-white text-xs font-bold px-6 py-2 rounded-bl-2xl uppercase tracking-widest">
              MOST POPULAR
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Career Mastery</h3>
            <p className="text-slate-500 text-sm mb-6">Comprehensive roadmap to success.</p>
            <div className="flex items-baseline gap-1 mb-8">
              <span className="text-5xl font-bold text-slate-900 dark:text-white">$99</span>
              <span className="text-slate-400 text-sm italic">one-time</span>
            </div>
            <ul className="space-y-5 mb-10 flex-1">
              {[
                'Full Competency Analysis', 
                'Unlimited Career Matches', 
                'Detailed Action Plan & Roadmap',
                '1-on-1 Expert Consultation (30 mins)'
              ].map(feature => (
                <li key={feature} className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                  <span className="material-icons-round text-secondary text-xl">check_circle</span>
                  {feature}
                </li>
              ))}
            </ul>
            <button className="w-full py-4 rounded-2xl bg-secondary text-white font-bold hover:bg-orange-600 btn-glow shadow-orange-500/20 shadow-xl transition-all duration-300">
              Get Mastery
            </button>
          </div>
        </div>

        <div className="mt-20 text-center space-y-4">
          <p className="text-slate-600 dark:text-slate-400 text-sm flex items-center justify-center gap-2">
            <span className="material-icons-round text-green-500">local_offer</span>
            <strong>Sibling Offer:</strong> Get 20% off when you register a second child.
          </p>
          <p className="text-slate-600 dark:text-slate-400 text-sm flex items-center justify-center gap-2">
            <span className="material-icons-round text-green-500">verified_user</span>
            100% Money-Back Guarantee if not satisfied with the report.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
