'use client';
import { SVGProps, useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import logo from '../../../public/brand/brand.svg';
import Image from 'next/image';
import Link from 'next/link';

const links = [
  { name: 'Início', href: '/' },
  { name: 'Projetos', href: '/projects' },
  { name: 'Sobre', href: '/about' },
];

const breadcrumbMap: { [key: string]: string } = {
  '/': 'portfolio',
  '/projects': 'portfolio > projetos',
  '/about': 'portfolio > sobre',
  '/contact': 'portfolio > contato',
};

const GitHubIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1.01.07 1.55 1.04 1.55 1.04.9 1.55 2.36 1.10 2.93.84.09-.65.35-1.10.64-1.35-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.10-.25-.45-1.27.10-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 6.80c.85.00 1.71.11 2.51.32 1.90-1.28 2.74-1.02 2.74-1.02.55 1.38.20 2.40.10 2.65.64.70 1.03 1.59 1.03 2.68 0 3.85-2.34 4.70-4.57 4.95.36.31.69.92.69 1.85 0 1.33-.01 2.41-.01 2.74 0 .27.18.59.69.49A10.01 10.01 0 0022 12c0-5.52-4.48-10-10-10z"
      fill="currentColor"
    />
  </svg>
);

const LinkedInIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zm7.5 0h3.84v2.16h.05c.54-1.02 1.86-2.1 3.83-2.1 4.1 0 4.86 2.7 4.86 6.21V24h-4V14.3c0-2.32-.04-5.3-3.22-5.3-3.23 0-3.72 2.52-3.72 5.12V24h-4V8z"
      fill="currentColor"
    />
  </svg>
);

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const breadcrumb = breadcrumbMap[pathname] || 'portfolio';

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="border-border-light bg-surface-300/80 fixed top-0 left-0 z-100 border-b w-full backdrop-blur-md transition-all duration-300"
      >
        <nav className="mx-auto flex h-12 w-full items-center justify-between px-4 md:px-6">
          {/* Left: Breadcrumb */}
          <div className="hidden items-center gap-2 md:flex">
            {/* Center: Search (decorative for now) */}
            <Link
              href="/"
              className="relative mx-auto h-11 w-11 rounded-full border px-1"
              aria-label="Ir para início"
            >
              <Image
                src={logo}
                alt="Logo"
                fill
                className="h-10 w-10 rounded-full object-cover p-1"
              />
            </Link>
            <span className="text-secondary font-mono text-xs">
              {breadcrumb}
            </span>
          </div>

          {/* Mobile: Breadcrumb Compact */}
          <div className="flex items-center gap-1 md:hidden">
            {/* Center: Logo (mobile) */}
            <Link
              href="/"
              className="relative mx-auto h-8 w-8 rounded-full border px-1"
              aria-label="Ir para início"
            >
              <Image
                src={logo}
                alt="Logo"
                fill
                className="h-10 w-10 rounded-full object-cover p-1"
              />
            </Link>
            <span className="text-secondary truncate font-mono text-xs">
              {breadcrumb}
            </span>
          </div>

          {/* Right: Desktop Navigation */}
          <div className="hidden items-center gap-6 md:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-secondary hover:text-cyan-DEFAULT font-mono text-xs transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="text-primary rounded-xs border border-cyan-500/30 px-3 py-1.5 font-mono text-xs transition-all hover:border-cyan-500 hover:shadow-sm hover:shadow-cyan-500/20"
            >
              /contato
            </Link>
          </div>

          {/* Mobile: Menu Toggle */}
          <button
            className="text-primary hover:text-cyan-DEFAULT block transition-colors md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </nav>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="border-border-light bg-surface-300 border-t px-4 py-3 md:hidden"
            >
              <div className="flex flex-col gap-3">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-secondary hover:text-cyan-DEFAULT font-mono text-xs transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="text-primary rounded-xs border border-cyan-500/30 px-3 py-2 text-center font-mono text-xs transition-all hover:border-cyan-500 hover:shadow-sm hover:shadow-cyan-500/20"
                >
                  /contato
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Floating social sidebar for small screens */}
      <div className="fixed right-3 bottom-36 z-50 flex flex-col items-end gap-3 lg:bottom-16 lg:hidden">
        <a
          href="https://github.com/isacFSC"
          target="_blank"
          rel="noreferrer noopener"
          className="group bg-surface-300/90 flex items-center rounded-full border-2 border-cyan-500/20 p-3 shadow-lg shadow-black/20 transition-transform duration-300 hover:-translate-y-1 hover:border-cyan-400"
        >
          <GitHubIcon className="text-cyan-DEFAULT h-4 w-4 lg:h-6 lg:w-6" />
          <span className="text-primary font-mono text-xs"></span>
        </a>
        <a
          href="https://www.linkedin.com/in/isac-freitas-502a42289"
          target="_blank"
          rel="noreferrer noopener"
          className="group bg-surface-300/90 flex items-center rounded-full border-2 border-cyan-500/20 p-3 shadow-lg shadow-black/20 transition-transform duration-300 hover:-translate-y-1 hover:border-cyan-400"
        >
          <LinkedInIcon className="text-cyan-DEFAULT h-4 w-4 lg:h-6 lg:w-6" />
          <span className="text-primary font-mono text-xs"></span>
        </a>
      </div>
    </>
  );
}
