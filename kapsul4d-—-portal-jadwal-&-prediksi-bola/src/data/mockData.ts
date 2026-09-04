import { Match, Prediction, ParlayPackage, Testimonial, LiveTransaction } from '../types';

export const OFFICIAL_LINK = "https://akseslink.com/kapsul4d";
export const BRAND_LOGO_GIF = "https://ik.imagekit.io/8btthcfrf/Uploud/KAPSUL4D_shine_bubbles.gif?updatedAt=1786252273564";
export const BRAND_BANNER_GIF = "https://ik.imagekit.io/8btthcfrf/Uploud/KAPSUL4D.gif";
export const POPUP_BANNER_IMG = "https://ik.imagekit.io/8btthcfrf/Uploud/e6a972c6-4920-468c-80d6-aefa22558ede_11zon.png?updatedAt=1786668230036";
export const BALL_ICON = "https://ik.imagekit.io/8btthcfrf/Uploud/Logo%20Bola%20k4d.png";

export const MATCHES_DATA: Match[] = [
  // ==================== 4 SEPTEMBER 2026 ====================

  // KOREA K-LEAGUE 2
  {
    id: 'm1',
    date: '04/09',
    time: '18:30',
    league: '🇰🇷 K-League 2',
    leagueFlag: '🇰🇷',
    home: 'Chungbuk Cheongju FC',
    away: 'Seoul E-Land FC',
    tag: 'K-League 2',
    stadium: 'Cheongju Stadium',
    homeForm: ['W', 'D', 'L', 'W', 'D'],
    awayForm: ['W', 'W', 'D', 'L', 'W'],
    homeRank: 0,
    awayRank: 0,
    handicap: '1/2 : 0'
  },
  {
    id: 'm2',
    date: '04/09',
    time: '18:30',
    league: '🇰🇷 K-League 2',
    leagueFlag: '🇰🇷',
    home: 'Paju Frontier FC',
    away: 'Daegu FC',
    tag: 'K-League 2',
    stadium: 'Paju Stadium',
    homeForm: ['L', 'D', 'W', 'L', 'D'],
    awayForm: ['W', 'W', 'D', 'L', 'W'],
    homeRank: 0,
    awayRank: 0,
    handicap: '3/4 : 0'
  },


  // ==================== 5 SEPTEMBER 2026 ====================

  // TURKIYE SUPER LEAGUE
  {
    id: 'm3',
    date: '05/09',
    time: '01:00',
    league: '🇹🇷 Turkiye Super League',
    leagueFlag: '🇹🇷',
    home: 'Istanbul Basaksehir',
    away: 'Galatasaray',
    tag: 'Super League',
    stadium: 'Basaksehir Fatih Terim Stadium',
    homeForm: ['W', 'D', 'L', 'W', 'D'],
    awayForm: ['W', 'W', 'W', 'D', 'W'],
    homeRank: 5,
    awayRank: 1,
    handicap: '3/4 : 0'
  },

  // SAUDI ARABIA PRO LEAGUE
  {
    id: 'm4',
    date: '05/09',
    time: '02:00',
    league: '🇸🇦 Saudi Pro League',
    leagueFlag: '🇸🇦',
    home: 'Al Shabab Riyadh',
    away: 'Al Hilal Riyadh',
    tag: 'Saudi Pro League',
    stadium: 'Al Shabab Stadium',
    homeForm: ['W', 'W', 'D', 'L', 'W'],
    awayForm: ['W', 'W', 'W', 'W', 'D'],
    homeRank: 4,
    awayRank: 1,
    handicap: '1 1/2 : 0'
  },
  {
    id: 'm5',
    date: '05/09',
    time: '02:00',
    league: '🇸🇦 Saudi Pro League',
    leagueFlag: '🇸🇦',
    home: 'Al Ahli Jeddah',
    away: 'Al Riyadh',
    tag: 'Saudi Pro League',
    stadium: 'King Abdullah Sports City',
    homeForm: ['W', 'W', 'D', 'L', 'W'],
    awayForm: ['L', 'D', 'W', 'L', 'D'],
    homeRank: 3,
    awayRank: 12,
    handicap: '0 : 1 1/2'
  },

  // ENGLISH PREMIER LEAGUE
  {
    id: 'm6',
    date: '05/09',
    time: '03:00',
    league: '🏴󠁧󠁢󠁥󠁮󠁧󠁿 Premier League',
    leagueFlag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
    home: 'Ipswich Town',
    away: 'Liverpool',
    tag: 'Premier League',
    stadium: 'Portman Road',
    homeForm: ['L', 'D', 'W', 'L', 'D'],
    awayForm: ['W', 'W', 'W', 'D', 'W'],
    homeRank: 17,
    awayRank: 2,
    handicap: '1 1/4 : 0'
  },

  // SPAIN LA LIGA
  {
    id: 'm7',
    date: '05/09',
    time: '03:00',
    league: '🇪🇸 La Liga',
    leagueFlag: '🇪🇸',
    home: 'Real Betis',
    away: 'Real Madrid',
    tag: 'La Liga',
    stadium: 'Benito Villamarin',
    homeForm: ['W', 'D', 'L', 'W', 'D'],
    awayForm: ['W', 'W', 'W', 'D', 'W'],
    homeRank: 7,
    awayRank: 1,
    handicap: '1 1/4 : 0'
  },

  // FRANCE LIGUE 1
  {
    id: 'm8',
    date: '05/09',
    time: '03:05',
    league: '🇫🇷 Ligue 1',
    leagueFlag: '🇫🇷',
    home: 'Paris Saint Germain',
    away: 'AS Monaco',
    tag: 'Ligue 1',
    stadium: 'Parc des Princes',
    homeForm: ['W', 'W', 'W', 'W', 'D'],
    awayForm: ['W', 'W', 'D', 'L', 'W'],
    homeRank: 1,
    awayRank: 2,
    handicap: '0 : 1 1/2'
  },

  // BRAZIL SERIE B
  {
    id: 'm9',
    date: '05/09',
    time: '06:30',
    league: '🇧🇷 Brazil Serie B',
    leagueFlag: '🇧🇷',
    home: 'Criciuma EC SC',
    away: 'Cuiaba MT',
    tag: 'Brazil Serie B',
    stadium: 'Estadio Heriberto Hulse',
    homeForm: ['W', 'W', 'W', 'D', 'W'],
    awayForm: ['L', 'D', 'W', 'L', 'D'],
    homeRank: 1,
    awayRank: 14,
    handicap: '0 : 1/2'
  },
  {
    id: 'm10',
    date: '05/09',
    time: '08:30',
    league: '🇧🇷 Brazil Serie B',
    leagueFlag: '🇧🇷',
    home: 'CRB Maceio',
    away: 'America Mineiro',
    tag: 'Brazil Serie B',
    stadium: 'Estadio Rei Pele',
    homeForm: ['W', 'D', 'L', 'W', 'D'],
    awayForm: ['L', 'L', 'D', 'L', 'L'],
    homeRank: 6,
    awayRank: 19,
    handicap: '0 : 1'
  },

  // MEXICO PRIMERA DIVISION
  {
    id: 'm11',
    date: '05/09',
    time: '09:00',
    league: '🇲🇽 Mexico Primera Division',
    leagueFlag: '🇲🇽',
    home: 'Puebla FC',
    away: 'Deportivo Toluca',
    tag: 'Liga MX',
    stadium: 'Estadio Cuauhtemoc',
    homeForm: ['D', 'L', 'W', 'D', 'L'],
    awayForm: ['W', 'W', 'D', 'L', 'W'],
    homeRank: 15,
    awayRank: 5,
    handicap: '3/4 : 0'
  },
  {
    id: 'm12',
    date: '05/09',
    time: '11:00',
    league: '🇲🇽 Mexico Primera Division',
    leagueFlag: '🇲🇽',
    home: 'FC Juarez',
    away: 'Pachuca',
    tag: 'Liga MX',
    stadium: 'Estadio Olimpico Benito Juarez',
    homeForm: ['W', 'D', 'L', 'W', 'D'],
    awayForm: ['W', 'W', 'D', 'L', 'W'],
    homeRank: 9,
    awayRank: 6,
    handicap: '1/2 : 0'
  }
];

export const PREDICTIONS_DATA: Prediction[] = [
  // ==================== 4 SEPTEMBER 2026 ====================

  {
    id: 'p1',
    matchId: 'm1',
    league: '🇰🇷 K-League 2',
    home: 'Chungbuk Cheongju FC',
    away: 'Seoul E-Land FC',
    score: '1 - 2',
    confidence: 'mid',
    confidencePct: 58,
    homeProb: 30,
    drawProb: 28,
    awayProb: 42,
    pick: 'AWAY',
    pickLabel: 'Seoul E-Land Win',
    odds: 2.10,
    overUnder: 'Over 2.5',
    btts: 'YES',
    note: 'Seoul E-Land FC adalah tim papan atas K-League 2 dengan skuad berkualitas.',
    h2hSummary: 'Seoul E-Land menang 2 dari 3 pertemuan terakhir.',
    keyPlayer: 'Joo Min-kyu'
  },
  {
    id: 'p2',
    matchId: 'm2',
    league: '🇰🇷 K-League 2',
    home: 'Paju Frontier FC',
    away: 'Daegu FC',
    score: '0 - 2',
    confidence: 'high',
    confidencePct: 72,
    homeProb: 18,
    drawProb: 20,
    awayProb: 62,
    pick: 'AWAY',
    pickLabel: 'Daegu FC Win',
    odds: 1.62,
    overUnder: 'Under 2.5',
    btts: 'NO',
    note: 'Daegu FC adalah tim papan atas K-League 2 dengan skuad bintang.',
    h2hSummary: 'Daegu menang 3 dari 4 pertemuan terakhir.',
    keyPlayer: 'Cesinha'
  },


  // ==================== 5 SEPTEMBER 2026 ====================

  {
    id: 'p3',
    matchId: 'm3',
    league: '🇹🇷 Turkiye Super League',
    home: 'Istanbul Basaksehir',
    away: 'Galatasaray',
    score: '1 - 2',
    confidence: 'high',
    confidencePct: 74,
    homeProb: 22,
    drawProb: 24,
    awayProb: 54,
    pick: 'AWAY',
    pickLabel: 'Galatasaray Win',
    odds: 1.58,
    overUnder: 'Over 2.5',
    btts: 'YES',
    note: 'Galatasaray adalah raja Turki dengan skuad bintang dan target juara.',
    h2hSummary: 'Galatasaray menang 3 dari 4 pertemuan terakhir.',
    keyPlayer: 'Mauro Icardi'
  },
  {
    id: 'p4',
    matchId: 'm4',
    league: '🇸🇦 Saudi Pro League',
    home: 'Al Shabab Riyadh',
    away: 'Al Hilal Riyadh',
    score: '1 - 3',
    confidence: 'high',
    confidencePct: 80,
    homeProb: 12,
    drawProb: 16,
    awayProb: 72,
    pick: 'AWAY',
    pickLabel: 'Al Hilal Win & Over 2.5',
    odds: 1.48,
    overUnder: 'Over 2.5',
    btts: 'YES',
    note: 'Al Hilal Riyadh adalah raja Saudi dengan skuad bintang dan target juara.',
    h2hSummary: 'Al Hilal selalu menang telak di ajang liga.',
    keyPlayer: 'Neymar Jr'
  },
  {
    id: 'p5',
    matchId: 'm5',
    league: '🇸🇦 Saudi Pro League',
    home: 'Al Ahli Jeddah',
    away: 'Al Riyadh',
    score: '3 - 0',
    confidence: 'high',
    confidencePct: 78,
    homeProb: 76,
    drawProb: 14,
    awayProb: 10,
    pick: 'HOME',
    pickLabel: 'Al Ahli Win to Nil',
    odds: 1.52,
    overUnder: 'Over 2.5',
    btts: 'NO',
    note: 'Al Ahli Jeddah adalah tim papan atas Saudi dengan skuad bintang.',
    h2hSummary: 'Al Ahli selalu menang telak di kandang.',
    keyPlayer: 'Roberto Firmino'
  },
  {
    id: 'p6',
    matchId: 'm6',
    league: '🏴󠁧󠁢󠁥󠁮󠁧󠁿 Premier League',
    home: 'Ipswich Town',
    away: 'Liverpool',
    score: '0 - 3',
    confidence: 'high',
    confidencePct: 82,
    homeProb: 6,
    drawProb: 12,
    awayProb: 82,
    pick: 'AWAY',
    pickLabel: 'Liverpool Win to Nil',
    odds: 1.40,
    overUnder: 'Over 2.5',
    btts: 'NO',
    note: 'Liverpool adalah raja Premier League dengan skuad bintang dan target juara.',
    h2hSummary: 'Liverpool selalu menang telak di kandang lawan.',
    keyPlayer: 'Mohamed Salah'
  },
  {
    id: 'p7',
    matchId: 'm7',
    league: '🇪🇸 La Liga',
    home: 'Real Betis',
    away: 'Real Madrid',
    score: '1 - 2',
    confidence: 'high',
    confidencePct: 78,
    homeProb: 18,
    drawProb: 20,
    awayProb: 62,
    pick: 'AWAY',
    pickLabel: 'Real Madrid Win',
    odds: 1.52,
    overUnder: 'Over 2.5',
    btts: 'YES',
    note: 'Real Madrid adalah raja Spanyol dengan skuad bintang dan target juara La Liga.',
    h2hSummary: 'Real Madrid menang 4 dari 5 pertemuan terakhir.',
    keyPlayer: 'Jude Bellingham'
  },
  {
    id: 'p8',
    matchId: 'm8',
    league: '🇫🇷 Ligue 1',
    home: 'Paris Saint Germain',
    away: 'AS Monaco',
    score: '3 - 1',
    confidence: 'high',
    confidencePct: 80,
    homeProb: 78,
    drawProb: 14,
    awayProb: 8,
    pick: 'HOME',
    pickLabel: 'PSG Win & Over 2.5',
    odds: 1.48,
    overUnder: 'Over 2.5',
    btts: 'YES',
    note: 'PSG adalah raja Prancis dengan skuad bintang dan target juara Ligue 1.',
    h2hSummary: 'PSG selalu menang telak di Parc des Princes.',
    keyPlayer: 'Kylian Mbappe'
  },
  {
    id: 'p9',
    matchId: 'm9',
    league: '🇧🇷 Brazil Serie B',
    home: 'Criciuma EC SC',
    away: 'Cuiaba MT',
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
    note: 'Criciuma adalah pemuncak klasemen tapi Cuiaba bisa memberikan kejutan.',
    h2hSummary: '2 dari 3 pertemuan berakhir imbang.',
    keyPlayer: 'Lucas Leandro'
  },
  {
    id: 'p10',
    matchId: 'm10',
    league: '🇧🇷 Brazil Serie B',
    home: 'CRB Maceio',
    away: 'America Mineiro',
    score: '2 - 1',
    confidence: 'high',
    confidencePct: 70,
    homeProb: 66,
    drawProb: 20,
    awayProb: 14,
    pick: 'HOME',
    pickLabel: 'CRB Maceio Win',
    odds: 1.68,
    overUnder: 'Over 2.5',
    btts: 'YES',
    note: 'CRB Maceio adalah tim papan atas Brazil Serie B, America Mineiro tim juru kunci.',
    h2hSummary: 'CRB menang 3 dari 4 pertemuan terakhir.',
    keyPlayer: 'Anselmo Ramon'
  },
  {
    id: 'p11',
    matchId: 'm11',
    league: '🇲🇽 Mexico Primera Division',
    home: 'Puebla FC',
    away: 'Deportivo Toluca',
    score: '1 - 2',
    confidence: 'high',
    confidencePct: 72,
    homeProb: 22,
    drawProb: 24,
    awayProb: 54,
    pick: 'AWAY',
    pickLabel: 'Deportivo Toluca Win',
    odds: 1.62,
    overUnder: 'Over 2.5',
    btts: 'YES',
    note: 'Deportivo Toluca adalah tim papan atas Liga MX dengan skuad berkualitas.',
    h2hSummary: 'Toluca menang 3 dari 4 pertemuan terakhir.',
    keyPlayer: 'Tiago Volpi'
  },
  {
    id: 'p12',
    matchId: 'm12',
    league: '🇲🇽 Mexico Primera Division',
    home: 'FC Juarez',
    away: 'Pachuca',
    score: '1 - 2',
    confidence: 'mid',
    confidencePct: 60,
    homeProb: 30,
    drawProb: 28,
    awayProb: 42,
    pick: 'AWAY',
    pickLabel: 'Pachuca Win',
    odds: 2.05,
    overUnder: 'Over 2.5',
    btts: 'YES',
    note: 'Pachuca adalah tim papan atas Liga MX dengan skuad berkualitas.',
    h2hSummary: 'Pachuca menang 2 dari 3 pertemuan terakhir.',
    keyPlayer: 'Erick Sanchez'
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
        odds: 1.40,
        pick: 'Liverpool Menang'
      },
      {
        match: MATCHES_DATA.find(m => m.id === 'm8')!,
        prediction: PREDICTIONS_DATA.find(p => p.matchId === 'm8')!,
        odds: 1.48,
        pick: 'PSG Menang'
      },
      {
        match: MATCHES_DATA.find(m => m.id === 'm7')!,
        prediction: PREDICTIONS_DATA.find(p => p.matchId === 'm7')!,
        odds: 1.52,
        pick: 'Real Madrid Menang'
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
        match: MATCHES_DATA.find(m => m.id === 'm3')!,
        prediction: PREDICTIONS_DATA.find(p => p.matchId === 'm3')!,
        odds: 1.58,
        pick: 'Galatasaray Menang'
      },
      {
        match: MATCHES_DATA.find(m => m.id === 'm6')!,
        prediction: PREDICTIONS_DATA.find(p => p.matchId === 'm6')!,
        odds: 1.40,
        pick: 'Liverpool Menang'
      },
      {
        match: MATCHES_DATA.find(m => m.id === 'm8')!,
        prediction: PREDICTIONS_DATA.find(p => p.matchId === 'm8')!,
        odds: 1.48,
        pick: 'PSG Menang'
      }
    ]
  },
  {
    id: 'pkg-3',
    title: '🔥 PARLAY HOT (3-TIM) - 5 SEPTEMBER',
    source: 'Rekomendasi KAPSUL4D Special',
    badge: 'Hot Pick',
    totalOdds: 4.50,
    riskLevel: 'Sedang',
    legs: [
      {
        match: MATCHES_DATA.find(m => m.id === 'm4')!,
        prediction: PREDICTIONS_DATA.find(p => p.matchId === 'm4')!,
        odds: 1.48,
        pick: 'Al Hilal Menang'
      },
      {
        match: MATCHES_DATA.find(m => m.id === 'm6')!,
        prediction: PREDICTIONS_DATA.find(p => p.matchId === 'm6')!,
        odds: 1.40,
        pick: 'Liverpool Menang'
      },
      {
        match: MATCHES_DATA.find(m => m.id === 'm8')!,
        prediction: PREDICTIONS_DATA.find(p => p.matchId === 'm8')!,
        odds: 1.48,
        pick: 'PSG Menang'
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
        match: MATCHES_DATA.find(m => m.id === 'm4')!,
        prediction: PREDICTIONS_DATA.find(p => p.matchId === 'm4')!,
        odds: 1.48,
        pick: 'Al Hilal Menang'
      },
      {
        match: MATCHES_DATA.find(m => m.id === 'm6')!,
        prediction: PREDICTIONS_DATA.find(p => p.matchId === 'm6')!,
        odds: 1.40,
        pick: 'Liverpool Menang'
      },
      {
        match: MATCHES_DATA.find(m => m.id === 'm7')!,
        prediction: PREDICTIONS_DATA.find(p => p.matchId === 'm7')!,
        odds: 1.52,
        pick: 'Real Madrid Menang'
      },
      {
        match: MATCHES_DATA.find(m => m.id === 'm8')!,
        prediction: PREDICTIONS_DATA.find(p => p.matchId === 'm8')!,
        odds: 1.48,
        pick: 'PSG Menang'
      }
    ]
  },
  {
    id: 'pkg-5',
    title: '🇸🇦 SAUDI PRO LEAGUE COMBO (3-TIM)',
    source: 'Rekomendasi Liga Saudi',
    badge: 'Odds @5.50x',
    totalOdds: 5.50,
    riskLevel: 'Sedang',
    legs: [
      {
        match: MATCHES_DATA.find(m => m.id === 'm4')!,
        prediction: PREDICTIONS_DATA.find(p => p.matchId === 'm4')!,
        odds: 1.48,
        pick: 'Al Hilal Menang'
      },
      {
        match: MATCHES_DATA.find(m => m.id === 'm5')!,
        prediction: PREDICTIONS_DATA.find(p => p.matchId === 'm5')!,
        odds: 1.52,
        pick: 'Al Ahli Jeddah Menang'
      },
      {
        match: MATCHES_DATA.find(m => m.id === 'm11')!,
        prediction: PREDICTIONS_DATA.find(p => p.matchId === 'm11')!,
        odds: 1.62,
        pick: 'Toluca Menang'
      }
    ]
  },
  {
    id: 'pkg-6',
    title: '🇲🇽🇧🇷 MEXICO & BRAZIL COMBO (3-TIM)',
    source: 'Rekomendasi Liga Amerika',
    badge: 'Odds @5.25x',
    totalOdds: 5.25,
    riskLevel: 'Sedang',
    legs: [
      {
        match: MATCHES_DATA.find(m => m.id === 'm10')!,
        prediction: PREDICTIONS_DATA.find(p => p.matchId === 'm10')!,
        odds: 1.68,
        pick: 'CRB Maceio Menang'
      },
      {
        match: MATCHES_DATA.find(m => m.id === 'm11')!,
        prediction: PREDICTIONS_DATA.find(p => p.matchId === 'm11')!,
        odds: 1.62,
        pick: 'Toluca Menang'
      },
      {
        match: MATCHES_DATA.find(m => m.id === 'm12')!,
        prediction: PREDICTIONS_DATA.find(p => p.matchId === 'm12')!,
        odds: 2.05,
        pick: 'Pachuca Menang'
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
    text: 'Prediksi Liverpool & PSG kemarin tembus semua! Saya pasang single bet combo menang 14.2jt. Web ini informasinya paling update & akurat! 🏅',
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
    text: 'Ikutin prediksi Liverpool & PSG kemarin, 2 single bet masuk semua! WD 8.2jt langsung cair. Terima kasih KAPSUL4D! ✅',
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
    text: 'Prediksi Liverpool & Real Madrid kemarin masuk semua. Modal 500rb jadi 5.6jt. Makasih KAPSUL4D selalu kasih prediksi akurat! 🏅',
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
