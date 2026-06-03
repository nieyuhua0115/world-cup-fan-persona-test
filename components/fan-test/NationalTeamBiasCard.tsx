import type { NationalTeamBias } from "../../data/fan-test/types";

type NationalTeamBiasCardProps = {
  team: NationalTeamBias;
};

export function NationalTeamBiasCard({ team }: NationalTeamBiasCardProps) {
  return (
    <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-xl shadow-slate-200/70">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-sky-600">
        你的世界杯滤镜
      </p>
      <div className="mt-4 flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2 className="text-2xl font-semibold text-slate-950">{team.name}</h2>
          <p className="mt-1 text-lg font-semibold text-sky-700">
            {team.roastTitle}
          </p>
        </div>
        <span className="rounded-md border border-sky-200 bg-sky-50 px-3 py-2 text-xs font-semibold text-sky-700">
          {team.warningLabel}
        </span>
      </div>
      <p className="mt-4 text-sm leading-7 text-slate-600">{team.roastDescription}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {team.keywords.map((keyword) => (
          <span
            key={keyword}
            className="rounded-md bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700"
          >
            {keyword}
          </span>
        ))}
      </div>
    </section>
  );
}
