import { img } from '../content.js';
import { Photo } from './ui.jsx';

export default function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="container-page relative grid pt-7 pb-14 md:grid-cols-[1.35fr_1fr] md:gap-10 md:pt-14 md:pb-24"
    >
      {/* TODO: add public/images/workspace.jpg (laptop, desk, coffee) */}
      <Photo
        src={img('workspace.jpg')}
        alt="Rashindi's desk: an open laptop beside a cup of coffee"
        placeholder="workspace photo"
        className="order-3 mt-6 aspect-[4/3] md:order-none md:mt-0 md:aspect-auto md:min-h-[600px]"
        imgClassName="animate-slow-zoom"
      />

      <div className="order-1 flex justify-center md:order-none md:items-start md:pt-10">
        <Photo
          src={img('portrait.jpg')}
          alt="Portrait of Rashindi smiling"
          className="aspect-[4/5.4] w-full max-w-[320px] rounded-t-full outline outline-line outline-offset-[10px] md:max-w-[400px]"
          imgClassName="object-[50%_20%]"
        />
      </div>

      <div
        className="relative z-10 order-2 -mt-16 border border-line bg-panel p-[clamp(32px,4vw,52px)] text-center animate-fade-up
          md:absolute md:bottom-[clamp(24px,4vw,48px)] md:left-1/2 md:order-none md:mt-0 md:w-[min(520px,90%)] md:-translate-x-1/2 xl:-translate-x-[58%]"
      >
        <p className="label mb-[18px]">Hey, I'm Rashindi</p>
        <h1 id="hero-title" className="mb-[18px] text-[clamp(36px,4.4vw,56px)]">
          I build software that feels <em>effortless.</em>
        </h1>
        <p className="mx-auto mb-7 max-w-[34ch] text-muted">
          Full-stack engineer — from the database to the very last pixel.
        </p>
        <a href="#work" className="btn btn-solid">
          See my work
        </a>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-9 right-4 z-20 flex flex-col items-start sm:right-6 md:top-[clamp(40px,7vw,96px)] md:right-auto md:left-[46%] xl:left-[52%]"
      >
        <span className="-rotate-6 bg-cream px-2 font-script text-2xl leading-tight font-medium whitespace-nowrap text-accent animate-fade-in md:text-[30px]">
          your future dev ✦
        </span>
        <svg
          viewBox="0 0 140 90"
          className="ml-10 hidden w-[130px] md:block"
          fill="none"
          stroke="var(--color-accent)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path className="arrow-line" d="M8 14 C 40 2, 66 12, 76 34 S 108 72, 130 70" />
          <path className="arrow-head" d="M117 61 L 131 70 L 117 79" />
        </svg>
      </div>
    </section>
  );
}
