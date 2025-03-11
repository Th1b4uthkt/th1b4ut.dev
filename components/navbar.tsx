"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { AnimatePresence, motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
  SheetFooter,
} from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"

// Navigation avec icônes et descriptions courtes
const navigation = [
  { 
    name: "Accueil", 
    href: "/", 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
    description: "Découvrir mon travail"
  },
  { 
    name: "Projets", 
    href: "/projets", 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
        <rect width="8" height="8" x="2" y="2" rx="1"/>
        <rect width="8" height="8" x="14" y="2" rx="1"/>
        <rect width="8" height="8" x="2" y="14" rx="1"/>
        <rect width="8" height="8" x="14" y="14" rx="1"/>
      </svg>
    ),
    description: "Portfolio de réalisations",
    badge: "Nouveau" 
  },
  { 
    name: "Services", 
    href: "/services",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/>
      </svg>
    ),
    description: "Ce que je peux vous offrir",
    submenu: [
      { name: "Ghost Production", href: "/services#ghost" },
      { name: "MVP Full-Stack", href: "/services/mvp", badge: "Nouveau" },
      { name: "White Label", href: "/services/white-label", badge: "Bientôt" },
      { name: "Solutions IA", href: "/services#ai" },
      { name: "Consulting Tech", href: "/services#consulting" },
    ]
  },
  { 
    name: "Blog", 
    href: "/blog", 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
        <path d="M4 6h16"/>
        <path d="M4 12h16"/>
        <path d="M4 18h12"/>
      </svg>
    ),
    description: "Articles tech et conseils",
    badge: "4 nouveaux"
  },
  { 
    name: "À propos", 
    href: "/a-propos", 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
        <circle cx="12" cy="12" r="10"/>
        <circle cx="12" cy="10" r="3"/>
        <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"/>
      </svg>
    ),
    description: "Mon parcours professionnel"
  },
  { 
    name: "Contact", 
    href: "/contact", 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
    description: "Discutons de votre projet"
  },
]

// Infos de contact rapide pour le menu mobile
const contactInfo = {
  email: "contact@th1b4ut.dev",
  phone: "+33 6 XX XX XX XX",
  location: "Paris, France",
  availability: "Disponible pour nouveaux projets"
}

// Technologies pour le footer du menu mobile
const technologies = [
  "React", "Next.js", "TypeScript", "TailwindCSS", "Node.js", 
  "Express", "MongoDB", "PostgreSQL", "AI"
]

export function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = React.useState(false)
  const [activeItem, setActiveItem] = React.useState<string | null>(null)
  const [showServicesSubmenu, setShowServicesSubmenu] = React.useState(false)
  const submenuTimeoutRef = React.useRef<NodeJS.Timeout | undefined>(undefined)

  // Handle scroll effect
  React.useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      if (offset > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Set active item based on pathname when component mounts or pathname changes
  React.useEffect(() => {
    const currentPath = navigation.find((item) => {
      if (pathname === item.href) return true;
      if (item.submenu && item.submenu.find((subItem) => pathname === subItem.href)) return true;
      return pathname.startsWith(item.href) && item.href !== "/";
    });

    if (currentPath) {
      setActiveItem(currentPath.href)
    } else {
      setActiveItem(null)
    }
  }, [pathname])

  // Toggle submenu for services with delay
  const handleServicesHover = (show: boolean) => {
    if (submenuTimeoutRef.current) {
      clearTimeout(submenuTimeoutRef.current)
    }
    
    if (!show) {
      submenuTimeoutRef.current = setTimeout(() => {
        setShowServicesSubmenu(false)
      }, 100) // Petit délai avant de fermer
    } else {
      setShowServicesSubmenu(true)
    }
  }

  return (
    <motion.header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300 ease-in-out",
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b cyber-border shadow-cyber"
          : "bg-background/60 backdrop-blur-sm"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container px-0 sm:px-4">
        {/* Structure modifiée pour un meilleur alignement sur mobile et desktop */}
        <div className="h-16 flex items-center justify-between">
          {/* Logo (à gauche) */}
          <motion.div 
            className="flex items-center pl-4 sm:pl-0"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link href="/" className="group flex items-center">
              <span className="font-mono text-xl font-bold relative neon-text">
                Th1b4ut
                <motion.span 
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full animate-pulse-subtle" 
                  transition={{ duration: 0.2 }}
                  initial={false}
                  animate={{ width: activeItem === "/" ? "100%" : "0%" }}
                  whileHover={{ width: "100%" }}
                />
              </span>
            </Link>
          </motion.div>
          
          {/* Navigation (centrée) - Visible uniquement sur desktop */}
          <nav className="hidden md:flex items-center justify-center gap-6 lg:gap-8">
            {navigation.map((item) => (
              <div 
                key={item.href} 
                className="relative group"
                onMouseEnter={() => {
                  setActiveItem(item.href);
                  if (item.href === "/services") handleServicesHover(true);
                }}
                onMouseLeave={() => {
                  setActiveItem(pathname === item.href ? item.href : null);
                  if (item.href === "/services") handleServicesHover(false);
                }}
              >
                <Link
                  href={item.href}
                  className="group relative flex items-center py-1 hover-lift"
                >
                  {item.icon}
                  <span className={cn(
                    "text-sm font-medium transition-colors",
                    pathname === item.href || 
                    (pathname.startsWith(item.href) && item.href !== "/") 
                      ? "text-gradient" 
                      : "text-foreground/60 hover:text-foreground/80"
                  )}>
                    {item.name}
                  </span>
                  {item.badge && (
                    <Badge variant="outline" className="ml-2 py-0 h-5 text-[10px] border-primary text-primary shadow-glow">
                      {item.badge}
                    </Badge>
                  )}
                  {item.submenu && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1 transition-transform duration-200 group-hover:rotate-180">
                      <path d="m6 9 6 6 6-6"/>
                    </svg>
                  )}
                  <motion.span 
                    className="absolute -bottom-1 left-0 h-0.5 bg-primary shadow-neon"
                    initial={{ width: "0%" }}
                    animate={{ 
                      width: activeItem === item.href || 
                              (pathname.startsWith(item.href) && item.href !== "/") 
                                ? "100%" : "0%" 
                    }}
                    transition={{ duration: 0.2 }}
                  />
                </Link>

                {/* Services Dropdown for desktop */}
                {item.submenu && (
                  <AnimatePresence>
                    {showServicesSubmenu && (
                      <motion.div 
                        className="absolute left-0 mt-1 w-56 z-50"
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        transition={{ duration: 0.2 }}
                        onMouseEnter={() => handleServicesHover(true)}
                        onMouseLeave={() => handleServicesHover(false)}
                      >
                        <div className="py-2 rounded-md shadow-cyber-card glass-card border-primary/20 border">
                          {item.submenu.map((subItem) => (
                            <Link 
                              key={subItem.href} 
                              href={subItem.href}
                              className="block px-4 py-2 text-sm hover:bg-accent/50 text-foreground/80 hover:text-gradient transition-all duration-200"
                            >
                              <div className="flex items-center justify-between">
                                <span>{subItem.name}</span>
                                {subItem.badge && (
                                  <Badge variant="outline" className="ml-2 py-0 h-5 text-[10px] border-primary text-primary">
                                    {subItem.badge}
                                  </Badge>
                                )}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>
          
          {/* Right-side actions - Alignés complètement à droite */}
          <div className="flex items-center gap-3 pr-4 sm:pr-0">
            {/* Status Badge - Visible uniquement sur grands écrans */}
            <Badge variant="outline" className="hidden lg:flex items-center border-green-500 text-green-500 bg-green-500/10 text-xs whitespace-nowrap max-w-[180px] overflow-hidden">
              <span className="mr-1 h-1.5 w-1.5 rounded-full bg-green-500"></span>
              <span className="truncate">{contactInfo.availability}</span>
            </Badge>
            
            <ThemeToggle />
            
            {/* Desktop CTA - Visible uniquement sur desktop */}
            <motion.div 
              className="hidden md:block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="relative overflow-hidden group" asChild>
                <Link href="/contact">
                  <span className="relative z-10 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                      <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z"/>
                      <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"/>
                    </svg>
                    Contactez-moi
                  </span>
                  <span className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-all duration-300 rounded-md blur-md" />
                </Link>
              </Button>
            </motion.div>
            
            {/* Mobile menu - Aligné à droite */}
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="md:hidden"
                  aria-label="Menu"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <line x1="4" x2="20" y1="12" y2="12" />
                    <line x1="4" x2="20" y1="6" y2="6" />
                    <line x1="4" x2="20" y1="18" y2="18" />
                  </svg>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[85vw] sm:w-[400px] overflow-y-auto pr-0 flex flex-col">
                <SheetHeader className="mb-6 text-left">
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-primary">
                      <circle cx="12" cy="12" r="10"/>
                      <circle cx="12" cy="10" r="3"/>
                      <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"/>
                    </svg>
                    <SheetTitle className="font-mono text-xl">Th1b4ut</SheetTitle>
                  </div>
                  <p className="text-muted-foreground text-sm mt-1 pl-8">Développeur Web Full-Stack & Solutions IA</p>
                </SheetHeader>
                
                {/* Availability status card */}
                <div className="mx-4 mb-6 p-3 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center">
                  <div className="mr-3 h-3 w-3 rounded-full bg-green-500 animate-pulse"></div>
                  <div>
                    <p className="text-green-600 dark:text-green-400 font-medium text-sm">{contactInfo.availability}</p>
                    <p className="text-muted-foreground text-xs mt-0.5">Réponse rapide garantie</p>
                  </div>
                </div>
                
                {/* Navigation menu */}
                <div className="flex-1 overflow-y-auto pr-6">
                  <div className="space-y-1">
                    {navigation.map((item) => (
                      <React.Fragment key={item.href}>
                        <SheetClose asChild>
                          <Link
                            href={item.href}
                            className={cn(
                              "flex items-center justify-between p-3 rounded-lg transition-all",
                              pathname === item.href || (pathname.startsWith(item.href) && item.href !== "/")
                                ? "bg-accent text-accent-foreground"
                                : "hover:bg-accent/50"
                            )}
                          >
                            <div className="flex items-center">
                              <div className="mr-3 p-2 rounded-md bg-background">
                                {item.icon}
                              </div>
                              <div>
                                <p className="font-medium">{item.name}</p>
                                <p className="text-xs text-muted-foreground mt-0.5">{item.description}</p>
                              </div>
                            </div>
                            {item.badge && (
                              <Badge variant="outline" className="ml-2 py-0.5 border-primary text-primary text-[10px]">
                                {item.badge}
                              </Badge>
                            )}
                          </Link>
                        </SheetClose>
                        
                        {/* Display submenu items for services */}
                        {item.submenu && item.href === "/services" && (
                          <div className="ml-12 pl-4 border-l border-muted my-2 space-y-1">
                            {item.submenu.map((subItem) => (
                              <SheetClose key={subItem.href} asChild>
                                <Link
                                  href={subItem.href}
                                  className={cn(
                                    "flex items-center justify-between py-2 px-3 rounded-md text-sm hover:bg-accent/50",
                                    pathname === subItem.href
                                      ? "text-primary font-medium"
                                      : "text-muted-foreground"
                                  )}
                                >
                                  <span>{subItem.name}</span>
                                  {subItem.badge && (
                                    <Badge variant="outline" className="ml-2 py-0 h-5 text-[10px] border-primary text-primary">
                                      {subItem.badge}
                                    </Badge>
                                  )}
                                </Link>
                              </SheetClose>
                            ))}
                          </div>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                  
                  {/* Contact section */}
                  <div className="mt-8 space-y-3">
                    <h3 className="font-medium text-sm px-4">Contact Rapide</h3>
                    <div className="px-3 space-y-1">
                      <div className="flex items-center text-sm p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3 text-muted-foreground">
                          <rect width="20" height="16" x="2" y="4" rx="2"/>
                          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                        </svg>
                        <a href={`mailto:${contactInfo.email}`} className="text-muted-foreground hover:text-foreground transition-colors">
                          {contactInfo.email}
                        </a>
                      </div>
                      <div className="flex items-center text-sm p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3 text-muted-foreground">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                        </svg>
                        <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} className="text-muted-foreground hover:text-foreground transition-colors">
                          {contactInfo.phone}
                        </a>
                      </div>
                      <div className="flex items-center text-sm p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3 text-muted-foreground">
                          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                          <circle cx="12" cy="10" r="3"/>
                        </svg>
                        <span className="text-muted-foreground">
                          {contactInfo.location}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Technologies section */}
                  <div className="mt-6 px-4">
                    <h3 className="font-medium text-sm mb-3">Technologies</h3>
                    <div className="flex flex-wrap gap-1.5">
                      {technologies.map((tech) => (
                        <Badge 
                          key={tech} 
                          variant="secondary"
                          className="text-[10px] py-0 px-2 h-5"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Mobile Footer with Action Button */}
                <SheetFooter className="mt-6 pt-4 border-t flex flex-col">
                  <div className="flex justify-center space-x-4 mb-4">
                    <Link 
                      href="https://github.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-accent text-foreground/80 hover:text-primary transition-colors"
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
                      >
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                        <path d="M9 18c-4.51 2-5-2-7-2" />
                      </svg>
                    </Link>
                    <Link 
                      href="https://linkedin.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-accent text-foreground/80 hover:text-primary transition-colors"
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
                      href="https://twitter.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-accent text-foreground/80 hover:text-primary transition-colors"
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
                  <SheetClose asChild>
                    <Button className="w-full" asChild>
                      <Link href="/contact" className="flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                          <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z"/>
                          <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"/>
                        </svg>
                        Contactez-moi
                      </Link>
                    </Button>
                  </SheetClose>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  )
} 