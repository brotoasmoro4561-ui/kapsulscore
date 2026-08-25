import React, { useState } from 'react';
import { 
  Search, 
  Calendar, 
  Filter, 
  Sparkles, 
  Clock, 
  Plus, 
  ExternalLink, 
  CheckCircle,
  X,
  Target
} from 'lucide-react';
import { Match, Prediction, BetSlipItem } from '../types';
import { formatDateIndo } from '../utils/helpers';
import { TeamLogo } from './TeamLogo';
import { OFFICIAL_LINK } from '../data/mockData';

interface JadwalViewProps {
  matches: Match[];
  predictions: Prediction[];
  onAddToSlip: (item: BetSlipItem) => void;
  onViewPrediction: (matchId: string) => void;
}

export const JadwalView: React.FC<JadwalViewProps> = ({
  matches,
  predictions,
  onAddToSlip,
  onViewPrediction
}) => {
  const [selectedDate, setSelectedDate] = useState<string>('ALL');
  const [selectedLeague, setSelectedLeague] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const uniqueDates: string[] = Array.from(new Set(matches.map(m => m.date)));
  const uniqueLeagues: string[] = Array.from(new Set(matches.map(m => m.league)));

  const filteredMatches = matches.filter((m) => {
    const matchDate = selectedDate === 'ALL' || m.date === selectedDate;
    const matchLeague = selectedLeague === 'ALL' || m.league === selectedLeague;
    const query = searchQuery.toLowerCase().trim();
    const matchSearch =
      !query ||
      m.home.toLowerCase().includes(query) ||
      m.away.toLowerCase().includes(query) ||
      m.league.toLowerCase().includes(query) ||
      m.tag.toLowerCase().includes(query);

    return matchDate && matchLeague && matchSearch;
  });

  // Group by Date & League
  const groupedMatches: Record<string, Match[]> = {};
  filteredMatches.forEach((m) => {
    const key = `${m.date} — ${m.league}`;
    if (!groupedMatches[key]) {
      groupedMatches[key] = [];
    }
    groupedMatches[key].push(m);
  });

  return (
    <div className="space-y-5 animate-in fade-in duration-300">
      {/* Top Filter Bar */}
      <div className="glass-panel p-4 rounded-2xl border-white/8 space-y-4">
        {/* Search & Counter */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-white/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Cari nama klub, liga, atau negara..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-9 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-white text-xs placeholder:text-white/30 focus:outline-none focus:border-cyan-400/50 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-white/70">
            <span className="px-3 py-2 rounded-xl bg-white/5 border border-white/8 font-mono">
              Total Laga: <b className="text-cyan-300">{filteredMatches.length}</b>
            </span>
          </div>
        </div>

        {/* Date Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          <button
            onClick={() => setSelectedDate('ALL')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
              selectedDate === 'ALL'
                ? 'bg-gradient-to-r from-cyan-400 to-indigo-500 text-black font-black shadow-[0_0_15px_rgba(34,211,238,0.3)]'
                : 'bg-white/5 text-white/60 hover:text-white hover:bg-white/10'
            }`}
          >
            Semua Hari ({matches.length})
          </button>
          {uniqueDates.map((date) => {
            const count = matches.filter(m => m.date === date).length;
            const isToday = date === '16/08';
            return (
              <button
                key={date}
                onClick={() => setSelectedDate(date)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                  selectedDate === date
                    ? 'bg-gradient-to-r from-cyan-400 to-indigo-500 text-black font-black shadow-[0_0_15px_rgba(34,211,238,0.3)]'
                    : 'bg-white/5 text-white/60 hover:text-white hover:bg-white/10'
                }`}
              >
                <span>{formatDateIndo(date)}</span>
                {isToday && (
                  <span className="text-[9px] bg-black/30 px-1.5 py-0.2 rounded font-mono">Hari Ini</span>
                )}
                <span className="text-[10px] opacity-60 font-mono">({count})</span>
              </button>
            );
          })}
        </div>

        {/* League Filter Chips */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          <button
            onClick={() => setSelectedLeague('ALL')}
            className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold whitespace-nowrap transition-colors ${
              selectedLeague === 'ALL'
                ? 'bg-cyan-400/20 text-cyan-300 border border-cyan-400/30'
                : 'text-white/40 hover:text-white bg-transparent'
            }`}
          >
            Semua Liga
          </button>
          {uniqueLeagues.map((league) => (
            <button
              key={league}
              onClick={() => setSelectedLeague(league)}
              className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold whitespace-nowrap transition-colors ${
                selectedLeague === league
                  ? 'bg-cyan-400/20 text-cyan-300 border border-cyan-400/30'
                  : 'text-white/40 hover:text-white bg-transparent'
              }`}
            >
              {league}
            </button>
          ))}
        </div>
      </div>

      {/* Match Cards Grouped */}
      {Object.keys(groupedMatches).length === 0 ? (
        <div className="glass-panel p-12 text-center text-white/40 rounded-2xl">
          <Calendar className="w-10 h-10 mx-auto mb-3 text-white/20" />
          <p className="text-sm font-semibold">Tidak ditemukan pertandingan yang cocok.</p>
          <p className="text-xs text-white/30 mt-1">Coba sesuaikan kata kunci pencarian atau tanggal filter Anda.</p>
        </div>
      ) : (
        <div className="space-y-5">
          {Object.entries(groupedMatches).map(([groupKey, groupMatches]) => {
            const [dateStr, leagueStr] = groupKey.split(' — ');
            return (
              <div key={groupKey} className="glass-panel p-4 rounded-2xl border-white/8 space-y-3">
                {/* Group Header */}
                <div className="flex items-center justify-between pb-2.5 border-b border-white/8">
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs font-black font-display uppercase tracking-wider text-cyan-400">
                      {leagueStr}
                    </span>
                    <span className="text-[10px] font-bold text-white/40 bg-white/5 px-2 py-0.5 rounded">
                      {formatDateIndo(dateStr)}
                    </span>
                  </div>
                  <span className="text-xs text-white/40 font-mono">
                    {groupMatches.length} Laga
                  </span>
                </div>

                {/* Match Rows */}
                <div className="space-y-2">
                  {groupMatches.map((m) => {
                    const pred = predictions.find(p => p.matchId === m.id);
                    return (
                      <div
                        key={m.id}
                        className="p-3 sm:p-3.5 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 transition-all flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 group"
                      >
                        {/* Time & Venue */}
                        <div className="flex items-center gap-3 min-w-[130px]">
                          <div className="text-center px-2 py-1 rounded-lg bg-cyan-950/40 border border-cyan-400/20 text-cyan-300">
                            <div className="text-xs font-black font-mono">{m.time}</div>
                            <div className="text-[8px] font-bold tracking-widest text-cyan-400/70">WIB</div>
                          </div>
                          <div className="min-w-0">
                            <span className="text-[10px] text-amber-300 font-bold bg-amber-400/10 px-1.5 py-0.5 rounded border border-amber-400/20">
                              {m.tag}
                            </span>
                            {m.stadium && (
                              <div className="text-[9px] text-white/30 truncate mt-0.5">
                                {m.stadium}
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Teams & Handicap */}
                        <div className="flex-1 flex items-center justify-between gap-2 px-2 sm:px-6">
                          {/* Home */}
                          <div className="flex items-center gap-2 flex-1 min-w-0">
                            <TeamLogo teamName={m.home} size="sm" />
                            <div className="min-w-0">
                              <span className="text-xs font-bold text-white block truncate">{m.home}</span>
                              {m.homeForm && (
                                <div className="flex items-center gap-0.5 mt-0.5">
                                  {m.homeForm.map((res, i) => (
                                    <span
                                      key={i}
                                      className={`w-3.5 h-3.5 rounded text-[8px] font-bold flex items-center justify-center ${
                                        res === 'W' ? 'bg-emerald-500/20 text-emerald-300' : res === 'D' ? 'bg-amber-500/20 text-amber-300' : 'bg-rose-500/20 text-rose-300'
                                      }`}
                                    >
                                      {res}
                                    </span>
                                  ))}
                                </div>
                              )}
                            </div>
                          </div>

                          {/* VS / Handicap */}
                          <div className="flex flex-col items-center px-2 flex-shrink-0">
                            <span className="text-[10px] font-black text-white/30 font-display">VS</span>
                            {m.handicap && (
                              <span className="text-[10px] font-extrabold text-amber-300 font-mono bg-amber-400/10 px-1.5 py-0.5 rounded border border-amber-400/20">
                                {m.handicap}
                              </span>
                            )}
                          </div>

                          {/* Away */}
                          <div className="flex items-center justify-end gap-2 flex-1 min-w-0 text-right">
                            <div className="min-w-0">
                              <span className="text-xs font-bold text-white block truncate">{m.away}</span>
                              {m.awayForm && (
                                <div className="flex items-center justify-end gap-0.5 mt-0.5">
                                  {m.awayForm.map((res, i) => (
                                    <span
                                      key={i}
                                      className={`w-3.5 h-3.5 rounded text-[8px] font-bold flex items-center justify-center ${
                                        res === 'W' ? 'bg-emerald-500/20 text-emerald-300' : res === 'D' ? 'bg-amber-500/20 text-amber-300' : 'bg-rose-500/20 text-rose-300'
                                      }`}
                                    >
                                      {res}
                                    </span>
                                  ))}
                                </div>
                              )}
                            </div>
                            <TeamLogo teamName={m.away} size="sm" />
                          </div>
                        </div>

                        {/* Actions */}
                        <div className="flex items-center justify-end gap-2 flex-shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-white/5">
                          {pred ? (
                            <>
                              <button
                                onClick={() => onViewPrediction(m.id)}
                                className="px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white/80 hover:text-white text-[11px] font-bold flex items-center gap-1 transition-colors"
                              >
                                <Target className="w-3 h-3 text-cyan-400" />
                                <span className="hidden sm:inline">Analisis</span>
                              </button>
                              <button
                                onClick={() => onAddToSlip({
                                  matchId: m.id,
                                  match: m,
                                  pick: pred.pickLabel,
                                  pickDetail: `${m.home} vs ${m.away} (${pred.score})`,
                                  odds: pred.odds
                                })}
                                className="px-3 py-1.5 rounded-lg bg-cyan-400/15 hover:bg-cyan-400/25 border border-cyan-400/30 text-cyan-300 text-[11px] font-bold flex items-center gap-1 transition-colors"
                              >
                                <Plus className="w-3 h-3" />
                                <span>Slip @{pred.odds}</span>
                              </button>
                            </>
                          ) : (
                            <a
                              href={OFFICIAL_LINK}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white text-[11px] font-bold flex items-center gap-1"
                            >
                              <span>Pasang</span>
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
