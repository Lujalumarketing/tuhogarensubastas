import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

import ServicesSection from "./components/ServicesSection";
import TrainingSection from "./components/TrainingSection";
import DifferentiatorSection from "./components/DifferentiatorSection";
import StorySection from "./components/StorySection";
import AudienceSection from "./components/AudienceSection";
import FinalCTA from "./components/FinalCTA";
import FaqSection from "./components/FaqSection";
import Footer from "./components/Footer";
import CookieBanner from "./components/CookieBanner";
import FloatingWhatsAppButton from "./components/FloatingWhatsAppButton";
import { siteConfig } from "./data/siteConfig";

function App() {
  return (
    <div className="relative overflow-x-clip">
      <a
        href="#contenido"
        className="sr-only z-[60] rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground focus:not-sr-only focus:absolute focus:left-4 focus:top-4"
      >
        Saltar al contenido principal
      </a>
      

      
      <Navbar />
      
      <main id="contenido" className="relative">
        <Hero />
        <ServicesSection />
        <TrainingSection />
        <DifferentiatorSection />
        <StorySection />
        <AudienceSection />
        <FinalCTA />
        <FaqSection />
      </main>
      
      <Footer />
      <FloatingWhatsAppButton
        phoneNumber={siteConfig.whatsAppNumber}
        defaultMessage={siteConfig.defaultWhatsAppMessage}
        showTooltip
      />
      <CookieBanner />
    </div>
  );
}

export default App;
