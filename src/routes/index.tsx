import { createFileRoute } from "@tanstack/react-router";
import {
  FileText, Receipt, RotateCcw, ShoppingCart, Boxes, Wallet, Landmark, ShieldCheck,
  Users, BarChart3, ScanLine, Percent, Monitor, Smartphone, Tablet, Check, X, ArrowRight, Sparkles, Play, MessageCircle, Plus,
} from "lucide-react";
import quotes from "@/assets/app_quotes.png.asset.json";
import stock from "@/assets/app_stock.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MHFac — Facturation et gestion commerciale pour la Tunisie" },
      { name: "description", content: "Devis, factures, avoirs, achats, stock, paiements et trésorerie. Solution 100% web pensée pour les entreprises tunisiennes." },
      { property: "og:title", content: "MHFac — La facturation pensée pour la Tunisie" },
      { property: "og:description", content: "Devis, factures, stock et trésorerie au même endroit, sur ordinateur, mobile et tablette." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const wa = (msg: string) => "https://wa.me/21658146177?text=" + encodeURIComponent(msg);
const CONTACT = wa("Bonjour, je souhaite en savoir plus sur MHFac");
const DEMO = wa("Bonjour, je souhaite obtenir une démonstration gratuite de MHFac");

const compare: [string, string, string][] = [
  ["Devis convertis en factures en un clic", "Ressaisie manuelle", "Automatique"],
  ["TVA et retenue à la source tunisiennes", "Formules à maintenir", "Intégrées"],
  ["Stock mis à jour à chaque vente ou achat", "Mise à jour à la main", "En temps réel"],
  ["Suivi des paiements, chèques et traites", "Fichiers dispersés", "Centralisé"],
  ["Accès multi-utilisateurs avec rôles", "Fichier partagé sans contrôle", "Rôles et permissions"],
  ["Accès depuis mobile et tablette", "Limité", "100% web"],
  ["Rapports et exports PDF, Excel, CSV", "À construire soi-même", "Prêts à l'emploi"],
];

const faq: { g: string; q: [string, string][] }[] = [
  { g: "Sécurité et protection des données", q: [
    ["Mes données professionnelles sont-elles sécurisées ?", "Oui. MHFac met en œuvre des mesures de sécurité pour protéger vos informations professionnelles. Chaque entreprise dispose d'un espace de données isolé afin de garantir la confidentialité de ses informations."],
    ["Qui peut accéder aux données de mon entreprise ?", "Seuls les utilisateurs autorisés peuvent accéder aux informations de votre entreprise. MHFac propose une gestion des rôles et des permissions permettant de contrôler les accès selon les responsabilités de chaque utilisateur."],
    ["Mes données sont-elles chiffrées ?", "Oui. MHFac utilise des mécanismes de chiffrement destinés à protéger les données et à sécuriser les échanges avec la plateforme."],
    ["L'accès à mon compte est-il sécurisé ?", "Oui. L'accès à MHFac est protégé par un système d'authentification. Des mécanismes d'authentification renforcée permettent également de renforcer la protection de votre compte."],
  ]},
  { g: "Sauvegardes et récupération des données", q: [
    ["Mes données sont-elles sauvegardées automatiquement ?", "Oui. MHFac dispose d'un système de sauvegarde permettant de protéger vos données professionnelles et de limiter les risques de perte en cas d'incident technique."],
    ["Que se passe-t-il si je perds mes données ou si un incident survient ?", "MHFac dispose de mécanismes de restauration permettant de récupérer les données à partir des sauvegardes disponibles, selon la nature de l'incident."],
    ["Puis-je récupérer mes données après une suppression accidentelle ?", "Contactez notre équipe d'assistance dès que possible. Nous étudierons les possibilités de récupération en fonction de la situation et des sauvegardes disponibles."],
  ]},
  { g: "Hébergement et disponibilité", q: [
    ["Où sont hébergées mes données ?", "MHFac repose sur une infrastructure d'hébergement destinée à assurer le fonctionnement et la protection de la plateforme ainsi que de vos données professionnelles."],
    ["MHFac est-il accessible à tout moment ?", "MHFac est conçu pour offrir une disponibilité continue. La plateforme dépend néanmoins de la maintenance technique et des éventuels incidents affectant l'infrastructure ou les connexions Internet."],
    ["Que faire si je rencontre un problème de connexion ?", "Vérifiez votre connexion Internet et réessayez. Si le problème persiste, contactez notre équipe d'assistance afin d'obtenir de l'aide."],
  ]},
  { g: "Assistance et accompagnement", q: [
    ["Comment contacter l'assistance MHFac ?", "Notre équipe est disponible pour vous accompagner dans l'utilisation de MHFac, répondre à vos questions et vous aider en cas de difficulté technique."],
    ["Proposez-vous une assistance en cas de problème technique ?", "Oui. Notre équipe peut vous accompagner dans l'identification et la résolution des problèmes techniques liés à l'utilisation de la plateforme."],
    ["Est-il possible de bénéficier d'une formation ?", "Oui. Un accompagnement à la prise en main de MHFac peut vous aider à maîtriser les différentes fonctionnalités : ventes, achats, facturation, trésorerie, gestion des clients, fournisseurs et stocks."],
    ["Puis-je utiliser MHFac sur plusieurs appareils ?", "MHFac est accessible depuis un navigateur Internet. Vous pouvez ainsi consulter votre espace professionnel depuis les appareils compatibles disposant d'une connexion Internet."],
  ]},
  { g: "Abonnement et utilisation", q: [
    ["Mes données sont-elles conservées si mon abonnement expire ?", "Les modalités de conservation, de suspension d'accès et de récupération des données dépendent des conditions de votre abonnement. Contactez notre équipe pour connaître les modalités applicables à votre compte."],
    ["MHFac convient-il aux petites et moyennes entreprises ?", "Oui. MHFac est conçu pour accompagner les commerçants, entrepreneurs et PME dans la gestion quotidienne de leur activité, en centralisant leurs opérations commerciales et administratives au sein d'une seule plateforme."],
    ["Puis-je obtenir une démonstration avant de m'abonner ?", "Contactez notre équipe pour découvrir MHFac et identifier la formule la plus adaptée aux besoins de votre entreprise."],
  ]},
];

const features = [
  { icon: FileText, t: "Devis", d: "Créez, envoyez et suivez l'acceptation, puis convertissez en facture en un clic." },
  { icon: Receipt, t: "Factures & avoirs", d: "Numérotation automatique, TVA tunisienne, timbre fiscal et avoirs liés." },
  { icon: ShoppingCart, t: "Achats & fournisseurs", d: "Commandes, factures fournisseurs et scan automatique des documents." },
  { icon: Boxes, t: "Stock multi-entrepôts", d: "Inventaire, bons d'entrée, de prélèvement et de transfert, fiches d'inventaire." },
  { icon: Wallet, t: "Paiements & trésorerie", d: "Comptes, transactions, chèques et traites suivis en temps réel." },
  { icon: Percent, t: "Retenue à la source", d: "RS ventes et achats gérées nativement, conformes à la fiscalité locale." },
  { icon: Landmark, t: "Facturation électronique", d: "Prêt pour la facture électronique tunisienne." },
  { icon: BarChart3, t: "Rapports & exports", d: "Tableau de bord, statistiques et exports CSV, Excel, PDF." },
];

const plans = [
  { n: "Découverte", s: "Pour essayer MHFac", p: "Sur demande", y: null, f: [["1 utilisateur", 1], ["10 factures / mois", 1], ["1 entrepôt", 1], ["5 scans de factures / mois", 1], ["Scan de factures fournisseur", 1], ["Facturation électronique", 0], ["Export des rapports", 0]] },
  { n: "Auto-entrepreneur", s: "Pour une activité individuelle", p: "31", y: "310 TND / an (2 mois offerts)", f: [["1 utilisateur", 1], ["50 factures / mois", 1], ["1 entrepôt", 1], ["30 scans de factures / mois", 1], ["Scan de factures fournisseur", 1], ["Export des rapports (CSV, Excel, PDF)", 1], ["Facturation électronique", 0]] },
  { n: "Pro", s: "L'offre standard MHFac", p: "56", y: "560 TND / an (2 mois offerts)", hot: true, f: [["5 utilisateurs", 1], ["300 factures / mois", 1], ["3 entrepôts", 1], ["150 scans de factures / mois", 1], ["Facturation électronique", 1], ["Scan de factures fournisseur", 1], ["Export des rapports (CSV, Excel, PDF)", 1]] },
  { n: "Business", s: "Pour une entreprise multi-utilisateurs", p: "129", y: "1 290 TND / an (2 mois offerts)", f: [["25 utilisateurs", 1], ["Factures illimitées", 1], ["10 entrepôts", 1], ["1 000 scans de factures / mois", 1], ["Exports illimités", 1], ["Facturation électronique", 1], ["Scan de factures fournisseur", 1]] },
] as const;

function Logo({ light }: { light?: boolean }) {
  return (
    <a href="#" className="flex items-center gap-2.5">
      <span className="grid size-9 place-items-center rounded-xl bg-brand text-primary-foreground shadow-glow"><FileText className="size-5" /></span>
      <span className="leading-none">
        <span className={`block text-lg font-extrabold ${light ? "text-ink-foreground" : "text-foreground"}`}>MH<span className="font-medium text-primary">Fac</span></span>
        <span className={`text-[10px] font-semibold tracking-[0.2em] ${light ? "text-ink-muted" : "text-muted-foreground"}`}>MH DIGITAL SOLUTION</span>
      </span>
    </a>
  );
}

function Cta({ children, href = "#offres", ghost }: { children: React.ReactNode; href?: string; ghost?: boolean }) {
  return ghost ? (
    <a href={href} className="inline-flex items-center gap-2 rounded-full border border-ink-foreground/20 px-6 py-3.5 font-semibold text-ink-foreground transition hover:bg-ink-foreground/10">{children}</a>
  ) : (
    <a href={href} className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3.5 font-bold text-primary-foreground shadow-glow transition hover:-translate-y-0.5">{children}</a>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-ink-foreground/10 bg-ink/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Logo light />
          <nav className="hidden gap-8 text-sm font-semibold text-ink-muted md:flex">
            <a href="#fonctionnalites" className="hover:text-primary">Fonctionnalités</a>
            <a href="#securite" className="hover:text-primary">Sécurité</a>
            <a href="#demo" className="hover:text-primary">Démo</a>
            <a href="#comparatif" className="hover:text-primary">Comparatif</a>
            <a href="#offres" className="hover:text-primary">Offres</a>
            <a href="#faq" className="hover:text-primary">FAQ</a>
          </nav>
          <a href={DEMO} className="rounded-full bg-brand px-5 py-2.5 text-sm font-bold text-primary-foreground">Démo gratuite</a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-hero text-ink-foreground">
        <div className="grid-lines absolute inset-0" />
        <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-20 lg:pt-28">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-ink-foreground/15 bg-ink-foreground/5 px-4 py-1.5 text-sm font-semibold">
              <Sparkles className="size-4 text-primary" /> 100% web · Ordinateur, mobile et tablette
            </span>
            <h1 className="mt-7 font-display text-5xl leading-[1.05] md:text-7xl">
              La facturation et la gestion commerciale, <em className="text-primary">pensées pour la Tunisie.</em>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-ink-muted">
              Devis, factures, avoirs, achats, stock, paiements et trésorerie réunis dans un seul outil simple, sécurisé et conforme à la fiscalité tunisienne.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Cta href={DEMO}><MessageCircle className="size-4" /> Obtenir une démo gratuite</Cta>
              <Cta href="#offres" ghost>Voir les offres <ArrowRight className="size-4" /></Cta>
            </div>
          </div>

          <div className="relative mx-auto mt-16 max-w-5xl">
            <div className="overflow-hidden rounded-2xl border border-ink-foreground/15 bg-card shadow-float">
              <div className="flex gap-1.5 border-b border-border bg-muted px-4 py-3">
                <span className="size-3 rounded-full bg-destructive/70" /><span className="size-3 rounded-full bg-primary/70" /><span className="size-3 rounded-full bg-chart-2/70" />
              </div>
              <img src={quotes.url} alt="Liste des devis dans MHFac" className="w-full" />
            </div>
            <div className="animate-floaty absolute -left-6 top-1/3 hidden rounded-2xl bg-card p-4 text-card-foreground shadow-float md:block">
              <p className="text-xs font-semibold text-muted-foreground">Devis converti en facture</p>
              <p className="mt-1 text-2xl font-extrabold">101,150 <span className="text-sm text-primary">TND</span></p>
            </div>
            <div className="animate-floaty absolute -right-6 bottom-12 hidden rounded-2xl bg-card p-4 text-card-foreground shadow-float [animation-delay:1.5s] md:block">
              <div className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-xl bg-accent text-accent-foreground"><ShieldCheck className="size-5" /></span>
                <div><p className="text-sm font-bold">Données isolées</p><p className="text-xs text-muted-foreground">par entreprise</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { i: Receipt, t: "Devis, factures et avoirs", d: "Pour les entreprises tunisiennes : TVA, timbre fiscal, retenue à la source et numérotation conforme." },
            { i: Wallet, t: "Achats, stock, paiements et trésorerie", d: "Toute votre activité commerciale au même endroit, sans tableurs ni ressaisie." },
            { i: ShieldCheck, t: "Rôles et permissions", d: "Données isolées par entreprise, accès contrôlés pour chaque collaborateur." },
          ].map(({ i: I, t, d }) => (
            <div key={t} className="rounded-3xl border border-border bg-card p-8 transition hover:-translate-y-1 hover:shadow-glow">
              <span className="grid size-12 place-items-center rounded-2xl bg-brand text-primary-foreground"><I className="size-6" /></span>
              <h3 className="mt-6 font-display text-2xl">{t}</h3>
              <p className="mt-3 text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Demo video */}
      <section id="demo" className="mx-auto max-w-6xl px-6 pb-24">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-primary">Démonstration</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl">MHFac en 90 secondes.</h2>
        </div>
        <div className="relative mt-10 aspect-video overflow-hidden rounded-3xl bg-ink shadow-float">
          <img src={quotes.url} alt="" className="absolute inset-0 size-full object-cover opacity-30" loading="lazy" />
          <div className="relative flex size-full flex-col items-center justify-center gap-5 px-6 text-center text-ink-foreground">
            <span className="grid size-20 place-items-center rounded-full bg-brand shadow-glow"><Play className="ml-1 size-8 text-primary-foreground" /></span>
            <p className="font-display text-2xl md:text-3xl">Vidéo de démonstration bientôt disponible</p>
            <a href={DEMO} className="font-semibold text-primary underline-offset-4 hover:underline">En attendant, demandez une démo en direct sur WhatsApp →</a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="fonctionnalites" className="bg-muted py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-widest text-primary">Fonctionnalités</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">Tout ce qu'il faut pour piloter votre commerce.</h2>
          </div>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {features.map(({ icon: I, t, d }) => (
              <div key={t} className="rounded-2xl bg-card p-6">
                <I className="size-6 text-primary" />
                <h3 className="mt-4 font-bold">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stock showcase */}
      <section className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 lg:grid-cols-2">
        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-primary">Stock & données</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl">Clients, articles et entrepôts toujours à jour.</h2>
          <ul className="mt-8 space-y-4">
            {["Mouvements de stock tracés automatiquement", "Bons d'entrée, de prélèvement et de transfert", "Fiches d'inventaire et gestion multi-entrepôts", "Suivi par projet et fiches clients / fournisseurs"].map((x) => (
              <li key={x} className="flex gap-3"><span className="grid size-6 shrink-0 place-items-center rounded-full bg-accent text-accent-foreground"><Check className="size-4" /></span>{x}</li>
            ))}
          </ul>
        </div>
        <div className="overflow-hidden rounded-2xl border border-border shadow-float">
          <img src={stock.url} alt="Menu stock et données de MHFac" className="w-full" loading="lazy" />
        </div>
      </section>

      {/* Devices + security */}
      <section id="securite" className="relative overflow-hidden bg-hero py-24 text-ink-foreground">
        <div className="grid-lines absolute inset-0" />
        <div className="relative mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-2">
          <div className="rounded-3xl border border-ink-foreground/10 bg-ink-foreground/5 p-10">
            <div className="flex gap-4 text-primary"><Monitor className="size-8" /><Tablet className="size-8" /><Smartphone className="size-8" /></div>
            <h3 className="mt-6 font-display text-3xl">100% web, partout.</h3>
            <p className="mt-3 text-ink-muted">Aucune installation. Facturez depuis votre bureau, en déplacement ou chez le client, sur ordinateur, tablette ou mobile.</p>
          </div>
          <div className="rounded-3xl border border-ink-foreground/10 bg-ink-foreground/5 p-10">
            <div className="flex gap-4 text-primary"><ShieldCheck className="size-8" /><Users className="size-8" /><ScanLine className="size-8" /></div>
            <h3 className="mt-6 font-display text-3xl">Sécurisé par conception.</h3>
            <p className="mt-3 text-ink-muted">Chaque entreprise dispose de données isolées. Définissez des rôles et permissions précis pour chaque utilisateur.</p>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section id="comparatif" className="mx-auto max-w-5xl px-6 py-24">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-primary">Comparatif</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl">Fini Excel et les carnets de factures.</h2>
        </div>
        <div className="mt-12 overflow-x-auto rounded-3xl border border-border bg-card">
          <table className="w-full min-w-[560px] text-left text-sm">
            <thead><tr className="border-b border-border">
              <th className="p-5 font-semibold text-muted-foreground"></th>
              <th className="p-5 font-semibold text-muted-foreground">Excel / méthodes manuelles</th>
              <th className="bg-ink p-5 font-bold text-ink-foreground">MHFac</th>
            </tr></thead>
            <tbody>{compare.map(([f, a, b]) => (
              <tr key={f} className="border-b border-border last:border-0">
                <td className="p-5 font-semibold">{f}</td>
                <td className="p-5 text-muted-foreground"><span className="inline-flex items-center gap-2"><X className="size-4 text-destructive" />{a}</span></td>
                <td className="bg-accent/40 p-5 font-semibold"><span className="inline-flex items-center gap-2"><Check className="size-4 text-primary" />{b}</span></td>
              </tr>))}
            </tbody>
          </table>
        </div>
        <div className="mt-10 flex justify-center"><a href={DEMO} className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3.5 font-bold text-primary-foreground shadow-glow transition hover:-translate-y-0.5"><MessageCircle className="size-4" /> Voir la différence en démo</a></div>
      </section>

      {/* Pricing */}
      <section id="offres" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-primary">Offres</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl">Un tarif adapté à chaque étape.</h2>
          <p className="mt-4 text-muted-foreground">Paiement annuel : 2 mois offerts.</p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {plans.map((pl) => {
            const hot = "hot" in pl && pl.hot;
            return (
              <div key={pl.n} className={`relative flex flex-col rounded-3xl p-7 ${hot ? "bg-ink text-ink-foreground shadow-glow" : "border border-border bg-card"}`}>
                {hot && <span className="absolute -top-3 left-7 rounded-full bg-brand px-3 py-1 text-xs font-bold text-primary-foreground">Le plus choisi</span>}
                <h3 className="font-display text-2xl">{pl.n}</h3>
                <p className={`text-sm ${hot ? "text-ink-muted" : "text-muted-foreground"}`}>{pl.s}</p>
                <div className="mt-6">
                  {pl.y ? <p><span className="text-4xl font-extrabold">{pl.p}</span> <span className="font-semibold">TND / mois</span></p> : <p className="text-3xl font-extrabold">{pl.p}</p>}
                  <p className={`mt-1 h-5 text-xs ${hot ? "text-ink-muted" : "text-muted-foreground"}`}>{pl.y}</p>
                </div>
                <ul className="mt-6 flex-1 space-y-3 text-sm">
                  {pl.f.map(([x, ok]) => (
                    <li key={x} className={`flex gap-2 ${ok ? "" : "line-through opacity-50"}`}>
                      {ok ? <Check className="size-4 shrink-0 text-primary" /> : <X className="size-4 shrink-0" />}{x}
                    </li>
                  ))}
                </ul>
                <a href={wa(`Bonjour, je suis intéressé(e) par le pack ${pl.n} de MHFac`)} className={`mt-8 rounded-full py-3 text-center font-bold transition ${hot ? "bg-brand text-primary-foreground" : "border border-border hover:border-primary hover:text-primary"}`}>
                  {pl.y ? "Choisir " + pl.n : "Nous contacter"}
                </a>
              </div>
            );
          })}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-muted py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-primary">FAQ</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">Vos questions, nos réponses.</h2>
          </div>
          <div className="mt-12 space-y-10">
            {faq.map((g) => (
              <div key={g.g}>
                <h3 className="font-display text-2xl">{g.g}</h3>
                <div className="mt-4 space-y-3">
                  {g.q.map(([q, a]) => (
                    <details key={q} className="group rounded-2xl bg-card p-5 open:shadow-glow">
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">
                        {q}<Plus className="size-5 shrink-0 text-primary transition group-open:rotate-45" />
                      </summary>
                      <p className="mt-3 text-muted-foreground">{a}</p>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="h-24" />
      {/* Final CTA */}
      <section className="px-6 pb-24">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-hero px-8 py-16 text-center text-ink-foreground">
          <div className="grid-lines absolute inset-0" />
          <div className="relative">
            <h2 className="font-display text-4xl md:text-5xl">Voyez MHFac en action, avec vos propres cas.</h2>
            <p className="mx-auto mt-4 max-w-xl text-ink-muted">Un conseiller vous présente MHFac en direct et vous aide à choisir la formule adaptée. Rejoignez les entreprises tunisiennes qui gèrent leur activité avec MHFac.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4"><Cta href={DEMO}><MessageCircle className="size-4" /> Réserver ma démo sur WhatsApp</Cta><Cta href="#offres" ghost>Comparer les offres</Cta></div>
            <p className="mt-5 text-sm text-ink-muted">Démo gratuite et sans engagement · +216 58 146 177</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
          <Logo />
          <p className="text-sm text-muted-foreground">© 2026 MH Digital Solution · Tunisie</p>
        </div>
      </footer>
      <a href={DEMO} aria-label="Demander une démo sur WhatsApp" className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-brand px-5 py-3.5 font-bold text-primary-foreground shadow-glow transition hover:-translate-y-0.5">
        <MessageCircle className="size-5" /><span className="hidden sm:inline">Démo gratuite</span>
      </a>
    </div>
  );
}
