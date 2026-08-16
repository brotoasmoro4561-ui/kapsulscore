import React, { useState } from 'react';
import { 
  Target, 
  Sparkles, 
  TrendingUp, 
  ShieldAlert, 
  CheckCircle2, 
  Plus, 
  ExternalLink, 
  Flame, 
  Info, 
  Layers, 
  ArrowUpRight,
  ChevronDown,
  Activity,
  BarChart3,
  Percent,
  Zap
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Prediction, Match, BetSlipItem } from '../types';
import { TeamLogo } from './TeamLogo';
import { OFFICIAL_LINK } from '../data/mockData';

interface PrediksiViewProps {
  predictions: Prediction[];
  matches: Match[];
  onAddToSlip: (item: BetSlipItem) => void;
  highlightMatchId?: string | null;
}

export const PrediksiView: React.FC<PrediksiViewProps> = ({
  predictions,
  matches,
  onAddToSlip,
  highlightMatchId
}) => {
  const [confidenceFilter, setConfidenceFilter] = useState<'all' | 'high' | 'mid'>('all');
  const [selectedLeague, setSelectedLeague] = useState<string>('ALL');
  const [expandedCardId, setExpandedCardId] = useState<string | null>(highlightMatchId || null);

  const leagues: string[] = Array.from(new Set(predictions.map(p => p.league)));

  const filteredPredictions = predictions.filter((p) => {
    const matchConfidence = confidenceFilter === 'all' || p.confidence === confidenceFilter;
    const matchLeague = selectedLeague === 'ALL' || p.league === selectedLeague;
    return matchConfidence && matchLeague;
  });

  const toggleExpand = (id: string) => {
    setExpandedCardId(prev => (prev === id ? null : id));
  };

  return (
    <div className="space-y-5 animate-in fade-in duration-300">
      {/* Filters Header */}
      <div className="glass-panel p-4 rounded-2xl border-white/8 space-y-3">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <h2 className="text-base font-black font-display text-white flex items-center gap-2">
              <Target className="w-5 h-5 text-cyan-400" />
              <span>Analisis Skor & Prediksi Akurat</span>
            </h2>
            <p className="text-xs text-white/40 mt-0.5">
              Dihitung berdasarkan performa H2H, tren kandang-tandang, dan probabilitas statistik. Klik kartu untuk membuka rincian taktis.
            </p>
          </div>

          {/* Confidence Filter Tabs */}
          <div className="flex items-center gap-1.5 bg-black/30 p-1 rounded-xl border border-white/8">
            <button
              onClick={() => setConfidenceFilter('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                confidenceFilter === 'all'
                  ? 'bg-cyan-400 text-black shadow-[0_0_12px_rgba(34,211,238,0.4)]'
                  : 'text-white/50 hover:text-white'
              }`}
            >
              Semua ({predictions.length})
            </button>
            <button
              onClick={() => setConfidenceFilter('high')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                confidenceFilter === 'high'
                  ? 'bg-emerald-400 text-black shadow-[0_0_12px_rgba(74,222,128,0.4)]'
                  : 'text-white/50 hover:text-white'
              }`}
            >
              🔥 Akurasi Tinggi
            </button>
            <button
              onClick={() => setConfidenceFilter('mid')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                confidenceFilter === 'mid'
                  ? 'bg-indigo-400 text-black'
                  : 'text-white/50 hover:text-white'
              }`}
            >
              ⚡ Sedang
            </button>
          </div>
        </div>

        {/* League Selector */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none pt-2 border-t border-white/5">
          <button
            onClick={() => setSelectedLeague('ALL')}
            className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold whitespace-nowrap transition-colors ${
              selectedLeague === 'ALL'
                ? 'bg-cyan-400/20 text-cyan-300 border border-cyan-400/30'
                : 'text-white/40 hover:text-white bg-transparent'
            }`}
          >
            Semua Liga
          </button>
          {leagues.map((league) => (
            <button
              key={league}
              onClick={() => setSelectedLeague(league)}
              className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold whitespace-nowrap transition-colors ${
                selectedLeague === league
                  ? 'bg-cyan-400/20 text-cyan-300 border border-cyan-400/30'
                  : 'text-white/40 hover:text-white bg-transparent'
              }`}
            >
              {league}
            </button>
          ))}
        </div>
      </div>

      {/* Predictions Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        <AnimatePresence>
          {filteredPredictions.map((pred, index) => {
            const matchObj = matches.find(m => m.id === pred.matchId || (m.home === pred.home && m.away === pred.away));
            const isHighlighted = highlightMatchId && (pred.matchId === highlightMatchId || matchObj?.id === highlightMatchId);
            const isExpanded = expandedCardId === pred.id || isHighlighted;

            return (
              <motion.div
                key={pred.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ 
                  duration: 0.35, 
                  delay: Math.min(index * 0.04, 0.3),
                  ease: [0.22, 1, 0.36, 1] 
                }}
                whileHover={{ 
                  y: -4,
                  transition: { duration: 0.2, ease: 'easeOut' }
                }}
                className={`glass-panel p-5 rounded-2xl border flex flex-col justify-between gap-4 cursor-pointer relative overflow-hidden transition-all group ${
                  isExpanded
                    ? 'border-cyan-400/60 shadow-[0_10px_35px_rgba(34,211,238,0.15)] ring-1 ring-cyan-400/50 bg-[#0c1424]/90'
                    : 'border-white/8 hover:border-cyan-400/40 hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)]'
                }`}
                onClick={() => toggleExpand(pred.id)}
              >
                {/* Subtle Gradient Glow Accent */}
                <div 
                  className={`absolute -top-24 -right-24 w-48 h-48 rounded-full blur-3xl pointer-events-none transition-opacity duration-500 ${
                    isExpanded ? 'bg-cyan-500/15 opacity-100' : 'bg-cyan-500/5 opacity-40 group-hover:opacity-80'
                  }`} 
                />

                <div>
                  {/* Header Meta */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-black uppercase tracking-wider text-cyan-400 bg-cyan-400/10 px-2 py-0.5 rounded-md border border-cyan-400/20">
                      {pred.league}
                    </span>
                    <div className="flex items-center gap-2">
                      {matchObj && (
                        <span className="text-[10px] font-mono text-white/40">
                          {matchObj.time} WIB
                        </span>
                      )}
                      <span
                        className={`text-[9px] font-extrabold px-2 py-0.5 rounded-full border uppercase tracking-wider ${
                          pred.confidence === 'high'
                            ? 'bg-emerald-400/15 text-emerald-300 border-emerald-400/30'
                            : 'bg-indigo-400/15 text-indigo-300 border-indigo-400/30'
                        }`}
                      >
                        Akurasi {pred.confidencePct}%
                      </span>
                    </div>
                  </div>

                  {/* Clash Banner */}
                  <div className="flex items-center justify-between gap-3 py-1">
                    {/* Home */}
                    <div className="flex items-center gap-2.5 flex-1 min-w-0">
                      <TeamLogo teamName={pred.home} size="md" />
                      <div className="min-w-0">
                        <span className="text-xs sm:text-sm font-black text-white block truncate font-display">
                          {pred.home}
                        </span>
                        <span className="text-[9px] text-white/40">Kandang</span>
                      </div>
                    </div>

                    {/* Predicted Result Center */}
                    <div className="flex flex-col items-center justify-center px-3 text-center flex-shrink-0">
                      <motion.span 
                        animate={isExpanded ? { scale: [1, 1.08, 1] } : {}}
                        transition={{ duration: 0.3 }}
                        className="text-lg sm:text-2xl font-black font-display text-white tracking-wider"
                      >
                        {pred.score}
                      </motion.span>
                      <span className="text-[9px] font-extrabold text-amber-300 bg-amber-400/10 px-1.5 py-0.2 rounded border border-amber-400/20 mt-0.5 whitespace-nowrap">
                        {pred.pickLabel}
                      </span>
                    </div>

                    {/* Away */}
                    <div className="flex items-center justify-end gap-2.5 flex-1 min-w-0 text-right">
                      <div className="min-w-0">
                        <span className="text-xs sm:text-sm font-black text-white block truncate font-display">
                          {pred.away}
                        </span>
                        <span className="text-[9px] text-white/40">Tandang</span>
                      </div>
                      <TeamLogo teamName={pred.away} size="md" />
                    </div>
                  </div>

                  {/* Probability Bar */}
                  <div className="mt-3.5 space-y-1.5">
                    <div className="flex items-center justify-between text-[10px] text-white/50 font-bold">
                      <span className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span> 1 ({pred.homeProb}%)
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span> X ({pred.drawProb}%)
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span> 2 ({pred.awayProb}%)
                      </span>
                    </div>
                    <div className="h-2 rounded-full overflow-hidden flex bg-white/5 p-0.5 gap-0.5">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${pred.homeProb}%` }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        className="h-full bg-cyan-400 rounded-l-full"
                        title={`Kandang Menang: ${pred.homeProb}%`}
                      />
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${pred.drawProb}%` }}
                        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
                        className="h-full bg-amber-400"
                        title={`Seri: ${pred.drawProb}%`}
                      />
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${pred.awayProb}%` }}
                        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
                        className="h-full bg-indigo-500 rounded-r-full"
                        title={`Tandang Menang: ${pred.awayProb}%`}
                      />
                    </div>
                  </div>

                  {/* Primary Note Preview */}
                  <div className="mt-3 p-2.5 rounded-xl bg-white/[0.02] border border-white/5 text-xs">
                    <p className="text-white/70 italic text-[11px] leading-relaxed line-clamp-2">
                      💡 "{pred.note}"
                    </p>
                  </div>

                  {/* Smooth Animated Statistics Reveal Panel */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        key="expanded-content"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ 
                          opacity: 1, 
                          height: 'auto',
                          transition: {
                            height: { duration: 0.35, ease: [0.04, 0.62, 0.23, 0.98] },
                            opacity: { duration: 0.25, delay: 0.1 }
                          }
                        }}
                        exit={{ 
                          opacity: 0, 
                          height: 0,
                          transition: {
                            height: { duration: 0.25, ease: 'easeInOut' },
                            opacity: { duration: 0.15 }
                          }
                        }}
                        className="overflow-hidden"
                      >
                        <div className="pt-3 space-y-2.5">
                          {/* Key Markets Quick Grid */}
                          <div className="grid grid-cols-2 gap-2 text-xs">
                            <div className="p-2 rounded-xl bg-cyan-400/5 border border-cyan-400/15 flex items-center justify-between">
                              <span className="text-[10px] text-white/50">Over/Under:</span>
                              <span className="font-mono font-bold text-cyan-300 text-[11px]">
                                {pred.overUnder || 'Over 2.5'}
                              </span>
                            </div>
                            <div className="p-2 rounded-xl bg-amber-400/5 border border-amber-400/15 flex items-center justify-between">
                              <span className="text-[10px] text-white/50">BTTS (Gol 2 Tim):</span>
                              <span className={`font-mono font-bold text-[11px] ${pred.btts === 'YES' ? 'text-emerald-400' : 'text-rose-400'}`}>
                                {pred.btts || 'YES'}
                              </span>
                            </div>
                          </div>

                          {/* H2H & Key Player Detailed Insights */}
                          <div className="p-2.5 rounded-xl bg-black/40 border border-white/5 space-y-2 text-xs">
                            {pred.h2hSummary && (
                              <div className="text-[11px] text-white/60 flex items-start gap-2">
                                <Info className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0 mt-0.5" />
                                <span><b>Rekor H2H:</b> {pred.h2hSummary}</span>
                              </div>
                            )}
                            {pred.keyPlayer && (
                              <div className="text-[11px] text-amber-300 flex items-center gap-2 font-semibold pt-1 border-t border-white/5">
                                <Sparkles className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                                <span>Pemain Kunci: <b>{pred.keyPlayer}</b></span>
                              </div>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Bottom Actions */}
                <div 
                  className="pt-3 border-t border-white/8 flex items-center justify-between gap-2"
                  onClick={(e) => e.stopPropagation()} // Prevent card collapse when clicking buttons
                >
                  <div className="flex items-center gap-1.5 text-xs">
                    <span className="text-white/40">Odds:</span>
                    <span className="font-mono font-black text-cyan-300 text-sm">@{pred.odds.toFixed(2)}</span>
                    <button
                      type="button"
                      onClick={() => toggleExpand(pred.id)}
                      className="ml-1 text-[10px] text-cyan-400/80 hover:text-cyan-300 flex items-center gap-0.5 underline decoration-cyan-400/30"
                    >
                      <span>{isExpanded ? 'Tutup' : 'Detail'}</span>
                      <motion.span
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown className="w-3 h-3" />
                      </motion.span>
                    </button>
                  </div>

                  <div className="flex items-center gap-2">
                    {matchObj && (
                      <button
                        onClick={() => onAddToSlip({
                          matchId: matchObj.id,
                          match: matchObj,
                          pick: pred.pickLabel,
                          pickDetail: `${pred.home} vs ${pred.away} (${pred.score})`,
                          odds: pred.odds
                        })}
                        className="px-3 py-1.5 rounded-xl bg-cyan-400/15 hover:bg-cyan-400/25 border border-cyan-400/30 text-cyan-300 text-xs font-bold flex items-center gap-1 transition-colors active:scale-95"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>Slip</span>
                      </button>
                    )}
                    <a
                      href={OFFICIAL_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-black font-extrabold text-xs flex items-center gap-1 hover:brightness-110 transition-all active:scale-95 shadow-[0_0_15px_rgba(251,191,36,0.2)]"
                    >
                      <span>Pasang Taruhan</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};
