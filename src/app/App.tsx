import { LanguageProvider } from '../contexts/LanguageContext';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { WhyChooseSection } from './components/WhyChooseSection';
import { CapabilitiesSection } from './components/CapabilitiesSection';
import { ModelsSection } from './components/ModelsSection';
import { CodeIntegrationSection } from './components/CodeIntegrationSection';
import { SolutionsSection } from './components/SolutionsSection';
import { TrustSection } from './components/TrustSection';
import { FAQSection } from './components/FAQSection';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { ChatBot } from './components/ChatBot';
import { useMouseEffects } from './hooks/useMouseEffects';

export default function App() {
  useMouseEffects();

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-black text-white">
        <Header />
        <main>
          <HeroSection />
          <WhyChooseSection />
          <CapabilitiesSection />
          <ModelsSection />
          <CodeIntegrationSection />
          <SolutionsSection />
          <TrustSection />
          <FAQSection />
          <CTASection />
        </main>
        <Footer />
        <ChatBot />
      </div>
    </LanguageProvider>
  );
}
