import Image from 'next/image';
import { Testimonial } from '@/types';
import { AnimatedCard } from './AnimatedCard';
import { Quote } from 'lucide-react';

export function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: Testimonial;
  index: number;
}) {
  return (
    <AnimatedCard delay={index * 0.1} className="relative p-8">
      <Quote className="absolute top-8 right-8 h-8 w-8 text-white/5" />
      <div className="mb-6 flex items-center gap-4">
        <div className="relative h-12 w-12 overflow-hidden rounded-full border border-white/10">
          <Image
            src={testimonial.avatar}
            alt={testimonial.name}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h4 className="font-bold text-[#FFE1AF]">{testimonial.name}</h4>
          <p className="text-xs text-[#957C62]">{testimonial.role}</p>
        </div>
      </div>
      <p className="text-sm leading-relaxed text-[#E2B59A] italic">
        {testimonial.content}
      </p>
    </AnimatedCard>
  );
}
