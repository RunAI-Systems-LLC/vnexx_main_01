import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "vNEXX – VENNON DISRUPT™ | RunAI Systems LLC",
  description:
    "vNEXX – VENNON DISRUPT™ é o primeiro ecossistema multimodal que conecta ERP, bancos, RunsBI (RANS BI), IA generativa e chef-bots como o TGhosT™ em uma só camada, comandado por voz e protegido pelo padrão RunIDZeroTrusT.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Glow de fundo principal */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/40 blur-3xl" />
        <div className="absolute bottom-[-120px] right-[-40px] h-80 w-80 rounded-full bg-sky-500/30 blur-3xl" />
        <div className="absolute bottom-[-160px] left-[-60px] h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl" />
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 flex min-h-screen flex-col">
        {/* Navbar */}
        <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 pt-6 md:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 via-sky-500 to-blue-600 shadow-[0_0_40px_rgba(56,189,248,0.7)]">
              <span className="text-sm font-semibold tracking-[0.2em]">VN</span>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-xs uppercase tracking-[0.25em] text-cyan-300/70">
                VENNON DISRUPT
              </span>
              <span className="text-sm font-semibold tracking-[0.22em]">
                vNEXX – VENNON DISRUPT™
              </span>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-xs md:flex">
            <span className="text-white/60 hover:text-white/90 transition-colors">
              Plataforma
            </span>
            <span className="text-white/60 hover:text-white/90 transition-colors">
              Recursos
            </span>
            <span className="text-white/60 hover:text-white/90 transition-colors">
              Integrações
            </span>
            <span className="text-white/60 hover:text-white/90 transition-colors">
              TGhosT™
            </span>
            <button className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wide text-white hover:border-cyan-400/60 hover:bg-cyan-500/10 transition-colors">
              Login
            </button>
          </nav>
        </header>

        {/* HERO */}
        <section className="mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-4 pb-16 pt-10 md:px-8 md:pt-16">
          {/* Badge multimodal */}
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-[11px] font-medium tracking-[0.25em] uppercase text-cyan-200/90 shadow-[0_0_40px_rgba(56,189,248,0.4)]">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
            <span>Multimodal Corporate Automation</span>
          </div>

          {/* Título */}
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-[3.25rem]">
            Seu cockpit de{" "}
            <span className="text-cyan-300">voz</span>,{" "}
            <span className="text-sky-300">dados</span> e{" "}
            <span className="bg-gradient-to-r from-sky-300 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
              IA
            </span>{" "}
            em um único painel.
          </h1>

          {/* Subtítulo */}
          <p className="mt-5 max-w-3xl text-sm leading-relaxed text-white/70 md:text-base">
            vNEXX – VENNON DISRUPT™ é o{" "}
            <strong className="text-white">
              primeiro ecossistema multimodal
            </strong>{" "}
            que conecta ERP, bancos, RunsBI (RANS BI), IA generativa e
            chef-bots como o{" "}
            <span className="font-semibold text-cyan-200">TGhosT™</span> em uma
            só camada. Tudo é comandado por voz — do mobile ao headset — seguindo
            o padrão{" "}
            <span className="font-semibold text-sky-200">RunIDZeroTrusT</span>{" "}
            de segurança.
          </p>

          {/* Botões */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="#demo"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 px-6 py-2.5 text-sm font-semibold tracking-wide text-black shadow-[0_0_45px_rgba(56,189,248,0.8)] transition-transform hover:scale-[1.02]"
            >
              <span className="relative z-10">Ver demo do painel</span>
              <span className="ml-2 relative z-10 text-lg">→</span>
              <div className="absolute inset-0 bg-white/30 opacity-0 group-hover:opacity-20 transition-opacity" />
            </Link>

            <Link
              href="#contato"
              className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-5 py-2 text-sm font-medium tracking-wide text-white/90 hover:border-cyan-400/60 hover:bg-cyan-500/10 transition-all"
            >
              Falar com a RunAI
            </Link>
          </div>

          {/* Linha de parceiros */}
          <div className="mt-10 flex flex-col gap-3 text-[11px] text-white/50">
            <span className="uppercase tracking-[0.3em] text-white/40">
              Powered by
            </span>
            <div className="relative flex items-center gap-6 overflow-hidden rounded-full border border-white/5 bg-white/5 px-4 py-2">
              {/* “linha” com leve movimento usando gradiente */}
              <div className="pointer-events-none absolute inset-0 opacity-60">
                <div className="absolute inset-y-0 left-0 w-[140%] bg-[radial-gradient(circle_at_0%_50%,rgba(56,189,248,0.4),transparent_55%),radial-gradient(circle_at_60%_50%,rgba(59,130,246,0.35),transparent_55%)] animate-[pulse_5s_ease-in-out_infinite]" />
              </div>

              <div className="relative flex flex-wrap items-center gap-4 text-[11px]">
                <span className="rounded-full bg-black/40 px-3 py-1 backdrop-blur">
                  RunAI Systems LLC
                </span>
                <span className="rounded-full bg-black/40 px-3 py-1 backdrop-blur">
                  OpenAI Partner (TGhosT™)
                </span>
                <span className="rounded-full bg-black/40 px-3 py-1 backdrop-blur">
                  Vercel • Next.js 15
                </span>
                <span className="rounded-full bg-black/40 px-3 py-1 backdrop-blur">
                  Azure + RunsBI (RANS BI)
                </span>
              </div>
            </div>
          </div>

          {/* Mini “cards” de features – estilo Framer, mas simples */}
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-4">
              <p className="text-xs font-semibold text-cyan-200 uppercase tracking-[0.2em] mb-2">
                Voice-first by design
              </p>
              <p className="text-xs text-white/70">
                Comandos de voz acionam fluxos completos: abre dashboards, roda
                BI, dispara campanhas, reconcilia bancos — tudo dentro do mesmo
                painel.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-4">
              <p className="text-xs font-semibold text-sky-200 uppercase tracking-[0.2em] mb-2">
                RunsBI • RANS BI
              </p>
              <p className="text-xs text-white/70">
                Múltiplos bancos, filiais e empresas dentro de um cockpit único.
                Fluxo de caixa, DRE e KPIs em tempo real, prontos para voz.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-4">
              <p className="text-xs font-semibold text-emerald-200 uppercase tracking-[0.2em] mb-2">
                RunIDZeroTrusT
              </p>
              <p className="text-xs text-white/70">
                Camada de autenticação multimodal (voz, device, conta) com
                chaves físicas e políticas de Zero Trust pensadas para operações
                globais.
              </p>
            </div>
          </div>

          {/* Rodapé simples estilo SpaceX */}
          <footer className="mt-14 border-t border-white/10 pt-6 text-[11px] text-white/40 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-col gap-1">
              <span>
                © {new Date().getFullYear()} RunAI Systems LLC. All rights
                reserved.
              </span>
              <span className="text-white/35">
                vNEXX – VENNON DISRUPT™ • TGhosT™ • dSOC