import React, { useState, useEffect } from 'react';
import { Menu, X, Facebook, Instagram } from 'lucide-react';
import { Button } from './ui/button';
import { externalLinks } from '../utils/mockData';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'Menu', id: 'menu' },
    { name: 'Location', id: 'location' },
    { name: 'Reviews', id: 'reviews' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#1a1a1a]/98 backdrop-blur-md' : 'bg-[#1a1a1a]'
      } border-b-2 border-[#ff5722]`}
    >
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex justify-between items-center py-3">
          {/* Logo - Left Side */}
          <div 
            className="flex flex-col items-center cursor-pointer group"
            onClick={() => scrollToSection('home')}
          >
            <div className="border-4 border-[#ff5722] px-3 py-1 group-hover:bg-[#ff5722]/10 transition-all duration-200">
              <div className="flex flex-col items-center">
                <span className="text-[#ff5722] text-xl font-bold leading-tight">FU</span>
                <span className="text-[#ff5722] text-xl font-bold leading-tight">KO</span>
              </div>
            </div>
            <span className="text-[#ff5722] text-[10px] mt-1 tracking-widest uppercase">Fusion'd Korea</span>
          </div>

          {/* Center Navigation - Desktop */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-[#ff5722] hover:text-[#ff7849] transition-colors duration-200 font-medium text-lg"
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('order')}
              className="text-[#ff5722] hover:text-[#ff7849] transition-colors duration-200 font-medium text-lg"
            >
              Order Now
            </button>
          </nav>

          {/* Right Side - Order Now Button + Social Icons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button 
              onClick={() => scrollToSection('order')}
              className="bg-[#ff5722] hover:bg-[#ff7849] text-white px-6 py-2 rounded-none font-semibold transition-all duration-200"
            >
              Order Now
            </Button>
            <a
              href={externalLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#ff5722] hover:text-[#ff7849] transition-colors"
            >
              <Facebook size={24} />
            </a>
            <a
              href={externalLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#ff5722] hover:text-[#ff7849] transition-colors"
            >
              <Instagram size={24} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-[#ff5722] p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-[#0f0f10] absolute top-full left-0 right-0 border-t-2 border-[#ff5722]/30">
            <nav className="flex flex-col py-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-[#ff5722] hover:bg-[#ff5722]/10 transition-all duration-200 py-3 px-6 text-left"
                >
                  {item.name}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('order')}
                className="mx-6 mt-4 bg-[#ff5722] hover:bg-[#ff7849] text-white py-3 rounded-none transition-colors duration-200"
              >
                Order Now
              </button>
              <div className="flex justify-center gap-6 mt-4 pt-4 border-t border-[#ff5722]/20">
                <a
                  href={externalLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#ff5722] hover:text-[#ff7849]"
                >
                  <Facebook size={24} />
                </a>
                <a
                  href={externalLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#ff5722] hover:text-[#ff7849]"
                >
                  <Instagram size={24} />
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;