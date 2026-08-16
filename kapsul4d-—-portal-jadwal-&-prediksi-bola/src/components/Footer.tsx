import React from 'react';
import { 
  ShieldCheck, 
  Headphones, 
  Lock, 
  Zap, 
  ExternalLink, 
  HeartHandshake,
  CheckCircle2
} from 'lucide-react';
import { BRAND_LOGO_GIF, OFFICIAL_LINK } from '../data/mockData';

export const Footer: React.FC = () => {
  const bankLogos = [
    'BCA', 'MANDIRI', 'BRI', 'BNI', 'CIMB NIAGA', 'PERMATA', 'QRIS AUTO', 'DANA', 'OVO', 'GOPAY', 'LINKAJA'
  ];

  return (
    <footer className="mt-12 pt-8 pb-12 border-t border-white/8 space-y-8 text-xs text-white/50">
      {/* Top Footer with Brand Info */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Brand Col */}
        <div className="md:col-span-2 space-y-3">
          <div className="flex items-center gap-3">
            <img
              src={BRAND_LOGO_GIF}
              alt="KAPSUL4D Logo"
              className="h-10 w-auto object-contain drop-shadow-[0_0_15px_rgba(34,211,238,0.4)]"
            />
          </div>
          <p className="text-white/60 leading-relaxed text-xs max-w-md">
            <b>KAPSUL4D</b> adalah portal jadwal pertandingan sepak bola, prediksi skor akurat, analisis statistik H2H, dan rekomendasi Mix Parlay terlengkap di Indonesia sejak 2019.
          </p>
          <div className="flex items-center gap-3 text-[11px] text-emerald-400 font-semibold">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-4 h-4" /> Enkripsi SSL 256-Bit
            </span>
            <span>·</span>
            <span className="flex items-center gap-1">
              <Lock className="w-4 h-4" /> Server Aman & Anti Blokir
            </span>
          </div>
        </div>

        {/* Quick Links Col */}
        <div className="space-y-2.5">
          <h4 className="text-xs font-black font-display text-white uppercase tracking-wider">
            Layanan Portal
          </h4>
          <ul className="space-y-1.5 text-white/60">
            <li><a href={OFFICIAL_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">Jadwal Bola Terlengkap 2026</a></li>
            <li><a href={OFFICIAL_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">Prediksi Skor & Handicap</a></li>
            <li><a href={OFFICIAL_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">Paket Mix Parlay Sultan</a></li>
            <li><a href={OFFICIAL_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">Bukti Pembayaran & WD Member</a></li>
          </ul>
        </div>

        {/* Support & Contact Col */}
        <div className="space-y-2.5">
          <h4 className="text-xs font-black font-display text-white uppercase tracking-wider">
            Bantuan 24/7
          </h4>
          <p className="text-white/60 text-xs">
            Layanan pelanggan siap membantu kendala deposit, withdraw, dan pendaftaran akun setiap saat.
          </p>
          <a
            href={OFFICIAL_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-cyan-400/15 text-cyan-300 border border-cyan-400/30 hover:bg-cyan-400/25 font-bold transition-all text-xs"
          >
            <Headphones className="w-4 h-4" />
            <span>Hubungi CS KAPSUL4D</span>
          </a>
        </div>
      </div>

      {/* Payment Gateway Badges */}
      <div className="pt-6 border-t border-white/5 space-y-2.5">
        <div className="text-[10px] font-bold uppercase tracking-wider text-white/40 text-center">
          Metode Pembayaran & Bank Deposit Otomatis
        </div>
        <div className="flex flex-wrap items-center justify-center gap-2">
          {bankLogos.map((bank, idx) => (
            <span
              key={idx}
              className="px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/8 text-[10px] font-mono font-bold text-white/60 hover:text-white hover:border-cyan-400/30 transition-colors"
            >
              {bank}
            </span>
          ))}
        </div>
      </div>

      {/* Copyright Bottom Bar */}
      <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left text-[11px] text-white/40">
        <div>
          &copy; 2026 <b>KAPSUL4D</b>. Hak Cipta Dilindungi Undang-Undang. Portal Informasi Jadwal & Statistik Sepak Bola.
        </div>
        <div className="flex items-center gap-3">
          <span className="px-2 py-0.5 rounded bg-rose-500/10 border border-rose-500/20 text-rose-300 font-bold text-[10px]">
            18+ Bermain Bertanggung Jawab
          </span>
          <a href={OFFICIAL_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
            Syarat & Ketentuan
          </a>
        </div>
      </div>
    </footer>
  );
};
