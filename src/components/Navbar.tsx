import React, { useState } from 'react';
import { Cpu, Menu, X, PhoneCall } from 'lucide-react';

interface NavbarProps {
  onOpenContact: () => void;
  onOpenAbout: () => void;
  onOpenServices: () => void;
  onOpenNews: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenContact,
  onOpenAbout,
  onOpenServices,
  onOpenNews,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false);
    const elem = document.getElementById(sectionId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="w-full bg-[#0a0f1d] border-b border-slate-800/80 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#"
            id="brand-logo"
            className="flex items-center gap-3 group focus:outline-none"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:bg-blue-500 transition-colors">
              <Cpu className="w-5 h-5 text-white stroke-[2.2]" />
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-xl font-bold text-white tracking-tight">創峰科技</span>
              <span className="text-lg font-semibold text-slate-300 tracking-wide font-sans">ApexTech</span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              id="nav-home"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-white hover:text-blue-400 font-medium text-sm transition-colors"
            >
              首頁
            </button>
            <button
              id="nav-about"
              onClick={() => {
                scrollToSection('about-anchor');
                onOpenAbout();
              }}
              className="text-slate-300 hover:text-white font-medium text-sm transition-colors"
            >
              關於我們
            </button>
            <button
              id="nav-services"
              onClick={() => scrollToSection('services-section')}
              className="text-slate-300 hover:text-white font-medium text-sm transition-colors"
            >
              我們的服務
            </button>
            <button
              id="nav-news"
              onClick={() => scrollToSection('news-section')}
              className="text-slate-300 hover:text-white font-medium text-sm transition-colors"
            >
              最新消息
            </button>

            {/* Contact CTA Button */}
            <button
              id="nav-contact-btn"
              onClick={onOpenContact}
              className="bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold px-5 py-2 rounded-lg shadow-md shadow-blue-600/30 transition-all transform active:scale-95"
            >
              聯絡我們
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-400 hover:text-white p-2 rounded-lg focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0e1424] border-b border-slate-800 px-4 pt-2 pb-6 space-y-3">
          <button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setMobileMenuOpen(false);
            }}
            className="block w-full text-left px-3 py-2 text-white font-medium hover:bg-slate-800/60 rounded-md"
          >
            首頁
          </button>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenAbout();
            }}
            className="block w-full text-left px-3 py-2 text-slate-300 font-medium hover:bg-slate-800/60 rounded-md"
          >
            關於我們
          </button>
          <button
            onClick={() => scrollToSection('services-section')}
            className="block w-full text-left px-3 py-2 text-slate-300 font-medium hover:bg-slate-800/60 rounded-md"
          >
            我們的服務
          </button>
          <button
            onClick={() => scrollToSection('news-section')}
            className="block w-full text-left px-3 py-2 text-slate-300 font-medium hover:bg-slate-800/60 rounded-md"
          >
            最新消息
          </button>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenContact();
            }}
            className="w-full mt-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2.5 rounded-lg flex items-center justify-center gap-2"
          >
            <PhoneCall className="w-4 h-4" />
            聯絡我們
          </button>
        </div>
      )}
    </header>
  );
};
