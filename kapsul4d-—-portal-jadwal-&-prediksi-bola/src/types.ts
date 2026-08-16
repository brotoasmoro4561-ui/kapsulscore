export type ActiveTab = 'dashboard' | 'jadwal' | 'prediksi' | 'parlay' | 'testimoni' | 'transaksi';

export interface Match {
  id: string;
  date: string;
  time: string;
  league: string;
  leagueFlag?: string;
  home: string;
  away: string;
  tag: string;
  stadium?: string;
  homeForm?: ('W' | 'D' | 'L')[];
  awayForm?: ('W' | 'D' | 'L')[];
  homeRank?: number;
  awayRank?: number;
}

export interface Prediction {
  id: string;
  matchId?: string;
  league: string;
  home: string;
  away: string;
  score: string;
  confidence: 'high' | 'mid';
  confidencePct: number;
  homeProb: number;
  drawProb: number;
  awayProb: number;
  pick: 'HOME' | 'DRAW' | 'AWAY' | 'OVER' | 'UNDER' | 'BTTS';
  pickLabel: string;
  odds: number;
  overUnder?: string;
  btts?: 'YES' | 'NO';
  note: string;
  h2hSummary?: string;
  keyPlayer?: string;
}

export interface ParlayPackage {
  id: string;
  title: string;
  source: string;
  badge: string;
  totalOdds: number;
  riskLevel: 'Aman' | 'Sedang' | 'Tinggi (Jackpot)';
  legs: {
    match: Match;
    prediction: Prediction;
    odds: number;
    pick: string;
  }[];
}

export interface Testimonial {
  id: string;
  user: string;
  city: string;
  type: 'wd' | 'jp' | 'bonus' | 'win';
  amount: number;
  text: string;
  stars: number;
  time: string;
  avatarColor: 'green' | 'amber' | 'red' | 'purple' | 'pink' | 'cyan';
  gameType?: string;
  bank?: string;
  verified?: boolean;
}

export interface LiveTransaction {
  id: string;
  type: 'DEPOSIT' | 'WITHDRAW';
  user: string;
  amount: number;
  method: string;
  time: string;
  status: 'SUCCESS' | 'PROCESSING';
}

export interface BetSlipItem {
  matchId: string;
  match: Match;
  pick: string;
  pickDetail: string;
  odds: number;
}
