'use client';

import { services } from '@/lib/constants';
import { ServiceCard } from '@/components/shared/ServiceCard';
import { SectionTitle } from '@/components/shared/SectionTitle';
import { motion } from 'framer-motion';
import { stagger } from '@/lib/motion';

export default function ServicesPage() {
  return (
    <main className="min-h-screen px-6 pt-32 pb-20">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Soluções"
          title="Serviços projetados para a nova era digital"
          subtitle="Combinamos estética retro-futurista com as tecnologias mais poderosas de automação e inteligência artificial."
          className="mb-20"
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </motion.div>
      </div>
    </main>
  );
}
