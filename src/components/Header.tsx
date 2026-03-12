import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [activeHref, setActiveHref] = useState<string | null>(null);
  const [isTabTrackingEnabled, setIsTabTrackingEnabled] = useState(false);

  const resolveActiveHref = () => {
    const sections = navItems
      .map((item) => document.querySelector<HTMLElement>(item.href))
      .filter((section): section is HTMLElement => Boolean(section));

    if (!sections.length) {
      return null;
    }

    const probeOffset = 140;
    let currentHref = `#${sections[0].id}`;

    for (const section of sections) {
      if (section.getBoundingClientRect().top <= probeOffset) {
        currentHref = `#${section.id}`;
      } else {
        break;
      }
    }

    return currentHref;
  };

  const handleNavClick = (href: string, shouldCloseMenu = false) => {
    setIsTabTrackingEnabled(true);
    setActiveHref(href);

    if (shouldCloseMenu) {
      setOpen(false);
    }

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const resolvedHref = resolveActiveHref();
        if (resolvedHref) {
          setActiveHref(resolvedHref);
        }
      });
    });
  };

  useEffect(() => {
    if (!isTabTrackingEnabled) {
      return;
    }

    let frameId = 0;

    const updateActiveSection = () => {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(() => {
        const currentHref = resolveActiveHref();
        if (currentHref) {
          setActiveHref(currentHref);
        }
      });
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);
    window.addEventListener("hashchange", updateActiveSection);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
      window.removeEventListener("hashchange", updateActiveSection);
    };
  }, [isTabTrackingEnabled]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#"
          className="group relative inline-flex items-center rounded-full border border-primary/20 bg-card/80 px-4 py-2 shadow-[0_10px_30px_-18px_hsl(var(--primary)/0.8)] transition-transform duration-300 hover:-translate-y-0.5"
          aria-label="Go to top"
        >
          <span className="absolute inset-0 rounded-full bg-[linear-gradient(135deg,hsl(var(--primary)/0.18),hsl(var(--hero-gradient-end)/0.18),hsl(var(--accent)/0.16))] opacity-90" />
          <span className="relative font-display text-lg font-bold tracking-[0.28em] text-transparent bg-clip-text bg-[linear-gradient(135deg,hsl(var(--primary)),hsl(var(--hero-gradient-end)),hsl(var(--accent)))] drop-shadow-[0_0_18px_hsl(var(--primary)/0.2)]">
            IKN
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-3 rounded-full border border-border/70 bg-card/70 px-3 py-2 shadow-sm">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => handleNavClick(item.href)}
                aria-current={activeHref === item.href ? "page" : undefined}
                className={`inline-flex rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  activeHref === item.href
                    ? "bg-[linear-gradient(135deg,hsl(var(--primary)),hsl(var(--hero-gradient-end)))] text-primary-foreground shadow-[0_12px_24px_-16px_hsl(var(--primary)/0.8)]"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile nav */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <ul className="px-6 py-4 space-y-4">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => handleNavClick(item.href, true)}
                    aria-current={activeHref === item.href ? "page" : undefined}
                    className={`block rounded-xl px-4 py-3 font-medium transition-colors ${
                      activeHref === item.href
                        ? "bg-[linear-gradient(135deg,hsl(var(--primary)/0.14),hsl(var(--hero-gradient-end)/0.14))] text-foreground"
                        : "text-foreground hover:bg-secondary"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
