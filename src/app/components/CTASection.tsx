import { useLanguage } from '../../contexts/LanguageContext';
import { ArrowRight, Mail } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export function CTASection() {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="py-12 md:py-16 lg:py-24 bg-gradient-to-b from-white via-gray-50 to-white dark:from-black dark:via-gray-900 dark:to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`relative overflow-hidden bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 border border-gray-300 dark:border-white/20 rounded-2xl md:rounded-3xl p-8 md:p-12 lg:p-16 transition-all duration-600 ${isVisible ? 'animate-[fadeInUp_0.6s_ease-out_both]' : 'opacity-0'}`}>
          {/* Background Effects */}
          <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 md:w-96 h-64 md:h-96 bg-purple-500/20 rounded-full blur-3xl"></div>

          <div className="relative text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6">
              {t('cta.title')}
            </h2>

            <div className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-center gap-3 md:gap-4 mt-6 md:mt-8">
              <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:opacity-90 transition-opacity text-base md:text-lg font-semibold">
                {t('cta.getkey')}
                <ArrowRight className="w-5 h-5" />
              </button>

              <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-gray-200 dark:bg-white/10 border border-gray-300 dark:border-white/20 text-gray-900 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-white/20 transition-colors text-base md:text-lg font-semibold">
                {t('hero.cta.docs')}
              </button>

              <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-gray-200 dark:bg-white/10 border border-gray-300 dark:border-white/20 text-gray-900 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-white/20 transition-colors text-base md:text-lg font-semibold">
                <Mail className="w-5 h-5" />
                {t('cta.contact')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
