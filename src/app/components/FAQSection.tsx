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
      question: 'GAIAAPI、GAIA词元、GAIA API MART 是什么关系？',
      answer: 'GAIAAPI 是统一产品名与主域名。GAIA词元 是我们在中文市场的品牌表达，强调模型调用、成本控制与本地化；GAIA API MART 是英文国际化品牌名，强调统一接入、模型聚合与开发者友好体验。三者指向同一个产品。'
    },
    {
      question: '是否兼容 OpenAI 风格接口？',
      answer: '是的。如果您已经熟悉 OpenAI 风格的接口调用方式，只需将 base_url 替换为 GAIAAPI 的地址，即可快速完成迁移与接入，无需修改其他代码逻辑。'
    },
    {
      question: '如何帮助控制模型使用成本？',
      answer: 'GAIAAPI 支持根据任务复杂度与业务目标，将不同请求路由至更合适的模型，避免所有任务都默认调用高成本模型。这有助于企业更合理地分配 AI 调用预算。'
    },
    {
      question: '是否支持企业客户合作？',
      answer: '支持。我们可以与企业客户进一步沟通接入方式、服务边界与项目支持方案。如有需要，可讨论 NDA、服务范围说明或定制化集成支持。'
    },
    {
      question: '是否支持中文与国际客户？',
      answer: '支持。GAIAAPI 采用双品牌与双语言策略，面向中文市场以 GAIA词元 呈现，面向国际市场以 GAIA API MART 呈现。我们的平台与文档同时支持中英文环境。'
    },
    {
      question: '是否提供定制方案？',
      answer: '可以。对于有特定需求的企业客户，我们支持讨论定制路由策略、私有化 / 混合架构方案及专属接入支持。请联系我们了解详情。'
    }
  ] : [
    {
      question: 'What is the relationship between GAIAAPI, GAIA词元, and GAIA API MART?',
      answer: 'GAIAAPI is the unified product name and main domain. GAIA词元 is our Chinese market brand, emphasizing model routing, cost control, and localization. GAIA API MART is our international brand, focusing on unified access, model aggregation, and developer experience. All three refer to the same product.'
    },
    {
      question: 'Is it compatible with OpenAI-style APIs?',
      answer: 'Yes. If your team already works with OpenAI-style APIs, you only need to replace the base_url with the GAIAAPI endpoint to complete integration — no other code changes required.'
    },
    {
      question: 'How does it help control model usage costs?',
      answer: 'GAIAAPI supports routing requests to more appropriate models based on task complexity and business goals, avoiding the default of calling high-cost models for every task. This helps enterprises allocate their AI budget more effectively.'
    },
    {
      question: 'Do you support enterprise partnerships?',
      answer: 'Yes. We can discuss integration approaches, service boundaries, and implementation support with enterprise customers. NDA discussions, service scoping, and project-based support are available upon request.'
    },
    {
      question: 'Do you support both Chinese and international customers?',
      answer: 'Yes. GAIAAPI uses a dual-brand and bilingual strategy — GAIA词元 for Chinese contexts and GAIA API MART for international markets. Our platform and documentation support both Chinese and English environments.'
    },
    {
      question: 'Do you offer custom solutions?',
      answer: 'Yes. For enterprise customers with specific requirements, we can discuss custom routing strategies, private or hybrid deployment options, and dedicated integration support. Please contact us to learn more.'
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
