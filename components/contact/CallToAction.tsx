import { callToActionInfo } from "@/Data/contact-data";
import { Video } from "lucide-react";

export function CallToAction() {
  return (
    <div className="underground-card p-6 rounded-sm">
      <div className="flex items-center gap-2 mb-3">
        <div className="industrial-border p-2">
          <Video className="h-5 w-5 text-primary" />
        </div>
        <h3 className="text-xl font-bold underground-text">{callToActionInfo.title}</h3>
      </div>
      
      <p className="text-muted-foreground mb-6 font-mono">
        {callToActionInfo.description}
      </p>
      
      <div className="vu-meter mx-auto w-full max-w-[300px] my-6" style={{ "--level": "85%" } as React.CSSProperties}></div>
      
      <a 
        href={callToActionInfo.url} 
        target="_blank" 
        rel="noopener noreferrer"
        className="underground-button w-full py-3 rounded-sm flex items-center justify-center"
      >
        <span className="uppercase tracking-wider text-sm">{callToActionInfo.buttonText}</span>
      </a>
    </div>
  );
} 