import { motion } from "framer-motion";
import { ArrowUpRight, Clock3 } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { articles } from "@/data/portfolio";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const Blog = () => (
  <AnimatedSection className="py-24 px-6" animation="fade-up">
    <div id="blog" className="container mx-auto max-w-5xl scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 text-foreground">
          Tech Article <span className="text-gradient">Series</span>
        </h2>
        <p className="max-w-2xl text-muted-foreground leading-relaxed font-body">
          Short, practical writing on software engineering, security thinking, and the systems work behind reliable digital products.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-6"
      >
        {articles.map((article) => (
          <motion.article
            key={article.id}
            variants={{
              hidden: { opacity: 0, y: 36, scale: 0.97 },
              visible: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
              },
            }}
            className="group rounded-2xl border border-border bg-card/90 p-7 card-hover"
          >
            <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground font-medium mb-5">
              <span>{article.published}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-primary/70" />
              <span className="inline-flex items-center gap-1.5">
                <Clock3 size={14} />
                {article.readTime}
              </span>
            </div>

            <h3 className="font-display text-2xl font-semibold mb-4 text-foreground leading-tight">
              {article.title}
            </h3>

            <p className="text-muted-foreground leading-relaxed font-body mb-6">
              {article.summary}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>

            <a
              href={article.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors group-hover:text-primary"
              aria-label={`Read article: ${article.title}`}
            >
              Read Article
              <ArrowUpRight size={16} />
            </a>
          </motion.article>
        ))}
      </motion.div>
    </div>
  </AnimatedSection>
);

export default Blog;