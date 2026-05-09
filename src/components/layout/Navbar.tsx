'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const links = [
  { name: 'Serviços', href: '/services' },
  { name: 'Projetos', href: '/projects' },
  { name: 'Sobre', href: '/about' },
  { name: 'Preços', href: '/pricing' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        'fixed top-0 left-0 z-[100] w-full px-6 py-4 transition-all duration-300',
        isScrolled
          ? 'border-clay/10 border-b bg-[#1a1512]/80 py-3 backdrop-blur-md'
          : 'bg-transparent',
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between">
        <Link
          href="/"
          className="font-display text-cream text-2xl font-bold tracking-tighter"
        >
          STUDIO<span className="text-clay">.IA</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sand/70 hover:text-cream font-mono text-xs tracking-widest uppercase transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="border-clay/30 text-cream hover:bg-clay/10 rounded-full border px-5 py-2 font-mono text-[10px] tracking-[0.2em] uppercase transition-all"
          >
            Contato
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="text-cream hover:text-clay block transition-colors md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="border-clay/10 absolute top-full left-0 w-full border-b bg-[#1a1512]/95 px-6 py-10 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col items-center gap-8">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sand/90 hover:text-cream font-mono text-sm tracking-widest uppercase transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="border-clay/30 text-cream hover:bg-clay/10 w-full rounded-full border py-4 text-center font-mono text-xs tracking-[0.2em] uppercase transition-all"
              >
                Contato
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
