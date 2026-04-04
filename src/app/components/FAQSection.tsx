import { useLanguage } from '../../contexts/LanguageContext';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export function FAQSection() {
  const { language } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { ref, isVisible } = useScrollReveal();

  const faqs = language === 'zh' ? [
    {
      question: 'GAIAAPI 是什么？',
      answer: 'GAIAAPI 是一个统一的 AI 模型接入平台，让开发者通过一个接口访问多种 AI 模型，包括文本、图像、音频和视频模型。我们提供 OpenAI 兼容的 API，支持智能路由和成本优化。'
    },
    {
      question: 'GAIA词元 和 GAIA API MART 是同一个产品吗？',
      answer: '是的，GAIA词元是我们的中文品牌名，GAIA API MART 是英文国际化品牌名，但都指向同一个产品 GAIAAPI。我们使用双品牌策略来更好地服务不同市场的用户。'
    },
    {
      question: '是否兼容 OpenAI SDK？',
      answer: '完全兼容！您只需要修改 base_url 为我们的 API 地址，无需修改任何其他代码。支持 Python、Node.js、Go 等所有 OpenAI 官方 SDK。'
    },
    {
      question: '如何帮助企业降低成本？',
      answer: '我们通过智能路由根据任务类型自动选择性价比最优的模型，避免所有请求都使用最贵的模型。同时支持多个模型供应商，让您能够灵活选择价格更优的替代方案。'
    },
    {
      question: '是否支持企业级合作？',
      answer: '支持！我们提供企业级 SLA、专属技术支持、定制路由策略、私有化部署等服务。欢迎联系我们的销售团队了解详情。'
    }
  ] : [
    {
      question: 'What is GAIAAPI?',
      answer: 'GAIAAPI is a unified AI model access platform that lets developers access multiple AI models through a single interface, including text, image, audio, and video models. We provide OpenAI-compatible APIs with intelligent routing and cost optimization.'
    },
    {
      question: 'Are GAIA词元 and GAIA API MART the same product?',
      answer: 'Yes, GAIA词元 is our Chinese brand name and GAIA API MART is our English international brand name, but both refer to the same product GAIAAPI. We use a dual-brand strategy to better serve users in different markets.'
    },
    {
      question: 'Is it compatible with OpenAI SDK?',
      answer: 'Fully compatible! You only need to change the base_url to our API address without modifying any other code. Supports all official OpenAI SDKs including Python, Node.js, Go, and more.'
    },
    {
      question: 'How does it help reduce costs?',
      answer: 'We use intelligent routing to automatically select the most cost-effective model based on task type, avoiding using the most expensive model for all requests. We also support multiple model providers, allowing you to flexibly choose more affordable alternatives.'
    },
    {
      question: 'Do you support enterprise partnerships?',
      answer: 'Yes! We provide enterprise SLA, dedicated technical support, custom routing strategies, private deployment, and more. Contact our sales team for details.'
    }
  ];

  return (
    <section ref={ref} className="py-24 bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-600 ${isVisible ? 'animate-[fadeInUp_0.6s_ease-out_both]' : 'opacity-0'}`}>
          <h2 className="text-4xl font-bold text-white mb-4">
            {language === 'zh' ? '常见问题' : 'Frequently Asked Questions'}
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-white/20 transition-all"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="text-lg font-semibold text-white pr-8">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-400 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
