import { TrendingUp, Heart } from 'lucide-react';

const navLinks = [
  { name: 'Services', href: '#services' },
  { name: 'Results', href: '#results' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-navy-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-cyan to-accent-blue flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-navy-950" />
              </div>
              <span className="font-display font-bold text-xl text-white">
                Usama<span className="text-accent-cyan">.</span>
              </span>
            </a>
            <p className="text-navy-400 max-w-sm mb-4">
              Scaling brands through data-driven digital marketing strategies. Let's build your success story together.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-navy-400 hover:text-accent-cyan transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-navy-400">
              <li>SEO Optimization</li>
              <li>Meta Ads</li>
              <li>Google Ads</li>
              <li>Content Marketing</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-navy-400 text-sm">
            © {currentYear} Usama Ahmed. All rights reserved.
          </div>
          <div className="flex items-center gap-1 text-navy-400 text-sm">
            Crafted with <Heart className="w-4 h-4 text-accent-cyan" /> for growth
          </div>
        </div>
      </div>
    </footer>
  );
}
