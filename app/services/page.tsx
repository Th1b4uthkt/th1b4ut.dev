import { ServiceHeader } from './components/ServiceHeader';
import { ServicesList } from './components/ServicesList';
import { WorkProcess } from './components/WorkProcess';
import { Testimonials } from './components/Testimonials';
import { ServiceCTA } from './components/ServiceCTA';
import { ServiceBenefits } from './components/ServiceBenefits';

export default function ServicesPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden vinyl-texture studio-grid">
      {/* Background elements avec style underground */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background/90 z-[-1]"></div>
      
      {/* Séparateurs horizontaux style underground */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
      
      <div className="container mx-auto px-4 py-8 md:py-12 lg:py-20 relative z-10">
        <ServiceHeader />
        <div className="relative">
          <div className="absolute inset-0 waveform-bg z-[-1]"></div>
          <ServicesList />
        </div>
        <ServiceBenefits />
        <div className="relative vhs-effect">
          <WorkProcess />
        </div>
        <div className="relative">
          <div className="absolute inset-0 digital-noise z-[-1] opacity-20"></div>
          <Testimonials />
        </div>
        <ServiceCTA />
      </div>
    </div>
  );
} 