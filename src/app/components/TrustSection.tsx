import { useLanguage } from '../../contexts/LanguageContext';
import { Shield, Activity, BarChart2, Users } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export function TrustSection() {
  const { t, language } = useLanguage();
  const { ref, isVisible } = useScrollReveal();

  const trustFactors = [
    {
      icon: Shield,
      key: 'trust.stability',
      desc: language === 'zh'
        ? '默认遵循最小必要原则处理提供服务所需的信息，企业客户可进一步沟通数据处理需求。'
        : 'We aim to process only the information required to provide the service, with further data handling options available for enterprise customers.'
    },
    {
      icon: Activity,
      key: 'trust.security',
      desc: language === 'zh'
        ? '平台设计将遵循 API Key 管理与权限分层原则，后续支持企业级访问控制能力扩展。'
        : 'The platform is being designed with API key management, access boundaries, and account control in mind, with enterprise access control coming progressively.'
    },
    {
      icon: BarChart2,
      key: 'trust.support',
      desc: language === 'zh'
        ? '平台目标为提供稳定、可观测的模型接入服务，将逐步提供状态监控与用量管理能力。'
        : 'Our goal is to deliver stable, observable model access with progressive improvements to monitoring, logging, and usage management.'
    },
    {
      icon: Users,
      key: 'trust.sla',
      desc: language === 'zh'
        ? '支持企业咨询与定制化接入方案，可根据业务需求讨论私有化 / 混合架构方案。'
        : 'We support enterprise consultation and custom integration. Private or hybrid deployment discussions are available based on your business needs.'
    }
  ];

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-600 ${isVisible ? 'animate-[fadeInUp_0.6s_ease-out_both]' : 'opacity-0'}`}>
          <h2 className="text-4xl font-bold text-white mb-4">
            {t('trust.title')}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {language === 'zh'
              ? '我们理解企业客户对数据处理、权限边界与服务稳定性的关注。GAIAAPI 的平台设计将持续围绕安全、控制与可协作性进行完善。'
              : 'We recognize enterprise concerns around data handling, access boundaries, and service stability. GAIAAPI is being developed with these priorities in mind.'}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustFactors.map((factor, index) => {
            const Icon = factor.icon;
            return (
              <div
                key={index}
                className="flex flex-col p-6 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-white/20 transition-all"
              >
                <div className="p-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl mb-4 w-fit">
                  <Icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-base font-semibold text-white mb-2">
                  {t(factor.key)}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {factor.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
