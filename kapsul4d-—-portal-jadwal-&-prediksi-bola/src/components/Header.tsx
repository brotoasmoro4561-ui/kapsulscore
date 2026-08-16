import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  LogIn, 
  UserPlus, 
  Sparkles, 
  Clock, 
  Ticket, 
  ExternalLink
} from 'lucide-react';
import { motion } from 'motion/react';
import { OFFICIAL_LINK, BRAND_LOGO_GIF } from '../data/mockData';
import { BetSlipItem } from '../types';

interface HeaderProps {
  onToggleSidebar: () => void;
  title: string;
  subtitle: string;
  slipItems: BetSlipItem[];
  onOpenSlip: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onToggleSidebar,
  title,
  subtitle,
  slipItems,
  onOpenSlip
}) => {
  const [timeStr, setTimeStr] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      setTimeStr(`${hours}:${minutes}:${seconds} WIB`);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="sticky top-0 z-30 bg-[#05060c]/90 backdrop-blur-xl border-b border-white/8 px-3 sm:px-5 lg:px-8 py-2.5 sm:py-3 transition-all">
      <div className="flex items-center justify-between gap-2 sm:gap-4">
        {/* Left Side: Mobile Menu button + Brand / Page Title */}
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          <motion.button
            whileTap={{ scale: 0.92 }}
            onClick={onToggleSidebar}
            className="lg:hidden p-2 rounded-xl bg-white/5 hover:bg-white/10 active:bg-cyan-500/20 text-white/90 border border-white/10 transition-colors flex-shrink-0 flex items-center justify-center"
            aria-label="Buka Menu Navigasi"
          >
            <Menu className="w-5 h-5 text-cyan-400" />
          </motion.button>

          {/* Brand Logo GIF on Mobile Header */}
          <div className="lg:hidden flex items-center gap-1.5 flex-shrink-0">
            <img 
              src={BRAND_LOGO_GIF} 
              alt="KAPSUL4D Logo" 
              className="h-7 sm:h-8 w-auto object-contain drop-shadow-[0_0_12px_rgba(34,211,238,0.45)]"
            />
          </div>

          {/* Page Title & Subtitle for Tablet & Desktop */}
          <div className="min-w-0 hidden sm:block">
            <h1 className="text-base sm:text-lg lg:text-xl font-black font-display tracking-tight text-white flex items-center gap-2">
              <span className="truncate">{title}</span>
              <span className="hidden md:inline-flex items-center gap-1 text-[10px] font-bold text-cyan-400 bg-cyan-400/10 px-2 py-0.5 rounded-full border border-cyan-400/20 flex-shrink-0">
                <Sparkles className="w-2.5 h-2.5" /> Musim 2026
              </span>
            </h1>
            <p className="text-xs text-white/40 truncate max-w-md">{subtitle}</p>
          </div>
        </div>

        {/* Right Quick Actions */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 flex-shrink-0">
          {/* Live Clock Indicator on Desktop */}
          <div className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/[0.03] border border-white/5 text-xs text-white/60">
            <Clock className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span className="font-mono font-bold text-cyan-200">{timeStr}</span>
          </div>

          {/* Floating Slip Trigger Button */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.94 }}
            onClick={onOpenSlip}
            className={`relative flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-xl font-bold text-xs transition-all ${
              slipItems.length > 0
                ? 'bg-amber-400/15 border border-amber-400/50 text-amber-300 shadow-[0_0_20px_rgba(251,191,36,0.3)]'
                : 'bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 hover:text-white'
            }`}
            title="Buka Slip Taruhan"
          >
            <Ticket className="w-4 h-4 text-amber-400" />
            <span className="hidden sm:inline font-display">Slip</span>
            {slipItems.length > 0 ? (
              <span className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-amber-400 text-black text-[9px] sm:text-[10px] font-black flex items-center justify-center shadow-sm">
                {slipItems.length}
              </span>
            ) : null}
          </motion.button>

          {/* Login Button */}
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.94 }}
            href={OFFICIAL_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary-glass px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-xl text-xs font-semibold flex items-center gap-1 sm:gap-1.5"
          >
            <LogIn className="w-3.5 h-3.5 text-white/70" />
            <span>Masuk</span>
          </motion.a>

          {/* Register Button with Brand Glow */}
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.94 }}
            href={OFFICIAL_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary-gradient px-3 sm:px-5 py-1.5 sm:py-2 rounded-xl text-xs font-black flex items-center gap-1 sm:gap-1.5 shadow-[0_2px_15px_rgba(34,211,238,0.3)] font-display"
          >
            <UserPlus className="w-3.5 h-3.5" />
            <span>DAFTAR</span>
          </motion.a>

          {/* Official Partner Badge Link on Desktop */}
          <a
            href={OFFICIAL_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-cyan-950/60 to-indigo-950/60 border border-cyan-400/30 text-white hover:border-cyan-400/60 transition-all group"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span className="text-[11px] font-black font-display tracking-wide text-white group-hover:text-cyan-300">
              VIP KAPSUL<span className="text-cyan-400">4D</span>
            </span>
            <ExternalLink className="w-3 h-3 text-cyan-400" />
          </a>
        </div>
      </div>
    </header>
  );
};
