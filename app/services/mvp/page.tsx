import { Metadata } from 'next';
import MVPHeader from '@/components/services/mvp/MVPHeader';
import MVPFeaturedProjects from '@/components/services/mvp/MVPFeaturedProjects';
import MVPProblemSolution from '@/components/services/mvp/MVPProblemSolution';
import MVPSalesProcess from '@/components/services/mvp/MVPSalesProcess';
import MVPFAQSection from '@/components/services/mvp/MVPFAQ';
import MVPFinalCTA from '@/components/services/mvp/MVPFinalCTA';
import { mvpData } from '@/Data/mvp-data';

export const metadata: Metadata = {
  title: 'MVP Full-Stack en 15 jours | Th1b4uut - Tech Services',
  description: 'Débloquez votre projet sans code, mais avec du code sur-mesure. NextJS, Expo, Flutter + IA. Design minimaliste, publication garantie sur les Stores. Prix fixe : 2000€.',
  keywords: 'MVP, développement rapide, full-stack, NextJS, Expo, Flutter, IA, application mobile, application web, développement sur mesure',
};

export default function MVPPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <MVPHeader data={mvpData} />
      
      {/* Featured Projects Carousel */}
      <MVPFeaturedProjects projects={mvpData.featuredProjects} />
      
      {/* Problem & Solution Section */}
      <MVPProblemSolution features={mvpData.features} />
      
      {/* Sales Process Section */}
      <MVPSalesProcess steps={mvpData.steps} />
      
      {/* FAQ Section */}
      <MVPFAQSection faqs={mvpData.faqs} />
      
      {/* Final CTA Section */}
      <MVPFinalCTA />
    </main>
  );
}
