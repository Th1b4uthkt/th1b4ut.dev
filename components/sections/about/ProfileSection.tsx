// import { Badge } from "@/components/ui/badge";

interface ProfileSectionProps {
  title: string;
  paragraphs: string[];
  skills: string[];
}

export function ProfileSection({ title, paragraphs, skills }: ProfileSectionProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-12 mb-16 mx-auto max-w-5xl">
      <div>
        <div className="inline-block industrial-border px-4 py-1 mb-4">
          <span className="underground-text text-sm">PRÉSENTATION</span>
        </div>
        
        <h2 className="text-3xl font-bold mb-6 underground-gradient-text">{title}</h2>
        
        <div className="space-y-4 text-muted-foreground md:text-lg font-mono">
          {paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 mt-8">
          {skills.map((skill) => (
            <div key={skill} className="industrial-border px-3 py-1">
              <span className="text-xs text-secondary font-mono">{skill}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex items-center justify-center">
        <div className="relative w-64 h-64 rounded-sm overflow-hidden industrial-border vhs-effect">
          {/* Remplacer par une vraie image */}
          <div className="absolute inset-0 flex items-center justify-center text-4xl underground-text">
            Th1b4ut
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
        </div>
      </div>
    </div>
  );
} 