import { tech } from '../content.js';

export default function TechStrip() {
  return (
    <div role="region" aria-label="Technologies I work with" className="group overflow-hidden bg-espresso py-[22px] text-cream">
      <p className="sr-only">{tech.join(', ')}.</p>
      <div
        aria-hidden="true"
        className="flex w-max animate-marquee group-hover:[animation-play-state:paused] motion-reduce:w-auto motion-reduce:justify-center"
      >
        {[0, 1].map((copy) => (
          <ul
            key={copy}
            className={`flex motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:gap-y-2 ${
              copy ? 'motion-reduce:hidden' : ''
            }`}
          >
            {tech.map((t) => (
              <li
                key={t}
                className="flex items-center whitespace-nowrap text-[13px] uppercase tracking-[0.3em] after:mx-5 after:tracking-normal after:text-taupe after:content-['✦'] sm:after:mx-8"
              >
                {t}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
