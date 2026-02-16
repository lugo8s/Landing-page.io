/**
 * SECCIÓN SOBRE MÍ
 * ================
 * Información personal y tecnologías.
 * Edita la descripción y las tecnologías que manejas.
 */

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

// TECNOLOGÍAS - Edita esta lista con tus tecnologías
const technologies = [
  { name: "HTML", category: "Frontend" },
  { name: "CSS", category: "Frontend" },
  { name: "JavaScript", category: "Frontend" },
  { name: "React", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "Python", category: "Backend" },
  { name: "", category: "" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sobre-mi" className="section-spacing bg-muted/30">
      <div className="container-portfolio">
        <div ref={ref} className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Contenido de texto */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title mb-6">
              <span className="text-gradient"> Sobre mí</span>
            </h2>

            {/* DESCRIPCIÓN - Edita este texto */}
            <div className="space-y-4 text-muted-foreground text-lg">
              <p>
                Soy estudiante y desarrollador web apasionado por crear experiencias digitales 
                únicas y funcionales. Me especializo en el desarrollo frontend con 
                tecnologías modernas.
              </p>
              <p>
                Mi enfoque está en escribir código limpio, escalable y optimizado, 
                siempre priorizando la experiencia del usuario y el rendimiento.
              </p>
              <p>
                Cuando no estoy programando, me gusta explorar nuevas tecnologías, 
                aprender sobre diseño UI/UX y mantenerme actualizado con las últimas 
                tendencias del desarrollo web.
              </p>
            </div>

            {/* Stats rápidos */}
            <div className="grid grid-cols-3 gap-6 mt-10">
              <div className="text-center p-4 rounded-lg bg-card border border-border">
                <div className="text-3xl font-bold text-gradient">7+</div>
                <div className="text-sm text-muted-foreground mt-1">Meses exp.</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-card border border-border">
                <div className="text-3xl font-bold text-gradient">5+</div>
                <div className="text-sm text-muted-foreground mt-1">Proyectos</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-card border border-border">
                <div className="text-3xl font-bold text-gradient">100%</div>
                <div className="text-sm text-muted-foreground mt-1">Dedicación</div>
              </div>
            </div>
          </motion.div>

          {/* Tecnologías */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-gradient">Tecnologías que manejo</h3>
            <div className="text-white flex flex-wrap gap-3">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  className="px-4 py-2 bg-card border border-border rounded-lg text-sm font-medium hover:border-primary/50 hover:bg-primary/5 transition-all cursor-default"
                >
                  {tech.name}
                </motion.div>
              ))}
            </div>

            {/* Descripción adicional de habilidades */}
            <div className="mt-8 p-6 rounded-xl border-gradient bg-card">
              <h4 className="text-white flex flex-wrap gap-3">Mi enfoque</h4>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  Desarrollo responsive y mobile-first
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  Código limpio y bien documentado
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  Optimización SEO y rendimiento
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  Diseño UI/UX centrado en el usuario
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
