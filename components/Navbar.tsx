
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { NAV_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <nav 
        className="fixed left-0 right-0 z-50 flex justify-center pointer-events-none transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] top-6"
      >
        <div 
          className={`
            w-full flex justify-between items-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-auto
            rounded-full border shadow-2xl
            ${scrolled 
              ? 'max-w-4xl mx-4 py-3 px-6 md:px-8 border-blue-500/30' 
              : 'max-w-6xl mx-4 py-4 px-8 md:px-10 border-white/10'
            }
          `}
          style={{
            // Deep obsidian with electric blue tint - always glassy
            backgroundColor: scrolled ? 'rgba(5, 8, 20, 0.85)' : 'rgba(10, 10, 15, 0.4)',
            backdropFilter: 'blur(20px) saturate(180%)',
            WebkitBackdropFilter: 'blur(20px) saturate(180%)',
            boxShadow: scrolled 
              ? '0 10px 40px rgba(0, 0, 0, 0.6), inset 0 0 12px rgba(59, 130, 246, 0.15)' 
              : '0 4px 24px rgba(0, 0, 0, 0.2), inset 0 0 8px rgba(255, 255, 255, 0.05)',
          }}
        >
          {/* Logo Area */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              {/* Logo Container: Dark Blue Square */}
              <div className={`w-9 h-9 md:w-10 md:h-10 bg-[#0A1128] rounded-xl transition-transform duration-700 ease-in-out shadow-[0_0_20px_rgba(10,17,40,0.4)] flex items-center justify-center overflow-hidden border border-white/5
                ${scrolled ? 'rotate-0' : 'rotate-45'} group-hover:rotate-0
              `}>
                <div className="w-full h-full bg-gradient-to-br from-[#0A1128] to-black"></div>
              </div>
              {/* Glow Effect */}
              <div className={`absolute inset-0 w-9 h-9 md:w-10 md:h-10 bg-blue-600 rounded-xl blur-md opacity-20 group-hover:opacity-60 transition-all duration-700
                ${scrolled ? 'rotate-0' : 'rotate-45'} group-hover:rotate-0
              `}></div>
              
              {/* Stylized N and Arrow (SVG representation for authenticity) */}
              <div className={`absolute inset-0 flex items-center justify-center pointer-events-none transition-transform duration-700 ease-in-out
                ${scrolled ? 'rotate-0' : 'rotate-45'} group-hover:rotate-0
              `}>
                <div className="relative w-8 h-8 flex items-center justify-center">
                  <span className="text-white font-black text-3xl leading-none select-none tracking-tighter">N</span>
                                   {/* Authentic Swooping Arrow from Image - Scaled Down */}
                  <svg className="absolute inset-[-2px] w-[calc(100%+4px)] h-[calc(100%+4px)] overflow-visible" viewBox="0 0 100 100" fill="none">
                    {/* Pixelated Trail */}
                    <rect x="10" y="75" width="5" height="5" fill="#A3E635" />
                    <rect x="18" y="68" width="4" height="4" fill="#A3E635" />
                    <rect x="12" y="82" width="3" height="3" fill="#A3E635" />
                    
                    {/* The Swooping Arrow - Green Outline */}
                    <path 
                      d="M15 85C35 85 60 75 85 25" 
                      stroke="#A3E635" 
                      strokeWidth="7" 
                      strokeLinecap="round" 
                    />
                    {/* The Swooping Arrow - White Core */}
                    <path 
                      d="M15 85C35 85 60 75 85 25" 
                      stroke="white" 
                      strokeWidth="2.5" 
                      strokeLinecap="round" 
                    />
                    
                    {/* Arrow Head - Green Outline */}
                    <path 
                      d="M68 28L88 22L90 42" 
                      stroke="#A3E635" 
                      strokeWidth="7" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                    />
                    {/* Arrow Head - White Core */}
                    <path 
                      d="M71 30L86 24L88 39" 
                      stroke="white" 
                      strokeWidth="2.5" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                    />
                  </svg>
                </div>
              </div>
            </div>
            <span className="text-xl md:text-2xl font-black font-heading tracking-tighter text-white group-hover:text-[#A3E635] transition-colors">
              NEXORA
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            <div className="flex items-center bg-white/5 border border-white/5 shadow-inner rounded-full px-2 py-1">
              {NAV_LINKS.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`relative px-5 py-2 text-xs font-bold uppercase tracking-widest transition-all duration-300 rounded-full
                      ${isActive ? 'text-white' : 'text-neutral-400 hover:text-white'}
                    `}
                  >
                    {isActive && (
                      <div className="absolute inset-0 bg-blue-600/25 rounded-full border border-blue-500/40 shadow-[0_0_12px_rgba(37,99,235,0.2)] animate-pulse"></div>
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </Link>
                );
              })}
            </div>
            
            <Link 
              to="/contact" 
              className={`group relative font-bold rounded-full overflow-hidden transition-all duration-500 hover:scale-110 active:scale-95 ml-2
                ${scrolled 
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs px-5 py-2.5 shadow-[0_0_20px_rgba(37,99,235,0.3)]' 
                  : 'bg-gradient-to-r from-blue-500 to-blue-700 text-white text-sm px-7 py-3 shadow-[0_0_25px_rgba(37,99,235,0.2)]'
                }
              `}
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              <span className="relative z-10 flex items-center gap-2">
                {scrolled ? 'Let\'s Chat' : 'Get Started'} <ArrowRight size={scrolled ? 14 : 16} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white active:scale-90 transition-transform" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Modern Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-[60] bg-black/95 backdrop-blur-3xl transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] md:hidden
          ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none translate-y-10'}
        `}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center p-8">
            <span className="text-2xl font-black font-heading tracking-tighter text-white">NEXORA</span>
            <button 
              className="w-12 h-12 flex items-center justify-center rounded-full glass border border-white/10 text-white" 
              onClick={closeMenu}
            >
              <X size={24} />
            </button>
          </div>

          <div className="flex flex-col justify-center items-start gap-6 px-10 mt-8">
            {NAV_LINKS.map((link, idx) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={closeMenu}
                className={`text-4xl font-black font-heading transition-all duration-500 hover:text-blue-500 hover:translate-x-4
                  ${isOpen ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}
                  ${location.pathname === link.path ? 'text-blue-500' : 'text-neutral-500'}
                `}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="mt-auto p-10 w-full">
            <Link 
              to="/contact" 
              onClick={closeMenu}
              className="w-full py-5 gradient-bg text-white font-black rounded-2xl text-lg shadow-2xl shadow-blue-500/20 flex items-center justify-center gap-4 group"
            >
              Start Project <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
