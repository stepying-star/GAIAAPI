import { useLanguage } from '../../contexts/LanguageContext';
import { ArrowRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export function PlaygroundBanner() {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`relative overflow-hidden rounded-2xl transition-all duration-600 ${isVisible ? 'animate-[fadeInUp_0.6s_ease-out_both]' : 'opacity-0'}`}>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-purple-600/20 blur-xl" />
          <div className="relative bg-gray-900/50 backdrop-blur border border-purple-500/30 p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                {language === 'zh' ? '无需代码，直接体验模型能力' : 'Try models without writing a single line of code'}
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                {language === 'zh'
                  ? '在 Playground 中输入 prompt，即时查看模型输出效果'
                  : 'Enter prompts in our Playground and see model outputs instantly'}
              </p>
              <button className="inline-flex items-center gap-2 px-8 py-4 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-all shadow-lg shadow-purple-500/50">
                {language === 'zh' ? '进入 Playground' : 'Open Playground'}
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
