import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { X, Send } from 'lucide-react';

interface Message {
  id: string;
  role: 'bot' | 'user';
  text: string;
  timestamp: Date;
  quickReplies?: string[];
}

const BotAvatar = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <rect width="28" height="28" rx="14" fill="white" fillOpacity="0.2"/>
    <circle cx="14" cy="11" r="4" fill="white"/>
    <circle cx="10" cy="18" r="2" fill="white" fillOpacity="0.7"/>
    <circle cx="14" cy="20" r="2" fill="white"/>
    <circle cx="18" cy="18" r="2" fill="white" fillOpacity="0.7"/>
    <line x1="14" y1="15" x2="10" y2="18" stroke="white" strokeOpacity="0.5" strokeWidth="1"/>
    <line x1="14" y1="15" x2="14" y2="20" stroke="white" strokeOpacity="0.5" strokeWidth="1"/>
    <line x1="14" y1="15" x2="18" y2="18" stroke="white" strokeOpacity="0.5" strokeWidth="1"/>
  </svg>
);

const ChatBubbleIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 6C4 4.895 4.895 4 6 4H22C23.105 4 24 4.895 24 6V18C24 19.105 23.105 20 22 20H15L9 24V20H6C4.895 20 4 19.105 4 18V6Z" fill="white" fillOpacity="0.95"/>
    <circle cx="10" cy="13" r="1.5" fill="#7c3aed"/>
    <circle cx="14" cy="13" r="1.5" fill="#7c3aed"/>
    <circle cx="18" cy="13" r="1.5" fill="#7c3aed"/>
  </svg>
);

const TypingIndicator = () => (
  <div className="flex items-center gap-1 px-4 py-3 bg-[#1a1a2e] border border-blue-500/20 rounded-2xl rounded-bl-sm w-fit">
    <div className="flex gap-1">
      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
    </div>
  </div>
);

export function ChatBot() {
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [hasOpenedBefore, setHasOpenedBefore] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Dynamic content based on language
  const content = {
    zh: {
      title: 'GAIA 客服',
      online: '在线',
      welcome: '你好！我是 GAIA 智能助手 👋\n有什么可以帮你的？',
      quickReplies: ['如何开始接入？', '支持哪些模型？', '如何计费？', '服务稳定性？', '联系人工客服'],
      placeholder: '输入消息...',
    },
    en: {
      title: 'GAIA Support',
      online: 'Online',
      welcome: "Hi! I'm GAIA Assistant 👋\nHow can I help you today?",
      quickReplies: ['How to get started?', 'Supported models?', 'Pricing & billing?', 'Reliability?', 'Talk to a human'],
      placeholder: 'Type a message...',
    }
  };

  const t = content[language] ?? content.en;

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  // Reset messages when language changes
  useEffect(() => {
    const lang = language === 'en' ? content.en : content.zh;
    setMessages([{
      id: 'welcome-msg',
      role: 'bot',
      text: lang.welcome,
      timestamp: new Date(),
      quickReplies: lang.quickReplies,
    }]);
  }, [language]);

  useEffect(() => {
    if (isOpen && !hasOpenedBefore) {
      setHasOpenedBefore(true);
    }
  }, [isOpen, hasOpenedBefore]);

  const getKnowledgeBaseResponse = (userMessage: string, lang: 'zh' | 'en'): string => {
    const lowerMsg = userMessage.toLowerCase();

    if (lang === 'zh') {
      if (lowerMsg.includes('开始') || lowerMsg.includes('接入') || lowerMsg.includes('api key') || lowerMsg.includes('注册')) {
        return "注册账号后即可在控制台获取 API Key。\n\n接口完全兼容 OpenAI 格式，只需替换 base_url 为 https://api.gaiaapi.com/v1，5 分钟内完成接入 ✅\n\n👉 需要我帮你生成示例代码吗？";
      }
      if (lowerMsg.includes('模型') || lowerMsg.includes('支持') || lowerMsg.includes('gpt') || lowerMsg.includes('claude') || lowerMsg.includes('gemini')) {
        return "目前覆盖主流供应商：\n\n• GPT-4 / GPT-4o（OpenAI）\n• Claude 3.5 Sonnet（Anthropic）\n• Gemini 1.5 Pro（Google）\n• Qwen / Doubao / DeepSeek\n\n文本、图像、音频、视频全支持 🎯";
      }
      if (lowerMsg.includes('计费') || lowerMsg.includes('定价') || lowerMsg.includes('价格') || lowerMsg.includes('费用')) {
        return "按实际用量计费，无月费、无最低消费。\n\n• 新注册免费额度可直接体验\n• 按 token 结算，透明账单\n• 复杂任务用高价模型，简单任务走低价模型，成本可降低 40%+\n\n💰 详细价格见「定价」页面";
      }
      if (lowerMsg.includes('稳定') || lowerMsg.includes('可用') || lowerMsg.includes('宕机') || lowerMsg.includes('备用') || lowerMsg.includes('故障')) {
        return "GAIAAPI 采用多模型冗余架构：\n\n• 主力模型异常时自动切换备选\n• 服务可用性 99.9%+\n• 全球多节点部署，响应 ~200ms\n\n实时状态可查看 status.gaiaapi.com 🟢";
      }
      if (lowerMsg.includes('人工') || lowerMsg.includes('销售') || lowerMsg.includes('联系') || lowerMsg.includes('合作')) {
        return "需要人工支持？\n\n📧 sales@gaiaapi.com\n📅 或点击「预约演示」安排 1 对 1 技术对接\n\n工作日内响应，我们期待与你合作 🤝";
      }
      return "感谢你的提问！这个问题我需要转给专业团队处理。\n\n请发邮件至 support@gaiaapi.com，或点击下方「预约演示」，我们会尽快回复你 📬";
    } else {
      if (lowerMsg.includes('start') || lowerMsg.includes('api key') || lowerMsg.includes('integrate') || lowerMsg.includes('sign up')) {
        return "After signing up, grab your API Key from the dashboard.\n\nFully OpenAI-compatible — just replace base_url with https://api.gaiaapi.com/v1. You'll be integrated in under 5 minutes ✅\n\nWant me to show you a quick code sample?";
      }
      if (lowerMsg.includes('model') || lowerMsg.includes('support') || lowerMsg.includes('gpt') || lowerMsg.includes('claude') || lowerMsg.includes('gemini')) {
        return "We support all major providers:\n\n• GPT-4 / GPT-4o (OpenAI)\n• Claude 3.5 Sonnet (Anthropic)\n• Gemini 1.5 Pro (Google)\n• Qwen / Doubao / DeepSeek\n\nText, image, audio & video — all covered 🎯";
      }
      if (lowerMsg.includes('pric') || lowerMsg.includes('bill') || lowerMsg.includes('cost') || lowerMsg.includes('fee') || lowerMsg.includes('payment')) {
        return "Pay-as-you-go — no monthly fee, no minimums.\n\n• Free credits on signup\n• Per-token billing with transparent invoices\n• Route simple tasks to cheaper models — save 40%+\n\n💰 See full pricing on the Pricing page";
      }
      if (lowerMsg.includes('reliab') || lowerMsg.includes('uptime') || lowerMsg.includes('failover') || lowerMsg.includes('stable') || lowerMsg.includes('outage')) {
        return "GAIAAPI uses multi-model redundancy:\n\n• Automatic failover when primary model is down\n• 99.9%+ uptime SLA\n• Global nodes, ~200ms response time\n\nCheck real-time status at status.gaiaapi.com 🟢";
      }
      if (lowerMsg.includes('human') || lowerMsg.includes('sales') || lowerMsg.includes('contact') || lowerMsg.includes('talk') || lowerMsg.includes('partner')) {
        return "Want to talk to our team?\n\n📧 sales@gaiaapi.com\n📅 Or book a 1-on-1 demo via the 'Book Demo' button\n\nWe respond within 1 business day 🤝";
      }
      return "Thanks for reaching out! This question is best handled by our team.\n\nEmail us at support@gaiaapi.com or book a demo — we'll get back to you ASAP 📬";
    }
  };

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      text: text.trim(),
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    // Show typing indicator
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      setIsTyping(false);
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        role: 'bot',
        text: getKnowledgeBaseResponse(text, language),
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botResponse]);
    }, 800);
  };

  const handleQuickReply = (reply: string) => {
    handleSendMessage(reply);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-4">
      {/* Chat Window */}
      {isOpen && (
        <div className="w-[360px] h-[520px] bg-[#0d0d1a] border border-blue-500/20 rounded-2xl shadow-2xl flex flex-col animate-[fadeInUp_0.3s_ease-out]">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-t-2xl px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <BotAvatar />
              <div>
                <div className="text-white font-semibold">
                  {t.title}
                </div>
                <div className="text-xs text-white/80">
                  {t.online}
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => {
              // For welcome message, use dynamic content based on current language
              const isWelcome = message.id === 'welcome-msg';
              const displayText = isWelcome ? t.welcome : message.text;
              const displayQuickReplies = isWelcome ? t.quickReplies : message.quickReplies;

              return (
                <div key={message.id}>
                  {message.role === 'bot' ? (
                    <div className="flex items-start gap-2">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-7 h-7">
                          <BotAvatar />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="bg-[#1a1a2e] border border-blue-500/20 rounded-2xl rounded-tl-sm px-4 py-3 text-white text-sm whitespace-pre-line">
                          {displayText}
                        </div>
                        <div className="text-xs text-gray-500 mt-1 ml-1">
                          {formatTime(message.timestamp)}
                        </div>
                        {/* Quick Replies */}
                        {displayQuickReplies && displayQuickReplies.length > 0 && (
                          <div className="flex flex-wrap gap-2 mt-3">
                            {displayQuickReplies.map((reply, idx) => (
                              <button
                                key={idx}
                                onClick={() => handleQuickReply(reply)}
                                className="px-3 py-1.5 text-xs bg-[#1a1a2e] border border-blue-500/30 text-blue-400 rounded-full hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white hover:border-transparent transition-all"
                              >
                                {reply}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ) : (
                    <div className="flex justify-end">
                      <div className="max-w-[80%]">
                        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl rounded-tr-sm px-4 py-3 text-white text-sm whitespace-pre-line">
                          {message.text}
                        </div>
                        <div className="text-xs text-gray-500 mt-1 mr-1 text-right">
                          {formatTime(message.timestamp)}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}

            {isTyping && (
              <div className="flex items-start gap-2">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-7 h-7">
                    <BotAvatar />
                  </div>
                </div>
                <TypingIndicator />
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="border-t border-white/10 p-4">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSendMessage(inputValue);
                  }
                }}
                placeholder={t.placeholder}
                className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-blue-500/50 transition-colors"
              />
              <button
                onClick={() => handleSendMessage(inputValue)}
                disabled={!inputValue.trim()}
                className={`p-2 rounded-lg transition-all ${
                  inputValue.trim()
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 hover:brightness-110'
                    : 'bg-gray-700 cursor-not-allowed'
                }`}
              >
                <Send className={`w-5 h-5 ${inputValue.trim() ? 'text-white' : 'text-gray-500'}`} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-[60px] h-[60px] bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full shadow-lg shadow-purple-500/40 hover:shadow-xl transition-all duration-300 flex items-center justify-center group hover:scale-110 relative"
        aria-label="Open chat"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <>
            <ChatBubbleIcon />
            {/* Unread Badge */}
            {!hasOpenedBefore && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white animate-pulse"></span>
            )}
          </>
        )}
      </button>
    </div>
  );
}
