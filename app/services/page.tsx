import { ServiceHeader } from './components/ServiceHeader';
import { ServicesList } from './components/ServicesList';
import { WorkProcess } from './components/WorkProcess';
import { Testimonials } from './components/Testimonials';
import { ServiceCTA } from './components/ServiceCTA';
import { ServiceBenefits } from './components/ServiceBenefits';

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12 lg:py-20">
      <ServiceHeader />
      <ServicesList />
      <ServiceBenefits />
      <WorkProcess />
      <Testimonials />
      <ServiceCTA />
    </div>
  );
} 