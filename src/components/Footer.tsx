import { Github, Linkedin, Mail } from "lucide-react";
import { socialLinks } from "@/data/portfolio";
import XIcon from "./XIcon";

const MediumIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42S14.2 15.54 14.2 12s1.51-6.42 3.38-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
  </svg>
);

const Footer = () => (
  <footer className="px-6 pb-10 pt-4">
    <div className="container mx-auto">
      <div className="relative overflow-hidden rounded-[2rem] border border-border/70 bg-[linear-gradient(135deg,hsl(var(--card)),hsl(var(--secondary)/0.92))] px-6 py-8 shadow-[0_24px_80px_-32px_hsl(var(--primary)/0.35)] sm:px-8">
        <div className="absolute -left-16 top-0 h-36 w-36 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -right-10 bottom-0 h-40 w-40 rounded-full bg-accent/10 blur-3xl" />
        <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary/80 mb-3">
              Built for Bold Ideas
            </p>
            <p className="text-base sm:text-lg font-medium text-foreground font-body">
              © {new Date().getFullYear()} Isaiah N-yilyal.
            </p>
            <p className="text-sm text-muted-foreground font-body mt-1">
              All rights reserved.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
        {[
          { icon: Github, href: socialLinks.github, label: "GitHub" },
          { icon: Linkedin, href: socialLinks.linkedin, label: "LinkedIn" },
          { icon: Mail, href: `mailto:${socialLinks.email}`, label: "Email" },
          { icon: XIcon, href: socialLinks.x, label: "X" },
          { icon: MediumIcon, href: socialLinks.medium, label: "Medium" },
        ].map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-border/80 bg-background/65 text-foreground shadow-[0_12px_30px_-18px_hsl(var(--foreground)/0.2)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-[linear-gradient(135deg,hsl(var(--primary)/0.14),hsl(var(--hero-gradient-end)/0.14),hsl(var(--accent)/0.12))] hover:text-primary"
            aria-label={label}
          >
            <Icon size={18} />
          </a>
        ))}
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
