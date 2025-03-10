import { Icons } from "@/components/icons";

interface EducationItem {
  icon: string;
  title: string;
  description: string;
}

interface EducationSectionProps {
  title: string;
  subtitle: string;
  items: EducationItem[];
}

export function EducationSection({ title, subtitle, items }: EducationSectionProps) {
  return (
    <div className="industrial-container p-8 mb-16">
      <div className="flex flex-col items-center space-y-4 text-center mb-8">
        <div className="inline-block industrial-border px-4 py-1 mb-2">
          <span className="underground-text text-sm">FORMATION</span>
        </div>
        
        <h2 className="text-3xl font-bold tracking-tighter underground-gradient-text">{title}</h2>
        
        <p className="max-w-[700px] text-muted-foreground md:text-lg font-mono">
          {subtitle}
        </p>
      </div>

      <div className="space-y-6">
        {items.map((item, index) => (
          <EducationItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

function EducationItem({ item }: { item: EducationItem }) {
  const IconComponent = Icons[item.icon as keyof typeof Icons];
  
  return (
    <div className="flex items-center gap-4 p-3 rounded-sm hover:bg-primary/5 transition-colors duration-200 border-l border-primary/20 pl-4">
      <div className="industrial-border p-2">
        {IconComponent ? (
          <IconComponent className="h-5 w-5 text-primary" />
        ) : (
          <div className="h-5 w-5 text-primary flex items-center justify-center">•</div>
        )}
      </div>
      <div className="flex-1">
        <h3 className="font-bold underground-text">{item.title}</h3>
        <p className="text-muted-foreground font-mono">
          {item.description}
        </p>
      </div>
    </div>
  );
} 