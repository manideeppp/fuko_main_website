import React from "react";

/**
 * Premium Korean-themed line icons
 * - consistent stroke
 * - supports size + color + accent
 */
const Base = ({ size = 22, children }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    {children}
  </svg>
);

export const KbbqGrillIcon = ({ size, color = "#E5E7EB", accent = "#ff5722" }) => (
  <Base size={size}>
    <rect x="10" y="22" width="28" height="14" rx="7" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <path d="M16 20c2-2 4-2 6 0M26 20c2-2 4-2 6 0" stroke={accent} strokeWidth="2" strokeLinecap="round" />
    <path d="M16 28h16" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <path d="M14 32h20" stroke={color} strokeWidth="2" strokeLinecap="round" />
  </Base>
);

export const TteokbokkiIcon = ({ size, color = "#E5E7EB", accent = "#ff5722" }) => (
  <Base size={size}>
    <path d="M10 26h28c0 8-6 14-14 14S10 34 10 26z" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <path d="M18 22l12-6" stroke={accent} strokeWidth="2" strokeLinecap="round" />
    <path d="M20 30l10-5" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <path d="M18 34l12-6" stroke={color} strokeWidth="2" strokeLinecap="round" />
  </Base>
);

export const BibimbapIcon = ({ size, color = "#E5E7EB", accent = "#ff5722" }) => (
  <Base size={size}>
    <path d="M10 26h28c0 8-7 14-14 14S10 34 10 26z" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <circle cx="24" cy="24" r="4" stroke={accent} strokeWidth="2" />
    <path d="M16 22c2 2 4 2 6 0M26 22c2 2 4 2 6 0" stroke={color} strokeWidth="2" strokeLinecap="round" />
  </Base>
);

export const BanchanIcon = ({ size, color = "#E5E7EB", accent = "#ff5722" }) => (
  <Base size={size}>
    <rect x="10" y="16" width="28" height="22" rx="6" stroke={color} strokeWidth="2" />
    <path d="M16 24c4-4 8 4 12 0s6 2 8 0" stroke={accent} strokeWidth="2" strokeLinecap="round" />
    <path d="M16 30c6-3 10 3 20 0" stroke={color} strokeWidth="2" strokeLinecap="round" />
  </Base>
);

export const KoreanNoodlesIcon = ({ size, color = "#E5E7EB", accent = "#ff5722" }) => (
  <Base size={size}>
    <path d="M12 26h24c0 7-6 12-12 12s-12-5-12-12z" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <path d="M16 22c4 3 12 3 16 0" stroke={accent} strokeWidth="2" strokeLinecap="round" />
    <path d="M18 29c3 2 9 2 12 0" stroke={color} strokeWidth="2" strokeLinecap="round" />
  </Base>
);

export const SojuIcon = ({ size, color = "#E5E7EB", accent = "#ff5722" }) => (
  <Base size={size}>
    <path
      d="M18 10h12l-2 6v20c0 2-2 4-4 4h0c-2 0-4-2-4-4V16l-2-6z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path d="M20 24h8" stroke={accent} strokeWidth="2" strokeLinecap="round" />
  </Base>
);

export const ChefSpecialIcon = ({ size, color = "#E5E7EB", accent = "#ff5722" }) => (
  <Base size={size}>
    <path
      d="M24 10l4 8 9 1-7 6 2 9-8-4-8 4 2-9-7-6 9-1 4-8z"
      stroke={color}
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <circle cx="24" cy="22" r="3" stroke={accent} strokeWidth="2" />
  </Base>
);

/** Map key -> icon component (used by mockData iconKey) */
export const menuIconMap = {
  kbbq: KbbqGrillIcon,
  tteokbokki: TteokbokkiIcon,
  bibimbap: BibimbapIcon,
  banchan: BanchanIcon,
  noodles: KoreanNoodlesIcon,
  soju: SojuIcon,
  special: ChefSpecialIcon,
};
