import { useLanguage } from '../../contexts/LanguageContext';
import { Menu, X, Globe, Moon, Sun, Eye, EyeOff, ChevronDown, LogOut, Key, CreditCard, LayoutDashboard } from 'lucide-react';
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
  const [authModal, setAuthModal] = useState<'login' | 'signup' | null>(null);
  const [showPassword, setShowPassword] = useState(false);
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
    console.log('Login submitted');
    setIsAuthenticated(true);
    setAuthModal(null);
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Signup submitted');
    setIsAuthenticated(true);
    setAuthModal(null);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUserDropdownOpen(false);
    console.log('User logged out');
  };

  const navItems = [
    { key: 'nav.home', href: '#home' },
    { key: 'nav.models', href: '#models' },
    { key: 'nav.solutions', href: '#solutions' },
    { key: 'nav.pricing', href: '#pricing' },
    { key: 'nav.docs', href: '#docs' },
    { key: 'nav.about', href: '#about' },
  ];

  return (
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
              <a
                key={item.key}
                href={item.href}
                onClick={onNavigateToHome}
                className="text-sm text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                {t(item.key)}
              </a>
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

            {/* Auth Buttons or User Avatar */}
            {!isAuthenticated ? (
              <div className="hidden md:flex items-center gap-2">
                <button
                  onClick={() => setAuthModal('login')}
                  className="px-3 lg:px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white border border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500 rounded-lg transition-colors"
                >
                  {language === 'zh' ? '登录' : 'Log in'}
                </button>
                <button
                  onClick={() => setAuthModal('signup')}
                  className="px-3 lg:px-4 py-2 text-sm bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:opacity-90 transition-opacity"
                >
                  {language === 'zh' ? '注册' : 'Sign Up'}
                </button>
              </div>
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

            {/* Console Button (kept for backwards compatibility) - hidden on mobile */}
            <button
              onClick={onNavigateToConsole}
              className="hidden xl:inline-flex items-center px-4 py-2 text-sm bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:opacity-90 transition-opacity"
            >
              {t('nav.console')}
            </button>

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
                <a
                  key={item.key}
                  href={item.href}
                  className="text-sm text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors py-2"
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
                className="text-sm text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300 transition-colors text-left py-2"
              >
                {t('nav.console')}
              </button>
              {!isAuthenticated ? (
                <>
                  <div className="border-t border-gray-200 dark:border-gray-700 my-2"></div>
                  <button
                    onClick={() => {
                      setAuthModal('login');
                      setMobileMenuOpen(false);
                    }}
                    className="text-sm text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors text-left py-2"
                  >
                    {language === 'zh' ? '登录' : 'Log in'}
                  </button>
                  <button
                    onClick={() => {
                      setAuthModal('signup');
                      setMobileMenuOpen(false);
                    }}
                    className="w-full text-sm bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg py-2.5 hover:opacity-90 transition-opacity"
                  >
                    {language === 'zh' ? '注册' : 'Sign Up'}
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

      {/* Auth Modal Overlay */}
      {authModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          onClick={() => setAuthModal(null)}
        >
          <div
            className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 sm:p-8 max-w-md w-full relative max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setAuthModal(null)}
              className="absolute top-4 right-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Logo and Title */}
            <div className="text-center mb-6">
              <div className="flex justify-center mb-3">
                <LogoIcon />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                {authModal === 'login'
                  ? language === 'zh' ? '欢迎回来' : 'Welcome back'
                  : language === 'zh' ? '创建账户' : 'Create account'}
              </h2>
            </div>

            {/* Login Form */}
            {authModal === 'login' && (
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
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      required
                      className="w-full h-12 px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all"
                      placeholder={language === 'zh' ? '输入密码' : 'Enter your password'}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <div className="flex justify-end">
                  <button
                    type="button"
                    className="text-sm text-purple-500 dark:text-purple-400 hover:text-purple-600 dark:hover:text-purple-300 transition-colors"
                  >
                    {language === 'zh' ? '忘记密码？' : 'Forgot password?'}
                  </button>
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
                      {language === 'zh' ? '或' : 'or'}
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  className="w-full h-12 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-medium rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors flex items-center justify-center gap-2 border border-gray-300 dark:border-gray-700"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  {language === 'zh' ? '使用 Google 继续' : 'Continue with Google'}
                </button>

                <div className="text-center text-sm text-gray-600 dark:text-gray-400 mt-4">
                  {language === 'zh' ? '还没有账户？' : "Don't have an account?"}{' '}
                  <button
                    type="button"
                    onClick={() => setAuthModal('signup')}
                    className="text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    {language === 'zh' ? '注册' : 'Sign up'}
                  </button>
                </div>
              </form>
            )}

            {/* Signup Form */}
            {authModal === 'signup' && (
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
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      required
                      minLength={8}
                      className="w-full h-12 px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all"
                      placeholder={language === 'zh' ? '至少8位字符' : 'At least 8 characters'}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                    {language === 'zh' ? '密码强度：中等' : 'Password strength: Medium'}
                  </p>
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
                      {language === 'zh' ? '或' : 'or'}
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  className="w-full h-12 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-medium rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors flex items-center justify-center gap-2 border border-gray-300 dark:border-gray-700"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  {language === 'zh' ? '使用 Google 继续' : 'Continue with Google'}
                </button>

                <div className="text-center text-sm text-gray-600 dark:text-gray-400 mt-4">
                  {language === 'zh' ? '已有账户？' : 'Already have an account?'}{' '}
                  <button
                    type="button"
                    onClick={() => setAuthModal('login')}
                    className="text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    {language === 'zh' ? '登录' : 'Log in'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
