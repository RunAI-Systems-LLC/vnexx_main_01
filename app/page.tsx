import Link from "next/link";

const navLinks = [
  { label: "Plataforma", href: "#platform" },
  { label: "TGhosT™", href: "#tghost" },
  { label: "Tecnologia", href: "#stack" },
  { label: "Contato", href: "#contact" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-zinc-100">
      {/* Glow de fundo */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-gradient-to-b from-sky-500/15 via-black to-black blur-2xl opacity-60" />

      <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-4 pb-16 pt-6 md:px-8 md:pt-10">
        {/* HEADER */}
        <header className="flex items-center justify-between gap-6 border-b border-zinc-900 pb-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-sky-500/60 bg-sky-500/10 text-[0.65rem] font-semibold tracking-[0.18em] uppercase">
              vN
            </div>
            <div className="flex flex-col">
              <span className="text-[0.65rem] uppercase tracking-[0.24em] text-zinc-500">
                RunAI Systems LLC
              </span>
              <span className="text-sm font-semibold text-zinc-100">
                vNEXX – VENNON DISRUPT™
              </span>
            </div>
          </div>

          {/* Navegação desktop */}
          <nav className="hidden items-center gap-8 text-xs font-medium text-zinc-300 md:flex">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative uppercase tracking-[0.18em] text-zinc-400 transition hover:text-sky-300"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-sky-500 to-cyan-400 transition-all duration-200 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <Link
            href="#login"
            className="rounded-full border border-sky-500/70 bg-sky-500/15 px-4 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-sky-100 shadow-[0_0_25px_rgba(56,189,248,0.55)] hover:bg-sky-500/25"
          >
            Launch vNEXX
          </Link>
        </header>

        {/* HERO */}
        <section className="flex flex-1 flex-col items-start justify-center gap-10 py-10 md:flex-row md:items-center md:gap-14 md:py-14">
          <div className="flex-1 space-y-6">
            <p className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/70 px-3 py-1 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-zinc-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
              Multimodal Corporate Automation
            </p>

            <h1 className="text-4xl font-semibold tracking-tight text-zinc-50 sm:text-5xl lg:text-6xl">
              <span className="block text-zinc-400">Disrupt.</span>
              <span className="block">
                Built to{" "}
                <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
                  Deliver.
                </span>
              </span>
            </h1>

            <p className="max-w-xl text-sm leading-relaxed text-zinc-400 sm:text-base">
              vNEXX é o ecossistema de automação corporativa que conecta{" "}
              <span className="text-zinc-200">
                voz, dados, IA generativa e cultura
              </span>{" "}
              em uma única camada. Pensado para operações globais, mas com
              alma de quem nasceu no Brasil.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="#platform"
                className="rounded-full bg-sky-500 px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-black hover:bg-sky-400"
              >
                Explorar Plataforma
              </Link>
              <Link
                href="#tghost"
                className="rounded-full border border-zinc-700 px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-200 hover:border-sky-400 hover:text-sky-300"
              >
                Conhecer TGhosT™
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-[0.7rem] text-zinc-500">
              <span className="uppercase tracking-[0.2em] text-zinc-500">
                Powered by
              </span>
              <span className="text-zinc-300">
                RunAI Systems • OpenAI • Vercel
              </span>
            </div>
          </div>

          {/* Card lateral futurista */}
          <div className="flex-1">
            <div className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-gradient-to-b from-zinc-900/80 via-black to-black p-5 shadow-[0_0_45px_rgba(15,23,42,0.8)]">
              <div className="pointer-events-none absolute -top-32 -right-24 h-56 w-56 rounded-full bg-sky-500/25 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-24 -left-10 h-40 w-40 rounded-full bg-cyan-400/20 blur-3xl" />

              <div className="flex items-center justify-between gap-3">
                <div className="space-y-1">
                  <p className="text-[0.7rem] uppercase tracking-[0.2em] text-zinc-500">
                    Realtime Ops
                  </p>
                  <p className="text-sm font-semibold text-zinc-100">
                    vNEXX Command Center
                  </p>
                </div>
                <span className="rounded-full border border-emerald-500/60 bg-emerald-500/15 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-emerald-300">
                  Live
                </span>
              </div>

              <div className="mt-6 space-y-4 text-xs text-zinc-300">
                <div className="flex items-center justify-between">
                  <span>Voice → Data Pipeline</span>
                  <span className="text-emerald-400">+92% automation</span>
                </div>
                <div className="h-1.5 w-full rounded-full bg-zinc-800">
                  <div className="h-full w-[92%] rounded-full bg-gradient-to-r from-sky-400 via-cyan-300 to-emerald-400" />
                </div>

                <div className="flex items-center justify-between">
                  <span>Latency global</span>
                  <span className="text-sky-300">ms-level</span>
                </div>
                <div className="flex justify-between text-[0.65rem] text-zinc-500">
                  <span>São Paulo</span>
                  <span>Palo Alto</span>
                  <span>Europe</span>
                  <span>Asia</span>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-zinc-800 bg-zinc-950/70 px-4 py-3 text-[0.7rem] text-zinc-300">
                <p className="font-medium text-sky-300">TGhosT™ inside</p>
                <p className="mt-1 text-zinc-400">
                  Um único assistente multimodal, treinado na cultura da sua
                  operação, orquestrando BI, ERP, CRM e automações de voz fim a
                  fim.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SEÇÃO PLATAFORMA */}
        <section
          id="platform"
          className="mt-4 grid gap-6 border-t border-zinc-900 pt-8 md:grid-cols-3"
        >
          <div className="space-y-2">
            <p className="text-[0.7rem] uppercase tracking-[0.22em] text-sky-400">
              Plataforma
            </p>
            <h2 className="text-lg font-semibold text-zinc-50">
              Uma camada única para comandos, dados e marca.
            </h2>
            <p className="text-sm text-zinc-400">
              Do C-level ao operador de chão de fábrica: voz, texto e
              automações passam pelo mesmo cérebro corporativo.
            </p>
          </div>

          <div className="space-y-3 text-sm text-zinc-300">
            <p className="font-medium text-zinc-100">Voice-first by design</p>
            <p className="text-zinc-400">
              Comandos de voz acionam flows completos: registrar cliente, abrir
              chamado, puxar relatório, disparar campanhas – tudo dentro do
              mesmo painel.
            </p>
          </div>

          <div className="space-y-3 text-sm text-zinc-300">
            <p className="font-medium text-zinc-100">
              Branding e dados na mesma tela
            </p>
            <p className="text-zinc-400">
              Dashboards, bots e automações carregam a identidade visual da
              sua marca, com performance de infra Vercel + OpenAI.
            </p>
          </div>
        </section>

        {/* TGhosT */}
        <section
          id="tghost"
          className="mt-10 space-y-4 rounded-3xl border border-zinc-900 bg-zinc-950/60 p-6"
        >
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-[0.7rem] uppercase tracking-[0.22em] text-sky-400">
                TGhosT™
              </p>
              <h2 className="text-lg font-semibold text-zinc-50">
                O executor multimodal do ecossistema vNEXX.
              </h2>
            </div>
            <span className="rounded-full border border-zinc-700 px-3 py-1 text-[0.7rem] uppercase tracking-[0.18em] text-zinc-300">
              NO FEAR | BUILT FOR DISRUPTERS
            </span>
          </div>
          <p className="text-sm text-zinc-400">
            TGhosT™ não é só um chatbot. É o operador que conecta pessoas, IA e
            sistemas legados. Fala com o usuário no idioma e na cultura certa,
            mas pensa em tempo real com dados globais.
          </p>
        </section>

        {/* STACK */}
        <section
          id="stack"
          className="mt-10 grid gap-6 border-t border-zinc-900 pt-8 md:grid-cols-3"
        >
          <div className="space-y-2">
            <p className="text-[0.7rem] uppercase tracking-[0.22em] text-sky-400">
              Stack
            </p>
            <h2 className="text-lg font-semibold text-zinc-50">
              Fundado em parceiros de classe mundial.
            </h2>
          </div>
          <div className="space-y-2 text-sm text-zinc-300">
            <p className="font-medium">Core</p>
            <p className="text-zinc-400">
              OpenAI, Vercel, Next.js, TypeScript, bancos de dados distribuídos
              e integrações nativas com ERPs e BIs.
            </p>
          </div>
          <div className="space-y-2 text-sm text-zinc-300">
            <p className="font-medium">Ecosystem</p>
            <p className="text-zinc-400">
              Conexão com Mercado Livre, Mercado Pago, Wise, Zapier e automação
              customizada sob a bandeira RunAI Systems LLC.
            </p>
          </div>
        </section>

        {/* LOGIN + CONTATO */}
        <section
          id="login"
          className="mt-10 grid gap-8 border-t border-zinc-900 pt-8 md:grid-cols-[1.2fr_1fr]"
        >
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-zinc-400">
              Login Inteligente
            </h2>
            <p className="mt-2 text-sm text-zinc-400">
              Em breve, acesso por Google, Microsoft, Apple, OpenAI ID e
              autenticação própria vNEXX – VENNON DISRUPT™.
            </p>
            <div className="mt-4 flex flex-wrap gap-3 text-xs">
              {["Google", "Microsoft", "Apple", "Email"].map((provider) => (
                <button
                  key={provider}
                  className="rounded-full border border-zinc-700 bg-zinc-950 px-4 py-2 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-zinc-200 hover:border-sky-400 hover:text-sky-300"
                  type="button"
                >
                  Login com {provider}
                </button>
              ))}
            </div>
          </div>

          <div id="contact" className="space-y-3 text-sm">
            <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-zinc-400">
              Contato
            </h2>
            <p className="text-zinc-400">
              Para parceiros estratégicos, enterprise e early adopters:
            </p>
            <p className="font-mono text-xs text-zinc-200">
              Email: contato@vennex.io
            </p>
            <p className="text-[0.7rem] text-zinc-500">
              RunAI Systems LLC · 228 Hamilton Avenue · Palo Alto, CA.
            </p>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-10 border-t border-zinc-900 pt-5 text-[0.7rem] text-zinc-500">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span>
              © {new Date().getFullYear()} RunAI Systems LLC. All rights
              reserved.
            </span>
            <span className="text-zinc-600">
              Powered by{" "}
              <span className="text-zinc-300">RunAI Systems + OpenAI + Vercel</span>
            </span>
          </div>
        </footer>
      </div>
    </main>
  );
}