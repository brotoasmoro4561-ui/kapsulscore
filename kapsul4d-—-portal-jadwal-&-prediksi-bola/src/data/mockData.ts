import { Match, Prediction, ParlayPackage, Testimonial, LiveTransaction } from '../types';

export const OFFICIAL_LINK = "https://akseslink.com/kapsul4d";
export const BRAND_LOGO_GIF = "https://ik.imagekit.io/8btthcfrf/Uploud/KAPSUL4D_shine_bubbles.gif?updatedAt=1786252273564";
export const BRAND_BANNER_GIF = "https://ik.imagekit.io/8btthcfrf/Uploud/KAPSUL4D.gif";
export const POPUP_BANNER_IMG = "https://ik.imagekit.io/8btthcfrf/Uploud/e6a972c6-4920-468c-80d6-aefa22558ede_11zon.png?updatedAt=1786668230036";
export const BALL_ICON = "https://ik.imagekit.io/8btthcfrf/Uploud/Logo%20Bola%20k4d.png";

export const MATCHES_DATA: Match[] = [
  // ==================== 31 AGUSTUS 2026 ====================

  // GREECE SUPER LEAGUE
  {
    id: 'm1',
    date: '31/08',
    time: '00:30',
    league: '🇬🇷 Greece Super League',
    leagueFlag: '🇬🇷',
    home: 'Levadiakos',
    away: 'Panathinaikos',
    tag: 'Super League',
    stadium: 'Levadia Stadium',
    homeForm: ['L', 'L', 'D', 'L', 'L'],
    awayForm: ['W', 'W', 'D', 'L', 'W'],
    homeRank: 14,
    awayRank: 1,
    handicap: '3/4 : 0'
  },

  // CROATIA SUPERLIGA
  {
    id: 'm2',
    date: '31/08',
    time: '00:30',
    league: '🇭🇷 Croatia Superliga',
    leagueFlag: '🇭🇷',
    home: 'Hajduk Split',
    away: 'NK Lokomotiva Zagreb',
    tag: 'Superliga',
    stadium: 'Stadion Poljud',
    homeForm: ['W', 'W', 'D', 'L', 'W'],
    awayForm: ['L', 'D', 'W', 'L', 'D'],
    homeRank: 2,
    awayRank: 6,
    handicap: '0 : 1 1/4'
  },

  // ITALY SERIE A
  {
    id: 'm3',
    date: '31/08',
    time: '00:30',
    league: '🇮🇹 Serie A',
    leagueFlag: '🇮🇹',
    home: 'Lecce',
    away: 'AS Roma',
    tag: 'Serie A',
    stadium: 'Stadio Via del Mare',
    homeForm: ['D', 'L', 'W', 'D', 'L'],
    awayForm: ['W', 'W', 'D', 'L', 'W'],
    homeRank: 16,
    awayRank: 5,
    handicap: '1 : 0'
  },

  // DENMARK SUPER LEAGUE
  {
    id: 'm4',
    date: '01/09',
    time: '01:00',
    league: '🇩🇰 Super League',
    leagueFlag: '🇩🇰',
    home: 'FC Copenhagen',
    away: 'Sonderjyske',
    tag: 'Super League',
    stadium: 'Parken Stadium',
    homeForm: ['W', 'W', 'W', 'D', 'W'],
    awayForm: ['L', 'D', 'L', 'L', 'W'],
    homeRank: 1,
    awayRank: 12,
    handicap: '0 : 1 1/2'
  },

  // SPAIN LA LIGA
  {
    id: 'm5',
    date: '01/09',
    time: '01:30',
    league: '🇪🇸 La Liga',
    leagueFlag: '🇪🇸',
    home: 'CA Osasuna',
    away: 'Getafe CF',
    tag: 'La Liga',
    stadium: 'Estadio El Sadar',
    homeForm: ['W', 'D', 'L', 'W', 'D'],
    awayForm: ['D', 'L', 'W', 'D', 'L'],
    homeRank: 9,
    awayRank: 12,
    handicap: '0 : 1/4'
  },

  // TURKIYE SUPER LEAGUE
  {
    id: 'm6',
    date: '01/09',
    time: '02:30',
    league: '🇹🇷 Turkiye Super League',
    leagueFlag: '🇹🇷',
    home: 'Besiktas',
    away: 'Corum FK',
    tag: 'Super League',
    stadium: 'Vodafone Park',
    homeForm: ['W', 'W', 'W', 'D', 'W'],
    awayForm: ['L', 'L', 'D', 'L', 'L'],
    homeRank: 1,
    awayRank: 16,
    handicap: '0 : 1 1/4'
  },

  // ITALY SERIE A
  {
    id: 'm7',
    date: '01/09',
    time: '02:45',
    league: '🇮🇹 Serie A',
    leagueFlag: '🇮🇹',
    home: 'Atalanta',
    away: 'Bologna',
    tag: 'Serie A',
    stadium: 'Gewiss Stadium',
    homeForm: ['W', 'W', 'D', 'L', 'W'],
    awayForm: ['W', 'D', 'L', 'W', 'D'],
    homeRank: 6,
    awayRank: 10,
    handicap: '0 : 1/2'
  },

  // ENGLISH PREMIER LEAGUE
  {
    id: 'm8',
    date: '01/09',
    time: '03:00',
    league: '🏴󠁧󠁢󠁥󠁮󠁧󠁿 Premier League',
    leagueFlag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
    home: 'Aston Villa',
    away: 'Arsenal',
    tag: 'Premier League',
    stadium: 'Villa Park',
    homeForm: ['W', 'D', 'L', 'W', 'D'],
    awayForm: ['W', 'W', 'W', 'D', 'W'],
    homeRank: 8,
    awayRank: 2,
    handicap: '1 : 0'
  },

  // LIGA PORTUGAL
  {
    id: 'm9',
    date: '01/09',
    time: '03:15',
    league: '🇵🇹 Liga Portugal',
    leagueFlag: '🇵🇹',
    home: 'Benfica',
    away: 'Estoril',
    tag: 'Liga Portugal',
    stadium: 'Estadio da Luz',
    homeForm: ['W', 'W', 'W', 'W', 'D'],
    awayForm: ['D', 'L', 'W', 'D', 'L'],
    homeRank: 1,
    awayRank: 12,
    handicap: '0 : 2 1/4'
  },
  {
    id: 'm10',
    date: '01/09',
    time: '03:15',
    league: '🇵🇹 Liga Portugal',
    leagueFlag: '🇵🇹',
    home: 'Sporting Braga',
    away: 'Vitoria Guimaraes',
    tag: 'Liga Portugal',
    stadium: 'Estadio Municipal',
    homeForm: ['W', 'W', 'D', 'L', 'W'],
    awayForm: ['W', 'D', 'L', 'W', 'D'],
    homeRank: 4,
    awayRank: 5,
    handicap: '0 : 3/4'
  },

  // SPAIN LA LIGA
  {
    id: 'm11',
    date: '01/09',
    time: '03:30',
    league: '🇪🇸 La Liga',
    leagueFlag: '🇪🇸',
    home: 'Barcelona',
    away: 'Rayo Vallecano',
    tag: 'La Liga',
    stadium: 'Camp Nou',
    homeForm: ['W', 'W', 'W', 'W', 'D'],
    awayForm: ['W', 'D', 'L', 'W', 'D'],
    homeRank: 1,
    awayRank: 10,
    handicap: '0 : 2 1/4'
  },

  // ARGENTINA LIGA PROFESIONAL
  {
    id: 'm12',
    date: '01/09',
    time: '06:00',
    league: '🇦🇷 Argentina Liga Profesional',
    leagueFlag: '🇦🇷',
    home: 'Estudiantes La Plata',
    away: 'Newells Old Boys',
    tag: 'Liga Profesional',
    stadium: 'Estadio Ciudad de La Plata',
    homeForm: ['W', 'W', 'D', 'L', 'W'],
    awayForm: ['L', 'D', 'W', 'L', 'D'],
    homeRank: 4,
    awayRank: 11,
    handicap: '0 : 3/4'
  },

  // BRAZIL SERIE A
  {
    id: 'm13',
    date: '01/09',
    time: '07:00',
    league: '🇧🇷 Brazil Serie A',
    leagueFlag: '🇧🇷',
    home: 'Remo PA',
    away: 'Coritiba PR',
    tag: 'Brazil Serie A',
    stadium: 'Estadio Mangueirao',
    homeForm: ['W', 'D', 'L', 'W', 'D'],
    awayForm: ['L', 'D', 'W', 'L', 'D'],
    homeRank: 8,
    awayRank: 15,
    handicap: '0 : 1/4'
  },

  // ARGENTINA LIGA PROFESIONAL
  {
    id: 'm14',
    date: '01/09',
    time: '08:15',
    league: '🇦🇷 Argentina Liga Profesional',
    leagueFlag: '🇦🇷',
    home: 'Instituto',
    away: 'San Lorenzo',
    tag: 'Liga Profesional',
    stadium: 'Estadio Juan Domingo Peron',
    homeForm: ['W', 'D', 'L', 'W', 'D'],
    awayForm: ['D', 'L', 'W', 'D', 'L'],
    homeRank: 9,
    awayRank: 7,
    handicap: '0 : 1/2'
  }
];

export const PREDICTIONS_DATA: Prediction[] = [
  // ==================== 31 AGUSTUS 2026 ====================

  {
    id: 'p1',
    matchId: 'm1',
    league: '🇬🇷 Greece Super League',
    home: 'Levadiakos',
    away: 'Panathinaikos',
    score: '0 - 2',
    confidence: 'high',
    confidencePct: 78,
    homeProb: 10,
    drawProb: 16,
    awayProb: 74,
    pick: 'AWAY',
    pickLabel: 'Panathinaikos Win to Nil',
    odds: 1.48,
    overUnder: 'Under 2.5',
    btts: 'NO',
    note: 'Panathinaikos adalah raja Greece Super League dengan skuad bintang.',
    h2hSummary: 'Panathinaikos selalu menang telak di kandang lawan.',
    keyPlayer: 'Fotis Ioannidis'
  },
  {
    id: 'p2',
    matchId: 'm2',
    league: '🇭🇷 Croatia Superliga',
    home: 'Hajduk Split',
    away: 'NK Lokomotiva Zagreb',
    score: '2 - 0',
    confidence: 'high',
    confidencePct: 72,
    homeProb: 68,
    drawProb: 18,
    awayProb: 14,
    pick: 'HOME',
    pickLabel: 'Hajduk Split Win',
    odds: 1.68,
    overUnder: 'Under 2.5',
    btts: 'NO',
    note: 'Hajduk Split adalah tim papan atas Croatia dengan skuad berkualitas.',
    h2hSummary: 'Hajduk menang 3 dari 4 pertemuan terakhir.',
    keyPlayer: 'Marko Livaja'
  },
  {
    id: 'p3',
    matchId: 'm3',
    league: '🇮🇹 Serie A',
    home: 'Lecce',
    away: 'AS Roma',
    score: '0 - 2',
    confidence: 'high',
    confidencePct: 76,
    homeProb: 14,
    drawProb: 18,
    awayProb: 68,
    pick: 'AWAY',
    pickLabel: 'AS Roma Win',
    odds: 1.58,
    overUnder: 'Under 2.5',
    btts: 'NO',
    note: 'AS Roma adalah tim papan atas Serie A dengan skuad bintang.',
    h2hSummary: 'Roma menang 4 dari 5 pertemuan terakhir.',
    keyPlayer: 'Paulo Dybala'
  },


  // ==================== 1 SEPTEMBER 2026 ====================

  {
    id: 'p4',
    matchId: 'm4',
    league: '🇩🇰 Super League',
    home: 'FC Copenhagen',
    away: 'Sonderjyske',
    score: '3 - 1',
    confidence: 'high',
    confidencePct: 78,
    homeProb: 76,
    drawProb: 14,
    awayProb: 10,
    pick: 'HOME',
    pickLabel: 'Copenhagen Win & Over 2.5',
    odds: 1.52,
    overUnder: 'Over 2.5',
    btts: 'YES',
    note: 'FC Copenhagen adalah raja Denmark dengan skuad bintang.',
    h2hSummary: 'Copenhagen selalu menang telak di Parken.',
    keyPlayer: 'Viktor Claesson'
  },
  {
    id: 'p5',
    matchId: 'm5',
    league: '🇪🇸 La Liga',
    home: 'CA Osasuna',
    away: 'Getafe CF',
    score: '1 - 0',
    confidence: 'mid',
    confidencePct: 56,
    homeProb: 44,
    drawProb: 32,
    awayProb: 24,
    pick: 'HOME',
    pickLabel: 'Osasuna Win',
    odds: 2.10,
    overUnder: 'Under 2.5',
    btts: 'NO',
    note: 'Osasuna bermain di kandang dengan atmosfer El Sadar yang luar biasa.',
    h2hSummary: 'Osasuna menang 2 dari 3 pertemuan terakhir.',
    keyPlayer: 'Ante Budimir'
  },
  {
    id: 'p6',
    matchId: 'm6',
    league: '🇹🇷 Turkiye Super League',
    home: 'Besiktas',
    away: 'Corum FK',
    score: '2 - 0',
    confidence: 'high',
    confidencePct: 80,
    homeProb: 78,
    drawProb: 14,
    awayProb: 8,
    pick: 'HOME',
    pickLabel: 'Besiktas Win to Nil',
    odds: 1.45,
    overUnder: 'Under 2.5',
    btts: 'NO',
    note: 'Besiktas adalah raja Turki dengan skuad bintang dan target juara.',
    h2hSummary: 'Besiktas selalu menang telak di Vodafone Park.',
    keyPlayer: 'Cenk Tosun'
  },
  {
    id: 'p7',
    matchId: 'm7',
    league: '🇮🇹 Serie A',
    home: 'Atalanta',
    away: 'Bologna',
    score: '2 - 1',
    confidence: 'mid',
    confidencePct: 62,
    homeProb: 48,
    drawProb: 26,
    awayProb: 26,
    pick: 'HOME',
    pickLabel: 'Atalanta Win',
    odds: 1.92,
    overUnder: 'Over 2.5',
    btts: 'YES',
    note: 'Atalanta bermain di kandang dengan serangan mematikan.',
    h2hSummary: 'Atalanta menang 2 dari 3 pertemuan terakhir.',
    keyPlayer: 'Ademola Lookman'
  },
  {
    id: 'p8',
    matchId: 'm8',
    league: '🏴󠁧󠁢󠁥󠁮󠁧󠁿 Premier League',
    home: 'Aston Villa',
    away: 'Arsenal',
    score: '1 - 2',
    confidence: 'high',
    confidencePct: 72,
    homeProb: 24,
    drawProb: 24,
    awayProb: 52,
    pick: 'AWAY',
    pickLabel: 'Arsenal Win',
    odds: 1.62,
    overUnder: 'Over 2.5',
    btts: 'YES',
    note: 'Arsenal memiliki skuad bintang dan target juara Premier League.',
    h2hSummary: 'Arsenal menang 3 dari 4 pertemuan terakhir.',
    keyPlayer: 'Bukayo Saka'
  },
  {
    id: 'p9',
    matchId: 'm9',
    league: '🇵🇹 Liga Portugal',
    home: 'Benfica',
    away: 'Estoril',
    score: '3 - 0',
    confidence: 'high',
    confidencePct: 84,
    homeProb: 82,
    drawProb: 12,
    awayProb: 6,
    pick: 'HOME',
    pickLabel: 'Benfica Win to Nil',
    odds: 1.40,
    overUnder: 'Over 2.5',
    btts: 'NO',
    note: 'Benfica adalah raja Portugal dengan skuad bintang.',
    h2hSummary: 'Benfica selalu menang telak di Estadio da Luz.',
    keyPlayer: 'Angel Di Maria'
  },
  {
    id: 'p10',
    matchId: 'm10',
    league: '🇵🇹 Liga Portugal',
    home: 'Sporting Braga',
    away: 'Vitoria Guimaraes',
    score: '2 - 1',
    confidence: 'mid',
    confidencePct: 60,
    homeProb: 46,
    drawProb: 28,
    awayProb: 26,
    pick: 'HOME',
    pickLabel: 'Braga Win',
    odds: 1.95,
    overUnder: 'Over 2.5',
    btts: 'YES',
    note: 'Sporting Braga bermain di kandang dengan performa konsisten.',
    h2hSummary: 'Braga menang 2 dari 3 pertemuan terakhir.',
    keyPlayer: 'Ricardo Horta'
  },
  {
    id: 'p11',
    matchId: 'm11',
    league: '🇪🇸 La Liga',
    home: 'Barcelona',
    away: 'Rayo Vallecano',
    score: '3 - 1',
    confidence: 'high',
    confidencePct: 82,
    homeProb: 80,
    drawProb: 12,
    awayProb: 8,
    pick: 'HOME',
    pickLabel: 'Barcelona Win & Over 2.5',
    odds: 1.42,
    overUnder: 'Over 2.5',
    btts: 'YES',
    note: 'Barcelona adalah raja Spanyol dengan skuad bintang dan target juara La Liga.',
    h2hSummary: 'Barcelona selalu menang telak di Camp Nou.',
    keyPlayer: 'Robert Lewandowski'
  },
  {
    id: 'p12',
    matchId: 'm12',
    league: '🇦🇷 Argentina Liga Profesional',
    home: 'Estudiantes La Plata',
    away: 'Newells Old Boys',
    score: '2 - 0',
    confidence: 'high',
    confidencePct: 70,
    homeProb: 66,
    drawProb: 20,
    awayProb: 14,
    pick: 'HOME',
    pickLabel: 'Estudiantes Win',
    odds: 1.68,
    overUnder: 'Under 2.5',
    btts: 'NO',
    note: 'Estudiantes La Plata adalah tim kuat Argentina dengan skuad berkualitas.',
    h2hSummary: 'Estudiantes menang 3 dari 4 pertemuan terakhir.',
    keyPlayer: 'Mauro Mendez'
  },
  {
    id: 'p13',
    matchId: 'm13',
    league: '🇧🇷 Brazil Serie A',
    home: 'Remo PA',
    away: 'Coritiba PR',
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
    note: 'Kedua tim berimbang di papan tengah Brazil Serie A.',
    h2hSummary: '2 dari 3 pertemuan berakhir imbang.',
    keyPlayer: 'Yuri Alberto'
  },
  {
    id: 'p14',
    matchId: 'm14',
    league: '🇦🇷 Argentina Liga Profesional',
    home: 'Instituto',
    away: 'San Lorenzo',
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
    note: 'Kedua tim berimbang di papan tengah Liga Profesional.',
    h2hSummary: '2 dari 3 pertemuan berakhir imbang.',
    keyPlayer: 'Nahuel Barrios'
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
        match: MATCHES_DATA.find(m => m.id === 'm11')!,
        prediction: PREDICTIONS_DATA.find(p => p.matchId === 'm11')!,
        odds: 1.42,
        pick: 'Barcelona Menang'
      },
      {
        match: MATCHES_DATA.find(m => m.id === 'm9')!,
        prediction: PREDICTIONS_DATA.find(p => p.matchId === 'm9')!,
        odds: 1.40,
        pick: 'Benfica Menang'
      },
      {
        match: MATCHES_DATA.find(m => m.id === 'm6')!,
        prediction: PREDICTIONS_DATA.find(p => p.matchId === 'm6')!,
        odds: 1.45,
        pick: 'Besiktas Menang'
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
        match: MATCHES_DATA.find(m => m.id === 'm8')!,
        prediction: PREDICTIONS_DATA.find(p => p.matchId === 'm8')!,
        odds: 1.62,
        pick: 'Arsenal Menang'
      },
      {
        match: MATCHES_DATA.find(m => m.id === 'm7')!,
        prediction: PREDICTIONS_DATA.find(p => p.matchId === 'm7')!,
        odds: 1.92,
        pick: 'Atalanta Menang'
      },
      {
        match: MATCHES_DATA.find(m => m.id === 'm10')!,
        prediction: PREDICTIONS_DATA.find(p => p.matchId === 'm10')!,
        odds: 1.95,
        pick: 'Braga Menang'
      }
    ]
  },
  {
    id: 'pkg-3',
    title: '🔥 PARLAY HOT (3-TIM) - 1 SEPTEMBER',
    source: 'Rekomendasi KAPSUL4D Special',
    badge: 'Hot Pick',
    totalOdds: 4.50,
    riskLevel: 'Sedang',
    legs: [
      {
        match: MATCHES_DATA.find(m => m.id === 'm4')!,
        prediction: PREDICTIONS_DATA.find(p => p.matchId === 'm4')!,
        odds: 1.52,
        pick: 'Copenhagen Menang'
      },
      {
        match: MATCHES_DATA.find(m => m.id === 'm8')!,
        prediction: PREDICTIONS_DATA.find(p => p.matchId === 'm8')!,
        odds: 1.62,
        pick: 'Arsenal Menang'
      },
      {
        match: MATCHES_DATA.find(m => m.id === 'm11')!,
        prediction: PREDICTIONS_DATA.find(p => p.matchId === 'm11')!,
        odds: 1.42,
        pick: 'Barcelona Menang'
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
        odds: 1.52,
        pick: 'Copenhagen Menang'
      },
      {
        match: MATCHES_DATA.find(m => m.id === 'm9')!,
        prediction: PREDICTIONS_DATA.find(p => p.matchId === 'm9')!,
        odds: 1.40,
        pick: 'Benfica Menang'
      },
      {
        match: MATCHES_DATA.find(m => m.id === 'm11')!,
        prediction: PREDICTIONS_DATA.find(p => p.matchId === 'm11')!,
        odds: 1.42,
        pick: 'Barcelona Menang'
      },
      {
        match: MATCHES_DATA.find(m => m.id === 'm6')!,
        prediction: PREDICTIONS_DATA.find(p => p.matchId === 'm6')!,
        odds: 1.45,
        pick: 'Besiktas Menang'
      }
    ]
  },
  {
    id: 'pkg-5',
    title: '🇪🇸🇵🇹 LA LIGA & LIGA PORTUGAL COMBO (3-TIM)',
    source: 'Rekomendasi Liga Spanyol & Portugal',
    badge: 'Odds @5.50x',
    totalOdds: 5.50,
    riskLevel: 'Sedang',
    legs: [
      {
        match: MATCHES_DATA.find(m => m.id === 'm5')!,
        prediction: PREDICTIONS_DATA.find(p => p.matchId === 'm5')!,
        odds: 2.10,
        pick: 'Osasuna Menang'
      },
      {
        match: MATCHES_DATA.find(m => m.id === 'm9')!,
        prediction: PREDICTIONS_DATA.find(p => p.matchId === 'm9')!,
        odds: 1.40,
        pick: 'Benfica Menang'
      },
      {
        match: MATCHES_DATA.find(m => m.id === 'm11')!,
        prediction: PREDICTIONS_DATA.find(p => p.matchId === 'm11')!,
        odds: 1.42,
        pick: 'Barcelona Menang'
      }
    ]
  },
  {
    id: 'pkg-6',
    title: '🇮🇹🇦🇷🇧🇷 SERIE A & AMERICA COMBO (3-TIM)',
    source: 'Rekomendasi Liga Italia & Amerika',
    badge: 'Odds @5.25x',
    totalOdds: 5.25,
    riskLevel: 'Sedang',
    legs: [
      {
        match: MATCHES_DATA.find(m => m.id === 'm3')!,
        prediction: PREDICTIONS_DATA.find(p => p.matchId === 'm3')!,
        odds: 1.58,
        pick: 'AS Roma Menang'
      },
      {
        match: MATCHES_DATA.find(m => m.id === 'm12')!,
        prediction: PREDICTIONS_DATA.find(p => p.matchId === 'm12')!,
        odds: 1.68,
        pick: 'Estudiantes La Plata Menang'
      },
      {
        match: MATCHES_DATA.find(m => m.id === 'm7')!,
        prediction: PREDICTIONS_DATA.find(p => p.matchId === 'm7')!,
        odds: 1.92,
        pick: 'Atalanta Menang'
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
    text: 'Prediksi Barcelona & Benfica kemarin tembus semua! Saya pasang single bet combo menang 14.2jt. Web ini informasinya paling update & akurat! 🏅',
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
    text: 'Ikutin prediksi Arsenal & Besiktas kemarin, 2 single bet masuk semua! WD 8.2jt langsung cair. Terima kasih KAPSUL4D! ✅',
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
    text: 'Prediksi Barcelona & Copenhagen kemarin masuk semua. Modal 500rb jadi 5.6jt. Makasih KAPSUL4D selalu kasih prediksi akurat! 🏅',
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
