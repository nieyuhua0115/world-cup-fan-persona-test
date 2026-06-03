import type { FanTestResult } from "../../data/fan-test/types";

type AxisBreakdownProps = {
  axisBreakdown: FanTestResult["axisBreakdown"];
};

export function AxisBreakdown({ axisBreakdown }: AxisBreakdownProps) {
  const rows = [
    { label: "情绪", value: axisBreakdown.emotion },
    { label: "关注点", value: axisBreakdown.aesthetic },
    { label: "表达", value: axisBreakdown.expression },
    { label: "关系模式", value: axisBreakdown.loyalty },
  ];

  return (
    <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-xl shadow-slate-200/70">
      <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-rose-500">
        Axis breakdown
      </h2>
      <div className="mt-5 space-y-5">
        {rows.map(({ label, value }) => (
          <div key={label}>
            <div className="flex items-center justify-between gap-3 text-sm">
              <span className="font-semibold text-slate-950">{label}</span>
              <span className="text-slate-500">
                {value.leftLabel} {value.leftPercent}% vs {value.rightLabel}{" "}
                {value.rightPercent}%
              </span>
            </div>
            <div className="mt-2 flex h-2 overflow-hidden rounded-full bg-slate-200">
              <div
                className="h-full bg-rose-500"
                style={{ width: `${value.leftPercent}%` }}
              />
              <div
                className="h-full bg-sky-400"
                style={{ width: `${value.rightPercent}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
