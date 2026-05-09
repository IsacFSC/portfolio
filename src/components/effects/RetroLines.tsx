// components/effects/RetroLines.tsx
export function RetroLines({ className = '' }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute overflow-hidden ${className}`}
      aria-hidden
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={i}
          className="via-clay/10 absolute h-px bg-gradient-to-r from-transparent to-transparent"
          style={{
            top: `${20 + i * 18}%`,
            left: '-5%',
            right: '-5%',
            transform: `rotate(${-2 + i * 0.8}deg)`,
          }}
        />
      ))}
    </div>
  );
}
