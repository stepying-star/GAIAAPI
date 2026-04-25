import { useLanguage } from '../../contexts/LanguageContext';
import { Menu, X, Globe, Moon, Sun, LogOut, Key, CreditCard, LayoutDashboard, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';

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
  const [isDark, setIsDark] = useState(true);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authTab, setAuthTab] = useState<'login' | 'signup'>('login');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  // Initialize theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('gaiagenx-theme');
    const isDarkMode = savedTheme !== 'light';
    setIsDark(isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    if (newIsDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('gaiagenx-theme', newIsDark ? 'dark' : 'light');
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsAuthenticated(true);
    setShowAuthModal(false);
    onNavigateToConsole();
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    setIsAuthenticated(true);
    setShowAuthModal(false);
    onNavigateToConsole();
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUserDropdownOpen(false);
  };

  const handleConsoleClick = () => {
    if (isAuthenticated) {
      onNavigateToConsole();
    } else {
      setAuthTab('login');
      setShowAuthModal(true);
    }
  };

  const openLoginModal = () => {
    setAuthTab('login');
    setShowAuthModal(true);
  };

  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const navItems = [
    {
      key: 'nav.product',
      label: language === 'zh' ? '产品' : 'Product',
      dropdown: [
        { key: 'nav.models', label: language === 'zh' ? '模型广场' : 'Model Marketplace', href: '#models' },
        { key: 'nav.api', label: language === 'zh' ? 'API 接入' : 'API Integration', href: '#api' },
        { key: 'nav.routing', label: language === 'zh' ? '智能路由' : 'Smart Routing', href: '#routing' },
        { key: 'nav.usage', label: language === 'zh' ? '用量管理' : 'Usage Management', href: '#usage' },
      ]
    },
    { key: 'nav.pricing', label: language === 'zh' ? '定价' : 'Pricing', href: '#pricing' },
    { key: 'nav.docs', label: language === 'zh' ? '文档' : 'Docs', href: '#docs' },
    {
      key: 'nav.solutions',
      label: language === 'zh' ? '解决方案' : 'Solutions',
      dropdown: [
        { key: 'nav.content', label: language === 'zh' ? 'AI内容生成' : 'AI Content Generation', href: '#content' },
        { key: 'nav.knowledge', label: language === 'zh' ? '企业知识库' : 'Enterprise Knowledge', href: '#knowledge' },
        { key: 'nav.agent', label: language === 'zh' ? 'AI Agent' : 'AI Agent', href: '#agent' },
        { key: 'nav.global', label: language === 'zh' ? '海外市场' : 'Global Markets', href: '#global' },
      ]
    },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-black/80 backdrop-blur-lg border-b border-gray-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button onClick={onNavigateToHome} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <LogoIcon />
              <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                GAIAAPI
              </div>
            </button>
            <div className="hidden lg:block text-sm text-gray-500 dark:text-gray-400">
              {t('brand.name')}
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navItems.map(item => (
              item.dropdown ? (
                <div
                  key={item.key}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(item.key)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button className="flex items-center gap-1 text-sm text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                    {item.label}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  {openDropdown === item.key && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg shadow-xl py-2 z-50">
                      {item.dropdown.map(subItem => (
                        <a
                          key={subItem.key}
                          href={subItem.href}
                          onClick={onNavigateToHome}
                          className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white transition-colors"
                        >
                          {subItem.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={item.key}
                  href={item.href}
                  onClick={onNavigateToHome}
                  className="text-sm text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              )
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="w-9 h-9 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-all rounded-lg hover:bg-gray-100 dark:hover:bg-white/5"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Language Toggle - hidden on mobile */}
            <button
              onClick={toggleLanguage}
              className="hidden sm:flex items-center gap-2 px-3 py-1.5 text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <Globe className="w-4 h-4" />
              <span>{language === 'zh' ? 'EN' : '中文'}</span>
            </button>

            {/* Free Start Button */}
            <button
              onClick={() => window.open('https://console.gaiagenx.com/register', '_blank')}
              className="hidden md:inline-flex items-center px-4 py-2 text-sm bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:opacity-90 transition-opacity"
            >
              {language === 'zh' ? '免费开始' : 'Get Started Free'}
            </button>

            {/* Auth Button or User Avatar */}
            {!isAuthenticated ? (
              <button
                onClick={openLoginModal}
                className="hidden md:inline-flex px-3 lg:px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white border border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500 rounded-lg transition-colors"
              >
                {language === 'zh' ? '登录' : 'Log in'}
              </button>
            ) : (
              <div className="hidden md:block relative">
                <button
                  onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                  className="w-9 h-9 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-semibold hover:opacity-90 transition-opacity"
                >
                  G
                </button>

                {/* User Dropdown */}
                {userDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg shadow-xl overflow-hidden">
                    <button
                      onClick={() => {
                        onNavigateToConsole();
                        setUserDropdownOpen(false);
                      }}
                      className="w-full px-4 py-2.5 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white transition-colors flex items-center gap-2"
                    >
                      <LayoutDashboard className="w-4 h-4" />
                      {language === 'zh' ? '控制台' : 'Dashboard'}
                    </button>
                    <button
                      onClick={() => {
                        onNavigateToConsole();
                        setUserDropdownOpen(false);
                      }}
                      className="w-full px-4 py-2.5 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white transition-colors flex items-center gap-2"
                    >
                      <Key className="w-4 h-4" />
                      {language === 'zh' ? 'API 密钥' : 'API Keys'}
                    </button>
                    <button
                      onClick={() => {
                        onNavigateToConsole();
                        setUserDropdownOpen(false);
                      }}
                      className="w-full px-4 py-2.5 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white transition-colors flex items-center gap-2"
                    >
                      <CreditCard className="w-4 h-4" />
                      {language === 'zh' ? '账单' : 'Billing'}
                    </button>
                    <div className="border-t border-gray-200 dark:border-gray-800"></div>
                    <button
                      onClick={handleLogout}
                      className="w-full px-4 py-2.5 text-sm text-red-500 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-red-600 dark:hover:text-red-300 transition-colors flex items-center gap-2"
                    >
                      <LogOut className="w-4 h-4" />
                      {language === 'zh' ? '退出登录' : 'Log out'}
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200 dark:border-white/10 bg-white dark:bg-black">
            <nav className="flex flex-col gap-3">
              {navItems.map(item => (
                item.dropdown ? (
                  <div key={item.key}>
                    <div className="text-sm font-semibold text-gray-900 dark:text-white py-2">
                      {item.label}
                    </div>
                    <div className="pl-4 flex flex-col gap-2">
                      {item.dropdown.map(subItem => (
                        <a
                          key={subItem.key}
                          href={subItem.href}
                          className="text-sm text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors py-1"
                          onClick={() => {
                            onNavigateToHome();
                            setMobileMenuOpen(false);
                          }}
                        >
                          {subItem.label}
                        </a>
                      ))}
                    </div>
                  </div>
                ) : (
                  <a
                    key={item.key}
                    href={item.href}
                    className="text-sm text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors py-2"
                    onClick={() => {
                      onNavigateToHome();
                      setMobileMenuOpen(false);
                    }}
                  >
                    {item.label}
                  </a>
                )
              ))}
              <button
                onClick={() => {
                  window.open('https://console.gaiagenx.com/register', '_blank');
                  setMobileMenuOpen(false);
                }}
                className="text-sm bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg py-2.5 hover:opacity-90 transition-opacity"
              >
                {language === 'zh' ? '免费开始' : 'Get Started Free'}
              </button>
              {!isAuthenticated ? (
                <>
                  <div className="border-t border-gray-200 dark:border-gray-700 my-2"></div>
                  <button
                    onClick={() => {
                      openLoginModal();
                      setMobileMenuOpen(false);
                    }}
                    className="text-sm text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors text-left py-2"
                  >
                    {language === 'zh' ? '登录' : 'Log in'}
                  </button>
                </>
              ) : (
                <>
                  <div className="border-t border-gray-200 dark:border-gray-700 my-2"></div>
                  <button
                    onClick={() => {
                      onNavigateToConsole();
                      setMobileMenuOpen(false);
                    }}
                    className="text-sm text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors text-left py-2 flex items-center gap-2"
                  >
                    <LayoutDashboard className="w-4 h-4" />
                    {language === 'zh' ? '控制台' : 'Dashboard'}
                  </button>
                  <button
                    onClick={handleLogout}
                    className="text-sm text-red-500 dark:text-red-400 hover:text-red-600 dark:hover:text-red-300 transition-colors text-left py-2 flex items-center gap-2"
                  >
                    <LogOut className="w-4 h-4" />
                    {language === 'zh' ? '退出登录' : 'Log out'}
                  </button>
                </>
              )}
              <div className="border-t border-gray-200 dark:border-gray-700 my-2"></div>
              {/* Language Toggle in Mobile */}
              <button
                onClick={toggleLanguage}
                className="text-sm text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors text-left py-2 flex items-center gap-2"
              >
                <Globe className="w-4 h-4" />
                {language === 'zh' ? 'English' : '中文'}
              </button>
            </nav>
          </div>
        )}
        </div>
      </header>

      {/* Auth Modal Overlay */}
      {showAuthModal && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
          onClick={() => setShowAuthModal(false)}
        >
          <div
            className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl p-8 w-full max-w-md mx-4 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowAuthModal(false)}
              className="absolute top-4 right-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Logo */}
            <div className="flex justify-center mb-6">
              <LogoIcon />
            </div>

            {/* Tab Buttons */}
            <div className="flex gap-2 mb-6 bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
              <button
                onClick={() => setAuthTab('login')}
                className={`flex-1 py-2 text-sm font-medium rounded-md transition-all ${
                  authTab === 'login'
                    ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                {language === 'zh' ? '登录' : 'Log In'}
              </button>
              <button
                onClick={() => setAuthTab('signup')}
                className={`flex-1 py-2 text-sm font-medium rounded-md transition-all ${
                  authTab === 'signup'
                    ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                {language === 'zh' ? '注册' : 'Sign Up'}
              </button>
            </div>

            {/* Login Form */}
            {authTab === 'login' && (
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-600 dark:text-gray-400 mb-1.5">
                    {language === 'zh' ? '邮箱地址' : 'Email address'}
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full h-12 px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all"
                    placeholder={language === 'zh' ? '输入邮箱' : 'Enter your email'}
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-600 dark:text-gray-400 mb-1.5">
                    {language === 'zh' ? '密码' : 'Password'}
                  </label>
                  <input
                    type="password"
                    required
                    className="w-full h-12 px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all"
                    placeholder={language === 'zh' ? '输入密码' : 'Enter your password'}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full h-12 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
                >
                  {language === 'zh' ? '登录' : 'Log In'}
                </button>

                <div className="relative my-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300 dark:border-gray-700"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white dark:bg-gray-900 text-gray-500 dark:text-gray-400">
                      {language === 'zh' ? '或使用' : 'Or continue with'}
                    </span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button
                    type="button"
                    className="flex-1 h-11 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors flex items-center justify-center gap-2 border border-gray-300 dark:border-gray-700"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                  </button>
                  <button
                    type="button"
                    className="flex-1 h-11 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors flex items-center justify-center gap-2 border border-gray-300 dark:border-gray-700"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                    </svg>
                  </button>
                  <button
                    type="button"
                    className="flex-1 h-11 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors flex items-center justify-center gap-2 border border-gray-300 dark:border-gray-700"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                    </svg>
                  </button>
                </div>

                <div className="text-center text-sm text-gray-600 dark:text-gray-400 mt-4">
                  {language === 'zh' ? '还没有账户？' : "Don't have an account?"}{' '}
                  <button
                    type="button"
                    onClick={() => setAuthTab('signup')}
                    className="text-purple-500 dark:text-purple-400 hover:text-purple-600 dark:hover:text-purple-300 transition-colors"
                  >
                    {language === 'zh' ? '切换到注册' : 'Switch to Sign Up'}
                  </button>
                </div>
              </form>
            )}

            {/* Signup Form */}
            {authTab === 'signup' && (
              <form onSubmit={handleSignup} className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-600 dark:text-gray-400 mb-1.5">
                    {language === 'zh' ? '姓名' : 'Full Name'}
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full h-12 px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all"
                    placeholder={language === 'zh' ? '输入姓名' : 'Enter your name'}
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-600 dark:text-gray-400 mb-1.5">
                    {language === 'zh' ? '邮箱地址' : 'Email address'}
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full h-12 px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all"
                    placeholder={language === 'zh' ? '输入邮箱' : 'Enter your email'}
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-600 dark:text-gray-400 mb-1.5">
                    {language === 'zh' ? '密码' : 'Password'}
                  </label>
                  <input
                    type="password"
                    required
                    minLength={8}
                    className="w-full h-12 px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all"
                    placeholder={language === 'zh' ? '至少8位字符' : 'At least 8 characters'}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full h-12 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
                >
                  {language === 'zh' ? '创建账户' : 'Create Account'}
                </button>

                <div className="relative my-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300 dark:border-gray-700"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white dark:bg-gray-900 text-gray-500 dark:text-gray-400">
                      {language === 'zh' ? '或使用' : 'Or continue with'}
                    </span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button
                    type="button"
                    className="flex-1 h-11 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors flex items-center justify-center gap-2 border border-gray-300 dark:border-gray-700"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                  </button>
                  <button
                    type="button"
                    className="flex-1 h-11 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors flex items-center justify-center gap-2 border border-gray-300 dark:border-gray-700"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                    </svg>
                  </button>
                  <button
                    type="button"
                    className="flex-1 h-11 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors flex items-center justify-center gap-2 border border-gray-300 dark:border-gray-700"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                    </svg>
                  </button>
                </div>

                <div className="text-center text-sm text-gray-600 dark:text-gray-400 mt-4">
                  {language === 'zh' ? '已有账户？' : 'Already have an account?'}{' '}
                  <button
                    type="button"
                    onClick={() => setAuthTab('login')}
                    className="text-purple-500 dark:text-purple-400 hover:text-purple-600 dark:hover:text-purple-300 transition-colors"
                  >
                    {language === 'zh' ? '切换到登录' : 'Switch to Log In'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
