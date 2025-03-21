interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export function SectionHeader({ title, subtitle, centered = false }: SectionHeaderProps) {
  return (
    <div className={`flex flex-col space-y-4 ${centered ? 'items-center text-center' : ''} mb-8`}>
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">{title}</h2>
      {subtitle && (
        <p className="max-w-[700px] text-muted-foreground md:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
} 