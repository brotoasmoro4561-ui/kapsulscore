import React, { useState } from 'react';
import { 
  ActiveTab, 
  BetSlipItem, 
  Testimonial 
} from './types';
import { 
  MATCHES_DATA, 
  PREDICTIONS_DATA, 
  PARLAY_PACKAGES, 
  TESTIMONIALS_DATA 
} from './data/mockData';

import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { LiveTicker } from './components/LiveTicker';
import { PopupPromoModal } from './components/PopupPromoModal';
import { DashboardView } from './components/DashboardView';
import { JadwalView } from './components/JadwalView';
import { PrediksiView } from './components/PrediksiView';
import { ParlayView } from './components/ParlayView';
import { TestimoniView } from './components/TestimoniView';
import { LiveTransaksiView } from './components/LiveTransaksiView';
import { ParlaySlipDrawer } from './components/ParlaySlipDrawer';
import { Footer } from './components/Footer';

// ============================================================
// IMPORT KOMPONEN BARU
// ============================================================
import { ParticleBackground } from './components/ParticleBackground';

// ============================================================
// IMPORT CSS PREMIUM EFFECTS - Pastikan index.css sudah diupdate
// ============================================================
import './index.css';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSlipOpen, setIsSlipOpen] = useState(false);
  const [slipItems, setSlipItems] = useState<BetSlipItem[]>([]);
  const [highlightMatchId, setHighlightMatchId] = useState<string | null>(null);
  const [testimonials, setTestimonials] = useState<Testimonial[]>(TESTIMONIALS_DATA);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Add Item to Slip Handler
  const handleAddToSlip = (item: BetSlipItem) => {
    setSlipItems((prev) => {
      // Check if match already in slip
      const exists = prev.some((it) => it.matchId === item.matchId);
      if (exists) {
        // replace pick
        return prev.map((it) => (it.matchId === item.matchId ? item : it));
      }
      return [...prev, item];
    });

    setToastMessage(`✓ Berhasil ditambahkan ke Slip: ${item.match.home} vs ${item.match.away}`);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleRemoveSlipItem = (matchId: string) => {
    setSlipItems((prev) => prev.filter((it) => it.matchId !== matchId));
  };

  const handleClearSlip = () => {
    setSlipItems([]);
  };

  const handleViewPrediction = (matchId: string) => {
    setHighlightMatchId(matchId);
    setActiveTab('prediksi');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAddTestimonial = (newTesti: Testimonial) => {
    setTestimonials((prev) => [newTesti, ...prev]);
    setToastMessage('✓ Ulasan & bukti transaksi Anda berhasil diterbitkan!');
    setTimeout(() => setToastMessage(null), 3500);
  };

  // Header Titles lookup
  const metaLookup: Record<ActiveTab, { title: string; subtitle: string }> = {
    dashboard: {
      title: 'Dashboard KAPSUL4D',
      subtitle: 'Ringkasan jadwal, prediksi skor akurat, dan live transaksi'
    },
    jadwal: {
      title: 'Jadwal Pertandingan Bola 2026',
      subtitle: 'Update terlengkap dari Liga Spanyol, Inggris, Jerman, Belanda, hingga Amerika'
    },
    prediksi: {
      title: 'Prediksi Skor & Analisis Taktis',
      subtitle: 'Analisis statistik H2H dan persentase probabilitas kemenangan'
    },
    parlay: {
      title: 'Mix Parlay & Single Bet Rekomendasi',
      subtitle: 'Kombinasi tiket odds tinggi dengan kalkulator kemenangan instan'
    },
    testimoni: {
      title: 'Testimoni & Bukti WD Member',
      subtitle: 'Cerita nyata kepuasan dan pembayaran withdraw dari member KAPSUL4D'
    },
    transaksi: {
      title: 'Live Transaksi Realtime',
      subtitle: 'Arus transaksi deposit dan withdraw otomatis 24 jam'
    }
  };

  return (
    <div className="relative min-h-screen bg-[#05060c] text-[#eef2fb] flex flex-col selection:bg-cyan-500 selection:text-black">
      
      {/* ============================================================
          PARTICLE BACKGROUND - LAYER PALING BAWAH
          ============================================================ */}
      <ParticleBackground />

      {/* ============================================================
          BACKGROUND AMBIENCE & CYBER GRID - LAYER KEDUA
          ============================================================ */}
      <div className="bg-ambient-blob">
        <span className="blob-1" />
        <span className="blob-2" />
        <span className="blob-3" />
      </div>
      <div className="bg-cyber-grid" />

      {/* ============================================================
          TOAST NOTIFICATION
          ============================================================ */}
      {toastMessage && (
        <div className="fixed bottom-5 right-5 z-50 px-4 py-3 rounded-2xl bg-[#091224] border border-cyan-400/40 text-cyan-200 text-xs font-bold shadow-[0_0_30px_rgba(34,211,238,0.3)] flex items-center gap-2 animate-in slide-in-from-bottom-5 duration-300">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* ============================================================
          OFFICIAL PROMO POPUP MODAL
          ============================================================ */}
      <PopupPromoModal />

      {/* ============================================================
          MAIN LAYOUT - DENGAN Z-INDEX DI ATAS PARTICLE
          ============================================================ */}
      <div className="relative z-10 flex flex-1 min-h-screen">
        
        {/* Responsive Sidebar */}
        <Sidebar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          totalMatchesCount={MATCHES_DATA.length}
          totalPredictionsCount={PREDICTIONS_DATA.length}
        />

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col min-w-0">
          {/* Header */}
          <Header
            onToggleSidebar={() => setIsSidebarOpen((prev) => !prev)}
            title={metaLookup[activeTab].title}
            subtitle={metaLookup[activeTab].subtitle}
            slipItems={slipItems}
            onOpenSlip={() => setIsSlipOpen(true)}
          />

          <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto">
            {/* Realtime Marquee Ticker */}
            <LiveTicker matches={MATCHES_DATA} />

            {/* Dynamic Views */}
            {activeTab === 'dashboard' && (
              <DashboardView
                matches={MATCHES_DATA}
                predictions={PREDICTIONS_DATA}
                parlayPackages={PARLAY_PACKAGES}
                testimonials={testimonials}
                onSelectTab={setActiveTab}
                onAddToSlip={handleAddToSlip}
              />
            )}

            {activeTab === 'jadwal' && (
              <JadwalView
                matches={MATCHES_DATA}
                predictions={PREDICTIONS_DATA}
                onAddToSlip={handleAddToSlip}
                onViewPrediction={handleViewPrediction}
              />
            )}

            {activeTab === 'prediksi' && (
              <PrediksiView
                predictions={PREDICTIONS_DATA}
                matches={MATCHES_DATA}
                onAddToSlip={handleAddToSlip}
                highlightMatchId={highlightMatchId}
              />
            )}

            {activeTab === 'parlay' && (
              <ParlayView
                parlayPackages={PARLAY_PACKAGES}
                predictions={PREDICTIONS_DATA}
                matches={MATCHES_DATA}
                onAddToSlip={handleAddToSlip}
              />
            )}

            {activeTab === 'testimoni' && (
              <TestimoniView
                testimonials={testimonials}
                onAddTestimonial={handleAddTestimonial}
              />
            )}

            {activeTab === 'transaksi' && (
              <LiveTransaksiView />
            )}

            {/* Footer */}
            <Footer />
          </main>
        </div>
      </div>

      {/* Interactive Floating Parlay Slip Drawer */}
      <ParlaySlipDrawer
        isOpen={isSlipOpen}
        onClose={() => setIsSlipOpen(false)}
        items={slipItems}
        onRemoveItem={handleRemoveSlipItem}
        onClearAll={handleClearSlip}
      />
    </div>
  );
}
