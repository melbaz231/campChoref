import { highlights } from '../data/camp';

export default function Highlights() {
  return (
    <section id="about" className="scroll-mt-20 bg-white py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-grape-500">
            What we do
          </p>
          <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-steel-900 sm:text-5xl">
            What the boys do all summer
          </h2>
          <p className="mt-4 text-lg text-steel-700">
            Every day is packed — and every week ends with something to look forward to.
          </p>
        </div>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item) => (
            <li
              key={item.title}
              className="rounded-2xl border border-steel-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-steel-400 hover:shadow-lg hover:shadow-steel-900/10"
            >
              <span
                aria-hidden="true"
                className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-steel-50 text-2xl ring-1 ring-steel-100"
              >
                {item.icon}
              </span>
              <h3 className="mt-4 text-xl font-bold text-steel-800">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-steel-700">{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
