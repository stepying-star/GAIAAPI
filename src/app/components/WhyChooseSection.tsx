import { useLanguage } from '../../contexts/LanguageContext';
import { DollarSign, Unlock, Activity } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export function WhyChooseSection() {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollReveal();

  const benefits = [
    {
      icon: DollarSign,
      titleKey: 'why.cost.title',
      descKey: 'why.cost.desc',
      color: 'from-green-400 to-emerald-500'
    },
    {
      icon: Unlock,
      titleKey: 'why.vendor.title',
      descKey: 'why.vendor.desc',
      color: 'from-blue-400 to-cyan-500'
    },
    {
      icon: Activity,
      titleKey: 'why.reliability.title',
      descKey: 'why.reliability.desc',
      color: 'from-purple-400 to-pink-500'
    }
  ];

  return (
    <section ref={ref} className="py-12 md:py-16 lg:py-24 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-8 md:mb-12 lg:mb-16 transition-all duration-600 ${isVisible ? 'animate-[fadeInUp_0.6s_ease-out_both]' : 'opacity-0'}`}>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('why.title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className={`group relative bg-gradient-to-b from-gray-100 to-white dark:from-white/5 dark:to-white/0 border border-gray-200 dark:border-white/10 rounded-2xl p-6 md:p-8 hover:border-gray-300 dark:hover:border-white/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/10 ${isVisible ? 'animate-[staggerIn_0.6s_ease-out_both]' : 'opacity-0'}`}
                style={{ animationDelay: isVisible ? `${index * 0.1}s` : '0s' }}
              >
                <div className={`inline-flex p-3 md:p-4 bg-gradient-to-r ${benefit.color} rounded-xl mb-4 md:mb-6`}>
                  <Icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3 md:mb-4">
                  {t(benefit.titleKey)}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm md:text-base">
                  {t(benefit.descKey)}
                </p>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 rounded-2xl transition-all duration-300"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
