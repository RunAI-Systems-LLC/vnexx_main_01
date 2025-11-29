// app/page.tsx

import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Glow de fundo */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-80 w-[38rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,_#38bdf8_0,_rgba(0,0,0,0)_70%)] opacity-40 blur-3xl" />
        <div className="absolute bottom-[-10rem] right-[-6rem] h-80 w-80 rounded-full bg-[radial-gradient(circle_at_center,_#22c55e_0,_rgba(0,0,0,0)_70%)] opacity-30 blur-3xl" />
      </div>

      {/* Conteúdo */}
      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col px-4 pb-16 pt-6 sm:px-6 lg:px-8">
        {/* NAVBAR */}
        <header className="flex items-center justify-between gap-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400 via-cyan-400 to-blue-500 shadow-[0_0_25px_rgba(56,189,248,0.7)]">
              <span className="text-xs font-semibold tracking-[0.2em]">
                VN
              </span>
            </div>
            <div className="leading-tight">
              <p className="text-[0.72rem] uppercase tracking-[0.2em] text-sky-300/80">
                VENNON DISRUPT
              </p>
              <p className="text-base font-semibold tracking-wide">
                vNEXX - VENNON DISRUPT™
              </p>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
            <Link href="#platform" className="hover:text-sky-300">
              Plataforma
            </Link>
            <Link href="#runsbi" className="hover:text-sky-300">
              RunsBI
            </Link>
            <Link href="#tghost" className="hover:text-sky-300">
              TGhosT™
            </Link>
            <Link href="#dsocialbeast" className="hover:text-sky-300">
              dSOCIALBEAST
            </Link>
            <Link href="#security" className="hover:text-sky-300">
              RunIDZeroTrusT
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <button className="hidden rounded-full border border-white/10 px-4 py-2 text-xs font-medium tracking-wide text-white/75 backdrop-blur-sm hover:border-sky-400 hover:text-sky-300 md:inline-flex">
              vNEXX • RunAI Systems LLC
            </button>
            <button className="rounded-full bg-gradient-to-r from-sky-400 via-cyan-400 to-blue-500 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-black shadow-[0_0_18px_rgba(56,189,248,0.7)]">
              Launch vNEXX
            </button>
          </div>
        </header>

        {/* HERO */}
        <section className="mt-4 grid flex-1 gap-12 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] md:items-center">
          {/* Texto */}
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-[0.68rem] font-medium tracking-[0.22em] uppercase text-sky-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.9)]" />
              Multimodal Corporate Automation
            </div>

            <h1 className="text-3xl font-semibold leading-tight sm:text-4xl lg:text-[2.8rem]">
              Seu cockpit de{" "}
              <span className="bg-gradient-to-r from-sky-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                voz, dados e IA
              </span>{" "}
              em um único painel.
            </h1>

            <p className="mt-4 text-sm leading-relaxed text-white/70 sm:text-[0.95rem]">
              vNEXX - VENNON DISRUPT™ é o{" "}
              <strong className="font-semibold text-white">
                primeiro ecossistema multimodal
              </strong>{" "}
              que conecta ERP, bancos, RunsBI (RANS BI), IA generativa e
              chef-bots como o TGhosT™ em uma só camada. Tudo é comandado por
              voz — do mobile ao headset — seguindo o padrão{" "}
              <span className="font-semibold">RunIDZeroTrusT</span> de
              segurança.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button className="group inline-flex items-center justify-center rounded-full bg-gradient-to-r from-sky-400 via-cyan-400 to-blue-500 px-6 py-2.5 text-sm font-semibold text-black shadow-[0_0_22px_rgba(56,189,248,0.8)]">
                Ver demo do painel
                <span className="ml-2 inline-block transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </button>
              <button className="inline-flex items-center justify-center rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-white/80 backdrop-blur-sm hover:border-sky-400 hover:text-sky-300">
                Falar com a RunAI
              </button>
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-3 text-[0.7rem] uppercase tracking-[0.24em] text-white/40">
              <span className="rounded-full border border-white/10 px-3 py-1">
                Powered by OpenAI
              </span>
              <span className="rounded-full border border-white/10 px-3 py-1">
                Azure + Power BI Embedded
              </span>
              <span className="rounded-full border border-white/10 px-3 py-1">
                Multi-país • Multi-moeda
              </span>
            </div>
          </div>

          {/* Painel fake / BI */}
          <div
            id="platform"
            className="relative rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 via-white/[0.02] to-black/80 p-4 shadow-[0_0_40px_rgba(15,23,42,0.9)]"
          >
            {/* Header do painel */}
            <div className="flex items-center justify-between border-b border-white/5 pb-3">
              <div>
                <p className="text-[0.7rem] uppercase tracking-[0.24em] text-white/40">
                  vNEXX Command Center
                </p>
                <p className="text-xs text-white/60">
                  32 empresas • 118 contas bancárias • Atualização em tempo real
                </p>
              </div>
              <div className="flex items-center gap-2 text-[0.7rem] text-white/60">
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/15 px-2 py-1 text-emerald-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.9)]" />
                  LIVE
                </span>
                <span className="rounded-full border border-white/10 px-2 py-1">
                  TGhosT™ Listening
                </span>
              </div>
            </div>

            {/* Grid de cards */}
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {/* Card 1 */}
              <div className="rounded-2xl bg-black/60 p-3 ring-1 ring-white/5">
                <p className="text-[0.7rem] text-white/50">
                  Saldo consolidado (hoje)
                </p>
                <p className="mt-1 text-xl font-semibold text-sky-300">
                  R$ 18.427.392
                </p>
                <p className="text-[0.7rem] text-emerald-400">
                  + R$ 742.900 vs. ontem
                </p>

                <div className="mt-3 flex h-16 items-end justify-between gap-1">
                  {[
                    "h-4",
                    "h-10",
                    "h-7",
                    "h-14",
                    "h-9",
                    "h-16",
                    "h-11",
                    "h-6",
                  ].map((h, i) => (
                    <div
                      key={i}
                      className={`w-2 rounded-t-full bg-gradient-to-t from-sky-500 via-cyan-400 to-emerald-400 ${h}`}
                    />
                  ))}
                </div>
              </div>

              {/* Card 2 */}
              <div className="rounded-2xl bg-black/60 p-3 ring-1 ring-white/5">
                <p className="text-[0.7rem] text-white/50">Empresas ativas</p>
                <div className="mt-1 flex items-baseline gap-2">
                  <p className="text-xl font-semibold text-white">
                    27
                  </p>
                  <p className="text-[0.7rem] text-emerald-400">
                    +3 novas esta semana
                  </p>
                </div>
                <div className="mt-3 grid grid-cols-4 gap-2 text-[0.65rem] text-white/60">
                  <div className="rounded-xl bg-sky-500/15 px-2 py-1">
                    🇧🇷 Brasil
                    <p className="text-[0.6rem] text-sky-300">11 empresas</p>
                  </div>
                  <div className="rounded-xl bg-emerald-500/15 px-2 py-1">
                    🇺🇸 EUA
                    <p className="text-[0.6rem] text-emerald-300">8 empresas</p>
                  </div>
                  <div className="rounded-xl bg-violet-500/15 px-2 py-1">
                    🇪🇺 Europa
                    <p className="text-[0.6rem] text-violet-300">5 empresas</p>
                  </div>
                  <div className="rounded-xl bg-amber-500/15 px-2 py-1">
                    🌎 Outros
                    <p className="text-[0.6rem] text-amber-300">3 empresas</p>
                  </div>
                </div>
              </div>

              {/* Card 3 - RunsBI */}
              <div
                id="runsbi"
                className="rounded-2xl bg-gradient-to-br from-sky-500/20 via-cyan-400/5 to-emerald-400/10 p-3 ring-1 ring-sky-400/40"
              >
                <div className="flex items-center justify-between">
                  <p className="text-[0.7rem] font-semibold text-sky-200">
                    RunsBI™ • RANS BI
                  </p>
                  <span className="rounded-full bg-black/60 px-2 py-1 text-[0.65rem] text-white/70">
                    Multi-empresa • Multi-banco
                  </span>
                </div>

                <p className="mt-1 text-[0.8rem] text-white/75">
                  Até{" "}
                  <span className="font-semibold text-sky-300">
                    100 empresas
                  </span>{" "}
                  e{" "}
                  <span className="font-semibold text-sky-300">
                    200+ contas bancárias
                  </span>{" "}
                  no mesmo cockpit, com dashboards coloridos por área (vendas,
                  caixa, tributos, operações) – tudo atualizado em tempo real.
                </p>

                <div className="mt-3 flex flex-wrap gap-2 text-[0.65rem]">
                  <span className="rounded-full bg-black/70 px-2 py-1 text-emerald-300">
                    Voz: “mostrar fluxo de caixa da holding”
                  </span>
                  <span className="rounded-full bg-black/70 px-2 py-1 text-sky-300">
                    Voz: “comparar bancos Brasil x EUA”
                  </span>
                  <span className="rounded-full bg-black/70 px-2 py-1 text-violet-300">
                    Voz: “abrir visão de impostos do mês”
                  </span>
                </div>
              </div>

              {/* Card 4 - TGhosT */}
              <div
                id="tghost"
                className="rounded-2xl bg-black/70 p-3 ring-1 ring-white/8"
              >
                <div className="flex items-center justify-between">
                  <p className="text-[0.7rem] font-semibold text-white/80">
                    TGhosT™ • Chief-bot da operação
                  </p>
                  <span className="rounded-full bg-violet-500/20 px-2 py-1 text-[0.65rem] text-violet-200">
                    NO FEAR | BUILT FOR DISRUPTERS
                  </span>
                </div>

                <p className="mt-2 text-[0.8rem] text-white/70">
                  O TGhosT™ é o chef-bot que entende cultura, sotaque e contexto
                  de cada país. Ele recebe o comando de voz, fala com o vNEXX,
                  orquestra RunsBI™ e devolve ações: dashboards, alertas e
                  automações executadas.
                </p>

                <ul className="mt-2 space-y-1 text-[0.75rem] text-white/65">
                  <li>• Gatilhos por voz em PT-BR, EN, ES e mais.</li>
                  <li>
                    • Respeita as políticas da OpenAI e da RunAI Systems LLC.
                  </li>
                  <li>• Pronto para ser espelhado em mobile, web e hardware.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* dSOCIALBEAST & D-SaaS */}
        <section
          id="dsocialbeast"
          className="mt-14 grid gap-10 border-t border-white/5 pt-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]"
        >
          <div>
            <h2 className="text-xl font-semibold">
              dSOCIALBEAST • campanhas guiadas por BI em tempo real.
            </h2>
            <p className="mt-3 text-sm text-white/70">
              dSOCIALBEAST é o motor de campanhas do ecossistema. Ele lê o que
              está acontecendo nos dashboards do RunsBI™, combina com o histórico
              do cliente e dispara ações em redes sociais, CRM e automações
              externas — sempre com o TGhosT™ no centro da conversa.
            </p>
            <p className="mt-3 text-sm text-white/70">
              Em vez de campanhas “às cegas”, o D-SaaS da RunAI Systems LLC
              conecta{" "}
              <span className="font-semibold text-sky-300">voz → dados → ação</span>{" "}
              no mesmo fluxo, em qualquer país onde a operação esteja rodando.
            </p>

            <div className="mt-4 grid gap-3 text-[0.8rem] text-white/75 sm:grid-cols-2">
              <div className="rounded-2xl bg-white/5 p-3">
                <p className="font-semibold">D-SaaS • Disruptive SaaS</p>
                <p className="mt-1 text-white/70">
                  Licenciamento modular de chefe-bots, cockpit financeiro,
                  camadas de segurança e camadas de dados. Começa pequeno, mas
                  nasce pronto para escala global.
                </p>
              </div>
              <div className="rounded-2xl bg-white/5 p-3">
                <p className="font-semibold">Multi-stack, uma só voz</p>
                <p className="mt-1 text-white/70">
                  Conecte ERP, bancos, marketplaces, marketing e suporte. O
                  usuário fala com o sistema; o vNEXX fala com todos os bastidores.
                </p>
              </div>
            </div>
          </div>

          {/* Bloco pequeno de integrações */}
          <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 via-black/80 to-black/95 p-4">
            <p className="text-[0.75rem] uppercase tracking-[0.22em] text-white/40">
              Integrações principais
            </p>

            <div className="mt-3 grid grid-cols-2 gap-3 text-[0.78rem]">
              <div className="rounded-2xl bg-black/70 p-3 ring-1 ring-sky-500/40">
                <p className="font-semibold text-sky-300">OpenAI</p>
                <p className="mt-1 text-white/70">
                  LLMs, voz e ferramentas no núcleo da experiência multimodal.
                </p>
              </div>
              <div className="rounded-2xl bg-black/70 p-3 ring-1 ring-emerald-500/40">
                <p className="font-semibold text-emerald-300">Azure + Power BI</p>
                <p className="mt-1 text-white/70">
                  RunsBI™ operando sobre BI Embedded com baixa latência.
                </p>
              </div>
              <div className="rounded-2xl bg-black/70 p-3 ring-1 ring-violet-500/40">
                <p className="font-semibold text-violet-300">Vercel</p>
                <p className="mt-1 text-white/70">
                  Frontend global, serverless e pronto para escala.
                </p>
              </div>
              <div className="rounded-2xl bg-black/70 p-3 ring-1 ring-amber-500/40">
                <p className="font-semibold text-amber-300">GitHub</p>
                <p className="mt-1 text-white/70">
                  Pipeline de deploy auditável, seguro e versionado.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Segurança */}
        <section
          id="security"
          className="mt-14 grid gap-10 border-t border-white/5 pt-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]"
        >
          <div>
            <h2 className="text-xl font-semibold">
              RunIDZeroTrusT • identidade, hardware e voz na mesma camada.
            </h2>
            <p className="mt-3 text-sm text-white/70">
              RunIDZeroTrusT é o padrão de confiança da RunAI Systems LLC. A
              autenticação combina{" "}
              <span className="font-semibold text-sky-300">
                dispositivo, identidade e voz
              </span>{" "}
              antes de qualquer comando chegar aos dados.
            </p>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li>• Suporte a chave física estilo FIDO para planos avançados.</li>
              <li>
                • Camada de perfil cultural (país, idioma, sotaque) sem abrir mão
                de compliance.
              </li>
              <li>
                • Pensado para PMEs, mas pronto para operações globais com várias
                subsidiárias.
              </li>
            </ul>
          </div>

          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-sky-500/10 via-black to-black p-4 text-[0.8rem] text-white/75">
            <p className="font-semibold text-sky-200">
              vNEXX - VENNON DISRUPT™ • RunAI Systems LLC
            </p>
            <p className="mt-2">
              Desenvolvido para quem nasceu em ambientes onde a criatividade
              precisa ser protegida. O objetivo não é só mostrar gráficos bonitos,
              mas{" "}
              <span className="font-semibold">
                transformar a forma como pessoas simples usam tecnologia de
                ponta
              </span>{" "}
              — seja no Brasil, EUA, Europa ou Ásia.
            </p>
            <p className="mt-2">
              A partir desse cockpit, a próxima camada é o{" "}
              <span className="font-semibold">login real</span>, com TGhosT™
              operando em cima de RunsBI™ e do ecossistema D-SaaS. O layout já
              está pronto para receber essa segunda fase.
            </p>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-14 border-t border-white/10 pt-6 text-[0.75rem] text-white/50">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-semibold text-white/70">
                RunAI Systems LLC • vNEXX - VENNON DISRUPT™
              </p>
              <p>Primeiro ecossistema multimodal de voz, dados e IA em um cockpit único.</p>
            </div>
            <div className="text-xs text-white/40">
              <p>Inspired by Kauai.</p>
              <p>
                TGhosT™, dSOCIALBEAST, RunIDZeroTrusT, RunsBI™ e D-SaaS são
                componentes do ecossistema RunAI Systems LLC.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}