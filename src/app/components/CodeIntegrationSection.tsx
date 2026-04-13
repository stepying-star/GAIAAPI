import { useLanguage } from '../../contexts/LanguageContext';
import { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export function CodeIntegrationSection() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('python');
  const [copied, setCopied] = useState(false);
  const { ref, isVisible } = useScrollReveal();

  const codeExamples = {
    python: `from openai import OpenAI

client = OpenAI(
    base_url="https://api.gaiagenx.com/v1",
    api_key="YOUR_API_KEY"
)

response = client.chat.completions.create(
    model="gpt-4",
    messages=[
        {"role": "user", "content": "Hello!"}
    ]
)

print(response.choices[0].message.content)`,

    nodejs: `import OpenAI from 'openai';

const client = new OpenAI({
  baseURL: 'https://api.gaiagenx.com/v1',
  apiKey: 'YOUR_API_KEY',
});

const response = await client.chat.completions.create({
  model: 'gpt-4',
  messages: [
    { role: 'user', content: 'Hello!' }
  ],
});

console.log(response.choices[0].message.content);`,

    curl: `curl https://api.gaiagenx.com/v1/chat/completions \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -d '{
    "model": "gpt-4",
    "messages": [
      {"role": "user", "content": "Hello!"}
    ]
  }'`
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(codeExamples[activeTab as keyof typeof codeExamples]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section ref={ref} className="py-12 md:py-16 lg:py-24 bg-gradient-to-b from-white via-gray-50 to-white dark:from-black dark:via-gray-900 dark:to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-8 md:mb-12 lg:mb-16 transition-all duration-600 ${isVisible ? 'animate-[fadeInUp_0.6s_ease-out_both]' : 'opacity-0'}`}>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('code.title')}
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-400">
            {t('code.subtitle')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Code block stays dark in both modes */}
          <div className="bg-gray-900 backdrop-blur border border-gray-700 rounded-xl md:rounded-2xl overflow-hidden shadow-2xl">
            {/* Tabs */}
            <div className="flex items-center gap-2 md:gap-4 px-4 md:px-6 py-3 md:py-4 bg-black/30 border-b border-white/10">
              {[
                { id: 'python', label: 'Python' },
                { id: 'nodejs', label: 'Node.js' },
                { id: 'curl', label: 'cURL' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-3 md:px-4 py-1.5 md:py-2 rounded-lg text-xs md:text-sm transition-all ${
                    activeTab === tab.id
                      ? 'bg-white/10 text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}

              <button
                onClick={handleCopy}
                className="ml-auto flex items-center gap-2 px-2 md:px-3 py-1.5 md:py-2 text-xs md:text-sm text-gray-400 hover:text-white transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span className="hidden sm:inline">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span className="hidden sm:inline">Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* Code - always dark */}
            <div className="p-4 md:p-6">
              <pre className="text-xs md:text-sm text-gray-300 overflow-x-auto">
                <code>{codeExamples[activeTab as keyof typeof codeExamples]}</code>
              </pre>
            </div>
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 mt-6 md:mt-8">
            {[
              { icon: '✓', text: 'OpenAI Compatible' },
              { icon: '⚡', text: 'Just change base_url' },
              { icon: '🔑', text: 'One API key for all models' }
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 px-4 py-3 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg"
              >
                <span className="text-xl md:text-2xl">{item.icon}</span>
                <span className="text-xs md:text-sm text-gray-700 dark:text-gray-300">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
