import { img, projects } from '../content.js';
import { Photo, Reveal } from './ui.jsx';

export default function Portfolio() {
  return (
    <section id="work" aria-labelledby="work-title" className="py-[clamp(72px,10vw,128px)]">
      <div className="container-page">
        <Reveal as="header" className="mb-[clamp(40px,6vw,72px)] text-center">
          <p className="mb-1 -rotate-3 font-script text-[32px] leading-tight font-medium text-accent">
            a few favourites
          </p>
          <h2 id="work-title" className="text-[clamp(36px,4.4vw,60px)]">
            The <em>Portfolio</em>
          </h2>
        </Reveal>

        <div className="space-y-[clamp(72px,10vw,128px)]">
          {projects.map((p, i) => (
            <Project key={p.name} project={p} number={i + 1} flip={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Project({ project: p, number, flip }) {
  const external = p.url.startsWith('http');

  return (
    <Reveal
      as="article"
      className="group/project grid items-center gap-8 md:grid-cols-[1.25fr_1fr] md:gap-[clamp(40px,6vw,96px)]"
    >
      <div className={`bg-sand p-[clamp(24px,5vw,64px)] ${flip ? 'md:order-2' : ''}`}>
        <div
          className="border border-line bg-panel shadow-[0_12px_30px_-18px_rgba(31,26,23,.35)] transition-[translate,box-shadow] duration-600 ease-soft
            group-hover/project:-translate-y-2.5 group-hover/project:shadow-[0_28px_40px_-22px_rgba(31,26,23,.45)]
            group-focus-within/project:-translate-y-2.5"
        >
          <div aria-hidden="true" className="flex gap-1.5 border-b border-line px-3.5 py-[11px]">
            {[0, 1, 2].map((d) => (
              <span key={d} className="size-[9px] rounded-full bg-line" />
            ))}
          </div>
          <Photo
            src={img(p.image)}
            alt={p.alt}
            placeholder={`${p.name} screenshot`}
            loading="lazy"
            className="aspect-[16/10] bg-cream"
            imgClassName="object-top"
          />
        </div>
      </div>

      <div>
        <p className="mb-1.5 font-serif text-[22px] italic text-accent">{String(number).padStart(2, '0')}</p>
        <h3 className="mb-2.5 text-[clamp(36px,4vw,52px)]">{p.name}</h3>
        <p className="label mb-[18px] text-muted">{p.type}</p>
        <p className="mb-[18px] max-w-[46ch] text-muted">{p.description}</p>
        <p className="mb-7 text-[13px] tracking-[0.08em]">{p.stack}</p>
        <a
          href={p.url}
          className="btn btn-outline"
          {...(external && { target: '_blank', rel: 'noopener' })}
        >
          View project<span className="sr-only">: {p.name}</span>
        </a>
      </div>
    </Reveal>
  );
}
