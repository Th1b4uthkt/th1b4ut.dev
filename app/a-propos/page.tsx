import { SectionHeader } from "@/components/sections/SectionHeader";
import { ProfileSection } from "@/components/sections/about/ProfileSection";
import { TimelineSection } from "@/components/sections/about/TimelineSection";
import { PhilosophySection } from "@/components/sections/about/PhilosophySection";
import { EducationSection } from "@/components/sections/about/EducationSection";
import { CTASection } from "@/components/sections/CTASection";
import { aboutData } from "./data";

export default function AboutPage() {
  return (
    <main className="container py-12 md:py-16 lg:py-24 max-w-screen-xl mx-auto px-4">
      {/* Hero Section */}
      <div className="flex flex-col items-center space-y-4 text-center mb-12">
        <SectionHeader 
          title={aboutData.hero.title} 
          subtitle={aboutData.hero.subtitle} 
          centered 
        />
      </div>

      {/* Profile Section */}
      <ProfileSection 
        title={aboutData.presentation.title}
        paragraphs={aboutData.presentation.paragraphs}
        skills={aboutData.presentation.skills}
      />

      {/* Career Timeline */}
      <TimelineSection 
        title={aboutData.career.title}
        items={aboutData.career.timeline}
      />

      {/* Philosophy */}
      <PhilosophySection 
        title={aboutData.philosophy.title}
        values={aboutData.philosophy.values}
      />

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
  );
} 