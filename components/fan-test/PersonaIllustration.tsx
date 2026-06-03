import type { FanPersonaCode } from "../../data/fan-test/types";

type PersonaIllustrationProps = {
  code: FanPersonaCode;
  alt: string;
};

const illustrationConfig: Record<
  FanPersonaCode,
  {
    bg: string;
    primary: string;
    secondary: string;
    accent: string;
    symbol: string;
  }
> = {
  HSEL: { bg: "#fff1f2", primary: "#e11d48", secondary: "#fb7185", accent: "#0f172a", symbol: "!" },
  HSEW: { bg: "#fef3c7", primary: "#f97316", secondary: "#facc15", accent: "#7c2d12", symbol: "?" },
  HSIL: { bg: "#eef2ff", primary: "#4f46e5", secondary: "#a5b4fc", accent: "#1e1b4b", symbol: "~" },
  HSIW: { bg: "#fdf2f8", primary: "#db2777", secondary: "#f9a8d4", accent: "#831843", symbol: "*" },
  HTEL: { bg: "#ecfeff", primary: "#0891b2", secondary: "#67e8f9", accent: "#164e63", symbol: "#" },
  HTEW: { bg: "#fff7ed", primary: "#ea580c", secondary: "#fdba74", accent: "#7c2d12", symbol: ">" },
  HTIL: { bg: "#f1f5f9", primary: "#334155", secondary: "#94a3b8", accent: "#020617", symbol: "=" },
  HTIW: { bg: "#f0fdf4", primary: "#16a34a", secondary: "#86efac", accent: "#14532d", symbol: "%" },
  CSEL: { bg: "#fffbeb", primary: "#d97706", secondary: "#fde68a", accent: "#78350f", symbol: "+" },
  CSEW: { bg: "#f0f9ff", primary: "#0284c7", secondary: "#7dd3fc", accent: "#0c4a6e", symbol: "/" },
  CSIL: { bg: "#faf5ff", primary: "#9333ea", secondary: "#d8b4fe", accent: "#581c87", symbol: "•" },
  CSIW: { bg: "#fdf2f8", primary: "#be185d", secondary: "#fbcfe8", accent: "#831843", symbol: "♡" },
  CTEL: { bg: "#f8fafc", primary: "#475569", secondary: "#cbd5e1", accent: "#0f172a", symbol: "&" },
  CTEW: { bg: "#ecfdf5", primary: "#059669", secondary: "#6ee7b7", accent: "#064e3b", symbol: "@" },
  CTIL: { bg: "#f5f5f4", primary: "#57534e", secondary: "#d6d3d1", accent: "#1c1917", symbol: ":" },
  CTIW: { bg: "#eff6ff", primary: "#2563eb", secondary: "#93c5fd", accent: "#1e3a8a", symbol: "^" },
};

export function PersonaIllustration({ code, alt }: PersonaIllustrationProps) {
  const config = illustrationConfig[code];

  return (
    <svg
      aria-label={alt}
      className="h-full w-full"
      role="img"
      viewBox="0 0 420 320"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect fill={config.bg} height="320" rx="28" width="420" />
      <circle cx="330" cy="70" fill={config.secondary} opacity="0.75" r="48" />
      <circle cx="70" cy="250" fill={config.secondary} opacity="0.55" r="62" />
      <path
        d="M86 214C110 132 160 90 224 92C288 94 335 146 346 232C292 258 160 264 86 214Z"
        fill={config.primary}
        opacity="0.92"
      />
      <path
        d="M132 207C146 164 174 139 210 138C248 137 280 165 294 209C250 226 178 226 132 207Z"
        fill="white"
        opacity="0.9"
      />
      <circle cx="181" cy="159" fill={config.accent} r="7" />
      <circle cx="247" cy="159" fill={config.accent} r="7" />
      <path
        d="M188 190C207 202 228 202 248 190"
        fill="none"
        stroke={config.accent}
        strokeLinecap="round"
        strokeWidth="8"
      />
      <rect
        fill="white"
        height="58"
        opacity="0.88"
        rx="18"
        width="114"
        x="38"
        y="38"
      />
      <text
        fill={config.accent}
        fontFamily="Arial, sans-serif"
        fontSize="28"
        fontWeight="900"
        x="54"
        y="76"
      >
        {code}
      </text>
      <text
        fill={config.primary}
        fontFamily="Arial, sans-serif"
        fontSize="72"
        fontWeight="900"
        opacity="0.9"
        x="300"
        y="270"
      >
        {config.symbol}
      </text>
    </svg>
  );
}
