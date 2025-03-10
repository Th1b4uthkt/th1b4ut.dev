import { Icons } from "@/components/icons";

interface PhilosophyItem {
  icon: string;
  title: string;
  description: string;
}

interface PhilosophySectionProps {
  title: string;
  values: PhilosophyItem[];
}

export function PhilosophySection({ title, values }: PhilosophySectionProps) {
  return (
    <div className="mb-16">
      <div className="inline-block industrial-border px-4 py-1 mb-4">
        <span className="underground-text text-sm">PHILOSOPHIE</span>
      </div>
      
      <h2 className="text-3xl font-bold mb-8 text-center underground-gradient-text">{title}</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {values.map((value, index) => (
          <PhilosophyCard key={index} item={value} />
        ))}
      </div>
    </div>
  );
}

function PhilosophyCard({ item }: { item: PhilosophyItem }) {
  // Vérifier si l'icône existe dans le composant Icons
  const IconComponent = Icons[item.icon as keyof typeof Icons];
  
  return (
    <div className="underground-card p-6 rounded-sm vhs-effect">
      <div className="industrial-border p-3 w-12 h-12 flex items-center justify-center mb-4">
        {IconComponent ? (
          <IconComponent className="h-6 w-6 text-primary" />
        ) : (
          // Fallback pour quand l'icône n'existe pas - utiliser une div ou une autre icône par défaut
          <div className="h-6 w-6 text-primary flex items-center justify-center">•</div>
        )}
      </div>
      <h3 className="text-xl font-bold mb-2 underground-text">{item.title}</h3>
      <p className="text-muted-foreground font-mono">
        {item.description}
      </p>
    </div>
  );
} 