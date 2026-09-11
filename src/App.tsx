import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { Portfolio } from './components/Portfolio';
import { Footer } from './components/Footer';
import { AboutModal } from './components/AboutModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F7F7FA] text-[#111114] font-sans selection:bg-[#7C3AED]/20 selection:text-[#7C3AED] relative overflow-x-hidden">
      {/* Top Header */}
      <Header onOpenAbout={() => setAboutOpen(true)} />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <Services />
        <Process />
        <Portfolio />
      </main>

      {/* Footer */}
      <Footer onOpenAbout={() => setAboutOpen(true)} />

      {/* Floating WhatsApp Button */}
      <FloatingWhatsApp />

      {/* About Modal */}
      <AboutModal isOpen={aboutOpen} onClose={() => setAboutOpen(false)} />
    </div>
  );
}

