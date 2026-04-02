import Navbar from "./components/Navbar";
import LegalSection from "./components/LegalSection";
import Footer from "./components/Footer";
import CookieBanner from "./components/CookieBanner";
import WhatsAppFloatingButton from "./components/WhatsAppFloatingButton";

function LegalPage() {
  return (
    <div className="relative overflow-x-clip">
      <div
        className="pointer-events-none absolute -top-40 -left-28 h-96 w-96 rounded-full bg-blue-100/50 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-[32rem] -right-24 h-96 w-96 rounded-full bg-blue-100/40 blur-[120px]"
        aria-hidden="true"
      />

      <Navbar />

      <main id="contenido" className="relative">
        <div id="inicio" />
        <h1 className="sr-only">Información legal</h1>
        <div
          className="pointer-events-none absolute top-0 left-0 h-[40rem] w-full bg-gradient-to-b from-blue-50/40 to-transparent"
          aria-hidden="true"
        />
        <LegalSection />
      </main>

      <Footer />
      <WhatsAppFloatingButton />
      <CookieBanner />
    </div>
  );
}

export default LegalPage;
