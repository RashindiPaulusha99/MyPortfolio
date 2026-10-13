import { services } from '../content.js';
import { Icon, Reveal } from './ui.jsx';

export default function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="border-y border-line bg-panel py-[clamp(72px,10vw,128px)]"
    >
      <div className="container-page">
        <Reveal as="header" className="mb-[clamp(40px,6vw,72px)] text-center">
          <p className="label mb-[18px]">What I do</p>
          <h2 id="services-title" className="text-[clamp(36px,4.4vw,60px)]">
            From the server to the <em>screen</em>
          </h2>
        </Reveal>

        <div className="grid gap-[clamp(20px,3vw,32px)] md:grid-cols-3">
          {services.map((s) => (
            <Reveal
              as="article"
              key={s.title}
              className="border border-line bg-cream px-8 pt-12 pb-10 text-center hover:-translate-y-1 hover:border-taupe"
            >
              <Icon name={s.icon} className="mx-auto mb-6 size-[52px] text-accent" />
              <h3 className="mb-3 text-[30px]">{s.title}</h3>
              <p className="mb-6 text-muted">{s.blurb}</p>
              <ul className="border-t border-line pt-5 text-xs uppercase leading-[2.3] tracking-[0.2em]">
                {s.stack.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
