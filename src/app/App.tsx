import { useState } from 'react';
import { LanguageProvider } from '../contexts/LanguageContext';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { WhyChooseSection } from './components/WhyChooseSection';
import { CapabilitiesSection } from './components/CapabilitiesSection';
import { ModelsSection } from './components/ModelsSection';
import { CodeIntegrationSection } from './components/CodeIntegrationSection';
import { SolutionsSection } from './components/SolutionsSection';
import { TrustSection } from './components/TrustSection';
import { RateLimitsSection } from './components/RateLimitsSection';
import { TrustedBySection } from './components/TrustedBySection';
import { PricingSection } from './components/PricingSection';
import { FAQSection } from './components/FAQSection';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { ChatBot } from './components/ChatBot';
import { ConsolePage } from './components/ConsolePage';
import { useMouseEffects } from './hooks/useMouseEffects';

export default function App() {
  useMouseEffects();
  const [currentPage, setCurrentPage] = useState<'home' | 'console'>('home');

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-black text-white">
        <Header onNavigateToConsole={() => setCurrentPage('console')} onNavigateToHome={() => setCurrentPage('home')} />
        <main>
          <HeroSection />
          <WhyChooseSection />
          <CapabilitiesSection />
          <ModelsSection />
          <CodeIntegrationSection />
          <SolutionsSection />
          <TrustSection />
          <RateLimitsSection />
          <TrustedBySection />
          <PricingSection />
          <FAQSection />
          <CTASection />
        </main>
        <Footer />
        <ChatBot />
        {currentPage === 'console' && <ConsolePage onClose={() => setCurrentPage('home')} />}
      </div>
    </LanguageProvider>
  );
}
