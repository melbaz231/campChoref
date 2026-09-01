import { camp } from '../data/camp';

export default function Footer() {
  return (
    <footer className="on-deep border-t-4 border-sun-400 bg-steel-950 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 text-center sm:flex-row sm:justify-between sm:text-left">
        <div className="flex items-center gap-3">
          <img src="/media/pic.png" alt="" className="h-12 w-auto" />
          <div>
            <p className="font-display text-lg font-bold text-white">{camp.name}</p>
            <p className="text-sm text-steel-200">
              “The best way to <span className="text-steel-300">cool</span> off this{' '}
              <span className="text-sand-300">summer</span>”
            </p>
          </div>
        </div>

        <div className="text-sm text-steel-200">
          <p className="font-semibold text-white">{camp.director}</p>
          <p className="mt-1">
            <a className="transition hover:text-sun-300" href={`tel:${camp.phone}`}>
              {camp.phone}
            </a>
          </p>
          <p>
            <a className="transition hover:text-sun-300" href={`mailto:${camp.email}`}>
              {camp.email}
            </a>
          </p>
        </div>
      </div>

      <p className="mt-8 text-center text-xs text-steel-300">
        © {new Date().getFullYear()} {camp.name}. All rights reserved.
      </p>
    </footer>
  );
}
