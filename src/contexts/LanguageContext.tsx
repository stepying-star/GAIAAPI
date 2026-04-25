import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'zh' | 'en';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  zh: {
    // Navigation
    'nav.home': '首页',
    'nav.models': '模型',
    'nav.solutions': '解决方案',
    'nav.pricing': '定价',
    'nav.docs': '文档',
    'nav.about': '关于我们',
    'nav.console': '控制台',
    'nav.login': '登录',

    // Console
    'console.description': '管理您的 API 密钥、查看使用情况并配置您的账户设置',

    // Brand
    'brand.name': 'GAIA词元',
    'brand.tagline': '统一接入多模型的 AI 接口平台',

    // Hero
    'hero.title': '一站式 AI 模型统一调用平台 — 30+ 模型，一个接口',
    'hero.subtitle': '让模型调用更灵活，让成本更可控。',
    'hero.description': 'GAIAAPI 帮助开发者与企业统一接入文本、图像、音频与视频模型，加快产品上线与业务落地。',
    'hero.cta.start': '申请试用',
    'hero.cta.docs': '查看文档',
    'hero.cta.demo': '联系合作',

    // Features
    'features.badge1': 'OpenAI Compatible',
    'features.badge2': '多模型路由',
    'features.badge3': '成本优化',
    'features.badge4': '企业级',

    // Why Choose
    'why.title': '为什么选择 GAIAAPI',
    'why.cost.title': '一个接口，连接多种模型',
    'why.cost.desc': '无需为不同模型厂商重复开发，统一接入文本、图像、音频与视频能力。',
    'why.vendor.title': '更灵活地控制调用成本',
    'why.vendor.desc': '不必默认调用最贵模型，可根据任务复杂度选择更适合的模型组合。',
    'why.reliability.title': '更适合企业与产品长期演进',
    'why.reliability.desc': '减少对单一模型供应商的依赖，为后续产品升级、国际化与企业接入预留空间。',

    // Capabilities
    'capabilities.title': '核心能力',
    'capabilities.multimodel.title': '多模型统一接入',
    'capabilities.multimodel.desc': '统一接口接入 100+ AI 模型',
    'capabilities.openai.title': 'OpenAI 兼容接口',
    'capabilities.openai.desc': '无需修改代码，直接替换 base_url',
    'capabilities.routing.title': '路由与切换机制',
    'capabilities.routing.desc': '按规则路由，主力模型异常时自动切换备选',
    'capabilities.cost.title': '成本优化策略',
    'capabilities.cost.desc': '按任务复杂度匹配模型，不为简单任务付高价',
    'capabilities.billing.title': '使用量与计费面板',
    'capabilities.billing.desc': '实时用量监控与成本分析',
    'capabilities.multimodal.title': '多模态支持',
    'capabilities.multimodal.desc': '文本 / 图像 / 音频 / 视频统一调用',

    // Models
    'models.title': '模型广场',
    'models.subtitle': '覆盖主流供应商，文本、图像、音频、视频全支持',
    'models.text': '文本模型',
    'models.image': '图像模型',
    'models.video': '视频模型',
    'models.audio': '音频模型',
    'models.embedding': '嵌入向量',
    'models.cta': '查看全部模型',

    // Code Integration
    'code.title': '快速接入',
    'code.subtitle': '几分钟内完成接入，无需为每个模型重复开发。',

    // Cost Comparison
    'cost.title': '成本对比',
    'cost.subtitle': '按任务需求分配调用，减少不必要的高价模型支出',
    'cost.single': '单模型直连',
    'cost.multi': '按任务成本分配',
    'cost.savings': '成本优化空间',

    // Solutions
    'solutions.title': '面向真实业务场景的 AI 接入能力',
    'solutions.developers.title': '应用开发团队',
    'solutions.developers.desc': '快速接入多种模型，加速产品迭代',
    'solutions.content.title': '内容与营销自动化平台',
    'solutions.content.desc': '智能选择最优模型生成内容',
    'solutions.enterprise.title': '企业知识助手 / 智能客服',
    'solutions.enterprise.desc': '稳定可靠的企业级 AI 能力',
    'solutions.global.title': '多语言出海内容系统',
    'solutions.global.desc': '支持东南亚等多地区语言模型',
    'solutions.digital.title': '数字人内容生产',
    'solutions.digital.desc': '统一调用文本、图像、音频与视频模型，构建数字人生成流水线',
    'solutions.workflow.title': '定制化 AI 工作流',
    'solutions.workflow.desc': '灵活组合多模型能力，构建企业专属的智能工作流',

    // Trust
    'trust.title': '为什么选择 GAIAAPI',
    'trust.subtitle': '开发者和企业都在用的 AI 接入平台',
    'trust.routing': '智能路由自动选最优模型，省钱30%起',
    'trust.routing.desc': '根据任务复杂度自动选择性价比最高的模型，降低 API 调用成本',
    'trust.sla': '99.9% SLA 保障，企业级稳定性',
    'trust.sla.desc': '多节点冗余部署，故障自动切换，保障业务连续性',
    'trust.latency': '国内直连，延迟低至50ms',
    'trust.latency.desc': '部署在国内主流云服务商，无需翻墙，访问更快更稳定',
    'trust.security': '数据不出境，通过等保三级认证',
    'trust.security.desc': '所有数据处理在国内完成，符合企业合规要求',
    'trust.apikey': '一个API Key管理所有模型',
    'trust.apikey.desc': '无需为每个模型厂商单独申请密钥，统一管理更便捷',
    'trust.switch': '一键切换 GPT/Claude/通义/文心，代码无需重写',
    'trust.switch.desc': 'OpenAI 兼容接口，只需修改 model 参数即可切换模型',

    // FAQ
    'faq.title': '常见问题',

    // CTA
    'cta.title': '开始构建更灵活、更可控的 AI 应用接入层。',
    'cta.getkey': '申请试用',
    'cta.contact': '联系合作',

    // Footer
    'footer.product': '产品',
    'footer.solutions': '解决方案',
    'footer.resources': '资源',
    'footer.company': '公司',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.models': 'Models',
    'nav.solutions': 'Solutions',
    'nav.pricing': 'Pricing',
    'nav.docs': 'Docs',
    'nav.about': 'About',
    'nav.console': 'Console',
    'nav.login': 'Login',

    // Console
    'console.description': 'Manage your API keys, view usage statistics, and configure your account settings',

    // Brand
    'brand.name': 'GAIA API MART',
    'brand.tagline': 'Unified AI Model Access Layer',

    // Hero
    'hero.title': 'All-in-One AI Model Platform — 30+ Models, One Interface',
    'hero.subtitle': 'More flexible access. More controllable cost.',
    'hero.description': 'GAIAAPI helps developers and enterprises unify access to text, image, audio, and video models for faster launch and better operational efficiency.',
    'hero.cta.start': 'Request Access',
    'hero.cta.docs': 'View Docs',
    'hero.cta.demo': 'Contact Sales',

    // Features
    'features.badge1': 'OpenAI Compatible',
    'features.badge2': 'Multi-Model Routing',
    'features.badge3': 'Cost Optimization',
    'features.badge4': 'Enterprise Ready',

    // Why Choose
    'why.title': 'Why Choose GAIAAPI',
    'why.cost.title': 'One interface for multiple models',
    'why.cost.desc': 'Avoid rebuilding separately for every provider. Access text, image, audio, and video models through a unified layer.',
    'why.vendor.title': 'Better cost control through model choice',
    'why.vendor.desc': 'Instead of defaulting to the most expensive model, route workloads based on task complexity and business needs.',
    'why.reliability.title': 'Built for long-term product flexibility',
    'why.reliability.desc': 'Reduce vendor lock-in and prepare your AI stack for growth, enterprise use, and international expansion.',

    // Capabilities
    'capabilities.title': 'Core Capabilities',
    'capabilities.multimodel.title': 'Multi-Model Access',
    'capabilities.multimodel.desc': 'One endpoint for 100+ models — text, image, audio, and video',
    'capabilities.openai.title': 'OpenAI Compatible',
    'capabilities.openai.desc': 'Drop-in replacement, just change base_url',
    'capabilities.routing.title': 'Routing & Switching',
    'capabilities.routing.desc': 'Rule-based routing with automatic fallback when primary fails',
    'capabilities.cost.title': 'Cost Optimization',
    'capabilities.cost.desc': 'Match task complexity to model cost — stop overpaying for simple tasks',
    'capabilities.billing.title': 'Usage & Billing',
    'capabilities.billing.desc': 'Real-time usage monitoring and cost analysis',
    'capabilities.multimodal.title': 'Multimodal Support',
    'capabilities.multimodal.desc': 'Text / Image / Audio / Video unified access',

    // Models
    'models.title': 'Model Marketplace',
    'models.subtitle': 'Text, image, audio, video — all major providers in one place',
    'models.text': 'Text Models',
    'models.image': 'Image Models',
    'models.video': 'Video Models',
    'models.audio': 'Audio Models',
    'models.embedding': 'Embedding',
    'models.cta': 'View All Models',

    // Code Integration
    'code.title': 'Quick Integration',
    'code.subtitle': 'Integrate in minutes without rebuilding for every provider.',

    // Cost Comparison
    'cost.title': 'Cost Comparison',
    'cost.subtitle': 'Route calls by task requirement and reduce unnecessary high-cost model usage',
    'cost.single': 'Single Model Direct',
    'cost.multi': 'Route by task cost',
    'cost.savings': 'Cost Optimization Potential',

    // Solutions
    'solutions.title': 'Designed for Real Business Workflows',
    'solutions.developers.title': 'Application Development Teams',
    'solutions.developers.desc': 'Rapid multi-model integration for faster iteration',
    'solutions.content.title': 'Content & Marketing Automation',
    'solutions.content.desc': 'Intelligently select optimal models for content',
    'solutions.enterprise.title': 'Enterprise Knowledge Assistant',
    'solutions.enterprise.desc': 'Reliable enterprise-grade AI capabilities',
    'solutions.global.title': 'Multilingual Global Content',
    'solutions.global.desc': 'Support for SEA and multi-region language models',
    'solutions.digital.title': 'Digital Human Content Production',
    'solutions.digital.desc': 'Unified access to text, image, audio, and video models for digital human pipelines',
    'solutions.workflow.title': 'Custom AI Workflows',
    'solutions.workflow.desc': 'Flexibly combine multi-model capabilities to build enterprise-specific intelligent workflows',

    // Trust
    'trust.title': 'Why Choose GAIAAPI',
    'trust.subtitle': 'The AI access platform trusted by developers and enterprises',
    'trust.routing': 'Smart routing saves 30%+ on costs automatically',
    'trust.routing.desc': 'Automatically selects the most cost-effective model based on task complexity',
    'trust.sla': '99.9% SLA guarantee, enterprise-grade stability',
    'trust.sla.desc': 'Multi-node redundancy with automatic failover ensures business continuity',
    'trust.latency': 'Direct China access, latency as low as 50ms',
    'trust.latency.desc': 'Deployed on major domestic cloud providers, no VPN needed, faster and more stable',
    'trust.security': 'Data stays in China, Level 3 security certified',
    'trust.security.desc': 'All data processing completed domestically, meets enterprise compliance requirements',
    'trust.apikey': 'One API Key manages all models',
    'trust.apikey.desc': 'No need to apply for separate keys from each provider, unified management',
    'trust.switch': 'Switch GPT/Claude/Qwen/ERNIE with one line, no code rewrite',
    'trust.switch.desc': 'OpenAI-compatible interface, just change the model parameter to switch',

    // FAQ
    'faq.title': 'Frequently Asked Questions',

    // CTA
    'cta.title': 'Build a more flexible and cost-aware AI access layer with GAIAAPI.',
    'cta.getkey': 'Request Access',
    'cta.contact': 'Contact Sales',

    // Footer
    'footer.product': 'Product',
    'footer.solutions': 'Solutions',
    'footer.resources': 'Resources',
    'footer.company': 'Company',
  }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('zh');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'zh' ? 'en' : 'zh');
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.zh] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
