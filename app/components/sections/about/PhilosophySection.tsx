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
      <h2 className="text-3xl font-bold mb-8 text-center">{title}</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {values.map((value, index) => (
          <PhilosophyCard key={index} item={value} />
        ))}
      </div>
    </div>
  );
}

function PhilosophyCard({ item }: { item: PhilosophyItem }) {
  const IconComponent = Icons[item.icon as keyof typeof Icons];

  return (
    <div className="rounded-lg border p-6 bg-card hover:shadow-md transition-shadow duration-300">
      <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
        <IconComponent className="h-6 w-6 text-primary" />
      </div>
      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
      <p className="text-muted-foreground">
        {item.description}
      </p>
    </div>
  );
} 