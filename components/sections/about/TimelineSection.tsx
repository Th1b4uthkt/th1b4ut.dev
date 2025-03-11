interface TimelineItem {
  title: string;
  period: string;
  description: string;
}

interface TimelineSectionProps {
  title: string;
  items: TimelineItem[];
}

export function TimelineSection({ title, items }: TimelineSectionProps) {
  // Diviser les éléments en deux colonnes
  const midpoint = Math.ceil(items.length / 2);
  const leftItems = items.slice(0, midpoint);
  const rightItems = items.slice(midpoint);

  return (
    <div className="mb-16">
      <h2 className="text-3xl font-bold mb-8 text-center">{title}</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          {leftItems.map((item, index) => (
            <TimelineItem key={index} item={item} />
          ))}
        </div>

        <div className="space-y-6">
          {rightItems.map((item, index) => (
            <TimelineItem key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

function TimelineItem({ item }: { item: TimelineItem }) {
  return (
    <div className="relative pl-8 border-l pb-6">
      <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full bg-primary"></div>
      <h3 className="text-xl font-bold">{item.title}</h3>
      <p className="text-muted-foreground">{item.period}</p>
      <p className="mt-2">{item.description}</p>
    </div>
  );
} 