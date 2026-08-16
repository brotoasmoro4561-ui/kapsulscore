import React, { useState } from 'react';
import { getTeamLogoUrl, getTeamBadgeGradient, getTeamAbbreviation } from '../utils/helpers';

interface TeamLogoProps {
  teamName: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  customLogoUrl?: string;
}

const sizeClasses = {
  xs: 'w-6 h-6 text-[9px] rounded-lg',
  sm: 'w-8 h-8 text-[10px] rounded-xl',
  md: 'w-10 h-10 text-xs rounded-xl',
  lg: 'w-12 h-12 text-sm rounded-2xl',
  xl: 'w-14 h-14 text-sm sm:text-base rounded-2xl',
};

const imgSizes = {
  xs: 'w-4 h-4',
  sm: 'w-5 h-5',
  md: 'w-6 h-6',
  lg: 'w-8 h-8',
  xl: 'w-9 h-9',
};

export const TeamLogo: React.FC<TeamLogoProps> = ({
  teamName,
  size = 'md',
  className = '',
  customLogoUrl,
}) => {
  const [imgError, setImgError] = useState(false);
  const logoUrl = customLogoUrl || getTeamLogoUrl(teamName);
  const badgeGradient = getTeamBadgeGradient(teamName);
  const abbreviation = getTeamAbbreviation(teamName);

  const containerSizeClass = sizeClasses[size] || sizeClasses.md;
  const imageSizeClass = imgSizes[size] || imgSizes.md;

  return (
    <div
      className={`relative flex items-center justify-center flex-shrink-0 font-black font-display overflow-hidden shadow-md border ${badgeGradient.border} ${containerSizeClass} ${className}`}
      title={teamName}
    >
      {/* Background gradient backdrop */}
      <div className={`absolute inset-0 bg-gradient-to-br ${badgeGradient.fromTo} opacity-90`} />
      <div className="absolute inset-0 bg-black/20" />

      {/* Actual Team Logo with automatic fallback */}
      {!imgError && logoUrl ? (
        <img
          src={logoUrl}
          alt={teamName}
          loading="lazy"
          referrerPolicy="no-referrer"
          onError={() => setImgError(true)}
          className={`relative z-10 ${imageSizeClass} object-contain filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)] transition-transform duration-200 group-hover:scale-110`}
        />
      ) : (
        <span className="relative z-10 text-white font-black tracking-tighter drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
          {abbreviation}
        </span>
      )}
    </div>
  );
};
