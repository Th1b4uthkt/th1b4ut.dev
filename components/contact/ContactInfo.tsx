import { contactInfo } from "@/Data/contact-data";
import { Mail, Phone, MapPin } from "lucide-react";

export function ContactInfo() {
  return (
    <div>
      <div className="inline-block industrial-border px-4 py-1 mb-4">
        <span className="underground-text text-sm">COORDONNÉES</span>
      </div>
      
      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <div className="industrial-border p-2">
            <Mail className="h-4 w-4 text-primary" />
          </div>
          <div>
            <p className="font-medium underground-text">Email</p>
            <a 
              href={`mailto:${contactInfo.email}`} 
              className="text-muted-foreground hover:text-primary transition-colors font-mono"
            >
              {contactInfo.email}
            </a>
          </div>
        </div>
        
        <div className="flex items-start gap-3">
          <div className="industrial-border p-2">
            <Phone className="h-4 w-4 text-primary" />
          </div>
          <div>
            <p className="font-medium underground-text">Téléphone</p>
            <a 
              href={`tel:${contactInfo.phone}`} 
              className="text-muted-foreground hover:text-primary transition-colors font-mono"
            >
              {contactInfo.phone}
            </a>
          </div>
        </div>
        
        <div className="flex items-start gap-3">
          <div className="industrial-border p-2">
            <MapPin className="h-4 w-4 text-primary" />
          </div>
          <div>
            <p className="font-medium underground-text">Localisation</p>
            <p className="text-muted-foreground font-mono">
              {contactInfo.location}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 