import { useLanguage } from '../../contexts/LanguageContext';
import { Layers, Code2, GitBranch, TrendingDown, BarChart3, Sparkles } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export function CapabilitiesSection() {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollReveal();

  const capabilities = [
    { icon: Layers, titleKey: 'capabilities.multimodel.title', descKey: 'capabilities.multimodel.desc' },
    { icon: Code2, titleKey: 'capabilities.openai.title', descKey: 'capabilities.openai.desc' },
    { icon: GitBranch, titleKey: 'capabilities.routing.title', descKey: 'capabilities.routing.desc' },
    { icon: TrendingDown, titleKey: 'capabilities.cost.title', descKey: 'capabilities.cost.desc' },
    { icon: BarChart3, titleKey: 'capabilities.billing.title', descKey: 'capabilities.billing.desc' },
    { icon: Sparkles, titleKey: 'capabilities.multimodal.title', descKey: 'capabilities.multimodal.desc' }
  ];

  return (
    <section ref={ref} className="py-12 md:py-16 lg:py-24 bg-gradient-to-b from-white via-gray-50 to-white dark:from-black dark:via-gray-900 dark:to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-8 md:mb-12 lg:mb-16 transition-all duration-600 ${isVisible ? 'animate-[fadeInUp_0.6s_ease-out_both]' : 'opacity-0'}`}>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('capabilities.title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <div
                key={index}
                className={`group relative bg-gray-100 dark:bg-white/5 backdrop-blur border border-gray-200 dark:border-white/10 rounded-xl p-5 md:p-6 hover:bg-gray-200 dark:hover:bg-white/10 hover:border-gray-300 dark:hover:border-white/20 transition-all duration-300 cursor-pointer hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/10 ${isVisible ? 'animate-[staggerIn_0.6s_ease-out_both]' : 'opacity-0'}`}
                style={{ animationDelay: isVisible ? `${index * 0.05}s` : '0s' }}
              >
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="flex-shrink-0 p-2.5 md:p-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all">
                    <Icon className="w-5 h-5 md:w-6 md:h-6 text-blue-400" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-base md:text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {t(capability.titleKey)}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">
                      {t(capability.descKey)}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
