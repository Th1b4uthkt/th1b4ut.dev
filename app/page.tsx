import { HeroSection } from "@/components/home/HeroSection";
import { TechnicalSkills } from "@/components/home/TechnicalSkills";
import { WhiteLabelProduction } from "@/components/home/WhiteLabelProduction";
import { AiDifferentiation } from "@/components/home/AiDifferentiation";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { ContactSection } from "@/components/home/ContactSection";
import { VoiceAISection } from "@/components/home/VoiceAISection";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full min-h-screen overflow-x-hidden">
      <main className="w-full max-w-[2000px] mx-auto">
        <HeroSection />
        <TechnicalSkills />
        <WhiteLabelProduction />
        <VoiceAISection />
        <AiDifferentiation />
        <TestimonialsSection />
        <ContactSection />
      </main>
    </div>
  );
}
