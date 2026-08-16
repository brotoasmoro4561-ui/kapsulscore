import React, { useState } from 'react';
import { 
  X, 
  Trash2, 
  Ticket, 
  Sparkles, 
  ArrowRight, 
  Check, 
  Copy, 
  Share2,
  ExternalLink,
  Flame,
  AlertCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { BetSlipItem } from '../types';
import { formatRupiah } from '../utils/helpers';
import { TeamLogo } from './TeamLogo';
import { OFFICIAL_LINK, BRAND_LOGO_GIF } from '../data/mockData';

interface ParlaySlipDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: BetSlipItem[];
  onRemoveItem: (matchId: string) => void;
  onClearAll: () => void;
}

export const ParlaySlipDrawer: React.FC<ParlaySlipDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onRemoveItem,
  onClearAll
}) => {
  const [stake, setStake] = useState<number>(50000);
  const [copiedCode, setCopiedCode] = useState(false);

  if (!isOpen) return null;

  // Calculate total odds
  const totalOdds = items.reduce((acc, curr) => acc * curr.odds, 1);
  const potentialPayout = Math.round(stake * totalOdds);
  const isParlay = items.length > 1;

  const quickNominals = [10000, 25000, 50000, 100000, 250000, 500000];

  const handleCopyTicket = () => {
    const ticketSummary = `🎫 KAPSUL4D PARLAY SLIP (${items.length} Tim)\n` +
      items.map((it, idx) => `${idx + 1}. ${it.match.home} vs ${it.match.away} => ${it.pick} (@${it.odds.toFixed(2)})`).join('\n') +
      `\nTotal Odds: @${totalOdds.toFixed(2)}x\nTaruhan: ${formatRupiah(stake)}\nEstimasi Menang: ${formatRupiah(potentialPayout)}\nPasang di: ${OFFICIAL_LINK}`;

    navigator.clipboard.writeText(ticketSummary);
    setCopiedCode(true);

    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });

    setTimeout(() => setCopiedCode(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      {/* Click outside backdrop */}
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-md bg-[#090c18] border-l border-cyan-400/30 h-full flex flex-col justify-between shadow-2xl z-10 animate-in slide-in-from-right duration-300">
        {/* Top Header */}
        <div className="p-4 border-b border-white/8 flex items-center justify-between bg-black/40">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-amber-400/15 text-amber-400">
              <Ticket className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-black font-display text-white flex items-center gap-2">
                <span>Slip Taruhan</span>
                <span className="px-2 py-0.2 rounded-full bg-cyan-400/20 text-cyan-300 text-[10px] font-mono">
                  {items.length} Pilihan
                </span>
              </h3>
              <p className="text-[10px] text-white/40">
                {isParlay ? 'Kombinasi Mix Parlay' : 'Single Bet'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1">
            {items.length > 0 && (
              <button
                onClick={onClearAll}
                className="p-2 rounded-xl text-white/40 hover:text-rose-400 hover:bg-rose-500/10 transition-colors"
                title="Hapus Semua"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            )}
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-white/40 hover:text-white hover:bg-white/10"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Slip Items List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-2.5">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-8 text-white/40">
              <Ticket className="w-12 h-12 text-white/20 mb-3" />
              <p className="text-sm font-bold text-white/60">Slip Masih Kosong</p>
              <p className="text-xs text-white/30 mt-1 max-w-xs">
                Klik tombol <b>+ Slip</b> pada jadwal atau prediksi pertandingan untuk mulai meracik parlay impian Anda!
              </p>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.matchId}
                className="p-3 rounded-2xl bg-white/[0.03] border border-white/8 relative group hover:border-cyan-400/30 transition-all"
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-1.5 mb-1">
                      <span className="text-[10px] text-cyan-400/90 font-bold uppercase tracking-wider truncate">
                        {item.match.league}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center -space-x-1.5 flex-shrink-0">
                        <TeamLogo teamName={item.match.home} size="xs" />
                        <TeamLogo teamName={item.match.away} size="xs" />
                      </div>
                      <div className="text-xs font-black text-white truncate">
                        {item.match.home} vs {item.match.away}
                      </div>
                    </div>
                    <div className="text-[11px] font-bold text-amber-300 mt-1.5 flex items-center gap-1">
                      <span>Pilihan:</span>
                      <span className="bg-amber-400/10 px-1.5 py-0.2 rounded border border-amber-400/20">
                        {item.pick}
                      </span>
                    </div>
                  </div>

                  <div className="text-right flex flex-col items-end gap-1 flex-shrink-0">
                    <button
                      onClick={() => onRemoveItem(item.matchId)}
                      className="text-white/30 hover:text-rose-400 transition-colors p-1"
                      title="Hapus laga"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                    <span className="font-mono font-black text-cyan-300 text-xs">
                      @{item.odds.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Bottom Calculations & CTA */}
        {items.length > 0 && (
          <div className="p-4 border-t border-white/8 bg-black/60 space-y-3.5">
            {/* Stake Input */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-xs text-white/70">
                <span className="font-bold">Nominal Taruhan (Stake)</span>
                <span className="text-[10px] text-white/40">Min Rp 10.000</span>
              </div>
              <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-white/40">Rp</span>
                <input
                  type="number"
                  value={stake || ''}
                  onChange={(e) => setStake(Number(e.target.value))}
                  placeholder="50000"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white font-mono font-bold text-sm focus:outline-none focus:border-cyan-400/50"
                />
              </div>

              {/* Quick Nominal Chips */}
              <div className="flex items-center gap-1 overflow-x-auto pb-0.5 scrollbar-none">
                {quickNominals.map((nom) => (
                  <button
                    key={nom}
                    onClick={() => setStake(nom)}
                    className={`px-2 py-1 rounded-lg text-[10px] font-bold font-mono transition-colors ${
                      stake === nom
                        ? 'bg-amber-400 text-black'
                        : 'bg-white/5 text-white/60 hover:text-white'
                    }`}
                  >
                    {nom >= 1000 ? `${nom / 1000}k` : nom}
                  </button>
                ))}
              </div>
            </div>

            {/* Calculations Summary Box */}
            <div className="p-3 rounded-2xl bg-white/[0.04] border border-white/8 space-y-1.5 text-xs">
              <div className="flex items-center justify-between text-white/60">
                <span>Total Odds ({items.length} Tim):</span>
                <span className="font-mono font-black text-cyan-300 text-sm">
                  @{totalOdds.toFixed(2)}x
                </span>
              </div>
              <div className="flex items-center justify-between pt-1.5 border-t border-white/5">
                <span className="font-bold text-white">Estimasi Kemenangan:</span>
                <span className="font-mono font-black text-amber-400 text-base">
                  {formatRupiah(potentialPayout)}
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyTicket}
                className="flex-1 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
              >
                {copiedCode ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
                <span>{copiedCode ? 'Tersalin!' : 'Bagikan Tiket'}</span>
              </button>

              <a
                href={OFFICIAL_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 text-black font-black text-xs font-display flex items-center justify-center gap-1.5 shadow-[0_0_25px_rgba(251,191,36,0.35)] hover:brightness-110 transition-all hover:scale-[1.02]"
              >
                <span>PASANG DI K4D</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
