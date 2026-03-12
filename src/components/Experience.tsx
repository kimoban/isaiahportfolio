import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { experience } from "@/data/portfolio";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
};

const Experience = () => (
  <AnimatedSection className="py-24 px-6 bg-secondary/30" animation="fade-left">
    <div id="experience" className="container mx-auto max-w-5xl scroll-mt-24">
      <motion.h2
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold font-display mb-12 text-foreground"
      >
        Learning <span className="text-gradient">Journey</span>
      </motion.h2>
      <motion.ul
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="space-y-4"
      >
        {experience.map((item, i) => (
          <motion.li
            key={i}
            variants={itemVariants}
            whileHover={{ x: 6, transition: { duration: 0.2 } }}
            className="flex items-start gap-3 cursor-default"
          >
            <motion.span
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 + 0.2, type: "spring", stiffness: 300 }}
              className="mt-2 w-2 h-2 rounded-full bg-primary flex-shrink-0"
            />
            <span className="text-muted-foreground font-body">{item}</span>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  </AnimatedSection>
);

export default Experience;
