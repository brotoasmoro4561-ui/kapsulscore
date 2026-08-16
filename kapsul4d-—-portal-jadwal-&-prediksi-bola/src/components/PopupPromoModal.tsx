import React, { useState, useEffect } from 'react';
import { X, Sparkles, ShieldAlert, ArrowRight, Gift } from 'lucide-react';
import { POPUP_BANNER_IMG, OFFICIAL_LINK, BRAND_LOGO_GIF } from '../data/mockData';

export const PopupPromoModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const isDismissed = sessionStorage.getItem('k4d_popup_dismissed');
    if (!isDismissed) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 700);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('k4d_popup_dismissed', 'true');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-300">
      {/* Click outside to close */}
      <div className="absolute inset-0" onClick={handleClose} />

      <div className="relative w-full max-w-lg rounded-3xl bg-gradient-to-b from-[#0e1424] to-[#05060c] border border-cyan-400/30 shadow-[0_0_80px_rgba(34,211,238,0.25)] overflow-hidden z-10 animate-in zoom-in-95 duration-300">
        {/* Glow backdrop behind banner */}
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-black/60 border border-white/20 text-white/70 hover:text-white hover:bg-black/90 flex items-center justify-center transition-all hover:scale-105"
          aria-label="Tutup promo banner"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Banner Image */}
        <div className="relative w-full overflow-hidden bg-black/40">
          <a href={OFFICIAL_LINK} target="_blank" rel="noopener noreferrer" className="block group">
            <img
              src={POPUP_BANNER_IMG}
              alt="Promo Resmi KAPSUL4D"
              className="w-full h-auto object-cover max-h-[320px] transition-transform duration-500 group-hover:scale-102"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'https://dummyimage.com/600x380/0c101c/22d3ee.png&text=KAPSUL4D+OFFICIAL+PROMO';
              }}
            />
          </a>
        </div>

        {/* Content Box */}
        <div className="p-5 text-center">
          <div className="flex items-center justify-center gap-2 mb-1.5">
            <img src={BRAND_LOGO_GIF} alt="Logo" className="h-6 w-auto object-contain" />
            <span className="text-[10px] font-black text-amber-400 uppercase tracking-widest bg-amber-400/10 px-2 py-0.5 rounded-full border border-amber-400/20">
              PROMO SPESIAL MEMBER 2026
            </span>
          </div>

          <h3 className="text-xl font-black font-display text-white">
            BONUS DEPOSIT 100% NEW MEMBER
          </h3>
          <p className="text-xs text-white/60 mt-1.5 leading-relaxed max-w-sm mx-auto">
            Pasaran bola parlay terlengkap, odds tertinggi, dan jaminan withdraw super cepat tanpa batas nominal!
          </p>

          <div className="mt-5 flex flex-col sm:flex-row items-center gap-2.5">
            <button
              onClick={handleClose}
              className="w-full sm:w-1/3 py-2.5 rounded-xl border border-white/10 text-white/50 hover:text-white hover:bg-white/5 text-xs font-semibold transition-colors"
            >
              Lihat Portal
            </button>
            <a
              href={OFFICIAL_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-2/3 py-2.5 px-4 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 text-black font-black text-xs font-display flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(34,211,238,0.4)] hover:brightness-110 transition-all hover:scale-[1.02]"
            >
              <span>KLAIM BONUS SEKARANG</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
