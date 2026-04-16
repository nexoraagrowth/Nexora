
import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 400) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className={`fixed bottom-8 right-8 z-50 transition-all duration-500 transform ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-50 pointer-events-none'}`}>
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className="group relative p-4 rounded-full glass border-blue-500/30 text-blue-400 hover:text-white hover:border-blue-500 hover:scale-110 transition-all duration-300 shadow-2xl shadow-blue-950/20 active:scale-95 overflow-hidden"
      >
        {/* Animated Glow Effect */}
        <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/20 transition-colors duration-500"></div>
        
        {/* Icon */}
        <ArrowUp size={24} className="relative z-10 transition-transform duration-500 group-hover:-translate-y-1" />
        
        {/* Pulse ring for visibility */}
        <div className="absolute inset-0 rounded-full border border-blue-500/0 group-hover:animate-ping opacity-20"></div>
      </button>
    </div>
  );
};

export default ScrollToTopButton;
