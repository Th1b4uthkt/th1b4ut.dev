import { Badge } from "@/components/ui/badge";

interface ProfileSectionProps {
  title: string;
  paragraphs: string[];
  skills: string[];
}

export function ProfileSection({ title, paragraphs, skills }: ProfileSectionProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-12 mb-16">
      <div>
        <h2 className="text-3xl font-bold mb-6">{title}</h2>
        <div className="space-y-4 text-muted-foreground md:text-lg">
          {paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 mt-8">
          {skills.map((skill) => (
            <Badge key={skill} variant="outline" className="px-3 py-1">
              {skill}
            </Badge>
          ))}
        </div>
      </div>
      
      <div className="flex items-center justify-center">
        <div className="relative w-64 h-64 rounded-full overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/10">
          {/* Remplacer par une vraie image */}
          <div className="absolute inset-0 flex items-center justify-center text-4xl font-mono text-muted-foreground">
            Th1b4ut
          </div>
        </div>
      </div>
    </div>
  );
} 