
import React from 'react';

interface NavbarProps {
  onThemeToggle: () => void;
  isDarkMode: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ onThemeToggle, isDarkMode }) => {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/70 dark:bg-background-dark/70 border-b border-gray-200 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              Tarikki<span className="text-primary">360</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {['How it Works', 'Benefits', 'Pricing', 'Testimonials'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <button className="flex items-center text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary transition-colors">
              <span className="material-icons-round text-lg mr-1">language</span> 
              EN
              <span className="material-icons-round text-sm ml-0.5">expand_more</span>
            </button>
            <a 
              href="#" 
              className="bg-primary hover:bg-teal-400 text-slate-900 font-semibold px-6 py-2.5 rounded-full shadow-lg btn-glow transition-all"
            >
              Start Career Mapping
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button className="text-slate-600 dark:text-slate-200 p-2">
              <span className="material-icons-round text-2xl">menu</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
