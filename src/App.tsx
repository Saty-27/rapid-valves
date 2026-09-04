import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { AboutSection } from './components/AboutSection';
import { IndustriesSection } from './components/IndustriesSection';
import { ProductsSection } from './components/ProductsSection';
import { CertificationsSection } from './components/CertificationsSection';
import { InvestorHighlights } from './components/InvestorHighlights';
import { VideoMediaSection } from './components/VideoMediaSection';
import { ProjectGallerySection } from './components/ProjectGallerySection';
import { ManufacturingAndProcess } from './components/ManufacturingAndProcess';
import { MDMessageSection } from './components/MDMessageSection';
import { BlogSection } from './components/BlogSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { FloatingDock } from './components/FloatingDock';
import { ContactSalesModal } from './components/ContactSalesModal';
import { VideoPlayerModal } from './components/VideoPlayerModal';
import { SearchModal } from './components/SearchModal';

export const App: React.FC = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [selectedProductForInquiry, setSelectedProductForInquiry] = useState('Gate Valves');

  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [activeVideoTitle, setActiveVideoTitle] = useState('');
  const [activeVideoId, setActiveVideoId] = useState('');

  const handleOpenContact = (productName?: string) => {
    if (productName && typeof productName === 'string') {
      setSelectedProductForInquiry(productName);
    }
    setContactModalOpen(true);
  };

  const handlePlayVideo = (title: string, videoId: string) => {
    setActiveVideoTitle(title);
    setActiveVideoId(videoId);
    setVideoModalOpen(true);
  };

  const handleScrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-brand-charcoal flex flex-col relative font-sans selection:bg-brand-red selection:text-white">
      
      {/* Subtle Top Scroll Reading Progress */}
      <ScrollProgressBar />

      {/* ========================================================
          GLOBAL STICKY NAVBAR (Permanently docked across entire page)
         ======================================================== */}
      <Navbar
        onOpenContact={() => handleOpenContact()}
        onOpenSearch={() => setSearchModalOpen(true)}
      />

      {/* ========================================================
          HERO SECTION (Full-bleed edge-to-edge video)
         ======================================================== */}
      <Hero
        onExploreProducts={() => handleScrollToSection('products')}
        onTalkExperts={() => handleOpenContact()}
      />



      {/* Main Content Sections */}
      <main className="flex-1 w-full">

        {/* SECTION C: ABOUT / ENGINEERED TO CONTROL */}
        <AboutSection
          onKnowMore={() => handleScrollToSection('manufacturing')}
          onSelectIndustry={(ind) => handleOpenContact(ind)}
        />

        {/* SECTION D: INDUSTRIES WE SERVE */}
        <IndustriesSection />

        {/* SECTION E: OUR PRODUCTS CAROUSEL & SPECS */}
        <ProductsSection
          onSelectProduct={(name) => handleOpenContact(name)}
        />

        {/* SECTION F: CERTIFICATIONS & APPROVALS (ISO, CE, TÜV, ABS, DNV, LR, IRS) */}
        <CertificationsSection />

        {/* SECTION G & I: GLOBAL SCALE & PERFORMANCE (INVESTOR HIGHLIGHTS + REAL WORLD MAP) */}
        <InvestorHighlights
          onOpenContact={() => handleOpenContact('Investor Presentation')}
        />

        {/* SECTION H: INNOVATION IN MOTION / VIDEO SECTION */}
        <VideoMediaSection
          onPlayVideo={handlePlayVideo}
        />

        {/* SECTION I: PROJECTS & SOLUTIONS / IMAGE GALLERY (ASYMMETRIC EDITORIAL PORTFOLIO + TRUST STRIP) */}
        <ProjectGallerySection
          onOpenContact={() => handleOpenContact('Engineering Projects Inquiry')}
        />

        {/* SECTIONS J & K: MANUFACTURING SNAPSHOT + 5-STAGE PROCESS */}
        <ManufacturingAndProcess
          onTourClick={() => handlePlayVideo("Rapid Valves 45,000 Sq.Ft. Facility Tour", "dQw4w9WgXcQ")}
        />

        {/* SECTION L: MANAGING DIRECTOR'S MESSAGE */}
        <MDMessageSection />

        {/* SECTION M: OUR BLOG / ENGINEERING INSIGHTS & ARTICLES */}
        <BlogSection
          onOpenContact={() => handleOpenContact('Engineering Insights Inquiry')}
        />

        {/* SECTION N: FREQUENTLY ASKED QUESTIONS (EXACT BLUEPRINT) */}
        <FAQSection
          onOpenContact={() => handleOpenContact('FAQ General Inquiry')}
        />
      </main>

      {/* SECTION M: FOOTER */}
      <Footer
        onContactClick={() => handleOpenContact()}
      />

      {/* SECTION N: FLOATING UI ELEMENTS (WHATSAPP, CALL, EMAIL + CHAT LAUNCHER) */}
      <FloatingDock
        onOpenContact={() => handleOpenContact()}
      />

      {/* INTERACTIVE MODALS */}
      <ContactSalesModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
        defaultProduct={selectedProductForInquiry}
      />

      <VideoPlayerModal
        isOpen={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
        title={activeVideoTitle}
        videoId={activeVideoId}
      />

      <SearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        onNavigate={handleScrollToSection}
      />
    </div>
  );
};

export default App;
