import { useState, useEffect } from 'react';
import { Menu, X, Phone, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Donate', href: '#donate' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-red-600 text-white py-2 px-4 text-sm font-medium text-center md:flex md:justify-between md:items-center z-50 relative">
        <span className="w-full text-center">Providing Safe, Efficient and Timely Emergency Response</span>
      </div>

      {/* Main Navbar */}
      <nav 
        className={`sticky top-0 w-full z-40 transition-all duration-300 ${
          scrolled ? 'bg-white shadow-md py-2' : 'bg-white/95 backdrop-blur-sm py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo Area */}
            <div className="flex items-center gap-4">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-red-600 leading-none tracking-tight">R.E.D Service</span>
                <span className="text-[0.6rem] font-bold text-gray-500 uppercase tracking-wider">Road Emergency Doctors</span>
              </div>
              <div className="h-8 w-px bg-gray-300 hidden sm:block"></div>
              <div className="flex flex-col hidden sm:flex">
                <span className="text-lg font-bold text-blue-500 leading-none">Nurse In Hand</span>
                <span className="text-[0.6rem] font-bold text-gray-500 uppercase tracking-wider">Emergency Response</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-red-600 ${
                    link.name === 'Donate' 
                      ? 'bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 hover:text-white shadow-sm flex items-center gap-2'
                      : 'text-gray-700'
                  }`}
                >
                  {link.name === 'Donate' && <Heart size={14} fill="currentColor" />}
                  {link.name}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 hover:text-red-600 focus:outline-none"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-3 py-3 rounded-md text-base font-medium ${
                      link.name === 'Donate'
                        ? 'bg-red-50 text-red-600 mt-4 text-center border border-red-100'
                        : 'text-gray-700 hover:text-red-600 hover:bg-gray-50'
                    }`}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
