
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import HowItWorks from './components/HowItWorks';
import WhyItMatters from './components/WhyItMatters';
import SuccessStats from './components/SuccessStats';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import StrategicPartners from './components/StrategicPartners';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <div className="relative min-h-screen">
      {/* Dynamic Mesh Background Overlay */}
      <div className="fixed inset-0 z-0 pointer-events-none mesh-bg opacity-40 dark:opacity-70"></div>
      
      {/* Pattern Overlay */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] dark:opacity-[0.05]"></div>

      <Navbar onThemeToggle={toggleTheme} isDarkMode={isDarkMode} />
      
      <main className="relative z-10">
        <Hero />
        <TrustedBy />
        <HowItWorks />
        <WhyItMatters />
        <SuccessStats />
        <Pricing />
        <Testimonials />
        <StrategicPartners />
        <FAQ />
      </main>

      <Footer />

      {/* Floating Theme Toggle (Mobile specific or as a quick action) */}
      <div className="fixed bottom-6 right-6 z-50">
        <button 
          onClick={toggleTheme}
          className="bg-primary text-slate-900 p-3 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center btn-glow"
        >
          <span className="material-icons-round">
            {isDarkMode ? 'light_mode' : 'dark_mode'}
          </span>
        </button>
      </div>
    </div>
  );
};

export default App;
