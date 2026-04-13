import { useLanguage } from '../../contexts/LanguageContext';
import { useState } from 'react';
import { Check } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export function PricingSection() {
  const { language } = useLanguage();
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const { ref, isVisible } = useScrollReveal();

  const plans = [
    {
      name: language === 'zh' ? '免费试用' : 'Free Trial',
      price: language === 'zh' ? '¥0' : '$0',
      period: language === 'zh' ? '/月' : '/month',
      credits: language === 'zh' ? '3,000点数/月' : '3,000 credits/month',
      features: language === 'zh'
        ? ['基础模型调用', '社区支持', '1个项目', '1个API Key']
        : ['Basic model calls', 'Community support', '1 project', '1 API Key'],
      button: language === 'zh' ? '免费注册' : 'Sign Up Free',
      highlighted: false
    },
    {
      name: language === 'zh' ? '专业版 Lv1' : 'Pro Lv1',
      price: billingCycle === 'monthly' ? (language === 'zh' ? '¥99' : '$14') : (language === 'zh' ? '¥79' : '$11'),
      period: language === 'zh' ? '/月' : '/month',
      credits: language === 'zh' ? '10,000点数/月' : '10,000 credits/month',
      features: language === 'zh'
        ? ['全部模型', '邮件支持', '3个项目', '3个API Key', '用量报告']
        : ['All models', 'Email support', '3 projects', '3 API Keys', 'Usage reports'],
      button: language === 'zh' ? '立即开始' : 'Get Started',
      highlighted: false
    },
    {
      name: language === 'zh' ? '专业版 Lv3' : 'Pro Lv3',
      price: billingCycle === 'monthly' ? (language === 'zh' ? '¥399' : '$56') : (language === 'zh' ? '¥319' : '$45'),
      period: language === 'zh' ? '/月' : '/month',
      credits: language === 'zh' ? '30,000点数/月' : '30,000 credits/month',
      features: language === 'zh'
        ? ['全部模型', '优先客服', '10个项目', '10个API Key', '团队协作', '用量报告导出']
        : ['All models', 'Priority support', '10 projects', '10 API Keys', 'Team collaboration', 'Export usage reports'],
      button: language === 'zh' ? '立即开始' : 'Get Started',
      highlighted: true,
      badge: language === 'zh' ? '最受欢迎' : 'Most Popular'
    },
    {
      name: language === 'zh' ? '企业版' : 'Enterprise',
      price: language === 'zh' ? '联系我们' : 'Contact Us',
      period: '',
      credits: language === 'zh' ? '点数按需定制' : 'Custom credits',
      features: language === 'zh'
        ? ['专属模型配置', '企业级SLA', '专属客户经理', '私有化部署咨询', 'SSO支持']
        : ['Dedicated model config', 'Enterprise SLA', 'Dedicated account manager', 'Private deployment', 'SSO support'],
      button: language === 'zh' ? '联系销售' : 'Contact Sales',
      highlighted: false
    }
  ];

  const topups = [
    { credits: '5,000', price: language === 'zh' ? '¥125' : '$18', unit: language === 'zh' ? '¥0.025/点' : '$0.0036/pt' },
    { credits: '10,000', price: language === 'zh' ? '¥230' : '$33', unit: language === 'zh' ? '¥0.023/点' : '$0.0033/pt', badge: language === 'zh' ? '省8%' : 'Save 8%' },
    { credits: '20,000', price: language === 'zh' ? '¥420' : '$60', unit: language === 'zh' ? '¥0.021/点' : '$0.0030/pt', badge: language === 'zh' ? '省16%' : 'Save 16%' }
  ];

  return (
    <section id="pricing" ref={ref} className="py-12 md:py-16 lg:py-24 bg-gradient-to-b from-white via-gray-50 to-white dark:from-black dark:via-gray-900 dark:to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-8 md:mb-12 transition-all duration-600 ${isVisible ? 'animate-[fadeInUp_0.6s_ease-out_both]' : 'opacity-0'}`}>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {language === 'zh' ? '简单透明的定价' : 'Simple, Transparent Pricing'}
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-400 mb-6 md:mb-8">
            {language === 'zh' ? '按点数消耗计费，订阅套餐+按需充值，灵活可控' : 'Pay per credit usage, subscription + top-up, flexible control'}
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center gap-2 md:gap-3 bg-gray-200 dark:bg-gray-800/50 border border-gray-300 dark:border-white/10 rounded-lg p-1">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-4 md:px-6 py-2 rounded-md text-xs md:text-sm transition-all ${
                billingCycle === 'monthly' ? 'bg-white dark:bg-white/10 text-gray-900 dark:text-white' : 'text-gray-600 dark:text-gray-400'
              }`}
            >
              {language === 'zh' ? '按月付费' : 'Monthly'}
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-4 md:px-6 py-2 rounded-md text-xs md:text-sm transition-all ${
                billingCycle === 'yearly' ? 'bg-white dark:bg-white/10 text-gray-900 dark:text-white' : 'text-gray-600 dark:text-gray-400'
              }`}
            >
              {language === 'zh' ? '按年付费' : 'Yearly'}
              <span className="ml-2 text-xs text-purple-500 dark:text-purple-400">
                {language === 'zh' ? '年付8折' : '20% off'}
              </span>
            </button>
          </div>
        </div>

        {/* Plan Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12 lg:mb-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-gray-100 dark:bg-gray-900/50 backdrop-blur border rounded-2xl p-5 md:p-6 transition-all hover:scale-105 ${
                plan.highlighted ? 'border-purple-500 shadow-2xl shadow-purple-500/20' : 'border-gray-200 dark:border-white/10'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-purple-600 text-white text-xs font-semibold rounded-full">
                  {plan.badge}
                </div>
              )}
              <div className="text-center mb-6">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-2">{plan.name}</h3>
                <div className="mb-2">
                  <span className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">{plan.price}</span>
                  <span className="text-gray-600 dark:text-gray-400">{plan.period}</span>
                </div>
                <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">{plan.credits}</p>
              </div>
              <ul className="space-y-2 md:space-y-3 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs md:text-sm text-gray-700 dark:text-gray-300">
                    <Check className="w-4 h-4 text-purple-500 dark:text-purple-400 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 rounded-lg text-sm font-semibold transition-all ${
                  plan.highlighted
                    ? 'bg-purple-600 text-white hover:bg-purple-700'
                    : 'bg-gray-200 dark:bg-white/10 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-white/20'
                }`}
              >
                {plan.button}
              </button>
            </div>
          ))}
        </div>

        {/* Top-up Credits */}
        <div className="bg-gray-100 dark:bg-gray-900/30 border border-gray-200 dark:border-white/10 rounded-2xl p-6 md:p-8">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6 text-center">
            {language === 'zh' ? '按需充值点数' : 'Top-up Credits'}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 mb-4">
            {topups.map((topup, index) => (
              <div key={index} className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-white/10 rounded-xl p-4 text-center">
                <div className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-1">
                  {topup.credits} {language === 'zh' ? '点数' : 'credits'}
                </div>
                <div className="text-2xl md:text-3xl font-bold text-purple-500 dark:text-purple-400 mb-1">{topup.price}</div>
                <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400 mb-2">{topup.unit}</div>
                {topup.badge && (
                  <span className="inline-block px-3 py-1 bg-green-500/20 text-green-600 dark:text-green-400 text-xs rounded-full">
                    {topup.badge}
                  </span>
                )}
              </div>
            ))}
          </div>
          <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 text-center">
            {language === 'zh' ? '💡 充值点数永不过期，优先消耗' : '💡 Top-up credits never expire and are used first'}
          </p>
        </div>
      </div>
    </section>
  );
}
