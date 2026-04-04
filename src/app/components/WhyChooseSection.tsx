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
    <section ref={ref} className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-600 ${isVisible ? 'animate-[fadeInUp_0.6s_ease-out_both]' : 'opacity-0'}`}>
          <h2 className="text-4xl font-bold text-white mb-4">
            {t('why.title')}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className={`group relative bg-gradient-to-b from-white/5 to-white/0 border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/10 ${isVisible ? 'animate-[staggerIn_0.6s_ease-out_both]' : 'opacity-0'}`}
                style={{ animationDelay: isVisible ? `${index * 0.1}s` : '0s' }}
              >
                <div className={`inline-flex p-4 bg-gradient-to-r ${benefit.color} rounded-xl mb-6`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">
                  {t(benefit.titleKey)}
                </h3>

                <p className="text-gray-400 leading-relaxed">
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
