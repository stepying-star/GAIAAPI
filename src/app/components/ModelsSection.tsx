import { useLanguage } from '../../contexts/LanguageContext';
import { MessageSquare, Image, Video, Mic, Database, ArrowRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export function ModelsSection() {
  const { t, language } = useLanguage();
  const { ref, isVisible } = useScrollReveal();

  const modelCategories = [
    { icon: MessageSquare, key: 'models.text', count: 40, color: 'from-blue-400 to-blue-600' },
    { icon: Image, key: 'models.image', count: 25, color: 'from-purple-400 to-purple-600' },
    { icon: Video, key: 'models.video', count: 15, color: 'from-pink-400 to-pink-600' },
    { icon: Mic, key: 'models.audio', count: 12, color: 'from-green-400 to-green-600' },
    { icon: Database, key: 'models.embedding', count: 18, color: 'from-yellow-400 to-yellow-600' }
  ];

  const popularModels = [
    { name: 'GPT-4o Image', price: 450, unit: language === 'zh' ? '点/次' : 'pts/call' },
    { name: 'Kling 3.0', price: 1200, unit: language === 'zh' ? '点/次' : 'pts/call' },
    { name: 'Sora 2 Pro', price: 2400, unit: language === 'zh' ? '点/次' : 'pts/call' },
    { name: 'AI Music Gen', price: 180, unit: language === 'zh' ? '点/次' : 'pts/call' },
    { name: 'GPT-4', price: null },
    { name: 'Claude 3.5', price: null },
    { name: 'Gemini Pro', price: null },
    { name: 'Llama 3', price: null },
    { name: 'DALL-E 3', price: null },
    { name: 'Midjourney', price: null },
    { name: 'Whisper', price: null },
    { name: 'ElevenLabs', price: null }
  ];

  return (
    <section ref={ref} id="models" className="py-12 md:py-16 lg:py-24 bg-gray-50 dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-8 md:mb-12 lg:mb-16 transition-all duration-600 ${isVisible ? 'animate-[fadeInUp_0.6s_ease-out_both]' : 'opacity-0'}`}>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('models.title')}
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-400">
            {t('models.subtitle')}
          </p>
        </div>

        {/* Model Categories */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4 mb-8 md:mb-12">
          {modelCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className={`group relative bg-gradient-to-b from-gray-100 to-white dark:from-white/10 dark:to-white/5 border border-gray-200 dark:border-white/10 rounded-xl p-4 md:p-6 hover:border-gray-300 dark:hover:border-white/20 transition-all duration-300 cursor-pointer hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/10 ${isVisible ? 'animate-[staggerIn_0.6s_ease-out_both]' : 'opacity-0'}`}
                style={{ animationDelay: isVisible ? `${index * 0.05}s` : '0s' }}
              >
                <div className={`inline-flex p-2 md:p-3 bg-gradient-to-r ${category.color} rounded-lg mb-3 md:mb-4`}>
                  <Icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <div className="text-gray-900 dark:text-white font-semibold mb-1 text-sm md:text-base">
                  {t(category.key)}
                </div>
                <div className="text-xl md:text-2xl font-bold text-gray-700 dark:text-gray-300">
                  {category.count}+
                </div>
              </div>
            );
          })}
        </div>

        {/* Popular Models Tags */}
        <div className="bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl p-6 md:p-8 mb-6 md:mb-8">
          <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">Popular Models</div>
          <div className="flex flex-wrap gap-2 md:gap-3">
            {popularModels.map((model, index) => (
              <span
                key={index}
                className="relative px-3 md:px-4 py-2 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/20 rounded-lg text-xs md:text-sm text-gray-900 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/10 hover:border-gray-300 dark:hover:border-white/30 transition-all cursor-pointer"
              >
                {model.name}
                {model.price && (
                  <span className="ml-2 px-2 py-0.5 bg-purple-500/20 text-purple-600 dark:text-purple-300 text-xs rounded">
                    {model.price}{model.unit}
                  </span>
                )}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:opacity-90 transition-opacity w-full sm:w-auto justify-center">
            {t('models.cta')}
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
