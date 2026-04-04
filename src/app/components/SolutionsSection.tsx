import { useLanguage } from '../../contexts/LanguageContext';
import { Code, FileText, Bot, Globe2, Video, Workflow } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export function SolutionsSection() {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollReveal();

  const solutions = [
    {
      icon: Code,
      titleKey: 'solutions.developers.title',
      descKey: 'solutions.developers.desc',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: FileText,
      titleKey: 'solutions.content.title',
      descKey: 'solutions.content.desc',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Bot,
      titleKey: 'solutions.enterprise.title',
      descKey: 'solutions.enterprise.desc',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: Globe2,
      titleKey: 'solutions.global.title',
      descKey: 'solutions.global.desc',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: Video,
      titleKey: 'solutions.digital.title',
      descKey: 'solutions.digital.desc',
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Workflow,
      titleKey: 'solutions.workflow.title',
      descKey: 'solutions.workflow.desc',
      gradient: 'from-teal-500 to-cyan-500'
    }
  ];

  return (
    <section ref={ref} id="solutions" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-600 ${isVisible ? 'animate-[fadeInUp_0.6s_ease-out_both]' : 'opacity-0'}`}>
          <h2 className="text-4xl font-bold text-white mb-4">
            {t('solutions.title')}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <div
                key={index}
                className={`group relative bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-300 overflow-hidden hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/10 ${isVisible ? 'animate-[staggerIn_0.6s_ease-out_both]' : 'opacity-0'}`}
                style={{ animationDelay: isVisible ? `${index * 0.1}s` : '0s' }}
              >
                {/* Background Gradient */}
                <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${solution.gradient} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-500`}></div>

                <div className="relative">
                  <div className={`inline-flex p-4 bg-gradient-to-r ${solution.gradient} rounded-xl mb-6`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4">
                    {t(solution.titleKey)}
                  </h3>

                  <p className="text-gray-400 leading-relaxed">
                    {t(solution.descKey)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
