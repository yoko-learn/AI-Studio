import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroCarousel } from './components/HeroCarousel';
import { ServicesSection } from './components/ServicesSection';
import { NewsSection } from './components/NewsSection';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { TechSpecsModal } from './components/TechSpecsModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { NewsDetailModal } from './components/NewsDetailModal';
import { AboutModal } from './components/AboutModal';
import { HERO_SLIDES, SERVICES, NEWS_ITEMS } from './data/mockData';
import { ServiceItem, NewsItem } from './types';

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isTechSpecsOpen, setIsTechSpecsOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);
  const [consultationService, setConsultationService] = useState<string>('雲端託管與移轉');

  const handleOpenConsultation = (serviceName?: string) => {
    if (serviceName) {
      setConsultationService(serviceName);
    }
    setIsContactOpen(true);
  };

  const handleSelectService = (service: ServiceItem) => {
    setSelectedService(service);
  };

  const handleSelectNews = (news: NewsItem) => {
    setSelectedNews(news);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0a0f1d] selection:bg-blue-600 selection:text-white font-sans">
      {/* Anchor for About navigation */}
      <div id="about-anchor" className="absolute top-0 left-0" />

      {/* Top Header / Navigation Bar */}
      <Navbar
        onOpenContact={() => handleOpenConsultation()}
        onOpenAbout={() => setIsAboutOpen(true)}
        onOpenServices={() => scrollToSection('services-section')}
        onOpenNews={() => scrollToSection('news-section')}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Carousel Banner Section */}
        <HeroCarousel
          slides={HERO_SLIDES}
          onOpenConsultation={() => handleOpenConsultation()}
          onOpenTechSpecs={() => setIsTechSpecsOpen(true)}
        />

        {/* 2. 我們的專業服務 (Our Professional Services) */}
        <ServicesSection
          services={SERVICES}
          onSelectService={handleSelectService}
        />

        {/* 3. 最新消息與洞察 (Latest News & Insights) */}
        <NewsSection
          newsItems={NEWS_ITEMS}
          onSelectNews={handleSelectNews}
        />
      </main>

      {/* Footer Section */}
      <Footer
        onOpenAbout={() => setIsAboutOpen(true)}
        onOpenTechSpecs={() => setIsTechSpecsOpen(true)}
        onOpenServices={() => scrollToSection('services-section')}
        onOpenContact={() => handleOpenConsultation()}
      />

      {/* Interactive Modals */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        defaultService={consultationService}
      />

      <TechSpecsModal
        isOpen={isTechSpecsOpen}
        onClose={() => setIsTechSpecsOpen(false)}
        onOpenConsultation={() => handleOpenConsultation('全新智能 2.0 系統發表')}
      />

      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onOpenConsultation={(svc) => handleOpenConsultation(svc)}
      />

      <NewsDetailModal
        news={selectedNews}
        onClose={() => setSelectedNews(null)}
      />

      <AboutModal
        isOpen={isAboutOpen}
        onClose={() => setIsAboutOpen(false)}
        onOpenConsultation={() => handleOpenConsultation()}
      />
    </div>
  );
}
