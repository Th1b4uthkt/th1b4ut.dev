import Link from "next/link";
import { Button } from "@/components/ui/button";

interface CTAButton {
  text: string;
  href: string;
}

interface CTASectionProps {
  title: string;
  subtitle: string;
  primaryButton: CTAButton;
  secondaryButton?: CTAButton;
}

export function CTASection({ title, subtitle, primaryButton, secondaryButton }: CTASectionProps) {
  return (
    <div className="rounded-lg border bg-muted/50 p-8 text-center backdrop-blur-sm">
      <h2 className="text-3xl font-bold tracking-tighter mb-4">{title}</h2>
      <p className="max-w-[700px] mx-auto text-muted-foreground md:text-lg mb-6">
        {subtitle}
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button size="lg" asChild>
          <Link href={primaryButton.href}>{primaryButton.text}</Link>
        </Button>
        {secondaryButton && (
          <Button size="lg" variant="outline" asChild>
            <Link href={secondaryButton.href}>{secondaryButton.text}</Link>
          </Button>
        )}
      </div>
    </div>
  );
} 