import { camp, quickFacts } from '../data/camp';

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_55%_at_50%_-10%,var(--color-night-500)_0%,transparent_70%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-splash-500/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 top-56 h-80 w-80 rounded-full bg-sun-400/15 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-12 sm:pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="text-center lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-sun-300/40 bg-sun-300/10 px-4 py-1.5 text-sm font-semibold text-sun-200">
              <span aria-hidden="true">☀️</span>
              {camp.yearBadge}
            </span>

            <h1 className="mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Camp{' '}
              <span className="bg-gradient-to-r from-splash-300 via-sun-200 to-sun-400 bg-clip-text text-transparent">
                Choref
              </span>
            </h1>

            <p className="mt-5 text-xl text-night-100 sm:text-2xl">“{camp.tagline}”</p>

            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-night-200 lg:mx-0">
              Two weeks of sports, trips, BBQs, learning and prizes for {camp.who.toLowerCase()}.
              Space is limited, so reserve your son&apos;s spot early.
            </p>

            <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row lg:justify-start">
              <a
                href="#register"
                className="rounded-full bg-sun-400 px-8 py-3.5 text-center text-base font-semibold text-night-900 shadow-xl shadow-sun-500/25 transition hover:-translate-y-0.5 hover:bg-sun-300"
              >
                Register now
              </a>
              <a
                href="#details"
                className="rounded-full border border-white/25 px-8 py-3.5 text-center text-base font-semibold text-white transition hover:border-white/50 hover:bg-white/10"
              >
                See the details
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute inset-0 -rotate-3 rounded-[2rem] bg-gradient-to-br from-splash-400/25 to-sun-400/25 blur-xl" />
            <img
              src="/media/pic.png"
              alt="Camp Choref logo"
              className="relative w-full animate-float drop-shadow-2xl"
              width={400}
              height={400}
            />
          </div>
        </div>

        <dl className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {quickFacts.map((fact) => (
            <div
              key={fact.label}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition hover:border-sun-300/40 hover:bg-white/10"
            >
              <dt className="text-xs font-bold uppercase tracking-[0.18em] text-sun-300">
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
