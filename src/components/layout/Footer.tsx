/**
 * FOOTER
 * ======
 * Pie de página con créditos y enlaces.
 * Edita tu nombre y año aquí.
 */

import { Github, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container-portfolio">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright - Edita tu nombre aquí */}
          <p className="text-muted-foreground text-sm text-center md:text-left">
            © {currentYear} SL. Todos los derechos reservados.
          </p>

          {/* Redes sociales */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/lugo8s"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            
            <a
              href="https://www.instagram.com/lugo_sebast/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
