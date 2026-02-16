/**
 * SECCIÓN HERO / INICIO
 * =====================
 * presentación profesional principal.
 * edito nombre, título y descripción aquí.
 */

import { motion } from "framer-motion";
import { ArrowDown, Github, Instagram, Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-dots"
    >
      {/* fondo con gradiente */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-cyan-500/5" />
      
      {/* círculo decorativo */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="container-portfolio relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8"
          >
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            Disponible para proyectos
          </motion.div>

          {/* mi nombre y quien soy- */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-white mb-6"
          >
            Hola, soy{" "}
            <span className="text-gradient">Sebastian Lugo</span>
          </motion.h1>

          {/* título profesional q no tengo */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl sm:text-2xl md:text-3xl text-muted-foreground mb-8"
          >
            Desarrollador Web 
          </motion.p>

          {/* descripción breve  */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10"
          >
            Creo experiencias digitales únicas y funcionales. 
            Transformo ideas en sitios web modernos, atractivos y optimizados.
            ¿Estas interesado en saber más?
          </motion.p>

          {/* botones CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <a
              href="#proyectos"
              className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-all glow-sm hover:glow"
            >
              Ver mis proyectos
            </a>
            <a
              href="#contacto"
              className="px-8 py-4 border border-border rounded-lg font-semibold text-white hover:bg-muted/50 transition-all"
            >
              Contáctame
            </a>
          </motion.div>

          {/* R sociales */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex items-center justify-center gap-6"
          >
           
            <a
              href="https://www.instagram.com/lugo_sebast/"
              className="p-3 rounded-full bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground transition-all"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="mailto:lugosebastian049@gmail.com"
              className="p-3 rounded-full bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground transition-all"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </motion.div>
        </div>

        {/* scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <a
            href="#sobre-mi"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <span className="text-sm">Scroll</span>
            <ArrowDown size={20} className="animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
