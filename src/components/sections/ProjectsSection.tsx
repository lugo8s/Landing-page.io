/**
 * SECCIÓN PROYECTOS
 * =================
 * muestro mis proyectos realizados
 * edito el array 'projects' para agregar, modificar o eliminar proyectos
 */

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, ArrowUpRight, } from "lucide-react";

// imágenes de los proyectos
import projectEcommerce from "@/assets/project-ecommerce.jpeg";
import projectDashboard from "@/assets/project-dashboard.jpg";
import projectLanding from "@/assets/project-landing.jpg";
import projectTasks from "@/assets/project-tasks.jpg";

// PROYECTOS - edita esta lista con tus proyectos
// para agregar un nuevo proyecto, copiar la estructura y modificar los datos
const projects = [
  {
    id: 1,
    title: "E-Commerce Moderno (por definir)",
    description: "Tienda online con carrito de compras, pasarela de pagos y panel de administración. Diseño responsive y optimizado para conversión.",
    image: projectEcommerce,
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    
    githubUrl: " https://e-commerce-sl.netlify.app",
    featured: true,
  },
  {
    id: 2,
    title: "Dashboard Analytics",
    description: "Panel de control interactivo con gráficos en tiempo real, reportes y gestión de datos. Interfaz intuitiva y moderna.",
    image: projectDashboard,
    technologies: ["React", "TypeScript", "Tailwind", "Chart.js"],
    liveUrl: "https://github.com/lugo8s",
    githubUrl: "https://github.com/lugo8s",
    featured: true,
  },
  {
    id: 3,
    title: "Landing Page Corporativa",
    description: "Sitio web corporativo con diseño elegante, animaciones suaves y formulario de contacto integrado.",
    image: projectLanding,
    technologies: ["HTML", "CSS", "JavaScript"],
    
    githubUrl: "https://landingpage-sl.netlify.app",
    featured: false,
  },
  {
    id: 4,
    title: "",
    description: "",
    image: projectTasks,
    technologies: ["", ""],
    liveUrl: "",
    githubUrl: "",
    featured: false,
    //esta parte esta para agregar mas proyectos
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group relative rounded-2xl overflow-hidden border border-border bg-card hover:border-primary/50 transition-all duration-300 ${
        project.featured ? "lg:col-span-2 lg:grid lg:grid-cols-2" : ""
      }`}
    >
      {/* imagen de cada proyecto */}
      <div className={`relative overflow-hidden ${project.featured ? "h-64 lg:h-full" : "h-48"}`}>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* contenido */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* tecnologías */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs bg-muted rounded-md text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* enlaces */}
        <div className="flex items-center gap-4">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm font-medium text-primary hover:underline"
            >
              Ver proyecto <ArrowUpRight size={16} />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github size={16} /> {/*lo deje asi,porq se ve mas estetico*/}
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
};

const ProjectsSection = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <section id="proyectos" className="section-spacing">
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
            Mis <span className="text-gradient">Proyectos</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Aquí puedes ver algunos de los proyectos en los que he trabajado. 
            Cada uno representa un reto y una oportunidad de crecimiento.
            <p className="text-sm text-muted-foreground mt-2">"Click en cada uno para ver más detalles"</p> 
          </p>        
        </motion.div>

        {/* Grid de proyectos */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* CTA para más proyectos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-lg hover:bg-muted/50 transition-all text-muted-foreground hover:text-foreground"
          >
            <Github size={20} />
            Ver más en GitHub 
            <p>"Proximanmente "</p>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
