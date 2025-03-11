import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { faqItems } from "@/Data/contact-data";

export function FAQ() {
  return (
    <div className="underground-card p-6 md:p-8 rounded-sm">
      <div className="text-center pb-6">
        <div className="inline-block industrial-border px-4 py-1 mb-4">
          <span className="underground-text text-sm">FAQ</span>
        </div>
        <h2 className="text-2xl font-bold underground-gradient-text">Questions fréquentes</h2>
      </div>
      
      <Accordion type="single" collapsible className="w-full">
        {faqItems.map((item, index) => (
          <AccordionItem 
            key={index} 
            value={`item-${index}`}
            className="border-b border-primary/20 last:border-0"
          >
            <AccordionTrigger className="text-lg font-medium underground-text py-4">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground font-mono">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
} 