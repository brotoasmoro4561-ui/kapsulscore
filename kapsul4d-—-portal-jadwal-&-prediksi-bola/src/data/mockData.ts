import { Match, Prediction, ParlayPackage, Testimonial, LiveTransaction } from '../types';

export const OFFICIAL_LINK = "https://akseslink.com/kapsul4d";
export const BRAND_LOGO_GIF = "https://ik.imagekit.io/8btthcfrf/Uploud/KAPSUL4D_shine_bubbles.gif?updatedAt=1786252273564";
export const BRAND_BANNER_GIF = "https://ik.imagekit.io/8btthcfrf/Uploud/KAPSUL4D.gif";
export const POPUP_BANNER_IMG = "https://ik.imagekit.io/8btthcfrf/Uploud/e6a972c6-4920-468c-80d6-aefa22558ede_11zon.png?updatedAt=1786668230036";
export const BALL_ICON = "https://ik.imagekit.io/8btthcfrf/Uploud/Logo%20Bola%20k4d.png";

export const MATCHES_DATA: Match[] = [
  // ==================== 6 SEPTEMBER 2026 ====================

  // JAPAN J1 LEAGUE
  {
    id: 'm1',
    date: '06/09',
    time: '17:00',
    league: '🇯🇵 J1 League',
    leagueFlag: '🇯🇵',
    home: 'Kashima Antlers',
    away: 'Urawa Red Diamonds',
    tag: 'J1 League',
    stadium: 'Kashima Soccer Stadium',
    homeForm: ['W', 'W', 'D', 'L', 'W'],
    awayForm: ['W', 'W', 'D', 'L', 'W'],
    homeRank: 2,
    awayRank: 3,
    handicap: '0 : 1/2'
  },
  {
    id: 'm2',
    date: '06/09',
    time: '18:00',
    league: '🇯🇵 J1 League',
    leagueFlag: '🇯🇵',
    home: 'Vissel Kobe',
    away: 'V-Varen Nagasaki',
    tag: 'J1 League',
    stadium: 'Noevir Stadium Kobe',
    homeForm: ['W', 'W', 'D', 'L', 'W'],
    awayForm: ['L', 'D', 'W', 'L', 'D'],
    homeRank: 4,
    awayRank: 10,
    handicap: '0 : 3/4'
  },

  // NETHERLANDS EREDIVISIE
  {
    id: 'm3',
    date: '06/09',
    time: '18:15',
    league: '🇳🇱 Eredivisie',
    leagueFlag: '🇳🇱',
    home: 'Groningen',
    away: 'Twente',
    tag: 'Eredivisie',
    stadium: 'Euroborg',
    homeForm: ['W', 'D', 'L', 'W', 'D'],
    awayForm: ['W', 'W', 'D', 'L', 'W'],
    homeRank: 8,
    awayRank: 4,
    handicap: '1/2 : 0'
  },

  // NETHERLANDS EREDIVISIE
  {
    id: 'm4',
    date: '06/09',
    time: '20:30',
    league: '🇳🇱 Eredivisie',
    leagueFlag: '🇳🇱',
    home: 'SC Heerenveen',
    away: 'AZ Alkmaar',
    tag: 'Eredivisie',
    stadium: 'Abe Lenstra Stadion',
    homeForm: ['D', 'L', 'W', 'D', 'L'],
    awayForm: ['W', 'W', 'D', 'L', 'W'],
    homeRank: 9,
    awayRank: 3,
    handicap: '3/4 : 0'
  },

  // INDONESIA LIGA 1
  {
    id: 'm5',
    date: '06/09',
    time: '20:00',
    league: '🇮🇩 Indonesia Liga 1',
    leagueFlag: '🇮🇩',
    home: 'Persib Bandung',
    away: 'PSM Makassar',
    tag: 'Liga 1',
    stadium: 'Gelora Bandung Lautan Api',
    homeForm: ['W', 'W', 'D', 'L', 'W'],
    awayForm: ['W', 'W', 'D', 'L', 'W'],
    homeRank: 1,
    awayRank: 2,
    handicap: '0 : 1 1/4'
  },
  {
    id: 'm6',
    date: '06/09',
    time: '20:00',
    league: '🇮🇩 Indonesia Liga 1',
    leagueFlag: '🇮🇩',
    home: 'Madura United',
    away: 'Persijap Jepara',
    tag: 'Liga 1',
    stadium: 'Gelora Madura Stadium',
    homeForm: ['W', 'D', 'L', 'W', 'D'],
    awayForm: ['L', 'W', 'D', 'L', 'W'],
    homeRank: 6,
    awayRank: 12,
    handicap: '0 : 1/2'
  },

  // ENGLISH PREMIER LEAGUE
  {
    id: 'm7',
    date: '06/09',
    time: '21:00',
    league: '🏴󠁧󠁢󠁥󠁮󠁧󠁿 Premier League',
    leagueFlag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
    home: 'Everton',
    away: 'Manchester United',
    tag: 'Premier League',
    stadium: 'Goodison Park',
    homeForm: ['D', 'W', 'L', 'D', 'W'],
    awayForm: ['W', 'W', 'D', 'L', 'W'],
    homeRank: 12,
    awayRank: 4,
    handicap: '1/4 : 0'
  },

  // ITALY SERIE A
  {
    id: 'm8',
    date: '06/09',
    time: '21:00',
    league: '🇮🇹 Serie A',
    leagueFlag: '🇮🇹',
    home: 'Parma',
    away: 'Monza',
    tag: 'Serie A',
    stadium: 'Stadio Ennio Tardini',
    homeForm: ['W', 'L', 'D', 'W', 'L'],
    awayForm: ['L', 'D', 'L', 'W', 'L'],
    homeRank: 14,
    awayRank: 18,
    handicap: '0 : 1/4'
  },

  // GERMANY BUNDESLIGA
  {
    id: 'm9',
    date: '06/09',
    time: '21:30',
    league: '🇩🇪 Bundesliga',
    leagueFlag: '🇩🇪',
    home: 'Hamburger SV',
    away: 'FSV Mainz 05',
    tag: 'Bundesliga',
    stadium: 'Volksparkstadion',
    homeForm: ['D', 'L', 'W', 'D', 'L'],
    awayForm: ['W', 'D', 'L', 'W', 'D'],
    homeRank: 11,
    awayRank: 9,
    handicap: '0 : 0'
  },

  // SPAIN LA LIGA
  {
    id: 'm10',
    date: '06/09',
    time: '22:15',
    league: '🇪🇸 La Liga',
    leagueFlag: '🇪🇸',
    home: 'Valencia CF',
    away: 'Barcelona',
    tag: 'La Liga',
    stadium: 'Mestalla Stadium',
    homeForm: ['D', 'W', 'L', 'D', 'W'],
    awayForm: ['W', 'W', 'W', 'W', 'D'],
    homeRank: 10,
    awayRank: 1,
    handicap: '1 3/4 : 0'
  },

  // FRANCE LIGUE 1
  {
    id: 'm11',
    date: '06/09',
    time: '23:15',
    league: '🇫🇷 Ligue 1',
    leagueFlag: '🇫🇷',
    home: 'Angers',
    away: 'Rennes',
    tag: 'Ligue 1',
    stadium: 'Stade Raymond Kopa',
    homeForm: ['L', 'D', 'W', 'L', 'D'],
    awayForm: ['W', 'W', 'D', 'L', 'W'],
    homeRank: 16,
    awayRank: 6,
    handicap: '1/2 : 0'
  },

  // ENGLISH PREMIER LEAGUE
  {
    id: 'm12',
    date: '06/09',
    time: '23:30',
    league: '🏴󠁧󠁢󠁥󠁮󠁧󠁿 Premier League',
    leagueFlag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
    home: 'Arsenal',
    away: 'Chelsea',
    tag: 'Premier League London Derby',
    stadium: 'Emirates Stadium',
    homeForm: ['W', 'W', 'W', 'D', 'W'],
    awayForm: ['W', 'W', 'W', 'D', 'W'],
    homeRank: 2,
    awayRank: 3,
    handicap: '0 : 3/4'
  },

  // GERMANY BUNDESLIGA
  {
    id: 'm13',
    date: '06/09',
    time: '23:30',
    league: '🇩🇪 Bundesliga',
    leagueFlag: '🇩🇪',
    home: 'Eintracht Frankfurt',
    away: 'Augsburg',
    tag: 'Bundesliga',
    stadium: 'Deutsche Bank Park',
    homeForm: ['W', 'W', 'D', 'L', 'W'],
    awayForm: ['D', 'L', 'W', 'D', 'L'],
    homeRank: 5,
    awayRank: 13,
    handicap: '0 : 1/2'
  },

  // RUSSIA PREMIER LEAGUE
  {
    id: 'm14',
    date: '06/09',
    time: '23:30',
    league: '🇷🇺 Russia Premier League',
    leagueFlag: '🇷🇺',
    home: 'Dynamo Moscow',
    away: 'Spartak Moscow',
    tag: 'Russia Premier League',
    stadium: 'VTB Arena',
    homeForm: ['W', 'W', 'D', 'L', 'W'],
    awayForm: ['W', 'W', 'D', 'L', 'W'],
    homeRank: 3,
    awayRank: 5,
    handicap: '0 : 0'
  },


  // ==================== 7 SEPTEMBER 2026 ====================

  // TURKIYE SUPER LEAGUE
  {
    id: 'm15',
    date: '07/09',
    time: '01:00',
    league: '🇹🇷 Turkiye Super League',
    leagueFlag: '🇹🇷',
    home: 'Trabzonspor',
    away: 'Genclerbirligi',
    tag: 'Super League',
    stadium: 'Medical Park Stadium',
    homeForm: ['W', 'D', 'L', 'W', 'D'],
    awayForm: ['L', 'W', 'D', 'L', 'W'],
    homeRank: 4,
    awayRank: 10,
    handicap: '0 : 1'
  },
  {
    id: 'm16',
    date: '07/09',
    time: '01:00',
    league: '🇹🇷 Turkiye Super League',
    leagueFlag: '🇹🇷',
    home: 'Kocaelispor',
    away: 'Samsunspor',
    tag: 'Super League',
    stadium: 'Kocaeli Stadium',
    homeForm: ['W', 'D', 'L', 'W', 'D'],
    awayForm: ['W', 'D', 'L', 'W', 'D'],
    homeRank: 8,
    awayRank: 9,
    handicap: '0 : 1/4'
  },

  // LIGA PORTUGAL
  {
    id: 'm17',
    date: '07/09',
    time: '01:00',
    league: '🇵🇹 Liga Portugal',
    leagueFlag: '🇵🇹',
    home: 'Vitoria Guimaraes',
    away: 'Casa Pia AC',
    tag: 'Liga Portugal',
    stadium: 'Estadio D. Afonso Henriques',
    homeForm: ['W', 'D', 'L', 'W', 'D'],
    awayForm: ['L', 'D', 'W', 'L', 'D'],
    homeRank: 5,
    awayRank: 12,
    handicap: '0 : 1'
  },

  // RUSSIA PREMIER LEAGUE
  {
    id: 'm18',
    date: '07/09',
    time: '01:45',
    league: '🇷🇺 Russia Premier League',
    leagueFlag: '🇷🇺',
    home: 'Baltika Kaliningrad',
    away: 'Lokomotiv Moscow',
    tag: 'Russia Premier League',
    stadium: 'Baltika Stadium',
    homeForm: ['W', 'D', 'L', 'W', 'D'],
    awayForm: ['W', 'W', 'D', 'L', 'W'],
    homeRank: 7,
    awayRank: 6,
    handicap: '0 : 1/2'
  },

  // ITALY SERIE A
  {
    id: 'm19',
    date: '07/09',
    time: '02:45',
    league: '🇮🇹 Serie A',
    leagueFlag: '🇮🇹',
    home: 'Juventus',
    away: 'AC Milan',
    tag: 'Serie A Big Match',
    stadium: 'Allianz Stadium',
    homeForm: ['W', 'W', 'W', 'D', 'W'],
    awayForm: ['W', 'W', 'W', 'D', 'W'],
    homeRank: 1,
    awayRank: 2,
    handicap: '0 : 1/2'
  },

  // FRANCE LIGUE 1
  {
    id: 'm20',
    date: '07/09',
    time: '02:45',
    league: '🇫🇷 Ligue 1',
    leagueFlag: '🇫🇷',
    home: 'Marseille',
    away: 'Paris FC',
    tag: 'Ligue 1',
    stadium: 'Stade Velodrome',
    homeForm: ['W', 'W', 'D', 'L', 'W'],
    awayForm: ['L', 'D', 'W', 'L', 'D'],
    homeRank: 3,
    awayRank: 8,
    handicap: '0 : 3/4'
  },

  // SPAIN LA LIGA
  {
    id: 'm21',
    date: '07/09',
    time: '03:00',
    league: '🇪🇸 La Liga',
    leagueFlag: '🇪🇸',
    home: 'RCD Espanyol',
    away: 'Sevilla',
    tag: 'La Liga',
    stadium: 'RCDE Stadium',
    homeForm: ['W', 'D', 'L', 'W', 'D'],
    awayForm: ['D', 'W', 'L', 'D', 'W'],
    homeRank: 13,
    awayRank: 8,
    handicap: '0 : 1/4'
  },

  // LIGA PORTUGAL
  {
    id: 'm22',
    date: '07/09',
    time: '03:30',
    league: '🇵🇹 Liga Portugal',
    leagueFlag: '🇵🇹',
    home: 'Gil Vicente',
    away: 'Academico Viseu',
    tag: 'Liga Portugal',
    stadium: 'Estadio Cidade de Barcelos',
    homeForm: ['W', 'D', 'L', 'W', 'D'],
    awayForm: ['L', 'W', 'D', 'L', 'W'],
    homeRank: 6,
    awayRank: 13,
    handicap: '0 : 1/2'
  }
];

export const PREDICTIONS_DATA: Prediction[] = [
  // ==================== 6 SEPTEMBER 2026 ====================

  {
    id: 'p1',
    matchId: 'm1',
    league: '🇯🇵 J1 League',
    home: 'Kashima Antlers',
    away: 'Urawa Red Diamonds',
    score: '2 - 1',
    confidence: 'mid',
    confidencePct: 62,
    homeProb: 48,
    drawProb: 26,
    awayProb: 26,
    pick: 'HOME',
    pickLabel: 'Kashima Antlers Win',
    odds: 1.92,
    overUnder: 'Over 2.5',
    btts: 'YES',
    note: 'Kashima Antlers bermain di kandang dengan performa konsisten.',
    h2hSummary: 'Kashima menang 2 dari 3 pertemuan terakhir.',
    keyPlayer: 'Yuma Suzuki'
  },
  {
    id: 'p2',
    matchId: 'm2',
    league: '🇯🇵 J1 League',
    home: 'Vissel Kobe',
    away: 'V-Varen Nagasaki',
    score: '2 - 0',
    confidence: 'high',
    confidencePct: 72,
    homeProb: 68,
    drawProb: 18,
    awayProb: 14,
    pick: 'HOME',
    pickLabel: 'Vissel Kobe Win to Nil',
    odds: 1.68,
    overUnder: 'Under 2.5',
    btts: 'NO',
    note: 'Vissel Kobe memiliki skuad bintang dan dominan di kandang.',
    h2hSummary: 'Kobe menang 3 dari 4 pertemuan terakhir.',
    keyPlayer: 'Yuya Osako'
  },
  {
    id: 'p3',
    matchId: 'm3',
    league: '🇳🇱 Eredivisie',
    home: 'Groningen',
    away: 'Twente',
    score: '1 - 2',
    confidence: 'mid',
    confidencePct: 60,
    homeProb: 30,
    drawProb: 28,
    awayProb: 42,
    pick: 'AWAY',
    pickLabel: 'Twente Win',
    odds: 2.05,
    overUnder: 'Over 2.5',
    btts: 'YES',
    note: 'Twente adalah tim papan atas Eredivisie dengan skuad berkualitas.',
    h2hSummary: 'Twente menang 2 dari 3 pertemuan terakhir.',
    keyPlayer: 'Sem Steijn'
  },
  {
    id: 'p4',
    matchId: 'm4',
    league: '🇳🇱 Eredivisie',
    home: 'SC Heerenveen',
    away: 'AZ Alkmaar',
    score: '1 - 2',
    confidence: 'high',
    confidencePct: 72,
    homeProb: 22,
    drawProb: 24,
    awayProb: 54,
    pick: 'AWAY',
    pickLabel: 'AZ Alkmaar Win',
    odds: 1.62,
    overUnder: 'Over 2.5',
    btts: 'YES',
    note: 'AZ Alkmaar adalah tim papan atas Eredivisie dengan skuad berkualitas.',
    h2hSummary: 'AZ menang 3 dari 4 pertemuan terakhir.',
    keyPlayer: 'Vangelis Pavlidis'
  },
  {
    id: 'p5',
    matchId: 'm5',
    league: '🇮🇩 Indonesia Liga 1',
    home: 'Persib Bandung',
    away: 'PSM Makassar',
    score: '2 - 0',
    confidence: 'high',
    confidencePct: 70,
    homeProb: 66,
    drawProb: 20,
    awayProb: 14,
    pick: 'HOME',
    pickLabel: 'Persib Bandung Win',
    odds: 1.68,
    overUnder: 'Under 2.5',
    btts: 'NO',
    note: 'Persib Bandung adalah pemuncak klasemen Liga 1 dan dominan di kandang.',
    h2hSummary: 'Persib menang 3 dari 4 pertemuan terakhir.',
    keyPlayer: 'David Da Silva'
  },
  {
    id: 'p6',
    matchId: 'm6',
    league: '🇮🇩 Indonesia Liga 1',
    home: 'Madura United',
    away: 'Persijap Jepara',
    score: '2 - 1',
    confidence: 'mid',
    confidencePct: 58,
    homeProb: 44,
    drawProb: 28,
    awayProb: 28,
    pick: 'HOME',
    pickLabel: 'Madura United Win',
    odds: 2.05,
    overUnder: 'Over 2.5',
    btts: 'YES',
    note: 'Madura United bermain di kandang dengan performa konsisten.',
    h2hSummary: 'Madura menang 2 dari 3 pertemuan terakhir.',
    keyPlayer: 'Beto Goncalves'
  },
  {
    id: 'p7',
    matchId: 'm7',
    league: '🏴󠁧󠁢󠁥󠁮󠁧󠁿 Premier League',
    home: 'Everton',
    away: 'Manchester United',
    score: '1 - 2',
    confidence: 'high',
    confidencePct: 72,
    homeProb: 22,
    drawProb: 24,
    awayProb: 54,
    pick: 'AWAY',
    pickLabel: 'Manchester United Win',
    odds: 1.62,
    overUnder: 'Over 2.5',
    btts: 'YES',
    note: 'Manchester United memiliki skuad bintang dan target juara Premier League.',
    h2hSummary: 'Man United menang 3 dari 4 pertemuan terakhir.',
    keyPlayer: 'Marcus Rashford'
  },
  {
    id: 'p8',
    matchId: 'm8',
    league: '🇮🇹 Serie A',
    home: 'Parma',
    away: 'Monza',
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
    note: 'Kedua tim berimbang di papan bawah Serie A.',
    h2hSummary: '2 dari 3 pertemuan berakhir imbang.',
    keyPlayer: 'Dennis Man'
  },
  {
    id: 'p9',
    matchId: 'm9',
    league: '🇩🇪 Bundesliga',
    home: 'Hamburger SV',
    away: 'FSV Mainz 05',
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
    note: 'Kedua tim berimbang di papan tengah Bundesliga.',
    h2hSummary: '2 dari 3 pertemuan berakhir imbang.',
    keyPlayer: 'Robert Glatzel'
  },
  {
    id: 'p10',
    matchId: 'm10',
    league: '🇪🇸 La Liga',
    home: 'Valencia CF',
    away: 'Barcelona',
    score: '1 - 3',
    confidence: 'high',
    confidencePct: 78,
    homeProb: 14,
    drawProb: 16,
    awayProb: 70,
    pick: 'AWAY',
    pickLabel: 'Barcelona Win & Over 2.5',
    odds: 1.48,
    overUnder: 'Over 2.5',
    btts: 'YES',
    note: 'Barcelona adalah raja Spanyol dengan skuad bintang dan target juara La Liga.',
    h2hSummary: 'Barcelona selalu menang telak di Mestalla.',
    keyPlayer: 'Robert Lewandowski'
  },
  {
    id: 'p11',
    matchId: 'm11',
    league: '🇫🇷 Ligue 1',
    home: 'Angers',
    away: 'Rennes',
    score: '1 - 2',
    confidence: 'high',
    confidencePct: 72,
    homeProb: 22,
    drawProb: 24,
    awayProb: 54,
    pick: 'AWAY',
    pickLabel: 'Rennes Win',
    odds: 1.62,
    overUnder: 'Over 2.5',
    btts: 'YES',
    note: 'Rennes adalah tim papan atas Ligue 1 dengan skuad berkualitas.',
    h2hSummary: 'Rennes menang 3 dari 4 pertemuan terakhir.',
    keyPlayer: 'Arnaud Kalimuendo'
  },
  {
    id: 'p12',
    matchId: 'm12',
    league: '🏴󠁧󠁢󠁥󠁮󠁧󠁿 Premier League',
    home: 'Arsenal',
    away: 'Chelsea',
    score: '2 - 1',
    confidence: 'high',
    confidencePct: 70,
    homeProb: 66,
    drawProb: 20,
    awayProb: 14,
    pick: 'HOME',
    pickLabel: 'Arsenal Win',
    odds: 1.68,
    overUnder: 'Over 2.5',
    btts: 'YES',
    note: 'Arsenal bermain di kandang dengan skuad bintang dan target juara Premier League.',
    h2hSummary: 'Arsenal menang 3 dari 4 pertemuan terakhir di Emirates.',
    keyPlayer: 'Bukayo Saka'
  },
  {
    id: 'p13',
    matchId: 'm13',
    league: '🇩🇪 Bundesliga',
    home: 'Eintracht Frankfurt',
    away: 'Augsburg',
    score: '2 - 1',
    confidence: 'mid',
    confidencePct: 62,
    homeProb: 48,
    drawProb: 26,
    awayProb: 26,
    pick: 'HOME',
    pickLabel: 'Eintracht Frankfurt Win',
    odds: 1.92,
    overUnder: 'Over 2.5',
    btts: 'YES',
    note: 'Eintracht Frankfurt bermain di kandang dengan performa konsisten.',
    h2hSummary: 'Frankfurt menang 2 dari 3 pertemuan terakhir.',
    keyPlayer: 'Omar Marmoush'
  },
  {
    id: 'p14',
    matchId: 'm14',
    league: '🇷🇺 Russia Premier League',
    home: 'Dynamo Moscow',
    away: 'Spartak Moscow',
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
    note: 'Derby Moskow selalu berjalan ketat dan penuh emosi.',
    h2hSummary: '2 dari 3 pertemuan berakhir imbang.',
    keyPlayer: 'Fedor Smolov'
  },


  // ==================== 7 SEPTEMBER 2026 ====================

  {
    id: 'p15',
    matchId: 'm15',
    league: '🇹🇷 Turkiye Super League',
    home: 'Trabzonspor',
    away: 'Genclerbirligi',
    score: '2 - 0',
    confidence: 'high',
    confidencePct: 70,
    homeProb: 66,
    drawProb: 20,
    awayProb: 14,
    pick: 'HOME',
    pickLabel: 'Trabzonspor Win',
    odds: 1.68,
    overUnder: 'Under 2.5',
    btts: 'NO',
    note: 'Trabzonspor adalah tim papan atas Turki dengan skuad berkualitas.',
    h2hSummary: 'Trabzonspor menang 3 dari 4 pertemuan terakhir.',
    keyPlayer: 'Trezeguet'
  },
  {
    id: 'p16',
    matchId: 'm16',
    league: '🇹🇷 Turkiye Super League',
    home: 'Kocaelispor',
    away: 'Samsunspor',
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
    note: 'Kedua tim berimbang di papan tengah Super League.',
    h2hSummary: '2 dari 3 pertemuan berakhir imbang.',
    keyPlayer: 'Daniel Candeias'
  },
  {
    id: 'p17',
    matchId: 'm17',
    league: '🇵🇹 Liga Portugal',
    home: 'Vitoria Guimaraes',
    away: 'Casa Pia AC',
    score: '2 - 0',
    confidence: 'high',
    confidencePct: 72,
    homeProb: 68,
    drawProb: 18,
    awayProb: 14,
    pick: 'HOME',
    pickLabel: 'Vitoria Guimaraes Win',
    odds: 1.68,
    overUnder: 'Under 2.5',
    btts: 'NO',
    note: 'Vitoria Guimaraes adalah tim papan atas Liga Portugal dengan skuad berkualitas.',
    h2hSummary: 'Guimaraes menang 3 dari 4 pertemuan terakhir.',
    keyPlayer: 'Nelson Luz'
  },
  {
    id: 'p18',
    matchId: 'm18',
    league: '🇷🇺 Russia Premier League',
    home: 'Baltika Kaliningrad',
    away: 'Lokomotiv Moscow',
    score: '1 - 2',
    confidence: 'mid',
    confidencePct: 60,
    homeProb: 30,
    drawProb: 28,
    awayProb: 42,
    pick: 'AWAY',
    pickLabel: 'Lokomotiv Moscow Win',
    odds: 2.05,
    overUnder: 'Over 2.5',
    btts: 'YES',
    note: 'Lokomotiv Moscow adalah tim papan atas Russia Premier League.',
    h2hSummary: 'Lokomotiv menang 2 dari 3 pertemuan terakhir.',
    keyPlayer: 'Artem Dzyuba'
  },
  {
    id: 'p19',
    matchId: 'm19',
    league: '🇮🇹 Serie A',
    home: 'Juventus',
    away: 'AC Milan',
    score: '2 - 1',
    confidence: 'high',
    confidencePct: 74,
    homeProb: 70,
    drawProb: 18,
    awayProb: 12,
    pick: 'HOME',
    pickLabel: 'Juventus Win',
    odds: 1.58,
    overUnder: 'Over 2.5',
    btts: 'YES',
    note: 'Juventus adalah raja Italia dengan skuad bintang dan target juara Serie A.',
    h2hSummary: 'Juventus menang 3 dari 4 pertemuan terakhir di Allianz Stadium.',
    keyPlayer: 'Dusan Vlahovic'
  },
  {
    id: 'p20',
    matchId: 'm20',
    league: '🇫🇷 Ligue 1',
    home: 'Marseille',
    away: 'Paris FC',
    score: '2 - 0',
    confidence: 'high',
    confidencePct: 72,
    homeProb: 68,
    drawProb: 18,
    awayProb: 14,
    pick: 'HOME',
    pickLabel: 'Marseille Win',
    odds: 1.68,
    overUnder: 'Under 2.5',
    btts: 'NO',
    note: 'Marseille adalah tim papan atas Ligue 1 dengan skuad berkualitas.',
    h2hSummary: 'Marseille menang 3 dari 4 pertemuan terakhir.',
    keyPlayer: 'Pierre-Emerick Aubameyang'
  },
  {
    id: 'p21',
    matchId: 'm21',
    league: '🇪🇸 La Liga',
    home: 'RCD Espanyol',
    away: 'Sevilla',
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
    note: 'Kedua tim berimbang di papan tengah La Liga.',
    h2hSummary: '2 dari 3 pertemuan berakhir imbang.',
    keyPlayer: 'Javi Puado'
  },
  {
    id: 'p22',
    matchId: 'm22',
    league: '🇵🇹 Liga Portugal',
    home: 'Gil Vicente',
    away: 'Academico Viseu',
    score: '2 - 1',
    confidence: 'mid',
    confidencePct: 60,
    homeProb: 46,
    drawProb: 28,
    awayProb: 26,
    pick: 'HOME',
    pickLabel: 'Gil Vicente Win',
    odds: 1.95,
    overUnder: 'Over 2.5',
    btts: 'YES',
    note: 'Gil Vicente bermain di kandang dengan performa konsisten.',
    h2hSummary: 'Gil Vicente menang 2 dari 3 pertemuan terakhir.',
    keyPlayer: 'Fran Navarro'
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
        match: MATCHES_DATA.find(m => m.id === 'm10')!,
        prediction: PREDICTIONS_DATA.find(p => p.matchId === 'm10')!,
        odds: 1.48,
        pick: 'Barcelona Menang'
      },
      {
        match: MATCHES_DATA.find(m => m.id === 'm19')!,
        prediction: PREDICTIONS_DATA.find(p => p.matchId === 'm19')!,
        odds: 1.58,
        pick: 'Juventus Menang'
      },
      {
        match: MATCHES_DATA.find(m => m.id === 'm12')!,
        prediction: PREDICTIONS_DATA.find(p => p.matchId === 'm12')!,
        odds: 1.68,
        pick: 'Arsenal Menang'
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
        match: MATCHES_DATA.find(m => m.id === 'm7')!,
        prediction: PREDICTIONS_DATA.find(p => p.matchId === 'm7')!,
        odds: 1.62,
        pick: 'Manchester United Menang'
      },
      {
        match: MATCHES_DATA.find(m => m.id === 'm10')!,
        prediction: PREDICTIONS_DATA.find(p => p.matchId === 'm10')!,
        odds: 1.48,
        pick: 'Barcelona Menang'
      },
      {
        match: MATCHES_DATA.find(m => m.id === 'm20')!,
        prediction: PREDICTIONS_DATA.find(p => p.matchId === 'm20')!,
        odds: 1.68,
        pick: 'Marseille Menang'
      }
    ]
  },
  {
    id: 'pkg-3',
    title: '🔥 PARLAY HOT (3-TIM) - 6 SEPTEMBER',
    source: 'Rekomendasi KAPSUL4D Special',
    badge: 'Hot Pick',
    totalOdds: 4.50,
    riskLevel: 'Sedang',
    legs: [
      {
        match: MATCHES_DATA.find(m => m.id === 'm2')!,
        prediction: PREDICTIONS_DATA.find(p => p.matchId === 'm2')!,
        odds: 1.68,
        pick: 'Vissel Kobe Menang'
      },
      {
        match: MATCHES_DATA.find(m => m.id === 'm5')!,
        prediction: PREDICTIONS_DATA.find(p => p.matchId === 'm5')!,
        odds: 1.68,
        pick: 'Persib Bandung Menang'
      },
      {
        match: MATCHES_DATA.find(m => m.id === 'm12')!,
        prediction: PREDICTIONS_DATA.find(p => p.matchId === 'm12')!,
        odds: 1.68,
        pick: 'Arsenal Menang'
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
        match: MATCHES_DATA.find(m => m.id === 'm10')!,
        prediction: PREDICTIONS_DATA.find(p => p.matchId === 'm10')!,
        odds: 1.48,
        pick: 'Barcelona Menang'
      },
      {
        match: MATCHES_DATA.find(m => m.id === 'm12')!,
        prediction: PREDICTIONS_DATA.find(p => p.matchId === 'm12')!,
        odds: 1.68,
        pick: 'Arsenal Menang'
      },
      {
        match: MATCHES_DATA.find(m => m.id === 'm17')!,
        prediction: PREDICTIONS_DATA.find(p => p.matchId === 'm17')!,
        odds: 1.68,
        pick: 'Vitoria Guimaraes Menang'
      },
      {
        match: MATCHES_DATA.find(m => m.id === 'm19')!,
        prediction: PREDICTIONS_DATA.find(p => p.matchId === 'm19')!,
        odds: 1.58,
        pick: 'Juventus Menang'
      }
    ]
  },
  {
    id: 'pkg-5',
    title: '🇮🇩🇯🇵🇳🇱 ASIA & EUROPE COMBO (3-TIM)',
    source: 'Rekomendasi Liga Asia & Eropa',
    badge: 'Odds @5.50x',
    totalOdds: 5.50,
    riskLevel: 'Sedang',
    legs: [
      {
        match: MATCHES_DATA.find(m => m.id === 'm1')!,
        prediction: PREDICTIONS_DATA.find(p => p.matchId === 'm1')!,
        odds: 1.92,
        pick: 'Kashima Antlers Menang'
      },
      {
        match: MATCHES_DATA.find(m => m.id === 'm2')!,
        prediction: PREDICTIONS_DATA.find(p => p.matchId === 'm2')!,
        odds: 1.68,
        pick: 'Vissel Kobe Menang'
      },
      {
        match: MATCHES_DATA.find(m => m.id === 'm5')!,
        prediction: PREDICTIONS_DATA.find(p => p.matchId === 'm5')!,
        odds: 1.68,
        pick: 'Persib Bandung Menang'
      }
    ]
  },
  {
    id: 'pkg-6',
    title: '🌎 PREMIER LEAGUE & LA LIGA COMBO (3-TIM)',
    source: 'Rekomendasi Liga Inggris & Spanyol',
    badge: 'Odds @5.25x',
    totalOdds: 5.25,
    riskLevel: 'Sedang',
    legs: [
      {
        match: MATCHES_DATA.find(m => m.id === 'm7')!,
        prediction: PREDICTIONS_DATA.find(p => p.matchId === 'm7')!,
        odds: 1.62,
        pick: 'Manchester United Menang'
      },
      {
        match: MATCHES_DATA.find(m => m.id === 'm10')!,
        prediction: PREDICTIONS_DATA.find(p => p.matchId === 'm10')!,
        odds: 1.48,
        pick: 'Barcelona Menang'
      },
      {
        match: MATCHES_DATA.find(m => m.id === 'm12')!,
        prediction: PREDICTIONS_DATA.find(p => p.matchId === 'm12')!,
        odds: 1.68,
        pick: 'Arsenal Menang'
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
    text: 'Prediksi Barcelona & Juventus kemarin tembus semua! Saya pasang single bet combo menang 14.2jt. Web ini informasinya paling update & akurat! 🏅',
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
    text: 'Ikutin prediksi Barcelona & Manchester United kemarin, 2 single bet masuk semua! WD 8.2jt langsung cair. Terima kasih KAPSUL4D! ✅',
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
    text: 'Prediksi Barcelona & Arsenal kemarin masuk semua. Modal 500rb jadi 5.6jt. Makasih KAPSUL4D selalu kasih prediksi akurat! 🏅',
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
