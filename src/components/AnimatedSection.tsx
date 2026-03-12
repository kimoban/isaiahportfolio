import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

type AnimationType = "fade-up" | "fade-left" | "fade-right" | "scale" | "blur";

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
  animation?: AnimationType;
}

const variants: Record<AnimationType, Variants> = {
  "fade-up": {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  },
  "fade-left": {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0 },
  },
  "fade-right": {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.85 },
    visible: { opacity: 1, scale: 1 },
  },
  blur: {
    hidden: { opacity: 0, filter: "blur(10px)", y: 20 },
    visible: { opacity: 1, filter: "blur(0px)", y: 0 },
  },
};

const AnimatedSection = ({ children, className = "", delay = 0, animation = "fade-up" }: Props) => (
  <motion.section
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    variants={variants[animation]}
    className={className}
  >
    {children}
  </motion.section>
);

export default AnimatedSection;
