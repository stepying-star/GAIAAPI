import { useLanguage } from '../../contexts/LanguageContext';
import { Zap, Shield, Gauge, Lock, Key, Code2 } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export function TrustSection() {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollReveal();

  const trustFactors = [
    { icon: Zap, key: 'trust.routing', descKey: 'trust.routing.desc' },
    { icon: Shield, key: 'trust.sla', descKey: 'trust.sla.desc' },
    { icon: Gauge, key: 'trust.latency', descKey: 'trust.latency.desc' },
    { icon: Lock, key: 'trust.security', descKey: 'trust.security.desc' },
    { icon: Key, key: 'trust.apikey', descKey: 'trust.apikey.desc' },
    { icon: Code2, key: 'trust.switch', descKey: 'trust.switch.desc' }
  ];

  return (
    <section ref={ref} className="py-12 md:py-16 lg:py-24 bg-gradient-to-b from-white via-gray-50 to-white dark:from-black dark:via-gray-900 dark:to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-8 md:mb-12 lg:mb-16 transition-all duration-600 ${isVisible ? 'animate-[fadeInUp_0.6s_ease-out_both]' : 'opacity-0'}`}>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('trust.title')}
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto px-4">
            {t('trust.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {trustFactors.map((factor, index) => {
            const Icon = factor.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center p-5 md:p-6 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl hover:bg-gray-200 dark:hover:bg-white/10 hover:border-gray-300 dark:hover:border-white/20 transition-all"
              >
                <div className="p-3 md:p-4 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full mb-3 md:mb-4">
                  <Icon className="w-6 h-6 md:w-8 md:h-8 text-blue-400" />
                </div>
                <h3 className="text-base md:text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {t(factor.key)}
                </h3>
                <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {t(factor.descKey)}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-12 md:mt-16">
          {[
            { value: '30+', label: t('trust.title') === '为什么选择 GAIAAPI' ? '主流模型' : 'AI Models' },
            { value: '50ms', label: t('trust.title') === '为什么选择 GAIAAPI' ? '平均延迟' : 'Avg Latency' },
            { value: '30%+', label: t('trust.title') === '为什么选择 GAIAAPI' ? '成本优化' : 'Cost Savings' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-gray-600 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
