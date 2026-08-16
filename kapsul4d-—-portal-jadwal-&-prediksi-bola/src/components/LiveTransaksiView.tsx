import React, { useState, useEffect } from 'react';
import { 
  ArrowLeftRight, 
  ArrowDownLeft, 
  ArrowUpRight, 
  ShieldCheck, 
  Clock, 
  CheckCircle2, 
  Building2, 
  ExternalLink,
  Sparkles,
  Zap
} from 'lucide-react';
import { LiveTransaction } from '../types';
import { formatRupiah } from '../utils/helpers';
import { OFFICIAL_LINK, INITIAL_TRANSACTIONS } from '../data/mockData';

export const LiveTransaksiView: React.FC = () => {
  const [transactions, setTransactions] = useState<LiveTransaction[]>(INITIAL_TRANSACTIONS);
  const [filterType, setFilterType] = useState<'ALL' | 'WITHDRAW' | 'DEPOSIT'>('ALL');

  // Simulated live feed additions
  useEffect(() => {
    const randomUsers = ['den***92', 'bram***11', 'eko***44', 'yul***88', 'andre***77', 'sari***19', 'fau***65'];
    const randomMethods = ['BCA', 'MANDIRI', 'BRI', 'BNI', 'QRIS', 'DANA'];
    const randomAmountsWd = [3500000, 7800000, 15000000, 22500000, 48000000, 1200000];
    const randomAmountsDep = [100000, 250000, 500000, 1000000, 2000000];

    const interval = setInterval(() => {
      const isWd = Math.random() > 0.4;
      const newTx: LiveTransaction = {
        id: `tx-${Date.now()}`,
        type: isWd ? 'WITHDRAW' : 'DEPOSIT',
        user: randomUsers[Math.floor(Math.random() * randomUsers.length)],
        amount: isWd
          ? randomAmountsWd[Math.floor(Math.random() * randomAmountsWd.length)]
          : randomAmountsDep[Math.floor(Math.random() * randomAmountsDep.length)],
        method: randomMethods[Math.floor(Math.random() * randomMethods.length)],
        time: 'Baru saja',
        status: 'SUCCESS'
      };

      setTransactions((prev) => [newTx, ...prev.slice(0, 19)]);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const filteredTx = transactions.filter(t => filterType === 'ALL' || t.type === filterType);

  const bankStatus = [
    { name: 'BCA', online: true, speed: '1-3 Menit' },
    { name: 'Mandiri', online: true, speed: '1-2 Menit' },
    { name: 'BRI', online: true, speed: '2-4 Menit' },
    { name: 'BNI', online: true, speed: '1-3 Menit' },
    { name: 'QRIS Auto', online: true, speed: 'Instant (10 Detik)' },
    { name: 'E-Wallet (Dana, Ovo, Gopay)', online: true, speed: 'Instant' },
  ];

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Top Banner */}
      <div className="glass-panel p-5 sm:p-6 rounded-3xl border-cyan-400/20 bg-gradient-to-br from-[#0c1424] via-[#070914] to-[#04060d] space-y-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-400/15 border border-cyan-400/30 text-cyan-300 text-xs font-black uppercase tracking-wider mb-2 font-display">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span>LIVE TRANSAKSI OTOMATIS</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black font-display text-white">
              Arus Kas & Pembayaran Member Realtime
            </h2>
            <p className="text-xs text-white/60">
              Sistem perbankan otomatis 24 jam dengan proses deposit dan withdraw super kilat tanpa potongan.
            </p>
          </div>

          <a
            href={OFFICIAL_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary-gradient px-5 py-2.5 rounded-xl text-xs font-black flex items-center gap-2 shadow-[0_0_20px_rgba(34,211,238,0.3)] flex-shrink-0"
          >
            <span>DEPOSIT / WITHDRAW</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Bank Status Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2.5 pt-2">
          {bankStatus.map((b, idx) => (
            <div key={idx} className="p-2.5 rounded-xl bg-black/40 border border-white/5 space-y-1">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-white text-[11px]">{b.name}</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              </div>
              <div className="text-[9px] text-emerald-300 font-mono flex items-center gap-1">
                <Zap className="w-2.5 h-2.5 text-emerald-400" /> {b.speed}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-1.5 bg-black/40 p-1 rounded-xl border border-white/8">
          <button
            onClick={() => setFilterType('ALL')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
              filterType === 'ALL'
                ? 'bg-cyan-400 text-black shadow-[0_0_12px_rgba(34,211,238,0.3)]'
                : 'text-white/50 hover:text-white'
            }`}
          >
            Semua Transaksi
          </button>
          <button
            onClick={() => setFilterType('WITHDRAW')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
              filterType === 'WITHDRAW'
                ? 'bg-rose-400 text-black'
                : 'text-white/50 hover:text-white'
            }`}
          >
            💸 Penarikan (Withdraw)
          </button>
          <button
            onClick={() => setFilterType('DEPOSIT')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
              filterType === 'DEPOSIT'
                ? 'bg-emerald-400 text-black'
                : 'text-white/50 hover:text-white'
            }`}
          >
            💳 Setoran (Deposit)
          </button>
        </div>

        <span className="text-xs text-white/40 font-mono hidden sm:inline">
          Live stream update tiap 6 detik
        </span>
      </div>

      {/* Transactions Feed Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {filteredTx.map((tx) => {
          const isWd = tx.type === 'WITHDRAW';
          return (
            <div
              key={tx.id}
              className={`p-4 rounded-2xl glass-panel border transition-all flex items-center justify-between gap-3 ${
                isWd
                  ? 'border-rose-500/20 hover:border-rose-400/40 bg-gradient-to-r from-rose-950/10 to-transparent'
                  : 'border-emerald-500/20 hover:border-emerald-400/40 bg-gradient-to-r from-emerald-950/10 to-transparent'
              }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-xs flex-shrink-0 ${
                    isWd
                      ? 'bg-rose-500/15 text-rose-400 border border-rose-500/30'
                      : 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                  }`}
                >
                  {isWd ? <ArrowUpRight className="w-5 h-5" /> : <ArrowDownLeft className="w-5 h-5" />}
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-black text-white font-mono">{tx.user}</span>
                    <span
                      className={`text-[9px] font-extrabold px-1.5 py-0.2 rounded font-mono uppercase ${
                        isWd ? 'bg-rose-400/10 text-rose-300' : 'bg-emerald-400/10 text-emerald-300'
                      }`}
                    >
                      {tx.type}
                    </span>
                  </div>
                  <div className="text-[10px] text-white/40 flex items-center gap-1.5 mt-0.5">
                    <span>Via {tx.method}</span>
                    <span>·</span>
                    <span className="flex items-center gap-0.5 text-emerald-400">
                      <CheckCircle2 className="w-3 h-3" /> Berhasil
                    </span>
                  </div>
                </div>
              </div>

              <div className="text-right">
                <div
                  className={`text-sm sm:text-base font-black font-display font-mono ${
                    isWd ? 'text-rose-400' : 'text-emerald-400'
                  }`}
                >
                  {isWd ? '-' : '+'} {formatRupiah(tx.amount)}
                </div>
                <span className="text-[10px] text-white/30 font-mono">{tx.time}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
