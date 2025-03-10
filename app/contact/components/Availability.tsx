import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { availabilityInfo } from "../data/contact-data";
import { Calendar } from "lucide-react";

export function Availability() {
  return (
    <div className="underground-card p-6 rounded-sm">
      <div className="flex items-center gap-2 mb-3">
        <div className="industrial-border p-2">
          <Calendar className="h-5 w-5 text-primary" />
        </div>
        <h3 className="text-xl font-bold underground-text">Disponibilité</h3>
      </div>
      
      <p className="text-muted-foreground mb-4 font-mono">
        {availabilityInfo.message}
      </p>
      
      <div className="industrial-border px-3 py-1 w-fit bg-primary/10">
        <span className="text-secondary text-xs font-mono">Disponible pour missions</span>
      </div>
    </div>
  );
} 