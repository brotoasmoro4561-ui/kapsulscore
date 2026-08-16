import React, { useState } from 'react';
import { 
  MessageSquareQuote, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  DollarSign, 
  Trophy, 
  Gift, 
  Send, 
  Star,
  Users,
  Building2,
  ExternalLink,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Testimonial } from '../types';
import { formatRupiah } from '../utils/helpers';
import { OFFICIAL_LINK } from '../data/mockData';

interface TestimoniViewProps {
  testimonials: Testimonial[];
  onAddTestimonial: (testi: Testimonial) => void;
}

export const TestimoniView: React.FC<TestimoniViewProps> = ({
  testimonials,
  onAddTestimonial
}) => {
  const [filterType, setFilterType] = useState<'all' | 'wd' | 'jp' | 'bonus' | 'win'>('all');
  const [showSubmitModal, setShowSubmitModal] = useState(false);

  // Form State for User Feedback Submission
  const [formName, setFormName] = useState('');
  const [formCity, setFormCity] = useState('');
  const [formType, setFormType] = useState<'wd' | 'jp' | 'bonus' | 'win'>('wd');
  const [formAmount, setFormAmount] = useState('');
  const [formText, setFormText] = useState('');
  const [formStars, setFormStars] = useState(5);
  const [formBank, setFormBank] = useState('BCA');

  const filteredTestimonials = testimonials.filter((t) => {
    if (filterType === 'all') return true;
    return t.type === filterType;
  });

  const totalWdSum = testimonials.reduce((acc, t) => (t.type === 'wd' ? acc + t.amount : acc), 0);
  const totalJpCount = testimonials.filter(t => t.type === 'jp').length;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName.trim() || !formText.trim()) return;

    const newTestimonial: Testimonial = {
      id: `t-user-${Date.now()}`,
      user: formName.trim(),
      city: formCity.trim() || 'Indonesia',
      type: formType,
      amount: Number(formAmount) || 5000000,
      text: formText.trim(),
      stars: formStars,
      time: 'Baru saja',
      avatarColor: formType === 'wd' ? 'green' : formType === 'jp' ? 'amber' : 'purple',
      bank: formBank,
      verified: true
    };

    onAddTestimonial(newTestimonial);
    setShowSubmitModal(false);
    setFormName('');
    setFormCity('');
    setFormAmount('');
    setFormText('');
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Testimonial Stats Summary Banner */}
      <div className="glass-panel p-5 sm:p-6 rounded-3xl border-emerald-400/20 bg-gradient-to-br from-emerald-950/20 via-[#070b14] to-[#04060d] space-y-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-400/15 border border-emerald-400/30 text-emerald-300 text-xs font-black uppercase tracking-wider mb-2 font-display">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>TESTIMONI RESMI KAPSUL4D</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black font-display text-white">
              Bukti Pembayaran & Kepuasan Member
            </h2>
            <p className="text-xs text-white/60">
              Ribuan member telah merasakan kemenangan nyata, withdraw cepat tanpa penundaan, dan pelayanan CS profesional 24 jam.
            </p>
          </div>

          <button
            onClick={() => setShowSubmitModal(true)}
            className="btn-primary-gradient px-4 py-2.5 rounded-xl text-xs font-black flex items-center gap-2 shadow-[0_0_20px_rgba(34,211,238,0.3)] flex-shrink-0"
          >
            <Sparkles className="w-4 h-4" />
            <span>+ Kirim Testimoni Anda</span>
          </button>
        </div>

        {/* 4 Metrics Counter */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 pt-2">
          <div className="p-3.5 rounded-2xl bg-black/40 border border-white/5">
            <div className="text-[10px] uppercase font-bold text-white/40">Total Withdraw Terbayar</div>
            <div className="text-lg sm:text-xl font-black font-display text-emerald-400 mt-0.5">
              {formatRupiah(totalWdSum)}
            </div>
            <span className="text-[9px] text-white/30">Proses Rata-rata 2-5 Menit</span>
          </div>

          <div className="p-3.5 rounded-2xl bg-black/40 border border-white/5">
            <div className="text-[10px] uppercase font-bold text-white/40">Member Menang Jackpot</div>
            <div className="text-lg sm:text-xl font-black font-display text-amber-400 mt-0.5">
              {totalJpCount * 18}+ Pemenang
            </div>
            <span className="text-[9px] text-white/30">Odds Tembus hingga @85x</span>
          </div>

          <div className="p-3.5 rounded-2xl bg-black/40 border border-white/5">
            <div className="text-[10px] uppercase font-bold text-white/40">Member Puas</div>
            <div className="text-lg sm:text-xl font-black font-display text-cyan-300 mt-0.5">
              1.248+ Akun
            </div>
            <span className="text-[9px] text-white/30">Dari Seluruh Indonesia</span>
          </div>

          <div className="p-3.5 rounded-2xl bg-black/40 border border-white/5">
            <div className="text-[10px] uppercase font-bold text-white/40">Rating Kepuasan</div>
            <div className="text-lg sm:text-xl font-black font-display text-amber-300 mt-0.5">
              4.9 / 5.0 ⭐
            </div>
            <span className="text-[9px] text-white/30">99.4% Member Rekomendasikan</span>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
        <button
          onClick={() => setFilterType('all')}
          className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
            filterType === 'all'
              ? 'bg-cyan-400 text-black shadow-[0_0_12px_rgba(34,211,238,0.3)]'
              : 'bg-white/5 text-white/60 hover:text-white hover:bg-white/10'
          }`}
        >
          Semua Ulasan ({testimonials.length})
        </button>
        <button
          onClick={() => setFilterType('wd')}
          className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
            filterType === 'wd'
              ? 'bg-emerald-400 text-black'
              : 'bg-white/5 text-white/60 hover:text-white'
          }`}
        >
          💸 Bukti Withdraw Cepat
        </button>
        <button
          onClick={() => setFilterType('jp')}
          className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
            filterType === 'jp'
              ? 'bg-amber-400 text-black'
              : 'bg-white/5 text-white/60 hover:text-white'
          }`}
        >
          🏆 Menang Jackpot & Parlay
        </button>
        <button
          onClick={() => setFilterType('bonus')}
          className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
            filterType === 'bonus'
              ? 'bg-purple-400 text-black'
              : 'bg-white/5 text-white/60 hover:text-white'
          }`}
        >
          🎁 Klaim Bonus Member
        </button>
      </div>

      {/* Testimonials List */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        <AnimatePresence mode="popLayout">
          {filteredTestimonials.map((t, index) => (
            <motion.div
              key={t.id}
              layout
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
              transition={{
                duration: 0.35,
                delay: Math.min(index * 0.03, 0.25),
                ease: [0.22, 1, 0.36, 1]
              }}
              whileHover={{ 
                y: -3, 
                transition: { duration: 0.2 } 
              }}
              className="glass-panel p-5 rounded-2xl border-white/8 hover:border-emerald-400/40 hover:shadow-[0_8px_30px_rgba(0,0,0,0.35)] transition-colors flex flex-col justify-between gap-3 relative overflow-hidden group"
            >
              <div className="relative z-10">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 text-black font-black text-sm flex items-center justify-center font-display shadow-md group-hover:scale-105 transition-transform">
                      {t.user.charAt(0)}
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5 text-xs font-black text-white font-display">
                        <span>{t.user}</span>
                        {t.verified && (
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 inline" title="Member Terverifikasi" />
                        )}
                      </div>
                      <div className="text-[10px] text-white/40 flex items-center gap-1 mt-0.5">
                        <span>{t.city}</span>
                        {t.bank && <span>· Via {t.bank}</span>}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-end gap-1">
                    <span
                      className={`text-[9px] font-extrabold px-2 py-0.5 rounded-md border uppercase tracking-wider ${
                        t.type === 'wd'
                          ? 'bg-emerald-400/10 text-emerald-300 border-emerald-400/20'
                          : t.type === 'jp'
                          ? 'bg-amber-400/10 text-amber-300 border-amber-400/20'
                          : 'bg-purple-400/10 text-purple-300 border-purple-400/20'
                      }`}
                    >
                      {t.type === 'wd' ? '💸 WD Sukses' : t.type === 'jp' ? '🏆 Jackpot' : '🎁 Bonus'}
                    </span>
                    <div className="text-[10px] text-amber-400">
                      {'⭐'.repeat(t.stars)}
                    </div>
                  </div>
                </div>

                <p className="text-xs text-white/80 italic leading-relaxed mt-2.5">
                  "{t.text}"
                </p>
              </div>

              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs relative z-10">
                <div>
                  <span className="text-[10px] text-white/40 block">Nominal Transaksi:</span>
                  <span className="font-mono font-black text-emerald-400 text-sm">
                    {formatRupiah(t.amount)}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-white/40">{t.time}</span>
                  <a
                    href={OFFICIAL_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2.5 py-1 rounded-lg bg-cyan-400/15 text-cyan-300 font-bold text-[10px] hover:bg-cyan-400/25 transition-colors flex items-center gap-1 active:scale-95"
                  >
                    <span>Daftar</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Modal Submit Testimonial */}
      <AnimatePresence>
        {showSubmitModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Modal Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowSubmitModal(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            />

            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 15 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="w-full max-w-md glass-panel p-6 rounded-3xl border-cyan-400/30 bg-[#090d1a] relative z-10 shadow-[0_10px_40px_rgba(0,0,0,0.8)]"
            >
              <div className="flex items-center justify-between mb-1">
                <h3 className="text-base font-black font-display text-white">
                  Kirim Ulasan & Bukti Kemenangan
                </h3>
                <button
                  onClick={() => setShowSubmitModal(false)}
                  className="p-1 rounded-lg bg-white/5 hover:bg-white/10 text-white/50 hover:text-white transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <p className="text-xs text-white/50 mb-4">
                Bagikan pengalaman bermain Anda bersama KAPSUL4D ke komunitas.
              </p>

              <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                  <label className="text-[11px] font-bold text-white/70 block mb-1">Nama / Inisial</label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Andi Wijaya"
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:outline-none focus:border-cyan-400/50"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="text-[11px] font-bold text-white/70 block mb-1">Kota / Domisili</label>
                    <input
                      type="text"
                      placeholder="Contoh: Surabaya"
                      value={formCity}
                      onChange={(e) => setFormCity(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:outline-none focus:border-cyan-400/50"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-bold text-white/70 block mb-1">Kategori</label>
                    <select
                      value={formType}
                      onChange={(e) => setFormType(e.target.value as any)}
                      className="w-full px-3 py-2 rounded-xl bg-[#0e1428] border border-white/10 text-white text-xs focus:outline-none focus:border-cyan-400/50"
                    >
                      <option value="wd">💸 Withdraw Cepat</option>
                      <option value="jp">🏆 Jackpot / Parlay</option>
                      <option value="bonus">🎁 Bonus / Cashback</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-bold text-white/70 block mb-1">Nominal Menang / WD (Rp)</label>
                  <input
                    type="number"
                    placeholder="5000000"
                    value={formAmount}
                    onChange={(e) => setFormAmount(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-xs font-mono focus:outline-none focus:border-cyan-400/50"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-bold text-white/70 block mb-1">Pesan / Testimoni</label>
                  <textarea
                    required
                    rows={3}
                    placeholder="Tulis ulasan Anda mengenai kecepatan proses transaksi atau pelayanan KAPSUL4D..."
                    value={formText}
                    onChange={(e) => setFormText(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:outline-none focus:border-cyan-400/50 resize-none"
                  />
                </div>

                <div className="flex items-center justify-end gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowSubmitModal(false)}
                    className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs font-semibold transition-colors"
                  >
                    Batal
                  </button>
                  <button
                    type="submit"
                    className="btn-primary-gradient px-5 py-2 rounded-xl text-xs font-black flex items-center gap-1.5 active:scale-95"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Kirim Ulasan</span>
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
