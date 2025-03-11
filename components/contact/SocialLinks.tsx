import { socialLinks } from "@/Data/contact-data";
import { Github, Linkedin, Twitter, Link } from "lucide-react";

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  malt: Link,
};

export function SocialLinks() {
  return (
    <div>
      <div className="inline-block industrial-border px-4 py-1 mb-4">
        <span className="underground-text text-sm">RÉSEAUX</span>
      </div>
      
      <div className="flex gap-3">
        {socialLinks.map((link) => {
          const IconComponent = iconMap[link.icon as keyof typeof iconMap];
          return (
            <a 
              key={link.name}
              href={link.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="industrial-border flex items-center justify-center w-10 h-10 hover:bg-primary/10 transition-colors"
              aria-label={link.name}
            >
              <IconComponent className="h-5 w-5 text-primary" />
            </a>
          );
        })}
      </div>
    </div>
  );
} 