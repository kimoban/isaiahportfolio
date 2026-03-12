import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import type { Project } from "@/data/portfolio";

const ProjectCard = ({ project, index }: { project: Project; index: number }) => (
  <motion.article
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.12, duration: 0.5 }}
    className="bg-card rounded-xl border border-border overflow-hidden card-hover group"
  >
    {project.image && (
      <div className="w-full h-40 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>
    )}
    <div className="p-6">
    <h3 className="font-display text-xl font-semibold mb-3 text-foreground group-hover:text-gradient transition-colors">
      {project.title}
    </h3>
    <p className="text-muted-foreground text-sm leading-relaxed mb-5 font-body">
      {project.description}
    </p>
    <div className="flex flex-wrap gap-2 mb-5">
      {project.tech.map((t) => (
        <span
          key={t}
          className="px-2.5 py-1 text-xs rounded-md bg-primary/10 text-primary font-medium"
        >
          {t}
        </span>
      ))}
    </div>
    <div className="flex gap-4">
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
        aria-label={`View ${project.title} source on GitHub`}
      >
        <Github size={16} /> Source
      </a>
      {project.demo && (
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
          aria-label={`View ${project.title} live demo`}
        >
          <ExternalLink size={16} /> Demo
        </a>
      )}
    </div>
    </div>
  </motion.article>
);

export default ProjectCard;
