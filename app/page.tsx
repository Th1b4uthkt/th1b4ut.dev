import { HeroSection } from "@/components/home/HeroSection";
import { TechnicalSkills } from "@/components/home/TechnicalSkills";
import { WhiteLabelProduction } from "@/components/home/WhiteLabelProduction";
import { AiDifferentiation } from "@/components/home/AiDifferentiation";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { ContactSection } from "@/components/home/ContactSection";
import { VoiceAISection } from "@/components/home/VoiceAISection";

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
