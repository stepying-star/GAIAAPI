import { useLanguage } from '../../contexts/LanguageContext';
import { Check, X, Calculator } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useState } from 'react';

export function PricingSection() {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollReveal();
  const [tokenVolume, setTokenVolume] = useState(10);

  // Calculate estimated monthly cost based on token volume (M tokens)
  const calculateCost = (millions: number) => {
    const gaiaPer1k = 0.168; // $0.168 per 1K tokens (20% cheaper than GPT-4)
    return ((millions * 1000000 / 1000) * gaiaPer1k).toFixed(0);
  };

  // Calculate GPT-4 direct cost
  const calculateGPT4Cost = (millions: number) => {
    const gpt4Per1k = 0.21; // $0.21 per 1K tokens
    return ((millions * 1000000 / 1000) * gpt4Per1k).toFixed(0);
  };

  const gaiaCost = parseFloat(calculateCost(tokenVolume));
  const gpt4Cost = parseFloat(calculateGPT4Cost(tokenVolume));
  const savings = gpt4Cost - gaiaCost;

  const pricingPlans = [
    {
      name: language === 'zh' ? 'Free 免费版' : 'Free',
      subtitle: language === 'zh' ? '个人开发者' : 'For Individuals',
      price: language === 'zh' ? '¥0' : '$0',
      period: language === 'zh' ? '/月' : '/month',
      features: [
        language === 'zh' ? '100K Tokens 免费额度' : '100K Tokens free credit',
        language === 'zh' ? '基础模型' : 'Basic models',
        language === 'zh' ? '社区支持' : 'Community support',
        language === 'zh' ? '1 个 API Key' : '1 API Key',
      ],
      buttonText: language === 'zh' ? '立即注册' : 'Sign Up',
      buttonStyle: 'border',
      highlighted: false,
    },
    {
      name: language === 'zh' ? 'Pro 专业版' : 'Pro',
      subtitle: language === 'zh' ? '团队与企业' : 'For Teams',
      price: language === 'zh' ? '按量计费' : 'Pay-as-you-go',
      period: '',
      features: [
        language === 'zh' ? '50+ 模型' : '50+ models',
        language === 'zh' ? '智能路由省30%' : 'Smart routing saves 30%',
        language === 'zh' ? '优先技术支持' : 'Priority support',
        language === 'zh' ? '用量监控' : 'Usage monitoring',
        language === 'zh' ? '5 个 API Key' : '5 API Keys',
      ],
      buttonText: language === 'zh' ? '开始使用' : 'Get Started',
      buttonStyle: 'primary',
      highlighted: true,
      badge: language === 'zh' ? '推荐' : 'Recommended',
    },
    {
      name: language === 'zh' ? 'Enterprise 企业版' : 'Enterprise',
      subtitle: language === 'zh' ? '大型企业' : 'For Enterprises',
      price: language === 'zh' ? '联系销售' : 'Contact Sales',
      period: '',
      features: [
        language === 'zh' ? 'SLA 保障' : 'SLA guarantee',
        language === 'zh' ? '7x24 客服' : '7x24 support',
        language === 'zh' ? 'VPC 私有化' : 'VPC deployment',
        language === 'zh' ? '定制微调' : 'Custom fine-tuning',
        language === 'zh' ? '无限 API Key' : 'Unlimited API Keys',
      ],
      buttonText: language === 'zh' ? '联系销售' : 'Contact Sales',
      buttonStyle: 'enterprise',
      highlighted: false,
    },
  ];

  return (
    <section id="pricing" ref={ref} className="py-12 md:py-16 lg:py-24 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-8 md:mb-12 transition-all duration-600 ${isVisible ? 'animate-[fadeInUp_0.6s_ease-out_both]' : 'opacity-0'}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {language === 'zh' ? '定价' : 'Pricing'}
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-400 mb-8">
            {language === 'zh' ? '面向开发者、AI初创企业与大型企业的灵活方案' : 'Flexible plans for developers, AI startups, and enterprises'}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 mb-12">
            <button
              onClick={() => window.open('https://console.gaiagenx.com/register', '_blank')}
              className="w-full sm:w-auto px-6 md:px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
            >
              {language === 'zh' ? '立即开始' : 'Get Started'}
            </button>
            <button
              onClick={() => window.open('mailto:sales@gaiagenx.com', '_blank')}
              className="w-full sm:w-auto px-6 md:px-8 py-3 bg-white dark:bg-gray-900 text-gray-900 dark:text-white font-semibold rounded-lg border-2 border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600 transition-colors"
            >
              {language === 'zh' ? '联系销售' : 'Contact Sales'}
            </button>
          </div>
        </div>

        {/* Token Calculator */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-800 p-6 md:p-8 mb-12">
          <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
            <Calculator className="w-6 h-6 text-purple-500" />
            {language === 'zh' ? '价格计算器' : 'Pricing Calculator'}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
            {/* Slider */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                {language === 'zh' ? '每月 Token 用量（百万）' : 'Monthly Token Volume (Millions)'}
              </label>
              <div className="flex items-center gap-4">
                <input
                  type="range"
                  min="1"
                  max="100"
                  value={tokenVolume}
                  onChange={(e) => setTokenVolume(Number(e.target.value))}
                  className="flex-1 h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-600"
                />
                <span className="text-purple-600 dark:text-purple-400 font-bold min-w-[80px] text-lg">
                  {tokenVolume}M
                </span>
              </div>
              <div className="flex justify-between text-xs text-gray-400 mt-2">
                <span>1M</span>
                <span>50M</span>
                <span>100M+</span>
              </div>
            </div>

            {/* Estimated Cost */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                {language === 'zh' ? '预估月费用' : 'Estimated Monthly Cost'}
              </label>
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-lg p-6 border border-purple-200 dark:border-purple-800">
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  {language === 'zh' ? '¥' : '$'}{gaiaCost.toFixed(0)}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  {language === 'zh' ? `每百万 Token 约 ¥${(gaiaCost / tokenVolume).toFixed(0)}` : `~$${(gaiaCost / tokenVolume).toFixed(0)} per 1M tokens`}
                </div>
              </div>
            </div>
          </div>

          {/* Cost Comparison */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4 text-center border border-red-200 dark:border-red-800">
              <div className="text-xs text-red-600 dark:text-red-400 mb-1">
                {language === 'zh' ? '直接用 GPT-4' : 'Direct GPT-4'}
              </div>
              <div className="text-2xl font-bold text-red-600 dark:text-red-400">
                {language === 'zh' ? '¥' : '$'}{gpt4Cost.toFixed(0)}
              </div>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4 text-center border-2 border-purple-300 dark:border-purple-700">
              <div className="text-xs text-purple-600 dark:text-purple-400 mb-1 font-medium">
                {language === 'zh' ? '使用 GAIA API' : 'Via GAIA API'}
              </div>
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                {language === 'zh' ? '¥' : '$'}{gaiaCost.toFixed(0)}
              </div>
            </div>
          </div>

          <div className="text-center mb-6">
            <span className="text-green-600 dark:text-green-400 font-semibold text-lg">
              {language === 'zh' ? `节省 ¥${savings.toFixed(0)}/月` : `Save $${savings.toFixed(0)}/month`}
            </span>
          </div>

          <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
            {language === 'zh'
              ? '中文约 1000 字 ≈ 1000 Tokens | 英文约 750 词 ≈ 1000 Tokens'
              : 'Chinese ~1000 chars ≈ 1000 Tokens | English ~750 words ≈ 1000 Tokens'}
          </p>

          <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-4">
            {language === 'zh'
              ? '💡 新用户注册即送 100K 免费 Tokens，无需绑卡'
              : '💡 New users get 100K free tokens, no credit card required'}
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 transition-all hover:scale-105 ${
                plan.highlighted
                  ? 'border-2 border-purple-300 dark:border-purple-700 shadow-xl'
                  : 'border border-gray-200 dark:border-gray-800'
              }`}
            >
              {/* Popular Badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-1.5 rounded-full text-sm font-semibold">
                    {plan.badge}
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{plan.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{plan.subtitle}</p>
              </div>

              {/* Pricing */}
              <div className="mb-6">
                {plan.priceDetail ? (
                  <>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{plan.price}</span>
                    <div className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                      {plan.priceDetail}
                    </div>
                    <span className="text-gray-500 dark:text-gray-400">{plan.period}</span>
                  </>
                ) : (
                  <>
                    <span className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                      {plan.price}
                    </span>
                    {plan.period && <span className="text-gray-500 dark:text-gray-400">{plan.period}</span>}
                  </>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => {
                  const featureText = typeof feature === 'string' ? feature : feature.text;
                  const isBold = typeof feature === 'object' && feature.bold;
                  return (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 dark:text-green-400 mt-0.5 flex-shrink-0" />
                      <span className={`text-gray-700 dark:text-gray-300 ${isBold ? 'font-semibold' : ''}`}>
                        {featureText}
                      </span>
                    </li>
                  );
                })}
              </ul>

              {/* CTA Button */}
              <button
                onClick={() => {
                  if (plan.name === 'Enterprise') {
                    window.open('mailto:sales@gaiagenx.com', '_blank');
                  } else {
                    window.open('https://console.gaiagenx.com/register', '_blank');
                  }
                }}
                className={`w-full py-3 px-4 rounded-xl font-semibold transition-all ${
                  plan.buttonStyle === 'primary'
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90 shadow-lg shadow-purple-200 dark:shadow-purple-900/30'
                    : plan.buttonStyle === 'enterprise'
                    ? 'border-2 border-purple-600 dark:border-purple-500 text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20'
                    : 'border-2 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-purple-500 dark:hover:border-purple-500 hover:text-purple-600 dark:hover:text-purple-400'
                }`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>

        {/* Payment Methods */}
        <div className="mt-12 text-center max-w-4xl mx-auto">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
            {language === 'zh' ? '支持支付宝、微信支付、信用卡、对公转账' : 'Alipay, WeChat Pay, Credit Card, Wire Transfer'}
          </p>

          <p className="text-xs text-gray-400 dark:text-gray-500">
            {language === 'zh' ? '可随时升级或降级，无合约限制' : 'Upgrade or downgrade anytime, no contract lock-in'}
          </p>
        </div>
      </div>
    </section>
  );
}
