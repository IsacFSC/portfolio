'use client';
import Link from 'next/link';
import { Briefcase, User, ArrowUp } from 'lucide-react';

export function MobileBottomNav() {
  return (
    <nav
      className="fixed right-0 bottom-0 left-0 z-50 border-t border-slate-800 bg-slate-950/80 p-3 backdrop-blur-md md:hidden"
      aria-label="Navegação móvel inferior"
    >
      <ul className="flex items-center justify-around">
        <li className="flex-1">
          <Link
            href="/projects"
            className="flex flex-col items-center justify-center gap-1 text-xs font-medium text-slate-400 transition-colors hover:text-cyan-400 active:text-cyan-500"
          >
            <Briefcase className="h-5 w-5" />
            <span>Projetos</span>
          </Link>
        </li>

        <li className="flex-1">
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Voltar ao topo"
            className="mx-auto flex flex-col items-center justify-center gap-1 text-xs font-medium text-slate-400 transition-colors hover:text-cyan-400"
          >
            <ArrowUp className="h-5 w-5" />
            <span>Topo</span>
          </button>
        </li>

        <li className="flex-1">
          <Link
            href="/about"
            className="flex flex-col items-center justify-center gap-1 text-xs font-medium text-slate-400 transition-colors hover:text-cyan-400 active:text-cyan-500"
          >
            <User className="h-5 w-5" />
            <span>Sobre</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
