import { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import {
  LayoutDashboard,
  Key,
  BarChart2,
  FileText,
  Cpu,
  CreditCard,
  FolderOpen,
  Users,
  BookOpen,
  HelpCircle,
  Menu,
  Search,
  Bell,
  Zap,
  AlertTriangle,
  Plus,
  Copy,
  Trash2,
  Eye,
  EyeOff,
  Download,
  Filter,
  Lock,
  Shield,
  Mail,
  MessageCircle,
  Book,
  ChevronDown
} from 'lucide-react';

interface ConsolePageProps {
  onClose: () => void;
}

export function ConsolePage({ onClose }: ConsolePageProps) {
  const { language } = useLanguage();
  const [activePage, setActivePage] = useState('dashboard');
  const [expandedKeySettings, setExpandedKeySettings] = useState<string | null>(null);

  const navItems = [
    { id: 'dashboard', icon: LayoutDashboard, label: language === 'zh' ? '仪表板' : 'Dashboard' },
    { id: 'api-keys', icon: Key, label: language === 'zh' ? 'API 密钥' : 'API Keys' },
    { id: 'usage', icon: BarChart2, label: language === 'zh' ? '用量统计' : 'Usage' },
    { id: 'logs', icon: FileText, label: language === 'zh' ? '日志' : 'Logs' },
    { id: 'models', icon: Cpu, label: language === 'zh' ? '模型' : 'Models' },
    { id: 'billing', icon: CreditCard, label: language === 'zh' ? '账单' : 'Billing' },
    { id: 'projects', icon: FolderOpen, label: language === 'zh' ? '项目' : 'Projects' },
    { id: 'team', icon: Users, label: language === 'zh' ? '团队与安全' : 'Team & Security' },
    { id: 'docs', icon: BookOpen, label: language === 'zh' ? '文档' : 'Docs' },
    { id: 'support', icon: HelpCircle, label: language === 'zh' ? '支持' : 'Support' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex bg-gray-950 overflow-hidden">
      {/* Left Sidebar */}
      <aside className="w-56 flex flex-col bg-gray-950 border-r border-gray-800">
        {/* Logo Area */}
        <div className="p-4 border-b border-gray-800">
          <div className="flex items-baseline gap-1">
            <span className="text-white font-bold">GAIAAPI</span>
            <span className="text-purple-400 font-semibold">{language === 'zh' ? '控制台' : 'Console'}</span>
          </div>
          <div className="text-xs text-gray-500 mt-1">
            {language === 'zh' ? '统一 API 编排平台' : 'Unified API orchestration'}
          </div>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActivePage(item.id)}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-purple-600 text-white'
                    : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                }`}
              >
                <Icon className="w-4 h-4 flex-shrink-0" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
      </aside>

      {/* Main Area */}
      <div className="flex-1 flex flex-col overflow-hidden ml-0">
        {/* Top Bar */}
        <header className="h-14 flex-shrink-0 bg-gray-950 border-b border-gray-800 flex items-center px-6 gap-4">
          {/* Menu Icon */}
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Menu className="w-5 h-5" />
          </button>

          {/* Search Input */}
          <div className="w-96">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              <input
                type="text"
                placeholder={language === 'zh' ? '搜索项目、API Key、模型、日志...' : 'Search projects, API keys, models, logs...'}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg text-sm px-4 py-2 pl-10 text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              />
            </div>
          </div>

          {/* Right Side */}
          <div className="ml-auto flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-xs text-green-400">{language === 'zh' ? '所有系统正常运行' : 'All Systems Operational'}</span>
            </div>
            <Bell className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
            <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white text-sm font-semibold">
              S
            </div>
          </div>
        </header>

        {/* Scrollable Content */}
        <main className="flex-1 overflow-y-auto p-6 bg-gray-900 space-y-6">
          {activePage === 'dashboard' && (
            <>
              {/* 1. Hero Row */}
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-white">
                    {language === 'zh' ? '欢迎回来，Steph 👋' : 'Welcome back, Steph 👋'}
                  </h2>
                  <p className="text-sm text-gray-400 mt-1">
                    {language === 'zh' ? '一套接口，统一管理模型调用、点数、项目与账单。' : 'One API to manage model calls, credits, projects, and billing.'}
                  </p>
                </div>
                <div className="flex gap-2">
                  <button className="bg-purple-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                    {language === 'zh' ? '创建 API Key' : 'Create API Key'}
                  </button>
                  <button className="bg-gray-700 text-white text-sm px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors">
                    {language === 'zh' ? '查看接入文档' : 'View Docs'}
                  </button>
                  <button className="bg-gray-700 text-white text-sm px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors">
                    {language === 'zh' ? '充值点数' : 'Top Up Credits'}
                  </button>
                </div>
              </div>

              {/* 2. KPI Cards - 3 columns x 2 rows */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                {/* Row 1 - Card 1: Current Plan */}
                <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
                  <div className="text-xs text-gray-400">{language === 'zh' ? '当前套餐' : 'Current Plan'}</div>
                  <div className="text-2xl font-bold text-white">Pro Lv3</div>
                  <div className="text-xs text-gray-500">{language === 'zh' ? '30,000 credits / 月' : '30,000 credits / month'}</div>
                  <div className="text-xs text-gray-600 mt-2">
                    {language === 'zh' ? '下次刷新：2026-05-01' : 'Next refresh: 2026-05-01'}
                  </div>
                </div>

                {/* Row 1 - Card 2: Subscription Credits */}
                <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
                  <div className="text-xs text-gray-400">{language === 'zh' ? '订阅点数' : 'Subscription Credits'}</div>
                  <div className="text-2xl font-bold text-purple-400">8,420</div>
                  <div className="text-xs text-gray-500">{language === 'zh' ? '剩余' : 'remaining'}</div>
                  <div className="text-xs text-gray-600 mt-2">
                    {language === 'zh' ? '每月刷新，不结转' : 'Monthly refresh, no rollover'}
                  </div>
                </div>

                {/* Row 1 - Card 3: Top-up Credits */}
                <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
                  <div className="text-xs text-gray-400">{language === 'zh' ? '充值点数' : 'Top-up Credits'}</div>
                  <div className="text-2xl font-bold text-green-400">12,000</div>
                  <div className="text-xs text-gray-500">{language === 'zh' ? '可用' : 'available'}</div>
                  <div className="text-xs text-gray-600 mt-2">
                    {language === 'zh' ? '永不过期 · 优先消耗' : 'Never expire · Priority use'}
                  </div>
                </div>

                {/* Row 2 - Card 4: This Month Usage */}
                <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
                  <div className="text-xs text-gray-400">{language === 'zh' ? '本月用量' : 'This Month Usage'}</div>
                  <div className="text-2xl font-bold text-blue-400">21,580</div>
                  <div className="text-xs text-gray-500">{language === 'zh' ? 'credits 已使用' : 'credits used'}</div>
                  <div className="text-xs text-green-500 mt-2">
                    {language === 'zh' ? '较上月 +12.4% ↑' : 'vs last month +12.4% ↑'}
                  </div>
                </div>

                {/* Row 2 - Card 5: Estimated Spend */}
                <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
                  <div className="text-xs text-gray-400">{language === 'zh' ? '预估花费' : 'Estimated Spend'}</div>
                  <div className="text-2xl font-bold text-yellow-400">USD 128.40</div>
                  <div className="text-xs text-gray-500">{language === 'zh' ? '本计费周期' : 'this billing period'}</div>
                  <div className="text-xs text-gray-600 mt-2">
                    {language === 'zh' ? '含订阅 + top-up + 税费前' : 'Incl. subscription + top-up, pre-tax'}
                  </div>
                </div>

                {/* Row 2 - Card 6: API Health */}
                <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
                  <div className="text-xs text-gray-400">{language === 'zh' ? 'API 健康度' : 'API Health'}</div>
                  <div className="text-2xl font-bold text-green-400">99.94%</div>
                  <div className="text-xs text-gray-500">{language === 'zh' ? '成功率' : 'success rate'}</div>
                  <div className="text-xs text-gray-600 mt-2">{language === 'zh' ? '平均延迟：218ms' : 'Avg latency: 218ms'}</div>
                </div>
              </div>

              {/* 3. Chart + Actions Row */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                {/* Chart - Left col-span-2 */}
                <div className="col-span-2 bg-gray-800 rounded-xl p-5 border border-gray-700">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-semibold text-white">{language === 'zh' ? '点数使用趋势' : 'Credits Usage Trend'}</h3>
                    <div className="flex gap-1">
                      <button className="bg-purple-600 text-white text-xs px-3 py-1 rounded">7D</button>
                      <button className="bg-gray-700 text-gray-400 text-xs px-3 py-1 rounded">30D</button>
                      <button className="bg-gray-700 text-gray-400 text-xs px-3 py-1 rounded">90D</button>
                    </div>
                  </div>
                  <div className="mt-4 h-36 flex items-end gap-1.5">
                    <div className="flex-1 rounded-t bg-gradient-to-t from-purple-700 to-purple-400" style={{ height: '40%' }}></div>
                    <div className="flex-1 rounded-t bg-gradient-to-t from-purple-700 to-purple-400" style={{ height: '58%' }}></div>
                    <div className="flex-1 rounded-t bg-gradient-to-t from-purple-700 to-purple-400" style={{ height: '44%' }}></div>
                    <div className="flex-1 rounded-t bg-gradient-to-t from-purple-700 to-purple-400" style={{ height: '82%' }}></div>
                    <div className="flex-1 rounded-t bg-gradient-to-t from-purple-700 to-purple-400" style={{ height: '54%' }}></div>
                    <div className="flex-1 rounded-t bg-gradient-to-t from-purple-700 to-purple-400" style={{ height: '68%' }}></div>
                    <div className="flex-1 rounded-t bg-gradient-to-t from-purple-700 to-purple-400" style={{ height: '92%' }}></div>
                    <div className="flex-1 rounded-t bg-gradient-to-t from-purple-700 to-purple-400" style={{ height: '64%' }}></div>
                    <div className="flex-1 rounded-t bg-gradient-to-t from-purple-700 to-purple-400" style={{ height: '76%' }}></div>
                    <div className="flex-1 rounded-t bg-gradient-to-t from-purple-700 to-purple-400" style={{ height: '48%' }}></div>
                    <div className="flex-1 rounded-t bg-gradient-to-t from-purple-700 to-purple-400" style={{ height: '86%' }}></div>
                    <div className="flex-1 rounded-t bg-gradient-to-t from-purple-700 to-purple-400" style={{ height: '62%' }}></div>
                    <div className="flex-1 rounded-t bg-gradient-to-t from-purple-700 to-purple-400" style={{ height: '74%' }}></div>
                    <div className="flex-1 rounded-t bg-gradient-to-t from-purple-700 to-purple-400" style={{ height: '96%' }}></div>
                  </div>
                  <div className="flex gap-6 mt-3 text-xs items-center">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-purple-500 rounded-sm"></div>
                      <span className="text-gray-400">{language === 'zh' ? '总点数使用' : 'Total Credits Used'}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-blue-500 rounded-sm"></div>
                      <span className="text-gray-400">{language === 'zh' ? '订阅点数' : 'Subscription Credits'}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded-sm"></div>
                      <span className="text-gray-400">{language === 'zh' ? '充值点数' : 'Top-up Credits'}</span>
                    </div>
                  </div>
                </div>

                {/* Quick Actions - Right col-span-1 */}
                <div className="col-span-1 bg-gray-800 rounded-xl p-5 border border-gray-700">
                  <h3 className="font-semibold text-white mb-3">{language === 'zh' ? '快速操作' : 'Quick Actions'}</h3>
                  <div className="space-y-2">
                    <button className="w-full text-left text-sm text-gray-300 px-3 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors">
                      ＋ {language === 'zh' ? '创建 API Key' : 'Create API Key'}
                    </button>
                    <button className="w-full text-left text-sm text-gray-300 px-3 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors">
                      ◎ {language === 'zh' ? '启动新项目' : 'Start New Project'}
                    </button>
                    <button className="w-full text-left text-sm text-gray-300 px-3 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors">
                      ▲ {language === 'zh' ? '充值点数' : 'Top Up Credits'}
                    </button>
                    <button className="w-full text-left text-sm text-gray-300 px-3 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors">
                      ✉ {language === 'zh' ? '邀请团队成员' : 'Invite Team Member'}
                    </button>
                    <button className="w-full text-left text-sm text-gray-300 px-3 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors">
                      ◻ {language === 'zh' ? '查看文档' : 'View Docs'}
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 mt-3 pt-3 border-t border-gray-700">
                    💡 {language === 'zh' ? '需要更大用量？升级套餐享更优惠的 点数包。' : 'Need higher volume? Upgrade for better bundled credit value.'}
                  </p>
                </div>
              </div>

              {/* 4. Tables Row */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {/* Project Overview - Left */}
                <div className="bg-gray-800 rounded-xl p-5 border border-gray-700">
                  <h3 className="font-semibold text-white mb-3">{language === 'zh' ? '项目总览' : 'Project Overview'}</h3>
                  <table className="w-full text-xs">
                    <thead>
                      <tr className="bg-gray-900 rounded text-gray-400 text-left">
                        <th className="px-3 py-2">{language === 'zh' ? '项目' : 'Project'}</th>
                        <th className="px-3 py-2">{language === 'zh' ? 'API 调用' : 'API Calls'}</th>
                        <th className="px-3 py-2">{language === 'zh' ? '点数' : 'Credits'}</th>
                        <th className="px-3 py-2">{language === 'zh' ? '成功率' : 'Rate'}</th>
                        <th className="px-3 py-2">{language === 'zh' ? '最后活跃' : 'Last Active'}</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-300">
                      <tr className="border-t border-gray-700">
                        <td className="px-3 py-2">{language === 'zh' ? '营销自动化' : 'Marketing Automation'}</td>
                        <td className="px-3 py-2">12,840</td>
                        <td className="px-3 py-2">8,200</td>
                        <td className="px-3 py-2">99.2%</td>
                        <td className="px-3 py-2">{language === 'zh' ? '2 小时前' : '2h ago'}</td>
                      </tr>
                      <tr className="border-t border-gray-700">
                        <td className="px-3 py-2">{language === 'zh' ? 'AI 内容工作室' : 'AI Content Studio'}</td>
                        <td className="px-3 py-2">8,320</td>
                        <td className="px-3 py-2">5,100</td>
                        <td className="px-3 py-2">98.7%</td>
                        <td className="px-3 py-2">{language === 'zh' ? '5 小时前' : '5h ago'}</td>
                      </tr>
                      <tr className="border-t border-gray-700">
                        <td className="px-3 py-2">{language === 'zh' ? 'SEA 电商机器人' : 'SEA Commerce Bot'}</td>
                        <td className="px-3 py-2">18,440</td>
                        <td className="px-3 py-2">11,800</td>
                        <td className="px-3 py-2">97.3%</td>
                        <td className="px-3 py-2">{language === 'zh' ? '1 小时前' : '1h ago'}</td>
                      </tr>
                      <tr className="border-t border-gray-700">
                        <td className="px-3 py-2">{language === 'zh' ? '内部测试' : 'Internal Testing'}</td>
                        <td className="px-3 py-2">2,100</td>
                        <td className="px-3 py-2">980</td>
                        <td className="px-3 py-2">95.1%</td>
                        <td className="px-3 py-2">{language === 'zh' ? '1 天前' : '1d ago'}</td>
                      </tr>
                    </tbody>
                  </table>
                  <button className="mt-3 text-xs text-purple-400 cursor-pointer hover:text-purple-300 transition-colors">
                    {language === 'zh' ? '查看全部项目 →' : 'View All Projects →'}
                  </button>
                </div>

                {/* Top Models by Consumption - Right */}
                <div className="bg-gray-800 rounded-xl p-5 border border-gray-700">
                  <h3 className="font-semibold text-white mb-3">{language === 'zh' ? '用量最高模型' : 'Top Models by Consumption'}</h3>
                  <table className="w-full text-xs">
                    <thead>
                      <tr className="bg-gray-900 text-gray-400 text-left">
                        <th className="px-3 py-2">{language === 'zh' ? '模型' : 'Model'}</th>
                        <th className="px-3 py-2">{language === 'zh' ? '类别' : 'Category'}</th>
                        <th className="px-3 py-2">{language === 'zh' ? '点数/次' : 'Credits/Use'}</th>
                        <th className="px-3 py-2">{language === 'zh' ? '占比' : 'Share'}</th>
                        <th className="px-3 py-2">{language === 'zh' ? '总计' : 'Total'}</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-300">
                      <tr className="border-t border-gray-700">
                        <td className="px-3 py-2">GPT-4o Image</td>
                        <td className="px-3 py-2">{language === 'zh' ? '图像' : 'Image'}</td>
                        <td className="px-3 py-2">450</td>
                        <td className="px-3 py-2">28.4%</td>
                        <td className="px-3 py-2">6,840</td>
                      </tr>
                      <tr className="border-t border-gray-700">
                        <td className="px-3 py-2">Kling 3.0</td>
                        <td className="px-3 py-2">{language === 'zh' ? '视频' : 'Video'}</td>
                        <td className="px-3 py-2">1,200</td>
                        <td className="px-3 py-2">22.1%</td>
                        <td className="px-3 py-2">5,320</td>
                      </tr>
                      <tr className="border-t border-gray-700">
                        <td className="px-3 py-2">Sora 2 Pro</td>
                        <td className="px-3 py-2">{language === 'zh' ? '视频' : 'Video'}</td>
                        <td className="px-3 py-2">2,400</td>
                        <td className="px-3 py-2">18.6%</td>
                        <td className="px-3 py-2">4,480</td>
                      </tr>
                      <tr className="border-t border-gray-700">
                        <td className="px-3 py-2">{language === 'zh' ? 'AI 音乐' : 'AI Music'}</td>
                        <td className="px-3 py-2">{language === 'zh' ? '音频' : 'Audio'}</td>
                        <td className="px-3 py-2">180</td>
                        <td className="px-3 py-2">16.8%</td>
                        <td className="px-3 py-2">4,040</td>
                      </tr>
                      <tr className="border-t border-gray-700">
                        <td className="px-3 py-2">{language === 'zh' ? '生成歌词' : 'Generate Lyrics'}</td>
                        <td className="px-3 py-2">{language === 'zh' ? '文本' : 'Text'}</td>
                        <td className="px-3 py-2">25</td>
                        <td className="px-3 py-2">14.1%</td>
                        <td className="px-3 py-2">3,400</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* 5. Billing + Rules Row */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {/* Billing Snapshot - Left */}
                <div className="bg-gray-800 rounded-xl p-5 border border-gray-700">
                  <h3 className="font-semibold text-white mb-4">{language === 'zh' ? '账单快照' : 'Billing Snapshot'}</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">{language === 'zh' ? '当前套餐' : 'Current Plan'}</span>
                      <span className="text-white">Pro Lv3</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">{language === 'zh' ? '月费' : 'Monthly Fee'}</span>
                      <span className="text-white">USD 129</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">{language === 'zh' ? '本月充值' : 'Top-up This Month'}</span>
                      <span className="text-white">USD 50</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">{language === 'zh' ? '下次账单' : 'Next Invoice'}</span>
                      <span className="text-white">2026-05-01</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">{language === 'zh' ? '支付方式' : 'Payment'}</span>
                      <span className="text-white">Visa **** 4821</span>
                    </div>
                  </div>
                  <button className="mt-4 w-full py-2 rounded-lg bg-purple-600 text-white text-sm text-center hover:bg-purple-700 transition-colors">
                    {language === 'zh' ? '管理账单 →' : 'Manage Billing →'}
                  </button>
                </div>

                {/* Credit Rules - Right */}
                <div className="bg-purple-950 rounded-xl p-5 border border-purple-800">
                  <div className="flex items-center gap-2 mb-4">
                    <Zap className="w-4 h-4 text-purple-400" />
                    <h3 className="font-semibold text-white">{language === 'zh' ? '点数规则' : 'Credit Rules'}</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2 text-sm">
                      <span className="text-purple-400">•</span>
                      <span className="text-gray-300">{language === 'zh' ? '1 credit = USD 0.005' : '1 credit = USD 0.005'}</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm">
                      <span className="text-purple-400">•</span>
                      <span className="text-gray-300">{language === 'zh' ? '充值：USD 1 = 200 credits' : 'Top-ups: USD 1 = 200 credits'}</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm">
                      <span className="text-purple-400">•</span>
                      <span className="text-gray-300">{language === 'zh' ? '订阅 credits 每月刷新' : 'Subscription credits refresh monthly'}</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm">
                      <span className="text-purple-400">•</span>
                      <span className="text-gray-300">{language === 'zh' ? '充值 credits 永不过期' : 'Top-up credits never expire'}</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm">
                      <span className="text-purple-400">•</span>
                      <span className="text-gray-300">{language === 'zh' ? '充值 credits 优先消耗' : 'Top-up credits are consumed first'}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 6. Alerts */}
              <div className="bg-gray-800 rounded-xl p-5 border border-gray-700">
                <div className="flex items-center gap-2 mb-4">
                  <Bell className="w-4 h-4 text-yellow-400" />
                  <h3 className="font-semibold text-white">{language === 'zh' ? '提醒与建议' : 'Alerts & Recommendations'}</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-700/50 rounded-lg gap-4">
                    <div className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-300">
                        {language === 'zh' ? '当前使用趋势下，订阅 credits 预计 6 天后耗尽。' : 'At current usage rate, subscription credits will be depleted in 6 days.'}
                      </span>
                    </div>
                    <button className="text-xs px-3 py-1 bg-gray-600 hover:bg-gray-500 rounded text-gray-300 whitespace-nowrap transition-colors">
                      {language === 'zh' ? '立即充值' : 'Top Up Now'}
                    </button>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-gray-700/50 rounded-lg gap-4">
                    <div className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-300">
                        {language === 'zh' ? "项目 'SEA Commerce Bot' 为本周最高消耗项目。" : "Project 'SEA Commerce Bot' is this week's highest consumer."}
                      </span>
                    </div>
                    <button className="text-xs px-3 py-1 bg-gray-600 hover:bg-gray-500 rounded text-gray-300 whitespace-nowrap transition-colors">
                      {language === 'zh' ? '查看用量' : 'View Usage'}
                    </button>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-gray-700/50 rounded-lg gap-4">
                    <div className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-300">
                        {language === 'zh' ? '若月用量持续高于 42,000 credits，建议比较 Pro Lv5 / Pro Max。' : 'If monthly usage continues above 42,000 credits, consider comparing Pro Lv5 / Pro Max.'}
                      </span>
                    </div>
                    <button className="text-xs px-3 py-1 bg-gray-600 hover:bg-gray-500 rounded text-gray-300 whitespace-nowrap transition-colors">
                      {language === 'zh' ? '比较套餐' : 'Compare Plans'}
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* API Keys Page */}
          {activePage === 'api-keys' && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h1 className="text-2xl font-bold text-white">
                    {language === 'zh' ? 'API 密钥管理' : 'API Keys Management'}
                  </h1>
                  <p className="text-sm text-gray-400 mt-1">
                    {language === 'zh' ? '创建和管理您的 API 访问密钥' : 'Create and manage your API access keys'}
                  </p>
                </div>
                <button className="bg-purple-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors flex items-center gap-2">
                  <Plus className="w-4 h-4" />
                  {language === 'zh' ? '创建新密钥' : 'Create New Key'}
                </button>
              </div>

              <div className="space-y-4">
                {/* API Key Card 1 */}
                <div className="bg-gray-800 rounded-xl p-5 border border-gray-700">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-white font-semibold">{language === 'zh' ? '生产环境 API Key' : 'Production API Key'}</h3>
                        <span className="text-xs px-2 py-1 bg-green-500/20 text-green-400 rounded">{language === 'zh' ? '活跃' : 'Active'}</span>
                      </div>
                      <p className="text-sm text-gray-400 mb-3">{language === 'zh' ? '用于生产环境' : 'Used for production environment'}</p>
                      <div className="flex items-center gap-2 bg-gray-900 px-3 py-2 rounded-lg">
                        <code className="text-sm text-purple-400 flex-1">sk_live_••••••••••••••••••••••••3x9K</code>
                        <button className="text-gray-400 hover:text-white transition-colors">
                          <Copy className="w-4 h-4" />
                        </button>
                        <button className="text-gray-400 hover:text-white transition-colors">
                          <Eye className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    <button className="text-red-400 hover:text-red-300 transition-colors">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="grid grid-cols-4 gap-4 text-xs mt-4 pt-4 border-t border-gray-700">
                    <div>
                      <div className="text-gray-500">{language === 'zh' ? '创建时间' : 'Created'}</div>
                      <div className="text-white mt-1">2026-03-15</div>
                    </div>
                    <div>
                      <div className="text-gray-500">{language === 'zh' ? '最后使用' : 'Last Used'}</div>
                      <div className="text-white mt-1">{language === 'zh' ? '2 小时前' : '2h ago'}</div>
                    </div>
                    <div>
                      <div className="text-gray-500">{language === 'zh' ? '总调用次数' : 'Total Calls'}</div>
                      <div className="text-white mt-1">1,234,567</div>
                    </div>
                    <div>
                      <div className="text-gray-500">{language === 'zh' ? '点数使用' : 'Credits Used'}</div>
                      <div className="text-white mt-1">45,890</div>
                    </div>
                  </div>

                  {/* Advanced Settings Toggle */}
                  <div className="mt-4 pt-4 border-t border-gray-700">
                    <button
                      onClick={() => setExpandedKeySettings(expandedKeySettings === 'prod' ? null : 'prod')}
                      className="flex items-center justify-between w-full text-sm text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      <span>{language === 'zh' ? '高级设置' : 'Advanced Settings'}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform ${expandedKeySettings === 'prod' ? 'rotate-180' : ''}`} />
                    </button>

                    {expandedKeySettings === 'prod' && (
                      <div className="mt-4 space-y-3">
                        {/* Permission Scope */}
                        <div className="bg-gray-900 rounded-lg p-3">
                          <div className="text-xs text-gray-400 mb-1">{language === 'zh' ? '权限范围' : 'Permission Scope'}</div>
                          <div className="text-sm text-white">{language === 'zh' ? '全部模型 · 读写权限' : 'All Models · Read/Write'}</div>
                        </div>

                        {/* IP Whitelist */}
                        <div className="bg-gray-900 rounded-lg p-3">
                          <div className="text-xs text-gray-400 mb-1">{language === 'zh' ? 'IP白名单' : 'IP Whitelist'}</div>
                          <div className="text-sm text-white">203.0.113.0/24, 198.51.100.42</div>
                        </div>

                        {/* Spending Limit */}
                        <div className="bg-gray-900 rounded-lg p-3">
                          <div className="text-xs text-gray-400 mb-1">{language === 'zh' ? '消费限额' : 'Spending Limit'}</div>
                          <div className="text-sm text-white">{language === 'zh' ? '每月 50,000 点数' : '50,000 credits/month'}</div>
                        </div>

                        {/* Key Expiration */}
                        <div className="bg-gray-900 rounded-lg p-3">
                          <div className="text-xs text-gray-400 mb-1">{language === 'zh' ? '密钥到期' : 'Key Expiration'}</div>
                          <div className="text-sm text-white">{language === 'zh' ? '2027-03-15 (365天后)' : '2027-03-15 (365 days)'}</div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* API Key Card 2 */}
                <div className="bg-gray-800 rounded-xl p-5 border border-gray-700">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-white font-semibold">{language === 'zh' ? '开发环境 API Key' : 'Development API Key'}</h3>
                        <span className="text-xs px-2 py-1 bg-green-500/20 text-green-400 rounded">{language === 'zh' ? '活跃' : 'Active'}</span>
                      </div>
                      <p className="text-sm text-gray-400 mb-3">{language === 'zh' ? '用于开发和测试' : 'Used for development and testing'}</p>
                      <div className="flex items-center gap-2 bg-gray-900 px-3 py-2 rounded-lg">
                        <code className="text-sm text-purple-400 flex-1">sk_test_••••••••••••••••••••••••7mN2</code>
                        <button className="text-gray-400 hover:text-white transition-colors">
                          <Copy className="w-4 h-4" />
                        </button>
                        <button className="text-gray-400 hover:text-white transition-colors">
                          <Eye className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    <button className="text-red-400 hover:text-red-300 transition-colors">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="grid grid-cols-4 gap-4 text-xs mt-4 pt-4 border-t border-gray-700">
                    <div>
                      <div className="text-gray-500">{language === 'zh' ? '创建时间' : 'Created'}</div>
                      <div className="text-white mt-1">2026-02-20</div>
                    </div>
                    <div>
                      <div className="text-gray-500">{language === 'zh' ? '最后使用' : 'Last Used'}</div>
                      <div className="text-white mt-1">{language === 'zh' ? '5 小时前' : '5h ago'}</div>
                    </div>
                    <div>
                      <div className="text-gray-500">{language === 'zh' ? '总调用次数' : 'Total Calls'}</div>
                      <div className="text-white mt-1">56,789</div>
                    </div>
                    <div>
                      <div className="text-gray-500">{language === 'zh' ? '点数使用' : 'Credits Used'}</div>
                      <div className="text-white mt-1">8,450</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Usage Page */}
          {activePage === 'usage' && (
            <div>
              {/* 1) Header */}
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h1 className="text-2xl font-bold text-white">
                    {language === 'zh' ? '使用量与计费' : 'Usage & Billing'}
                  </h1>
                  <p className="text-sm text-gray-400 mt-1">
                    {language === 'zh' ? '追踪请求量、点数消耗、支出与性能。' : 'Track requests, credits consumption, spending, and performance.'}
                  </p>
                </div>
                <div className="flex gap-2">
                  <button className="bg-gray-700 text-gray-300 px-4 py-2 rounded-lg text-sm hover:bg-gray-600 transition-colors">
                    {language === 'zh' ? '导出报告' : 'Export Report'}
                  </button>
                  <button className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-purple-700 transition-colors">
                    {language === 'zh' ? '前往账单' : 'Go to Billing'}
                  </button>
                </div>
              </div>

              {/* 2) Summary Cards */}
              <div className="grid grid-cols-5 gap-3 mb-6">
                <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
                  <div className="text-xs text-gray-400 mb-1">{language === 'zh' ? '总请求数' : 'Total Requests'}</div>
                  <div className="text-2xl font-bold text-blue-400">2.4M</div>
                  <div className="text-xs text-gray-500 mt-1">{language === 'zh' ? '本月累计' : 'This month total'}</div>
                </div>
                <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
                  <div className="text-xs text-gray-400 mb-1">{language === 'zh' ? '点数消耗' : 'Credits Used'}</div>
                  <div className="text-2xl font-bold text-purple-400">41,580</div>
                  <div className="text-xs text-gray-500 mt-1">{language === 'zh' ? '本计费周期' : 'This billing cycle'}</div>
                </div>
                <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
                  <div className="text-xs text-gray-400 mb-1">{language === 'zh' ? '预计支出' : 'Est. Spend'}</div>
                  <div className="text-2xl font-bold text-yellow-400">USD 318.40</div>
                  <div className="text-xs text-gray-500 mt-1">{language === 'zh' ? '含订阅+充值' : 'Incl. sub + top-up'}</div>
                </div>
                <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
                  <div className="text-xs text-gray-400 mb-1">{language === 'zh' ? '平均延迟' : 'Avg Latency'}</div>
                  <div className="text-2xl font-bold text-green-400">218ms</div>
                  <div className="text-xs text-gray-500 mt-1">P95: 480ms</div>
                </div>
                <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
                  <div className="text-xs text-gray-400 mb-1">{language === 'zh' ? '成功率' : 'Success Rate'}</div>
                  <div className="text-2xl font-bold text-green-400">99.2%</div>
                  <div className="text-xs text-gray-500 mt-1">{language === 'zh' ? '失败 1,920 次' : 'Failed 1,920 times'}</div>
                </div>
              </div>

              {/* 3) Chart Section */}
              <div className="bg-gray-800 rounded-xl p-5 border border-gray-700 mb-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-semibold text-white">{language === 'zh' ? '使用趋势' : 'Usage Trends'}</h3>
                  <div className="flex gap-2">
                    {/* Metric buttons */}
                    <div className="flex gap-1">
                      <button className="bg-purple-600 text-white text-xs px-3 py-1 rounded">{language === 'zh' ? '点数' : 'Credits'}</button>
                      <button className="bg-gray-700 text-gray-400 text-xs px-3 py-1 rounded">{language === 'zh' ? '请求量' : 'Requests'}</button>
                      <button className="bg-gray-700 text-gray-400 text-xs px-3 py-1 rounded">{language === 'zh' ? '支出' : 'Spend'}</button>
                    </div>
                    {/* Time buttons */}
                    <div className="flex gap-1">
                      <button className="bg-purple-600 text-white text-xs px-3 py-1 rounded">7D</button>
                      <button className="bg-gray-700 text-gray-400 text-xs px-3 py-1 rounded">30D</button>
                      <button className="bg-gray-700 text-gray-400 text-xs px-3 py-1 rounded">90D</button>
                    </div>
                  </div>
                </div>
                {/* Bar Chart */}
                <div className="mt-4 h-32 flex items-end gap-1.5">
                  <div className="flex-1 rounded-t bg-gradient-to-t from-blue-700 to-blue-400" style={{ height: '35%' }}></div>
                  <div className="flex-1 rounded-t bg-gradient-to-t from-blue-700 to-blue-400" style={{ height: '52%' }}></div>
                  <div className="flex-1 rounded-t bg-gradient-to-t from-blue-700 to-blue-400" style={{ height: '40%' }}></div>
                  <div className="flex-1 rounded-t bg-gradient-to-t from-blue-700 to-blue-400" style={{ height: '78%' }}></div>
                  <div className="flex-1 rounded-t bg-gradient-to-t from-blue-700 to-blue-400" style={{ height: '50%' }}></div>
                  <div className="flex-1 rounded-t bg-gradient-to-t from-blue-700 to-blue-400" style={{ height: '65%' }}></div>
                  <div className="flex-1 rounded-t bg-gradient-to-t from-blue-700 to-blue-400" style={{ height: '88%' }}></div>
                  <div className="flex-1 rounded-t bg-gradient-to-t from-blue-700 to-blue-400" style={{ height: '62%' }}></div>
                  <div className="flex-1 rounded-t bg-gradient-to-t from-blue-700 to-blue-400" style={{ height: '72%' }}></div>
                  <div className="flex-1 rounded-t bg-gradient-to-t from-blue-700 to-blue-400" style={{ height: '45%' }}></div>
                  <div className="flex-1 rounded-t bg-gradient-to-t from-blue-700 to-blue-400" style={{ height: '82%' }}></div>
                  <div className="flex-1 rounded-t bg-gradient-to-t from-blue-700 to-blue-400" style={{ height: '58%' }}></div>
                  <div className="flex-1 rounded-t bg-gradient-to-t from-blue-700 to-blue-400" style={{ height: '70%' }}></div>
                  <div className="flex-1 rounded-t bg-gradient-to-t from-blue-700 to-blue-400" style={{ height: '92%' }}></div>
                </div>
              </div>

              {/* 4) Breakdown Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {/* Left: By Project */}
                <div className="bg-gray-800 rounded-xl p-5 border border-gray-700">
                  <h3 className="font-semibold text-white mb-3">{language === 'zh' ? '按项目分布' : 'By Project'}</h3>
                  <table className="w-full text-xs">
                    <thead>
                      <tr className="bg-gray-900 text-gray-400 text-left">
                        <th className="px-3 py-2">{language === 'zh' ? '项目' : 'Project'}</th>
                        <th className="px-3 py-2">{language === 'zh' ? '请求数' : 'Requests'}</th>
                        <th className="px-3 py-2">{language === 'zh' ? '点数' : 'Credits'}</th>
                        <th className="px-3 py-2">{language === 'zh' ? '占比' : 'Share'}</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-300">
                      <tr className="border-t border-gray-700">
                        <td className="px-3 py-2">SEA Commerce Bot</td>
                        <td className="px-3 py-2">18,440</td>
                        <td className="px-3 py-2">11,800</td>
                        <td className="px-3 py-2">38.2%</td>
                      </tr>
                      <tr className="border-t border-gray-700">
                        <td className="px-3 py-2">Marketing Automation</td>
                        <td className="px-3 py-2">12,840</td>
                        <td className="px-3 py-2">8,200</td>
                        <td className="px-3 py-2">26.6%</td>
                      </tr>
                      <tr className="border-t border-gray-700">
                        <td className="px-3 py-2">AI Content Studio</td>
                        <td className="px-3 py-2">8,320</td>
                        <td className="px-3 py-2">5,100</td>
                        <td className="px-3 py-2">16.5%</td>
                      </tr>
                      <tr className="border-t border-gray-700">
                        <td className="px-3 py-2">Internal Testing</td>
                        <td className="px-3 py-2">2,100</td>
                        <td className="px-3 py-2">980</td>
                        <td className="px-3 py-2">3.2%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Right: By Model */}
                <div className="bg-gray-800 rounded-xl p-5 border border-gray-700">
                  <h3 className="font-semibold text-white mb-3">{language === 'zh' ? '按模型分布' : 'By Model'}</h3>
                  <table className="w-full text-xs">
                    <thead>
                      <tr className="bg-gray-900 text-gray-400 text-left">
                        <th className="px-3 py-2">{language === 'zh' ? '模型' : 'Model'}</th>
                        <th className="px-3 py-2">{language === 'zh' ? '类型' : 'Type'}</th>
                        <th className="px-3 py-2">{language === 'zh' ? '点数' : 'Credits'}</th>
                        <th className="px-3 py-2">{language === 'zh' ? '占比' : 'Share'}</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-300">
                      <tr className="border-t border-gray-700">
                        <td className="px-3 py-2">GPT-4o Image</td>
                        <td className="px-3 py-2">{language === 'zh' ? '图像' : 'Image'}</td>
                        <td className="px-3 py-2">6,840</td>
                        <td className="px-3 py-2">28.4%</td>
                      </tr>
                      <tr className="border-t border-gray-700">
                        <td className="px-3 py-2">Kling 3.0</td>
                        <td className="px-3 py-2">{language === 'zh' ? '视频' : 'Video'}</td>
                        <td className="px-3 py-2">5,320</td>
                        <td className="px-3 py-2">22.1%</td>
                      </tr>
                      <tr className="border-t border-gray-700">
                        <td className="px-3 py-2">Sora 2 Pro</td>
                        <td className="px-3 py-2">{language === 'zh' ? '视频' : 'Video'}</td>
                        <td className="px-3 py-2">4,480</td>
                        <td className="px-3 py-2">18.6%</td>
                      </tr>
                      <tr className="border-t border-gray-700">
                        <td className="px-3 py-2">AI Music</td>
                        <td className="px-3 py-2">{language === 'zh' ? '音频' : 'Audio'}</td>
                        <td className="px-3 py-2">4,040</td>
                        <td className="px-3 py-2">16.8%</td>
                      </tr>
                      <tr className="border-t border-gray-700">
                        <td className="px-3 py-2">Generate Lyrics</td>
                        <td className="px-3 py-2">{language === 'zh' ? '文本' : 'Text'}</td>
                        <td className="px-3 py-2">3,400</td>
                        <td className="px-3 py-2">14.1%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* 5) Detailed Records */}
              <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
                {/* Header with Filters */}
                <div className="flex justify-between items-center p-4">
                  <h3 className="font-semibold text-white">{language === 'zh' ? '详细用量记录' : 'Detailed Usage Records'}</h3>
                  <div className="flex gap-2">
                    <select className="bg-gray-700 border border-gray-600 rounded px-3 py-1.5 text-xs text-gray-400">
                      <option>{language === 'zh' ? '全部项目' : 'All Projects'}</option>
                    </select>
                    <select className="bg-gray-700 border border-gray-600 rounded px-3 py-1.5 text-xs text-gray-400">
                      <option>{language === 'zh' ? '全部模型' : 'All Models'}</option>
                    </select>
                    <select className="bg-gray-700 border border-gray-600 rounded px-3 py-1.5 text-xs text-gray-400">
                      <option>{language === 'zh' ? '全部类型' : 'All Types'}</option>
                    </select>
                  </div>
                </div>

                {/* Table */}
                <table className="w-full text-xs">
                  <thead>
                    <tr className="bg-gray-900 text-gray-400 text-left">
                      <th className="px-4 py-3">{language === 'zh' ? '时间' : 'Time'}</th>
                      <th className="px-4 py-3">{language === 'zh' ? '项目' : 'Project'}</th>
                      <th className="px-4 py-3">{language === 'zh' ? '模型' : 'Model'}</th>
                      <th className="px-4 py-3">{language === 'zh' ? '类型' : 'Type'}</th>
                      <th className="px-4 py-3">{language === 'zh' ? '请求数' : 'Requests'}</th>
                      <th className="px-4 py-3">Credits</th>
                      <th className="px-4 py-3">{language === 'zh' ? '延迟' : 'Latency'}</th>
                      <th className="px-4 py-3">{language === 'zh' ? '状态' : 'Status'}</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-t border-gray-700">
                      <td className="px-4 py-3">2026-04-10 14:32</td>
                      <td className="px-4 py-3">SEA Commerce Bot</td>
                      <td className="px-4 py-3">Kling 3.0</td>
                      <td className="px-4 py-3">{language === 'zh' ? '视频' : 'Video'}</td>
                      <td className="px-4 py-3">1</td>
                      <td className="px-4 py-3">1,200</td>
                      <td className="px-4 py-3">3,240ms</td>
                      <td className="px-4 py-3">
                        <span className="bg-green-900 text-green-400 rounded-full px-2 py-0.5">
                          {language === 'zh' ? '成功' : 'Success'}
                        </span>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-700">
                      <td className="px-4 py-3">2026-04-10 14:28</td>
                      <td className="px-4 py-3">Marketing Automation</td>
                      <td className="px-4 py-3">GPT-4o Image</td>
                      <td className="px-4 py-3">{language === 'zh' ? '图像' : 'Image'}</td>
                      <td className="px-4 py-3">3</td>
                      <td className="px-4 py-3">1,350</td>
                      <td className="px-4 py-3">820ms</td>
                      <td className="px-4 py-3">
                        <span className="bg-green-900 text-green-400 rounded-full px-2 py-0.5">
                          {language === 'zh' ? '成功' : 'Success'}
                        </span>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-700">
                      <td className="px-4 py-3">2026-04-10 14:15</td>
                      <td className="px-4 py-3">AI Content Studio</td>
                      <td className="px-4 py-3">Generate Lyrics</td>
                      <td className="px-4 py-3">{language === 'zh' ? '文本' : 'Text'}</td>
                      <td className="px-4 py-3">12</td>
                      <td className="px-4 py-3">300</td>
                      <td className="px-4 py-3">180ms</td>
                      <td className="px-4 py-3">
                        <span className="bg-green-900 text-green-400 rounded-full px-2 py-0.5">
                          {language === 'zh' ? '成功' : 'Success'}
                        </span>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-700">
                      <td className="px-4 py-3">2026-04-10 13:58</td>
                      <td className="px-4 py-3">SEA Commerce Bot</td>
                      <td className="px-4 py-3">Sora 2 Pro</td>
                      <td className="px-4 py-3">{language === 'zh' ? '视频' : 'Video'}</td>
                      <td className="px-4 py-3">1</td>
                      <td className="px-4 py-3">2,400</td>
                      <td className="px-4 py-3">8,100ms</td>
                      <td className="px-4 py-3">
                        <span className="bg-green-900 text-green-400 rounded-full px-2 py-0.5">
                          {language === 'zh' ? '成功' : 'Success'}
                        </span>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-700">
                      <td className="px-4 py-3">2026-04-10 13:42</td>
                      <td className="px-4 py-3">Internal Testing</td>
                      <td className="px-4 py-3">GPT-4o Image</td>
                      <td className="px-4 py-3">{language === 'zh' ? '图像' : 'Image'}</td>
                      <td className="px-4 py-3">2</td>
                      <td className="px-4 py-3">900</td>
                      <td className="px-4 py-3">950ms</td>
                      <td className="px-4 py-3">
                        <span className="bg-red-900 text-red-400 rounded-full px-2 py-0.5">
                          {language === 'zh' ? '失败' : 'Failed'}
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Logs Page */}
          {activePage === 'logs' && (
            <div>
              {/* 1) Header */}
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h1 className="text-2xl font-bold text-white">
                    {language === 'zh' ? '日志' : 'Logs'}
                  </h1>
                  <p className="text-sm text-gray-400 mt-1">
                    {language === 'zh' ? '查看请求日志、错误日志与操作记录。' : 'View request logs, error logs, and operation records.'}
                  </p>
                </div>
                <div className="flex gap-2">
                  <button className="bg-gray-700 text-gray-300 px-4 py-2 rounded-lg text-sm hover:bg-gray-600 transition-colors">
                    {language === 'zh' ? '导出日志' : 'Export Logs'}
                  </button>
                </div>
              </div>

              {/* 2) Stats Row */}
              <div className="grid grid-cols-4 gap-4 mb-6">
                <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
                  <div className="text-xs text-gray-400 mb-1">{language === 'zh' ? '总请求数(今日)' : 'Total Requests (Today)'}</div>
                  <div className="text-2xl font-bold text-blue-400">84,320</div>
                  <div className="text-xs text-gray-500 mt-1">{language === 'zh' ? '+12% vs 昨日' : '+12% vs yesterday'}</div>
                </div>
                <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
                  <div className="text-xs text-gray-400 mb-1">{language === 'zh' ? '错误数(今日)' : 'Errors (Today)'}</div>
                  <div className="text-2xl font-bold text-red-400">156</div>
                  <div className="text-xs text-gray-500 mt-1">{language === 'zh' ? '错误率 0.18%' : 'Error rate 0.18%'}</div>
                </div>
                <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
                  <div className="text-xs text-gray-400 mb-1">{language === 'zh' ? '平均延迟' : 'Avg Latency'}</div>
                  <div className="text-2xl font-bold text-green-400">218ms</div>
                  <div className="text-xs text-gray-500 mt-1">{language === 'zh' ? 'P95: 480ms' : 'P95: 480ms'}</div>
                </div>
                <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
                  <div className="text-xs text-gray-400 mb-1">{language === 'zh' ? '最高延迟请求' : 'Max Latency'}</div>
                  <div className="text-2xl font-bold text-yellow-400">12,480ms</div>
                  <div className="text-xs text-gray-500 mt-1">{language === 'zh' ? 'SEA 电商机器人' : 'SEA Commerce Bot'}</div>
                </div>
              </div>

              {/* 3) Tab Bar */}
              <div className="flex gap-1 mb-4 bg-gray-800 rounded-xl p-1 border border-gray-700 w-fit">
                <button className="px-4 py-2 rounded-lg text-sm cursor-pointer bg-purple-600 text-white">
                  {language === 'zh' ? '请求日志' : 'Request Logs'}
                </button>
                <button className="px-4 py-2 rounded-lg text-sm cursor-pointer text-gray-400 hover:text-white hover:bg-gray-700 transition-colors">
                  {language === 'zh' ? '错误日志' : 'Error Logs'}
                </button>
                <button className="px-4 py-2 rounded-lg text-sm cursor-pointer text-gray-400 hover:text-white hover:bg-gray-700 transition-colors">
                  {language === 'zh' ? '任务日志' : 'Task Logs'}
                </button>
                <button className="px-4 py-2 rounded-lg text-sm cursor-pointer text-gray-400 hover:text-white hover:bg-gray-700 transition-colors">
                  {language === 'zh' ? '操作记录' : 'Operation Records'}
                </button>
              </div>

              {/* 4) Filter Bar */}
              <div className="flex gap-3 mb-4 bg-gray-800 rounded-xl p-3 border border-gray-700">
                <input
                  type="text"
                  placeholder={language === 'zh' ? '🔍 搜索 Request ID、模型、项目...' : '🔍 Search Request ID, model, project...'}
                  className="text-xs bg-gray-700 border border-gray-600 rounded px-3 py-1.5 text-gray-400 w-56 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                />
                <select className="text-xs bg-gray-700 border border-gray-600 rounded px-3 py-1.5 text-gray-400">
                  <option>{language === 'zh' ? '全部项目' : 'All Projects'}</option>
                </select>
                <select className="text-xs bg-gray-700 border border-gray-600 rounded px-3 py-1.5 text-gray-400">
                  <option>{language === 'zh' ? '全部模型' : 'All Models'}</option>
                </select>
                <select className="text-xs bg-gray-700 border border-gray-600 rounded px-3 py-1.5 text-gray-400">
                  <option>{language === 'zh' ? '全部状态' : 'All Status'}</option>
                </select>
                <select className="text-xs bg-gray-700 border border-gray-600 rounded px-3 py-1.5 text-gray-400">
                  <option>{language === 'zh' ? '最近 1 小时' : 'Last 1 Hour'}</option>
                </select>
              </div>

              {/* 5) Request Logs Table */}
              <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-900 text-xs text-gray-400 text-left">
                      <th className="px-4 py-3">{language === 'zh' ? '时间' : 'Time'}</th>
                      <th className="px-4 py-3">Request ID</th>
                      <th className="px-4 py-3">{language === 'zh' ? '项目' : 'Project'}</th>
                      <th className="px-4 py-3">{language === 'zh' ? '模型' : 'Model'}</th>
                      <th className="px-4 py-3">{language === 'zh' ? '类型' : 'Type'}</th>
                      <th className="px-4 py-3">{language === 'zh' ? '点数' : 'Credits'}</th>
                      <th className="px-4 py-3">{language === 'zh' ? '延迟' : 'Latency'}</th>
                      <th className="px-4 py-3">HTTP</th>
                      <th className="px-4 py-3">{language === 'zh' ? '状态' : 'Status'}</th>
                    </tr>
                  </thead>
                  <tbody className="text-xs text-gray-300">
                    <tr className="border-t border-gray-700">
                      <td className="px-4 py-3">14:32:01</td>
                      <td className="px-4 py-3">req_a1b2c3d4</td>
                      <td className="px-4 py-3">SEA Commerce Bot</td>
                      <td className="px-4 py-3">Kling 3.0</td>
                      <td className="px-4 py-3">{language === 'zh' ? '视频' : 'Video'}</td>
                      <td className="px-4 py-3">1,200</td>
                      <td className="px-4 py-3">3,240ms</td>
                      <td className="px-4 py-3">200</td>
                      <td className="px-4 py-3">
                        <span className="bg-green-900 text-green-400 rounded-full px-2 py-0.5">
                          {language === 'zh' ? '成功' : 'Success'}
                        </span>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-700">
                      <td className="px-4 py-3">14:28:15</td>
                      <td className="px-4 py-3">req_e5f6g7h8</td>
                      <td className="px-4 py-3">Marketing Automation</td>
                      <td className="px-4 py-3">GPT-4o Image</td>
                      <td className="px-4 py-3">{language === 'zh' ? '图像' : 'Image'}</td>
                      <td className="px-4 py-3">450</td>
                      <td className="px-4 py-3">820ms</td>
                      <td className="px-4 py-3">200</td>
                      <td className="px-4 py-3">
                        <span className="bg-green-900 text-green-400 rounded-full px-2 py-0.5">
                          {language === 'zh' ? '成功' : 'Success'}
                        </span>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-700">
                      <td className="px-4 py-3">14:25:44</td>
                      <td className="px-4 py-3">req_i9j0k1l2</td>
                      <td className="px-4 py-3">Internal Testing</td>
                      <td className="px-4 py-3">GPT-4o Image</td>
                      <td className="px-4 py-3">{language === 'zh' ? '图像' : 'Image'}</td>
                      <td className="px-4 py-3">0</td>
                      <td className="px-4 py-3">950ms</td>
                      <td className="px-4 py-3">422</td>
                      <td className="px-4 py-3">
                        <span className="bg-red-900 text-red-400 rounded-full px-2 py-0.5">
                          {language === 'zh' ? '失败' : 'Failed'}
                        </span>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-700">
                      <td className="px-4 py-3">14:20:33</td>
                      <td className="px-4 py-3">req_m3n4o5p6</td>
                      <td className="px-4 py-3">AI Content Studio</td>
                      <td className="px-4 py-3">Generate Lyrics</td>
                      <td className="px-4 py-3">{language === 'zh' ? '文本' : 'Text'}</td>
                      <td className="px-4 py-3">25</td>
                      <td className="px-4 py-3">180ms</td>
                      <td className="px-4 py-3">200</td>
                      <td className="px-4 py-3">
                        <span className="bg-green-900 text-green-400 rounded-full px-2 py-0.5">
                          {language === 'zh' ? '成功' : 'Success'}
                        </span>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-700">
                      <td className="px-4 py-3">14:15:12</td>
                      <td className="px-4 py-3">req_q7r8s9t0</td>
                      <td className="px-4 py-3">SEA Commerce Bot</td>
                      <td className="px-4 py-3">Sora 2 Pro</td>
                      <td className="px-4 py-3">{language === 'zh' ? '视频' : 'Video'}</td>
                      <td className="px-4 py-3">2,400</td>
                      <td className="px-4 py-3">8,100ms</td>
                      <td className="px-4 py-3">200</td>
                      <td className="px-4 py-3">
                        <span className="bg-green-900 text-green-400 rounded-full px-2 py-0.5">
                          {language === 'zh' ? '成功' : 'Success'}
                        </span>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-700">
                      <td className="px-4 py-3">14:08:55</td>
                      <td className="px-4 py-3">req_u1v2w3x4</td>
                      <td className="px-4 py-3">Marketing Automation</td>
                      <td className="px-4 py-3">AI Music</td>
                      <td className="px-4 py-3">{language === 'zh' ? '音频' : 'Audio'}</td>
                      <td className="px-4 py-3">180</td>
                      <td className="px-4 py-3">2,200ms</td>
                      <td className="px-4 py-3">200</td>
                      <td className="px-4 py-3">
                        <span className="bg-green-900 text-green-400 rounded-full px-2 py-0.5">
                          {language === 'zh' ? '成功' : 'Success'}
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>

                {/* 6) Pagination Footer */}
                <div className="flex justify-between items-center p-4 border-t border-gray-700 text-xs text-gray-400">
                  <div>
                    {language === 'zh' ? '显示 1–6 共 84,320 条' : 'Showing 1–6 of 84,320 entries'}
                  </div>
                  <div className="flex gap-2">
                    <button className="bg-gray-700 text-gray-300 px-3 py-1 rounded text-xs hover:bg-gray-600 transition-colors">
                      {language === 'zh' ? '上一页' : 'Previous'}
                    </button>
                    <button className="bg-gray-700 text-gray-300 px-3 py-1 rounded text-xs hover:bg-gray-600 transition-colors">
                      {language === 'zh' ? '下一页' : 'Next'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Models Page */}
          {activePage === 'models' && (
            <div>
              {/* 1) Header */}
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h1 className="text-2xl font-bold text-white">
                    {language === 'zh' ? '模型' : 'Models'}
                  </h1>
                  <p className="text-sm text-gray-400 mt-1">
                    {language === 'zh' ? '浏览并管理可调用的 AI 模型。' : 'Browse and manage available AI models.'}
                  </p>
                </div>
                <div className="flex gap-2">
                  <button className="bg-gray-700 text-gray-300 px-4 py-2 rounded-lg text-sm hover:bg-gray-600 transition-colors">
                    {language === 'zh' ? '比较模型' : 'Compare Models'}
                  </button>
                  <button className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-purple-700 transition-colors">
                    {language === 'zh' ? '申请内测' : 'Apply for Beta'}
                  </button>
                </div>
              </div>

              {/* 2) Category Tabs */}
              <div className="flex gap-2 mb-6">
                <button className="px-4 py-2 rounded-lg text-sm cursor-pointer border bg-purple-600 text-white border-purple-600">
                  {language === 'zh' ? '全部' : 'All'}
                </button>
                <button className="px-4 py-2 rounded-lg text-sm cursor-pointer border bg-gray-800 text-gray-400 border-gray-700 hover:bg-gray-700 transition-colors">
                  {language === 'zh' ? '文本' : 'Text'}
                </button>
                <button className="px-4 py-2 rounded-lg text-sm cursor-pointer border bg-gray-800 text-gray-400 border-gray-700 hover:bg-gray-700 transition-colors">
                  {language === 'zh' ? '图像' : 'Image'}
                </button>
                <button className="px-4 py-2 rounded-lg text-sm cursor-pointer border bg-gray-800 text-gray-400 border-gray-700 hover:bg-gray-700 transition-colors">
                  {language === 'zh' ? '视频' : 'Video'}
                </button>
                <button className="px-4 py-2 rounded-lg text-sm cursor-pointer border bg-gray-800 text-gray-400 border-gray-700 hover:bg-gray-700 transition-colors">
                  {language === 'zh' ? '音频' : 'Audio'}
                </button>
              </div>

              {/* 3) Stats Row */}
              <div className="grid grid-cols-4 gap-4 mb-6">
                <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
                  <div className="text-xs text-gray-400 mb-1">{language === 'zh' ? '可用模型' : 'Available Models'}</div>
                  <div className="text-2xl font-bold text-white">24</div>
                  <div className="text-xs text-gray-500 mt-1">across all categories</div>
                </div>
                <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
                  <div className="text-xs text-gray-400 mb-1">{language === 'zh' ? '文本模型' : 'Text Models'}</div>
                  <div className="text-2xl font-bold text-blue-400">8</div>
                  <div className="text-xs text-gray-500 mt-1">including LLM & embeddings</div>
                </div>
                <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
                  <div className="text-xs text-gray-400 mb-1">{language === 'zh' ? '视觉/图像' : 'Vision/Image'}</div>
                  <div className="text-2xl font-bold text-purple-400">7</div>
                  <div className="text-xs text-gray-500 mt-1">image gen & understanding</div>
                </div>
                <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
                  <div className="text-xs text-gray-400 mb-1">{language === 'zh' ? '视频/音频' : 'Video/Audio'}</div>
                  <div className="text-2xl font-bold text-green-400">9</div>
                  <div className="text-xs text-gray-500 mt-1">generation & cloning</div>
                </div>
              </div>

              {/* 4) Model Cards Grid */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                {/* Card 1: GPT-4o Image */}
                <div className="bg-gray-800 rounded-xl p-5 border border-gray-700 hover:border-purple-500 transition-colors">
                  <div className="flex justify-between items-start mb-3">
                    <span className="font-semibold text-white">GPT-4o Image</span>
                    <span className="text-xs bg-purple-900 text-purple-300 px-2 py-0.5 rounded-full">
                      {language === 'zh' ? '图像' : 'Image'}
                    </span>
                  </div>
                  <p className="text-xs text-gray-400 mb-3">
                    {language === 'zh' ? 'OpenAI 多模态图像理解与生成模型，支持输入图像并生成描述或变体。' : 'OpenAI multimodal image understanding and generation model.'}
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-xs mb-3">
                    <div>
                      <div className="text-gray-400">{language === 'zh' ? '点数/次' : 'Credits/call'}</div>
                      <div className="text-white">450</div>
                    </div>
                    <div>
                      <div className="text-gray-400">{language === 'zh' ? '最大分辨率' : 'Max Resolution'}</div>
                      <div className="text-white">1024px</div>
                    </div>
                    <div>
                      <div className="text-gray-400">{language === 'zh' ? '延迟' : 'Latency'}</div>
                      <div className="text-white">~820ms</div>
                    </div>
                    <div>
                      <div className="text-gray-400">{language === 'zh' ? '状态' : 'Status'}</div>
                      <span className="bg-green-900 text-green-400 px-2 py-0.5 rounded text-xs">
                        {language === 'zh' ? '可用' : 'Available'}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-2 mt-3">
                    <button className="text-xs text-purple-400 cursor-pointer hover:text-purple-300">
                      {language === 'zh' ? '接入文档' : 'Docs'}
                    </button>
                    <button className="text-xs text-gray-400 cursor-pointer hover:text-gray-300">
                      {language === 'zh' ? '查看用量' : 'View Usage'}
                    </button>
                  </div>
                </div>

                {/* Card 2: Kling 3.0 */}
                <div className="bg-gray-800 rounded-xl p-5 border border-gray-700 hover:border-purple-500 transition-colors">
                  <div className="flex justify-between items-start mb-3">
                    <span className="font-semibold text-white">Kling 3.0</span>
                    <span className="text-xs bg-blue-900 text-blue-300 px-2 py-0.5 rounded-full">
                      {language === 'zh' ? '视频' : 'Video'}
                    </span>
                  </div>
                  <p className="text-xs text-gray-400 mb-3">
                    {language === 'zh' ? '快手可灵视频生成，支持文生视频和图生视频，最长 10 秒。' : 'Kuaishou Kling video generation, text-to-video and image-to-video, up to 10s.'}
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-xs mb-3">
                    <div>
                      <div className="text-gray-400">{language === 'zh' ? '点数/次' : 'Credits/call'}</div>
                      <div className="text-white">1,200</div>
                    </div>
                    <div>
                      <div className="text-gray-400">{language === 'zh' ? '最大时长' : 'Max Duration'}</div>
                      <div className="text-white">10s</div>
                    </div>
                    <div>
                      <div className="text-gray-400">{language === 'zh' ? '延迟' : 'Latency'}</div>
                      <div className="text-white">~3s</div>
                    </div>
                    <div>
                      <div className="text-gray-400">{language === 'zh' ? '状态' : 'Status'}</div>
                      <span className="bg-green-900 text-green-400 px-2 py-0.5 rounded text-xs">
                        {language === 'zh' ? '可用' : 'Available'}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-2 mt-3">
                    <button className="text-xs text-purple-400 cursor-pointer hover:text-purple-300">
                      {language === 'zh' ? '接入文档' : 'Docs'}
                    </button>
                    <button className="text-xs text-gray-400 cursor-pointer hover:text-gray-300">
                      {language === 'zh' ? '查看用量' : 'View Usage'}
                    </button>
                  </div>
                </div>

                {/* Card 3: Sora 2 Pro */}
                <div className="bg-gray-800 rounded-xl p-5 border border-gray-700 hover:border-purple-500 transition-colors">
                  <div className="flex justify-between items-start mb-3">
                    <span className="font-semibold text-white">Sora 2 Pro</span>
                    <span className="text-xs bg-blue-900 text-blue-300 px-2 py-0.5 rounded-full">
                      {language === 'zh' ? '视频' : 'Video'}
                    </span>
                  </div>
                  <p className="text-xs text-gray-400 mb-3">
                    {language === 'zh' ? 'OpenAI 高质量视频生成模型，支持 1080p 输出。' : 'OpenAI high-quality video generation model, supports 1080p output.'}
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-xs mb-3">
                    <div>
                      <div className="text-gray-400">{language === 'zh' ? '点数/次' : 'Credits/call'}</div>
                      <div className="text-white">2,400</div>
                    </div>
                    <div>
                      <div className="text-gray-400">{language === 'zh' ? '最大时长' : 'Max Duration'}</div>
                      <div className="text-white">20s</div>
                    </div>
                    <div>
                      <div className="text-gray-400">{language === 'zh' ? '延迟' : 'Latency'}</div>
                      <div className="text-white">~8s</div>
                    </div>
                    <div>
                      <div className="text-gray-400">{language === 'zh' ? '状态' : 'Status'}</div>
                      <span className="bg-yellow-900 text-yellow-400 px-2 py-0.5 rounded text-xs">
                        {language === 'zh' ? '测试中' : 'Testing'}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-2 mt-3">
                    <button className="text-xs text-purple-400 cursor-pointer hover:text-purple-300">
                      {language === 'zh' ? '申请内测' : 'Apply Beta'}
                    </button>
                    <button className="text-xs text-gray-400 cursor-pointer hover:text-gray-300">
                      {language === 'zh' ? '查看用量' : 'View Usage'}
                    </button>
                  </div>
                </div>

                {/* Card 4: AI Music Gen */}
                <div className="bg-gray-800 rounded-xl p-5 border border-gray-700 hover:border-purple-500 transition-colors">
                  <div className="flex justify-between items-start mb-3">
                    <span className="font-semibold text-white">AI Music Gen</span>
                    <span className="text-xs bg-green-900 text-green-300 px-2 py-0.5 rounded-full">
                      {language === 'zh' ? '音频' : 'Audio'}
                    </span>
                  </div>
                  <p className="text-xs text-gray-400 mb-3">
                    {language === 'zh' ? 'AI 音乐生成模型，支持风格描述或哼唱生成完整歌曲。' : 'AI music generation model, supports style description or humming to generate complete songs.'}
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-xs mb-3">
                    <div>
                      <div className="text-gray-400">{language === 'zh' ? '点数/次' : 'Credits/call'}</div>
                      <div className="text-white">180</div>
                    </div>
                    <div>
                      <div className="text-gray-400">{language === 'zh' ? '输出时长' : 'Output Duration'}</div>
                      <div className="text-white">60s</div>
                    </div>
                    <div>
                      <div className="text-gray-400">{language === 'zh' ? '延迟' : 'Latency'}</div>
                      <div className="text-white">~2s</div>
                    </div>
                    <div>
                      <div className="text-gray-400">{language === 'zh' ? '状态' : 'Status'}</div>
                      <span className="bg-green-900 text-green-400 px-2 py-0.5 rounded text-xs">
                        {language === 'zh' ? '可用' : 'Available'}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-2 mt-3">
                    <button className="text-xs text-purple-400 cursor-pointer hover:text-purple-300">
                      {language === 'zh' ? '接入文档' : 'Docs'}
                    </button>
                    <button className="text-xs text-gray-400 cursor-pointer hover:text-gray-300">
                      {language === 'zh' ? '查看用量' : 'View Usage'}
                    </button>
                  </div>
                </div>

                {/* Card 5: Generate Lyrics */}
                <div className="bg-gray-800 rounded-xl p-5 border border-gray-700 hover:border-purple-500 transition-colors">
                  <div className="flex justify-between items-start mb-3">
                    <span className="font-semibold text-white">Generate Lyrics</span>
                    <span className="text-xs bg-gray-700 text-gray-300 px-2 py-0.5 rounded-full">
                      {language === 'zh' ? '文本' : 'Text'}
                    </span>
                  </div>
                  <p className="text-xs text-gray-400 mb-3">
                    {language === 'zh' ? '专业歌词生成模型，支持多语言、多风格。' : 'Professional lyrics generation model, supports multiple languages and styles.'}
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-xs mb-3">
                    <div>
                      <div className="text-gray-400">{language === 'zh' ? '点数/次' : 'Credits/call'}</div>
                      <div className="text-white">25</div>
                    </div>
                    <div>
                      <div className="text-gray-400">{language === 'zh' ? '最大Token' : 'Max Tokens'}</div>
                      <div className="text-white">2048</div>
                    </div>
                    <div>
                      <div className="text-gray-400">{language === 'zh' ? '延迟' : 'Latency'}</div>
                      <div className="text-white">~180ms</div>
                    </div>
                    <div>
                      <div className="text-gray-400">{language === 'zh' ? '状态' : 'Status'}</div>
                      <span className="bg-green-900 text-green-400 px-2 py-0.5 rounded text-xs">
                        {language === 'zh' ? '可用' : 'Available'}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-2 mt-3">
                    <button className="text-xs text-purple-400 cursor-pointer hover:text-purple-300">
                      {language === 'zh' ? '接入文档' : 'Docs'}
                    </button>
                    <button className="text-xs text-gray-400 cursor-pointer hover:text-gray-300">
                      {language === 'zh' ? '查看用量' : 'View Usage'}
                    </button>
                  </div>
                </div>

                {/* Card 6: Embeddings */}
                <div className="bg-gray-800 rounded-xl p-5 border border-gray-700 hover:border-purple-500 transition-colors">
                  <div className="flex justify-between items-start mb-3">
                    <span className="font-semibold text-white">{language === 'zh' ? '嵌入向量' : 'Embeddings'}</span>
                    <span className="text-xs bg-gray-700 text-gray-300 px-2 py-0.5 rounded-full">
                      {language === 'zh' ? '文本' : 'Text'}
                    </span>
                  </div>
                  <p className="text-xs text-gray-400 mb-3">
                    {language === 'zh' ? '高质量文本嵌入模型，适用于语义搜索与 RAG。' : 'High-quality text embedding model, suitable for semantic search and RAG.'}
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-xs mb-3">
                    <div>
                      <div className="text-gray-400">{language === 'zh' ? '点数/次' : 'Credits/call'}</div>
                      <div className="text-white">5</div>
                    </div>
                    <div>
                      <div className="text-gray-400">{language === 'zh' ? '维度' : 'Dimensions'}</div>
                      <div className="text-white">1536</div>
                    </div>
                    <div>
                      <div className="text-gray-400">{language === 'zh' ? '延迟' : 'Latency'}</div>
                      <div className="text-white">~50ms</div>
                    </div>
                    <div>
                      <div className="text-gray-400">{language === 'zh' ? '状态' : 'Status'}</div>
                      <span className="bg-green-900 text-green-400 px-2 py-0.5 rounded text-xs">
                        {language === 'zh' ? '可用' : 'Available'}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-2 mt-3">
                    <button className="text-xs text-purple-400 cursor-pointer hover:text-purple-300">
                      {language === 'zh' ? '接入文档' : 'Docs'}
                    </button>
                    <button className="text-xs text-gray-400 cursor-pointer hover:text-gray-300">
                      {language === 'zh' ? '查看用量' : 'View Usage'}
                    </button>
                  </div>
                </div>
              </div>

              {/* 5) Recommendations Section */}
              <div className="bg-gray-800 rounded-xl p-5 border border-gray-700 mt-2">
                <h3 className="font-semibold text-white mb-4">
                  {language === 'zh' ? '按使用场景推荐' : 'Recommendations by Use Case'}
                </h3>
                <div className="grid grid-cols-3 gap-3">
                  {/* Scenario 1 */}
                  <div className="bg-gray-700 rounded-lg p-3">
                    <div className="text-sm font-medium text-white mb-1">
                      {language === 'zh' ? '电商内容生成' : 'E-commerce Content'}
                    </div>
                    <div className="text-xs text-gray-400">
                      {language === 'zh' ? '推荐：GPT-4o Image + Generate Lyrics' : 'Recommended: GPT-4o Image + Generate Lyrics'}
                    </div>
                  </div>

                  {/* Scenario 2 */}
                  <div className="bg-gray-700 rounded-lg p-3">
                    <div className="text-sm font-medium text-white mb-1">
                      {language === 'zh' ? '短视频制作' : 'Short Video Production'}
                    </div>
                    <div className="text-xs text-gray-400">
                      {language === 'zh' ? '推荐：Kling 3.0 + AI Music Gen' : 'Recommended: Kling 3.0 + AI Music Gen'}
                    </div>
                  </div>

                  {/* Scenario 3 */}
                  <div className="bg-gray-700 rounded-lg p-3">
                    <div className="text-sm font-medium text-white mb-1">
                      {language === 'zh' ? '智能客服' : 'Smart Customer Service'}
                    </div>
                    <div className="text-xs text-gray-400">
                      {language === 'zh' ? '推荐：GPT-4o + 嵌入向量' : 'Recommended: GPT-4o + Embeddings'}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Billing Page */}
          {activePage === 'billing' && (
            <div>
              {/* 1) Header */}
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h1 className="text-2xl font-bold text-white">
                    {language === 'zh' ? '账单' : 'Billing'}
                  </h1>
                  <p className="text-sm text-gray-400 mt-1">
                    {language === 'zh' ? '管理订阅、点数充值与支付方式。' : 'Manage subscription, credits top-up, and payment methods.'}
                  </p>
                </div>
                <div className="flex gap-2">
                  <button className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-purple-700 transition-colors">
                    {language === 'zh' ? '充值点数' : 'Top Up Credits'}
                  </button>
                  <button className="bg-gray-700 text-gray-300 px-4 py-2 rounded-lg text-sm hover:bg-gray-600 transition-colors">
                    {language === 'zh' ? '升级套餐' : 'Upgrade Plan'}
                  </button>
                </div>
              </div>

              {/* 2) Plan + Credits Row */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                {/* Left: Current Plan */}
                <div className="col-span-1 bg-gray-800 rounded-xl p-5 border border-gray-700">
                  <h3 className="font-semibold text-white mb-4">{language === 'zh' ? '当前套餐' : 'Current Plan'}</h3>
                  <div className="bg-purple-950 rounded-lg p-4 border border-purple-800">
                    <div className="text-xl font-bold text-white">Pro Lv3</div>
                    <div className="text-sm text-purple-300 mt-1">USD 129 / {language === 'zh' ? '月' : 'month'}</div>
                    <div className="text-xs text-gray-400 mt-2">30,000 {language === 'zh' ? '点数' : 'Credits'}/{language === 'zh' ? '月' : 'month'}</div>
                  </div>
                  <div className="mt-4 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">{language === 'zh' ? '下次账单' : 'Next Bill'}</span>
                      <span className="text-white">2026-05-01</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">{language === 'zh' ? '套餐状态' : 'Plan Status'}</span>
                      <span className="bg-green-900 text-green-400 px-2 py-0.5 rounded-full text-xs">Active</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">{language === 'zh' ? '自动续费' : 'Auto Renew'}</span>
                      <span className="text-white">{language === 'zh' ? '已开启' : 'Enabled'}</span>
                    </div>
                  </div>
                  <button className="mt-4 w-full py-2 rounded-lg bg-purple-600 text-white text-sm text-center hover:bg-purple-700 transition-colors">
                    {language === 'zh' ? '升级套餐 →' : 'Upgrade Plan →'}
                  </button>
                </div>

                {/* Center: Subscription Credits */}
                <div className="col-span-1 bg-gray-800 rounded-xl p-5 border border-gray-700">
                  <h3 className="font-semibold text-white mb-4">{language === 'zh' ? '订阅点数' : 'Subscription Credits'}</h3>
                  <div className="bg-gray-700 rounded-lg p-4">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-bold text-purple-400">8,420</span>
                      <span className="text-gray-500 text-lg">/ 30,000</span>
                    </div>
                  </div>
                  <div className="mt-3">
                    <div className="bg-gray-600 rounded-full h-2">
                      <div className="bg-purple-500 rounded-full h-2" style={{ width: '28%' }}></div>
                    </div>
                  </div>
                  <div className="mt-2 flex justify-between text-xs text-gray-400">
                    <span>{language === 'zh' ? '已用 21,580' : 'Used 21,580'}</span>
                    <span>{language === 'zh' ? '重置：2026-05-01' : 'Reset: 2026-05-01'}</span>
                  </div>
                  <div className="mt-4 text-xs text-gray-500">
                    {language === 'zh' ? '每月1日重置，不结转至下月' : 'Resets on the 1st, no rollover'}
                  </div>
                </div>

                {/* Right: Top-up Credits */}
                <div className="col-span-1 bg-gray-800 rounded-xl p-5 border border-gray-700">
                  <h3 className="font-semibold text-white mb-4">Top-up Credits</h3>
                  <div className="bg-gray-700 rounded-lg p-4">
                    <div className="text-3xl font-bold text-green-400">12,000</div>
                    <div className="text-xs text-gray-400 mt-1">credits available</div>
                  </div>
                  <div className="mt-3 space-y-2">
                    <button className="w-full bg-gray-600 hover:bg-gray-500 text-gray-300 text-sm py-2 rounded-lg transition-colors">
                      {language === 'zh' ? '充值 5,000 点数 — USD 25' : 'Top up 5,000 Credits — USD 25'}
                    </button>
                    <button className="w-full bg-gray-600 hover:bg-gray-500 text-gray-300 text-sm py-2 rounded-lg transition-colors">
                      {language === 'zh' ? '充值 10,000 点数 — USD 50' : 'Top up 10,000 Credits — USD 50'}
                    </button>
                    <button className="w-full bg-gray-600 hover:bg-gray-500 text-gray-300 text-sm py-2 rounded-lg transition-colors">
                      {language === 'zh' ? '充值 20,000 点数 — USD 100' : 'Top up 20,000 Credits — USD 100'}
                    </button>
                  </div>
                  <div className="mt-2 text-xs text-gray-500">
                    {language === 'zh' ? '永不过期 · 优先于订阅点数 消耗' : 'Never expire · Used before subscription credits'}
                  </div>
                </div>
              </div>

              {/* 3) Invoice Table */}
              <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden mb-6">
                <div className="flex justify-between items-center p-4">
                  <h3 className="font-semibold text-white">{language === 'zh' ? '账单历史' : 'Invoice History'}</h3>
                  <button className="text-xs text-purple-400 cursor-pointer hover:text-purple-300">
                    {language === 'zh' ? '下载全部' : 'Download All'}
                  </button>
                </div>
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-900 text-xs text-gray-400 text-left">
                      <th className="px-4 py-3">{language === 'zh' ? '账单日期' : 'Invoice Date'}</th>
                      <th className="px-4 py-3">{language === 'zh' ? '说明' : 'Description'}</th>
                      <th className="px-4 py-3">{language === 'zh' ? '订阅' : 'Subscription'}</th>
                      <th className="px-4 py-3">{language === 'zh' ? '点数充值' : 'Credits Top-up'}</th>
                      <th className="px-4 py-3">{language === 'zh' ? '合计' : 'Total'}</th>
                      <th className="px-4 py-3">{language === 'zh' ? '状态' : 'Status'}</th>
                      <th className="px-4 py-3">{language === 'zh' ? '操作' : 'Action'}</th>
                    </tr>
                  </thead>
                  <tbody className="text-xs text-gray-300">
                    <tr className="border-t border-gray-700">
                      <td className="px-4 py-3">2026-04-01</td>
                      <td className="px-4 py-3">Pro Lv3 + Top-up 10K</td>
                      <td className="px-4 py-3">USD 129</td>
                      <td className="px-4 py-3">USD 50</td>
                      <td className="px-4 py-3">USD 179</td>
                      <td className="px-4 py-3">
                        <span className="bg-green-900 text-green-400 px-2 py-0.5 rounded-full">
                          {language === 'zh' ? '已付款' : 'Paid'}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <button className="text-purple-400 cursor-pointer hover:text-purple-300">
                          {language === 'zh' ? '下载' : 'Download'}
                        </button>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-700">
                      <td className="px-4 py-3">2026-03-01</td>
                      <td className="px-4 py-3">Pro Lv3</td>
                      <td className="px-4 py-3">USD 129</td>
                      <td className="px-4 py-3">–</td>
                      <td className="px-4 py-3">USD 129</td>
                      <td className="px-4 py-3">
                        <span className="bg-green-900 text-green-400 px-2 py-0.5 rounded-full">
                          {language === 'zh' ? '已付款' : 'Paid'}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <button className="text-purple-400 cursor-pointer hover:text-purple-300">
                          {language === 'zh' ? '下载' : 'Download'}
                        </button>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-700">
                      <td className="px-4 py-3">2026-02-01</td>
                      <td className="px-4 py-3">Pro Lv3 + Top-up 5K</td>
                      <td className="px-4 py-3">USD 129</td>
                      <td className="px-4 py-3">USD 25</td>
                      <td className="px-4 py-3">USD 154</td>
                      <td className="px-4 py-3">
                        <span className="bg-green-900 text-green-400 px-2 py-0.5 rounded-full">
                          {language === 'zh' ? '已付款' : 'Paid'}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <button className="text-purple-400 cursor-pointer hover:text-purple-300">
                          {language === 'zh' ? '下载' : 'Download'}
                        </button>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-700">
                      <td className="px-4 py-3">2026-01-01</td>
                      <td className="px-4 py-3">Pro Lv2 (upgraded mid-month)</td>
                      <td className="px-4 py-3">USD 64.50</td>
                      <td className="px-4 py-3">–</td>
                      <td className="px-4 py-3">USD 64.50</td>
                      <td className="px-4 py-3">
                        <span className="bg-green-900 text-green-400 px-2 py-0.5 rounded-full">
                          {language === 'zh' ? '已付款' : 'Paid'}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <button className="text-purple-400 cursor-pointer hover:text-purple-300">
                          {language === 'zh' ? '下载' : 'Download'}
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* 4) Usage Alerts */}
              <div className="bg-gray-800 rounded-xl p-5 border border-gray-700 mb-6">
                <h3 className="font-semibold text-white mb-4">{language === 'zh' ? '用量提醒' : 'Usage Alerts'}</h3>
                <div className="space-y-3">
                  {/* Alert 1: Low balance */}
                  <div className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
                    <div>
                      <div className="text-white text-sm font-medium">
                        {language === 'zh' ? '点数余额不足提醒' : 'Low Credits Alert'}
                      </div>
                      <div className="text-xs text-gray-400 mt-0.5">
                        {language === 'zh' ? '当点数低于 1,000 时通知' : 'Notify when credits drop below 1,000'}
                      </div>
                    </div>
                    <button className="bg-purple-600 px-3 py-1.5 rounded-lg text-xs text-white">
                      {language === 'zh' ? '已启用' : 'Enabled'}
                    </button>
                  </div>

                  {/* Alert 2: Monthly spending limit */}
                  <div className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
                    <div>
                      <div className="text-white text-sm font-medium">
                        {language === 'zh' ? '月度消费超限提醒' : 'Monthly Spending Alert'}
                      </div>
                      <div className="text-xs text-gray-400 mt-0.5">
                        {language === 'zh' ? '当月消费超过预设阈值时通知' : 'Notify when monthly spending exceeds threshold'}
                      </div>
                    </div>
                    <button className="bg-gray-600 px-3 py-1.5 rounded-lg text-xs text-gray-400">
                      {language === 'zh' ? '已禁用' : 'Disabled'}
                    </button>
                  </div>

                  {/* Alert 3: API error rate */}
                  <div className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
                    <div>
                      <div className="text-white text-sm font-medium">
                        {language === 'zh' ? 'API错误率告警' : 'API Error Rate Alert'}
                      </div>
                      <div className="text-xs text-gray-400 mt-0.5">
                        {language === 'zh' ? '当错误率超过 5% 时通知' : 'Notify when error rate exceeds 5%'}
                      </div>
                    </div>
                    <button className="bg-purple-600 px-3 py-1.5 rounded-lg text-xs text-white">
                      {language === 'zh' ? '已启用' : 'Enabled'}
                    </button>
                  </div>
                </div>
              </div>

              {/* 5) Payment Methods */}
              <div className="bg-gray-800 rounded-xl p-5 border border-gray-700">
                <h3 className="font-semibold text-white mb-4">{language === 'zh' ? '支付方式' : 'Payment Methods'}</h3>
                <div className="grid grid-cols-2 gap-3">
                  {/* Card 1: Visa */}
                  <div className="flex items-center gap-3 p-3 bg-gray-700 rounded-lg border border-purple-500">
                    <CreditCard className="text-blue-400 w-8 h-8" />
                    <div className="flex-1">
                      <div className="text-white text-sm font-medium">Visa •••• 4821</div>
                      <div className="text-xs text-gray-400">{language === 'zh' ? '到期：12/28' : 'Expires: 12/28'}</div>
                    </div>
                    <span className="bg-purple-600 text-white text-xs px-2 py-0.5 rounded-full">
                      {language === 'zh' ? '默认' : 'Default'}
                    </span>
                  </div>

                  {/* Card 2: PayPal */}
                  <div className="flex items-center gap-3 p-3 bg-gray-700 rounded-lg border border-gray-600">
                    <div className="text-blue-300 w-8 h-8 flex items-center justify-center font-bold text-sm">PP</div>
                    <div className="flex-1">
                      <div className="text-white text-sm">PayPal</div>
                      <div className="text-xs text-gray-400">paypal@example.com</div>
                    </div>
                    <button className="text-purple-400 text-xs cursor-pointer hover:text-purple-300">
                      {language === 'zh' ? '设为默认' : 'Set Default'}
                    </button>
                  </div>
                </div>
                <button className="mt-3 text-sm text-purple-400 cursor-pointer flex items-center gap-1 hover:text-purple-300">
                  <Plus className="w-4 h-4" />
                  {language === 'zh' ? '添加支付方式' : 'Add Payment Method'}
                </button>
              </div>
            </div>
          )}

          {/* Projects Page */}
          {activePage === 'projects' && (
            <div>
              {/* 1) Header */}
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h1 className="text-2xl font-bold text-white">
                    {language === 'zh' ? '项目' : 'Projects'}
                  </h1>
                  <p className="text-sm text-gray-400 mt-1">
                    {language === 'zh' ? '按业务隔离 API 调用、点数与密钥。' : 'Isolate API calls, credits, and keys by business.'}
                  </p>
                </div>
                <div className="flex gap-2">
                  <button className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-purple-700 transition-colors">
                    {language === 'zh' ? '新建项目' : 'New Project'}
                  </button>
                </div>
              </div>

              {/* 2) Stats Row */}
              <div className="grid grid-cols-4 gap-4 mb-6">
                <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
                  <div className="text-xs text-gray-400 mb-1">{language === 'zh' ? '活跃项目' : 'Active Projects'}</div>
                  <div className="text-2xl font-bold text-white">4</div>
                  <div className="text-xs text-gray-500 mt-1">{language === 'zh' ? '您的账户中' : 'in your account'}</div>
                </div>
                <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
                  <div className="text-xs text-gray-400 mb-1">{language === 'zh' ? '本月总请求' : 'Monthly Requests'}</div>
                  <div className="text-2xl font-bold text-blue-400">41,700</div>
                  <div className="text-xs text-gray-500 mt-1">{language === 'zh' ? '所有项目合计' : 'across all projects'}</div>
                </div>
                <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
                  <div className="text-xs text-gray-400 mb-1">{language === 'zh' ? '本月 点数消耗' : 'Monthly Credits'}</div>
                  <div className="text-2xl font-bold text-purple-400">26,080</div>
                  <div className="text-xs text-gray-500 mt-1">{language === 'zh' ? '累计用量' : 'combined usage'}</div>
                </div>
                <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
                  <div className="text-xs text-gray-400 mb-1">{language === 'zh' ? '平均成功率' : 'Avg Success Rate'}</div>
                  <div className="text-2xl font-bold text-green-400">97.7%</div>
                  <div className="text-xs text-gray-500 mt-1">{language === 'zh' ? '所有项目合计' : 'across all projects'}</div>
                </div>
              </div>

              {/* 3) Projects Table */}
              <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden mb-6">
                {/* Header */}
                <div className="flex justify-between items-center p-4 border-b border-gray-700">
                  <h3 className="font-semibold text-white">{language === 'zh' ? '所有项目' : 'All Projects'}</h3>
                  <input
                    type="text"
                    placeholder={language === 'zh' ? '搜索项目...' : 'Search projects...'}
                    className="text-xs bg-gray-700 border border-gray-600 rounded px-3 py-1.5 text-gray-400 w-40 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  />
                </div>

                {/* Table */}
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-900 text-xs text-gray-400 text-left">
                      <th className="px-4 py-3">{language === 'zh' ? '项目名称' : 'Project Name'}</th>
                      <th className="px-4 py-3">{language === 'zh' ? '描述' : 'Description'}</th>
                      <th className="px-4 py-3">API Keys</th>
                      <th className="px-4 py-3">{language === 'zh' ? '月请求数' : 'Monthly Req.'}</th>
                      <th className="px-4 py-3">{language === 'zh' ? '点数消耗' : 'Credits Used'}</th>
                      <th className="px-4 py-3">{language === 'zh' ? '成功率' : 'Success Rate'}</th>
                      <th className="px-4 py-3">{language === 'zh' ? '最近活跃' : 'Last Active'}</th>
                      <th className="px-4 py-3">{language === 'zh' ? '操作' : 'Actions'}</th>
                    </tr>
                  </thead>
                  <tbody className="text-xs text-gray-300">
                    {/* Row 1 */}
                    <tr className="border-t border-gray-700">
                      <td className="px-4 py-3">SEA Commerce Bot</td>
                      <td className="px-4 py-3">
                        <span className="bg-blue-900 text-blue-300 px-2 py-0.5 rounded-full">
                          {language === 'zh' ? '电商自动化' : 'E-commerce'}
                        </span>
                      </td>
                      <td className="px-4 py-3">2</td>
                      <td className="px-4 py-3">18,440</td>
                      <td className="px-4 py-3">11,800</td>
                      <td className="px-4 py-3">97.3%</td>
                      <td className="px-4 py-3">1h ago</td>
                      <td className="px-4 py-3">
                        <div className="flex gap-1">
                          <button className="text-xs bg-gray-700 px-2 py-1 rounded text-gray-400 hover:bg-gray-600 transition-colors">
                            {language === 'zh' ? '详情' : 'Details'}
                          </button>
                          <button className="text-xs bg-gray-700 px-2 py-1 rounded text-gray-400 hover:bg-gray-600 transition-colors">
                            {language === 'zh' ? '设置' : 'Settings'}
                          </button>
                        </div>
                      </td>
                    </tr>

                    {/* Row 2 */}
                    <tr className="border-t border-gray-700">
                      <td className="px-4 py-3">Marketing Automation</td>
                      <td className="px-4 py-3">
                        <span className="bg-purple-900 text-purple-300 px-2 py-0.5 rounded-full">
                          {language === 'zh' ? '营销' : 'Marketing'}
                        </span>
                      </td>
                      <td className="px-4 py-3">1</td>
                      <td className="px-4 py-3">12,840</td>
                      <td className="px-4 py-3">8,200</td>
                      <td className="px-4 py-3">99.2%</td>
                      <td className="px-4 py-3">2h ago</td>
                      <td className="px-4 py-3">
                        <div className="flex gap-1">
                          <button className="text-xs bg-gray-700 px-2 py-1 rounded text-gray-400 hover:bg-gray-600 transition-colors">
                            {language === 'zh' ? '详情' : 'Details'}
                          </button>
                          <button className="text-xs bg-gray-700 px-2 py-1 rounded text-gray-400 hover:bg-gray-600 transition-colors">
                            {language === 'zh' ? '设置' : 'Settings'}
                          </button>
                        </div>
                      </td>
                    </tr>

                    {/* Row 3 */}
                    <tr className="border-t border-gray-700">
                      <td className="px-4 py-3">AI Content Studio</td>
                      <td className="px-4 py-3">
                        <span className="bg-green-900 text-green-300 px-2 py-0.5 rounded-full">
                          {language === 'zh' ? '内容生产' : 'Content'}
                        </span>
                      </td>
                      <td className="px-4 py-3">1</td>
                      <td className="px-4 py-3">8,320</td>
                      <td className="px-4 py-3">5,100</td>
                      <td className="px-4 py-3">98.7%</td>
                      <td className="px-4 py-3">5h ago</td>
                      <td className="px-4 py-3">
                        <div className="flex gap-1">
                          <button className="text-xs bg-gray-700 px-2 py-1 rounded text-gray-400 hover:bg-gray-600 transition-colors">
                            {language === 'zh' ? '详情' : 'Details'}
                          </button>
                          <button className="text-xs bg-gray-700 px-2 py-1 rounded text-gray-400 hover:bg-gray-600 transition-colors">
                            {language === 'zh' ? '设置' : 'Settings'}
                          </button>
                        </div>
                      </td>
                    </tr>

                    {/* Row 4 */}
                    <tr className="border-t border-gray-700">
                      <td className="px-4 py-3">Internal Testing</td>
                      <td className="px-4 py-3">
                        <span className="bg-gray-700 text-gray-400 px-2 py-0.5 rounded-full">
                          {language === 'zh' ? '开发测试' : 'Dev & Test'}
                        </span>
                      </td>
                      <td className="px-4 py-3">1</td>
                      <td className="px-4 py-3">2,100</td>
                      <td className="px-4 py-3">980</td>
                      <td className="px-4 py-3">95.1%</td>
                      <td className="px-4 py-3">1d ago</td>
                      <td className="px-4 py-3">
                        <div className="flex gap-1">
                          <button className="text-xs bg-gray-700 px-2 py-1 rounded text-gray-400 hover:bg-gray-600 transition-colors">
                            {language === 'zh' ? '详情' : 'Details'}
                          </button>
                          <button className="text-xs bg-gray-700 px-2 py-1 rounded text-gray-400 hover:bg-gray-600 transition-colors">
                            {language === 'zh' ? '设置' : 'Settings'}
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* 4) Bottom Grid */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                {/* Left: Usage Distribution */}
                <div className="bg-gray-800 rounded-xl p-5 border border-gray-700">
                  <h3 className="font-semibold text-white mb-4">
                    {language === 'zh' ? '项目用量分布' : 'Project Usage Distribution'}
                  </h3>
                  <div className="space-y-3">
                    {/* Bar 1 */}
                    <div className="flex items-center gap-3 py-2 border-b border-gray-700">
                      <span className="text-xs text-gray-300 w-36">SEA Commerce Bot</span>
                      <div className="flex-1 bg-gray-700 h-2 rounded">
                        <div className="bg-blue-500 rounded h-2" style={{ width: '90%' }}></div>
                      </div>
                      <span className="text-xs text-gray-400">90%</span>
                    </div>

                    {/* Bar 2 */}
                    <div className="flex items-center gap-3 py-2 border-b border-gray-700">
                      <span className="text-xs text-gray-300 w-36">Marketing Automation</span>
                      <div className="flex-1 bg-gray-700 h-2 rounded">
                        <div className="bg-blue-500 rounded h-2" style={{ width: '62%' }}></div>
                      </div>
                      <span className="text-xs text-gray-400">62%</span>
                    </div>

                    {/* Bar 3 */}
                    <div className="flex items-center gap-3 py-2 border-b border-gray-700">
                      <span className="text-xs text-gray-300 w-36">AI Content Studio</span>
                      <div className="flex-1 bg-gray-700 h-2 rounded">
                        <div className="bg-blue-500 rounded h-2" style={{ width: '45%' }}></div>
                      </div>
                      <span className="text-xs text-gray-400">45%</span>
                    </div>

                    {/* Bar 4 */}
                    <div className="flex items-center gap-3 py-2">
                      <span className="text-xs text-gray-300 w-36">Internal Testing</span>
                      <div className="flex-1 bg-gray-700 h-2 rounded">
                        <div className="bg-blue-500 rounded h-2" style={{ width: '18%' }}></div>
                      </div>
                      <span className="text-xs text-gray-400">18%</span>
                    </div>
                  </div>
                </div>

                {/* Right: Quick Actions */}
                <div className="bg-gray-800 rounded-xl p-5 border border-gray-700">
                  <h3 className="font-semibold text-white mb-4">
                    {language === 'zh' ? '快速操作' : 'Quick Actions'}
                  </h3>
                  <div className="space-y-2">
                    <button className="w-full text-left text-sm text-gray-300 px-3 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors">
                      ＋ {language === 'zh' ? '新建项目' : 'New Project'}
                    </button>
                    <button className="w-full text-left text-sm text-gray-300 px-3 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors">
                      {language === 'zh' ? '为项目添加 API Key' : 'Add API Key to Project'}
                    </button>
                    <button className="w-full text-left text-sm text-gray-300 px-3 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors">
                      {language === 'zh' ? '查看项目日志' : 'View Project Logs'}
                    </button>
                    <button className="w-full text-left text-sm text-gray-300 px-3 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors">
                      {language === 'zh' ? '设置项目预算限额' : 'Set Project Budget Limit'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Team & Security Page */}
          {activePage === 'team' && (
            <div>
              {/* 1) Header */}
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h1 className="text-2xl font-bold text-white">
                    {language === 'zh' ? '团队与安全' : 'Team & Security'}
                  </h1>
                  <p className="text-sm text-gray-400 mt-1">
                    {language === 'zh' ? '管理团队成员、角色权限与安全设置。' : 'Manage team members, role permissions, and security settings.'}
                  </p>
                </div>
                <div className="flex gap-2">
                  <button className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-purple-700 transition-colors">
                    {language === 'zh' ? '邀请成员' : 'Invite Member'}
                  </button>
                </div>
              </div>

              {/* 2) Stats Row */}
              <div className="grid grid-cols-4 gap-4 mb-6">
                <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
                  <div className="text-xs text-gray-400 mb-1">{language === 'zh' ? '团队成员' : 'Team Members'}</div>
                  <div className="text-2xl font-bold text-white">5</div>
                  <div className="text-xs text-gray-500 mt-1">{language === 'zh' ? '2 个待处理邀请' : '2 pending invites'}</div>
                </div>
                <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
                  <div className="text-xs text-gray-400 mb-1">{language === 'zh' ? '管理员' : 'Admins'}</div>
                  <div className="text-2xl font-bold text-blue-400">2</div>
                  <div className="text-xs text-gray-500 mt-1">{language === 'zh' ? '完全访问权限' : 'full access'}</div>
                </div>
                <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
                  <div className="text-xs text-gray-400 mb-1">{language === 'zh' ? '开发者' : 'Developers'}</div>
                  <div className="text-2xl font-bold text-purple-400">2</div>
                  <div className="text-xs text-gray-500 mt-1">{language === 'zh' ? '仅 API 访问' : 'API access only'}</div>
                </div>
                <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
                  <div className="text-xs text-gray-400 mb-1">{language === 'zh' ? '只读成员' : 'Read-only'}</div>
                  <div className="text-2xl font-bold text-gray-400">1</div>
                  <div className="text-xs text-gray-500 mt-1">{language === 'zh' ? '仅查看' : 'view-only'}</div>
                </div>
              </div>

              {/* 3) Tab Bar */}
              <div className="flex gap-1 mb-4 bg-gray-800 rounded-xl p-1 border border-gray-700 w-fit">
                <button className="px-4 py-2 rounded-lg text-sm cursor-pointer bg-purple-600 text-white">
                  {language === 'zh' ? '成员' : 'Members'}
                </button>
                <button className="px-4 py-2 rounded-lg text-sm cursor-pointer text-gray-400 hover:text-white hover:bg-gray-700 transition-colors">
                  {language === 'zh' ? '角色与权限' : 'Roles & Permissions'}
                </button>
                <button className="px-4 py-2 rounded-lg text-sm cursor-pointer text-gray-400 hover:text-white hover:bg-gray-700 transition-colors">
                  {language === 'zh' ? '访问控制' : 'Access Control'}
                </button>
                <button className="px-4 py-2 rounded-lg text-sm cursor-pointer text-gray-400 hover:text-white hover:bg-gray-700 transition-colors">
                  {language === 'zh' ? '操作审计' : 'Audit Log'}
                </button>
              </div>

              {/* 4) Members Table */}
              <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden mb-6">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-900 text-xs text-gray-400 text-left">
                      <th className="px-4 py-3">{language === 'zh' ? '成员' : 'Member'}</th>
                      <th className="px-4 py-3">{language === 'zh' ? '角色' : 'Role'}</th>
                      <th className="px-4 py-3">{language === 'zh' ? '项目权限' : 'Project Access'}</th>
                      <th className="px-4 py-3">{language === 'zh' ? '最近登录' : 'Last Login'}</th>
                      <th className="px-4 py-3">{language === 'zh' ? '状态' : 'Status'}</th>
                      <th className="px-4 py-3">{language === 'zh' ? '操作' : 'Actions'}</th>
                    </tr>
                  </thead>
                  <tbody className="text-xs text-gray-300">
                    {/* Row 1 */}
                    <tr className="border-t border-gray-700">
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white text-xs">
                            SH
                          </div>
                          <div>
                            <div className="text-sm font-medium text-white">Stephanie He</div>
                            <div className="text-xs text-gray-400">stephanie@example.com</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <span className="bg-blue-900 text-blue-300 px-2 py-0.5 rounded-full">
                          {language === 'zh' ? '管理员' : 'Admin'}
                        </span>
                      </td>
                      <td className="px-4 py-3">{language === 'zh' ? '全部项目' : 'All Projects'}</td>
                      <td className="px-4 py-3">2h ago</td>
                      <td className="px-4 py-3">
                        <span className="bg-green-900 text-green-400 px-2 py-0.5 rounded-full">
                          {language === 'zh' ? '活跃' : 'Active'}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <button className="text-purple-400 hover:text-purple-300">
                          {language === 'zh' ? '编辑' : 'Edit'}
                        </button>
                      </td>
                    </tr>

                    {/* Row 2 */}
                    <tr className="border-t border-gray-700">
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center text-white text-xs">
                            AC
                          </div>
                          <div>
                            <div className="text-sm font-medium text-white">Alex Chen</div>
                            <div className="text-xs text-gray-400">alex@example.com</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <span className="bg-blue-900 text-blue-300 px-2 py-0.5 rounded-full">
                          {language === 'zh' ? '管理员' : 'Admin'}
                        </span>
                      </td>
                      <td className="px-4 py-3">{language === 'zh' ? '全部项目' : 'All Projects'}</td>
                      <td className="px-4 py-3">1d ago</td>
                      <td className="px-4 py-3">
                        <span className="bg-green-900 text-green-400 px-2 py-0.5 rounded-full">
                          {language === 'zh' ? '活跃' : 'Active'}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <button className="text-purple-400 hover:text-purple-300">
                          {language === 'zh' ? '编辑' : 'Edit'}
                        </button>
                      </td>
                    </tr>

                    {/* Row 3 */}
                    <tr className="border-t border-gray-700">
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-yellow-600 flex items-center justify-center text-white text-xs">
                            BW
                          </div>
                          <div>
                            <div className="text-sm font-medium text-white">Bob Wang</div>
                            <div className="text-xs text-gray-400">bob@example.com</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <span className="bg-purple-900 text-purple-300 px-2 py-0.5 rounded-full">
                          {language === 'zh' ? '开发者' : 'Developer'}
                        </span>
                      </td>
                      <td className="px-4 py-3">SEA Commerce, Marketing</td>
                      <td className="px-4 py-3">3d ago</td>
                      <td className="px-4 py-3">
                        <span className="bg-green-900 text-green-400 px-2 py-0.5 rounded-full">
                          {language === 'zh' ? '活跃' : 'Active'}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <button className="text-purple-400 hover:text-purple-300">
                          {language === 'zh' ? '编辑' : 'Edit'}
                        </button>
                      </td>
                    </tr>

                    {/* Row 4 */}
                    <tr className="border-t border-gray-700">
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-pink-600 flex items-center justify-center text-white text-xs">
                            CL
                          </div>
                          <div>
                            <div className="text-sm font-medium text-white">Carol Liu</div>
                            <div className="text-xs text-gray-400">carol@example.com</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <span className="bg-purple-900 text-purple-300 px-2 py-0.5 rounded-full">
                          {language === 'zh' ? '开发者' : 'Developer'}
                        </span>
                      </td>
                      <td className="px-4 py-3">AI Content Studio</td>
                      <td className="px-4 py-3">1w ago</td>
                      <td className="px-4 py-3">
                        <span className="bg-green-900 text-green-400 px-2 py-0.5 rounded-full">
                          {language === 'zh' ? '活跃' : 'Active'}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <button className="text-purple-400 hover:text-purple-300">
                          {language === 'zh' ? '编辑' : 'Edit'}
                        </button>
                      </td>
                    </tr>

                    {/* Row 5 */}
                    <tr className="border-t border-gray-700">
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center text-white text-xs">
                            DK
                          </div>
                          <div>
                            <div className="text-sm font-medium text-white">David Kim</div>
                            <div className="text-xs text-gray-400">david@example.com</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <span className="bg-gray-700 text-gray-400 px-2 py-0.5 rounded-full">
                          {language === 'zh' ? '只读' : 'Read-only'}
                        </span>
                      </td>
                      <td className="px-4 py-3">{language === 'zh' ? '全部项目' : 'All Projects'}</td>
                      <td className="px-4 py-3">2w ago</td>
                      <td className="px-4 py-3">
                        <span className="bg-gray-700 text-gray-400 px-2 py-0.5 rounded-full">
                          {language === 'zh' ? '不活跃' : 'Inactive'}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <button className="text-purple-400 hover:text-purple-300">
                          {language === 'zh' ? '编辑' : 'Edit'}
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* 5) Bottom Grid */}
              <div className="grid grid-cols-2 gap-4">
                {/* Left: Security Settings */}
                <div className="bg-gray-800 rounded-xl p-5 border border-gray-700">
                  <h3 className="font-semibold text-white mb-4">
                    {language === 'zh' ? '安全设置' : 'Security Settings'}
                  </h3>
                  <div className="space-y-3">
                    {/* Setting 1 */}
                    <div className="flex items-center justify-between py-2 border-b border-gray-700">
                      <div>
                        <div className="text-sm text-white">
                          {language === 'zh' ? '双因素认证 (2FA)' : 'Two-Factor Authentication (2FA)'}
                        </div>
                        <div className="text-xs text-gray-400">
                          {language === 'zh' ? '对所有管理员强制启用' : 'Mandatory for all admins'}
                        </div>
                      </div>
                      <span className="bg-green-900 text-green-400 px-3 py-1 rounded-full text-xs">
                        {language === 'zh' ? '已启用' : 'Enabled'}
                      </span>
                    </div>

                    {/* Setting 2 */}
                    <div className="flex items-center justify-between py-2 border-b border-gray-700">
                      <div>
                        <div className="text-sm text-white">
                          {language === 'zh' ? 'SSO 单点登录' : 'SSO Single Sign-On'}
                        </div>
                        <div className="text-xs text-gray-400">
                          {language === 'zh' ? '通过 Google Workspace 认证' : 'Via Google Workspace'}
                        </div>
                      </div>
                      <span className="bg-green-900 text-green-400 px-3 py-1 rounded-full text-xs">
                        {language === 'zh' ? '已配置' : 'Configured'}
                      </span>
                    </div>

                    {/* Setting 3 */}
                    <div className="flex items-center justify-between py-2 border-b border-gray-700">
                      <div>
                        <div className="text-sm text-white">
                          {language === 'zh' ? 'IP 白名单' : 'IP Whitelist'}
                        </div>
                        <div className="text-xs text-gray-400">
                          {language === 'zh' ? '限制 API 访问来源 IP' : 'Restrict API source IPs'}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="bg-gray-700 text-gray-400 px-3 py-1 rounded-full text-xs">
                          {language === 'zh' ? '未启用' : 'Disabled'}
                        </span>
                        <button className="text-purple-400 text-xs cursor-pointer hover:text-purple-300">
                          {language === 'zh' ? '配置' : 'Configure'}
                        </button>
                      </div>
                    </div>

                    {/* Setting 4 */}
                    <div className="flex items-center justify-between py-2">
                      <div>
                        <div className="text-sm text-white">
                          {language === 'zh' ? '会话超时' : 'Session Timeout'}
                        </div>
                        <div className="text-xs text-gray-400">
                          {language === 'zh' ? '自动登出不活跃用户' : 'Auto logout inactive users'}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="bg-gray-700 text-gray-400 px-3 py-1 rounded-full text-xs">
                          {language === 'zh' ? '30 分钟' : '30 minutes'}
                        </span>
                        <button className="text-purple-400 text-xs cursor-pointer hover:text-purple-300">
                          {language === 'zh' ? '修改' : 'Modify'}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: Pending Invites */}
                <div className="bg-gray-800 rounded-xl p-5 border border-gray-700">
                  <h3 className="font-semibold text-white mb-4">
                    {language === 'zh' ? '待处理邀请' : 'Pending Invites'}
                  </h3>
                  <div className="space-y-3">
                    {/* Invite 1 */}
                    <div className="flex items-center justify-between bg-gray-700 rounded-lg p-3">
                      <div>
                        <div className="text-sm text-white">mike@partner.com</div>
                        <div className="text-xs text-gray-400">
                          {language === 'zh' ? '邀请为：开发者 · 发送于 2d ago' : 'Invited as: Developer · Sent 2d ago'}
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button className="text-xs bg-gray-600 text-gray-300 px-2 py-1 rounded hover:bg-gray-500 transition-colors">
                          {language === 'zh' ? '重新发送' : 'Resend'}
                        </button>
                        <button className="text-xs bg-red-900 text-red-400 px-2 py-1 rounded hover:bg-red-800 transition-colors">
                          {language === 'zh' ? '撤销' : 'Revoke'}
                        </button>
                      </div>
                    </div>

                    {/* Invite 2 */}
                    <div className="flex items-center justify-between bg-gray-700 rounded-lg p-3">
                      <div>
                        <div className="text-sm text-white">sarah@agency.com</div>
                        <div className="text-xs text-gray-400">
                          {language === 'zh' ? '邀请为：只读 · 发送于 5d ago' : 'Invited as: Read-only · Sent 5d ago'}
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button className="text-xs bg-gray-600 text-gray-300 px-2 py-1 rounded hover:bg-gray-500 transition-colors">
                          {language === 'zh' ? '重新发送' : 'Resend'}
                        </button>
                        <button className="text-xs bg-red-900 text-red-400 px-2 py-1 rounded hover:bg-red-800 transition-colors">
                          {language === 'zh' ? '撤销' : 'Revoke'}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Docs Page */}
          {activePage === 'docs' && (
            <div>
              {/* Header */}
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h1 className="text-2xl font-bold text-white">{language === 'zh' ? '文档' : 'Documentation'}</h1>
                  <p className="text-sm text-gray-400 mt-1">{language === 'zh' ? '快速上手 GAIA API，浏览参考文档与代码示例。' : 'Get started with GAIA API, browse reference docs and code examples.'}</p>
                </div>
                <div className="flex gap-2">
                  <button className="bg-gray-700 text-gray-300 px-4 py-2 rounded-lg text-sm hover:bg-gray-600 transition-colors">
                    {language === 'zh' ? 'API 参考' : 'API Reference'}
                  </button>
                  <button className="bg-gray-700 text-gray-300 px-4 py-2 rounded-lg text-sm hover:bg-gray-600 transition-colors">
                    {language === 'zh' ? '更新日志' : 'Changelog'}
                  </button>
                </div>
              </div>

              {/* Quickstart Section */}
              <div className="bg-gray-800 rounded-xl p-5 border border-gray-700 mb-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-semibold text-white">{language === 'zh' ? '快速开始' : 'Quick Start'}</span>
                  <span className="text-xs bg-green-900 text-green-400 px-2 py-0.5 rounded-full">{language === 'zh' ? '5 分钟上手' : '5 min setup'}</span>
                </div>
                <div className="grid grid-cols-4 gap-3">
                  {/* Step 1 */}
                  <div className="bg-gray-700 rounded-lg p-3">
                    <div className="w-6 h-6 rounded-full bg-purple-600 flex items-center justify-center text-white text-xs font-bold">1</div>
                    <p className="text-sm font-medium text-white mt-2">{language === 'zh' ? '获取 API Key' : 'Get API Key'}</p>
                    <p className="text-xs text-gray-400 mt-1">{language === 'zh' ? '在控制台创建并复制您的密钥' : 'Create and copy your key in console'}</p>
                  </div>

                  {/* Step 2 */}
                  <div className="bg-gray-700 rounded-lg p-3">
                    <div className="w-6 h-6 rounded-full bg-purple-600 flex items-center justify-center text-white text-xs font-bold">2</div>
                    <p className="text-sm font-medium text-white mt-2">{language === 'zh' ? '安装 SDK' : 'Install SDK'}</p>
                    <p className="text-xs text-gray-400 mt-1">{language === 'zh' ? 'pip install gaia-sdk 或 npm install @gaia/sdk' : 'pip install gaia-sdk or npm install @gaia/sdk'}</p>
                  </div>

                  {/* Step 3 */}
                  <div className="bg-gray-700 rounded-lg p-3">
                    <div className="w-6 h-6 rounded-full bg-purple-600 flex items-center justify-center text-white text-xs font-bold">3</div>
                    <p className="text-sm font-medium text-white mt-2">{language === 'zh' ? '发送首个请求' : 'Send First Request'}</p>
                    <p className="text-xs text-gray-400 mt-1">{language === 'zh' ? '调用模型 API，传入 prompt 与参数' : 'Call model API with prompt and params'}</p>
                  </div>

                  {/* Step 4 */}
                  <div className="bg-gray-700 rounded-lg p-3">
                    <div className="w-6 h-6 rounded-full bg-purple-600 flex items-center justify-center text-white text-xs font-bold">4</div>
                    <p className="text-sm font-medium text-white mt-2">{language === 'zh' ? '查看结果' : 'View Results'}</p>
                    <p className="text-xs text-gray-400 mt-1">{language === 'zh' ? '解析响应，在控制台查看用量与日志' : 'Parse response, view usage and logs in console'}</p>
                  </div>
                </div>
              </div>

              {/* Code Example Section */}
              <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden mb-6">
                {/* Header */}
                <div className="flex items-center gap-2 p-4 border-b border-gray-700">
                  <span className="font-semibold text-white">{language === 'zh' ? '代码示例' : 'Code Example'}</span>
                  <div className="flex gap-1 ml-auto">
                    <button className="bg-purple-600 text-white text-xs px-3 py-1 rounded">cURL</button>
                    <button className="bg-gray-700 text-gray-400 text-xs px-3 py-1 rounded hover:bg-gray-600">Python</button>
                    <button className="bg-gray-700 text-gray-400 text-xs px-3 py-1 rounded hover:bg-gray-600">JavaScript</button>
                  </div>
                </div>

                {/* Code Block */}
                <div className="bg-gray-950 p-4 font-mono text-xs text-gray-300 overflow-x-auto">
                  <pre>{`curl https://api.gaiagenx.com/v1/generate \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "kling-3.0",
    "prompt": "A sunset over the ocean",
    "credits_limit": 1200
  }'`}</pre>
                </div>

                {/* Footer Info */}
                <div className="flex gap-4 p-4 border-t border-gray-700 text-xs text-gray-400">
                  <span>{language === 'zh' ? '返回格式: JSON' : 'Response: JSON'}</span>
                  <span>{language === 'zh' ? '认证: Bearer Token' : 'Auth: Bearer Token'}</span>
                  <span>{language === 'zh' ? '速率限制: 60 req/min' : 'Rate limit: 60 req/min'}</span>
                </div>
              </div>

              {/* Popular Guides */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                {/* Guide 1 */}
                <div className="bg-gray-800 rounded-xl p-4 border border-gray-700 hover:border-purple-500 transition cursor-pointer">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-sm font-medium text-white">{language === 'zh' ? '认证与 API Key 管理' : 'Auth & API Key Management'}</span>
                    <span className="text-gray-400">→</span>
                  </div>
                  <p className="text-xs text-gray-400">{language === 'zh' ? '了解如何安全存储和轮换您的 API 密钥。' : 'Learn how to securely store and rotate your API keys.'}</p>
                  <div className="mt-2 flex gap-2">
                    <span className="text-xs bg-gray-700 text-gray-400 px-2 py-0.5 rounded">{language === 'zh' ? '安全' : 'Security'}</span>
                  </div>
                </div>

                {/* Guide 2 */}
                <div className="bg-gray-800 rounded-xl p-4 border border-gray-700 hover:border-purple-500 transition cursor-pointer">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-sm font-medium text-white">{language === 'zh' ? '图像生成入门' : 'Image Generation Guide'}</span>
                    <span className="text-gray-400">→</span>
                  </div>
                  <p className="text-xs text-gray-400">{language === 'zh' ? '使用 GPT-4o Image 和 DALL-E 3 生成高质量图像。' : 'Generate high-quality images with GPT-4o Image and DALL-E 3.'}</p>
                  <div className="mt-2 flex gap-2">
                    <span className="text-xs bg-gray-700 text-gray-400 px-2 py-0.5 rounded">{language === 'zh' ? '图像' : 'Image'}</span>
                  </div>
                </div>

                {/* Guide 3 */}
                <div className="bg-gray-800 rounded-xl p-4 border border-gray-700 hover:border-purple-500 transition cursor-pointer">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-sm font-medium text-white">{language === 'zh' ? '视频生成完整指南' : 'Complete Video Generation Guide'}</span>
                    <span className="text-gray-400">→</span>
                  </div>
                  <p className="text-xs text-gray-400">{language === 'zh' ? '从文本和图像生成视频，包括 Kling 和 Sora 的参数说明。' : 'Generate videos from text and images, including Kling and Sora parameters.'}</p>
                  <div className="mt-2 flex gap-2">
                    <span className="text-xs bg-gray-700 text-gray-400 px-2 py-0.5 rounded">{language === 'zh' ? '视频' : 'Video'}</span>
                  </div>
                </div>

                {/* Guide 4 */}
                <div className="bg-gray-800 rounded-xl p-4 border border-gray-700 hover:border-purple-500 transition cursor-pointer">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-sm font-medium text-white">{language === 'zh' ? '点数计费说明' : 'Credits Billing Guide'}</span>
                    <span className="text-gray-400">→</span>
                  </div>
                  <p className="text-xs text-gray-400">{language === 'zh' ? '了解订阅点数 与 Top-up Credits 的区别与优先级。' : 'Understand the difference between Subscription and Top-up Credits.'}</p>
                  <div className="mt-2 flex gap-2">
                    <span className="text-xs bg-gray-700 text-gray-400 px-2 py-0.5 rounded">{language === 'zh' ? '计费' : 'Billing'}</span>
                  </div>
                </div>

                {/* Guide 5 */}
                <div className="bg-gray-800 rounded-xl p-4 border border-gray-700 hover:border-purple-500 transition cursor-pointer">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-sm font-medium text-white">{language === 'zh' ? '错误码参考' : 'Error Code Reference'}</span>
                    <span className="text-gray-400">→</span>
                  </div>
                  <p className="text-xs text-gray-400">{language === 'zh' ? 'HTTP 状态码、业务错误码及常见问题排查指南。' : 'HTTP status codes, error codes, and troubleshooting guide.'}</p>
                  <div className="mt-2 flex gap-2">
                    <span className="text-xs bg-gray-700 text-gray-400 px-2 py-0.5 rounded">{language === 'zh' ? '调试' : 'Debug'}</span>
                  </div>
                </div>

                {/* Guide 6 */}
                <div className="bg-gray-800 rounded-xl p-4 border border-gray-700 hover:border-purple-500 transition cursor-pointer">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-sm font-medium text-white">{language === 'zh' ? 'Webhook 与回调' : 'Webhook & Callbacks'}</span>
                    <span className="text-gray-400">→</span>
                  </div>
                  <p className="text-xs text-gray-400">{language === 'zh' ? '为异步任务配置结果推送，避免轮询请求。' : 'Configure result push for async tasks, avoid polling requests.'}</p>
                  <div className="mt-2 flex gap-2">
                    <span className="text-xs bg-gray-700 text-gray-400 px-2 py-0.5 rounded">{language === 'zh' ? '高级' : 'Advanced'}</span>
                  </div>
                </div>

                {/* Guide 7: Changelog */}
                <div className="bg-gray-800 rounded-xl p-4 border border-gray-700 hover:border-purple-500 transition cursor-pointer">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-sm font-medium text-white">{language === 'zh' ? '更新日志' : 'Changelog'}</span>
                    <span className="text-gray-400">→</span>
                  </div>
                  <p className="text-xs text-gray-400">{language === 'zh' ? '查看 API 版本更新、新功能发布与重要变更记录。' : 'View API version updates, new features, and breaking changes.'}</p>
                  <div className="mt-2 flex gap-2">
                    <span className="text-xs bg-gray-700 text-gray-400 px-2 py-0.5 rounded">{language === 'zh' ? '版本' : 'Version'}</span>
                  </div>
                </div>
              </div>

              {/* SDK Section */}
              <div className="bg-gray-800 rounded-xl p-5 border border-gray-700 mb-6">
                <div className="font-semibold text-white mb-4">{language === 'zh' ? 'SDK 与工具' : 'SDKs & Tools'}</div>
                <p className="text-xs text-gray-400 mb-4">{language === 'zh' ? '官方 SDK 与第三方工具，快速集成 GAIA API 到您的应用。' : 'Official SDKs and third-party tools to quickly integrate GAIA API into your app.'}</p>
                <div className="grid grid-cols-4 gap-3">
                  {/* SDK 1: Python */}
                  <div className="bg-gray-700 rounded-lg p-3 border border-gray-600 hover:border-purple-500 transition cursor-pointer">
                    <div className="text-sm font-medium text-white mb-1">Python SDK</div>
                    <div className="text-xs text-gray-400 mb-2">pip install gaia-sdk</div>
                    <div className="flex gap-1">
                      <span className="text-xs bg-green-900 text-green-400 px-2 py-0.5 rounded-full">{language === 'zh' ? '官方' : 'Official'}</span>
                      <span className="text-xs bg-gray-600 text-gray-400 px-2 py-0.5 rounded-full">v2.4.0</span>
                    </div>
                  </div>

                  {/* SDK 2: Node.js */}
                  <div className="bg-gray-700 rounded-lg p-3 border border-gray-600 hover:border-purple-500 transition cursor-pointer">
                    <div className="text-sm font-medium text-white mb-1">Node.js SDK</div>
                    <div className="text-xs text-gray-400 mb-2">npm install @gaia/sdk</div>
                    <div className="flex gap-1">
                      <span className="text-xs bg-green-900 text-green-400 px-2 py-0.5 rounded-full">{language === 'zh' ? '官方' : 'Official'}</span>
                      <span className="text-xs bg-gray-600 text-gray-400 px-2 py-0.5 rounded-full">v2.4.0</span>
                    </div>
                  </div>

                  {/* SDK 3: Go */}
                  <div className="bg-gray-700 rounded-lg p-3 border border-gray-600 hover:border-purple-500 transition cursor-pointer">
                    <div className="text-sm font-medium text-white mb-1">Go SDK</div>
                    <div className="text-xs text-gray-400 mb-2">go get gaia.ai/sdk</div>
                    <div className="flex gap-1">
                      <span className="text-xs bg-green-900 text-green-400 px-2 py-0.5 rounded-full">{language === 'zh' ? '官方' : 'Official'}</span>
                      <span className="text-xs bg-gray-600 text-gray-400 px-2 py-0.5 rounded-full">v1.2.0</span>
                    </div>
                  </div>

                  {/* SDK 4: Java */}
                  <div className="bg-gray-700 rounded-lg p-3 border border-gray-600 hover:border-purple-500 transition cursor-pointer">
                    <div className="text-sm font-medium text-white mb-1">Java SDK</div>
                    <div className="text-xs text-gray-400 mb-2">Maven / Gradle</div>
                    <div className="flex gap-1">
                      <span className="text-xs bg-blue-900 text-blue-400 px-2 py-0.5 rounded-full">{language === 'zh' ? '社区' : 'Community'}</span>
                      <span className="text-xs bg-gray-600 text-gray-400 px-2 py-0.5 rounded-full">v1.0.3</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* API Reference Quick Links */}
              <div className="bg-gray-800 rounded-xl p-5 border border-gray-700">
                <div className="font-semibold text-white mb-4">{language === 'zh' ? 'API 端点一览' : 'API Endpoints'}</div>
                <div className="grid grid-cols-2 gap-2">
                  {/* Endpoint 1 */}
                  <div className="flex items-center justify-between bg-gray-700 rounded-lg px-3 py-2">
                    <span className="font-mono text-xs text-purple-300">POST /v1/generate</span>
                    <span className="text-xs text-gray-400">{language === 'zh' ? '文本/图像/视频/音频生成' : 'Text/Image/Video/Audio'}</span>
                    <span className="text-gray-500">→</span>
                  </div>

                  {/* Endpoint 2 */}
                  <div className="flex items-center justify-between bg-gray-700 rounded-lg px-3 py-2">
                    <span className="font-mono text-xs text-purple-300">POST /v1/embeddings</span>
                    <span className="text-xs text-gray-400">{language === 'zh' ? '文本嵌入向量' : 'Text embeddings'}</span>
                    <span className="text-gray-500">→</span>
                  </div>

                  {/* Endpoint 3 */}
                  <div className="flex items-center justify-between bg-gray-700 rounded-lg px-3 py-2">
                    <span className="font-mono text-xs text-purple-300">GET /v1/models</span>
                    <span className="text-xs text-gray-400">{language === 'zh' ? '获取可用模型列表' : 'List available models'}</span>
                    <span className="text-gray-500">→</span>
                  </div>

                  {/* Endpoint 4 */}
                  <div className="flex items-center justify-between bg-gray-700 rounded-lg px-3 py-2">
                    <span className="font-mono text-xs text-purple-300">GET /v1/usage</span>
                    <span className="text-xs text-gray-400">{language === 'zh' ? '查询用量与 点数消耗' : 'Query usage & credits'}</span>
                    <span className="text-gray-500">→</span>
                  </div>

                  {/* Endpoint 5 */}
                  <div className="flex items-center justify-between bg-gray-700 rounded-lg px-3 py-2">
                    <span className="font-mono text-xs text-purple-300">GET /v1/tasks/{'{'}id{'}'}</span>
                    <span className="text-xs text-gray-400">{language === 'zh' ? '查询异步任务状态' : 'Query async task status'}</span>
                    <span className="text-gray-500">→</span>
                  </div>

                  {/* Endpoint 6 */}
                  <div className="flex items-center justify-between bg-gray-700 rounded-lg px-3 py-2">
                    <span className="font-mono text-xs text-purple-300">DELETE /v1/api-keys/{'{'}id{'}'}</span>
                    <span className="text-xs text-gray-400">{language === 'zh' ? '删除 API 密钥' : 'Delete API key'}</span>
                    <span className="text-gray-500">→</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Support Page */}
          {activePage === 'support' && (
            <div>
              {/* Header */}
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h1 className="text-2xl font-bold text-white">{language === 'zh' ? '支持' : 'Support'}</h1>
                  <p className="text-sm text-gray-400 mt-1">{language === 'zh' ? '获取技术帮助、联系支持团队或浏览常见问题。' : 'Get technical help, contact support team or browse FAQs.'}</p>
                </div>
                <button className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-purple-700 transition-colors">
                  {language === 'zh' ? '提交工单' : 'Submit Ticket'}
                </button>
              </div>

              {/* Contact Options */}
              <div className="grid grid-cols-4 gap-4 mb-6">
                {/* Card 1: Email Support */}
                <div className="bg-gray-800 rounded-xl p-5 border border-gray-700 text-center">
                  <div className="w-12 h-12 rounded-full bg-purple-900 flex items-center justify-center mx-auto mb-3">
                    <Mail className="text-purple-400 w-6 h-6" />
                  </div>
                  <h3 className="text-white font-semibold mb-1">{language === 'zh' ? '邮件支持' : 'Email Support'}</h3>
                  <p className="text-xs text-gray-400 mb-3">{language === 'zh' ? '发送邮件给我们的技术团队，通常在 24 小时内回复。' : 'Email our tech team, typically respond within 24 hours.'}</p>
                  <span className="text-purple-400 text-sm">support@gaiagenx.com</span>
                  <div className="mt-3">
                    <button className="w-full bg-gray-700 text-gray-300 text-sm py-2 rounded-lg hover:bg-gray-600 transition-colors">
                      {language === 'zh' ? '发送邮件' : 'Send Email'}
                    </button>
                  </div>
                </div>

                {/* Card 2: Live Chat */}
                <div className="bg-gray-800 rounded-xl p-5 border border-gray-700 text-center">
                  <div className="w-12 h-12 rounded-full bg-green-900 flex items-center justify-center mx-auto mb-3">
                    <MessageCircle className="text-green-400 w-6 h-6" />
                  </div>
                  <h3 className="text-white font-semibold mb-1">{language === 'zh' ? '在线客服' : 'Live Chat'}</h3>
                  <p className="text-xs text-gray-400 mb-3">{language === 'zh' ? '工作日 9:00–18:00（GMT+8），实时在线解答问题。' : 'Weekdays 9:00-18:00 GMT+8, real-time support.'}</p>
                  <span className="text-green-400 text-sm">{language === 'zh' ? '平均响应 < 5 分钟' : 'Avg response < 5 min'}</span>
                  <div className="mt-3">
                    <button className="w-full bg-green-600 text-white text-sm py-2 rounded-lg hover:bg-green-700 transition-colors">
                      {language === 'zh' ? '开始对话' : 'Start Chat'}
                    </button>
                  </div>
                </div>

                {/* Card 3: Developer Docs */}
                <div className="bg-gray-800 rounded-xl p-5 border border-gray-700 text-center">
                  <div className="w-12 h-12 rounded-full bg-blue-900 flex items-center justify-center mx-auto mb-3">
                    <Book className="text-blue-400 w-6 h-6" />
                  </div>
                  <h3 className="text-white font-semibold mb-1">{language === 'zh' ? '开发者文档' : 'Developer Docs'}</h3>
                  <p className="text-xs text-gray-400 mb-3">{language === 'zh' ? '完整 API 参考文档、SDK 指南与集成示例，随时可查阅。' : 'Complete API reference, SDK guides and integration examples.'}</p>
                  <span className="text-blue-400 text-sm">docs.gaiagenx.com</span>
                  <div className="mt-3">
                    <button className="w-full bg-gray-700 text-gray-300 text-sm py-2 rounded-lg hover:bg-gray-600 transition-colors">
                      {language === 'zh' ? '浏览文档' : 'Browse Docs'}
                    </button>
                  </div>
                </div>

                {/* Card 4: Status Page */}
                <div className="bg-gray-800 rounded-xl p-5 border border-gray-700 text-center">
                  <div className="w-12 h-12 rounded-full bg-green-900 flex items-center justify-center mx-auto mb-3">
                    <Zap className="text-green-400 w-6 h-6" />
                  </div>
                  <h3 className="text-white font-semibold mb-1">{language === 'zh' ? '系统状态页' : 'Status Page'}</h3>
                  <p className="text-xs text-gray-400 mb-3">{language === 'zh' ? '实时监控 API 可用性、延迟与故障历史，7×24 小时更新。' : 'Real-time monitoring of API uptime, latency and incident history.'}</p>
                  <span className="text-green-400 text-sm">{language === 'zh' ? '99.98% 可用性' : '99.98% Uptime'}</span>
                  <div className="mt-3">
                    <button className="w-full bg-gray-700 text-gray-300 text-sm py-2 rounded-lg hover:bg-gray-600 transition-colors">
                      {language === 'zh' ? '查看状态' : 'View Status'}
                    </button>
                  </div>
                </div>
              </div>

              {/* Status Banner */}
              <div className="bg-gray-800 rounded-xl p-4 border border-green-800 mb-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                  <div>
                    <p className="text-sm font-medium text-white">{language === 'zh' ? '所有系统正常运行' : 'All Systems Operational'}</p>
                    <p className="text-xs text-gray-400">{language === 'zh' ? 'API / 控制台 / 模型服务 — 全部正常' : 'API / Console / Model Services — All OK'}</p>
                  </div>
                </div>
                <span className="text-xs text-green-400 cursor-pointer hover:text-green-300">{language === 'zh' ? '查看状态页 →' : 'View Status →'}</span>
              </div>

              {/* FAQ Section */}
              <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden mb-6">
                <div className="p-4 border-b border-gray-700">
                  <span className="font-semibold text-white">{language === 'zh' ? '常见问题' : 'FAQ'}</span>
                </div>

                {/* FAQ 1 */}
                <div className="border-b border-gray-700 p-4 cursor-pointer hover:bg-gray-750">
                  <div className="flex justify-between items-center">
                    <p className="text-sm text-white">{language === 'zh' ? '点数是什么？订阅点数 和 Top-up Credits 有什么区别？' : 'What are Credits? What\'s the difference between Subscription and Top-up Credits?'}</p>
                    <span className="text-gray-400">+</span>
                  </div>
                  <div className="mt-2 text-xs text-gray-400">
                    {language === 'zh' ? 'Credits 是调用模型的消费单位。订阅点数 每月重置，不结转；Top-up Credits 永不过期，优先消耗。' : 'Credits are the consumption unit for model calls. Subscription Credits reset monthly; Top-up Credits never expire and are consumed first.'}
                  </div>
                </div>

                {/* FAQ 2 */}
                <div className="border-b border-gray-700 p-4 cursor-pointer hover:bg-gray-750">
                  <div className="flex justify-between items-center">
                    <p className="text-sm text-white">{language === 'zh' ? '如何获取 API Key？' : 'How do I get an API Key?'}</p>
                    <span className="text-gray-400">+</span>
                  </div>
                  <div className="mt-2 text-xs text-gray-400">
                    {language === 'zh' ? '在控制台的「API Keys」页面点击「新建 API Key」，选择权限范围后保存密钥。' : 'Go to API Keys page in console, click Create New Key, select permissions, and save.'}
                  </div>
                </div>

                {/* FAQ 3 */}
                <div className="border-b border-gray-700 p-4 cursor-pointer hover:bg-gray-750">
                  <div className="flex justify-between items-center">
                    <p className="text-sm text-white">{language === 'zh' ? 'API 调用失败怎么办（HTTP 422 / 500）？' : 'What to do when API call fails (HTTP 422 / 500)?'}</p>
                    <span className="text-gray-400">+</span>
                  </div>
                  <div className="mt-2 text-xs text-gray-400">
                    {language === 'zh' ? '422 通常为参数错误，请检查必填字段与格式；500 为服务端错误，可重试或联系支持。' : '422 is typically parameter error, check required fields; 500 is server error, retry or contact support.'}
                  </div>
                </div>

                {/* FAQ 4 */}
                <div className="border-b border-gray-700 p-4 cursor-pointer hover:bg-gray-750">
                  <div className="flex justify-between items-center">
                    <p className="text-sm text-white">{language === 'zh' ? 'Sora 2 Pro 模型何时正式开放？' : 'When will Sora 2 Pro be generally available?'}</p>
                    <span className="text-gray-400">+</span>
                  </div>
                  <div className="mt-2 text-xs text-gray-400">
                    {language === 'zh' ? 'Sora 2 Pro 目前处于内测阶段，可在「模型」页面点击「申请内测」加入等待列表。' : 'Sora 2 Pro is currently in beta. Visit Models page and click Apply Beta to join waitlist.'}
                  </div>
                </div>

                {/* FAQ 5 */}
                <div className="p-4 cursor-pointer hover:bg-gray-750">
                  <div className="flex justify-between items-center">
                    <p className="text-sm text-white">{language === 'zh' ? '如何为团队成员设置不同权限？' : 'How to set different permissions for team members?'}</p>
                    <span className="text-gray-400">+</span>
                  </div>
                  <div className="mt-2 text-xs text-gray-400">
                    {language === 'zh' ? '在「团队与安全」页面添加成员时选择「管理员」、「开发者」或「只读」角色，也可绑定具体项目。' : 'In Team & Security page, select Admin, Developer, or Read-only role when adding members, can also bind to specific projects.'}
                  </div>
                </div>
              </div>

              {/* Recent Tickets */}
              <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
                <div className="flex justify-between items-center p-4 border-b border-gray-700">
                  <span className="font-semibold text-white">{language === 'zh' ? '我的工单' : 'My Tickets'}</span>
                  <span className="text-xs text-purple-400 cursor-pointer hover:text-purple-300">{language === 'zh' ? '提交新工单' : 'Submit New Ticket'}</span>
                </div>

                <table className="w-full">
                  <thead className="bg-gray-900 text-xs text-gray-400">
                    <tr>
                      <th className="px-4 py-3 text-left">{language === 'zh' ? '工单编号' : 'Ticket #'}</th>
                      <th className="px-4 py-3 text-left">{language === 'zh' ? '主题' : 'Subject'}</th>
                      <th className="px-4 py-3 text-left">{language === 'zh' ? '优先级' : 'Priority'}</th>
                      <th className="px-4 py-3 text-left">{language === 'zh' ? '状态' : 'Status'}</th>
                      <th className="px-4 py-3 text-left">{language === 'zh' ? '创建时间' : 'Created'}</th>
                      <th className="px-4 py-3 text-left">{language === 'zh' ? '操作' : 'Action'}</th>
                    </tr>
                  </thead>
                  <tbody className="text-xs text-gray-300">
                    {/* Ticket 1 */}
                    <tr className="border-t border-gray-700">
                      <td className="px-4 py-3">#TKT-2048</td>
                      <td className="px-4 py-3">{language === 'zh' ? 'Sora 2 Pro 生成任务一直处于 pending' : 'Sora 2 Pro generation task stuck in pending'}</td>
                      <td className="px-4 py-3">
                        <span className="bg-red-900 text-red-400 px-2 py-0.5 rounded-full">{language === 'zh' ? '高' : 'High'}</span>
                      </td>
                      <td className="px-4 py-3">
                        <span className="bg-yellow-900 text-yellow-400 px-2 py-0.5 rounded-full">{language === 'zh' ? '处理中' : 'In Progress'}</span>
                      </td>
                      <td className="px-4 py-3">2026-04-08</td>
                      <td className="px-4 py-3">
                        <span className="text-purple-400 cursor-pointer hover:text-purple-300">{language === 'zh' ? '查看' : 'View'}</span>
                      </td>
                    </tr>

                    {/* Ticket 2 */}
                    <tr className="border-t border-gray-700">
                      <td className="px-4 py-3">#TKT-2031</td>
                      <td className="px-4 py-3">{language === 'zh' ? '点数充值后未到账' : 'Credits top-up not received'}</td>
                      <td className="px-4 py-3">
                        <span className="bg-yellow-900 text-yellow-400 px-2 py-0.5 rounded-full">{language === 'zh' ? '中' : 'Medium'}</span>
                      </td>
                      <td className="px-4 py-3">
                        <span className="bg-green-900 text-green-400 px-2 py-0.5 rounded-full">{language === 'zh' ? '已解决' : 'Resolved'}</span>
                      </td>
                      <td className="px-4 py-3">2026-04-05</td>
                      <td className="px-4 py-3">
                        <span className="text-purple-400 cursor-pointer hover:text-purple-300">{language === 'zh' ? '查看' : 'View'}</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
