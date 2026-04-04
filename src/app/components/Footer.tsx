import { useLanguage } from '../../contexts/LanguageContext';

export function Footer() {
  const { language, t } = useLanguage();

  const footerSections = {
    product: {
      title: language === 'zh' ? '产品' : 'Product',
      links: [
        { label: language === 'zh' ? '模型广场' : 'Model Marketplace', href: '#models' },
        { label: language === 'zh' ? 'API 接入' : 'API Access', href: '#docs' },
        { label: language === 'zh' ? '多模型路由' : 'Multi-Model Routing', href: '#' },
        { label: language === 'zh' ? '成本优化' : 'Cost Optimization', href: '#' },
        { label: language === 'zh' ? '账单与用量' : 'Billing & Usage', href: '#' }
      ]
    },
    solutions: {
      title: language === 'zh' ? '解决方案' : 'Solutions',
      links: [
        { label: language === 'zh' ? 'AI 应用开发' : 'AI Development', href: '#solutions' },
        { label: language === 'zh' ? '内容生成平台' : 'Content Generation', href: '#' },
        { label: language === 'zh' ? '企业知识助手' : 'Enterprise Assistant', href: '#' },
        { label: language === 'zh' ? '海外市场' : 'Global Markets', href: '#' }
      ]
    },
    resources: {
      title: language === 'zh' ? '资源' : 'Resources',
      links: [
        { label: language === 'zh' ? '文档中心' : 'Documentation', href: '#docs' },
        { label: language === 'zh' ? '快速开始' : 'Quick Start', href: '#' },
        { label: language === 'zh' ? '常见问题' : 'FAQ', href: '#' },
        { label: language === 'zh' ? '状态页' : 'Status', href: '#' }
      ]
    },
    company: {
      title: language === 'zh' ? '公司' : 'Company',
      links: [
        { label: language === 'zh' ? '关于 GAIA' : 'About GAIA', href: '#about' },
        { label: language === 'zh' ? '隐私政策' : 'Privacy Policy', href: '#' },
        { label: language === 'zh' ? '服务条款' : 'Terms of Service', href: '#' },
        { label: language === 'zh' ? '联系我们' : 'Contact Us', href: '#' }
      ]
    }
  };

  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {Object.entries(footerSections).map(([key, section]) => (
            <div key={key}>
              <h3 className="text-white font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                GAIAAPI
              </div>
              <div className="text-sm text-gray-400">
                {t('brand.name')}
              </div>
            </div>

            <div className="text-sm text-gray-400">
              © 2026 GAIAAPI. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
