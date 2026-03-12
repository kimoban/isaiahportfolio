import { motion } from "framer-motion";
import { Monitor, Server, Wrench, ShieldCheck } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { skillGroups } from "@/data/portfolio";

const categoryIcons = [Monitor, Server, Wrench, ShieldCheck];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
};

const chipVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Skills = () => (
  <AnimatedSection className="py-24 px-6 bg-secondary/30" animation="fade-up">
    <div id="skills" className="container mx-auto max-w-5xl scroll-mt-24">
      <motion.h2
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold font-display mb-12 text-foreground"
      >
        Tech <span className="text-gradient">Stack</span>
      </motion.h2>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid sm:grid-cols-2 md:grid-cols-4 gap-6"
      >
        {skillGroups.map((group, gi) => {
          const Icon = categoryIcons[gi];
          return (
            <motion.div
              key={group.category}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-card rounded-xl p-6 border border-border"
            >
              <div className="flex items-center gap-3 mb-4">
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center"
                >
                  <Icon className="w-5 h-5 text-primary" />
                </motion.div>
                <h3 className="font-display font-semibold text-lg text-foreground">
                  {group.category}
                </h3>
              </div>
              <motion.div
                variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } } }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-wrap gap-2"
              >
                {group.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    variants={chipVariants}
                    whileHover={{ scale: 1.08 }}
                    className="px-3 py-1.5 text-sm rounded-full bg-secondary text-secondary-foreground font-medium cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  </AnimatedSection>
);

export default Skills;
