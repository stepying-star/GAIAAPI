import { useLanguage } from '../../contexts/LanguageContext';
import { useScrollReveal } from '../hooks/useScrollReveal';

export function TrustedBySection() {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollReveal();

  const industries = language === 'zh'
    ? ['机器人与自动化', '跨境电商', '企业数字化', 'AI基础设施', '教育科技']
    : ['Robotics & Automation', 'Cross-border E-commerce', 'Enterprise Digital', 'AI Infrastructure', 'EdTech'];

  return (
    <section ref={ref} id="trusted" className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center transition-all duration-600 ${isVisible ? 'animate-[fadeInUp_0.6s_ease-out_both]' : 'opacity-0'}`}>
          <h2 className="text-2xl font-bold text-gray-400 mb-12">
            {language === 'zh' ? '已有超过 2,000 家企业和开发者团队在使用' : 'Trusted by 2,000+ developers & teams'}
          </h2>

          {/* Row 1: Partner Logos */}
          <div className="flex flex-wrap justify-center items-center gap-x-14 gap-y-6 mb-8">
            {['RSS', 'GDCBEA', 'OVS', 'TechCorp Asia', 'CloudStart', 'ScaleX'].map((name) => (
              <span
                key={name}
                className="text-white font-semibold tracking-widest text-lg uppercase opacity-70 hover:opacity-100 transition-opacity cursor-default"
              >
                {name}
              </span>
            ))}
          </div>

          {/* Row 2: Industry Tags */}
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {industries.map((industry, index) => (
              <span
                key={index}
                className="text-xs text-gray-500 border border-gray-700 rounded-full px-3 py-1"
              >
                {industry}
              </span>
            ))}
          </div>

          {/* Footer Note */}
          <p className="text-xs text-gray-600 mt-6 text-center italic">
            {language === 'zh'
              ? '展示部分合作伙伴与机构，部分客户名称因保密协议不予显示。'
              : 'Selected partners and organisations shown. Some client names are not displayed due to confidentiality.'}
          </p>
        </div>
      </div>
    </section>
  );
}
