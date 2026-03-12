import { motion } from "framer-motion";
import { Globe, Database, Cloud, Shield } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { services } from "@/data/portfolio";

const icons = [Globe, Database, Cloud, Shield];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, rotateX: 8 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const Services = () => (
  <AnimatedSection className="py-24 px-6" animation="fade-up">
    <div id="services" className="container mx-auto max-w-4xl scroll-mt-24">
      <motion.h2
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold font-display mb-12 text-foreground"
      >
        My <span className="text-gradient">Services</span>
      </motion.h2>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid sm:grid-cols-2 gap-6"
      >
        {services.map((service, i) => {
          const Icon = icons[i];
          return (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-card rounded-xl p-6 border border-border card-hover group"
            >
              <motion.div
                whileHover={{ rotate: 10, scale: 1.1 }}
                className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors"
              >
                <Icon className="w-6 h-6 text-primary" />
              </motion.div>
              <h3 className="font-display text-lg font-semibold mb-2 text-foreground">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed font-body">
                {service.description}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  </AnimatedSection>
);

export default Services;
