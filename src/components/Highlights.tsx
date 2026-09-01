import { highlights } from '../data/camp';

export default function Highlights() {
  return (
    <section id="about" className="scroll-mt-20 border-t border-white/10 bg-night-950/40 py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-2xl">
          <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            What the boys do all summer
          </h2>
          <p className="mt-4 text-lg text-night-200">
            Every day is packed — and every week ends with something to look forward to.
          </p>
        </div>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item) => (
            <li
              key={item.title}
              className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/8 to-white/2 p-6 transition hover:-translate-y-1 hover:border-sun-300/40"
            >
              <span
                aria-hidden="true"
                className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-night-600 text-2xl shadow-inner"
              >
                {item.icon}
              </span>
              <h3 className="mt-4 text-xl font-bold text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-night-200">{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
