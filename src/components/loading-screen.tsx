'use client';

import { useEffect, useState, useRef, useSyncExternalStore } from 'react';

interface LogItem {
  text: string;
  delay: number;
}

const LOGS_DATA: LogItem[] = [
  { text: 'isac@freitas:~ $ initializing core_modules...', delay: 200 },
  { text: '✔ Loading Tailwind CSS v4 configurations... DONE', delay: 600 },
  {
    text: '✔ Connecting local database (postgres/prisma)... CONNECTED',
    delay: 1000,
  },
  { text: '✔ Hydrating Next.js architecture... OK', delay: 1400 },
  { text: '✔ Compiling TypeScript server components... 100%', delay: 1800 },
  { text: 'isac@freitas:~ $ boot --production', delay: 2100 },
];

// Funções de inscrição vazias para o useSyncExternalStore (o sessionStorage não muda sozinho após gravado)
const subscribe = () => () => {};
const getServerSnapshot = () => 'true'; // No servidor, finge que já visitou para não renderizar nada no HTML bruto
const getClientSnapshot = () =>
  sessionStorage.getItem('visitedBefore') || 'false';

export default function LoadingScreen() {
  // 1. Lê a sessão de forma segura e sincronizada com o SSR sem usar useEffect nem gerar warnings
  const visitedBefore = useSyncExternalStore(
    subscribe,
    getClientSnapshot,
    getServerSnapshot,
  );

  // Como o useSyncExternalStore retorna string, controlamos o término com esse estado interno assíncrono
  const [animationEnded, setAnimationEnded] = useState<boolean>(false);
  const [activeLogs, setActiveLogs] = useState<string[]>([]);
  const [showName, setShowName] = useState<boolean>(false);
  const logsContainerRef = useRef<HTMLDivElement>(null);

  // Determina se o loading deve rodar
  const shouldRenderLoading = visitedBefore === 'false' && !animationEnded;

  useEffect(() => {
    // Se não deve renderizar, não agenda os timeouts
    if (!shouldRenderLoading) return;

    // 2. Injeção sequencial dos logs (Agora 100% assíncrona dentro de timeouts)
    LOGS_DATA.forEach((log) => {
      const logTimeout = setTimeout(() => {
        setActiveLogs((prev) => [...prev, log.text]);
      }, log.delay);
      return () => clearTimeout(logTimeout);
    });

    const nameTimeout = setTimeout(() => {
      setShowName(true);
    }, 2600);

    const endTimeout = setTimeout(() => {
      sessionStorage.setItem('visitedBefore', 'true');
      setAnimationEnded(true);
    }, 4500);

    return () => {
      clearTimeout(nameTimeout);
      clearTimeout(endTimeout);
    };
  }, [shouldRenderLoading]);

  // Auto-scroll do terminal
  useEffect(() => {
    if (logsContainerRef.current) {
      logsContainerRef.current.scrollTop =
        logsContainerRef.current.scrollHeight;
    }
  }, [activeLogs]);

  // Se já foi visitado ou a animação acabou, o componente se desliga imediatamente
  if (!shouldRenderLoading) return null;

  return (
    <div className="perspective-1000 fixed inset-0 z-50 flex flex-col justify-between bg-[#09090b] p-6 font-mono text-zinc-100 select-none md:p-12">
      {/* Cabeçalho Estilo Janela OS */}
      <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
        <div className="flex items-center gap-2">
          <span className="block h-3 w-3 rounded-full bg-red-500"></span>
          <span className="block h-3 w-3 rounded-full bg-yellow-500"></span>
          <span className="block h-3 w-3 rounded-full bg-green-500"></span>
        </div>
        <div className="text-xs text-zinc-500">isac-freitas-os v4.0.0</div>
      </div>

      {/* Corpo do Terminal (Logs de Carregamento) */}
      {!showName ? (
        <div
          ref={logsContainerRef}
          className="mx-auto w-full max-w-3xl flex-1 space-y-2 overflow-y-auto py-8 text-sm text-zinc-400 md:text-base"
        >
          {activeLogs.map((log, index) => (
            <p key={index} className="leading-relaxed">
              {log}
            </p>
          ))}
          <span className="ml-1 inline-block h-4 w-2 animate-[blink_0.8s_step-end_infinite] bg-emerald-500"></span>
        </div>
      ) : (
        /* Container do Nome 3D Moderno */
        <div className="flex flex-1 flex-col items-center justify-center text-center transform-3d">
          <h1 className="animate-[popOut_0.8s_cubic-bezier(0.34,1.56,0.64,1)_forwards] bg-linear-to-r from-green-400 via-emerald-500 to-teal-500 bg-clip-text text-4xl font-black tracking-tight text-transparent md:text-7xl">
            Isac Freitas
          </h1>
          <p className="mt-4 font-sans text-sm tracking-[0.2em] text-zinc-500 uppercase md:text-lg">
            Full Stack Developer
          </p>
        </div>
      )}

      {/* Rodapé Informativo */}
      <div className="flex w-full justify-between border-t border-zinc-900 pt-4 text-[10px] text-zinc-600 lg:text-xs">
        <div>Status: {showName ? 'Finalizando...' : 'Inicializando...'}</div>
        <div>LOC: [campo_grande/ms]</div>
      </div>
    </div>
  );
}
