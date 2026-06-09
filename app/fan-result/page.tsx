"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { AxisBreakdown } from "../../components/fan-test/AxisBreakdown";
import { CreditFooter } from "../../components/fan-test/CreditFooter";
import { FanPersonaCard } from "../../components/fan-test/FanPersonaCard";
import { NationalTeamBiasCard } from "../../components/fan-test/NationalTeamBiasCard";
import type { GeneratedFanRoast } from "../../data/fan-test/generatedRoasts";
import type { FanTestResult } from "../../data/fan-test/types";
import { getGeneratedFanRoast } from "../../lib/fan-test/generatedRoasts";
import { calculateFanPersona } from "../../lib/fan-test/scoring";
import {
  fanTestStorageKey,
  type FanTestStoredPayload,
} from "../../lib/fan-test/storage";

type CopyState = "idle" | "copied" | "unsupported";

export default function FanResultPage() {
  const [payload, setPayload] = useState<FanTestStoredPayload | null>(null);
  const [copyState, setCopyState] = useState<CopyState>("idle");

  useEffect(() => {
    const storedValue = window.localStorage.getItem(fanTestStorageKey);

    if (!storedValue) {
      return;
    }

    try {
      setPayload(JSON.parse(storedValue) as FanTestStoredPayload);
    } catch {
      window.localStorage.removeItem(fanTestStorageKey);
    }
  }, []);

  const result = useMemo<FanTestResult | null>(() => {
    if (!payload) {
      return null;
    }

    return calculateFanPersona(payload);
  }, [payload]);
  const generatedRoast = result
    ? getGeneratedFanRoast(result.code, result.selectedNationalTeam.id)
    : undefined;

  async function copyFriendCircleCopy() {
    if (!result) {
      return;
    }

    const text = generatedRoast
      ? `${generatedRoast.shareCopy}\n${generatedRoast.roast}`
      : `${result.persona.friendCircleCopy}\n${result.shareLine}`;

    if (!navigator.clipboard) {
      setCopyState("unsupported");
      return;
    }

    await navigator.clipboard.writeText(text);
    setCopyState("copied");
  }

  if (!result) {
    return (
      <main className="min-h-screen bg-[#f7f4ee] px-5 py-6 text-slate-950 sm:px-8">
        <div className="mx-auto flex min-h-[calc(100vh-3rem)] max-w-3xl flex-col items-center justify-center text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-rose-500">
            Football Meme SBTI
          </p>
          <h1 className="mt-4 text-4xl font-semibold">还没有测试结果</h1>
          <p className="mt-4 text-sm leading-7 text-slate-600">
            localStorage 里没有找到已完成的世界杯犯病人格测试。先做完 16 道题，再回来截图发疯。
          </p>
          <Link
            className="mt-8 rounded-md bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-slate-800"
            href="/fan-test"
          >
            去测试
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f7f4ee] text-slate-950">
      <div className="mx-auto w-full max-w-6xl px-5 py-6 sm:px-8">
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
            {result.code}
          </div>
        </header>

        <div className="grid gap-6 py-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-6">
            <FanPersonaCard result={result} />
            <CopyPanel
              copyState={copyState}
              friendCircleCopy={result.persona.friendCircleCopy}
              generatedRoast={generatedRoast}
              shareLine={result.shareLine}
              onCopy={copyFriendCircleCopy}
            />
          </div>

          <div className="space-y-6">
            <NationalTeamBiasCard team={result.selectedNationalTeam} />
            <AxisBreakdown axisBreakdown={result.axisBreakdown} />
            <ActionPanel />
          </div>
        </div>
        <CreditFooter />
      </div>
    </main>
  );
}

function CopyPanel({
  copyState,
  friendCircleCopy,
  generatedRoast,
  shareLine,
  onCopy,
}: {
  copyState: CopyState;
  friendCircleCopy: string;
  generatedRoast?: GeneratedFanRoast;
  shareLine: string;
  onCopy: () => void;
}) {
  return (
    <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-xl shadow-slate-200/70">
      <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-rose-500">
        朋友圈文案
      </h2>
      <p className="mt-4 rounded-md bg-slate-50 p-4 text-sm leading-7 text-slate-700">
        {friendCircleCopy}
      </p>

      <h2 className="mt-6 text-sm font-semibold uppercase tracking-[0.16em] text-rose-500">
        毒舌总结
      </h2>
      <p className="mt-4 rounded-md bg-slate-50 p-4 text-sm leading-7 text-slate-700">
        {shareLine}
      </p>

      {generatedRoast ? (
        <div className="mt-6 rounded-md border border-rose-100 bg-rose-50 p-4">
          <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-rose-600">
            AI 预生成毒舌版
          </h2>
          <h3 className="mt-3 text-xl font-black text-slate-950">
            {generatedRoast.headline}
          </h3>
          <p className="mt-3 text-sm leading-7 text-slate-800">
            {generatedRoast.roast}
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <div className="rounded-md bg-white p-3">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-rose-500">
                分享文案
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                {generatedRoast.shareCopy}
              </p>
            </div>
            <div className="rounded-md bg-white p-3">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-rose-500">
                小红书配文
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                {generatedRoast.xiaohongshuCaption}
              </p>
            </div>
          </div>
          <div className="mt-3 rounded-md bg-white p-3">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-rose-500">
              短视频口播
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              {generatedRoast.shortVideoScript}
            </p>
          </div>
        </div>
      ) : null}

      <button
        className="mt-5 rounded-md bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-slate-800"
        type="button"
        onClick={onCopy}
      >
        {generatedRoast ? "复制 AI 文案" : "复制朋友圈文案"}
      </button>
      {copyState === "copied" ? (
        <p className="mt-3 text-sm text-emerald-600">已复制。</p>
      ) : null}
      {copyState === "unsupported" ? (
        <p className="mt-3 text-sm text-slate-500">
          当前浏览器不支持自动复制，直接选中文案复制即可。
        </p>
      ) : null}
    </section>
  );
}

function ActionPanel() {
  return (
    <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-xl shadow-slate-200/70">
      <div className="flex flex-wrap gap-3">
        <Link
          className="rounded-md bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-slate-800"
          href="/fan-test"
        >
          重新测试
        </Link>
        <Link
          className="rounded-md border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-600 transition hover:border-slate-300"
          href="/"
        >
          返回首页
        </Link>
      </div>
    </section>
  );
}
