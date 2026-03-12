import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { bio } from "@/data/portfolio";

const About = () => (
  <AnimatedSection className="py-24 px-6" animation="blur">
    <div id="about" className="container mx-auto max-w-3xl scroll-mt-24">
      <motion.h2
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold font-display mb-8 text-foreground"
      >
        About <span className="text-gradient">Me</span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-muted-foreground leading-relaxed text-lg font-body"
      >
        {bio}
      </motion.p>
    </div>
  </AnimatedSection>
);

export default About;
