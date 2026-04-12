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
    <section ref={ref} className="py-24 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-600 ${isVisible ? 'animate-[fadeInUp_0.6s_ease-out_both]' : 'opacity-0'}`}>
          <h2 className="text-4xl font-bold text-white mb-4">
            {t('code.title')}
          </h2>
          <p className="text-xl text-gray-400">
            {t('code.subtitle')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-900/50 backdrop-blur border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
            {/* Tabs */}
            <div className="flex items-center gap-4 px-6 py-4 bg-black/30 border-b border-white/10">
              {[
                { id: 'python', label: 'Python' },
                { id: 'nodejs', label: 'Node.js' },
                { id: 'curl', label: 'cURL' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-lg text-sm transition-all ${
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
                className="ml-auto flex items-center gap-2 px-3 py-2 text-sm text-gray-400 hover:text-white transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    Copy
                  </>
                )}
              </button>
            </div>

            {/* Code */}
            <div className="p-6">
              <pre className="text-sm text-gray-300 overflow-x-auto">
                <code>{codeExamples[activeTab as keyof typeof codeExamples]}</code>
              </pre>
            </div>
          </div>

          {/* Highlights */}
          <div className="grid md:grid-cols-3 gap-4 mt-8">
            {[
              { icon: '✓', text: 'OpenAI Compatible' },
              { icon: '⚡', text: 'Just change base_url' },
              { icon: '🔑', text: 'One API key for all models' }
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 px-4 py-3 bg-white/5 border border-white/10 rounded-lg"
              >
                <span className="text-2xl">{item.icon}</span>
                <span className="text-sm text-gray-300">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
