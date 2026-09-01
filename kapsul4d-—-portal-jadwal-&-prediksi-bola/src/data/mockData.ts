import { Match, Prediction, ParlayPackage, Testimonial, LiveTransaction } from '../types';

export const OFFICIAL_LINK = "https://akseslink.com/kapsul4d";
export const BRAND_LOGO_GIF = "https://ik.imagekit.io/8btthcfrf/Uploud/KAPSUL4D_shine_bubbles.gif?updatedAt=1786252273564";
export const BRAND_BANNER_GIF = "https://ik.imagekit.io/8btthcfrf/Uploud/KAPSUL4D.gif";
export const POPUP_BANNER_IMG = "https://ik.imagekit.io/8btthcfrf/Uploud/e6a972c6-4920-468c-80d6-aefa22558ede_11zon.png?updatedAt=1786668230036";
export const BALL_ICON = "https://ik.imagekit.io/8btthcfrf/Uploud/Logo%20Bola%20k4d.png";

export const MATCHES_DATA: Match[] = [
  // ==================== 1 SEPTEMBER 2026 ====================

  // ITALY CUP
  {
    id: 'm1',
    date: '01/09',
    time: '00:00',
    league: '🇮🇹 Coppa Italia',
    leagueFlag: '🇮🇹',
    home: 'Parma',
    away: 'Cremonese',
    tag: 'Coppa Italia',
    stadium: 'Stadio Ennio Tardini',
    homeForm: ['W', 'L', 'D', 'W', 'L'],
    awayForm: ['D', 'W', 'L', 'D', 'W'],
    homeRank: 0,
    awayRank: 0,
    handicap: '0 : 1/4'
  },


  // ==================== 2 SEPTEMBER 2026 ====================

  // SWISS SUPER LEAGUE
  {
    id: 'm2',
    date: '02/09',
    time: '02:30',
    league: '🇨🇭 Swiss Super League',
    leagueFlag: '🇨🇭',
    home: 'Zurich',
    away: 'Young Boys',
    tag: 'Super League',
    stadium: 'Letzigrund Stadion',
    homeForm: ['W', 'D', 'L', 'W', 'D'],
    awayForm: ['W', 'W', 'D', 'L', 'W'],
    homeRank: 4,
    awayRank: 1,
    handicap: '1 : 0'
  },

  // ENGLISH CHAMPIONSHIP
  {
    id: 'm3',
    date: '02/09',
    time: '02:45',
    league: '🏴󠁧󠁢󠁥󠁮󠁧󠁿 Championship',
    leagueFlag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
    home: 'Lincoln City',
    away: 'Blackburn Rovers',
    tag: 'Championship',
    stadium: 'LNER Stadium',
    homeForm: ['W', 'D', 'L', 'W', 'D'],
    awayForm: ['D', 'W', 'L', 'D', 'W'],
    homeRank: 12,
    awayRank: 8,
    handicap: '0 : 1/4'
  },
  {
    id: 'm4',
    date: '02/09',
    time: '02:45',
    league: '🏴󠁧󠁢󠁥󠁮󠁧󠁿 Championship',
    leagueFlag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
    home: 'Portsmouth',
    away: 'Derby County',
    tag: 'Championship',
    stadium: 'Fratton Park',
    homeForm: ['W', 'L', 'D', 'W', 'L'],
    awayForm: ['L', 'W', 'D', 'L', 'W'],
    homeRank: 10,
    awayRank: 11,
    handicap: '0 : 1/4'
  },
  {
    id: 'm5',
    date: '02/09',
    time: '02:45',
    league: '🏴󠁧󠁢󠁥󠁮󠁧󠁿 Championship',
    leagueFlag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
    home: 'Preston North End',
    away: 'Bristol City',
    tag: 'Championship',
    stadium: 'Deepdale',
    homeForm: ['D', 'W', 'L', 'D', 'W'],
    awayForm: ['L', 'D', 'W', 'L', 'D'],
    homeRank: 15,
    awayRank: 13,
    handicap: '0 : 0'
  },
  {
    id: 'm6',
    date: '02/09',
    time: '02:45',
    league: '🏴󠁧󠁢󠁥󠁮󠁧󠁿 Championship',
    leagueFlag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
    home: 'Sheffield United',
    away: 'Bolton Wanderers',
    tag: 'Championship',
    stadium: 'Bramall Lane',
    homeForm: ['W', 'W', 'D', 'L', 'W'],
    awayForm: ['L', 'D', 'W', 'L', 'D'],
    homeRank: 3,
    awayRank: 18,
    handicap: '0 : 3/4'
  },
  {
    id: 'm7',
    date: '02/09',
    time: '02:45',
    league: '🏴󠁧󠁢󠁥󠁮󠁧󠁿 Championship',
    leagueFlag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
    home: 'Swansea City',
    away: 'Watford',
    tag: 'Championship',
    stadium: 'Swansea.com Stadium',
    homeForm: ['W', 'D', 'L', 'W', 'D'],
    awayForm: ['W', 'W', 'D', 'L', 'W'],
    homeRank: 9,
    awayRank: 5,
    handicap: '0 : 1/2'
  },
  {
    id: 'm8',
    date: '02/09',
    time: '02:45',
    league: '🏴󠁧󠁢󠁥󠁮󠁧󠁿 Championship',
    leagueFlag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
    home: 'West Ham United',
    away: 'Wolverhampton Wanderers',
    tag: 'Championship',
    stadium: 'London Stadium',
    homeForm: ['W', 'W', 'D', 'L', 'W'],
    awayForm: ['W', 'L', 'D', 'W', 'L'],
    homeRank: 1,
    awayRank: 16,
    handicap: '0 : 1/2'
  },
  {
    id: 'm9',
    date: '02/09',
    time: '03:00',
    league: '🏴󠁧󠁢󠁥󠁮󠁧󠁿 Championship',
    leagueFlag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
    home: 'Birmingham City',
    away: 'Southampton',
    tag: 'Championship',
    stadium: 'St Andrew\'s',
    homeForm: ['W', 'W', 'D', 'L', 'W'],
    awayForm: ['W', 'W', 'D', 'L', 'W'],
    homeRank: 4,
    awayRank: 2,
    handicap: '0 : 0'
  },
  {
    id: 'm10',
    date: '02/09',
    time: '03:00',
    league: '🏴󠁧󠁢󠁥󠁮󠁧󠁿 Championship',
    leagueFlag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
    home: 'Stoke City',
    away: 'Norwich City',
    tag: 'Championship',
    stadium: 'Bet365 Stadium',
    homeForm: ['W', 'D', 'L', 'W', 'D'],
    awayForm: ['W', 'W', 'D', 'L', 'W'],
    homeRank: 7,
    awayRank: 6,
    handicap: '1/4 : 0'
  },

  // ITALY CUP
  {
    id: 'm11',
    date: '02/09',
    time: '03:00',
    league: '🇮🇹 Coppa Italia',
    leagueFlag: '🇮🇹',
    home: 'Torino',
    away: 'Monza',
    tag: 'Coppa Italia',
    stadium: 'Stadio Olimpico Grande Torino',
    homeForm: ['W', 'D', 'L', 'W', 'D'],
    awayForm: ['L', 'D', 'L', 'W', 'L'],
    homeRank: 0,
    awayRank: 0,
    handicap: '0 : 1/2'
  }
];

export const PREDICTIONS_DATA: Prediction[] = [
  // ==================== 1 SEPTEMBER 2026 ====================

  {
    id: 'p1',
    matchId: 'm1',
    league: '🇮🇹 Coppa Italia',
    home: 'Parma',
    away: 'Cremonese',
    score: '1 - 1',
    confidence: 'mid',
    confidencePct: 54,
    homeProb: 34,
    drawProb: 36,
    awayProb: 30,
    pick: 'DRAW',
    pickLabel: 'Draw / Under 2.5',
    odds: 2.20,
    overUnder: 'Under 2.5',
    btts: 'YES',
    note: 'Kedua tim berimbang di ajang Coppa Italia.',
    h2hSummary: '2 dari 3 pertemuan berakhir imbang.',
    keyPlayer: 'Dennis Man'
  },


  // ==================== 2 SEPTEMBER 2026 ====================

  {
    id: 'p2',
    matchId: 'm2',
    league: '🇨🇭 Swiss Super League',
    home: 'Zurich',
    away: 'Young Boys',
    score: '1 - 2',
    confidence: 'high',
    confidencePct: 72,
    homeProb: 22,
    drawProb: 24,
    awayProb: 54,
    pick: 'AWAY',
    pickLabel: 'Young Boys Win',
    odds: 1.62,
    overUnder: 'Over 2.5',
    btts: 'YES',
    note: 'Young Boys adalah pemuncak klasemen Swiss Super League dengan skuad bintang.',
    h2hSummary: 'Young Boys menang 3 dari 4 pertemuan terakhir.',
    keyPlayer: 'Jean-Pierre Nsame'
  },
  {
    id: 'p3',
    matchId: 'm3',
    league: '🏴󠁧󠁢󠁥󠁮󠁧󠁿 Championship',
    home: 'Lincoln City',
    away: 'Blackburn Rovers',
    score: '1 - 1',
    confidence: 'mid',
    confidencePct: 54,
    homeProb: 34,
    drawProb: 36,
    awayProb: 30,
    pick: 'DRAW',
    pickLabel: 'Draw / Under 2.5',
    odds: 2.20,
    overUnder: 'Under 2.5',
    btts: 'YES',
    note: 'Kedua tim berimbang di papan tengah Championship.',
    h2hSummary: '2 dari 3 pertemuan berakhir imbang.',
    keyPlayer: 'Jack Diamond'
  },
  {
    id: 'p4',
    matchId: 'm4',
    league: '🏴󠁧󠁢󠁥󠁮󠁧󠁿 Championship',
    home: 'Portsmouth',
    away: 'Derby County',
    score: '1 - 1',
    confidence: 'mid',
    confidencePct: 52,
    homeProb: 34,
    drawProb: 36,
    awayProb: 30,
    pick: 'DRAW',
    pickLabel: 'Draw / Under 2.5',
    odds: 2.25,
    overUnder: 'Under 2.5',
    btts: 'YES',
    note: 'Kedua tim berimbang di papan tengah Championship.',
    h2hSummary: '2 dari 3 pertemuan berakhir imbang.',
    keyPlayer: 'Colby Bishop'
  },
  {
    id: 'p5',
    matchId: 'm5',
    league: '🏴󠁧󠁢󠁥󠁮󠁧󠁿 Championship',
    home: 'Preston North End',
    away: 'Bristol City',
    score: '1 - 1',
    confidence: 'mid',
    confidencePct: 52,
    homeProb: 34,
    drawProb: 36,
    awayProb: 30,
    pick: 'DRAW',
    pickLabel: 'Draw / Under 2.5',
    odds: 2.25,
    overUnder: 'Under 2.5',
    btts: 'YES',
    note: 'Kedua tim berimbang di papan bawah Championship.',
    h2hSummary: '2 dari 3 pertemuan berakhir imbang.',
    keyPlayer: 'Emil Riis'
  },
  {
    id: 'p6',
    matchId: 'm6',
    league: '🏴󠁧󠁢󠁥󠁮󠁧󠁿 Championship',
    home: 'Sheffield United',
    away: 'Bolton Wanderers',
    score: '2 - 0',
    confidence: 'high',
    confidencePct: 72,
    homeProb: 68,
    drawProb: 18,
    awayProb: 14,
    pick: 'HOME',
    pickLabel: 'Sheffield United Win to Nil',
    odds: 1.68,
    overUnder: 'Under 2.5',
    btts: 'NO',
    note: 'Sheffield United adalah tim papan atas Championship dan target promosi.',
    h2hSummary: 'Sheffield United menang 3 dari 4 pertemuan terakhir.',
    keyPlayer: 'Oliver McBurnie'
  },
  {
    id: 'p7',
    matchId: 'm7',
    league: '🏴󠁧󠁢󠁥󠁮󠁧󠁿 Championship',
    home: 'Swansea City',
    away: 'Watford',
    score: '2 - 1',
    confidence: 'mid',
    confidencePct: 60,
    homeProb: 46,
    drawProb: 28,
    awayProb: 26,
    pick: 'HOME',
    pickLabel: 'Swansea City Win',
    odds: 1.95,
    overUnder: 'Over 2.5',
    btts: 'YES',
    note: 'Swansea City bermain di kandang dengan performa konsisten.',
    h2hSummary: 'Swansea menang 2 dari 3 pertemuan terakhir.',
    keyPlayer: 'Jamie Paterson'
  },
  {
    id: 'p8',
    matchId: 'm8',
    league: '🏴󠁧󠁢󠁥󠁮󠁧󠁿 Championship',
    home: 'West Ham United',
    away: 'Wolverhampton Wanderers',
    score: '2 - 1',
    confidence: 'high',
    confidencePct: 70,
    homeProb: 66,
    drawProb: 20,
    awayProb: 14,
    pick: 'HOME',
    pickLabel: 'West Ham United Win',
    odds: 1.68,
    overUnder: 'Over 2.5',
    btts: 'YES',
    note: 'West Ham adalah pemuncak klasemen Championship dengan skuad bintang.',
    h2hSummary: 'West Ham menang 3 dari 4 pertemuan terakhir.',
    keyPlayer: 'Jarrod Bowen'
  },
  {
    id: 'p9',
    matchId: 'm9',
    league: '🏴󠁧󠁢󠁥󠁮󠁧󠁿 Championship',
    home: 'Birmingham City',
    away: 'Southampton',
    score: '1 - 1',
    confidence: 'mid',
    confidencePct: 54,
    homeProb: 34,
    drawProb: 36,
    awayProb: 30,
    pick: 'DRAW',
    pickLabel: 'Draw / Under 2.5',
    odds: 2.20,
    overUnder: 'Under 2.5',
    btts: 'YES',
    note: 'Laga sengit antara dua tim papan atas Championship.',
    h2hSummary: '2 dari 3 pertemuan berakhir imbang.',
    keyPlayer: 'Scott Hogan'
  },
  {
    id: 'p10',
    matchId: 'm10',
    league: '🏴󠁧󠁢󠁥󠁮󠁧󠁿 Championship',
    home: 'Stoke City',
    away: 'Norwich City',
    score: '1 - 0',
    confidence: 'mid',
    confidencePct: 56,
    homeProb: 44,
    drawProb: 32,
    awayProb: 24,
    pick: 'HOME',
    pickLabel: 'Stoke City Win',
    odds: 2.10,
    overUnder: 'Under 2.5',
    btts: 'NO',
    note: 'Stoke City bermain di kandang dengan pertahanan solid.',
    h2hSummary: 'Stoke menang 2 dari 3 pertemuan terakhir.',
    keyPlayer: 'Tyrese Campbell'
  },
  {
    id: 'p11',
    matchId: 'm11',
    league: '🇮🇹 Coppa Italia',
    home: 'Torino',
    away: 'Monza',
    score: '2 - 0',
    confidence: 'high',
    confidencePct: 72,
    homeProb: 68,
    drawProb: 18,
    awayProb: 14,
    pick: 'HOME',
    pickLabel: 'Torino Win to Nil',
    odds: 1.68,
    overUnder: 'Under 2.5',
    btts: 'NO',
    note: 'Torino adalah tim Serie A dengan skuad berkualitas, Monza tim papan bawah.',
    h2hSummary: 'Torino menang 2 dari 3 pertemuan terakhir.',
    keyPlayer: 'Antonio Sanabria'
  }
];

export const PARLAY_PACKAGES: ParlayPackage[] = [
  {
    id: 'pkg-1',
    title: '👑 SULTAN MIX PARLAY (3-TIM SUPER ACCURATE)',
    source: 'Rekomendasi Utama KAPSUL4D VIP',
    badge: 'Akurasi 82%',
    totalOdds: 4.88,
    riskLevel: 'Aman',
    legs: [
      {
        match: MATCHES_DATA.find(m => m.id === 'm6')!,
        prediction: PREDICTIONS_DATA.find(p => p.matchId === 'm6')!,
        odds: 1.68,
        pick: 'Sheffield United Menang'
      },
      {
        match: MATCHES_DATA.find(m => m.id === 'm8')!,
        prediction: PREDICTIONS_DATA.find(p => p.matchId === 'm8')!,
        odds: 1.68,
        pick: 'West Ham United Menang'
      },
      {
        match: MATCHES_DATA.find(m => m.id === 'm11')!,
        prediction: PREDICTIONS_DATA.find(p => p.matchId === 'm11')!,
        odds: 1.68,
        pick: 'Torino Menang'
      }
    ]
  },
  {
    id: 'pkg-2',
    title: '⚡ BIG MATCH WEEKEND COMBO (3-TIM TINGGI)',
    source: 'Kombinasi Liga Top Eropa',
    badge: 'Odds @6.45x',
    totalOdds: 6.45,
    riskLevel: 'Sedang',
    legs: [
      {
        match: MATCHES_DATA.find(m => m.id === 'm2')!,
        prediction: PREDICTIONS_DATA.find(p => p.matchId === 'm2')!,
        odds: 1.62,
        pick: 'Young Boys Menang'
      },
      {
        match: MATCHES_DATA.find(m => m.id === 'm7')!,
        prediction: PREDICTIONS_DATA.find(p => p.matchId === 'm7')!,
        odds: 1.95,
        pick: 'Swansea City Menang'
      },
      {
        match: MATCHES_DATA.find(m => m.id === 'm10')!,
        prediction: PREDICTIONS_DATA.find(p => p.matchId === 'm10')!,
        odds: 2.10,
        pick: 'Stoke City Menang'
      }
    ]
  },
  {
    id: 'pkg-3',
    title: '🔥 PARLAY HOT (3-TIM) - 2 SEPTEMBER',
    source: 'Rekomendasi KAPSUL4D Special',
    badge: 'Hot Pick',
    totalOdds: 4.50,
    riskLevel: 'Sedang',
    legs: [
      {
        match: MATCHES_DATA.find(m => m.id === 'm6')!,
        prediction: PREDICTIONS_DATA.find(p => p.matchId === 'm6')!,
        odds: 1.68,
        pick: 'Sheffield United Menang'
      },
      {
        match: MATCHES_DATA.find(m => m.id === 'm8')!,
        prediction: PREDICTIONS_DATA.find(p => p.matchId === 'm8')!,
        odds: 1.68,
        pick: 'West Ham United Menang'
      },
      {
        match: MATCHES_DATA.find(m => m.id === 'm10')!,
        prediction: PREDICTIONS_DATA.find(p => p.matchId === 'm10')!,
        odds: 2.10,
        pick: 'Stoke City Menang'
      }
    ]
  },
  {
    id: 'pkg-4',
    title: '🏆 JACKPOT PARLAY MONSTER (4-TIM SPECIAL)',
    source: 'Rekomendasi Cuan Maksimal',
    badge: 'Potensi JP @16.8x',
    totalOdds: 16.82,
    riskLevel: 'Tinggi (Jackpot)',
    legs: [
      {
        match: MATCHES_DATA.find(m => m.id === 'm2')!,
        prediction: PREDICTIONS_DATA.find(p => p.matchId === 'm2')!,
        odds: 1.62,
        pick: 'Young Boys Menang'
      },
      {
        match: MATCHES_DATA.find(m => m.id === 'm6')!,
        prediction: PREDICTIONS_DATA.find(p => p.matchId === 'm6')!,
        odds: 1.68,
        pick: 'Sheffield United Menang'
      },
      {
        match: MATCHES_DATA.find(m => m.id === 'm8')!,
        prediction: PREDICTIONS_DATA.find(p => p.matchId === 'm8')!,
        odds: 1.68,
        pick: 'West Ham United Menang'
      },
      {
        match: MATCHES_DATA.find(m => m.id === 'm11')!,
        prediction: PREDICTIONS_DATA.find(p => p.matchId === 'm11')!,
        odds: 1.68,
        pick: 'Torino Menang'
      }
    ]
  },
  {
    id: 'pkg-5',
    title: '🏴󠁧󠁢󠁥󠁮󠁧󠁿 CHAMPIONSHIP COMBO (3-TIM)',
    source: 'Rekomendasi Liga Championship',
    badge: 'Odds @5.50x',
    totalOdds: 5.50,
    riskLevel: 'Sedang',
    legs: [
      {
        match: MATCHES_DATA.find(m => m.id === 'm6')!,
        prediction: PREDICTIONS_DATA.find(p => p.matchId === 'm6')!,
        odds: 1.68,
        pick: 'Sheffield United Menang'
      },
      {
        match: MATCHES_DATA.find(m => m.id === 'm7')!,
        prediction: PREDICTIONS_DATA.find(p => p.matchId === 'm7')!,
        odds: 1.95,
        pick: 'Swansea City Menang'
      },
      {
        match: MATCHES_DATA.find(m => m.id === 'm8')!,
        prediction: PREDICTIONS_DATA.find(p => p.matchId === 'm8')!,
        odds: 1.68,
        pick: 'West Ham United Menang'
      }
    ]
  },
  {
    id: 'pkg-6',
    title: '🇮🇹🇨🇭 ITALY CUP & SWISS COMBO (3-TIM)',
    source: 'Rekomendasi Liga Italia & Swiss',
    badge: 'Odds @5.25x',
    totalOdds: 5.25,
    riskLevel: 'Sedang',
    legs: [
      {
        match: MATCHES_DATA.find(m => m.id === 'm1')!,
        prediction: PREDICTIONS_DATA.find(p => p.matchId === 'm1')!,
        odds: 2.20,
        pick: 'Draw Parma vs Cremonese'
      },
      {
        match: MATCHES_DATA.find(m => m.id === 'm2')!,
        prediction: PREDICTIONS_DATA.find(p => p.matchId === 'm2')!,
        odds: 1.62,
        pick: 'Young Boys Menang'
      },
      {
        match: MATCHES_DATA.find(m => m.id === 'm11')!,
        prediction: PREDICTIONS_DATA.find(p => p.matchId === 'm11')!,
        odds: 1.68,
        pick: 'Torino Menang'
      }
    ]
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 't1',
    user: 'Budi Santoso',
    city: 'Jakarta Barat',
    type: 'wd',
    amount: 18500000,
    text: 'WD Rp 18.500.000 dalam 3 menit langsung masuk BCA tanpa potongan! CS ramah, proses secepat kilat. KAPSUL4D memang raja betting terpercaya sejak dulu! 🔥',
    stars: 5,
    time: '5 menit lalu',
    avatarColor: 'green',
    bank: 'BCA',
    verified: true
  },
  {
    id: 't2',
    user: 'Rina Wijaya',
    city: 'Surabaya Timur',
    type: 'jp',
    amount: 38750000,
    text: 'Modal deposit 150rb tembus Mix Parlay 4 tim odds @25.8x dapat 38 Juta lebih! Pasang sesuai tabel prediksi skor di portal ini. Gila banget rasanya! 🏆',
    stars: 5,
    time: '18 menit lalu',
    avatarColor: 'amber',
    gameType: 'Mix Parlay Sportsbook',
    verified: true
  },
  {
    id: 't3',
    user: 'Hendri Gunawan',
    city: 'Medan',
    type: 'wd',
    amount: 25000000,
    text: 'Tarik dana 25 juta via Mandiri selesai hitungan 4 menit. Gak ada drama suruh turnover ribet. Recommended banget buat bettor bola sejati! 💸',
    stars: 5,
    time: '42 menit lalu',
    avatarColor: 'green',
    bank: 'Mandiri',
    verified: true
  },
  {
    id: 't4',
    user: 'Agus Pratama',
    city: 'Bandung',
    type: 'bonus',
    amount: 1500000,
    text: 'Baru gabung langsung dikasih Bonus New Member 100% tanpa ribet. Deposit 1.5jt langsung jadi 3jt di saldo awal. Keren pelayanannya! 🎁',
    stars: 5,
    time: '1 jam lalu',
    avatarColor: 'purple',
    verified: true
  },
  {
    id: 't5',
    user: 'Siti Rahayu',
    city: 'Semarang',
    type: 'win',
    amount: 14200000,
    text: 'Prediksi Sheffield United & West Ham kemarin tembus semua! Saya pasang single bet combo menang 14.2jt. Web ini informasinya paling update & akurat! 🏅',
    stars: 5,
    time: '2 jam lalu',
    avatarColor: 'pink',
    gameType: 'Single Bet Bola',
    verified: true
  },
  {
    id: 't6',
    user: 'Joko Susilo',
    city: 'Yogyakarta',
    type: 'wd',
    amount: 9800000,
    text: 'WD 9.8 Juta langsung diproses tengah malam jam 2 pagi. Layanan 24 jam non stop beneran nyata, bukan bot! Makasih KAPSUL4D mantap! 🌟',
    stars: 5,
    time: '3 jam lalu',
    avatarColor: 'green',
    bank: 'BRI',
    verified: true
  },
  {
    id: 't7',
    user: 'Dewi Lestari',
    city: 'Makassar',
    type: 'jp',
    amount: 52400000,
    text: 'Sensational Jackpot! Iseng main bola sambil nunggu jadwal, pasang parlay 5 laga masuk semua! Langsung auto cair ke rekening BRI. Hoki seumur hidup! 🎉',
    stars: 5,
    time: '4 jam lalu',
    avatarColor: 'red',
    gameType: 'Sultan Parlay',
    verified: true
  },
  {
    id: 't8',
    user: 'Rudi Hartono',
    city: 'Denpasar, Bali',
    type: 'wd',
    amount: 12500000,
    text: 'Situs paling fairplay dan amanah. Tarik saldo puluhan juta selalu lancar tanpa penundaan. Link alternatifnya juga anti blokir. Top! 🚀',
    stars: 5,
    time: '6 jam lalu',
    avatarColor: 'amber',
    bank: 'BCA',
    verified: true
  },
  {
    id: 't9',
    user: 'Bambang Suharto',
    city: 'Surabaya',
    type: 'win',
    amount: 8200000,
    text: 'Ikutin prediksi West Ham & Torino kemarin, 2 single bet masuk semua! WD 8.2jt langsung cair. Terima kasih KAPSUL4D! ✅',
    stars: 5,
    time: '8 jam lalu',
    avatarColor: 'purple',
    gameType: 'Single Bet Bola',
    verified: true
  },
  {
    id: 't10',
    user: 'Mega Putri',
    city: 'Medan',
    type: 'bonus',
    amount: 750000,
    text: 'Dapat bonus cashback 10% dari total kekalahan minggu lalu. Lumayan banget buat modal main lagi. KAPSUL4D selalu perhatian ke membernya. 🙏',
    stars: 4,
    time: '10 jam lalu',
    avatarColor: 'pink',
    verified: true
  },
  {
    id: 't11',
    user: 'Hardi Kusuma',
    city: 'Bali',
    type: 'wd',
    amount: 34000000,
    text: 'WD 34 Juta dalam 2 menit! Saya tidak percaya awalnya, tapi ternyata beneran cepat. Ini situs paling legit sepanjang sejarah saya main betting. 💯',
    stars: 5,
    time: '12 jam lalu',
    avatarColor: 'green',
    bank: 'Mandiri',
    verified: true
  },
  {
    id: 't12',
    user: 'Rika Permata',
    city: 'Bandung',
    type: 'jp',
    amount: 21500000,
    text: 'Jackpot 21.5 Juta dari parlay 3 tim! Modal cuma 200rb. Pakai rekomendasi dari KAPSUL4D memang sering JP! Makasih ya admin! 🎰',
    stars: 5,
    time: '1 hari lalu',
    avatarColor: 'amber',
    gameType: 'Mix Parlay Sportsbook',
    verified: true
  },
  {
    id: 't13',
    user: 'Andi Wijaya',
    city: 'Jakarta Selatan',
    type: 'wd',
    amount: 45000000,
    text: 'WD 45 Juta dalam 5 menit! Ini bukan kaleng-kaleng. KAPSUL4D emang paling cepat proses WD-nya. Gak pake lama langsung cair! 💰',
    stars: 5,
    time: '1 hari lalu',
    avatarColor: 'green',
    bank: 'BCA',
    verified: true
  },
  {
    id: 't14',
    user: 'Nina Herlina',
    city: 'Bandung',
    type: 'win',
    amount: 5600000,
    text: 'Prediksi Sheffield United & Torino kemarin masuk semua. Modal 500rb jadi 5.6jt. Makasih KAPSUL4D selalu kasih prediksi akurat! 🏅',
    stars: 5,
    time: '1 hari lalu',
    avatarColor: 'pink',
    gameType: 'Single Bet Bola',
    verified: true
  }
];

export const INITIAL_TRANSACTIONS: LiveTransaction[] = [
  { id: 'tx-1', type: 'WITHDRAW', user: 'bud***88', amount: 18500000, method: 'BCA', time: 'Baru saja', status: 'SUCCESS' },
  { id: 'tx-2', type: 'DEPOSIT', user: 'riz***99', amount: 500000, method: 'QRIS', time: '1m lalu', status: 'SUCCESS' },
  { id: 'tx-3', type: 'WITHDRAW', user: 'hen***07', amount: 25000000, method: 'MANDIRI', time: '3m lalu', status: 'SUCCESS' },
  { id: 'tx-4', type: 'DEPOSIT', user: 'don***12', amount: 1000000, method: 'DANA', time: '4m lalu', status: 'SUCCESS' },
  { id: 'tx-5', type: 'WITHDRAW', user: 'rin***21', amount: 38750000, method: 'BCA', time: '7m lalu', status: 'SUCCESS' },
  { id: 'tx-6', type: 'DEPOSIT', user: 'agus***33', amount: 250000, method: 'BRI', time: '9m lalu', status: 'SUCCESS' },
  { id: 'tx-7', type: 'WITHDRAW', user: 'dew***77', amount: 52400000, method: 'BNI', time: '12m lalu', status: 'SUCCESS' },
  { id: 'tx-8', type: 'DEPOSIT', user: 'faj***05', amount: 2000000, method: 'QRIS', time: '14m lalu', status: 'SUCCESS' },
];
