import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto flex min-h-screen w-full max-w-5xl flex-col px-5 py-6 sm:px-8">
        <header className="flex items-center justify-between border-b border-white/10 pb-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-lime-300">
              Football SBTI
            </p>
            <h1 className="mt-2 text-2xl font-semibold">
              世界杯犯病人格测试
            </h1>
          </div>
          <div className="rounded-md border border-white/15 px-3 py-2 text-sm text-slate-300">
            Local MVP
          </div>
        </header>

        <section className="grid flex-1 items-center gap-8 py-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
              World Cup Fan Persona Test
            </p>
            <h2 className="mt-4 max-w-3xl text-5xl font-semibold leading-tight text-white">
              世界杯快来了。
            </h2>
            <div className="mt-6 max-w-2xl space-y-3 text-lg leading-8 text-slate-300">
              <p>有人看战术，有人看球星；</p>
              <p>有人看命运，有人看帅哥；</p>
              <p>有人四年不看球，一到世界杯突然开始指挥国家队。</p>
            </div>
            <p className="mt-6 text-xl font-semibold text-lime-200">
              16 道题，测出你的世界杯犯病人格。
            </p>
            <Link
              className="mt-8 inline-flex rounded-md bg-lime-300 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-lime-200"
              href="/fan-test"
            >
              开始测试
            </Link>
          </div>

          <div className="rounded-lg border border-white/10 bg-white/[0.05] p-6">
            <h3 className="text-lg font-semibold text-white">本测试纯属娱乐。</h3>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              如有冒犯，说明测得挺准。结果只调侃看球行为和球迷心态，不攻击国家、民族、地域或现实身份。
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
