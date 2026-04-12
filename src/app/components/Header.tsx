import { useLanguage } from '../../contexts/LanguageContext';
import { Menu, X, Globe } from 'lucide-react';
import { useState } from 'react';

const LogoIcon = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="borderGrad" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#3b82f6"/>
        <stop offset="50%" stopColor="#8b5cf6"/>
        <stop offset="100%" stopColor="#ec4899"/>
      </linearGradient>
      <linearGradient id="hubGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#3b82f6"/>
        <stop offset="100%" stopColor="#8b5cf6"/>
      </linearGradient>
    </defs>
    {/* Dark background */}
    <rect width="36" height="36" rx="8" fill="#090910"/>
    {/* Gradient border */}
    <rect width="35" height="35" x="0.5" y="0.5" rx="7.5" stroke="url(#borderGrad)" strokeWidth="1.2" fill="none"/>
    {/* Connection lines */}
    <line x1="18" y1="18" x2="18" y2="9" stroke="#3b82f6" strokeWidth="1.2" strokeOpacity="0.5"/>
    <line x1="18" y1="18" x2="25.8" y2="22.5" stroke="#ec4899" strokeWidth="1.2" strokeOpacity="0.5"/>
    <line x1="18" y1="18" x2="10.2" y2="22.5" stroke="#8b5cf6" strokeWidth="1.2" strokeOpacity="0.5"/>
    {/* Center hub */}
    <circle cx="18" cy="18" r="3.5" fill="url(#hubGrad)"/>
    {/* Outer nodes */}
    <circle cx="18" cy="9" r="2.2" fill="#3b82f6"/>
    <circle cx="25.8" cy="22.5" r="2.2" fill="#ec4899"/>
    <circle cx="10.2" cy="22.5" r="2.2" fill="#8b5cf6"/>
  </svg>
);

interface HeaderProps {
  onNavigateToConsole: () => void;
  onNavigateToHome: () => void;
}

export function Header({ onNavigateToConsole, onNavigateToHome }: HeaderProps) {
  const { language, toggleLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { key: 'nav.home', href: '#home' },
    { key: 'nav.models', href: '#models' },
    { key: 'nav.solutions', href: '#solutions' },
    { key: 'nav.pricing', href: '#pricing' },
    { key: 'nav.docs', href: '#docs' },
    { key: 'nav.about', href: '#about' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <button onClick={onNavigateToHome} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <LogoIcon />
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                GAIAAPI
              </div>
            </button>
            <div className="hidden sm:block text-sm text-gray-400">
              {t('brand.name')}
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map(item => (
              <a
                key={item.key}
                href={item.href}
                onClick={onNavigateToHome}
                className="text-sm text-gray-300 hover:text-white transition-colors"
              >
                {t(item.key)}
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-300 hover:text-white transition-colors"
            >
              <Globe className="w-4 h-4" />
              <span>{language === 'zh' ? 'EN' : '中文'}</span>
            </button>

            {/* Console Button */}
            <button
              onClick={onNavigateToConsole}
              className="hidden sm:inline-flex items-center px-4 py-2 text-sm bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:opacity-90 transition-opacity"
            >
              {t('nav.console')}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-gray-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <nav className="flex flex-col gap-4">
              {navItems.map(item => (
                <a
                  key={item.key}
                  href={item.href}
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                  onClick={() => {
                    onNavigateToHome();
                    setMobileMenuOpen(false);
                  }}
                >
                  {t(item.key)}
                </a>
              ))}
              <button
                onClick={() => {
                  onNavigateToConsole();
                  setMobileMenuOpen(false);
                }}
                className="text-sm text-blue-400 hover:text-blue-300 transition-colors text-left"
              >
                {t('nav.console')}
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
