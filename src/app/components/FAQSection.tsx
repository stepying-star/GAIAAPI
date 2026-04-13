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
      answer: 'GAIAAPI是品牌英文名称(国际化品牌标识), GAIA词元是品牌中文名称(中国市场品牌标识), GAIA API MART是本平台的产品名称统一聚合多家AI模型提供开发者友好的API调用服务'
    },
    {
      question: '是否兼容 OpenAI 风格接口？',
      answer: '是的。只需将 base_url 替换为 GAIAAPI 的地址，即可快速完成迁移与接入，无需修改其他代码逻辑。'
    },
    {
      question: '如何帮助控制模型使用成本？',
      answer: '支持根据任务复杂度与业务目标，将不同请求路由至更合适的模型，避免所有任务都默认调用高成本模型。'
    },
    {
      question: '是否支持企业客户合作？',
      answer: '支持。可进一步沟通接入方式、服务边界与项目支持方案，如有需要可讨论 NDA、服务范围或定制化集成支持。'
    },
    {
      question: '是否支持中文与国际客户？',
      answer: '支持。GAIAAPI 采用双品牌与双语言策略，中文市场以 GAIA词元 呈现，国际市场以 GAIA API MART 呈现。'
    },
    {
      question: '是否提供定制方案？',
      answer: '可以。对于有特定需求的企业客户，支持讨论定制路由策略、私有化/混合架构方案及专属接入支持。'
    }
  ] : [
    {
      question: 'What is the relationship between GAIAAPI, GAIA词元, and GAIA API MART?',
      answer: 'GAIAAPI is our English brand name (international identity), GAIA词元 is our Chinese brand name (Chinese market identity), and GAIA API MART is our product name — a unified platform aggregating AI models to provide developer-friendly API services.'
    },
    {
      question: 'Is it compatible with OpenAI-style APIs?',
      answer: 'Yes. Just replace the base_url with the GAIAAPI endpoint — no other code changes required.'
    },
    {
      question: 'How does it help control model usage costs?',
      answer: 'GAIAAPI supports routing requests to more appropriate models based on task complexity and business goals, avoiding the default of calling high-cost models for every task.'
    },
    {
      question: 'Do you support enterprise partnerships?',
      answer: 'Yes. We can discuss integration approaches, service boundaries, and implementation support. NDA discussions and project-based support are available upon request.'
    },
    {
      question: 'Do you support both Chinese and international customers?',
      answer: 'Yes. GAIAAPI uses a dual-brand and bilingual strategy — GAIA词元 for Chinese contexts and GAIA API MART for international markets.'
    },
    {
      question: 'Do you offer custom solutions?',
      answer: 'Yes. We can discuss custom routing strategies, private or hybrid deployment options, and dedicated integration support for enterprise customers.'
    }
  ];

  return (
    <section ref={ref} className="py-12 md:py-16 lg:py-24 bg-gray-50 dark:bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-8 md:mb-12 lg:mb-16 transition-all duration-600 ${isVisible ? 'animate-[fadeInUp_0.6s_ease-out_both]' : 'opacity-0'}`}>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {language === 'zh' ? '常见问题' : 'Frequently Asked Questions'}
          </h2>
        </div>

        <div className="space-y-3 md:space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl overflow-hidden hover:border-gray-300 dark:hover:border-white/20 transition-all"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-4 md:p-6 text-left"
              >
                <span className="text-base md:text-lg font-semibold text-gray-900 dark:text-white pr-4 md:pr-8">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 dark:text-gray-400 flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-4 md:px-6 pb-4 md:pb-6">
                  <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
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
