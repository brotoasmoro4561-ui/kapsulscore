import React from 'react';
import { Flame, Sparkles, TrendingUp, Trophy } from 'lucide-react';
import { Match } from '../types';
import { TeamLogo } from './TeamLogo';

interface LiveTickerProps {
  matches: Match[];
}

export const LiveTicker: React.FC<LiveTickerProps> = ({ matches }) => {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-cyan-950/40 via-indigo-950/30 to-amber-950/20 border border-white/8 py-2 px-3 mb-6 shadow-inner backdrop-blur-md">
      <div className="flex items-center gap-3">
        {/* Static Badge Left */}
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-cyan-400/15 border border-cyan-400/30 text-cyan-300 text-[10px] font-black uppercase tracking-wider flex-shrink-0 z-10 font-display">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></span>
          <Flame className="w-3 h-3 text-cyan-400" />
          <span>HIGHLIGHT LIGA</span>
        </div>

        {/* Ticker Stream Content */}
        <div className="overflow-hidden flex-1 relative mask-fade-edges">
          <div className="animate-marquee flex items-center gap-6">
            {matches.slice(0, 15).map((m, idx) => (
              <div
                key={`ticker-1-${m.id}-${idx}`}
                className="flex items-center gap-2 text-xs text-white/70 whitespace-nowrap"
              >
                <span className="text-[10px] font-bold text-cyan-400/90">{m.league}</span>
                <span className="text-white/40">·</span>
                <TeamLogo teamName={m.home} size="xs" />
                <span className="font-semibold text-white">{m.home}</span>
                <span className="text-[10px] font-black text-white/40">VS</span>
                <span className="font-semibold text-white">{m.away}</span>
                <TeamLogo teamName={m.away} size="xs" />
                <span className="px-1.5 py-0.5 rounded-md bg-white/5 text-[9px] font-mono text-cyan-300 border border-white/5">
                  {m.time} WIB
                </span>
                <span className="text-white/20">|</span>
              </div>
            ))}

            {/* Duplicated for seamless continuous loop */}
            {matches.slice(0, 15).map((m, idx) => (
              <div
                key={`ticker-2-${m.id}-${idx}`}
                className="flex items-center gap-2 text-xs text-white/70 whitespace-nowrap"
              >
                <span className="text-[10px] font-bold text-cyan-400/90">{m.league}</span>
                <span className="text-white/40">·</span>
                <TeamLogo teamName={m.home} size="xs" />
                <span className="font-semibold text-white">{m.home}</span>
                <span className="text-[10px] font-black text-white/40">VS</span>
                <span className="font-semibold text-white">{m.away}</span>
                <TeamLogo teamName={m.away} size="xs" />
                <span className="px-1.5 py-0.5 rounded-md bg-white/5 text-[9px] font-mono text-cyan-300 border border-white/5">
                  {m.time} WIB
                </span>
                <span className="text-white/20">|</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

