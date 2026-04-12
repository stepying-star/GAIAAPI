import { useLanguage } from '../../contexts/LanguageContext';
import { useScrollReveal } from '../hooks/useScrollReveal';

export function RateLimitsSection() {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollReveal();

  const limits = [
    {
      title: language === 'zh' ? '标准速率限制' : 'Standard Rate Limit',
      value: language === 'zh' ? '60 RPM / 并发10' : '60 RPM / 10 Concurrent',
      description: language === 'zh' ? '默认限制，可申请提升' : 'Default limit, upgradable'
    },
    {
      title: language === 'zh' ? '企业速率限制' : 'Enterprise Rate Limit',
      value: language === 'zh' ? '600 RPM / 并发100' : '600 RPM / 100 Concurrent',
      description: language === 'zh' ? '联系销售定制' : 'Contact sales for custom'
    },
    {
      title: language === 'zh' ? '流式响应' : 'Streaming Response',
      value: language === 'zh' ? '支持SSE流式输出' : 'SSE Streaming Support',
      description: language === 'zh' ? '低延迟实时体验' : 'Low latency real-time'
    },
    {
      title: language === 'zh' ? '全球加速' : 'Global Acceleration',
      value: language === 'zh' ? 'CDN+多区域节点' : 'CDN + Multi-region',
      description: language === 'zh' ? '就近接入降低延迟' : 'Reduced latency worldwide'
    }
  ];

  return (
    <section ref={ref} className="py-16 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 transition-all duration-600 ${isVisible ? 'animate-[fadeInUp_0.6s_ease-out_both]' : 'opacity-0'}`}>
          <h2 className="text-3xl font-bold text-white mb-4">
            {language === 'zh' ? '速率与可靠性' : 'Rate Limits & Reliability'}
          </h2>
        </div>
        <div className="grid md:grid-cols-4 gap-6">
          {limits.map((limit, index) => (
            <div
              key={index}
              className="bg-gray-900/50 backdrop-blur border border-white/10 rounded-xl p-6 text-center hover:border-purple-500/50 transition-all"
            >
              <h3 className="text-lg font-semibold text-white mb-3">{limit.title}</h3>
              <div className="text-2xl font-bold text-purple-400 mb-2">{limit.value}</div>
              <p className="text-sm text-gray-400">{limit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
