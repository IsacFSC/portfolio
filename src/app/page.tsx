import { HeroSection } from '@/components/sections/HeroSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { TechStackSection } from '@/components/sections/TechStackSection';
import { DifferentialsSection } from '@/components/sections/DifferentialsSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { CTASection } from '@/components/sections/CTASection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <div className="relative space-y-32 pb-32">
        <ProjectsSection />
        <TechStackSection />
        <DifferentialsSection />
        <TestimonialsSection />
        <CTASection />
      </div>
    </>
  );
}
