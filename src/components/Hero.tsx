import { camp, quickFacts } from '../data/camp';

export default function Hero() {
  return (
    <section id="top" className="on-deep relative -mt-16 overflow-hidden bg-steel-950 pt-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(75%_60%_at_50%_-5%,var(--color-steel-700)_0%,transparent_70%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-steel-400/25 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 top-56 h-80 w-80 rounded-full bg-sun-400/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-12 sm:pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="text-center lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-sun-400/50 bg-sun-400/15 px-4 py-1.5 text-sm font-bold text-sun-200">
              <span aria-hidden="true">✦</span>
              {camp.yearBadge}
            </span>

            <h1 className="mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Camp{' '}
              <span className="bg-gradient-to-r from-steel-300 via-sun-200 to-sun-400 bg-clip-text text-transparent">
                Choref
              </span>
            </h1>

            {/* The flyer sets "cool" in blue and "summer" in warm brown — kept here. */}
            <p className="mt-5 text-xl text-steel-100 sm:text-2xl">
              “The best way to <span className="font-semibold text-steel-300">cool</span> off this{' '}
              <span className="font-semibold text-sand-300">summer</span>”
            </p>

            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-steel-200 lg:mx-0">
              Two weeks of sports, trips, BBQs, learning and prizes for {camp.who.toLowerCase()}.
              Space is limited, so reserve your son&apos;s spot early.
            </p>

            <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row lg:justify-start">
              <a
                href="#register"
                className="rounded-full bg-sun-400 px-8 py-3.5 text-center text-base font-bold text-steel-950 shadow-xl shadow-sun-500/25 transition hover:-translate-y-0.5 hover:bg-sun-300"
              >
                Register now
              </a>
              <a
                href="#details"
                className="rounded-full border border-white/30 px-8 py-3.5 text-center text-base font-semibold text-white transition hover:border-white/60 hover:bg-white/10"
              >
                See the details
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute inset-0 -rotate-3 rounded-[2rem] bg-gradient-to-br from-steel-400/30 to-sun-400/20 blur-xl" />
            <img
              src="/media/pic.png"
              alt="Camp Choref logo"
              className="relative w-full animate-float drop-shadow-2xl"
              width={400}
              height={400}
            />
          </div>
        </div>

        {/* Labels echo the purple WHO / WHERE / WHEN / COST headings on the flyer. */}
        <dl className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {quickFacts.map((fact) => (
            <div
              key={fact.label}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition hover:border-sun-400/40 hover:bg-white/10"
            >
              <dt className="text-xs font-bold uppercase tracking-[0.18em] text-grape-300">
                {fact.label}
              </dt>
              <dd className="mt-2 text-base font-medium leading-snug text-white">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
