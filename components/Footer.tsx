
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-[#080a1a] border-t border-slate-200 dark:border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <span className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              Tarikki<span className="text-primary">360</span>
            </span>
            <p className="mt-6 text-base text-slate-500 dark:text-slate-400 leading-relaxed">
              Empowering the next generation to find their true calling through cutting-edge technology and educational psychology.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white text-lg mb-6">Platform</h4>
            <ul className="space-y-3 text-base text-slate-500 dark:text-slate-400">
              {['Assessment', 'Pricing', 'For Schools', 'Success Stories'].map(item => (
                <li key={item}><a className="hover:text-primary transition-colors" href="#">{item}</a></li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white text-lg mb-6">Company</h4>
            <ul className="space-y-3 text-base text-slate-500 dark:text-slate-400">
              {['About Us', 'Partners', 'Contact', 'Blog'].map(item => (
                <li key={item}><a className="hover:text-primary transition-colors" href="#">{item}</a></li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white text-lg mb-6">Connect</h4>
            <div className="flex space-x-4 mb-8">
              {['facebook', 'instagram', 'twitter', 'linkedin'].map(social => (
                <a 
                  key={social}
                  href="#" 
                  className="w-10 h-10 rounded-full bg-slate-100 dark:bg-white/5 flex items-center justify-center hover:bg-primary hover:text-slate-900 transition-all cursor-pointer text-slate-500 dark:text-slate-400"
                >
                  <span className="material-icons-round text-lg">public</span>
                </a>
              ))}
            </div>
            <button className="text-sm font-bold text-primary flex items-center gap-2 group">
              Join Our Newsletter 
              <span className="material-icons-round text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </button>
          </div>
        </div>
        
        <div className="border-t border-slate-200 dark:border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500 dark:text-slate-500">
            © {new Date().getFullYear()} Tarikki360. All rights reserved.
          </p>
          <div className="flex space-x-8 text-sm text-slate-500 dark:text-slate-500">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
