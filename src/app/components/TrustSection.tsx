import { useLanguage } from '../../contexts/LanguageContext';
import { Shield, Activity, Headphones, FileCheck } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export function TrustSection() {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollReveal();

  const trustFactors = [
    { icon: Activity, key: 'trust.stability' },
    { icon: Shield, key: 'trust.security' },
    { icon: Headphones, key: 'trust.support' },
    { icon: FileCheck, key: 'trust.sla' }
  ];

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-600 ${isVisible ? 'animate-[fadeInUp_0.6s_ease-out_both]' : 'opacity-0'}`}>
          <h2 className="text-4xl font-bold text-white mb-4">
            {t('trust.title')}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustFactors.map((factor, index) => {
            const Icon = factor.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-white/20 transition-all"
              >
                <div className="p-4 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full mb-4">
                  <Icon className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {t(factor.key)}
                </h3>
              </div>
            );
          })}
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {[
            { value: '99.9%', label: 'Uptime SLA' },
            { value: '< 200ms', label: 'Avg Response Time' },
            { value: '24/7', label: 'Technical Support' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
