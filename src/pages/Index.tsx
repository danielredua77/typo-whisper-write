
import { useState } from "react";
import Header from "@/components/Header";
import KeyboardPreview from "@/components/KeyboardPreview";
import Features from "@/components/Features";
import TechStack from "@/components/TechStack";
import Installation from "@/components/Installation";
import DownloadSection from "@/components/DownloadSection";
import Footer from "@/components/Footer";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-blue-50">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section id="home" className="container max-w-6xl mx-auto pt-20 pb-16 px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2 space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                Teclado Inteligente com Correção por IA
              </h1>
              <p className="text-xl text-gray-600">
                Digite com confiança. Nossa IA corrige sua gramática, ortografia e estilo em tempo real, em qualquer aplicativo Android.
              </p>
              <div className="pt-4 flex flex-wrap gap-4">
                <a
                  href="#download"
                  onClick={() => setActiveSection("download")}
                  className="px-6 py-3 bg-keyboard-accent text-white rounded-lg hover:bg-blue-600 transition-colors duration-200"
                >
                  Download APK
                </a>
                <a
                  href="#features"
                  onClick={() => setActiveSection("features")}
                  className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                >
                  Saiba mais
                </a>
              </div>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <KeyboardPreview />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="bg-white py-16">
          <Features />
        </section>

        {/* Tech Stack Section */}
        <section id="tech" className="py-16">
          <TechStack />
        </section>

        {/* Installation Guide */}
        <section id="installation" className="bg-white py-16">
          <Installation />
        </section>

        {/* Download Section */}
        <section id="download" className="py-16">
          <DownloadSection />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
