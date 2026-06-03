import type { FanTestResult } from "../../data/fan-test/types";
import { PersonaIllustration } from "./PersonaIllustration";

type FanPersonaCardProps = {
  result: FanTestResult;
};

const ratingLabels: Array<{
  key: keyof FanTestResult["persona"]["ratings"];
  label: string;
}> = [
  { key: "passion", label: "发疯指数" },
  { key: "tactics", label: "复盘指数" },
  { key: "memeEnergy", label: "梗图能量" },
  { key: "loyalty", label: "长情指数" },
  { key: "chaos", label: "混乱指数" },
];

export function FanPersonaCard({ result }: FanPersonaCardProps) {
  const { persona } = result;

  return (
    <section className="overflow-hidden rounded-lg border border-slate-200 bg-white text-slate-950 shadow-xl shadow-slate-200/70">
      <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="flex min-h-[280px] items-center bg-slate-50 p-4 sm:p-6">
          <PersonaIllustration alt={persona.image.alt} code={persona.code} />
        </div>
        <div className="p-6 sm:p-8">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-rose-500">
                Fan SBTI Result
              </p>
              <h1 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
                {persona.title}
              </h1>
              <p className="mt-3 text-lg font-semibold text-slate-700">
                {persona.subtitle}
              </p>
            </div>
            <div className="rounded-md bg-slate-950 px-4 py-3 text-center text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-rose-200">
                Type
              </p>
              <p className="mt-1 text-2xl font-black">{persona.code}</p>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {persona.keywords.map((keyword) => (
              <span
                key={keyword}
                className="rounded-md bg-rose-50 px-3 py-1 text-xs font-bold text-rose-700"
              >
                {keyword}
              </span>
            ))}
          </div>

          <p className="mt-6 text-base leading-8 text-slate-800">
            {persona.description}
          </p>
        </div>
      </div>

      <div className="border-t border-slate-100 p-6 sm:p-8">
      <blockquote className="rounded-md border-l-4 border-rose-500 bg-rose-50 px-4 py-3 text-lg font-bold leading-8 text-slate-950">
        “{persona.footballQuote}”
      </blockquote>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <div className="rounded-md bg-slate-50 p-4">
          <h2 className="text-sm font-black uppercase tracking-[0.14em]">
            你的破防瞬间
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700">
            {persona.breakdownMoment}
          </p>
        </div>
        <div className="rounded-md bg-slate-50 p-4">
          <h2 className="text-sm font-black uppercase tracking-[0.14em]">
            Ratings
          </h2>
          <div className="mt-3 space-y-2">
            {ratingLabels.map(({ key, label }) => (
              <div key={key} className="flex items-center justify-between gap-3">
                <span className="text-sm font-semibold">{label}</span>
                <span className="text-sm font-black">
                  {toStars(persona.ratings[key])}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}

function toStars(value: number): string {
  return `${"★".repeat(value)}${"☆".repeat(5 - value)}`;
}
