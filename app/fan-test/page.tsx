"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { CreditFooter } from "../../components/fan-test/CreditFooter";
import { FanProgressBar } from "../../components/fan-test/FanProgressBar";
import { FanQuestionCard } from "../../components/fan-test/FanQuestionCard";
import { fanQuestions } from "../../data/fan-test/questions";
import { nationalTeams } from "../../data/fan-test/nationalTeams";
import {
  fanTestStorageKey,
  type FanTestStoredPayload,
} from "../../lib/fan-test/storage";

type FanTestStep = "team" | "quiz";

export default function FanTestPage() {
  const router = useRouter();
  const [step, setStep] = useState<FanTestStep>("team");
  const [selectedNationalTeamId, setSelectedNationalTeamId] = useState("");
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const currentQuestion = fanQuestions[questionIndex];
  const selectedOptionId = answers[currentQuestion?.id];
  const canContinue = Boolean(selectedOptionId);

  function restart() {
    setStep("team");
    setSelectedNationalTeamId("");
    setQuestionIndex(0);
    setAnswers({});
  }

  function selectNationalTeam(teamId: string) {
    setSelectedNationalTeamId(teamId);
    setQuestionIndex(0);
    setStep("quiz");
  }

  function selectOption(optionId: string) {
    if (!currentQuestion) {
      return;
    }

    setAnswers((previousAnswers) => ({
      ...previousAnswers,
      [currentQuestion.id]: optionId,
    }));
  }

  function goPrevious() {
    if (step === "team") {
      return;
    }

    if (questionIndex === 0) {
      setStep("team");
      return;
    }

    setQuestionIndex((index) => Math.max(0, index - 1));
  }

  function goNext() {
    if (!currentQuestion || !selectedOptionId) {
      return;
    }

    if (questionIndex === fanQuestions.length - 1) {
      const payload: FanTestStoredPayload = {
        selectedNationalTeamId,
        answers,
      };

      window.localStorage.setItem(fanTestStorageKey, JSON.stringify(payload));
      router.push("/fan-result");
      return;
    }

    setQuestionIndex((index) => index + 1);
  }

  return (
    <main className="min-h-screen bg-[#f7f4ee] text-slate-950">
      <div className="mx-auto flex min-h-screen w-full max-w-5xl flex-col px-5 py-6 sm:px-8">
        <header className="flex items-center justify-between border-b border-slate-200 pb-5">
          <Link href="/" className="group">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-rose-500">
              Football Meme SBTI
            </p>
            <h1 className="mt-2 text-2xl font-semibold group-hover:text-rose-600">
              世界杯犯病人格测试
            </h1>
          </Link>
          <div className="rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-500">
            Local MVP
          </div>
        </header>

        {step === "team" ? (
          <TeamStep
            selectedNationalTeamId={selectedNationalTeamId}
            onSelect={selectNationalTeam}
          />
        ) : null}

        {step === "quiz" && currentQuestion ? (
          <section className="mx-auto flex w-full max-w-3xl flex-1 flex-col py-8">
            <FanProgressBar
              current={questionIndex + 1}
              total={fanQuestions.length}
            />
            <div className="mt-8">
              <FanQuestionCard
                question={currentQuestion}
                selectedOptionId={selectedOptionId}
                onSelect={selectOption}
              />
            </div>
            <NavControls
              canContinue={canContinue}
              isFinal={questionIndex === fanQuestions.length - 1}
              onBack={goPrevious}
              onNext={goNext}
              onRestart={restart}
            />
          </section>
        ) : null}
        <CreditFooter />
      </div>
    </main>
  );
}

function TeamStep({
  selectedNationalTeamId,
  onSelect,
}: {
  selectedNationalTeamId: string;
  onSelect: (teamId: string) => void;
}) {
  return (
    <section className="mx-auto flex w-full max-w-4xl flex-1 flex-col py-8">
      <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-xl shadow-slate-200/70 sm:p-7">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-sky-600">
          Part 1
        </p>
        <h2 className="mt-3 text-2xl font-semibold leading-snug text-slate-950">
          你世界杯期间最容易代入哪种身份滤镜？
        </h2>
        <p className="mt-3 text-sm leading-6 text-slate-500">
          这个答案不参与 16 型人格计算，只生成你的世界杯滤镜诊断。选完会直接进入第一题。
        </p>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {nationalTeams.map((team) => {
            const isSelected = selectedNationalTeamId === team.id;

            return (
              <button
                key={team.id}
                className={`rounded-md border px-4 py-4 text-left transition ${
                  isSelected
                    ? "border-sky-500 bg-sky-50 text-sky-950"
                    : "border-slate-200 bg-white text-slate-700 hover:border-sky-300 hover:bg-sky-50/60"
                }`}
                type="button"
                onClick={() => onSelect(team.id)}
              >
                <span className="block text-sm font-semibold">{team.label}</span>
                <span className="mt-1 block text-xs opacity-80">
                  {team.roastTitle}
                </span>
              </button>
            );
          })}
        </div>
      </div>

    </section>
  );
}

function NavControls({
  canContinue,
  isFinal,
  onBack,
  onNext,
  onRestart,
}: {
  canContinue: boolean;
  isFinal: boolean;
  onBack: () => void;
  onNext: () => void;
  onRestart?: () => void;
}) {
  return (
    <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
      {onRestart ? (
        <button
          className="rounded-md border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-600 transition hover:border-slate-300"
          type="button"
          onClick={onRestart}
        >
          重新开始
        </button>
      ) : (
        <span />
      )}
      <div className="flex gap-3">
        <button
          className="rounded-md border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-600 transition hover:border-slate-300"
          type="button"
          onClick={onBack}
        >
          上一步
        </button>
        <button
          className="rounded-md bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-40"
          disabled={!canContinue}
          type="button"
          onClick={onNext}
        >
          {isFinal ? "查看结果" : "下一步"}
        </button>
      </div>
    </div>
  );
}
