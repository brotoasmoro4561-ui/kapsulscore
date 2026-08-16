import React, { useState } from 'react';
import { 
  Ticket, 
  Flame, 
  Sparkles, 
  Calculator, 
  Check, 
  Plus, 
  ArrowUpRight, 
  Layers, 
  ShieldCheck,
  TrendingUp,
  Percent
} from 'lucide-react';
import { ParlayPackage, Prediction, Match, BetSlipItem } from '../types';
import { formatRupiah } from '../utils/helpers';
import { TeamLogo } from './TeamLogo';
import { OFFICIAL_LINK } from '../data/mockData';

interface ParlayViewProps {
  parlayPackages: ParlayPackage[];
  predictions: Prediction[];
  matches: Match[];
  onAddToSlip: (item: BetSlipItem) => void;
}

export const ParlayView: React.FC<ParlayViewProps> = ({
  parlayPackages,
  predictions,
  matches,
  onAddToSlip
}) => {
  const [filterType, setFilterType] = useState<'all' | 'parlay' | 'single'>('all');
  const [customStake, setCustomStake] = useState<number>(50000);

  const quickNominals = [25000, 50000, 100000, 250000, 500000];

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Top Banner & Parlay Simulator Calculator */}
      <div className="glass-panel p-5 sm:p-6 rounded-3xl border-amber-400/30 bg-gradient-to-br from-[#120d04] via-[#090b14] to-[#04060d] relative overflow-hidden">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          {/* Left Info */}
          <div className="space-y-2 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/15 border border-amber-400/30 text-amber-300 text-xs font-black uppercase tracking-wider font-display">
              <Flame className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
              <span>MIX PARLAY KAPSUL4D 2026</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black font-display text-white">
              Kalkulator & Paket Parlay Akurasi Tinggi
            </h2>
            <p className="text-xs text-white/60 leading-relaxed">
              Kombinasikan pertandingan favorit untuk melipatgandakan kemenangan hingga puluhan kali lipat dengan jaminan odds pasaran terbaik.
            </p>
          </div>

          {/* Quick Stake Calculator Box */}
          <div className="w-full lg:w-80 p-4 rounded-2xl bg-black/50 border border-amber-400/20 space-y-3 flex-shrink-0">
            <div className="flex items-center justify-between text-xs text-white/60">
              <span className="flex items-center gap-1">
                <Calculator className="w-3.5 h-3.5 text-amber-400" /> Simulasi Modal
              </span>
              <span className="text-amber-300 font-bold">Rupiah</span>
            </div>

            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-bold text-white/40">Rp</span>
              <input
                type="number"
                value={customStake || ''}
                onChange={(e) => setCustomStake(Number(e.target.value))}
                placeholder="50.000"
                className="w-full pl-9 pr-3 py-2 rounded-xl bg-white/5 border border-white/10 text-white font-mono font-bold text-sm focus:outline-none focus:border-amber-400/50"
              />
            </div>

            {/* Quick Nominals */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
              {quickNominals.map((nom) => (
                <button
                  key={nom}
                  onClick={() => setCustomStake(nom)}
                  className={`px-2 py-1 rounded-lg text-[10px] font-bold font-mono transition-colors ${
                    customStake === nom
                      ? 'bg-amber-400 text-black'
                      : 'bg-white/5 text-white/60 hover:text-white'
                  }`}
                >
                  {nom >= 1000 ? `${nom / 1000}k` : nom}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-1.5 bg-black/40 p-1 rounded-xl border border-white/8">
          <button
            onClick={() => setFilterType('all')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
              filterType === 'all'
                ? 'bg-cyan-400 text-black shadow-[0_0_12px_rgba(34,211,238,0.3)]'
                : 'text-white/50 hover:text-white'
            }`}
          >
            Semua Pilihan
          </button>
          <button
            onClick={() => setFilterType('parlay')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
              filterType === 'parlay'
                ? 'bg-amber-400 text-black shadow-[0_0_12px_rgba(251,191,36,0.3)]'
                : 'text-white/50 hover:text-white'
            }`}
          >
            🏆 Paket Mix Parlay
          </button>
          <button
            onClick={() => setFilterType('single')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
              filterType === 'single'
                ? 'bg-indigo-400 text-black'
                : 'text-white/50 hover:text-white'
            }`}
          >
            ⚡ Single Bet Rekomendasi
          </button>
        </div>
      </div>

      {/* 1. Mix Parlay Packages Section */}
      {(filterType === 'all' || filterType === 'parlay') && (
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Ticket className="w-5 h-5 text-amber-400" />
            <h3 className="text-sm sm:text-base font-black font-display text-white uppercase tracking-wide">
              Paket Rekomendasi Mix Parlay Siap Pasang
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {parlayPackages.map((pkg) => {
              const potentialWin = Math.round((customStake || 50000) * pkg.totalOdds);
              return (
                <div
                  key={pkg.id}
                  className="glass-panel p-5 rounded-2xl border-amber-400/25 bg-gradient-to-b from-[#0f121d] via-[#070914] to-[#04060d] flex flex-col justify-between gap-4 relative overflow-hidden group hover:border-amber-400/50 transition-all"
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <div>
                        <span className="text-[10px] font-black uppercase tracking-wider text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">
                          {pkg.badge}
                        </span>
                        <h4 className="text-sm font-black font-display text-white mt-1.5 leading-snug">
                          {pkg.title}
                        </h4>
                        <p className="text-[11px] text-white/40">{pkg.source}</p>
                      </div>

                      <div className="text-right flex-shrink-0">
                        <div className="text-lg font-black font-display gold-gradient-text">
                          @{pkg.totalOdds.toFixed(2)}x
                        </div>
                        <span className="text-[9px] text-white/40 font-mono">{pkg.legs.length} Tim</span>
                      </div>
                    </div>

                    {/* Legs List */}
                    <div className="space-y-2 pt-2 border-t border-white/8">
                      {pkg.legs.map((leg, idx) => (
                        <div
                          key={idx}
                          className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between gap-2 text-xs"
                        >
                          <div className="flex items-center gap-2 min-w-0 flex-1">
                            <div className="flex items-center -space-x-2 flex-shrink-0">
                              <TeamLogo teamName={leg.match.home} size="xs" />
                              <TeamLogo teamName={leg.match.away} size="xs" />
                            </div>
                            <div className="min-w-0 flex-1">
                              <div className="text-[10px] text-white/40 truncate">
                                {leg.match.league} · {leg.match.time} WIB
                              </div>
                              <div className="font-bold text-white truncate text-[11px]">
                                {leg.match.home} vs {leg.match.away}
                              </div>
                              <div className="text-[10px] font-extrabold text-amber-300">
                                Tip: {leg.pick}
                              </div>
                            </div>
                          </div>

                          <div className="text-right flex-shrink-0 font-mono font-black text-cyan-300 text-xs">
                            @{leg.odds.toFixed(2)}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Calculator Simulation Result & CTA */}
                  <div className="pt-3 border-t border-white/8 space-y-3">
                    <div className="p-2.5 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-between">
                      <div className="text-[10px] text-amber-200/80">
                        Modal <b className="text-white">{formatRupiah(customStake || 50000)}</b> menang:
                      </div>
                      <div className="text-sm font-black font-display text-amber-400">
                        {formatRupiah(potentialWin)}
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => {
                          pkg.legs.forEach(leg => {
                            onAddToSlip({
                              matchId: leg.match.id,
                              match: leg.match,
                              pick: leg.pick,
                              pickDetail: `${leg.match.home} vs ${leg.match.away}`,
                              odds: leg.odds
                            });
                          });
                        }}
                        className="flex-1 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-white font-bold text-xs border border-white/10 transition-colors"
                      >
                        + Masuk Slip
                      </button>
                      <a
                        href={OFFICIAL_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-2 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-black font-black text-xs font-display flex items-center justify-center gap-1 shadow-md hover:brightness-110 transition-all"
                      >
                        <span>Pasang</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* 2. Single Bet Value Picks */}
      {(filterType === 'all' || filterType === 'single') && (
        <div className="space-y-4 pt-2">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-cyan-400" />
            <h3 className="text-sm sm:text-base font-black font-display text-white uppercase tracking-wide">
              Single Bet Value Terbaik
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {predictions.slice(0, 6).map((pred) => {
              const match = matches.find(m => m.id === pred.matchId || (m.home === pred.home && m.away === pred.away));
              return (
                <div
                  key={pred.id}
                  className="glass-panel p-4 rounded-2xl border-white/8 flex flex-col justify-between gap-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase text-cyan-400 bg-cyan-400/10 px-2 py-0.5 rounded">
                      {pred.league}
                    </span>
                    <span className="text-xs font-black font-mono text-cyan-300">
                      @{pred.odds.toFixed(2)}
                    </span>
                  </div>

                  <div>
                    <div className="text-xs font-black text-white font-display">
                      {pred.home} vs {pred.away}
                    </div>
                    <div className="text-[11px] font-bold text-amber-300 mt-1">
                      Pilihan: {pred.pickLabel}
                    </div>
                    <p className="text-[10px] text-white/50 mt-1 italic line-clamp-1">
                      "{pred.note}"
                    </p>
                  </div>

                  <div className="pt-2 border-t border-white/5 flex items-center justify-between">
                    <span className="text-[10px] text-white/40">
                      Est. Payout: {formatRupiah(Math.round((customStake || 50000) * pred.odds))}
                    </span>
                    {match && (
                      <button
                        onClick={() => onAddToSlip({
                          matchId: match.id,
                          match: match,
                          pick: pred.pickLabel,
                          pickDetail: `${pred.home} vs ${pred.away}`,
                          odds: pred.odds
                        })}
                        className="text-xs font-extrabold text-cyan-400 hover:text-cyan-300 flex items-center gap-0.5"
                      >
                        <Plus className="w-3.5 h-3.5" /> + Slip
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
