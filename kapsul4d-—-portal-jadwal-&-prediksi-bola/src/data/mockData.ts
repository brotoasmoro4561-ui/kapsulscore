import { Match, Prediction, ParlayPackage, Testimonial, LiveTransaction } from '../types';

export const OFFICIAL_LINK = "https://akseslink.com/kapsul4d";
export const BRAND_LOGO_GIF = "https://ik.imagekit.io/8btthcfrf/Uploud/KAPSUL4D_shine_bubbles.gif?updatedAt=1786252273564";
export const BRAND_BANNER_GIF = "https://ik.imagekit.io/8btthcfrf/Uploud/KAPSUL4D.gif";
export const POPUP_BANNER_IMG = "https://ik.imagekit.io/8btthcfrf/Uploud/e6a972c6-4920-468c-80d6-aefa22558ede_11zon.png?updatedAt=1786668230036";
export const BALL_ICON = "https://ik.imagekit.io/8btthcfrf/Uploud/Logo%20Bola%20k4d.png";

export const MATCHES_DATA: Match[] = [
  // ==================== 30 AGUSTUS 2026 ====================

  // NETHERLANDS EREDIVISIE
  {
    id: 'm1',
    date: '30/08',
    time: '20:30',
    league: '🇳🇱 Eredivisie',
    leagueFlag: '🇳🇱',
    home: 'Feyenoord',
    away: 'ADO Den Haag',
    tag: 'Eredivisie',
    stadium: 'De Kuip, Rotterdam',
    homeForm: ['W', 'W', 'W', 'D', 'W'],
    awayForm: ['L', 'D', 'W', 'L', 'D'],
    homeRank: 2,
    awayRank: 14,
    handicap: '0 : 2 1/4'
  },

  // NORWAY ELITESERIEN
  {
    id: 'm2',
    date: '30/08',
    time: '20:30',
    league: '🇳🇴 Eliteserien',
    leagueFlag: '🇳🇴',
    home: 'Bodo Glimt',
    away: 'Rosenborg',
    tag: 'Eliteserien',
    stadium: 'Aspmyra Stadion',
    homeForm: ['W', 'W', 'L', 'W', 'D'],
    awayForm: ['D', 'W', 'L', 'D', 'W'],
    homeRank: 1,
    awayRank: 5,
    handicap: '0 : 1 1/2'
  },

  // ENGLISH PREMIER LEAGUE
  {
    id: 'm3',
    date: '30/08',
    time: '21:00',
    league: '🏴󠁧󠁢󠁥󠁮󠁧󠁿 Premier League',
    leagueFlag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
    home: 'Chelsea',
    away: 'Brighton & Hove Albion',
    tag: 'Premier League',
    stadium: 'Stamford Bridge',
    homeForm: ['W', 'W', 'W', 'D', 'W'],
    awayForm: ['W', 'D', 'L', 'W', 'D'],
    homeRank: 3,
    awayRank: 8,
    handicap: '0 : 3/4'
  },

  // FRANCE LIGUE 1
  {
    id: 'm4',
    date: '30/08',
    time: '21:00',
    league: '🇫🇷 Ligue 1',
    leagueFlag: '🇫🇷',
    home: 'Paris FC',
    away: 'Nice',
    tag: 'Ligue 1',
    stadium: 'Stade Sebastien Charlety',
    homeForm: ['W', 'D', 'L', 'W', 'D'],
    awayForm: ['D', 'L', 'W', 'D', 'L'],
    homeRank: 8,
    awayRank: 6,
    handicap: '0 : 1/4'
  },

  // GERMANY BUNDESLIGA
  {
    id: 'm5',
    date: '30/08',
    time: '21:30',
    league: '🇩🇪 Bundesliga',
    leagueFlag: '🇩🇪',
    home: 'SC Freiburg',
    away: 'Werder Bremen',
    tag: 'Bundesliga',
    stadium: 'Europa-Park Stadion',
    homeForm: ['W', 'W', 'D', 'L', 'W'],
    awayForm: ['L', 'D', 'W', 'L', 'D'],
    homeRank: 5,
    awayRank: 10,
    handicap: '0 : 1/2'
  },

  // NETHERLANDS EREDIVISIE
  {
    id: 'm6',
    date: '30/08',
    time: '22:45',
    league: '🇳🇱 Eredivisie',
    leagueFlag: '🇳🇱',
    home: 'Telstar',
    away: 'Ajax',
    tag: 'Eredivisie',
    stadium: '711 Stadion',
    homeForm: ['D', 'L', 'W', 'D', 'L'],
    awayForm: ['W', 'W', 'W', 'W', 'D'],
    homeRank: 16,
    awayRank: 1,
    handicap: '1 : 0'
  },

  // SPAIN LA LIGA
  {
    id: 'm7',
    date: '30/08',
    time: '23:00',
    league: '🇪🇸 La Liga',
    leagueFlag: '🇪🇸',
    home: 'Real Madrid',
    away: 'Malaga',
    tag: 'La Liga',
    stadium: 'Santiago Bernabeu',
    homeForm: ['W', 'W', 'W', 'D', 'W'],
    awayForm: ['L', 'D', 'W', 'L', 'D'],
    homeRank: 1,
    awayRank: 18,
    handicap: '0 : 2 1/2'
  },

  // NORWAY ELITESERIEN
  {
    id: 'm8',
    date: '30/08',
    time: '23:00',
    league: '🇳🇴 Eliteserien',
    leagueFlag: '🇳🇴',
    home: 'Viking',
    away: 'Aalesund FK',
    tag: 'Eliteserien',
    stadium: 'Viking Stadion',
    homeForm: ['W', 'D', 'L', 'W', 'D'],
    awayForm: ['L', 'D', 'W', 'L', 'D'],
    homeRank: 3,
    awayRank: 13,
    handicap: '0 : 1 3/4'
  },

  // GERMANY BUNDESLIGA
  {
    id: 'm9',
    date: '30/08',
    time: '23:30',
    league: '🇩🇪 Bundesliga',
    leagueFlag: '🇩🇪',
    home: 'Augsburg',
    away: 'Schalke 04',
    tag: 'Bundesliga',
    stadium: 'WWK Arena',
    homeForm: ['D', 'L', 'W', 'D', 'L'],
    awayForm: ['W', 'D', 'L', 'W', 'D'],
    homeRank: 11,
    awayRank: 7,
    handicap: '0 : 1/4'
  },

  // ENGLISH PREMIER LEAGUE
  {
    id: 'm10',
    date: '30/08',
    time: '23:30',
    league: '🏴󠁧󠁢󠁥󠁮󠁧󠁿 Premier League',
    leagueFlag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
    home: 'Manchester United',
    away: 'Ipswich Town',
    tag: 'Premier League',
    stadium: 'Old Trafford',
    homeForm: ['W', 'W', 'D', 'L', 'W'],
    awayForm: ['L', 'D', 'W', 'L', 'D'],
    homeRank: 4,
    awayRank: 15,
    handicap: '0 : 1 1/4'
  },


  // ==================== 31 AGUSTUS 2026 ====================

  // SAUDI ARABIA PRO LEAGUE
  {
    id: 'm11',
    date: '31/08',
    time: '02:00',
    league: '🇸🇦 Saudi Pro League',
    leagueFlag: '🇸🇦',
    home: 'Al Qadisiya Al Khubar',
    away: 'Al Faisaly Harmah',
    tag: 'Saudi Pro League',
    stadium: 'Prince Saud bin Jalawi Stadium',
    homeForm: ['W', 'W', 'D', 'L', 'W'],
    awayForm: ['L', 'D', 'W', 'L', 'D'],
    homeRank: 0,
    awayRank: 14,
    handicap: '0 : 2'
  },

  // ARGENTINA LIGA PROFESIONAL
  {
    id: 'm12',
    date: '31/08',
    time: '02:00',
    league: '🇦🇷 Argentina Liga Profesional',
    leagueFlag: '🇦🇷',
    home: 'Banfield',
    away: 'CA River Plate',
    tag: 'Liga Profesional',
    stadium: 'Estadio Florencio Sola',
    homeForm: ['D', 'L', 'W', 'D', 'L'],
    awayForm: ['W', 'W', 'W', 'D', 'W'],
    homeRank: 15,
    awayRank: 1,
    handicap: '0 : 1'
  },

  // TURKIYE SUPER LEAGUE
  {
    id: 'm13',
    date: '31/08',
    time: '02:30',
    league: '🇹🇷 Turkiye Super League',
    leagueFlag: '🇹🇷',
    home: 'Samsunspor',
    away: 'Fenerbahce',
    tag: 'Super League',
    stadium: 'Samsun Stadium',
    homeForm: ['W', 'D', 'L', 'W', 'D'],
    awayForm: ['W', 'W', 'W', 'D', 'W'],
    homeRank: 9,
    awayRank: 2,
    handicap: '3/4 : 0'
  },

  // ITALY SERIE A
  {
    id: 'm14',
    date: '31/08',
    time: '00:30',
    league: '🇮🇹 Serie A',
    leagueFlag: '🇮🇹',
    home: 'Napoli',
    away: 'Como',
    tag: 'Serie A',
    stadium: 'Stadio Diego Armando Maradona',
    homeForm: ['W', 'W', 'D', 'L', 'W'],
    awayForm: ['L', 'D', 'W', 'L', 'D'],
    homeRank: 3,
    awayRank: 15,
    handicap: '0 : 1/4'
  },

  // ITALY SERIE A
  {
    id: 'm15',
    date: '31/08',
    time: '02:45',
    league: '🇮🇹 Serie A',
    leagueFlag: '🇮🇹',
    home: 'Cagliari',
    away: 'Inter Milan',
    tag: 'Serie A',
    stadium: 'Unipol Domus',
    homeForm: ['D', 'L', 'W', 'D', 'L'],
    awayForm: ['W', 'W', 'W', 'D', 'W'],
    homeRank: 14,
    awayRank: 1,
    handicap: '1 1/4 : 0'
  },

  // FRANCE LIGUE 1
  {
    id: 'm16',
    date: '31/08',
    time: '02:45',
    league: '🇫🇷 Ligue 1',
    leagueFlag: '🇫🇷',
    home: 'AS Monaco',
    away: 'Marseille',
    tag: 'Ligue 1',
    stadium: 'Stade Louis II',
    homeForm: ['W', 'W', 'D', 'L', 'W'],
    awayForm: ['W', 'W', 'D', 'L', 'W'],
    homeRank: 2,
    awayRank: 3,
    handicap: '0 : 0'
  },

  // BRAZIL SERIE A
  {
    id: 'm17',
    date: '31/08',
    time: '03:00',
    league: '🇧🇷 Brazil Serie A',
    leagueFlag: '🇧🇷',
    home: 'Flamengo RJ',
    away: 'Botafogo RJ',
    tag: 'Brazil Serie A',
    stadium: 'Maracana',
    homeForm: ['W', 'W', 'W', 'D', 'W'],
    awayForm: ['L', 'D', 'W', 'L', 'D'],
    homeRank: 2,
    awayRank: 6,
    handicap: '0 : 1 1/4'
  },

  // SPAIN LA LIGA
  {
    id: 'm18',
    date: '31/08',
    time: '03:30',
    league: '🇪🇸 La Liga',
    leagueFlag: '🇪🇸',
    home: 'Celta Vigo',
    away: 'Athletic Bilbao',
    tag: 'La Liga',
    stadium: 'Balaidos Stadium',
    homeForm: ['W', 'D', 'L', 'W', 'D'],
    awayForm: ['W', 'W', 'D', 'L', 'W'],
    homeRank: 10,
    awayRank: 4,
    handicap: '0 : 1/4'
  },

  // BRAZIL SERIE A
  {
    id: 'm19',
    date: '31/08',
    time: '05:30',
    league: '🇧🇷 Brazil Serie A',
    leagueFlag: '🇧🇷',
    home: 'Mirassol SP',
    away: 'Palmeiras SP',
    tag: 'Brazil Serie A',
    stadium: 'Estadio Municipal Jose Maria de Campos Maia',
    homeForm: ['W', 'D', 'L', 'W', 'D'],
    awayForm: ['W', 'W', 'W', 'D', 'W'],
    homeRank: 10,
    awayRank: 1,
    handicap: '1/4 : 0'
  },

  // ARGENTINA LIGA PROFESIONAL
  {
    id: 'm20',
    date: '31/08',
    time: '08:30',
    league: '🇦🇷 Argentina Liga Profesional',
    leagueFlag: '🇦🇷',
    home: 'Independiente Rivadavia',
    away: 'Racing Club',
    tag: 'Liga Profesional',
    stadium: 'Estadio Bautista Gargantini',
    homeForm: ['D', 'L', 'W', 'D', 'L'],
    awayForm: ['W', 'W', 'D', 'L', 'W'],
    homeRank: 12,
    awayRank: 3,
    handicap: '0 : 1/2'
  }
];

export const PREDICTIONS_DATA: Prediction[] = [
  // ==================== 30 AGUSTUS 2026 ====================

  {
    id: 'p1',
    matchId: 'm1',
    league: '🇳🇱 Eredivisie',
    home: 'Feyenoord',
    away: 'ADO Den Haag',
    score: '3 - 0',
    confidence: 'high',
    confidencePct: 82,
    homeProb: 80,
    drawProb: 12,
    awayProb: 8,
    pick: 'HOME',
    pickLabel: 'Feyenoord Win to Nil',
    odds: 1.40,
    overUnder: 'Over 2.5',
    btts: 'NO',
    note: 'Feyenoord adalah raja Eredivisie dengan skuad bintang dan target juara.',
    h2hSummary: 'Feyenoord selalu menang telak di De Kuip.',
    keyPlayer: 'Santiago Gimenez'
  },
  {
    id: 'p2',
    matchId: 'm2',
    league: '🇳🇴 Eliteserien',
    home: 'Bodo Glimt',
    away: 'Rosenborg',
    score: '3 - 1',
    confidence: 'high',
    confidencePct: 74,
    homeProb: 70,
    drawProb: 18,
    awayProb: 12,
    pick: 'HOME',
    pickLabel: 'Bodo Glimt Win & Over 2.5',
    odds: 1.58,
    overUnder: 'Over 2.5',
    btts: 'YES',
    note: 'Bodo Glimt adalah pemuncak klasemen dan dominan di kandang.',
    h2hSummary: 'Bodo Glimt menang 3 dari 4 pertemuan terakhir.',
    keyPlayer: 'Amahl Pellegrino'
  },
  {
    id: 'p3',
    matchId: 'm3',
    league: '🏴󠁧󠁢󠁥󠁮󠁧󠁿 Premier League',
    home: 'Chelsea',
    away: 'Brighton & Hove Albion',
    score: '2 - 1',
    confidence: 'high',
    confidencePct: 72,
    homeProb: 68,
    drawProb: 18,
    awayProb: 14,
    pick: 'HOME',
    pickLabel: 'Chelsea Win',
    odds: 1.68,
    overUnder: 'Over 2.5',
    btts: 'YES',
    note: 'Chelsea memiliki skuad bintang dan target juara Premier League.',
    h2hSummary: 'Chelsea menang 3 dari 4 pertemuan terakhir.',
    keyPlayer: 'Cole Palmer'
  },
  {
    id: 'p4',
    matchId: 'm4',
    league: '🇫🇷 Ligue 1',
    home: 'Paris FC',
    away: 'Nice',
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
    note: 'Kedua tim berimbang di papan tengah Ligue 1.',
    h2hSummary: '2 dari 3 pertemuan berakhir imbang.',
    keyPlayer: 'Kylian Mbappe'
  },
  {
    id: 'p5',
    matchId: 'm5',
    league: '🇩🇪 Bundesliga',
    home: 'SC Freiburg',
    away: 'Werder Bremen',
    score: '2 - 1',
    confidence: 'mid',
    confidencePct: 62,
    homeProb: 48,
    drawProb: 26,
    awayProb: 26,
    pick: 'HOME',
    pickLabel: 'Freiburg Win',
    odds: 1.92,
    overUnder: 'Over 2.5',
    btts: 'YES',
    note: 'SC Freiburg bermain di kandang dengan performa konsisten.',
    h2hSummary: 'Freiburg menang 2 dari 3 pertemuan terakhir.',
    keyPlayer: 'Vincenzo Grifo'
  },
  {
    id: 'p6',
    matchId: 'm6',
    league: '🇳🇱 Eredivisie',
    home: 'Telstar',
    away: 'Ajax',
    score: '0 - 3',
    confidence: 'high',
    confidencePct: 84,
    homeProb: 6,
    drawProb: 12,
    awayProb: 82,
    pick: 'AWAY',
    pickLabel: 'Ajax Win to Nil',
    odds: 1.38,
    overUnder: 'Over 2.5',
    btts: 'NO',
    note: 'Ajax adalah raja Belanda dengan skuad bintang dan serangan mematikan.',
    h2hSummary: 'Ajax selalu menang telak di kandang lawan.',
    keyPlayer: 'Steven Bergwijn'
  },
  {
    id: 'p7',
    matchId: 'm7',
    league: '🇪🇸 La Liga',
    home: 'Real Madrid',
    away: 'Malaga',
    score: '3 - 0',
    confidence: 'high',
    confidencePct: 86,
    homeProb: 84,
    drawProb: 11,
    awayProb: 5,
    pick: 'HOME',
    pickLabel: 'Real Madrid Win to Nil',
    odds: 1.35,
    overUnder: 'Over 2.5',
    btts: 'NO',
    note: 'Real Madrid adalah raja Spanyol dengan skuad bintang dan target juara La Liga.',
    h2hSummary: 'Real Madrid selalu menang telak di Bernabeu.',
    keyPlayer: 'Jude Bellingham'
  },
  {
    id: 'p8',
    matchId: 'm8',
    league: '🇳🇴 Eliteserien',
    home: 'Viking',
    away: 'Aalesund FK',
    score: '3 - 0',
    confidence: 'high',
    confidencePct: 72,
    homeProb: 68,
    drawProb: 18,
    awayProb: 14,
    pick: 'HOME',
    pickLabel: 'Viking Win to Nil',
    odds: 1.68,
    overUnder: 'Under 2.5',
    btts: 'NO',
    note: 'Viking adalah tim papan atas Eliteserien dengan skuad berkualitas.',
    h2hSummary: 'Viking menang 3 dari 4 pertemuan terakhir.',
    keyPlayer: 'Zlatko Tripic'
  },
  {
    id: 'p9',
    matchId: 'm9',
    league: '🇩🇪 Bundesliga',
    home: 'Augsburg',
    away: 'Schalke 04',
    score: '2 - 1',
    confidence: 'mid',
    confidencePct: 58,
    homeProb: 44,
    drawProb: 28,
    awayProb: 28,
    pick: 'HOME',
    pickLabel: 'Augsburg Win',
    odds: 2.05,
    overUnder: 'Over 2.5',
    btts: 'YES',
    note: 'Augsburg bermain di kandang dengan motivasi tinggi untuk 3 poin.',
    h2hSummary: 'Augsburg menang 2 dari 3 pertemuan terakhir.',
    keyPlayer: 'Ermedin Demirovic'
  },
  {
    id: 'p10',
    matchId: 'm10',
    league: '🏴󠁧󠁢󠁥󠁮󠁧󠁿 Premier League',
    home: 'Manchester United',
    away: 'Ipswich Town',
    score: '3 - 1',
    confidence: 'high',
    confidencePct: 78,
    homeProb: 76,
    drawProb: 14,
    awayProb: 10,
    pick: 'HOME',
    pickLabel: 'Man United Win & Over 2.5',
    odds: 1.48,
    overUnder: 'Over 2.5',
    btts: 'YES',
    note: 'Manchester United memiliki skuad bintang dan target juara Premier League.',
    h2hSummary: 'Man United selalu menang telak di Old Trafford.',
    keyPlayer: 'Marcus Rashford'
  },


  // ==================== 31 AGUSTUS 2026 ====================

  {
    id: 'p11',
    matchId: 'm11',
    league: '🇸🇦 Saudi Pro League',
    home: 'Al Qadisiya Al Khubar',
    away: 'Al Faisaly Harmah',
    score: '2 - 0',
    confidence: 'high',
    confidencePct: 70,
    homeProb: 66,
    drawProb: 20,
    awayProb: 14,
    pick: 'HOME',
    pickLabel: 'Al Qadisiya Win',
    odds: 1.68,
    overUnder: 'Under 2.5',
    btts: 'NO',
    note: 'Al Qadisiya adalah tim papan atas Saudi dengan skuad berkualitas.',
    h2hSummary: 'Al Qadisiya menang 3 dari 4 pertemuan terakhir.',
    keyPlayer: 'Roberto Firmino'
  },
  {
    id: 'p12',
    matchId: 'm12',
    league: '🇦🇷 Argentina Liga Profesional',
    home: 'Banfield',
    away: 'CA River Plate',
    score: '0 - 2',
    confidence: 'high',
    confidencePct: 76,
    homeProb: 14,
    drawProb: 18,
    awayProb: 68,
    pick: 'AWAY',
    pickLabel: 'River Plate Win',
    odds: 1.58,
    overUnder: 'Under 2.5',
    btts: 'NO',
    note: 'River Plate adalah raja Argentina dengan skuad bintang dan target juara.',
    h2hSummary: 'River Plate menang 4 dari 5 pertemuan terakhir.',
    keyPlayer: 'Miguel Borja'
  },
  {
    id: 'p13',
    matchId: 'm13',
    league: '🇹🇷 Turkiye Super League',
    home: 'Samsunspor',
    away: 'Fenerbahce',
    score: '1 - 2',
    confidence: 'high',
    confidencePct: 72,
    homeProb: 22,
    drawProb: 24,
    awayProb: 54,
    pick: 'AWAY',
    pickLabel: 'Fenerbahce Win',
    odds: 1.62,
    overUnder: 'Over 2.5',
    btts: 'YES',
    note: 'Fenerbahce adalah tim papan atas Turki dengan skuad bintang.',
    h2hSummary: 'Fenerbahce menang 3 dari 4 pertemuan terakhir.',
    keyPlayer: 'Edin Dzeko'
  },
  {
    id: 'p14',
    matchId: 'm14',
    league: '🇮🇹 Serie A',
    home: 'Napoli',
    away: 'Como',
    score: '2 - 1',
    confidence: 'mid',
    confidencePct: 62,
    homeProb: 48,
    drawProb: 26,
    awayProb: 26,
    pick: 'HOME',
    pickLabel: 'Napoli Win',
    odds: 1.92,
    overUnder: 'Over 2.5',
    btts: 'YES',
    note: 'Napoli bermain di kandang dengan skuad berkualitas.',
    h2hSummary: 'Napoli menang 2 dari 3 pertemuan terakhir.',
    keyPlayer: 'Victor Osimhen'
  },
  {
    id: 'p15',
    matchId: 'm15',
    league: '🇮🇹 Serie A',
    home: 'Cagliari',
    away: 'Inter Milan',
    score: '0 - 2',
    confidence: 'high',
    confidencePct: 80,
    homeProb: 10,
    drawProb: 16,
    awayProb: 74,
    pick: 'AWAY',
    pickLabel: 'Inter Milan Win to Nil',
    odds: 1.45,
    overUnder: 'Under 2.5',
    btts: 'NO',
    note: 'Inter Milan adalah raja Italia dengan skuad bintang dan target juara Serie A.',
    h2hSummary: 'Inter selalu menang telak di kandang lawan.',
    keyPlayer: 'Lautaro Martinez'
  },
  {
    id: 'p16',
    matchId: 'm16',
    league: '🇫🇷 Ligue 1',
    home: 'AS Monaco',
    away: 'Marseille',
    score: '2 - 1',
    confidence: 'mid',
    confidencePct: 60,
    homeProb: 46,
    drawProb: 28,
    awayProb: 26,
    pick: 'HOME',
    pickLabel: 'Monaco Win',
    odds: 1.95,
    overUnder: 'Over 2.5',
    btts: 'YES',
    note: 'AS Monaco bermain di kandang dengan skuad berkualitas.',
    h2hSummary: 'Monaco menang 2 dari 3 pertemuan terakhir.',
    keyPlayer: 'Wissam Ben Yedder'
  },
  {
    id: 'p17',
    matchId: 'm17',
    league: '🇧🇷 Brazil Serie A',
    home: 'Flamengo RJ',
    away: 'Botafogo RJ',
    score: '2 - 1',
    confidence: 'high',
    confidencePct: 72,
    homeProb: 68,
    drawProb: 18,
    awayProb: 14,
    pick: 'HOME',
    pickLabel: 'Flamengo Win',
    odds: 1.68,
    overUnder: 'Over 2.5',
    btts: 'YES',
    note: 'Flamengo adalah raja Brasil dengan skuad bintang dan target juara Serie A.',
    h2hSummary: 'Flamengo menang 3 dari 4 pertemuan terakhir.',
    keyPlayer: 'Gabriel Barbosa'
  },
  {
    id: 'p18',
    matchId: 'm18',
    league: '🇪🇸 La Liga',
    home: 'Celta Vigo',
    away: 'Athletic Bilbao',
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
    keyPlayer: 'Iago Aspas'
  },
  {
    id: 'p19',
    matchId: 'm19',
    league: '🇧🇷 Brazil Serie A',
    home: 'Mirassol SP',
    away: 'Palmeiras SP',
    score: '1 - 2',
    confidence: 'high',
    confidencePct: 74,
    homeProb: 20,
    drawProb: 22,
    awayProb: 58,
    pick: 'AWAY',
    pickLabel: 'Palmeiras Win',
    odds: 1.58,
    overUnder: 'Over 2.5',
    btts: 'YES',
    note: 'Palmeiras adalah raja Brasil dengan skuad bintang dan target juara Serie A.',
    h2hSummary: 'Palmeiras menang 3 dari 4 pertemuan terakhir.',
    keyPlayer: 'Rony'
  },
  {
    id: 'p20',
    matchId: 'm20',
    league: '🇦🇷 Argentina Liga Profesional',
    home: 'Independiente Rivadavia',
    away: 'Racing Club',
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
    keyPlayer: 'Rogelio Funes Mori'
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
        odds: 1.35,
        pick: 'Real Madrid Menang'
      },
      {
        match: MATCHES_DATA.find(m => m.id === 'm10')!,
        prediction: PREDICTIONS_DATA.find(p => p.matchId === 'm10')!,
        odds: 1.48,
        pick: 'Manchester United Menang'
      },
      {
        match: MATCHES_DATA.find(m => m.id === 'm15')!,
        prediction: PREDICTIONS_DATA.find(p => p.matchId === 'm15')!,
        odds: 1.45,
        pick: 'Inter Milan Menang'
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
        odds: 1.68,
        pick: 'Chelsea Menang'
      },
      {
        match: MATCHES_DATA.find(m => m.id === 'm14')!,
        prediction: PREDICTIONS_DATA.find(p => p.matchId === 'm14')!,
        odds: 1.92,
        pick: 'Napoli Menang'
      },
      {
        match: MATCHES_DATA.find(m => m.id === 'm17')!,
        prediction: PREDICTIONS_DATA.find(p => p.matchId === 'm17')!,
        odds: 1.68,
        pick: 'Flamengo Menang'
      }
    ]
  },
  {
    id: 'pkg-3',
    title: '🔥 PARLAY HOT (3-TIM) - 30 AGUSTUS',
    source: 'Rekomendasi KAPSUL4D Special',
    badge: 'Hot Pick',
    totalOdds: 4.50,
    riskLevel: 'Sedang',
    legs: [
      {
        match: MATCHES_DATA.find(m => m.id === 'm1')!,
        prediction: PREDICTIONS_DATA.find(p => p.matchId === 'm1')!,
        odds: 1.40,
        pick: 'Feyenoord Menang'
      },
      {
        match: MATCHES_DATA.find(m => m.id === 'm6')!,
        prediction: PREDICTIONS_DATA.find(p => p.matchId === 'm6')!,
        odds: 1.38,
        pick: 'Ajax Menang'
      },
      {
        match: MATCHES_DATA.find(m => m.id === 'm10')!,
        prediction: PREDICTIONS_DATA.find(p => p.matchId === 'm10')!,
        odds: 1.48,
        pick: 'Manchester United Menang'
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
        match: MATCHES_DATA.find(m => m.id === 'm1')!,
        prediction: PREDICTIONS_DATA.find(p => p.matchId === 'm1')!,
        odds: 1.40,
        pick: 'Feyenoord Menang'
      },
      {
        match: MATCHES_DATA.find(m => m.id === 'm6')!,
        prediction: PREDICTIONS_DATA.find(p => p.matchId === 'm6')!,
        odds: 1.38,
        pick: 'Ajax Menang'
      },
      {
        match: MATCHES_DATA.find(m => m.id === 'm7')!,
        prediction: PREDICTIONS_DATA.find(p => p.matchId === 'm7')!,
        odds: 1.35,
        pick: 'Real Madrid Menang'
      },
      {
        match: MATCHES_DATA.find(m => m.id === 'm15')!,
        prediction: PREDICTIONS_DATA.find(p => p.matchId === 'm15')!,
        odds: 1.45,
        pick: 'Inter Milan Menang'
      }
    ]
  },
  {
    id: 'pkg-5',
    title: '🇪🇸🇮🇹🇧🇷 LA LIGA & SERIE A & BRAZIL COMBO (3-TIM)',
    source: 'Rekomendasi Liga Spanyol, Italia & Brazil',
    badge: 'Odds @5.50x',
    totalOdds: 5.50,
    riskLevel: 'Sedang',
    legs: [
      {
        match: MATCHES_DATA.find(m => m.id === 'm7')!,
        prediction: PREDICTIONS_DATA.find(p => p.matchId === 'm7')!,
        odds: 1.35,
        pick: 'Real Madrid Menang'
      },
      {
        match: MATCHES_DATA.find(m => m.id === 'm15')!,
        prediction: PREDICTIONS_DATA.find(p => p.matchId === 'm15')!,
        odds: 1.45,
        pick: 'Inter Milan Menang'
      },
      {
        match: MATCHES_DATA.find(m => m.id === 'm17')!,
        prediction: PREDICTIONS_DATA.find(p => p.matchId === 'm17')!,
        odds: 1.68,
        pick: 'Flamengo Menang'
      }
    ]
  },
  {
    id: 'pkg-6',
    title: '🇳🇱🇳🇴 Eredivisie & Eliteserien COMBO (3-TIM)',
    source: 'Rekomendasi Liga Belanda & Norwegia',
    badge: 'Odds @5.25x',
    totalOdds: 5.25,
    riskLevel: 'Sedang',
    legs: [
      {
        match: MATCHES_DATA.find(m => m.id === 'm1')!,
        prediction: PREDICTIONS_DATA.find(p => p.matchId === 'm1')!,
        odds: 1.40,
        pick: 'Feyenoord Menang'
      },
      {
        match: MATCHES_DATA.find(m => m.id === 'm2')!,
        prediction: PREDICTIONS_DATA.find(p => p.matchId === 'm2')!,
        odds: 1.58,
        pick: 'Bodo Glimt Menang'
      },
      {
        match: MATCHES_DATA.find(m => m.id === 'm6')!,
        prediction: PREDICTIONS_DATA.find(p => p.matchId === 'm6')!,
        odds: 1.38,
        pick: 'Ajax Menang'
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
    text: 'Prediksi Real Madrid & Man United kemarin tembus semua! Saya pasang single bet combo menang 14.2jt. Web ini informasinya paling update & akurat! 🏅',
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
    text: 'Ikutin prediksi Chelsea & Inter Milan kemarin, 2 single bet masuk semua! WD 8.2jt langsung cair. Terima kasih KAPSUL4D! ✅',
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
    text: 'Prediksi Feyenoord & Ajax kemarin masuk semua. Modal 500rb jadi 5.6jt. Makasih KAPSUL4D selalu kasih prediksi akurat! 🏅',
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
