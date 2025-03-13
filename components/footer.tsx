import Link from "next/link"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"

export function Footer() {
  // List of technologies/skills to showcase
  const technologies = [
    "React", "Next.js", "TypeScript", "TailwindCSS", "Node.js", 
    "Express", "MongoDB", "PostgreSQL", "AI"
  ]

  // Main services offered
  const services = [
    { name: "Développement Web", href: "/services#web" },
    { name: "Applications Full-Stack", href: "/services#fullstack" },
    { name: "Solutions IA", href: "/services#ai" },
    { name: "Consulting Tech", href: "/services#consulting" },
  ]

  // Quick links for navigation
  const quickLinks = [
    { name: "Accueil", href: "/" },
    { name: "À Propos", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <footer className="w-full border-t cyber-border bg-background py-6 studio-grid">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Column 1: About & Logo */}
          <div className="space-y-2">
            <div className="flex flex-col">
              <Link href="/" className="font-mono text-lg font-bold hover:text-gradient transition-colors neon-text">
                Th1b4ut
              </Link>
              <p className="text-xs text-muted-foreground mt-1 matrix-text">
                Développeur Web Full-Stack & Solutions IA
              </p>
            </div>
            <p className="text-xs text-muted-foreground">
              Solutions web modernes, réactives et performantes.
            </p>
            <div className="flex space-x-3 pt-1">
              <Link 
                href="https://github.com/Th1b4uthkt" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground/80 hover:text-primary transition-colors hover-lift"
                aria-label="GitHub"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="hover:shadow-neon transition-all duration-300"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </Link>
              <Link 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground/80 hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </Link>
              <Link 
                href="https://x.com/th1b4ut_dev" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground/80 hover:text-primary transition-colors"
                aria-label="Twitter/X"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-1-4.8 4-6.5 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Column 2: Services */}
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-gradient">Services</h3>
            <ul className="space-y-1">
              {services.map((service) => (
                <li key={service.href}>
                  <Link 
                    href={service.href} 
                    className="text-xs text-muted-foreground hover:text-primary transition-colors hover-lift inline-block"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-gradient">Navigation</h3>
            <ul className="space-y-1">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-xs text-muted-foreground hover:text-primary transition-colors hover-lift inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Technologies */}
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-gradient">Technologies</h3>
            <div className="flex flex-wrap gap-1">
              {technologies.map((tech) => (
                <Badge 
                  key={tech} 
                  variant="outline" 
                  className="text-[10px] border-primary/40 text-primary/80 hover:text-primary hover:border-primary transition-colors shadow-glow-accent"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Separator */}
        <Separator className="my-4 opacity-30" />

        {/* Bottom Footer */}
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Th1b4ut. Tous droits réservés.
          </p>
          <div className="flex items-center space-x-4 mt-2 sm:mt-0">
            <Link href="/privacy" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Politique de confidentialité
            </Link>
            <Link href="/terms" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Conditions d&apos;utilisation
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
} 