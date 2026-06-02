'use client';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';
import { fadeUp, viewport } from '@/lib/motion';
import Link from 'next/link';

export function CTASection() {
  return (
    <section className="container mx-auto px-6">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={fadeUp}
        className="bg-clay relative overflow-hidden rounded-[40px] px-8 py-16 text-center md:py-24"
      >
        {/* Decoração Retro de Fundo */}
        <div
          className="pointer-events-none absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FFE1AF' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <div className="relative z-10">
          <h2 className="font-display text-cream mb-8 text-xl leading-tight font-black md:text-6xl">
            Eleve seus objetivos com <br className="hidden md:block" />{' '}
            <span className="text-orange-400">Posicionamento online</span>
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-xl font-light text-sky-400">
            Técnologia + Experiência ={' '}
            <span className="border-b text-white">Resultados Reais</span>
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button
                variant="secondary"
                size="lg"
                className="bg-cream text-clay hover:bg-cream/90 border-none"
                icon={<ArrowRight size={18} />}
              >
                Iniciar um projeto agora
              </Button>
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
