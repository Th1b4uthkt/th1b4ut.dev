import { contactInfo } from "../data/contact-data";
import { Mail, Phone, MapPin } from "lucide-react";

export function ContactInfo() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Coordonnées</h2>
      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <div className="bg-primary/10 p-2 rounded-full mt-0.5">
            <Mail className="h-4 w-4 text-primary" />
          </div>
          <div>
            <p className="font-medium">Email</p>
            <a 
              href={`mailto:${contactInfo.email}`} 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              {contactInfo.email}
            </a>
          </div>
        </div>
        
        <div className="flex items-start gap-3">
          <div className="bg-primary/10 p-2 rounded-full mt-0.5">
            <Phone className="h-4 w-4 text-primary" />
          </div>
          <div>
            <p className="font-medium">Téléphone</p>
            <a 
              href={`tel:${contactInfo.phone}`} 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              {contactInfo.phone}
            </a>
          </div>
        </div>
        
        <div className="flex items-start gap-3">
          <div className="bg-primary/10 p-2 rounded-full mt-0.5">
            <MapPin className="h-4 w-4 text-primary" />
          </div>
          <div>
            <p className="font-medium">Localisation</p>
            <p className="text-muted-foreground">
              {contactInfo.location}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 