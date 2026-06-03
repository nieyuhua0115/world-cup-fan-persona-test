import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#f7f4ee] text-slate-950">
      <div className="mx-auto flex min-h-screen w-full max-w-5xl flex-col px-5 py-6 sm:px-8">
        <header className="flex items-center justify-between border-b border-slate-200 pb-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-rose-500">
              Life SBTI
            </p>
            <h1 className="mt-2 text-2xl font-semibold">
              世界杯犯病人格测试
            </h1>
          </div>
          <div className="rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-500">
            Local MVP
          </div>
        </header>

        <section className="grid flex-1 items-center gap-8 py-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              World Cup Life Persona Test
            </p>
            <h2 className="mt-4 max-w-3xl text-5xl font-semibold leading-tight text-slate-950">
              世界杯期间，你是哪种生活发疯人格？
            </h2>
            <div className="mt-6 max-w-2xl space-y-3 text-lg leading-8 text-slate-700">
              <p>有人在群聊实时开麦，有人表面没事内心小作文；</p>
              <p>有人长情到离谱，有人快乐随版本更新；</p>
              <p>世界杯只是触发器，真正暴露的是你的日常精神状态。</p>
            </div>
            <p className="mt-6 text-xl font-semibold text-rose-600">
              16 道生活题，测出你的犯病人格。
            </p>
            <Link
              className="mt-8 inline-flex rounded-md bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-slate-800"
              href="/fan-test"
            >
              开始测试
            </Link>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/70">
            <h3 className="text-lg font-semibold text-slate-950">本测试纯属娱乐。</h3>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              如有冒犯，说明测得挺准。结果只调侃日常行为、社交状态和看热闹心态，不攻击国家、民族、地域或现实身份。
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
