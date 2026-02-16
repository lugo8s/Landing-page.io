/**
 * SECCIÓN CONTACTO
 * ================
 * Enlaces de contacto: WhatsApp e Instagram.
 * Edita los enlaces con tu información personal.
 */

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MessageCircle, Instagram, Mail, MapPin, ArrowUpRight } from "lucide-react";

// INFORMACIÓN DE CONTACTO - Edita estos datos
const contactInfo = {
  whatsapp: {
    number: "+58 412 871 7332", // Tu número de WhatsApp con código de país
    message: "Hola! Me interesa tu trabajo como desarrollador web.", // Mensaje predeterminado
  },
  instagram: "https://www.instagram.com/lugo_sebast/",
  email: "lugosebastian049@gmail.com", // Tu email
  location: "Monagas-Maturin, Venezuela", // Tu ubicación
};

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Genera el enlace de WhatsApp
  const whatsappLink = `https://wa.me/${contactInfo.whatsapp.number.replace(/\D/g, "")}?text=${encodeURIComponent(contactInfo.whatsapp.message)}`;

  return (
    <section id="contacto" className="section-spacing">
      <div className="container-portfolio">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          {/* Encabezado */}
          <div className="text-center mb-12">
            <h2 className="text-white section-title mb-4">
              ¿Hablamos de tu <span className="text-gradient">proyecto</span>?
            </h2>
            <p className="section-subtitle mx-auto">
              Estoy disponible para nuevos proyectos y colaboraciones. 
              ¡Contáctame y hagamos realidad tu idea!
            </p>
          </div>

          {/* Tarjetas de contacto */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* WhatsApp */}
            <motion.a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-green-500/50 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 rounded-xl bg-green-500/10 flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                  <MessageCircle className="w-7 h-7 text-green-500" />
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-green-500 transition-colors" />
              </div>
              <h3 className=" text-white text-xl font-bold mb-2">WhatsApp</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Escríbeme directamente para una respuesta rápida.
              </p>
              <span className="text-green-500 font-medium text-sm">
                Enviar mensaje →
              </span>
            </motion.a>

            {/* Instagram */}
            <motion.a
              href={contactInfo.instagram}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-pink-500/50 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 flex items-center justify-center group-hover:from-purple-500/20 group-hover:to-pink-500/20 transition-colors">
                  <Instagram className="w-7 h-7 text-pink-500" />
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-pink-500 transition-colors" />
              </div>
              <h3 className="text-white text-xl font-bold mb-2">Instagram</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Sígueme y apoyame en Instagram.
              </p>
              <span className="text-pink-500 font-medium text-sm">
                @lugo_sebast →
              </span>
            </motion.a>
          </div>

          {/* Información adicional */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 text-muted-foreground text-sm"
          >
            <div className="flex items-center gap-2">
              <Mail size={16} className="text-primary" />
              <a href={`mailto:${contactInfo.email}`} className="hover:text-foreground transition-colors">
                {contactInfo.email}
              </a>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-muted-foreground rounded-full" />
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-primary" />
              <span>{contactInfo.location}</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
