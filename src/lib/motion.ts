import { Variants } from 'framer-motion';

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.6, 
      ease: [0.22, 1, 0.36, 1] // O tipo Variants aqui já valida o array
    },
  },
};

export const stagger: Variants = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

export const viewport = {
  once: true,
  amount: 0.3,
};
