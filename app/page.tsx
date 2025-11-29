/* app/page.tsx */

import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-slate-50">
      {/* BACKGROUND RADIANCE – estilo Framer */}
      <div className="pointer-events-none fixed inset-0 -z-20 overflow-hidden">
        <div className="absolute -top-64 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full opacity-70 blur-3xl"
          style={{
            backgroundImage:
              "radial-gradient(circle at 10% 0%, #4f46e5 0, transparent 55%), radial-gradient(circle at 90% 10%, #22d3ee 0, transparent 55%), radial-gradient(circle at 50% 100%, #f97316 0, transparent 55%)",
          }}
        />
        <div className="absolute bottom-[-280px] left-[-120px] h-[420px] w-[420px] rounded-full opacity-60 blur-3xl"
          style={{
            backgroundImage:
              "radial-gradient(circle at 0% 100%, #22c55e 0, transparent 55%), radial-gradient(circle at 80% 40%, #6366f1 0, transparent 55%)",
          }}
        />
        <div className="absolute bottom-[-260px] right-[-140px] h-[420px] w-[420px] rounded-full opacity-70 blur-3xl"
          style={{
            backgroundImage:
              "radial-gradient(circle at 100% 100%, #ec4899 0, transparent 55%), radial-gradient(circle at 20% 0%, #0ea5e9 0, transparent 55%)",
          }}
        />
      </div>

      {/* NAVBAR SIMPLES */}
      <header className="relative z-10 border-b border-white/5 bg-black/30 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 via-blue-500 to-emerald-400 shadow-[0_0_30px_rgba(56,189,248,0.7)]">
              <span className="text-xs font-semibold tracking-[0.25em] text-white">
                VN
              </span>
            </div>
            <div className="leading-tight">
              <p className="text-[11px] uppercase tracking-[0.24em] text-slate-400">
                VENNON DISRUPT
              </p>
              <p className="text-sm font-semibold tracking-[0.20em] text-slate-50">
                vNEXX – VENNON DISRUPT™
              </p>
            </div>
          </div>

          <button className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.45)] transition hover:border-cyan-300/80 hover:bg-cyan-500/20 hover:text-cyan-50">
            LAUNCH VNE XX
          </button>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative z-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 pb-20 pt-12 md:flex-row md:items-center md:pb-28 md:pt-16">
          {/* TEXTO PRINCIPAL */}
          <div className="flex-1 space-y-6 md:space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-black/50 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.22em] text-emerald-300 shadow-[0_0_18px_rgba(52,211,153,0.5)]">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              MULTIMODAL CORPORATE AUTOMATION
            </div>

            <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
              Seu cockpit de{" "}
              <span className="text-sky-400">voz</span>,{" "}
              <span className="text-cyan-300">dados</span> e{" "}
              <span className="bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                IA
              </span>{" "}
              em um único painel.
            </h1>

            <p className="max-w-xl text-sm leading-relaxed text-slate-300 md:text-base">
              vNEXX – VENNON DISRUPT™ é o{" "}
              <span className="font-semibold">
                primeiro ecossistema multimodal
              </span>{" "}
              que conecta ERP, bancos, RunsBI (RANS BI), IA generativa e
              chef-bots como o TGhosT™ em uma só camada. Tudo é comandado por
              voz — do mobile ao headset — seguindo o padrão{" "}
              <span className="font-semibold">RunIDZeroTrusT™</span> de
              segurança.
            </p>

            {/* CTAS */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-sky-500 via-blue-500 to-cyan-400 px-6 py-2.5 text-sm font-semibold text-white shadow-[0_0_40px_rgba(56,189,248,0.9)] transition hover:from-sky-400 hover:via-blue-400 hover:to-cyan-300">
                <span className="relative z-10">Ver demo do painel</span>
                <span className="relative z-10 text-lg leading-none">↗</span>
                <span className="absolute inset-0 translate-x-[-120%] bg-white/25 opacity-0 transition group-hover:translate-x-[120%] group-hover:opacity-100" />
              </button>

              <button className="inline-flex items-center gap-2 rounded-full border border-slate-600/80 bg-black/60 px-5 py-2 text-xs font-medium uppercase tracking-[0.20em] text-slate-200 transition hover:border-slate-300 hover:bg-slate-900/70">
                Falar com a RunAI
              </button>
            </div>

            {/* ECO-SYSTEM CHIPS */}
            <div className="mt-4 flex flex-wrap gap-2 text-[11px] text-slate-300">
              {[
                "dSOCIALBEAST™",
                "TGhosT™",
                "RunIDZeroTrusT™",
                "RunsBI™ (RANS BI)",
                "D-SaaS™",
              ].map((label) => (
                <span
                  key={label}
                  className="rounded-full border border-slate-700/70 bg-slate-900/60 px-3 py-1 tracking-[0.12em]"
                >
                  {label}
                </span>
              ))}
            </div>

            {/* POWERED BY */}
            <div className="pt-4 text-[11px] uppercase tracking-[0.22em] text-slate-400">
              Powered by{" "}
              <span className="text-sky-300">OpenAI</span> •{" "}
              <span className="text-slate-200">RunAI Systems LLC</span> • Azure
              + Power BI Embedded
            </div>
          </div>

          {/* CARD DO PAINEL / MOTION VISUAL */}
          <div className="flex-1">
            <div className="relative mx-auto max-w-md rounded-3xl border border-white/10 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-black/90 p-5 shadow-[0_0_60px_rgba(15,118,236,0.55)] backdrop-blur">
              <div className="absolute -top-10 left-1/2 h-32 w-32 -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_30%_0%,#38bdf8,transparent_55%),radial-gradient(circle_at_80%_80%,#22c55e,transparent_55%)] opacity-60 blur-2xl" />
              <div className="relative space-y-4">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-medium uppercase tracking-[0.20em] text-slate-400">
                    VNE XX • Realtime Ops
                  </p>
                  <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-300">
                    LIVE
                  </span>
                </div>

                {/* MINI DASHBOARD */}
                <div className="space-y-4 rounded-2xl border border-slate-700/70 bg-slate-900/70 p-4">
                  <div className="flex items-center justify-between text-xs text-slate-300">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.20em] text-slate-500">
                        Cash & Banks
                      </p>
                      <p className="mt-1 text-lg font-semibold text-sky-300">
                        R$ 82.430
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] uppercase tracking-[0.20em] text-slate-500">
                        comandos de voz (24h)
                      </p>
                      <p className="mt-1 text-lg font-semibold text-emerald-300">
                        327
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-[10px] uppercase tracking-[0.16em] text-slate-500">
                      <span>Fluxo de caixa • 7 dias</span>
                      <span>RunsBI™</span>
                    </div>
                    <div className="flex h-16 items-end gap-1 rounded-xl bg-gradient-to-t from-slate-900 to-slate-800/70 p-2">
                      {[
                        16, 32, 24, 40, 28, 52, 38, 60, 44, 72, 56, 64,
                      ].map((h, i) => (
                        <div
                          key={i}
                          className="flex-1 rounded-full bg-gradient-to-t from-sky-500 via-blue-500 to-cyan-300 transition-transform duration-500 hover:-translate-y-1"
                          style={{ height: `${h}%` }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* COMANDO POR VOZ */}
                  <div className="flex items-center gap-3 rounded-full border border-slate-700/80 bg-black/70 px-3 py-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 via-blue-500 to-cyan-400 text-[10px] font-semibold text-white shadow-[0_0_24px_rgba(56,189,248,0.8)]">
                      🎙
                    </div>
                    <div className="flex-1">
                      <p className="text-[10px] uppercase tracking-[0.18em] text-slate-500">
                        comando por voz
                      </p>
                      <p className="text-xs text-slate-100">
                        “TGhosT, consolida bancos da América Latina e projeta o
                        caixa de 90 dias.”
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-[10px] text-slate-500">
                  *Dashboard ilustrativo gerado pela camada RunsBI™. Até 100
                  empresas e múltiplos bancos no mesmo painel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER – ESTILO SPACEX COM FAIXA DE PARCEIROS */}
      <footer className="relative z-10 border-t border-white/10 bg-black/80 pb-6 pt-6">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 md:flex-row md:items-center md:justify-between">
          <div className="space-y-1 text-xs text-slate-400">
            <p className="text-[11px] uppercase tracking-[0.20em] text-slate-500">
              Inspired by Kauai
            </p>
            <p className="text-[11px] text-slate-300">
              Founder &amp; Inventor —{" "}
              <span className="font-semibold text-slate-100">
                Wesley S. Macedo
              </span>
            </p>
            <p className="text-[11px] text-slate-400">
              RunAI Systems LLC • vNEXX – VENNON DISRUPT™ • TGhosT™ •
              RunIDZeroTrusT™ • RunsBI™ • D-SaaS™
            </p>
            <p className="text-[10px] text-slate-500">
              © {new Date().getFullYear()} RunAI Systems LLC. All rights
              reserved.
            </p>
          </div>

          {/* MARQUEE DE PARCEIROS */}
          <div className="relative w-full overflow-hidden md:w-[320px]">
            <div className="partners-track">
              {[
                "OpenAI",
                "Vercel",
                "GitHub",
                "Microsoft Azure",
                "Power BI Embedded",
              ].map((name) => (
                <div key={name} className="partner-pill">
                  {name}
                </div>
              ))}
              {/* duplica para efeito contínuo */}
              {[
                "OpenAI",
                "Vercel",
                "GitHub",
                "Microsoft Azure",
                "Power BI Embedded",
              ].map((name) => (
                <div key={`${name}-2`} className="partner-pill">
                  {name}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CSS só para o marquee / pills */}
        <style jsx>{`
          .partners-track {
            display: flex;
            gap: 12px;
            width: max-content;
            animation: marquee 26s linear infinite;
            opacity: 0.9;
          }

          .partner-pill {
            border-radius: 9999px;
            border: 1px solid rgba(148, 163, 184, 0.5);
            padding: 6px 14px;
            font-size: 10px;
            text-transform: uppercase;
            letter-spacing: 0.18em;
            color: rgba(226, 232, 240, 0.9);
            background: radial-gradient(
              circle at 0% 0%,
              rgba(56, 189, 248, 0.22),
              transparent 55%
            );
            backdrop-filter: blur(10px);
            box-shadow: 0 0 18px rgba(15, 23, 42, 0.85);
            white-space: nowrap;
          }

          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .partners-track {
              animation: none;
            }
          }
        `}</style>
      </footer>
    </main>
  );
}