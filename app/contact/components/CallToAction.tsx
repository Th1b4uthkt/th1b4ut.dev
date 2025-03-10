import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { callToActionInfo } from "../data/contact-data";
import { Video } from "lucide-react";

export function CallToAction() {
  return (
    <Card className="mt-8">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl flex items-center gap-2">
          <Video className="h-5 w-5" />
          {callToActionInfo.title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">
          {callToActionInfo.description}
        </p>
        <Button asChild>
          <a 
            href={callToActionInfo.url} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            {callToActionInfo.buttonText}
          </a>
        </Button>
      </CardContent>
    </Card>
  );
} 