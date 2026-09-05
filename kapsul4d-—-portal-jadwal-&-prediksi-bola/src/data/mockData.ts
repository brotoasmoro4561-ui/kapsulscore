import { Match, Prediction, ParlayPackage, Testimonial, LiveTransaction } from '../types';

export const OFFICIAL_LINK = "https://akseslink.com/kapsul4d";
export const BRAND_LOGO_GIF = "https://ik.imagekit.io/8btthcfrf/Uploud/KAPSUL4D_shine_bubbles.gif?updatedAt=1786252273564";
export const BRAND_BANNER_GIF = "https://ik.imagekit.io/8btthcfrf/Uploud/KAPSUL4D.gif";
export const POPUP_BANNER_IMG = "https://ik.imagekit.io/8btthcfrf/Uploud/e6a972c6-4920-468c-80d6-aefa22558ede_11zon.png?updatedAt=1786668230036";
export const BALL_ICON = "https://ik.imagekit.io/8btthcfrf/Uploud/Logo%20Bola%20k4d.png";

export const MATCHES_DATA: Match[] = [
  // ==================== 5 SEPTEMBER 2026 ====================

  // KOREA K-LEAGUE 1
  {
    id: 'm1',
    date: '05/09',
    time: '17:00',
    league: '🇰🇷 K-League 1',
    leagueFlag: '🇰🇷',
    home: 'Jeonbuk Hyundai Motors',
    away: 'Pohang Steelers',
    tag: 'K-League 1',
    stadium: 'Jeonju World Cup Stadium',
    homeForm: ['W', 'W', 'D', 'L', 'W'],
    awayForm: ['D', 'W', 'L', 'D', 'W'],
    homeRank: 3,
    awayRank: 7,
    handicap: '0 : 1/2'
  },
  {
    id: 'm2',
    date: '05/09',
    time: '17:00',
    league: '🇰🇷 K-League 1',
    leagueFlag: '🇰🇷',
    home: 'FC Seoul',
    away: 'Incheon United',
    tag: 'K-League 1',
    stadium: 'Seoul World Cup Stadium',
    homeForm: ['W', 'W', 'W', 'D', 'W'],
    awayForm: ['L', 'D', 'W', 'L', 'D'],
    homeRank: 1,
    awayRank: 6,
    handicap: '0 : 1/2'
  },

  // ENGLISH PREMIER LEAGUE
  {
    id: 'm3',
    date: '05/09',
    time: '18:30',
    league: '🏴󠁧󠁢󠁥󠁮󠁧󠁿 Premier League',
    leagueFlag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
    home: 'Newcastle United',
    away: 'Bournemouth AFC',
    tag: 'Premier League',
    stadium: 'St James Park',
    homeForm: ['W', 'D', 'L', 'W', 'D'],
    awayForm: ['L', 'D', 'W', 'L', 'D'],
    homeRank: 7,
    awayRank: 14,
    handicap: '0 : 1/4'
  },

  // INDONESIA LIGA 1
  {
    id: 'm4',
    date: '05/09',
    time: '19:00',
    league: '🇮🇩 Indonesia Liga 1',
    leagueFlag: '🇮🇩',
    home: 'Borneo FC Samarinda',
    away: 'Persija Jakarta',
    tag: 'Liga 1',
    stadium: 'Segiri Samarinda Stadium',
    homeForm: ['W', 'W', 'D', 'L', 'W'],
    awayForm: ['W', 'W', 'D', 'L', 'W'],
    homeRank: 3,
    awayRank: 2,
    handicap: '0 : 0'
  },
  {
    id: 'm5',
    date: '05/09',
    time: '19:00',
    league: '🇮🇩 Indonesia Liga 1',
    leagueFlag: '🇮🇩',
    home: 'Bhayangkara Presisi Lampung',
    away: 'Persebaya Surabaya',
    tag: 'Liga 1',
    stadium: 'Pakansari Stadium',
    homeForm: ['D', 'L', 'W', 'D', 'L'],
    awayForm: ['W', 'W', 'D', 'L', 'W'],
    homeRank: 14,
    awayRank: 5,
    handicap: '0 : 0'
  },

  // GERMANY BUNDESLIGA
  {
    id: 'm6',
    date: '05/09',
    time: '20:30',
    league: '🇩🇪 Bundesliga',
    leagueFlag: '🇩🇪',
    home: 'Bayer Leverkusen',
    away: 'Union Berlin',
    tag: 'Bundesliga',
    stadium: 'BayArena',
    homeForm: ['W', 'W', 'D', 'L', 'W'],
    awayForm: ['D', 'L', 'W', 'D', 'L'],
    homeRank: 3,
    awayRank: 8,
    handicap: '0 : 1 1/4'
  },

  // ENGLISH PREMIER LEAGUE
  {
    id: 'm7',
    date: '05/09',
    time: '21:00',
    league: '🏴󠁧󠁢󠁥󠁮󠁧󠁿 Premier League',
    leagueFlag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
    home: 'Manchester City',
    away: 'Coventry City',
    tag: 'Premier League',
    stadium: 'Etihad Stadium',
    homeForm: ['W', 'W', 'W', 'W', 'D'],
    awayForm: ['L', 'D', 'W', 'L', 'D'],
    homeRank: 1,
    awayRank: 18,
    handicap: '0 : 2 1/4'
  },

  // NETHERLANDS EREDIVISIE
  {
    id: 'm8',
    date: '05/09',
    time: '21:30',
    league: '🇳🇱 Eredivisie',
    leagueFlag: '🇳🇱',
    home: 'Ajax',
    away: 'PSV Eindhoven',
    tag: 'Eredivisie Top Match',
    stadium: 'Johan Cruyff Arena',
    homeForm: ['W', 'W', 'W', 'W', 'D'],
    awayForm: ['W', 'W', 'W', 'D', 'W'],
    homeRank: 1,
    awayRank: 2,
    handicap: '0 : 0'
  },

  // ITALY SERIE A
  {
    id: 'm9',
    date: '05/09',
    time: '23:00',
    league: '🇮🇹 Serie A',
    leagueFlag: '🇮🇹',
    home: 'Inter Milan',
    away: 'Napoli',
    tag: 'Serie A Big Match',
    stadium: 'San Siro',
    homeForm: ['W', 'W', 'W', 'D', 'W'],
    awayForm: ['W', 'W', 'D', 'L', 'W'],
    homeRank: 1,
    awayRank: 3,
    handicap: '0 : 3/4'
  },

  // LIGA PORTUGAL
  {
    id: 'm10',
    date: '05/09',
    time: '23:00',
    league: '🇵🇹 Liga Portugal',
    leagueFlag: '🇵🇹',
    home: 'Maritimo',
    away: 'Benfica',
    tag: 'Liga Portugal',
    stadium: 'Estadio dos Barreiros',
    homeForm: ['W', 'D', 'L', 'W', 'D'],
    awayForm: ['W', 'W', 'W', 'W', 'D'],
    homeRank: 9,
    awayRank: 1,
    handicap: '1 3/4 : 0'
  },

  // CZECHIA
  {
    id: 'm11',
    date: '05/09',
    time: '23:00',
    league: '🇨🇿 Czechia',
    leagueFlag: '🇨🇿',
    home: 'Slavia Praha',
    away: 'Zbrojovka Brno',
    tag: 'Czechia',
    stadium: 'Fortuna Arena',
    homeForm: ['W', 'W', 'W', 'D', 'W'],
    awayForm: ['L', 'D', 'W', 'L', 'D'],
    homeRank: 0,
    awayRank: 0,
    handicap: '0 : 1 1/2'
  },

  // ENGLISH PREMIER LEAGUE
  {
    id: 'm12',
    date: '05/09',
    time: '23:30',
    league: '🏴󠁧󠁢󠁥󠁮󠁧󠁿 Premier League',
    leagueFlag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
    home: 'Nottingham Forest',
    away: 'Tottenham Hotspur',
    tag: 'Premier League',
    stadium: 'City Ground',
    homeForm: ['D', 'W', 'L', 'D', 'W'],
    awayForm: ['W', 'W', 'D', 'L', 'W'],
    homeRank: 10,
    awayRank: 5,
    handicap: '0 : 1/4'
  },

  // GERMANY BUNDESLIGA
  {
    id: 'm13',
    date: '05/09',
    time: '23:30',
    league: '🇩🇪 Bundesliga',
    leagueFlag: '🇩🇪',
    home: 'Schalke 04',
    away: 'Bayern Munchen',
    tag: 'Bundesliga',
    stadium: 'Veltins-Arena',
    homeForm: ['D', 'L', 'W', 'D', 'L'],
    awayForm: ['W', 'W', 'W', 'W', 'D'],
    homeRank: 12,
    awayRank: 1,
    handicap: '2 1/4 : 0'
  },

  // NETHERLANDS EREDIVISIE
  {
    id: 'm14',
    date: '05/09',
    time: '23:45',
    league: '🇳🇱 Eredivisie',
    leagueFlag: '🇳🇱',
    home: 'NEC Nijmegen',
    away: 'Feyenoord',
    tag: 'Eredivisie',
    stadium: 'Goffertstadion',
    homeForm: ['D', 'W', 'L', 'W', 'D'],
    awayForm: ['W', 'W', 'W', 'D', 'W'],
    homeRank: 10,
    awayRank: 3,
    handicap: '1/4 : 0'
  },


  // ==================== 6 SEPTEMBER 2026 ====================

  // TURKIYE SUPER LEAGUE
  {
    id: 'm15',
    date: '06/09',
    time: '00:00',
    league: '🇹🇷 Turkiye Super League',
    leagueFlag: '🇹🇷',
    home: 'Fenerbahce',
    away: 'Besiktas',
    tag: 'Super League Derby',
    stadium: 'Ulker Stadium',
    homeForm: ['W', 'W', 'W', 'D', 'W'],
    awayForm: ['W', 'W', 'W', 'D', 'W'],
    homeRank: 2,
    awayRank: 1,
    handicap: '0 : 1/2'
  },

  // GERMANY BUNDESLIGA
  {
    id: 'm16',
    date: '06/09',
    time: '00:30',
    league: '🇩🇪 Bundesliga',
    leagueFlag: '🇩🇪',
    home: 'Hoffenheim',
    away: 'Borussia Dortmund',
    tag: 'Bundesliga',
    stadium: 'PreZero Arena',
    homeForm: ['W', 'D', 'L', 'W', 'D'],
    awayForm: ['W', 'W', 'D', 'L', 'W'],
    homeRank: 6,
    awayRank: 4,
    handicap: '1/4 : 0'
  },

  // SAUDI ARABIA PRO LEAGUE
  {
    id: 'm17',
    date: '06/09',
    time: '01:00',
    league: '🇸🇦 Saudi Pro League',
    leagueFlag: '🇸🇦',
    home: 'Al Ittihad',
    away: 'Al Nassr',
    tag: 'Saudi Derby',
    stadium: 'King Abdullah Sports City',
    homeForm: ['W', 'W', 'W', 'D', 'W'],
    awayForm: ['W', 'W', 'W', 'D', 'W'],
    homeRank: 2,
    awayRank: 3,
    handicap: '1 : 0'
  },

  // ITALY SERIE A
  {
    id: 'm18',
    date: '06/09',
    time: '01:45',
    league: '🇮🇹 Serie A',
    leagueFlag: '🇮🇹',
    home: 'Roma',
    away: 'Atalanta',
    tag: 'Serie A',
    stadium: 'Stadio Olimpico',
    homeForm: ['W', 'W', 'D', 'L', 'W'],
    awayForm: ['W', 'W', 'D', 'L', 'W'],
    homeRank: 5,
    awayRank: 4,
    handicap: '0 : 3/4'
  },

  // LIGA PORTUGAL
  {
    id: 'm19',
    date: '06/09',
    time: '02:30',
    league: '🇵🇹 Liga Portugal',
    leagueFlag: '🇵🇹',
    home: 'Sporting Lisbon',
    away: 'Nacional',
    tag: 'Liga Portugal',
    stadium: 'Estadio Jose Alvalade',
    homeForm: ['W', 'W', 'W', 'D', 'W'],
    awayForm: ['L', 'D', 'W', 'L', 'D'],
    homeRank: 2,
    awayRank: 12,
    handicap: '0 : 1 3/4'
  }
];

export const PREDICTIONS_DATA: Prediction[] = [
  // ==================== 5 SEPTEMBER 2026 ====================

  {
    id: 'p1',
    matchId: 'm1',
    league: '🇰🇷 K-League 1',
    home: 'Jeonbuk Hyundai Motors',
    away: 'Pohang Steelers',
    score: '2 - 1',
    confidence: 'mid',
    confidencePct: 62,
    homeProb: 48,
    drawProb: 26,
    awayProb: 26,
    pick: 'HOME',
    pickLabel: 'Jeonbuk Hyundai Motors Win',
    odds: 1.92,
    overUnder: 'Over 2.5',
    btts: 'YES',
    note: 'Jeonbuk Hyundai Motors adalah tim papan atas K-League 1 dengan skuad berkualitas.',
    h2hSummary: 'Jeonbuk menang 2 dari 3 pertemuan terakhir.',
    keyPlayer: 'Han Kyo-won'
  },
  {
    id: 'p2',
    matchId: 'm2',
    league: '🇰🇷 K-League 1',
    home: 'FC Seoul',
    away: 'Incheon United',
    score: '2 - 1',
    confidence: 'high',
    confidencePct: 72,
    homeProb: 68,
    drawProb: 18,
    awayProb: 14,
    pick: 'HOME',
    pickLabel: 'FC Seoul Win',
    odds: 1.68,
    overUnder: 'Over 2.5',
    btts: 'YES',
    note: 'FC Seoul adalah pemuncak klasemen K-League 1 dan dominan di kandang.',
    h2hSummary: 'FC Seoul menang 3 dari 4 pertemuan terakhir.',
    keyPlayer: 'Jesse Lingard'
  },
  {
    id: 'p3',
    matchId: 'm3',
    league: '🏴󠁧󠁢󠁥󠁮󠁧󠁿 Premier League',
    home: 'Newcastle United',
    away: 'Bournemouth AFC',
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
    note: 'Kedua tim berimbang di papan tengah Premier League.',
    h2hSummary: '2 dari 3 pertemuan berakhir imbang.',
    keyPlayer: 'Alexander Isak'
  },
  {
    id: 'p4',
    matchId: 'm4',
    league: '🇮🇩 Indonesia Liga 1',
    home: 'Borneo FC Samarinda',
    away: 'Persija Jakarta',
    score: '2 - 1',
    confidence: 'mid',
    confidencePct: 58,
    homeProb: 44,
    drawProb: 28,
    awayProb: 28,
    pick: 'HOME',
    pickLabel: 'Borneo FC Win',
    odds: 2.05,
    overUnder: 'Over 2.5',
    btts: 'YES',
    note: 'Borneo FC bermain di kandang dengan dukungan penuh suporter.',
    h2hSummary: 'Borneo menang 2 dari 3 pertemuan terakhir.',
    keyPlayer: 'Matheus Pato'
  },
  {
    id: 'p5',
    matchId: 'm5',
    league: '🇮🇩 Indonesia Liga 1',
    home: 'Bhayangkara Presisi Lampung',
    away: 'Persebaya Surabaya',
    score: '1 - 2',
    confidence: 'mid',
    confidencePct: 58,
    homeProb: 30,
    drawProb: 28,
    awayProb: 42,
    pick: 'AWAY',
    pickLabel: 'Persebaya Win',
    odds: 2.10,
    overUnder: 'Over 2.5',
    btts: 'YES',
    note: 'Persebaya Surabaya adalah tim papan atas Liga 1 dengan skuad berkualitas.',
    h2hSummary: 'Persebaya menang 2 dari 3 pertemuan terakhir.',
    keyPlayer: 'Paulo Henrique'
  },
  {
    id: 'p6',
    matchId: 'm6',
    league: '🇩🇪 Bundesliga',
    home: 'Bayer Leverkusen',
    away: 'Union Berlin',
    score: '3 - 1',
    confidence: 'high',
    confidencePct: 74,
    homeProb: 70,
    drawProb: 18,
    awayProb: 12,
    pick: 'HOME',
    pickLabel: 'Leverkusen Win & Over 2.5',
    odds: 1.58,
    overUnder: 'Over 2.5',
    btts: 'YES',
    note: 'Bayer Leverkusen adalah tim papan atas Bundesliga dengan skuad bintang.',
    h2hSummary: 'Leverkusen menang 3 dari 4 pertemuan terakhir.',
    keyPlayer: 'Florian Wirtz'
  },
  {
    id: 'p7',
    matchId: 'm7',
    league: '🏴󠁧󠁢󠁥󠁮󠁧󠁿 Premier League',
    home: 'Manchester City',
    away: 'Coventry City',
    score: '4 - 0',
    confidence: 'high',
    confidencePct: 84,
    homeProb: 82,
    drawProb: 12,
    awayProb: 6,
    pick: 'HOME',
    pickLabel: 'Man City Win to Nil',
    odds: 1.38,
    overUnder: 'Over 2.5',
    btts: 'NO',
    note: 'Manchester City adalah raja Premier League dengan skuad bintang dan target juara.',
    h2hSummary: 'Man City selalu menang telak di Etihad.',
    keyPlayer: 'Erling Haaland'
  },
  {
    id: 'p8',
    matchId: 'm8',
    league: '🇳🇱 Eredivisie',
    home: 'Ajax',
    away: 'PSV Eindhoven',
    score: '2 - 2',
    confidence: 'mid',
    confidencePct: 55,
    homeProb: 32,
    drawProb: 36,
    awayProb: 32,
    pick: 'DRAW',
    pickLabel: 'Draw / BTTS Yes',
    odds: 2.20,
    overUnder: 'Over 2.5',
    btts: 'YES',
    note: 'Laga puncak Eredivisie antara dua tim terbaik Belanda.',
    h2hSummary: '2 dari 3 pertemuan berakhir imbang.',
    keyPlayer: 'Steven Bergwijn'
  },
  {
    id: 'p9',
    matchId: 'm9',
    league: '🇮🇹 Serie A',
    home: 'Inter Milan',
    away: 'Napoli',
    score: '2 - 1',
    confidence: 'high',
    confidencePct: 72,
    homeProb: 68,
    drawProb: 18,
    awayProb: 14,
    pick: 'HOME',
    pickLabel: 'Inter Milan Win',
    odds: 1.68,
    overUnder: 'Over 2.5',
    btts: 'YES',
    note: 'Inter Milan adalah raja Italia dengan skuad bintang dan target juara Serie A.',
    h2hSummary: 'Inter menang 3 dari 4 pertemuan terakhir.',
    keyPlayer: 'Lautaro Martinez'
  },
  {
    id: 'p10',
    matchId: 'm10',
    league: '🇵🇹 Liga Portugal',
    home: 'Maritimo',
    away: 'Benfica',
    score: '0 - 3',
    confidence: 'high',
    confidencePct: 80,
    homeProb: 8,
    drawProb: 14,
    awayProb: 78,
    pick: 'AWAY',
    pickLabel: 'Benfica Win to Nil',
    odds: 1.45,
    overUnder: 'Over 2.5',
    btts: 'NO',
    note: 'Benfica adalah raja Portugal dengan skuad bintang.',
    h2hSummary: 'Benfica selalu menang telak di kandang lawan.',
    keyPlayer: 'Angel Di Maria'
  },
  {
    id: 'p11',
    matchId: 'm11',
    league: '🇨🇿 Czechia',
    home: 'Slavia Praha',
    away: 'Zbrojovka Brno',
    score: '3 - 0',
    confidence: 'high',
    confidencePct: 76,
    homeProb: 72,
    drawProb: 18,
    awayProb: 10,
    pick: 'HOME',
    pickLabel: 'Slavia Praha Win to Nil',
    odds: 1.55,
    overUnder: 'Over 2.5',
    btts: 'NO',
    note: 'Slavia Praha adalah raja Czechia dengan skuad bintang.',
    h2hSummary: 'Slavia selalu menang telak di kandang.',
    keyPlayer: 'Vaclav Jurecka'
  },
  {
    id: 'p12',
    matchId: 'm12',
    league: '🏴󠁧󠁢󠁥󠁮󠁧󠁿 Premier League',
    home: 'Nottingham Forest',
    away: 'Tottenham Hotspur',
    score: '1 - 2',
    confidence: 'mid',
    confidencePct: 62,
    homeProb: 28,
    drawProb: 26,
    awayProb: 46,
    pick: 'AWAY',
    pickLabel: 'Tottenham Win',
    odds: 1.92,
    overUnder: 'Over 2.5',
    btts: 'YES',
    note: 'Tottenham memiliki skuad lebih berkualitas dan target top 4 Premier League.',
    h2hSummary: 'Tottenham menang 3 dari 4 pertemuan terakhir.',
    keyPlayer: 'Son Heung-min'
  },
  {
    id: 'p13',
    matchId: 'm13',
    league: '🇩🇪 Bundesliga',
    home: 'Schalke 04',
    away: 'Bayern Munchen',
    score: '0 - 3',
    confidence: 'high',
    confidencePct: 82,
    homeProb: 8,
    drawProb: 14,
    awayProb: 78,
    pick: 'AWAY',
    pickLabel: 'Bayern Win to Nil',
    odds: 1.42,
    overUnder: 'Over 2.5',
    btts: 'NO',
    note: 'Bayern Munchen adalah raja Jerman dengan skuad bintang dan target treble.',
    h2hSummary: 'Bayern selalu menang telak di kandang lawan.',
    keyPlayer: 'Harry Kane'
  },
  {
    id: 'p14',
    matchId: 'm14',
    league: '🇳🇱 Eredivisie',
    home: 'NEC Nijmegen',
    away: 'Feyenoord',
    score: '1 - 2',
    confidence: 'high',
    confidencePct: 72,
    homeProb: 22,
    drawProb: 24,
    awayProb: 54,
    pick: 'AWAY',
    pickLabel: 'Feyenoord Win',
    odds: 1.62,
    overUnder: 'Over 2.5',
    btts: 'YES',
    note: 'Feyenoord adalah tim papan atas Eredivisie dengan skuad bintang.',
    h2hSummary: 'Feyenoord menang 3 dari 4 pertemuan terakhir.',
    keyPlayer: 'Santiago Gimenez'
  },


  // ==================== 6 SEPTEMBER 2026 ====================

  {
    id: 'p15',
    matchId: 'm15',
    league: '🇹🇷 Turkiye Super League',
    home: 'Fenerbahce',
    away: 'Besiktas',
    score: '2 - 1',
    confidence: 'mid',
    confidencePct: 60,
    homeProb: 46,
    drawProb: 28,
    awayProb: 26,
    pick: 'HOME',
    pickLabel: 'Fenerbahce Win',
    odds: 1.95,
    overUnder: 'Over 2.5',
    btts: 'YES',
    note: 'Fenerbahce bermain di kandang dengan dukungan penuh suporter di derby.',
    h2hSummary: 'Fenerbahce menang 2 dari 3 pertemuan terakhir.',
    keyPlayer: 'Edin Dzeko'
  },
  {
    id: 'p16',
    matchId: 'm16',
    league: '🇩🇪 Bundesliga',
    home: 'Hoffenheim',
    away: 'Borussia Dortmund',
    score: '1 - 2',
    confidence: 'high',
    confidencePct: 72,
    homeProb: 22,
    drawProb: 24,
    awayProb: 54,
    pick: 'AWAY',
    pickLabel: 'Dortmund Win',
    odds: 1.62,
    overUnder: 'Over 2.5',
    btts: 'YES',
    note: 'Borussia Dortmund adalah tim papan atas Bundesliga dengan skuad bintang.',
    h2hSummary: 'Dortmund menang 3 dari 4 pertemuan terakhir.',
    keyPlayer: 'Julian Brandt'
  },
  {
    id: 'p17',
    matchId: 'm17',
    league: '🇸🇦 Saudi Pro League',
    home: 'Al Ittihad',
    away: 'Al Nassr',
    score: '2 - 2',
    confidence: 'mid',
    confidencePct: 55,
    homeProb: 32,
    drawProb: 36,
    awayProb: 32,
    pick: 'DRAW',
    pickLabel: 'Draw / BTTS Yes',
    odds: 2.20,
    overUnder: 'Over 2.5',
    btts: 'YES',
    note: 'Derby Saudi antara dua tim bintang dengan skuad super.',
    h2hSummary: '2 dari 3 pertemuan berakhir imbang.',
    keyPlayer: 'Karim Benzema'
  },
  {
    id: 'p18',
    matchId: 'm18',
    league: '🇮🇹 Serie A',
    home: 'Roma',
    away: 'Atalanta',
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
    note: 'Kedua tim berimbang di papan atas Serie A.',
    h2hSummary: '2 dari 3 pertemuan berakhir imbang.',
    keyPlayer: 'Paulo Dybala'
  },
  {
    id: 'p19',
    matchId: 'm19',
    league: '🇵🇹 Liga Portugal',
    home: 'Sporting Lisbon',
    away: 'Nacional',
    score: '3 - 0',
    confidence: 'high',
    confidencePct: 80,
    homeProb: 78,
    drawProb: 14,
    awayProb: 8,
    pick: 'HOME',
    pickLabel: 'Sporting Win to Nil',
    odds: 1.42,
    overUnder: 'Over 2.5',
    btts: 'NO',
    note: 'Sporting Lisbon adalah raja Portugal dengan skuad bintang.',
    h2hSummary: 'Sporting selalu menang telak di kandang.',
    keyPlayer: 'Viktor Gyokeres'
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
        match: MATCHES_DATA.find(m => m.id === 'm7')!,
        prediction: PREDICTIONS_DATA.find(p => p.matchId === 'm7')!,
        odds: 1.38,
        pick: 'Manchester City Menang'
      },
      {
        match: MATCHES_DATA.find(m => m.id === 'm13')!,
        prediction: PREDICTIONS_DATA.find(p => p.matchId === 'm13')!,
        odds: 1.42,
        pick: 'Bayern Munchen Menang'
      },
      {
        match: MATCHES_DATA.find(m => m.id === 'm19')!,
        prediction: PREDICTIONS_DATA.find(p => p.matchId === 'm19')!,
        odds: 1.42,
        pick: 'Sporting Lisbon Menang'
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
        match: MATCHES_DATA.find(m => m.id === 'm9')!,
        prediction: PREDICTIONS_DATA.find(p => p.matchId === 'm9')!,
        odds: 1.68,
        pick: 'Inter Milan Menang'
      },
      {
        match: MATCHES_DATA.find(m => m.id === 'm6')!,
        prediction: PREDICTIONS_DATA.find(p => p.matchId === 'm6')!,
        odds: 1.58,
        pick: 'Leverkusen Menang'
      },
      {
        match: MATCHES_DATA.find(m => m.id === 'm14')!,
        prediction: PREDICTIONS_DATA.find(p => p.matchId === 'm14')!,
        odds: 1.62,
        pick: 'Feyenoord Menang'
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
        match: MATCHES_DATA.find(m => m.id === 'm7')!,
        prediction: PREDICTIONS_DATA.find(p => p.matchId === 'm7')!,
        odds: 1.38,
        pick: 'Manchester City Menang'
      },
      {
        match: MATCHES_DATA.find(m => m.id === 'm10')!,
        prediction: PREDICTIONS_DATA.find(p => p.matchId === 'm10')!,
        odds: 1.45,
        pick: 'Benfica Menang'
      },
      {
        match: MATCHES_DATA.find(m => m.id === 'm12')!,
        prediction: PREDICTIONS_DATA.find(p => p.matchId === 'm12')!,
        odds: 1.92,
        pick: 'Tottenham Menang'
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
        match: MATCHES_DATA.find(m => m.id === 'm7')!,
        prediction: PREDICTIONS_DATA.find(p => p.matchId === 'm7')!,
        odds: 1.38,
        pick: 'Manchester City Menang'
      },
      {
        match: MATCHES_DATA.find(m => m.id === 'm10')!,
        prediction: PREDICTIONS_DATA.find(p => p.matchId === 'm10')!,
        odds: 1.45,
        pick: 'Benfica Menang'
      },
      {
        match: MATCHES_DATA.find(m => m.id === 'm13')!,
        prediction: PREDICTIONS_DATA.find(p => p.matchId === 'm13')!,
        odds: 1.42,
        pick: 'Bayern Munchen Menang'
      },
      {
        match: MATCHES_DATA.find(m => m.id === 'm19')!,
        prediction: PREDICTIONS_DATA.find(p => p.matchId === 'm19')!,
        odds: 1.42,
        pick: 'Sporting Lisbon Menang'
      }
    ]
  },
  {
    id: 'pkg-5',
    title: '🇮🇩🇰🇷 INDONESIA & KOREA COMBO (3-TIM)',
    source: 'Rekomendasi Liga Asia',
    badge: 'Odds @5.50x',
    totalOdds: 5.50,
    riskLevel: 'Sedang',
    legs: [
      {
        match: MATCHES_DATA.find(m => m.id === 'm1')!,
        prediction: PREDICTIONS_DATA.find(p => p.matchId === 'm1')!,
        odds: 1.92,
        pick: 'Jeonbuk Hyundai Motors Menang'
      },
      {
        match: MATCHES_DATA.find(m => m.id === 'm2')!,
        prediction: PREDICTIONS_DATA.find(p => p.matchId === 'm2')!,
        odds: 1.68,
        pick: 'FC Seoul Menang'
      },
      {
        match: MATCHES_DATA.find(m => m.id === 'm4')!,
        prediction: PREDICTIONS_DATA.find(p => p.matchId === 'm4')!,
        odds: 2.05,
        pick: 'Borneo FC Menang'
      }
    ]
  },
  {
    id: 'pkg-6',
    title: '🇪🇺 BIG FIVE COMBO (3-TIM)',
    source: 'Rekomendasi Liga Top 5 Eropa',
    badge: 'Odds @5.25x',
    totalOdds: 5.25,
    riskLevel: 'Sedang',
    legs: [
      {
        match: MATCHES_DATA.find(m => m.id === 'm6')!,
        prediction: PREDICTIONS_DATA.find(p => p.matchId === 'm6')!,
        odds: 1.58,
        pick: 'Leverkusen Menang'
      },
      {
        match: MATCHES_DATA.find(m => m.id === 'm9')!,
        prediction: PREDICTIONS_DATA.find(p => p.matchId === 'm9')!,
        odds: 1.68,
        pick: 'Inter Milan Menang'
      },
      {
        match: MATCHES_DATA.find(m => m.id === 'm12')!,
        prediction: PREDICTIONS_DATA.find(p => p.matchId === 'm12')!,
        odds: 1.92,
        pick: 'Tottenham Menang'
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
    text: 'Prediksi Manchester City & Bayern kemarin tembus semua! Saya pasang single bet combo menang 14.2jt. Web ini informasinya paling update & akurat! 🏅',
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
    text: 'Ikutin prediksi Manchester City & Inter Milan kemarin, 2 single bet masuk semua! WD 8.2jt langsung cair. Terima kasih KAPSUL4D! ✅',
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
    text: 'Prediksi Manchester City & Bayern kemarin masuk semua. Modal 500rb jadi 5.6jt. Makasih KAPSUL4D selalu kasih prediksi akurat! 🏅',
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
