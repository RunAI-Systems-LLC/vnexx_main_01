"use client";

import Link from "next/link";

const navLinks = [
  { label: "Plataforma", href: "#platform" },
  { label: "Recursos", href: "#features" },
  { label: "Integrações", href: "#integrations" },
  { label: "Preços", href: "#pricing" },
  { label: "Contato", href: "#contact" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-slate-50" id="top">
      {/* HEADER */}
      <header className="border-b border-slate-800 bg-black/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          {/* Logo texto vNEXX por enquanto (depois trocamos pela imagem) */}
          <Link href="#top" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-emerald-400 via-sky-500 to-emerald-600 shadow-[0_0_25px_rgba(16,185,129,0.8)]" />
            <div className="flex flex-col leading-tight">
              <span className="text-xs font-medium tracking-[0.25em] text-emerald-400 uppercase">
                VENNON DISRUPT
              </span>
              <span className="text-lg font-semibold tracking-[0.3em] uppercase">
                vNEXX
              </span>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition hover:text-emerald-400"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#login"
              className="rounded-full border border-slate-700 px-4 py-1.5 text-sm font-medium text-slate-200 transition hover:border-emerald-500 hover:text-emerald-400"
            >
              Login
            </a>
          </nav>
        </div>
      </header>

      {/* HERO / PLATAFORMA */}
      <section
        id="platform"
        className="relative overflow-hidden border-b border-slate-900 bg-gradient-to-b from-black via-slate-950 to-black"
      >
        {/* Glow de fundo */}
        <div className="pointer-events-none fixed inset-x-0 top-0 -z-10 h-64 bg-gradient-to-b from-emerald-500/10 via-sky-500/10 to-transparent blur-3xl" />

        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-16 md:flex-row md:items-center md:py-20">
          {/* Texto */}
          <div className="flex-1 space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.25em] text-emerald-300">
              vNEXX • RUNAI SYSTEMS
            </span>

            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
              Seu cockpit de{" "}
              <span className="bg-gradient-to-r from-emerald-400 via-sky-400 to-emerald-300 bg-clip-text text-transparent">
                voz, dados e IA
              </span>{" "}
              em um único painel.
            </h1>

            <p className="max-w-xl text-sm text-slate-300 sm:text-base">
              vNEXX conecta ERP, bancos, BI e{" "}
              <span className="font-semibold text-emerald-300">chef-bots</span>{" "}
              em tempo real. Comando por voz, dashboards vivos e automações
              prontas para PMEs e operações globais.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#demo"
                className="rounded-full bg-gradient-to-r from-emerald-500 to-sky-500 px-6 py-2 text-sm font-semibold text-black shadow-[0_0_30px_rgba(34,197,94,0.6)] transition hover:brightness-110"
              >
                Ver demo do painel
              </a>
              <a
                href="#contact"
                className="rounded-full border border-slate-700 px-5 py-2 text-sm font-medium text-slate-200 transition hover:border-emerald-500 hover:text-emerald-400"
              >
                Falar com a RunAI
              </a>
            </div>

            <div className="flex flex-wrap gap-4 text-xs text-slate-400">
              <span>• Powered by OpenAI</span>
              <span>• Azure + Power BI Embedded</span>
              <span>• Multi-país, multi-moeda</span>
            </div>
          </div>

          {/* “Dashboard” fake – só layout bonito, sem imagem */}
          <div
            id="demo"
            className="flex-1 rounded-3xl border border-slate-800 bg-gradient-to-b from-slate-950 to-slate-900 p-4 shadow-[0_0_60px_rgba(15,23,42,0.9)]"
          >
            {/* Top bar do painel */}
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                <span className="text-xs font-medium text-slate-300">
                  vNEXX • Realtime Ops
                </span>
              </div>
              <span className="rounded-full bg-slate-800 px-3 py-1 text-[10px] text-slate-300">
                Modo LIVE
              </span>
            </div>

            <div className="grid gap-3 md:grid-cols-3">
              {/* Cards de métricas */}
              <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-3">
                <p className="text-[10px] text-slate-400">Faturamento hoje</p>
                <p className="mt-1 text-lg font-semibold text-emerald-400">
                  R$ 82.430
                </p>
                <p className="mt-1 text-[10px] text-emerald-300">
                  +18% vs. ontem
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-3">
                <p className="text-[10px] text-slate-400">Pedidos em tempo real</p>
                <p className="mt-1 text-lg font-semibold text-sky-400">327</p>
                <div className="mt-2 h-1.5 w-full rounded-full bg-slate-800">
                  <div className="h-1.5 w-2/3 rounded-full bg-gradient-to-r from-sky-400 to-emerald-400" />
                </div>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-3">
                <p className="text-[10px] text-slate-400">Interações por voz</p>
                <p className="mt-1 text-lg font-semibold text-emerald-300">
                  1.294
                </p>
                <p className="mt-1 text-[10px] text-slate-400">
                  TGhosT™ • TheDoc™ • Social Beast
                </p>
              </div>
            </div>

            {/* “Gráfico” */}
            <div className="mt-4 rounded-2xl border border-slate-800 bg-slate-950/80 p-3">
              <div className="mb-2 flex items-center justify-between">
                <p className="text-xs text-slate-300">
                  Fluxo de caixa • Últimos 30 dias
                </p>
                <span className="rounded-full bg-slate-900 px-2 py-0.5 text-[10px] text-slate-400">
                  Banco • ERP • Marketplaces
                </span>
              </div>

              <div className="flex h-24 items-end gap-1.5">
                {[
                  "h-6",
                  "h-10",
                  "h-16",
                  "h-12",
                  "h-20",
                  "h-14",
                  "h-24",
                  "h-18",
                ].map((h, i) => (
                  <div
                    key={i}
                    className={`w-full rounded-full bg-gradient-to-t from-slate-800 via-sky-500/60 to-emerald-400/90 ${h}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section
        id="features"
        className="border-b border-slate-900 bg-black py-14"
      >
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-xl font-semibold sm:text-2xl">
            Features que ajudam{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-sky-400 bg-clip-text text-transparent">
              todo dia
            </span>
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-slate-400">
            Da operação enxuta à empresa com múltiplas filiais: o vNEXX foi
            desenhado para entender sotaque, contexto e números em qualquer
            país.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <FeatureCard
              title="Comando por voz, ação em segundos"
              description="Fale com o sistema como fala com seu time. TGhosT™ interpreta, aciona rotinas e devolve o resultado em BI."
              badge="Voice-First"
            />
            <FeatureCard
              title="BI vivo, não print de relatório"
              description="Dashboards reagindo a eventos reais: vendas, estoque, bancário, suporte, tudo em uma única timeline."
              badge="Realtime Data"
            />
            <FeatureCard
              title="Cultura embutida por país"
              description="Cores, linguagem e rituais locais. O mesmo core de automação, respeitando a cultura de cada mercado."
              badge="Cultural-Aware"
            />
          </div>
        </div>
      </section>

      {/* INTEGRAÇÕES */}
      <section
        id="integrations"
        className="border-b border-slate-900 bg-gradient-to-b from-slate-950 to-black py-14"
      >
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-xl font-semibold sm:text-2xl">
            Sky is the limit: integrações nativas
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-slate-400">
            O vNEXX se conecta ao stack que você já usa hoje. Nada de reinventar
            roda – só automatizar o que antes era manual.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              ["Microsoft Azure", "Auth, Functions, VMs"],
              ["Power BI Embedded", "Dashboards em qualquer tela"],
              ["OpenAI", "Chef-bots e copilots proprietários"],
              ["Zoho, ERP, CRM", "Operação do dia a dia"],
              ["Marketplaces", "Mercado Livre, Amazon e +"],
              ["Bancos & PSPs", "Fluxo de caixa em tempo real"],
            ].map(([title, desc]) => (
              <div
                key={title}
                className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4"
              >
                <p className="text-sm font-medium text-slate-100">{title}</p>
                <p className="mt-1 text-xs text-slate-400">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="border-b border-slate-900 bg-black py-14">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-xl font-semibold sm:text-2xl">
            Planos que escalam junto com o negócio
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-slate-400">
            Modelo SaaS flexível. Comece simples, escale para clusters globais
            quando fizer sentido.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <PriceCard
              name="Starter"
              price="R$ 499/mês"
              highlight={false}
              items={[
                "Até 3 usuários",
                "1 ambiente de BI",
                "Conexão bancária básica",
                "Ativação guiada em PT-BR",
              ]}
            />
            <PriceCard
              name="Scale"
              price="R$ 2.490/mês"
              highlight
              items={[
                "Até 15 usuários",
                "Múltiplos painéis por time",
                "TGhosT™ + Social Beast",
                "Suporte prioritário",
              ]}
            />
            <PriceCard
              name="Enterprise"
              price="Sob consulta"
              highlight={false}
              items={[
                "Multi-país, multi-moeda",
                "Cluster dedicado em nuvem",
                "SLA e governança sob contrato",
                "Equipe RunAI Systems dedicada",
              ]}
            />
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contact" className="bg-black py-14">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-xl font-semibold sm:text-2xl">
            Vamos colocar esse BI pra rodar?
          </h2>
          <p className="mt-2 max-w-xl text-sm text-slate-400">
            Envia um alô e conta em que estágio você está. A partir daí, a
            gente monta o caminho: piloto, POC ou rollout direto.
          </p>

          <div className="mt-6 grid gap-6 md:grid-cols-[2fr,1.2fr]">
            {/* Form fake só pra layout por enquanto */}
            <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5">
              <div className="grid gap-4 text-sm">
                <div className="grid gap-1">
                  <label className="text-xs text-slate-400">Nome</label>
                  <div className="rounded-lg border border-slate-800 bg-black/60 px-3 py-2 text-xs text-slate-500">
                    Seu nome completo
                  </div>
                </div>
                <div className="grid gap-1">
                  <label className="text-xs text-slate-400">E-mail</label>
                  <div className="rounded-lg border border-slate-800 bg-black/60 px-3 py-2 text-xs text-slate-500">
                    contato@empresa.com
                  </div>
                </div>
                <div className="grid gap-1">
                  <label className="text-xs text-slate-400">
                    Conte rápido o cenário
                  </label>
                  <div className="h-24 rounded-lg border border-slate-800 bg-black/60 px-3 py-2 text-xs text-slate-500">
                    Ex.: tenho ERP + banco + marketplace, mas BI travado em
                    planilha...
                  </div>
                </div>
                <button className="mt-2 w-full rounded-full bg-gradient-to-r from-emerald-500 to-sky-500 px-4 py-2 text-sm font-semibold text-black shadow-[0_0_25px_rgba(34,197,94,0.7)]">
                  Conectar com a RunAI
                </button>
              </div>
              <p className="mt-3 text-[10px] text-slate-500">
                Ao enviar, nossa equipe retorna por e-mail ou WhatsApp para
                entender o fit e marcar uma call.
              </p>
            </div>

            <div className="space-y-3 text-sm text-slate-300">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
                  Contatos
                </p>
                <p className="mt-1 text-sm">
                  hello@runaisystems.com  
                  <br />
                  sign@runaisystems.com
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
                  Base Operacional
                </p>
                <p className="mt-1 text-sm">
                  Delaware • Palo Alto • Brasil • LATAM • EU • Ásia
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-900 bg-black/95 py-6 text-xs text-slate-500">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 px-4 md:flex-row md:items-center">
          <span>
            © {new Date().getFullYear()} RunAI Systems LLC • vNEXX – VENNON
            DISRUPT™
          </span>
          <div className="flex flex-wrap gap-4">
            <span>Powered by OpenAI</span>
            <span>Azure • Vercel • GitHub</span>
          </div>
        </div>
      </footer>
    </main>
  );
}

type FeatureProps = {
  title: string;
  description: string;
  badge: string;
};

function FeatureCard({ title, description, badge }: FeatureProps) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
      <span className="inline-flex rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.18em] text-emerald-300">
        {badge}
      </span>
      <h3 className="mt-3 text-sm font-semibold text-slate-50">{title}</h3>
      <p className="mt-2 text-xs text-slate-400">{description}</p>
    </div>
  );
}

type PriceProps = {
  name: string;
  price: string;
  items: string[];
  highlight?: boolean;
};

function PriceCard({ name, price, items, highlight }: PriceProps) {
  return (
    <div
      className={`flex h-full flex-col rounded-2xl border bg-slate-950/80 p-5 ${
        highlight
          ? "border-emerald-500 shadow-[0_0_40px_rgba(16,185,129,0.4)]"
          : "border-slate-800"
      }`}
    >
      <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
        {name}
      </p>
      <p className="mt-3 text-lg font-semibold text-slate-50">{price}</p>
      <ul className="mt-3 space-y-1.5 text-xs text-slate-300">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <button
        className={`mt-4 w-full rounded-full px-4 py-2 text-xs font-semibold transition ${
          highlight
            ? "bg-gradient-to-r from-emerald-500 to-sky-500 text-black"
            : "border border-slate-700 text-slate-200 hover:border-emerald-500 hover:text-emerald-400"
        }`}
      >
        Falar sobre esse plano
      </button>
    </div>
  );
}