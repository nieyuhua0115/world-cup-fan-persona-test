import type { ReactNode } from "react";
import type { FanPersonaCode } from "../../data/fan-test/types";

type PersonaIllustrationProps = {
  code: FanPersonaCode;
  alt: string;
};

type PropShape =
  | "refund"
  | "crown"
  | "almost"
  | "smile"
  | "podium"
  | "spin"
  | "radar"
  | "bolt"
  | "letter"
  | "party"
  | "well"
  | "spotlight"
  | "shield"
  | "transfer"
  | "board"
  | "formula";

type IllustrationConfig = {
  bg: string;
  field: string;
  primary: string;
  secondary: string;
  accent: string;
  ink: string;
  title: string;
  badge: string;
  chant: string;
  number: string;
  prop: PropShape;
};

const illustrationConfig: Record<FanPersonaCode, IllustrationConfig> = {
  HSEL: {
    bg: "#fff1f2",
    field: "#fecdd3",
    primary: "#e11d48",
    secondary: "#fb7185",
    accent: "#0f172a",
    ink: "#881337",
    title: "RNM退钱",
    badge: "真爱粉",
    chant: "骂完下场还来",
    number: "R",
    prop: "refund",
  },
  HSEW: {
    bg: "#fff7ed",
    field: "#fed7aa",
    primary: "#f97316",
    secondary: "#facc15",
    accent: "#7c2d12",
    ink: "#7c2d12",
    title: "林皇",
    badge: "评论区球王",
    chant: "无限猖狂",
    number: "J",
    prop: "crown",
  },
  HSIL: {
    bg: "#eef2ff",
    field: "#c7d2fe",
    primary: "#4f46e5",
    secondary: "#a5b4fc",
    accent: "#1e1b4b",
    ink: "#312e81",
    title: "93%冠军",
    badge: "意难平",
    chant: "相信过程",
    number: "93",
    prop: "almost",
  },
  HSIW: {
    bg: "#fdf2f8",
    field: "#fbcfe8",
    primary: "#db2777",
    secondary: "#f9a8d4",
    accent: "#831843",
    ink: "#831843",
    title: "莱奥",
    badge: "松弛天才",
    chant: "球未进人先笑",
    number: "L",
    prop: "smile",
  },
  HTEL: {
    bg: "#ecfeff",
    field: "#a5f3fc",
    primary: "#0891b2",
    secondary: "#67e8f9",
    accent: "#164e63",
    ink: "#164e63",
    title: "发布会逆转",
    badge: "两年两冠",
    chant: "过程是积极的",
    number: "T",
    prop: "podium",
  },
  HTEW: {
    bg: "#fff7ed",
    field: "#fdba74",
    primary: "#ea580c",
    secondary: "#fed7aa",
    accent: "#7c2d12",
    ink: "#7c2d12",
    title: "圆神启动",
    badge: "姿势先行",
    chant: "先转两圈",
    number: "A",
    prop: "spin",
  },
  HTIL: {
    bg: "#f1f5f9",
    field: "#cbd5e1",
    primary: "#334155",
    secondary: "#94a3b8",
    accent: "#020617",
    ink: "#0f172a",
    title: "金色侦察机",
    badge: "跑位满分",
    chant: "射门另说",
    number: "W",
    prop: "radar",
  },
  HTIW: {
    bg: "#f0fdf4",
    field: "#bbf7d0",
    primary: "#16a34a",
    secondary: "#86efac",
    accent: "#14532d",
    ink: "#14532d",
    title: "Stay humble",
    badge: "冷面杀手",
    chant: "少说话上强度",
    number: "9",
    prop: "bolt",
  },
  CSEL: {
    bg: "#fffbeb",
    field: "#fde68a",
    primary: "#d97706",
    secondary: "#fcd34d",
    accent: "#78350f",
    ink: "#78350f",
    title: "亲爱的孙",
    badge: "爱你的凯",
    chant: "分别文学",
    number: "K",
    prop: "letter",
  },
  CSEW: {
    bg: "#f0f9ff",
    field: "#bae6fd",
    primary: "#0284c7",
    secondary: "#7dd3fc",
    accent: "#0c4a6e",
    ink: "#0c4a6e",
    title: "快乐足球",
    badge: "快乐第一",
    chant: "进球第二",
    number: "S",
    prop: "party",
  },
  CSIL: {
    bg: "#faf5ff",
    field: "#e9d5ff",
    primary: "#9333ea",
    secondary: "#d8b4fe",
    accent: "#581c87",
    ink: "#581c87",
    title: "龙哥许愿池",
    badge: "爽文男主",
    chant: "去哪哪成功",
    number: "X",
    prop: "well",
  },
  CSIW: {
    bg: "#fdf2f8",
    field: "#fbcfe8",
    primary: "#be185d",
    secondary: "#f9a8d4",
    accent: "#831843",
    ink: "#831843",
    title: "贝林上线",
    badge: "关键先生",
    chant: "别找了我会出现",
    number: "5",
    prop: "spotlight",
  },
  CTEL: {
    bg: "#f8fafc",
    field: "#e2e8f0",
    primary: "#475569",
    secondary: "#cbd5e1",
    accent: "#0f172a",
    ink: "#0f172a",
    title: "马奎尔反转",
    badge: "硬汉抗压",
    chant: "下一场见",
    number: "M",
    prop: "shield",
  },
  CTEW: {
    bg: "#ecfdf5",
    field: "#a7f3d0",
    primary: "#059669",
    secondary: "#6ee7b7",
    accent: "#064e3b",
    ink: "#064e3b",
    title: "伟大转会",
    badge: "越黑越香",
    chant: "先质疑后道歉",
    number: "H",
    prop: "transfer",
  },
  CTIL: {
    bg: "#f5f5f4",
    field: "#d6d3d1",
    primary: "#57534e",
    secondary: "#e7e5e4",
    accent: "#1c1917",
    ink: "#1c1917",
    title: "战术潜水",
    badge: "老登开会",
    chant: "站位图是我的",
    number: "6",
    prop: "board",
  },
  CTIW: {
    bg: "#eff6ff",
    field: "#bfdbfe",
    primary: "#2563eb",
    secondary: "#93c5fd",
    accent: "#1e3a8a",
    ink: "#1e3a8a",
    title: "姆巴佩公式",
    badge: "反向锦鲤",
    chant: "版本不兼容",
    number: "M",
    prop: "formula",
  },
};

export function PersonaIllustration({ code, alt }: PersonaIllustrationProps) {
  const config = illustrationConfig[code];

  return (
    <svg
      aria-label={alt}
      className="aspect-[13/9] h-auto w-full overflow-visible"
      role="img"
      viewBox="0 0 520 360"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{alt}</title>
      <rect fill={config.bg} height="360" rx="30" width="520" />
      <path
        d="M32 256C130 218 210 233 286 258C362 284 428 277 488 246V328H32V256Z"
        fill={config.field}
      />
      <path
        d="M50 294H470M88 276C148 252 218 255 260 288C302 255 372 252 432 276"
        fill="none"
        opacity="0.42"
        stroke="white"
        strokeLinecap="round"
        strokeWidth="5"
      />
      <circle
        cx="260"
        cy="292"
        fill="none"
        opacity="0.5"
        r="42"
        stroke="white"
        strokeWidth="5"
      />

      <rect
        fill="white"
        height="64"
        opacity="0.92"
        rx="18"
        width="122"
        x="34"
        y="30"
      />
      <text
        fill={config.ink}
        fontFamily="Arial, sans-serif"
        fontSize="18"
        fontWeight="900"
        x="56"
        y="57"
      >
        {code}
      </text>
      <text
        fill={config.primary}
        fontFamily="Arial, sans-serif"
        fontSize="14"
        fontWeight="800"
        x="56"
        y="78"
      >
        {config.badge}
      </text>

      <g transform="translate(292 48)">{renderProp(config.prop, config)}</g>

      <g transform="translate(132 105)">
        <path
          d="M49 95C62 49 93 24 130 24C169 24 199 50 212 95C179 118 84 118 49 95Z"
          fill={config.primary}
        />
        <path
          d="M71 102C84 72 105 56 131 56C158 56 180 72 191 102C160 116 103 116 71 102Z"
          fill="white"
          opacity="0.92"
        />
        <circle cx="106" cy="73" fill={config.accent} r="6" />
        <circle cx="154" cy="73" fill={config.accent} r="6" />
        <path
          d="M108 93C124 103 140 103 156 93"
          fill="none"
          stroke={config.accent}
          strokeLinecap="round"
          strokeWidth="6"
        />
        <path
          d="M72 144C80 116 101 101 130 101C160 101 181 116 189 144L202 216H58L72 144Z"
          fill={config.primary}
        />
        <path
          d="M92 144L130 182L168 144"
          fill="none"
          opacity="0.35"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="10"
        />
        <text
          fill="white"
          fontFamily="Arial, sans-serif"
          fontSize="48"
          fontWeight="900"
          textAnchor="middle"
          x="130"
          y="180"
        >
          {config.number}
        </text>
      </g>

      <g transform="translate(32 220)">
        <rect fill="white" height="82" opacity="0.94" rx="20" width="280" />
        <text
          fill={config.ink}
          fontFamily="Arial, sans-serif"
          fontSize="26"
          fontWeight="900"
          x="22"
          y="36"
        >
          {config.title}
        </text>
        <text
          fill={config.primary}
          fontFamily="Arial, sans-serif"
          fontSize="16"
          fontWeight="800"
          x="22"
          y="63"
        >
          {config.chant}
        </text>
      </g>
    </svg>
  );
}

function renderProp(prop: PropShape, config: IllustrationConfig): ReactNode {
  switch (prop) {
    case "refund":
      return (
        <>
          <rect fill="white" height="100" rx="14" width="138" x="12" y="18" />
          <path d="M34 48H128M34 75H110" stroke={config.primary} strokeLinecap="round" strokeWidth="8" />
          <text fill={config.accent} fontFamily="Arial, sans-serif" fontSize="28" fontWeight="900" x="35" y="105">
            退钱
          </text>
        </>
      );
    case "crown":
      return (
        <>
          <path d="M30 100L45 36L78 78L112 34L136 100Z" fill={config.primary} />
          <circle cx="45" cy="36" fill={config.secondary} r="12" />
          <circle cx="112" cy="34" fill={config.secondary} r="12" />
          <rect fill={config.accent} height="18" rx="8" width="116" x="26" y="98" />
        </>
      );
    case "almost":
      return (
        <>
          <circle cx="82" cy="78" fill="white" r="58" />
          <path d="M82 78L82 24A54 54 0 1 1 42 115" fill="none" stroke={config.primary} strokeWidth="16" />
          <text fill={config.accent} fontFamily="Arial, sans-serif" fontSize="25" fontWeight="900" textAnchor="middle" x="82" y="88">
            93%
          </text>
        </>
      );
    case "smile":
      return (
        <>
          <circle cx="82" cy="78" fill={config.secondary} r="58" />
          <circle cx="62" cy="66" fill={config.accent} r="7" />
          <circle cx="102" cy="66" fill={config.accent} r="7" />
          <path d="M54 88C72 108 94 108 112 88" fill="none" stroke={config.accent} strokeLinecap="round" strokeWidth="9" />
        </>
      );
    case "podium":
      return (
        <>
          <rect fill="white" height="74" rx="12" width="140" x="12" y="46" />
          <rect fill={config.primary} height="32" rx="7" width="30" x="26" y="76" />
          <rect fill={config.primary} height="56" rx="7" width="30" x="68" y="52" />
          <rect fill={config.primary} height="42" rx="7" width="30" x="110" y="66" />
          <path d="M32 32H132" stroke={config.accent} strokeLinecap="round" strokeWidth="8" />
        </>
      );
    case "spin":
      return (
        <>
          <circle cx="82" cy="78" fill="white" r="58" />
          <path d="M44 82C45 54 68 36 94 42C118 48 131 72 124 96" fill="none" stroke={config.primary} strokeLinecap="round" strokeWidth="12" />
          <path d="M124 96L143 82L145 109Z" fill={config.primary} />
          <circle cx="82" cy="78" fill={config.secondary} r="18" />
        </>
      );
    case "radar":
      return (
        <>
          <circle cx="82" cy="78" fill="white" r="58" />
          <circle cx="82" cy="78" fill="none" r="42" stroke={config.primary} strokeWidth="6" />
          <circle cx="82" cy="78" fill="none" r="22" stroke={config.primary} strokeWidth="5" />
          <path d="M82 78L126 40" stroke={config.accent} strokeLinecap="round" strokeWidth="7" />
          <circle cx="118" cy="48" fill={config.secondary} r="9" />
        </>
      );
    case "bolt":
      return <path d="M82 20L38 88H76L62 138L132 62H91L108 20Z" fill={config.primary} />;
    case "letter":
      return (
        <>
          <rect fill="white" height="92" rx="14" width="140" x="12" y="34" />
          <path d="M22 50L82 88L142 50" fill="none" stroke={config.primary} strokeLinejoin="round" strokeWidth="8" />
          <path d="M42 108H122" stroke={config.secondary} strokeLinecap="round" strokeWidth="8" />
        </>
      );
    case "party":
      return (
        <>
          <path d="M44 126L72 34L136 98Z" fill={config.primary} />
          <circle cx="50" cy="42" fill={config.secondary} r="10" />
          <circle cx="126" cy="38" fill={config.secondary} r="8" />
          <circle cx="142" cy="72" fill={config.accent} r="7" />
          <path d="M28 72C62 66 82 82 110 62" fill="none" stroke="white" strokeLinecap="round" strokeWidth="7" />
        </>
      );
    case "well":
      return (
        <>
          <path d="M42 74H122L110 126H54Z" fill={config.primary} />
          <path d="M48 74C48 44 70 28 82 28C96 28 116 44 116 74" fill="none" stroke={config.accent} strokeLinecap="round" strokeWidth="9" />
          <circle cx="82" cy="62" fill={config.secondary} r="14" />
        </>
      );
    case "spotlight":
      return (
        <>
          <path d="M82 16L36 132H128Z" fill={config.secondary} opacity="0.9" />
          <circle cx="82" cy="78" fill={config.primary} r="28" />
          <path d="M54 128H110" stroke={config.accent} strokeLinecap="round" strokeWidth="9" />
        </>
      );
    case "shield":
      return (
        <path d="M82 22L138 46V82C138 114 112 132 82 144C52 132 26 114 26 82V46Z" fill={config.primary} />
      );
    case "transfer":
      return (
        <>
          <rect fill="white" height="44" rx="14" width="92" x="26" y="32" />
          <rect fill="white" height="44" rx="14" width="92" x="54" y="104" />
          <path d="M62 86H132M132 86L112 68M132 86L112 104" fill="none" stroke={config.primary} strokeLinecap="round" strokeLinejoin="round" strokeWidth="9" />
        </>
      );
    case "board":
      return (
        <>
          <rect fill={config.accent} height="104" rx="12" width="138" x="14" y="28" />
          <path d="M38 56H128M38 84H128M82 42V120" stroke="white" strokeLinecap="round" strokeWidth="5" />
          <circle cx="58" cy="70" fill={config.secondary} r="7" />
          <circle cx="106" cy="100" fill={config.secondary} r="7" />
        </>
      );
    case "formula":
      return (
        <>
          <rect fill="white" height="104" rx="16" width="146" x="10" y="28" />
          <text fill={config.primary} fontFamily="Arial, sans-serif" fontSize="28" fontWeight="900" x="30" y="72">
            M+B≠🏆
          </text>
          <path d="M34 98H130" stroke={config.accent} strokeLinecap="round" strokeWidth="8" />
        </>
      );
  }
}
