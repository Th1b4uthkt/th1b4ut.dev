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
    <div className="rounded-lg border bg-card p-8 mb-16 backdrop-blur-sm">
      <div className="flex flex-col items-center space-y-4 text-center mb-8">
        <h2 className="text-3xl font-bold tracking-tighter">{title}</h2>
        <p className="max-w-[700px] text-muted-foreground md:text-lg">
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
    <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors duration-200">
      <div className="bg-primary/10 p-2 rounded-full">
        {IconComponent ? (
          <IconComponent className="h-5 w-5 text-primary" />
        ) : (
          <div className="h-5 w-5 text-primary flex items-center justify-center">•</div>
        )}
      </div>
      <div className="flex-1">
        <h3 className="font-bold">{item.title}</h3>
        <p className="text-muted-foreground">
          {item.description}
        </p>
      </div>
    </div>
  );
} 