import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { socialLinks } from "@/data/portfolio";
import { toast } from "sonner";

type SubmitState = {
  tone: "success" | "error" | "info";
  message: string;
} | null;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState<SubmitState>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitState(null);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("name")?.toString().trim() ?? "";
    const email = formData.get("email")?.toString().trim() ?? "";
    const message = formData.get("message")?.toString().trim() ?? "";
    const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT?.trim();

    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);

    if (!name || !email || !message) {
      setSubmitState({
        tone: "error",
        message: "Please complete your name, email, and message before sending.",
      });
      toast.error("Please complete all fields before sending.");
      return;
    }

    if (!formspreeEndpoint) {
      setSubmitState({
        tone: "info",
        message: "Direct delivery is not configured yet, so your email app is opening instead.",
      });
      window.location.href = `mailto:${socialLinks.email}?subject=${subject}&body=${body}`;
      toast.success("Opening your email app.");
      return;
    }

    formData.set("subject", `Portfolio inquiry from ${name}`);

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

      setSubmitState({
        tone: "success",
        message: "Message sent successfully. Thank you, your note is now in my inbox.",
      });
      toast.success("Message sent successfully. I will receive it in my inbox.");
      form.reset();
    } catch {
      setSubmitState({
        tone: "error",
        message: "Direct delivery failed. Your email app is opening now so you can still send the message.",
      });
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
          Messages go straight to my inbox through a dependable contact flow, with email-app fallback only if delivery is temporarily unavailable.
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
          <div className="flex flex-col items-center gap-3 pt-1 text-center">
            <p className="text-sm font-semibold text-primary/85 font-body tracking-[0.18em] uppercase">Or</p>
            <motion.a
              href={socialLinks.calendly}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center rounded-lg border border-border bg-secondary px-6 py-3 text-secondary-foreground font-medium transition-colors hover:bg-muted"
            >
              Book a Consultation
            </motion.a>
          </div>
          <p
            className={[
              "min-h-6 text-sm font-body transition-colors",
              submitState?.tone === "success" && "text-emerald-400",
              submitState?.tone === "error" && "text-rose-400",
              submitState?.tone === "info" && "text-primary/85",
              !submitState && "text-transparent",
            ]
              .filter(Boolean)
              .join(" ")}
            role="status"
            aria-live="polite"
          >
            {submitState?.message ?? "Status messages appear here after you send the form."}
          </p>
        </form>
      </div>
    </AnimatedSection>
  );
};

export default Contact;
