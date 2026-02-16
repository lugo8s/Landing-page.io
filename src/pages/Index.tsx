/**
 * PÁGINA PRINCIPAL DEL PORTAFOLIO
 * ================================
 * Esta página integra todas las secciones del portafolio.
 * Para modificar cada sección, edita los archivos en src/components/sections/
 */

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ContactSection from "@/components/sections/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background dark">
      {/* Navegación */}
      <Header />

      {/* Contenido principal */}
      <main>
        {/* Sección Hero / Inicio */}
        <HeroSection />

        {/* Sección Sobre mí */}
        <AboutSection />

        {/* Sección Proyectos */}
        <ProjectsSection />

        {/* Sección Servicios */}
        <ServicesSection />

        {/* Sección Contacto */}
        <ContactSection />
      </main>

      {/* Pie de página */}
      <Footer />
    </div>
  );
};

export default Index;
