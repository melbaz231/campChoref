import { camp, campDetails } from '../data/camp';

export default function Details() {
  return (
    <section id="details" className="scroll-mt-20 py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-2xl">
          <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Everything you need to know
          </h2>
          <p className="mt-4 text-lg text-night-200">
            The full camp policies, in plain text — no squinting at a flyer on your phone.
          </p>
            <a
              href="/media/flyer3.png"
              download
              className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/25 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-white/50 hover:bg-white/10"
            >
              <span aria-hidden="true">⬇</span> Download the printable flyer
            </a>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {campDetails.map((detail) => (
            <article
              key={detail.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-splash-400/40 hover:bg-white/8"
            >
              <h3 className="text-lg font-bold text-sun-200">{detail.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-night-100">{detail.body}</p>
            </article>
          ))}
        </div>

        <p className="mt-8 rounded-2xl border border-sun-300/25 bg-sun-300/10 p-6 text-center text-base text-sun-50">
          Looking forward! Questions? Call or text {camp.director} at{' '}
          <a className="font-semibold underline underline-offset-4" href={`tel:${camp.phone}`}>
            {camp.phone}
          </a>{' '}
          or email{' '}
          <a className="font-semibold underline underline-offset-4" href={`mailto:${camp.email}`}>
            {camp.email}
          </a>
          .
        </p>
      </div>
    </section>
  );
}
