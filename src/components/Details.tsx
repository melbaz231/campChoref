import { camp, campDetails } from '../data/camp';

export default function Details() {
  return (
    <section id="details" className="scroll-mt-20 border-y border-steel-100 bg-steel-50 py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-grape-500">
            Camp policies
          </p>
          <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-steel-900 sm:text-5xl">
            Everything you need to know
          </h2>
          <p className="mt-4 text-lg text-steel-700">
            The full camp policies, in plain text — no squinting at a flyer on your phone.
          </p>
          <a
            href="/media/flyer3.png"
            download
            className="mt-5 inline-flex items-center gap-2 rounded-full border border-steel-400 px-5 py-2.5 text-sm font-semibold text-steel-700 transition hover:border-steel-600 hover:bg-white"
          >
            <span aria-hidden="true">⬇</span> Download the printable flyer
          </a>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {campDetails.map((detail) => (
            <article
              key={detail.title}
              className="rounded-2xl border border-steel-200 bg-white p-6 transition hover:border-steel-400 hover:shadow-md hover:shadow-steel-900/5"
            >
              <h3 className="text-lg font-bold text-grape-600">{detail.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-steel-700">{detail.body}</p>
            </article>
          ))}
        </div>

        <p className="mt-8 rounded-2xl border-2 border-sun-500 bg-sun-100 p-6 text-center text-base text-steel-900">
          Looking forward! Questions? Call or text {camp.director} at{' '}
          <a
            className="font-bold text-steel-700 underline underline-offset-4 hover:text-steel-900"
            href={`tel:${camp.phone}`}
          >
            {camp.phone}
          </a>{' '}
          or email{' '}
          <a
            className="font-bold text-steel-700 underline underline-offset-4 hover:text-steel-900"
            href={`mailto:${camp.email}`}
          >
            {camp.email}
          </a>
          .
        </p>
      </div>
    </section>
  );
}
