import { FormEvent } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { socialLinks } from "@/data/portfolio";
import { toast } from "sonner";

const Contact = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("name")?.toString().trim() ?? "";
    const email = formData.get("email")?.toString().trim() ?? "";
    const message = formData.get("message")?.toString().trim() ?? "";

    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);

    window.location.href = `mailto:${socialLinks.email}?subject=${subject}&body=${body}`;
    toast.success("Opening your email app.");
    form.reset();
  };

  return (
    <AnimatedSection className="py-24 px-6">
      <div id="contact" className="container mx-auto max-w-2xl scroll-mt-24">
        <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 text-foreground">
          Get In <span className="text-gradient">Touch</span>
        </h2>
        <p className="text-muted-foreground mb-2 font-body">
          Have a startup idea, a business model or a corporate entity you want turned into a mobile app, a website or enhanced security for you? Have a project in mind or want to collaborate? Let's talk.
        </p>
        <p className="text-sm text-primary/80 italic mb-10 font-body">
          This form opens your default email app with your message prefilled.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid sm:grid-cols-2 gap-5">
            <input
              name="name"
              type="text"
              required
              placeholder="Your name"
              className="w-full px-4 py-3 rounded-lg bg-secondary text-foreground placeholder:text-muted-foreground border border-border focus:outline-none focus:ring-2 focus:ring-ring font-body"
            />
            <input
              name="email"
              type="email"
              required
              placeholder="Your email"
              className="w-full px-4 py-3 rounded-lg bg-secondary text-foreground placeholder:text-muted-foreground border border-border focus:outline-none focus:ring-2 focus:ring-ring font-body"
            />
          </div>
          <textarea
            name="message"
            required
            rows={5}
            placeholder="Your message"
            className="w-full px-4 py-3 rounded-lg bg-secondary text-foreground placeholder:text-muted-foreground border border-border focus:outline-none focus:ring-2 focus:ring-ring font-body resize-none"
          />
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium transition-opacity hover:opacity-90"
          >
            <Send size={18} />
            Compose Your Email
          </motion.button>
        </form>
      </div>
    </AnimatedSection>
  );
};

export default Contact;
