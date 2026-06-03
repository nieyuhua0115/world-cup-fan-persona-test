import type { FanQuestion } from "../../data/fan-test/types";

type FanQuestionCardProps = {
  question: FanQuestion;
  selectedOptionId?: string;
  onSelect: (optionId: string) => void;
};

export function FanQuestionCard({
  question,
  selectedOptionId,
  onSelect,
}: FanQuestionCardProps) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-xl shadow-slate-200/70 sm:p-7">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-rose-500">
        Life SBTI
      </p>
      <h2 className="mt-3 text-2xl font-semibold leading-snug text-slate-950">
        {question.text}
      </h2>
      {question.subtitle ? (
        <p className="mt-2 text-sm leading-6 text-slate-500">{question.subtitle}</p>
      ) : null}

      <div className="mt-6 grid gap-3">
        {question.options.map((option) => {
          const isSelected = selectedOptionId === option.id;

          return (
            <button
              key={option.id}
              className={`rounded-md border px-4 py-4 text-left transition ${
                isSelected
                  ? "border-rose-500 bg-rose-50 text-rose-950"
                  : "border-slate-200 bg-white text-slate-700 hover:border-rose-300 hover:bg-rose-50/60"
              }`}
              type="button"
              onClick={() => onSelect(option.id)}
            >
              <span className="block text-sm font-semibold">{option.label}</span>
              {option.description ? (
                <span className="mt-1 block text-xs opacity-80">
                  {option.description}
                </span>
              ) : null}
            </button>
          );
        })}
      </div>
    </div>
  );
}
