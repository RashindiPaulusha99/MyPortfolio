import { nav } from '../content.js';

export default function Footer() {
  return (
    <footer className="bg-espresso text-cream [&_:focus-visible]:outline-taupe">
      <div className="container-page flex flex-wrap items-center justify-between gap-6 py-12">
        <a href="#top" className="font-serif text-4xl italic leading-none text-cream no-underline">
          Rashindi
        </a>
        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-7 gap-y-1">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="inline-flex min-h-11 items-center text-xs uppercase tracking-[0.2em] text-cream no-underline hover:text-taupe"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <p className="text-[13px] text-taupe">© 2026 Rashindi</p>
      </div>
    </footer>
  );
}
