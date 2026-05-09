import { HeroSection } from '@/components/sections/HeroSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { AutomationSection } from '@/components/sections/AutomationSection';
import { TechStackSection } from '@/components/sections/TechStackSection';
import { DifferentialsSection } from '@/components/sections/DifferentialsSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { CTASection } from '@/components/sections/CTASection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <div className="relative space-y-32 pb-32">
        <ServicesSection />
        <ProjectsSection />
        <AutomationSection />
        <TechStackSection />
        <DifferentialsSection />
        <TestimonialsSection />
        <CTASection />
      </div>
    </>
  );
}
