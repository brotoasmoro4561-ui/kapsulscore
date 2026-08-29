import { Match, Prediction, ParlayPackage, Testimonial, LiveTransaction } from '../types';

export const OFFICIAL_LINK = "https://akseslink.com/kapsul4d";
export const BRAND_LOGO_GIF = "https://ik.imagekit.io/8btthcfrf/Uploud/KAPSUL4D_shine_bubbles.gif?updatedAt=1786252273564";
export const BRAND_BANNER_GIF = "https://ik.imagekit.io/8btthcfrf/Uploud/KAPSUL4D.gif";
export const POPUP_BANNER_IMG = "https://ik.imagekit.io/8btthcfrf/Uploud/e6a972c6-4920-468c-80d6-aefa22558ede_11zon.png?updatedAt=1786668230036";
export const BALL_ICON = "https://ik.imagekit.io/8btthcfrf/Uploud/Logo%20Bola%20k4d.png";

export const MATCHES_DATA: Match[] = [
  // ==================== 29 AGUSTUS 2026 ====================

  // JAPAN J1 LEAGUE
  {
    id: 'm1',
    date: '29/08',
    time: '17:00',
    league: '🇯🇵 J1 League',
    leagueFlag: '🇯🇵',
    home: 'Gamba Osaka',
    away: 'Sanfrecce Hiroshima',
    tag: 'J1 League',
    stadium: 'Panasonic Stadium Suita',
    homeForm: ['W', 'D', 'L', 'W', 'D'],
    awayForm: ['W', 'W', 'D', 'L', 'W'],
    homeRank: 8,
    awayRank: 2,
    handicap: '1 : 0'
  },
  {
    id: 'm2',
    date: '29/08',
    time: '18:00',
    league: '🇯🇵 J1 League',
    leagueFlag: '🇯🇵',
    home: 'Vissel Kobe',
    away: 'Cerezo Osaka',
    tag: 'J1 League',
    stadium: 'Noevir Stadium Kobe',
    homeForm: ['W', 'W', 'D', 'L', 'W'],
    awayForm: ['W', 'L', 'D', 'W', 'L'],
    homeRank: 4,
    awayRank: 7,
    handicap: '0 : 1/2'
  },

  // ENGLISH PREMIER LEAGUE
  {
    id: 'm3',
    date: '29/08',
    time: '19:30',
    league: '🏴󠁧󠁢󠁥󠁮󠁧󠁿 Premier League',
    leagueFlag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
    home: 'Liverpool',
    away: 'Nottingham Forest',
    tag: 'Premier League',
    stadium: 'Anfield',
    homeForm: ['W', 'W', 'W', 'D', 'W'],
    awayForm: ['D', 'W', 'L', 'D', 'W'],
    homeRank: 2,
    awayRank: 10,
    handicap: '0 : 1'
  },

  // GERMANY BUNDESLIGA
  {
    id: 'm4',
    date: '29/08',
    time: '21:30',
    league: '🇩🇪 Bundesliga',
    leagueFlag: '🇩🇪',
    home: 'RB Leipzig',
    away: 'Borussia Monchengladbach',
    tag: 'Bundesliga',
    stadium: 'Red Bull Arena',
    homeForm: ['W', 'W', 'D', 'L', 'W'],
    awayForm: ['D', 'L', 'W', 'D', 'L'],
    homeRank: 3,
    awayRank: 8,
    handicap: '0 : 1'
  },

  // GERMANY BUNDESLIGA
  {
    id: 'm5',
    date: '30/08',
    time: '00:30',
    league: '🇩🇪 Bundesliga',
    leagueFlag: '🇩🇪',
    home: 'Borussia Dortmund',
    away: 'Hamburger SV',
    tag: 'Bundesliga',
    stadium: 'Signal Iduna Park',
    homeForm: ['W', 'W', 'D', 'L', 'W'],
    awayForm: ['D', 'L', 'W', 'D', 'L'],
    homeRank: 4,
    awayRank: 12,
    handicap: '0 : 1 1/2'
  },

  // ENGLISH PREMIER LEAGUE
  {
    id: 'm6',
    date: '30/08',
    time: '00:30',
    league: '🏴󠁧󠁢󠁥󠁮󠁧󠁿 Premier League',
    leagueFlag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
    home: 'Tottenham Hotspur',
    away: 'Newcastle United',
    tag: 'Premier League',
    stadium: 'Tottenham Hotspur Stadium',
    homeForm: ['W', 'W', 'D', 'L', 'W'],
    awayForm: ['W', 'D', 'L', 'W', 'D'],
    homeRank: 6,
    awayRank: 7,
    handicap: '0 : 1/4'
  },

  // NETHERLANDS EREDIVISIE
  {
    id: 'm7',
    date: '30/08',
    time: '00:45',
    league: '🇳🇱 Eredivisie',
    leagueFlag: '🇳🇱',
    home: 'AZ Alkmaar',
    away: 'Go Ahead Eagles',
    tag: 'Eredivisie',
    stadium: 'AFAS Stadion',
    homeForm: ['W', 'W', 'D', 'L', 'W'],
    awayForm: ['D', 'L', 'W', 'D', 'L'],
    homeRank: 3,
    awayRank: 8,
    handicap: '0 : 1 1/2'
  },

  // SPAIN LA LIGA
  {
    id: 'm8',
    date: '30/08',
    time: '01:00',
    league: '🇪🇸 La Liga',
    leagueFlag: '🇪🇸',
    home: 'Real Sociedad',
    away: 'RCD Espanyol',
    tag: 'La Liga',
    stadium: 'Reale Arena',
    homeForm: ['W', 'D', 'L', 'W', 'D'],
    awayForm: ['D', 'L', 'W', 'D', 'L'],
    homeRank: 6,
    awayRank: 14,
    handicap: '0 : 1/2'
  },

  // SAUDI ARABIA PRO LEAGUE
  {
    id: 'm9',
    date: '30/08',
    time: '02:00',
    league: '🇸🇦 Saudi Pro League',
    leagueFlag: '🇸🇦',
    home: 'Al Fateh',
    away: 'Al Ittihad Jeddah',
    tag: 'Saudi Pro League',
    stadium: 'Prince Abdullah bin Jalawi',
    homeForm: ['L', 'D', 'W', 'L', 'D'],
    awayForm: ['W', 'W', 'W', 'D', 'W'],
    homeRank: 14,
    awayRank: 3,
    handicap: '1/2 : 0'
  },

  // TURKIYE SUPER LEAGUE
  {
    id: 'm10',
    date: '30/08',
    time: '02:30',
    league: '🇹🇷 Turkiye Super League',
    leagueFlag: '🇹🇷',
    home: 'Galatasaray',
    away: 'Goztepe AS',
    tag: 'Super League',
    stadium: 'Rams Park',
    homeForm: ['W', 'W', 'W', 'D', 'W'],
    awayForm: ['W', 'D', 'L', 'W', 'D'],
    homeRank: 1,
    awayRank: 8,
    handicap: '0 : 1 1/4'
  },

  // ITALY SERIE A
  {
    id: 'm11',
    date: '30/08',
    time: '02:45',
    league: '🇮🇹 Serie A',
    leagueFlag: '🇮🇹',
    home: 'Juventus',
    away: 'Parma',
    tag: 'Serie A',
    stadium: 'Allianz Stadium',
    homeForm: ['W', 'W', 'W', 'D', 'W'],
    awayForm: ['L', 'D', 'W', 'L', 'D'],
    homeRank: 1,
    awayRank: 16,
    handicap: '0 : 1 3/4'
  },

  // FRANCE LIGUE 1
  {
    id: 'm12',
    date: '30/08',
    time: '02:45',
    league: '🇫🇷 Ligue 1',
    leagueFlag: '🇫🇷',
    home: 'Lyon',
    away: 'Le Havre',
    tag: 'Ligue 1',
    stadium: 'Groupama Stadium',
    homeForm: ['W', 'W', 'D', 'L', 'W'],
    awayForm: ['D', 'L', 'W', 'D', 'L'],
    homeRank: 5,
    awayRank: 14,
    handicap: '0 : 1 1/4'
  },

  // SPAIN LA LIGA
  {
    id: 'm13',
    date: '30/08',
    time: '03:30',
    league: '🇪🇸 La Liga',
    leagueFlag: '🇪🇸',
    home: 'Sevilla',
    away: 'Atletico de Madrid',
    tag: 'La Liga',
    stadium: 'Estadio Ramon Sanchez-Pizjuan',
    homeForm: ['W', 'D', 'L', 'W', 'D'],
    awayForm: ['W', 'W', 'D', 'L', 'W'],
    homeRank: 8,
    awayRank: 3,
    handicap: '1/2 : 0'
  }
];

export const PREDICTIONS_DATA: Prediction[] = [
  // ==================== 29 AGUSTUS 2026 ====================

  {
    id: 'p1',
    matchId: 'm1',
    league: '🇯🇵 J1 League',
    home: 'Gamba Osaka',
    away: 'Sanfrecce Hiroshima',
    score: '1 - 2',
    confidence: 'high',
    confidencePct: 72,
    homeProb: 22,
    drawProb: 24,
    awayProb: 54,
    pick: 'AWAY',
    pickLabel: 'Sanfrecce Hiroshima Win',
    odds: 1.62,
    overUnder: 'Over 2.5',
    btts: 'YES',
    note: 'Sanfrecce Hiroshima adalah tim papan atas J1 League dengan skuad berkualitas.',
    h2hSummary: 'Hiroshima menang 3 dari 4 pertemuan terakhir.',
    keyPlayer: 'Daichi Sasaki'
  },
  {
    id: 'p2',
    matchId: 'm2',
    league: '🇯🇵 J1 League',
    home: 'Vissel Kobe',
    away: 'Cerezo Osaka',
    score: '2 - 1',
    confidence: 'high',
    confidencePct: 70,
    homeProb: 66,
    drawProb: 20,
    awayProb: 14,
    pick: 'HOME',
    pickLabel: 'Vissel Kobe Win',
    odds: 1.68,
    overUnder: 'Over 2.5',
    btts: 'YES',
    note: 'Vissel Kobe memiliki skuad bintang dan bermain di kandang.',
    h2hSummary: 'Kobe menang 3 dari 4 pertemuan terakhir.',
    keyPlayer: 'Yuya Osako'
  },
  {
    id: 'p3',
    matchId: 'm3',
    league: '🏴󠁧󠁢󠁥󠁮󠁧󠁿 Premier League',
    home: 'Liverpool',
    away: 'Nottingham Forest',
    score: '2 - 0',
    confidence: 'high',
    confidencePct: 78,
    homeProb: 74,
    drawProb: 16,
    awayProb: 10,
    pick: 'HOME',
    pickLabel: 'Liverpool Win to Nil',
    odds: 1.48,
    overUnder: 'Under 2.5',
    btts: 'NO',
    note: 'Liverpool adalah raja Premier League dengan skuad bintang dan target juara.',
    h2hSummary: 'Liverpool selalu menang telak di Anfield.',
    keyPlayer: 'Mohamed Salah'
  },
  {
    id: 'p4',
    matchId: 'm4',
    league: '🇩🇪 Bundesliga',
    home: 'RB Leipzig',
    away: 'Borussia Monchengladbach',
    score: '2 - 1',
    confidence: 'mid',
    confidencePct: 62,
    homeProb: 48,
    drawProb: 26,
    awayProb: 26,
    pick: 'HOME',
    pickLabel: 'RB Leipzig Win',
    odds: 1.92,
    overUnder: 'Over 2.5',
    btts: 'YES',
    note: 'RB Leipzig bermain di kandang dengan skuad berkualitas.',
    h2hSummary: 'Leipzig menang 2 dari 3 pertemuan terakhir.',
    keyPlayer: 'Lois Openda'
  },
  {
    id: 'p5',
    matchId: 'm5',
    league: '🇩🇪 Bundesliga',
    home: 'Borussia Dortmund',
    away: 'Hamburger SV',
    score: '3 - 1',
    confidence: 'high',
    confidencePct: 76,
    homeProb: 72,
    drawProb: 18,
    awayProb: 10,
    pick: 'HOME',
    pickLabel: 'Dortmund Win & Over 2.5',
    odds: 1.55,
    overUnder: 'Over 2.5',
    btts: 'YES',
    note: 'Borussia Dortmund adalah raja Bundesliga dengan skuad bintang.',
    h2hSummary: 'Dortmund selalu menang telak di Signal Iduna Park.',
    keyPlayer: 'Julian Brandt'
  },
  {
    id: 'p6',
    matchId: 'm6',
    league: '🏴󠁧󠁢󠁥󠁮󠁧󠁿 Premier League',
    home: 'Tottenham Hotspur',
    away: 'Newcastle United',
    score: '2 - 1',
    confidence: 'mid',
    confidencePct: 62,
    homeProb: 48,
    drawProb: 26,
    awayProb: 26,
    pick: 'HOME',
    pickLabel: 'Tottenham Win',
    odds: 1.92,
    overUnder: 'Over 2.5',
    btts: 'YES',
    note: 'Tottenham bermain di kandang dengan skuad berkualitas.',
    h2hSummary: 'Tottenham menang 2 dari 3 pertemuan terakhir.',
    keyPlayer: 'Son Heung-min'
  },
  {
    id: 'p7',
    matchId: 'm7',
    league: '🇳🇱 Eredivisie',
    home: 'AZ Alkmaar',
    away: 'Go Ahead Eagles',
    score: '2 - 0',
    confidence: 'high',
    confidencePct: 72,
    homeProb: 68,
    drawProb: 18,
    awayProb: 14,
    pick: 'HOME',
    pickLabel: 'AZ Alkmaar Win',
    odds: 1.68,
    overUnder: 'Under 2.5',
    btts: 'NO',
    note: 'AZ Alkmaar adalah tim papan atas Eredivisie dengan skuad berkualitas.',
    h2hSummary: 'AZ menang 3 dari 4 pertemuan terakhir.',
    keyPlayer: 'Vangelis Pavlidis'
  },
  {
    id: 'p8',
    matchId: 'm8',
    league: '🇪🇸 La Liga',
    home: 'Real Sociedad',
    away: 'RCD Espanyol',
    score: '2 - 0',
    confidence: 'high',
    confidencePct: 70,
    homeProb: 66,
    drawProb: 20,
    awayProb: 14,
    pick: 'HOME',
    pickLabel: 'Real Sociedad Win',
    odds: 1.68,
    overUnder: 'Under 2.5',
    btts: 'NO',
    note: 'Real Sociedad bermain di kandang dengan skuad berkualitas.',
    h2hSummary: 'Sociedad menang 3 dari 4 pertemuan terakhir.',
    keyPlayer: 'Mikel Oyarzabal'
  },
  {
    id: 'p9',
    matchId: 'm9',
    league: '🇸🇦 Saudi Pro League',
    home: 'Al Fateh',
    away: 'Al Ittihad Jeddah',
    score: '1 - 2',
    confidence: 'high',
    confidencePct: 74,
    homeProb: 22,
    drawProb: 24,
    awayProb: 54,
    pick: 'AWAY',
    pickLabel: 'Al Ittihad Win',
    odds: 1.58,
    overUnder: 'Over 2.5',
    btts: 'YES',
    note: 'Al Ittihad adalah tim papan atas Saudi dengan skuad bintang.',
    h2hSummary: 'Al Ittihad menang 3 dari 4 pertemuan terakhir.',
    keyPlayer: 'Karim Benzema'
  },
  {
    id: 'p10',
    matchId: 'm10',
    league: '🇹🇷 Turkiye Super League',
    home: 'Galatasaray',
    away: 'Goztepe AS',
    score: '3 - 1',
    confidence: 'high',
    confidencePct: 76,
    homeProb: 72,
    drawProb: 18,
    awayProb: 10,
    pick: 'HOME',
    pickLabel: 'Galatasaray Win & Over 2.5',
    odds: 1.55,
    overUnder: 'Over 2.5',
    btts: 'YES',
    note: 'Galatasaray adalah raja Turki dengan skuad bintang.',
    h2hSummary: 'Galatasaray selalu menang telak di Rams Park.',
    keyPlayer: 'Mauro Icardi'
  },
  {
    id: 'p11',
    matchId: 'm11',
    league: '🇮🇹 Serie A',
    home: 'Juventus',
    away: 'Parma',
    score: '2 - 0',
    confidence: 'high',
    confidencePct: 80,
    homeProb: 78,
    drawProb: 14,
    awayProb: 8,
    pick: 'HOME',
    pickLabel: 'Juventus Win to Nil',
    odds: 1.45,
    overUnder: 'Under 2.5',
    btts: 'NO',
    note: 'Juventus adalah raja Italia dengan skuad bintang dan target juara Serie A.',
    h2hSummary: 'Juventus selalu menang telak di Allianz Stadium.',
    keyPlayer: 'Dusan Vlahovic'
  },
  {
    id: 'p12',
    matchId: 'm12',
    league: '🇫🇷 Ligue 1',
    home: 'Lyon',
    away: 'Le Havre',
    score: '2 - 0',
    confidence: 'high',
    confidencePct: 72,
    homeProb: 68,
    drawProb: 18,
    awayProb: 14,
    pick: 'HOME',
    pickLabel: 'Lyon Win',
    odds: 1.68,
    overUnder: 'Under 2.5',
    btts: 'NO',
    note: 'Lyon adalah tim papan atas Ligue 1 dengan skuad berkualitas.',
    h2hSummary: 'Lyon menang 3 dari 4 pertemuan terakhir.',
    keyPlayer: 'Alexandre Lacazette'
  },
  {
    id: 'p13',
    matchId: 'm13',
    league: '🇪🇸 La Liga',
    home: 'Sevilla',
    away: 'Atletico de Madrid',
    score: '1 - 2',
    confidence: 'high',
    confidencePct: 72,
    homeProb: 22,
    drawProb: 24,
    awayProb: 54,
    pick: 'AWAY',
    pickLabel: 'Atletico Madrid Win',
    odds: 1.62,
    overUnder: 'Over 2.5',
    btts: 'YES',
    note: 'Atletico Madrid adalah tim papan atas La Liga dengan skuad bintang.',
    h2hSummary: 'Atletico menang 3 dari 4 pertemuan terakhir.',
    keyPlayer: 'Antoine Griezmann'
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
        match: MATCHES_DATA.find(m => m.id === 'm3')!,
        prediction: PREDICTIONS_DATA.find(p => p.matchId === 'm3')!,
        odds: 1.48,
        pick: 'Liverpool Menang'
      },
      {
        match: MATCHES_DATA.find(m => m.id === 'm11')!,
        prediction: PREDICTIONS_DATA.find(p => p.matchId === 'm11')!,
        odds: 1.45,
        pick: 'Juventus Menang'
      },
      {
        match: MATCHES_DATA.find(m => m.id === 'm5')!,
        prediction: PREDICTIONS_DATA.find(p => p.matchId === 'm5')!,
        odds: 1.55,
        pick: 'Dortmund Menang'
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
        odds: 1.48,
        pick: 'Liverpool Menang'
      },
      {
        match: MATCHES_DATA.find(m => m.id === 'm13')!,
        prediction: PREDICTIONS_DATA.find(p => p.matchId === 'm13')!,
        odds: 1.62,
        pick: 'Atletico Madrid Menang'
      },
      {
        match: MATCHES_DATA.find(m => m.id === 'm10')!,
        prediction: PREDICTIONS_DATA.find(p => p.matchId === 'm10')!,
        odds: 1.55,
        pick: 'Galatasaray Menang'
      }
    ]
  },
  {
    id: 'pkg-3',
    title: '🔥 PARLAY HOT (3-TIM) - 29 AGUSTUS',
    source: 'Rekomendasi KAPSUL4D Special',
    badge: 'Hot Pick',
    totalOdds: 4.50,
    riskLevel: 'Sedang',
    legs: [
      {
        match: MATCHES_DATA.find(m => m.id === 'm3')!,
        prediction: PREDICTIONS_DATA.find(p => p.matchId === 'm3')!,
        odds: 1.48,
        pick: 'Liverpool Menang'
      },
      {
        match: MATCHES_DATA.find(m => m.id === 'm1')!,
        prediction: PREDICTIONS_DATA.find(p => p.matchId === 'm1')!,
        odds: 1.62,
        pick: 'Hiroshima Menang'
      },
      {
        match: MATCHES_DATA.find(m => m.id === 'm4')!,
        prediction: PREDICTIONS_DATA.find(p => p.matchId === 'm4')!,
        odds: 1.92,
        pick: 'RB Leipzig Menang'
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
        match: MATCHES_DATA.find(m => m.id === 'm3')!,
        prediction: PREDICTIONS_DATA.find(p => p.matchId === 'm3')!,
        odds: 1.48,
        pick: 'Liverpool Menang'
      },
      {
        match: MATCHES_DATA.find(m => m.id === 'm5')!,
        prediction: PREDICTIONS_DATA.find(p => p.matchId === 'm5')!,
        odds: 1.55,
        pick: 'Dortmund Menang'
      },
      {
        match: MATCHES_DATA.find(m => m.id === 'm10')!,
        prediction: PREDICTIONS_DATA.find(p => p.matchId === 'm10')!,
        odds: 1.55,
        pick: 'Galatasaray Menang'
      },
      {
        match: MATCHES_DATA.find(m => m.id === 'm11')!,
        prediction: PREDICTIONS_DATA.find(p => p.matchId === 'm11')!,
        odds: 1.45,
        pick: 'Juventus Menang'
      }
    ]
  },
  {
    id: 'pkg-5',
    title: '🏴󠁧󠁢󠁥󠁮󠁧󠁿🇪🇺 PREMIER LEAGUE & BUNDESLIGA COMBO (3-TIM)',
    source: 'Rekomendasi Liga Inggris & Jerman',
    badge: 'Odds @5.50x',
    totalOdds: 5.50,
    riskLevel: 'Sedang',
    legs: [
      {
        match: MATCHES_DATA.find(m => m.id === 'm3')!,
        prediction: PREDICTIONS_DATA.find(p => p.matchId === 'm3')!,
        odds: 1.48,
        pick: 'Liverpool Menang'
      },
      {
        match: MATCHES_DATA.find(m => m.id === 'm4')!,
        prediction: PREDICTIONS_DATA.find(p => p.matchId === 'm4')!,
        odds: 1.92,
        pick: 'RB Leipzig Menang'
      },
      {
        match: MATCHES_DATA.find(m => m.id === 'm5')!,
        prediction: PREDICTIONS_DATA.find(p => p.matchId === 'm5')!,
        odds: 1.55,
        pick: 'Dortmund Menang'
      }
    ]
  },
  {
    id: 'pkg-6',
    title: '🇪🇸🇹🇷 LA LIGA & SUPER LEAGUE COMBO (3-TIM)',
    source: 'Rekomendasi Liga Spanyol & Turki',
    badge: 'Odds @5.25x',
    totalOdds: 5.25,
    riskLevel: 'Sedang',
    legs: [
      {
        match: MATCHES_DATA.find(m => m.id === 'm8')!,
        prediction: PREDICTIONS_DATA.find(p => p.matchId === 'm8')!,
        odds: 1.68,
        pick: 'Real Sociedad Menang'
      },
      {
        match: MATCHES_DATA.find(m => m.id === 'm10')!,
        prediction: PREDICTIONS_DATA.find(p => p.matchId === 'm10')!,
        odds: 1.55,
        pick: 'Galatasaray Menang'
      },
      {
        match: MATCHES_DATA.find(m => m.id === 'm13')!,
        prediction: PREDICTIONS_DATA.find(p => p.matchId === 'm13')!,
        odds: 1.62,
        pick: 'Atletico Madrid Menang'
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
    text: 'Prediksi Liverpool & Juventus kemarin tembus semua! Saya pasang single bet combo menang 14.2jt. Web ini informasinya paling update & akurat! 🏅',
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
    text: 'Ikutin prediksi Liverpool & Galatasaray kemarin, 2 single bet masuk semua! WD 8.2jt langsung cair. Terima kasih KAPSUL4D! ✅',
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
    text: 'Prediksi Dortmund & Galatasaray kemarin masuk semua. Modal 500rb jadi 5.6jt. Makasih KAPSUL4D selalu kasih prediksi akurat! 🏅',
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
