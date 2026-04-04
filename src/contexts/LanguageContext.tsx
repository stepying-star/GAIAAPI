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

    // Brand
    'brand.name': 'GAIA词元',
    'brand.tagline': '多模型接口聚合，一次接入，灵活切换',

    // Hero
    'hero.title': '一套接口，对接多家模型供应商',
    'hero.subtitle': '换模型不换代码。按任务成本分配调用，稳定交付。',
    'hero.description': '支持文本、图像、音频与视频模型统一调用。',
    'hero.cta.start': '立即开始',
    'hero.cta.docs': '查看文档',
    'hero.cta.demo': '预约演示',

    // Features
    'features.badge1': 'OpenAI Compatible',
    'features.badge2': '多模型路由',
    'features.badge3': '成本优化',
    'features.badge4': '企业级',

    // Why Choose
    'why.title': '为什么选择 GAIAAPI',
    'why.cost.title': '降低模型调用成本',
    'why.cost.desc': '对接多家模型供应能力，根据任务类型选择更具性价比的模型，降低单一大模型依赖成本',
    'why.vendor.title': '避免单一供应商锁定',
    'why.vendor.desc': '可在不同模型之间快速切换，支持统一接口结构，便于长期产品路线调整',
    'why.reliability.title': '提高可用性与交付稳定性',
    'why.reliability.desc': '支持路由切换，支持模型冗余方案，支持统一监控与用量管理',

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
    'capabilities.billing.title': 'Usage / Billing 面板',
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
    'models.embedding': 'Embedding',
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
    'solutions.title': '适用场景',
    'solutions.developers.title': '应用开发团队',
    'solutions.developers.desc': '快速接入多种模型，加速产品迭代',
    'solutions.content.title': '内容与营销自动化平台',
    'solutions.content.desc': '智能选择最优模型生成内容',
    'solutions.enterprise.title': '企业知识助手 / 智能客服',
    'solutions.enterprise.desc': '稳定可靠的企业级 AI 能力',
    'solutions.global.title': '多语言出海内容系统',
    'solutions.global.desc': '支持东南亚等多地区语言模型',

    // Trust
    'trust.title': '企业级信任',
    'trust.stability': '稳定性保障',
    'trust.security': '数据安全合规',
    'trust.support': '7x24 技术支持',
    'trust.sla': '企业级 SLA',

    // FAQ
    'faq.title': '常见问题',

    // CTA
    'cta.title': '立即接入 GAIAAPI，开始构建更灵活、更可控的 AI 应用。',
    'cta.getkey': '获取 API Key',
    'cta.contact': '联系销售',

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

    // Brand
    'brand.name': 'GAIA API MART',
    'brand.tagline': 'Unified AI Model Access Layer',

    // Hero
    'hero.title': 'One API for Multiple AI Models',
    'hero.subtitle': 'Switch models without changing code. Route by cost, deliver reliably.',
    'hero.description': 'Unify access to text, image, audio, and video models.',
    'hero.cta.start': 'Get API Key',
    'hero.cta.docs': 'View Docs',
    'hero.cta.demo': 'Book Demo',

    // Features
    'features.badge1': 'OpenAI Compatible',
    'features.badge2': 'Multi-Model Routing',
    'features.badge3': 'Cost Optimization',
    'features.badge4': 'Enterprise Ready',

    // Why Choose
    'why.title': 'Why Choose GAIAAPI',
    'why.cost.title': 'Reduce Model Calling Costs',
    'why.cost.desc': 'Connect to multiple model providers and select cost-effective models based on task type, reducing dependency on expensive single models',
    'why.vendor.title': 'Avoid Vendor Lock-in',
    'why.vendor.desc': 'Quickly switch between different models with unified interface structure for long-term product flexibility',
    'why.reliability.title': 'Improve Availability & Stability',
    'why.reliability.desc': 'Support routing switching, model redundancy, unified monitoring and usage management',

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
    'solutions.title': 'Use Cases',
    'solutions.developers.title': 'Application Development Teams',
    'solutions.developers.desc': 'Rapid multi-model integration for faster iteration',
    'solutions.content.title': 'Content & Marketing Automation',
    'solutions.content.desc': 'Intelligently select optimal models for content',
    'solutions.enterprise.title': 'Enterprise Knowledge Assistant',
    'solutions.enterprise.desc': 'Reliable enterprise-grade AI capabilities',
    'solutions.global.title': 'Multilingual Global Content',
    'solutions.global.desc': 'Support for SEA and multi-region language models',

    // Trust
    'trust.title': 'Enterprise Trust',
    'trust.stability': 'Stability Guarantee',
    'trust.security': 'Data Security & Compliance',
    'trust.support': '24/7 Technical Support',
    'trust.sla': 'Enterprise SLA',

    // FAQ
    'faq.title': 'Frequently Asked Questions',

    // CTA
    'cta.title': 'Build with GAIAAPI and launch flexible, cost-aware AI applications faster.',
    'cta.getkey': 'Get API Key',
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
