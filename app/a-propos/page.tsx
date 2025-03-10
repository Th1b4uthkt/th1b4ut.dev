import { ProfileSection } from "@/components/sections/about/ProfileSection";
import { TimelineSection } from "@/components/sections/about/TimelineSection";
import { PhilosophySection } from "@/components/sections/about/PhilosophySection";
import { EducationSection } from "@/components/sections/about/EducationSection";
import { CTASection } from "@/components/sections/CTASection";
import { aboutData } from "./data";

export default function AboutPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden vinyl-texture studio-grid">
      {/* Background elements avec style underground */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background/90 z-[-1]"></div>
      
      {/* Séparateurs horizontaux style underground */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
      
      <main className="container py-12 md:py-16 lg:py-24 max-w-screen-xl mx-auto px-4 relative z-10">
        {/* Hero Section */}
        <div className="flex flex-col items-center space-y-4 text-center mb-12">
          <div className="inline-block industrial-border px-6 py-2 mb-4">
            <span className="underground-text text-lg">TH1B4UT</span>
          </div>
          
          <div className="vu-meter mx-auto w-1/2 max-w-[300px] my-4" style={{ "--level": "70%" } as React.CSSProperties}></div>
        </div>

        {/* Profile Section */}
        <div className="relative">
          <div className="absolute inset-0 waveform-bg z-[-1]"></div>
          <ProfileSection 
            title={aboutData.presentation.title}
            paragraphs={aboutData.presentation.paragraphs}
            skills={aboutData.presentation.skills}
          />
        </div>

        {/* Career Timeline */}
        <div className="relative vhs-effect">
          <TimelineSection 
            title={aboutData.career.title}
            items={aboutData.career.timeline}
          />
        </div>

        {/* Philosophy */}
        <div className="relative digital-noise">
          <PhilosophySection 
            title={aboutData.philosophy.title}
            values={aboutData.philosophy.values}
          />
        </div>

        {/* Education */}
        <EducationSection 
          title={aboutData.education.title}
          subtitle={aboutData.education.subtitle}
          items={aboutData.education.items}
        />

        {/* CTA */}
        <CTASection 
          title={aboutData.cta.title}
          subtitle={aboutData.cta.subtitle}
          primaryButton={aboutData.cta.primaryButton}
          secondaryButton={aboutData.cta.secondaryButton}
        />
      </main>
    </div>
  );
} 