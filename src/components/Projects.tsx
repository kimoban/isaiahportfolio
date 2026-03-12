import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/portfolio";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const Projects = () => (
  <AnimatedSection className="py-24 px-6" animation="scale">
    <div id="projects" className="container mx-auto max-w-4xl scroll-mt-24">
      <motion.h2
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold font-display mb-12 text-foreground"
      >
        Featured <span className="text-gradient">Projects</span>
      </motion.h2>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            variants={{
              hidden: { opacity: 0, y: 40, scale: 0.95 },
              visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
            }}
          >
            <ProjectCard project={project} index={i} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  </AnimatedSection>
);

export default Projects;
