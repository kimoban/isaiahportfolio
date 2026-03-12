import { Github, Linkedin, Mail } from "lucide-react";
import { socialLinks, ownerName } from "@/data/portfolio";
import XIcon from "./XIcon";

const MediumIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42S14.2 15.54 14.2 12s1.51-6.42 3.38-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
  </svg>
);

const Footer = () => (
  <footer className="py-8 px-6 border-t border-border">
    <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground font-body">
        © {new Date().getFullYear()} {ownerName}. All rights reserved.
      </p>
      <div className="flex gap-4">
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
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label={label}
          >
            <Icon size={18} />
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
