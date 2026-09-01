import { camp } from '../data/camp';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-night-950 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 text-center sm:flex-row sm:justify-between sm:text-left">
        <div className="flex items-center gap-3">
          <img src="/media/pic.png" alt="" className="h-12 w-auto" />
          <div>
            <p className="font-display text-lg font-bold text-sun-200">{camp.name}</p>
            <p className="text-sm text-night-300">“{camp.tagline}”</p>
          </div>
        </div>

        <div className="text-sm text-night-200">
          <p className="font-semibold text-white">{camp.director}</p>
          <p className="mt-1">
            <a className="hover:text-sun-200" href={`tel:${camp.phone}`}>
              {camp.phone}
            </a>
          </p>
          <p>
            <a className="hover:text-sun-200" href={`mailto:${camp.email}`}>
              {camp.email}
            </a>
          </p>
        </div>
      </div>

      <p className="mt-8 text-center text-xs text-night-400">
        © {new Date().getFullYear()} {camp.name}. All rights reserved.
      </p>
    </footer>
  );
}
