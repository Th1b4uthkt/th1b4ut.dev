import { HeroSection } from "@/components/home/HeroSection";
import dynamic from 'next/dynamic';

// Lazy load components that are not immediately visible
const TechnicalSkills = dynamic(() => import("@/components/home/TechnicalSkills").then(mod => ({ default: mod.TechnicalSkills })), {
  loading: () => <div className="w-full h-80 flex items-center justify-center">Chargement...</div>
});

const WhiteLabelProduction = dynamic(() => import("@/components/home/WhiteLabelProduction").then(mod => ({ default: mod.WhiteLabelProduction })), {
  loading: () => <div className="w-full h-80 flex items-center justify-center">Chargement...</div>
});

const AiDifferentiation = dynamic(() => import("@/components/home/AiDifferentiation").then(mod => ({ default: mod.AiDifferentiation })), {
  loading: () => <div className="w-full h-80 flex items-center justify-center">Chargement...</div>
});

const TestimonialsSection = dynamic(() => import("@/components/home/TestimonialsSection").then(mod => ({ default: mod.TestimonialsSection })), {
  loading: () => <div className="w-full h-80 flex items-center justify-center">Chargement...</div>
});

const ContactSection = dynamic(() => import("@/components/home/ContactSection").then(mod => ({ default: mod.ContactSection })), {
  loading: () => <div className="w-full h-80 flex items-center justify-center">Chargement...</div>
});

const VoiceAISection = dynamic(() => import("@/components/home/VoiceAISection").then(mod => ({ default: mod.VoiceAISection })), {
  loading: () => <div className="w-full h-80 flex items-center justify-center">Chargement...</div>
});

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full min-h-screen overflow-x-hidden vinyl-texture studio-grid">
      <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background/90 z-[-1]"></div>
      <main className="w-full max-w-[2000px] mx-auto relative z-10">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/20 via-primary/60 to-primary/20"></div>
        <HeroSection />
        <div className="relative">
          <div className="absolute inset-0 waveform-bg z-[-1]"></div>
          <TechnicalSkills />
        </div>
        <WhiteLabelProduction />
        <div className="relative vhs-effect">
          <VoiceAISection />
        </div>
        <div className="relative">
          <div className="absolute inset-0 digital-noise z-[-1]"></div>
          <AiDifferentiation />
        </div>
        <TestimonialsSection />
        <ContactSection />
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary/20 via-primary/60 to-primary/20"></div>
      </main>
    </div>
  );
}
