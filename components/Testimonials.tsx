
import React from 'react';

const testimonials = [
  {
    name: 'Sarah M.',
    role: 'Student, 19',
    text: '"I was completely lost about what to study. Tarikki360 suggested Data Science, and it fits me perfectly. I\'m now in my second year and loving it!"',
    img: 'https://picsum.photos/seed/sarah/100/100'
  },
  {
    name: 'Ahmed K.',
    role: 'Parent',
    text: '"As a parent, you worry if you\'re giving the right advice. The report gave us objective data to discuss my son\'s future constructively."',
    img: 'https://picsum.photos/seed/ahmed/100/100'
  },
  {
    name: 'Layla R.',
    role: 'Student, 17',
    text: '"The Competencies section was an eye-opener. It highlighted soft skills I didn\'t know I had, which helped me in my scholarship interview."',
    img: 'https://picsum.photos/seed/layla/100/100'
  },
  {
    name: 'Mr. & Mrs. Johnson',
    role: 'Parents',
    text: '"Worth every penny. The detail in the \'Plan\' section is incredible. It literally maps out what extracurriculars to take."',
    img: 'https://picsum.photos/seed/johnson/100/100'
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-slate-900 dark:text-white mb-16">Success Stories</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="glass-card p-10 rounded-3xl group hover:border-primary/40 transition-all duration-300">
              <div className="flex items-center gap-1 mb-6 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-icons-round text-sm">star</span>
                ))}
              </div>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 italic leading-relaxed">
                {t.text}
              </p>
              <div className="flex items-center gap-5">
                <img 
                  src={t.img} 
                  alt={t.name} 
                  className="w-14 h-14 rounded-full border-2 border-primary/20 object-cover" 
                />
                <div>
                  <div className="font-bold text-slate-900 dark:text-white text-lg">{t.name}</div>
                  <div className="text-sm text-slate-500 font-medium">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
