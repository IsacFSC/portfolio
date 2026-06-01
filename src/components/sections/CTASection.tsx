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
          <h2 className="font-display text-cream mb-8 text-4xl leading-tight font-black md:text-6xl">
            Pronto para levar seu negócio <br className="hidden md:block" />{' '}
            para a era da inteligência?
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-xl font-light text-white">
            Traduzindo tecnologia em posicionamento online de alto impacto por onde eu passo.
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
