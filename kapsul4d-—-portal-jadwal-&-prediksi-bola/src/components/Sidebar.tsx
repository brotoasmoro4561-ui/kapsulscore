import React, { useEffect } from 'react';
import { 
  LayoutDashboard, 
  CalendarDays, 
  Target, 
  Ticket, 
  MessageSquareQuote, 
  ArrowLeftRight, 
  ShieldCheck, 
  Headphones, 
  Sparkles,
  ChevronRight,
  X,
  Zap
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ActiveTab } from '../types';
import { BRAND_LOGO_GIF, OFFICIAL_LINK } from '../data/mockData';

interface SidebarProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  isOpen: boolean;
  onClose: () => void;
  totalMatchesCount: number;
  totalPredictionsCount: number;
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeTab,
  setActiveTab,
  isOpen,
  onClose,
  totalMatchesCount,
  totalPredictionsCount
}) => {
  // Close drawer on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const navItems = [
    {
      id: 'dashboard' as ActiveTab,
      label: 'Dashboard',
      icon: LayoutDashboard,
      badge: 'Live',
      badgeColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-400/30'
    },
    {
      id: 'jadwal' as ActiveTab,
      label: 'Jadwal Pertandingan',
      icon: CalendarDays,
      count: totalMatchesCount,
      badgeColor: 'bg-indigo-500/20 text-indigo-300 border-indigo-400/30'
    },
    {
      id: 'prediksi' as ActiveTab,
      label: 'Prediksi & Analisis',
      icon: Target,
      count: totalPredictionsCount,
      badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-400/30'
    },
    {
      id: 'parlay' as ActiveTab,
      label: 'Mix Parlay & Single',
      icon: Ticket,
      badge: 'Hot @85x',
      badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-400/30'
    },
    {
      id: 'testimoni' as ActiveTab,
      label: 'Testimoni & Bukti WD',
      icon: MessageSquareQuote,
      badge: '1.248+',
      badgeColor: 'bg-rose-500/20 text-rose-300 border-rose-400/30'
    },
    {
      id: 'transaksi' as ActiveTab,
      label: 'Live Transaksi Realtime',
      icon: ArrowLeftRight,
      badge: 'Auto WD',
      badgeColor: 'bg-green-500/20 text-green-300 border-green-400/30'
    }
  ];

  // Drawer Content Helper to share between desktop and mobile drawer
  const renderSidebarContent = (isMobileDrawer = false) => (
    <div className="h-full flex flex-col justify-between">
      <div>
        {/* Brand Header with Animated Shiny Logo */}
        <div className="flex items-center justify-between gap-2 mb-5 pb-4 border-b border-white/8">
          <div className="flex items-center gap-3">
            <img
              src={BRAND_LOGO_GIF}
              alt="KAPSUL4D Brand Logo"
              className="w-auto h-10 sm:h-11 object-contain drop-shadow-[0_0_18px_rgba(34,211,238,0.5)] transition-transform hover:scale-105"
            />
          </div>

          {isMobileDrawer && (
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-white/60 hover:text-white border border-white/10 transition-colors"
              aria-label="Tutup menu navigasi"
            >
              <X className="w-5 h-5 text-rose-400" />
            </motion.button>
          )}
        </div>

        {/* Navigation Header */}
        <div className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-white/35 px-3 mb-2.5 flex items-center justify-between">
          <span>Menu Utama</span>
          <span className="flex items-center gap-1 text-cyan-400 font-mono text-[9px]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
            Online
          </span>
        </div>

        {/* Navigation Links */}
        <nav className="space-y-1.5 overflow-y-auto max-h-[calc(100vh-320px)] pr-1 scrollbar-none">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;

            return (
              <motion.button
                key={item.id}
                initial={isMobileDrawer ? { opacity: 0, x: -16 } : false}
                animate={isMobileDrawer ? { opacity: 1, x: 0 } : false}
                transition={{ 
                  duration: 0.25, 
                  delay: isMobileDrawer ? index * 0.04 : 0,
                  ease: 'easeOut'
                }}
                whileHover={{ x: 3 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => {
                  setActiveTab(item.id);
                  if (isMobileDrawer) onClose();
                }}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl font-display text-xs font-bold transition-all text-left relative ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500/20 via-indigo-500/10 to-transparent text-white border border-cyan-400/35 shadow-[0_0_20px_rgba(34,211,238,0.15)]'
                    : 'text-white/60 hover:text-white hover:bg-white/[0.05] border border-transparent'
                }`}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div
                    className={`p-1.5 rounded-lg transition-colors ${
                      isActive
                        ? 'bg-cyan-400 text-black shadow-[0_0_12px_rgba(34,211,238,0.6)]'
                        : 'bg-white/5 text-white/60 group-hover:text-cyan-400 group-hover:bg-white/10'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="truncate">{item.label}</span>
                </div>

                {/* Badge or Counter */}
                {item.badge && (
                  <span className={`text-[9px] font-extrabold px-2 py-0.5 rounded-full border whitespace-nowrap ${item.badgeColor}`}>
                    {item.badge}
                  </span>
                )}
                {item.count !== undefined && (
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/5 text-white/40">
                    {item.count}
                  </span>
                )}
              </motion.button>
            );
          })}
        </nav>
      </div>

      {/* Bottom Promo & Support Section */}
      <div className="mt-4 pt-3 border-t border-white/8 space-y-3">
        {/* Quick VIP Promotion Card */}
        <div className="glass-panel p-3.5 rounded-2xl border-cyan-400/20 relative overflow-hidden bg-gradient-to-b from-cyan-950/40 via-[#070b16] to-[#04060d]">
          <div className="flex items-center gap-1.5 mb-1">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-[10px] font-black uppercase tracking-wider text-amber-300">
              VIP KAPSUL4D
            </span>
          </div>
          <div className="text-xs font-black text-white font-display">
            Bonus 100% & Cashback 10%
          </div>
          <p className="text-[10px] text-white/40 mt-1 leading-snug">
            Pasaran bola odds tertinggi dengan proses withdraw tercepat.
          </p>

          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
            href={OFFICIAL_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2.5 w-full py-2 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 text-[#05060c] font-black text-center text-xs flex items-center justify-center gap-1.5 shadow-[0_0_18px_rgba(34,211,238,0.3)] hover:brightness-110 transition-all font-display"
          >
            <span>GABUNG SEKARANG</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </motion.a>
        </div>

        {/* Quick CS Links */}
        <div className="flex items-center justify-between text-[10px] text-white/40 px-1">
          <span className="flex items-center gap-1 text-[10px]">
            <ShieldCheck className="w-3 h-3 text-emerald-400" /> Resmi 2026
          </span>
          <a
            href={OFFICIAL_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1 font-bold transition-colors"
          >
            <Headphones className="w-3 h-3 text-cyan-400" /> Livechat 24 Jam
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Permanent Sidebar */}
      <aside className="hidden lg:flex flex-col top-0 left-0 sticky h-screen w-64 xl:w-72 flex-shrink-0 bg-[#070913]/95 backdrop-blur-2xl border-r border-white/8 p-4 z-40">
        {renderSidebarContent(false)}
      </aside>

      {/* Mobile Animated Framer Motion Drawer */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              onClick={onClose}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Sliding Drawer Body */}
            <motion.aside
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ 
                type: 'spring', 
                damping: 26, 
                stiffness: 280,
                mass: 0.8
              }}
              className="relative w-4/5 max-w-xs h-full bg-[#080b18]/98 border-r border-cyan-400/30 p-4 shadow-[0_0_50px_rgba(0,0,0,0.8)] z-10 flex flex-col"
            >
              {renderSidebarContent(true)}
            </motion.aside>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
