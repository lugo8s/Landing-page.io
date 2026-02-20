/**
 * SECCIÓN SERVICIOS
 * =================
 * Detalla los servicios que ofreces.
 * Edita el array 'services' para personalizar tus servicios.
 */

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Code, 
  Palette, 
  Smartphone, 
  Rocket, 
  Search, 
  Settings,
  LucideIcon 
} from "lucide-react";

// SERVICIOS - Edita esta lista con tus servicios
const services: {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}[] = [
  {
    icon: Code,
    title: "Desarrollo Web",
    description: "Creación de sitios web modernos, rápidos y seguros utilizando las mejores prácticas y tecnologías actuales.",
    features: [
      "Sitios web corporativos",
      "Landing pages",
      "Aplicaciones web",
      "E-commerce (proximante)",
    ],
  },
  {
    icon: Palette,
    title: "Diseños Profesionales ",
    description: "Diseño de interfaces intuitivas y atractivas que mejoran la experiencia del usuario y aumentan la conversión.",
    features: [
      "Wireframes y prototipos",
      "Diseño de interfaces",
      "Sistemas de diseño",
      "Branding digital",
    ],
  },
  {
    icon: Smartphone,
    title: "Diseño Responsive",
    description: "Desarrollo de sitios web que se adaptan perfectamente a cualquier dispositivo: móvil, tablet y desktop.",
    features: [
      "Mobile-first design",
      "Optimización táctil",
      "Adaptación fluida",
      "Testing en dispositivos",
    ],
  },
  {
    icon: Rocket,
    title: "Optimización Web",
    description: "Mejora del rendimiento y velocidad de carga para ofrecer la mejor experiencia a los usuarios.",
    features: [
      "Optimización de imágenes",
      "Minificación de código",
      "Lazy loading",
      "Core Web Vitals",
    ],
  },
  {
    icon: Search,
    title: "SEO Básico",
    description: "Implementación de buenas prácticas SEO para mejorar el posicionamiento en buscadores.",
    features: [
      "Meta tags optimizados",
      "Estructura semántica",
      "",
      "",
    ],
  },
  {
    icon: Settings,
    title: "Mantenimiento Web",
    description: "Soporte continuo para mantener tu sitio web actualizado, seguro y funcionando correctamente.",
    features: [
      "Actualizaciones",
      "Corrección de errores",
      "Mejoras continuas",
      "Monitoreo de rendimiento",
    ],
  },
];

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const Icon = service.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
    >
      {/* Icono */}
      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
        <Icon className="w-6 h-6 text-primary" />
      </div>

      {/* Título */}
      <h3 className="text-xl font-bold mb-2">{service.title}</h3>

      {/* Descripción */}
      <p className="text-muted-foreground text-sm mb-4">
        {service.description}
      </p>

      {/* Características */}
      <ul className="space-y-2">
        {service.features.map((feature, i) => (
          <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="w-1 h-1 bg-primary rounded-full" />
            {feature}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

const ServicesSection = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <section id="servicios" className="text-white section-spacing bg-muted/30">
      <div className="container-portfolio">
        {/* Encabezado */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
            Mis <span className="text-gradient">Servicios</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Ofrezco soluciones digitales completas para hacer crecer tu presencia online 
            y alcanzar tus objetivos de negocio.
          </p>
        </motion.div>

        {/* Grid de servicios */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-6">
            ¿Tienes un proyecto en mente? ¡Hablemos!
          </p>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-all glow-sm hover:glow"
          >
            Solicitar cotización
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
