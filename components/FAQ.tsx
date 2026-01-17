
import React, { useState } from 'react';

const faqs = [
  {
    q: 'How long does the assessment take?',
    a: 'The assessment typically takes about 20-30 minutes to complete. You can save your progress and return later if needed.'
  },
  {
    q: 'Is this suitable for university students?',
    a: 'While designed primarily for teenagers (13-18), university students looking to change majors or understand their career fit better can also find significant value in the report.'
  },
  {
    q: 'Can I upgrade my plan later?',
    a: 'Yes! You can upgrade from Career Mapping to Career Mastery at any time by paying the difference. Your data will automatically carry over.'
  },
  {
    q: 'How accurate is the AI?',
    a: 'Our AI is trained on millions of career profiles and validated by psychologists. We boast a 98% satisfaction rate among students regarding the relevance of their results.'
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-slate-900 dark:text-white mb-16">Frequently Asked Questions</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className="glass-card rounded-2xl overflow-hidden group border border-slate-200 dark:border-white/10"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-7 cursor-pointer text-xl font-bold text-slate-900 dark:text-white hover:bg-white/5 transition-colors text-left"
              >
                <span>{faq.q}</span>
                <span className={`material-icons-round text-slate-400 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`}>
                  expand_more
                </span>
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === i ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="px-7 pb-7 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
