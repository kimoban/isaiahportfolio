import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { socialLinks } from "@/data/portfolio";
import { toast } from "sonner";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("name")?.toString().trim() ?? "";
    const email = formData.get("email")?.toString().trim() ?? "";
    const message = formData.get("message")?.toString().trim() ?? "";
    const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT?.trim();

    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);

    if (!name || !email || !message) {
      toast.error("Please complete all fields before sending.");
      return;
    }

    if (!formspreeEndpoint) {
      window.location.href = `mailto:${socialLinks.email}?subject=${subject}&body=${body}`;
      toast.success("Opening your email app.");
      return;
    }

    formData.set("subject", `Portfolio inquiry from ${name}`);
    formData.set("_replyto", email);

    try {
      setIsSubmitting(true);

      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Form submission failed.");
      }

      toast.success("Message sent successfully. I will receive it in my inbox.");
      form.reset();
    } catch {
      window.location.href = `mailto:${socialLinks.email}?subject=${subject}&body=${body}`;
      toast.error("Direct send failed, so your email app is opening as a fallback.");
    } finally {
      setIsSubmitting(false);
    }
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
        <p className="font-bell text-sm text-primary/80 mb-10">
          Messages are sent straight to my inbox through a professional contact flow. If direct delivery is unavailable, your email app opens as a fallback.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid sm:grid-cols-2 gap-5">
            <input
              name="name"
              type="text"
              required
              placeholder="Your name"
              autoComplete="name"
              className="w-full px-4 py-3 rounded-lg bg-secondary text-foreground placeholder:text-muted-foreground border border-border focus:outline-none focus:ring-2 focus:ring-ring font-body"
            />
            <input
              name="email"
              type="email"
              required
              placeholder="Your email"
              autoComplete="email"
              className="w-full px-4 py-3 rounded-lg bg-secondary text-foreground placeholder:text-muted-foreground border border-border focus:outline-none focus:ring-2 focus:ring-ring font-body"
            />
          </div>
          <input
            name="_gotcha"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
            aria-hidden="true"
          />
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
            disabled={isSubmitting}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70"
          >
            <Send size={18} />
            {isSubmitting ? "Sending..." : "Send Message"}
          </motion.button>
        </form>
      </div>
    </AnimatedSection>
  );
};

export default Contact;
