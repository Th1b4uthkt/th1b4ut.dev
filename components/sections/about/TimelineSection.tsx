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
      <div className="inline-block industrial-border px-4 py-1 mb-4">
        <span className="underground-text text-sm">PARCOURS</span>
      </div>
      
      <h2 className="text-3xl font-bold mb-8 text-center underground-gradient-text">{title}</h2>
      
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
    <div className="relative pl-8 border-l border-primary/30 pb-6 industrial-glitch">
      <div className="absolute -left-1.5 mt-1.5 h-3 w-3 bg-primary industrial-border"></div>
      <h3 className="text-xl font-bold underground-text">{item.title}</h3>
      <p className="text-muted-foreground font-mono">{item.period}</p>
      <p className="mt-2 font-mono">{item.description}</p>
    </div>
  );
} 