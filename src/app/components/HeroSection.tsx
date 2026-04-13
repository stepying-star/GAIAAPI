import { useLanguage } from '../../contexts/LanguageContext';
import { ArrowRight, Code2, Zap, DollarSign, Shield } from 'lucide-react';

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white dark:from-black dark:via-gray-900 dark:to-black">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-purple-500/10 dark:bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8">
            {/* Brand Badge */}
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-100 dark:bg-white/5 border border-gray-300 dark:border-white/10 rounded-full text-xs sm:text-sm text-gray-700 dark:text-gray-300 animate-[fadeInUp_0.4s_ease-out_both]">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              {t('brand.tagline')}
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-[fadeInUp_0.6s_ease-out_0.1s_both]">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                {t('hero.title')}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 dark:text-gray-300 animate-[fadeInUp_0.6s_ease-out_0.2s_both]">
              {t('hero.subtitle')}
            </p>

            {/* Description */}
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 animate-[fadeInUp_0.6s_ease-out_0.3s_both]">
              {t('hero.description')}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 animate-[fadeInUp_0.6s_ease-out_0.4s_both]">
              <button className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:opacity-90 transition-opacity w-full sm:w-auto">
                {t('hero.cta.start')}
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-100 dark:bg-white/5 border border-gray-300 dark:border-white/20 text-gray-900 dark:text-white rounded-lg hover:bg-gray-200 dark:hover:bg-white/10 transition-colors w-full sm:w-auto">
                {t('hero.cta.docs')}
              </button>
              <button className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-100 dark:bg-white/5 border border-gray-300 dark:border-white/20 text-gray-900 dark:text-white rounded-lg hover:bg-gray-200 dark:hover:bg-white/10 transition-colors w-full sm:w-auto">
                {t('hero.cta.demo')}
              </button>
            </div>

            {/* Feature Badges */}
            <div className="flex flex-wrap gap-2 sm:gap-3 animate-[fadeInUp_0.6s_ease-out_0.5s_both]">
              {['features.badge1', 'features.badge2', 'features.badge3', 'features.badge4'].map(badge => (
                <span
                  key={badge}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-100 dark:bg-white/5 border border-gray-300 dark:border-white/10 rounded-lg text-xs sm:text-sm text-gray-700 dark:text-gray-300"
                >
                  {t(badge)}
                </span>
              ))}
            </div>
          </div>

          {/* Right Content - Code Preview */}
          <div className="relative animate-[fadeInLeft_0.7s_ease-out_0.3s_both] mt-8 lg:mt-0">
            <div className="bg-gray-900 dark:bg-gray-900/50 backdrop-blur border border-gray-700 dark:border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-2xl">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 bg-red-500 rounded-full"></div>
                <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 bg-green-500 rounded-full"></div>
                <span className="ml-2 sm:ml-4 text-xs sm:text-sm text-gray-400">quick_start.py</span>
              </div>
              <pre className="text-xs sm:text-sm text-gray-300 overflow-x-auto">
                <code>{`from openai import OpenAI

client = OpenAI(
  base_url="https://api.gaiagenx.com/v1",
  api_key="YOUR_API_KEY"
)

response = client.chat.completions.create(
  model="gpt-4",
  messages=[
    {"role": "user", "content": "Hello!"}
  ]
)

print(response.choices[0].message.content)`}</code>
              </pre>

              {/* Floating Stats */}
              <div className="absolute -right-4 top-1/4 bg-gray-900 dark:bg-gray-900 border border-white/20 rounded-lg p-3 sm:p-4 shadow-xl hidden xl:block">
                <div className="flex items-center gap-2 sm:gap-3">
                  <Zap className="w-6 sm:w-8 h-6 sm:h-8 text-yellow-400" />
                  <div>
                    <div className="text-xs sm:text-sm text-gray-400">Response Time</div>
                    <div className="text-base sm:text-lg font-bold text-white">~200ms</div>
                  </div>
                </div>
              </div>

              <div className="absolute -left-4 bottom-1/4 bg-gray-900 dark:bg-gray-900 border border-white/20 rounded-lg p-3 sm:p-4 shadow-xl hidden xl:block">
                <div className="flex items-center gap-2 sm:gap-3">
                  <DollarSign className="w-6 sm:w-8 h-6 sm:h-8 text-green-400" />
                  <div>
                    <div className="text-xs sm:text-sm text-gray-400">Cost Saved</div>
                    <div className="text-base sm:text-lg font-bold text-white">~40%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
