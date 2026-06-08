import { useState, useEffect } from 'react';
import { Menu, X, TrendingUp } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Results', href: '#results' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-navy-950/90 backdrop-blur-xl border-b border-white/10 py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-cyan to-accent-blue flex items-center justify-center group-hover:shadow-lg group-hover:shadow-accent-cyan/30 transition-all">
              <TrendingUp className="w-5 h-5 text-navy-950" />
            </div>
            <span className="font-display font-bold text-xl text-white">
              Usama<span className="text-accent-cyan">.</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-navy-200 hover:text-white font-medium transition-colors group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent-cyan to-accent-blue group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <a
              href="#contact"
              className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-accent-cyan to-accent-blue text-navy-950 font-semibold hover:shadow-lg hover:shadow-accent-cyan/30 transition-all"
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white hover:text-accent-cyan transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ${
            isOpen ? 'max-h-80 opacity-100 mt-6' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col gap-4 pb-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-navy-200 hover:text-accent-cyan font-medium transition-colors py-2"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-accent-cyan to-accent-blue text-navy-950 font-semibold text-center mt-2"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
