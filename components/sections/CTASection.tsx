import Link from "next/link";
// import { Button } from "@/components/ui/button";

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
    <div className="underground-card p-8 text-center">
      <div className="inline-block industrial-border px-4 py-1 mb-4">
        <span className="underground-text text-sm">CONTACT</span>
      </div>
      
      <h2 className="text-3xl font-bold tracking-tighter mb-4 underground-gradient-text">{title}</h2>
      
      <p className="max-w-[700px] mx-auto text-muted-foreground md:text-lg mb-6 font-mono">
        {subtitle}
      </p>
      
      <div className="vu-meter mx-auto w-1/2 max-w-[300px] my-6" style={{ "--level": "85%" } as React.CSSProperties}></div>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link href={primaryButton.href} className="underground-button px-6 py-3 rounded-sm flex items-center justify-center">
          <span className="uppercase tracking-wider text-sm">{primaryButton.text}</span>
        </Link>
        
        {secondaryButton && (
          <Link href={secondaryButton.href} className="industrial-border px-6 py-3 rounded-sm flex items-center justify-center">
            <span className="terminal-underground text-sm">{secondaryButton.text}</span>
          </Link>
        )}
      </div>
    </div>
  );
} 