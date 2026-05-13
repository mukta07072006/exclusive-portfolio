import React from 'react';

export interface GradientCardProps {
  /** The text to display inside the card */
  text: string;
  /** Optional Tailwind classes for positioning or sizing */
  className?: string;
}

export const GradientCard: React.FC<GradientCardProps> = ({ text, className = '' }) => {
  return (
    <>
      {/* Inject animation keyframes locally for zero-config setup */}
      <style>{`
        @keyframes border-flow {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-border-flow {
          animation: border-flow 5s ease infinite;
          background-size: 200% 200%;
        }
      `}</style>

      <div
        className={`relative rounded-2xl p-[3px] overflow-hidden transition-all duration-500 ease-out hover:scale-[1.02] hover:shadow-[0_0_35px_rgba(99,102,241,0.5)] ${className}`}
      >
        {/* 🌊 Animated Gradient Border Layer */}
        <div
          className="absolute inset-0 animate-border-flow"
          style={{
            background: 'linear-gradient(135deg, #4f46e5, #3b82f6, #6366f1, #8b5cf6, #4f46e5)',
          }}
        />

        {/* 📦 Inner Card Content */}
        <div className="relative h-full bg-gradient-to-br from-indigo-500 to-black rounded-2xl px-8 py-6 overflow-hidden shadow-inner">
          
          {/* 🔍 Noisy Texture Overlay */}
          <div
            className="absolute inset-0 pointer-events-none opacity-15 mix-blend-overlay"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            }}
          />

          {/* 📝 Text Content */}
          <p className="relative z-10 text-lg font-medium text-white/95 tracking-wide drop-shadow-md">
            {text}
          </p>
        </div>
      </div>
    </>
  );
};

export default GradientCard;