// components/layout/Footer.tsx
import Link from 'next/link';
import { Zap } from 'lucide-react';
import { BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs';

const navLinks = [
  { href: '/services', label: 'Serviços' },
  { href: '/projects', label: 'Projetos' },
  { href: '/about', label: 'Sobre' },
  { href: '/pricing', label: 'Preços' },
  { href: '/contact', label: 'Contato' },
];

const socials = [
  { href: 'https://github.com', icon: BsGithub, label: 'GitHub' },
  { href: 'https://linkedin.com', icon: BsLinkedin, label: 'LinkedIn' },
  { href: 'https://instagram.com', icon: BsInstagram, label: 'Instagram' },
];

export function Footer() {
  return (
    <footer className="border-t border-[rgba(183,116,102,0.12)] bg-[rgba(14,12,10,0.8)] px-6 py-14">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="font-display text-cream flex items-center gap-2 text-lg font-bold"
            >
              <Zap size={16} className="text-clay" />
              <span>
                Studio<span className="text-clay">.</span>
              </span>
            </Link>
            <p className="font-body mt-3 max-w-xs text-sm leading-relaxed text-white">
              Transformando negócios com design premium, automações inteligentes
              e presença digital de impacto.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="mb-4 font-mono text-[11px] font-bold tracking-[0.25em] text-white uppercase">
              Navegação
            </p>
            <ul className="space-y-2.5">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="font-body hover:text-cream text-sm text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social + contato */}
          <div>
            <p className="mb-4 font-mono text-[11px] font-bold tracking-[0.25em] text-white uppercase">
              Redes Sociais
            </p>
            <div className="flex gap-3">
              {socials.map(({ href, icon: Icon, label }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="hover:border-clay/40 hover:text-cream flex h-9 w-9 items-center justify-center rounded-lg border border-[rgba(183,116,102,0.2)] text-white transition-all"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-[rgba(183,116,102,0.1)] pt-6">
          <p className="font-mono text-[11px] text-white/60">
            © {new Date().getFullYear()} Studio. Todos os direitos reservados.
          </p>
          <p className="font-mono text-[11px] text-white/60">
            Feito com Next.js · Hospedado na Vercel
          </p>
        </div>
      </div>
    </footer>
  );
}
