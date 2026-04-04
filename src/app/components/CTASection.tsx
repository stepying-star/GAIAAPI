import { useLanguage } from '../../contexts/LanguageContext';
import { ArrowRight, Mail } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export function CTASection() {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`relative overflow-hidden bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 border border-white/20 rounded-3xl p-12 md:p-16 transition-all duration-600 ${isVisible ? 'animate-[fadeInUp_0.6s_ease-out_both]' : 'opacity-0'}`}>
          {/* Background Effects */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>

          <div className="relative text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              {t('cta.title')}
            </h2>

            <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
              <button className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:opacity-90 transition-opacity text-lg font-semibold">
                {t('cta.getkey')}
                <ArrowRight className="w-5 h-5" />
              </button>

              <button className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 border border-white/20 text-white rounded-lg hover:bg-white/20 transition-colors text-lg font-semibold">
                {t('hero.cta.docs')}
              </button>

              <button className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 border border-white/20 text-white rounded-lg hover:bg-white/20 transition-colors text-lg font-semibold">
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
