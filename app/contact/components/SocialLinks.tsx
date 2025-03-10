import { socialLinks } from "../data/contact-data";
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
      <h2 className="text-2xl font-bold mb-4">Réseaux sociaux</h2>
      <div className="flex gap-3">
        {socialLinks.map((link) => {
          const IconComponent = iconMap[link.icon as keyof typeof iconMap];
          return (
            <a 
              key={link.name}
              href={link.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-muted hover:bg-primary/10 transition-colors"
              aria-label={link.name}
            >
              <IconComponent className="h-5 w-5" />
            </a>
          );
        })}
      </div>
    </div>
  );
} 