import React, { useState, useEffect } from 'react';
import { 
  Trophy, 
  CalendarDays, 
  Target, 
  Ticket, 
  Sparkles, 
  ChevronRight, 
  Flame, 
  ArrowUpRight, 
  ShieldCheck, 
  CheckCircle2, 
  TrendingUp,
  Clock,
  Plus,
  Zap,
  Globe2,
  DollarSign
} from 'lucide-react';
import { Match, Prediction, ParlayPackage, Testimonial, BetSlipItem, ActiveTab } from '../types';
import { formatRupiah } from '../utils/helpers';
import { TeamLogo } from './TeamLogo';
import { BRAND_BANNER_GIF, OFFICIAL_LINK } from '../data/mockData';

interface DashboardViewProps {
  matches: Match[];
  predictions: Prediction[];
  parlayPackages: ParlayPackage[];
  testimonials: Testimonial[];
  onSelectTab: (tab: ActiveTab) => void;
  onAddToSlip: (item: BetSlipItem) => void;
}

export const DashboardView: React.FC<DashboardViewProps> = ({
  matches,
  predictions,
  parlayPackages,
  testimonials,
  onSelectTab,
  onAddToSlip
}) => {
  const [activeSlide, setActiveSlide] = useState(0);

  // Big Match highlights for top slider
  const featuredMatches = matches.slice(0, 5);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % featuredMatches.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [featuredMatches.length]);

  const currentFeatured = featuredMatches[activeSlide] || featuredMatches[0];
  const currentPred = predictions.find(p => p.matchId === currentFeatured?.id);

  const totalWdAmount = testimonials.reduce((acc, t) => (t.type === 'wd' ? acc + t.amount : acc), 0);

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* 1. Official Animated Promo Banner */}
      <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-cyan-400/25 shadow-[0_0_40px_rgba(34,211,238,0.15)] group">
        <a href={OFFICIAL_LINK} target="_blank" rel="noopener noreferrer" className="block relative">
          <img
            src={BRAND_BANNER_GIF}
            alt="KAPSUL4D Official Promo Banner"
            className="w-full h-auto object-cover max-h-[220px] sm:max-h-[280px] transition-transform duration-700 group-hover:scale-[1.01]"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = 'https://dummyimage.com/1200x260/0a0d1a/22d3ee.png&text=KAPSUL4D+OFFICIAL+SPORTS+PROMO';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#05060c] via-transparent to-transparent opacity-60 pointer-events-none" />
        </a>
      </div>

      {/* 2. Top Big Match Spotlight Slider */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Flame className="w-5 h-5 text-amber-400" />
            <h2 className="text-sm sm:text-base font-black font-display text-white tracking-wide uppercase">
              Big Match Pekan Ini
            </h2>
            <span className="text-[10px] bg-amber-400/10 text-amber-300 border border-amber-400/30 px-2 py-0.5 rounded-full font-bold">
              SUPER ODDS
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            {featuredMatches.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveSlide(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeSlide === idx ? 'w-6 bg-cyan-400' : 'w-2 bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {currentFeatured && (
          <div className="glass-panel p-4 sm:p-6 rounded-3xl relative overflow-hidden border-cyan-400/20 bg-gradient-to-br from-[#0c1020] via-[#070914] to-[#04060d]">
            {/* Ambient backdrop glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col gap-4">
              {/* Header meta */}
              <div className="flex items-center justify-between flex-wrap gap-2 text-xs">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-lg bg-cyan-400/10 text-cyan-300 border border-cyan-400/30 font-bold font-display text-[11px]">
                    {currentFeatured.league}
                  </span>
                  <span className="text-white/40 font-mono flex items-center gap-1 text-[11px]">
                    <Clock className="w-3 h-3 text-cyan-400" /> {currentFeatured.time} WIB ({currentFeatured.date})
                  </span>
                </div>
                <span className="text-[11px] font-bold text-amber-300/80 bg-amber-400/10 px-2.5 py-1 rounded-lg border border-amber-400/20">
                  📍 {currentFeatured.stadium || 'Stadion Utama'}
                </span>
              </div>

              {/* Clash Display */}
              <div className="grid grid-cols-1 md:grid-cols-7 items-center gap-4 py-2">
                {/* Home Team */}
                <div className="md:col-span-3 flex items-center gap-3.5">
                  <TeamLogo teamName={currentFeatured.home} size="xl" />
                  <div className="min-w-0">
                    <div className="text-base sm:text-lg font-black text-white font-display truncate">
                      {currentFeatured.home}
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-white/50">
                      <span>Tuan Rumah</span>
                      {currentFeatured.homeRank && (
                        <span className="text-[10px] text-cyan-400 bg-white/5 px-1.5 py-0.2 rounded font-mono">
                          Peringkat #{currentFeatured.homeRank}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* VS & Predicted Score */}
                <div className="md:col-span-1 flex flex-col items-center justify-center text-center py-2 md:py-0">
                  <span className="text-xs font-black text-white/30 tracking-widest font-display">VS</span>
                  {currentPred ? (
                    <div className="mt-1 flex flex-col items-center">
                      <span className="text-xl sm:text-2xl font-black font-display text-cyan-300 tracking-tight drop-shadow-[0_0_12px_rgba(34,211,238,0.4)]">
                        {currentPred.score}
                      </span>
                      <span className="text-[9px] font-extrabold uppercase tracking-wider text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-full border border-emerald-400/20 mt-0.5">
                        Akurasi {currentPred.confidencePct}%
                      </span>
                    </div>
                  ) : (
                    <span className="text-sm font-bold text-white/40 mt-1">-</span>
                  )}
                </div>

                {/* Away Team */}
                <div className="md:col-span-3 flex items-center justify-end gap-3.5 text-right">
                  <div className="min-w-0">
                    <div className="text-base sm:text-lg font-black text-white font-display truncate">
                      {currentFeatured.away}
                    </div>
                    <div className="flex items-center justify-end gap-1.5 text-xs text-white/50">
                      {currentFeatured.awayRank && (
                        <span className="text-[10px] text-indigo-400 bg-white/5 px-1.5 py-0.2 rounded font-mono">
                          Peringkat #{currentFeatured.awayRank}
                        </span>
                      )}
                      <span>Tim Tamu</span>
                    </div>
                  </div>
                  <TeamLogo teamName={currentFeatured.away} size="xl" />
                </div>
              </div>

              {/* Prediction Tactical Insight & Quick Bet Actions */}
              {currentPred && (
                <div className="pt-3 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-2 text-white/70">
                    <Zap className="w-4 h-4 text-amber-400 flex-shrink-0" />
                    <span className="line-clamp-1 italic font-medium">
                      "{currentPred.note}"
                    </span>
                  </div>

                  <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                    <button
                      onClick={() => onAddToSlip({
                        matchId: currentFeatured.id,
                        match: currentFeatured,
                        pick: currentPred.pickLabel,
                        pickDetail: `${currentPred.home} vs ${currentPred.away} (${currentPred.score})`,
                        odds: currentPred.odds
                      })}
                      className="flex-1 sm:flex-none px-3.5 py-1.5 rounded-xl bg-cyan-400/15 border border-cyan-400/30 text-cyan-300 font-bold hover:bg-cyan-400/25 flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Tambah ke Parlay (@{currentPred.odds})</span>
                    </button>
                    <a
                      href={OFFICIAL_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-1.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-black font-black hover:brightness-110 flex items-center gap-1 transition-all"
                    >
                      <span>Pasang</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* 3. Core Statistics Metrics Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        <div className="glass-panel p-4 rounded-2xl relative overflow-hidden">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-bold text-white/50 uppercase tracking-wider">Total Laga</span>
            <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400">
              <CalendarDays className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl sm:text-3xl font-black font-display text-white">{matches.length}</div>
          <p className="text-[10px] text-cyan-300/70 mt-1 font-medium flex items-center gap-1">
            <Globe2 className="w-3 h-3" /> Dari 12+ Liga Top Dunia
          </p>
        </div>

        <div className="glass-panel p-4 rounded-2xl relative overflow-hidden">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-bold text-white/50 uppercase tracking-wider">Prediksi Skor</span>
            <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-400">
              <Target className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl sm:text-3xl font-black font-display text-white">{predictions.length}</div>
          <p className="text-[10px] text-indigo-300/70 mt-1 font-medium flex items-center gap-1">
            <Sparkles className="w-3 h-3" /> Update Analisis Akurat
          </p>
        </div>

        <div className="glass-panel p-4 rounded-2xl relative overflow-hidden">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-bold text-white/50 uppercase tracking-wider">Total WD Terbayar</span>
            <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400">
              <DollarSign className="w-4 h-4" />
            </div>
          </div>
          <div className="text-xl sm:text-2xl font-black font-display text-emerald-400">
            {formatRupiah(totalWdAmount > 0 ? totalWdAmount : 185000000)}
          </div>
          <p className="text-[10px] text-emerald-300/70 mt-1 font-medium flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3" /> Transaksi 100% Lunas
          </p>
        </div>

        <div className="glass-panel p-4 rounded-2xl relative overflow-hidden">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-bold text-white/50 uppercase tracking-wider">Member Aktif</span>
            <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400">
              <Trophy className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl sm:text-3xl font-black font-display text-amber-300">1.248+</div>
          <p className="text-[10px] text-amber-300/70 mt-1 font-medium flex items-center gap-1">
            <ShieldCheck className="w-3 h-3" /> Rating Kepuasan 98.6%
          </p>
        </div>
      </div>

      {/* 4. Spotlight Pertandingan Pilihan (Grid of 4) */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-cyan-400" />
            <h2 className="text-sm sm:text-base font-black font-display text-white tracking-wide uppercase">
              Pertandingan Sorotan & Prediksi
            </h2>
          </div>
          <button
            onClick={() => onSelectTab('jadwal')}
            className="text-xs font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
          >
            <span>Lihat Semua Jadwal</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {matches.slice(0, 4).map((m) => {
            const pred = predictions.find(p => p.matchId === m.id);
            return (
              <div
                key={m.id}
                className="glass-panel glass-panel-hover p-4 rounded-2xl flex flex-col justify-between gap-3 border-white/8"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400 bg-cyan-400/10 px-2 py-0.5 rounded-lg border border-cyan-400/20">
                    {m.league}
                  </span>
                  <span className="text-[10px] font-mono text-white/50 bg-white/5 px-2 py-0.5 rounded-md">
                    {m.time} WIB
                  </span>
                </div>

                {/* Teams Row */}
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2.5 flex-1 min-w-0">
                    <TeamLogo teamName={m.home} size="sm" />
                    <div className="min-w-0">
                      <div className="text-xs font-bold text-white truncate">{m.home}</div>
                      <div className="text-[9px] text-white/40">Kandang</div>
                    </div>
                  </div>

                  <div className="flex flex-col items-center px-2">
                    <span className="text-[10px] font-black text-white/30 font-display">VS</span>
                    {pred && (
                      <span className="text-sm font-black text-white font-display">
                        {pred.score}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-end gap-2.5 flex-1 min-w-0 text-right">
                    <div className="min-w-0">
                      <div className="text-xs font-bold text-white truncate">{m.away}</div>
                      <div className="text-[9px] text-white/40">Tandang</div>
                    </div>
                    <TeamLogo teamName={m.away} size="sm" />
                  </div>
                </div>

                {/* Footer Pick */}
                {pred && (
                  <div className="pt-2 border-t border-white/5 flex items-center justify-between text-xs">
                    <span className="text-[10px] font-bold text-amber-300 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20 truncate max-w-[200px]">
                      Tip: {pred.pickLabel}
                    </span>
                    <button
                      onClick={() => onAddToSlip({
                        matchId: m.id,
                        match: m,
                        pick: pred.pickLabel,
                        pickDetail: `${m.home} vs ${m.away}`,
                        odds: pred.odds
                      })}
                      className="text-[10px] font-extrabold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 ml-auto"
                    >
                      <Plus className="w-3 h-3" /> Slip @{pred.odds}
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* 5. Recommended Mix Parlay Package of the Day */}
      {parlayPackages.length > 0 && (
        <div className="glass-panel p-5 sm:p-6 rounded-3xl border-amber-400/30 bg-gradient-to-br from-amber-950/20 via-[#070914] to-[#04060d] relative overflow-hidden">
          <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-amber-400/15 text-amber-400">
                <Ticket className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-black font-display text-white">
                  {parlayPackages[0].title}
                </h3>
                <p className="text-xs text-white/50">{parlayPackages[0].source}</p>
              </div>
            </div>

            <div className="text-right">
              <div className="text-lg sm:text-xl font-black font-display gold-gradient-text">
                TOTAL ODDS @{parlayPackages[0].totalOdds.toFixed(2)}x
              </div>
              <span className="text-[9px] font-extrabold uppercase tracking-wider text-amber-300 bg-amber-400/10 px-2 py-0.5 rounded-full border border-amber-400/20">
                {parlayPackages[0].badge}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 mb-4">
            {parlayPackages[0].legs.map((leg, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-white/[0.03] border border-white/5 flex flex-col justify-between">
                <div className="flex items-center justify-between text-[10px] text-white/40 mb-1">
                  <span>{leg.match.league}</span>
                  <span className="font-mono">{leg.match.time} WIB</span>
                </div>
                <div className="text-xs font-bold text-white truncate">
                  {leg.match.home} vs {leg.match.away}
                </div>
                <div className="mt-2 flex items-center justify-between text-xs pt-1.5 border-t border-white/5">
                  <span className="text-[10px] font-bold text-amber-300">{leg.pick}</span>
                  <span className="text-[11px] font-mono font-black text-cyan-400">@{leg.odds.toFixed(2)}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
            <span className="text-xs text-white/50">
              Contoh Pasang Rp 50.000 berpotensi menang <b className="text-amber-400">{formatRupiah(Math.round(50000 * parlayPackages[0].totalOdds))}</b>
            </span>
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                onClick={() => {
                  parlayPackages[0].legs.forEach(leg => {
                    onAddToSlip({
                      matchId: leg.match.id,
                      match: leg.match,
                      pick: leg.pick,
                      pickDetail: `${leg.match.home} vs ${leg.match.away}`,
                      odds: leg.odds
                    });
                  });
                }}
                className="flex-1 sm:flex-none px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-white font-bold text-xs border border-white/10 transition-colors"
              >
                + Masukkan Semua ke Slip
              </button>
              <a
                href={OFFICIAL_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none px-5 py-2 rounded-xl bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 text-black font-black text-xs font-display flex items-center justify-center gap-1.5 shadow-[0_0_20px_rgba(251,191,36,0.3)] hover:brightness-110 transition-all"
              >
                <span>PASANG PARLAY INI</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* 6. Testimoni Member Snapshot Preview */}
      <div className="space-y-3 pt-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            <h2 className="text-sm sm:text-base font-black font-display text-white tracking-wide uppercase">
              💬 Testimoni Member & Bukti WD
            </h2>
            <span className="text-[10px] bg-emerald-400/10 text-emerald-300 border border-emerald-400/30 px-2 py-0.5 rounded-full font-bold">
              Terbaru
            </span>
          </div>
          <button
            onClick={() => onSelectTab('testimoni')}
            className="text-xs font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
          >
            <span>Semua Testimoni</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {testimonials.slice(0, 4).map((t) => (
            <div key={t.id} className="glass-panel p-4 rounded-2xl border-white/8 relative">
              <div className="flex items-start justify-between gap-2 mb-2">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-indigo-500 text-black font-black text-xs flex items-center justify-center font-display">
                    {t.user.charAt(0)}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white flex items-center gap-1.5">
                      <span>{t.user}</span>
                      <span className="text-[10px] text-white/40">({t.city})</span>
                    </div>
                    <div className="text-[10px] text-amber-400">{'⭐'.repeat(t.stars)}</div>
                  </div>
                </div>
                <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-md bg-emerald-400/10 text-emerald-300 border border-emerald-400/20">
                  {t.type === 'wd' ? '💸 Withdraw' : t.type === 'jp' ? '🏆 Jackpot' : '🎁 Bonus'}
                </span>
              </div>
              <p className="text-xs text-white/70 italic leading-relaxed">"{t.text}"</p>
              <div className="mt-3 pt-2 border-t border-white/5 flex items-center justify-between text-xs">
                <span className="text-emerald-400 font-bold font-mono">
                  {formatRupiah(t.amount)}
                </span>
                <span className="text-[10px] text-white/40">{t.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
