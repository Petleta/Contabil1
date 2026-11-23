import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Escritório Contábil Matzembacher | Passo Fundo, RS" },
      { name: "description", content: "Contabilidade, fiscal, departamento pessoal e abertura de empresas no Centro de Passo Fundo, RS." },
      { property: "og:title", content: "Escritório Contábil Matzembacher" },
      { property: "og:description", content: "Contabilidade de confiança no Centro de Passo Fundo, RS." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

const servicos = [
  ["Contabilidade", "Escrituração, balanços e demonstrativos com rigor e clareza."],
  ["Fiscal e Tributário", "Apuração de impostos e planejamento para pagar o justo."],
  ["Departamento Pessoal", "Folha de pagamento, admissões, férias e eSocial."],
  ["Abertura de Empresas", "Do CNPJ ao alvará, cuidamos de toda a burocracia."],
];
const horarios = [
  ["Segunda a sexta", "08:00 – 18:00"],
  ["Sábado", "Fechado"],
  ["Domingo", "Fechado"],
];

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <span className="font-serif text-xl font-semibold text-primary">Matzembacher</span>
          <a href="tel:+555430453944" className="rounded bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground">(54) 3045-3944</a>
        </div>
      </header>

      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-6xl px-6 py-28">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-gold">Passo Fundo · RS</p>
          <h1 className="max-w-3xl font-serif text-5xl leading-tight md:text-7xl">Escritório Contábil Matzembacher</h1>
          <p className="mt-6 max-w-xl text-lg opacity-80">Contabilidade próxima, organizada e de confiança para empresas e profissionais da região.</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="tel:+555430453944" className="rounded bg-gold px-6 py-3 font-semibold text-primary">Ligar agora</a>
            <a href="#contato" className="rounded border border-primary-foreground/40 px-6 py-3 font-semibold">Como chegar</a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="font-serif text-4xl text-primary">Serviços</h2>
        <div className="mt-12 grid gap-px overflow-hidden rounded border border-border bg-border md:grid-cols-2">
          {servicos.map(([t, d], i) => (
            <div key={t} className="bg-card p-8">
              <span className="font-serif text-gold">0{i + 1}</span>
              <h3 className="mt-2 font-serif text-2xl">{t}</h3>
              <p className="mt-2 text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contato" className="bg-secondary">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-2">
          <div>
            <h2 className="font-serif text-4xl text-primary">Visite-nos</h2>
            <p className="mt-6 text-lg">R. Morom, 1565 – Centro<br />Passo Fundo – RS, 99010-033</p>
            <p className="mt-4 text-lg"><a className="font-semibold text-primary underline" href="tel:+555430453944">(54) 3045-3944</a></p>
            <h3 className="mt-10 font-serif text-2xl">Horário</h3>
            <ul className="mt-4 divide-y divide-border">
              {horarios.map(([d, h]) => (
                <li key={d} className="flex justify-between py-3"><span>{d}</span><span className="text-muted-foreground">{h}</span></li>
              ))}
            </ul>
          </div>
          <iframe
            title="Mapa"
            className="h-96 w-full rounded border border-border"
            loading="lazy"
            src="https://www.google.com/maps?q=R.+Morom+1565,+Passo+Fundo,+RS&output=embed"
          />
        </div>
      </section>

      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Escritório Contábil Matzembacher
      </footer>
    </div>
  );
}
