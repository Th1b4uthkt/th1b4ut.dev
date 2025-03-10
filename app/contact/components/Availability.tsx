import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { availabilityInfo } from "../data/contact-data";
import { Calendar } from "lucide-react";

export function Availability() {
  return (
    <Card className="mt-8 bg-muted/50">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl flex items-center gap-2">
          <Calendar className="h-5 w-5" />
          Disponibilité
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">
          {availabilityInfo.message}
        </p>
        <Badge className="bg-green-500 hover:bg-green-600 text-white">
          Disponible pour missions
        </Badge>
      </CardContent>
    </Card>
  );
} 