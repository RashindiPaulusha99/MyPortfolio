import { useEffect, useRef, useState } from 'react';
import { links, nav } from '../content.js';
import { Icon } from './ui.jsx';

const socials = [
  { name: 'github', label: 'GitHub', href: links.github, external: true },
  { name: 'linkedin', label: 'LinkedIn', href: links.linkedin, external: true },
  { name: 'email', label: 'Email', href: `mailto:${links.email}` },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className="bg-cream">
      <div className="container-page grid grid-cols-[1fr_auto] items-center py-4 md:grid-cols-[1fr_auto_1fr] md:pt-[22px] md:pb-3.5">
        <ul className="hidden gap-1 md:flex" aria-label="Social links">
          {socials.map((s) => (
            <li key={s.name}>
              <a
                href={s.href}
                aria-label={s.label}
                {...(s.external && { target: '_blank', rel: 'noopener' })}
                className="grid size-11 place-items-center text-espresso transition-colors duration-300 hover:text-accent"
              >
                <Icon name={s.name} className="size-[19px]" />
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#top"
          className="justify-self-start font-serif text-[clamp(32px,4vw,44px)] italic leading-none text-espresso no-underline md:justify-self-auto"
        >
          Rashindi
        </a>

        <div className="flex items-center justify-end gap-2">
          <a href="#contact" className="btn btn-outline hidden min-h-11 px-[22px] py-2.5 md:inline-flex">
            Hire me
          </a>
          <button
            ref={toggleRef}
            type="button"
            aria-expanded={open}
            aria-controls="primary-nav"
            onClick={() => setOpen((o) => !o)}
            className="relative grid size-11 cursor-pointer place-items-center border border-espresso md:hidden"
          >
            <span className="sr-only">Menu</span>
            <span aria-hidden="true" className="relative block h-3.5 w-[18px]">
              <span
                className={`absolute left-0 top-0 h-[1.5px] w-full bg-espresso transition-transform duration-300 ${
                  open ? 'translate-y-[6px] rotate-45' : ''
                }`}
              />
              <span
                className={`absolute left-0 top-[6px] h-[1.5px] w-full bg-espresso transition-opacity duration-300 ${
                  open ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`absolute left-0 top-3 h-[1.5px] w-full bg-espresso transition-transform duration-300 ${
                  open ? '-translate-y-[6px] -rotate-45' : ''
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      <nav
        id="primary-nav"
        aria-label="Primary"
        className={`border-b border-line ${open ? 'block' : 'hidden'} md:block`}
      >
        <ul className="container-page flex flex-col pb-3 md:flex-row md:justify-center md:gap-[clamp(16px,4vw,56px)] md:pb-0">
          {nav.map((item) => (
            <li key={item.href} className="border-line not-first:border-t md:not-first:border-t-0">
              <NavLink href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </NavLink>
            </li>
          ))}
          <li className="border-t border-line md:hidden">
            <NavLink href="#contact" onClick={() => setOpen(false)} className="text-accent">
              Hire me
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

function NavLink({ className = 'text-espresso', ...props }) {
  return (
    <a
      {...props}
      className={`relative flex min-h-[52px] items-center px-1 text-xs font-medium uppercase tracking-[0.2em] no-underline transition-colors duration-300 hover:text-accent md:inline-flex md:min-h-12
        md:after:absolute md:after:inset-x-1/2 md:after:bottom-3 md:after:h-px md:after:bg-accent md:after:transition-all md:after:duration-300 md:hover:after:inset-x-0 ${className}`}
    />
  );
}
