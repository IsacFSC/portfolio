'use client';
import { services } from '@/lib/constants';
import { ServiceCard } from '../shared/ServiceCard';
import { SectionTitle } from '../shared/SectionTitle';

export function ServicesSection() {
  return (
    <section id="services" className="container mx-auto px-6">
      <SectionTitle
        eyebrow="Especialidades"
        title="Soluções Digitais sob medida"
        subtitle="Combinamos tecnologia de ponta com design atemporal para criar experiências que convertem."
        center
        className="mb-16"
      />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => (
          <ServiceCard key={service.title} service={service} index={index} />
        ))}
      </div>
    </section>
  );
}
