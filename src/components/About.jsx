import { img } from '../content.js';
import { Photo, Reveal } from './ui.jsx';

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="container-page grid items-center gap-[clamp(48px,8vw,120px)] py-[clamp(72px,10vw,128px)] md:grid-cols-[1.1fr_1fr]"
    >
      <Reveal>
        <p className="label mb-[18px]">The story so far</p>
        <h2 id="about-title" className="mb-7 text-[clamp(34px,4vw,52px)]">
          Let's start with the <em>good</em> bits…
        </h2>
        <div className="max-w-[58ch] space-y-[18px] text-muted">
          <p>
            I'm a full-stack software engineer based in Sri Lanka. My heart lives in Java and Spring Boot —
            designing clean APIs, sensible data models and services that keep running quietly in the background.
            On the surface, I build with React, caring about the small details that make an interface feel calm
            and easy to use.
          </p>
          <p>
            I graduated with a First Class BSc in Computer Science &amp; Software Engineering from the University
            of Bedfordshire, UK, and I've been turning ideas into working products ever since — from property
            management platforms to a matchmaking app of my own.
          </p>
          <p>
            I like software that gets out of the way. If the people using it never have to think about it, I've
            done my job.
          </p>
        </div>
        <p
          aria-label="Signed, Rashindi"
          className="mt-7 origin-left -rotate-[4deg] font-script text-[52px] leading-none font-medium text-accent"
        >
          Rashindi
        </p>
      </Reveal>

      <Reveal as="figure" className="relative mx-auto w-full max-w-[480px] pr-[18px] pb-[18px] sm:pr-6 sm:pb-6 md:max-w-none">
        <div className="relative before:absolute before:inset-0 before:translate-x-[18px] before:translate-y-[18px] before:border before:border-accent sm:before:translate-x-6 sm:before:translate-y-6">
          {/* TODO: add public/images/candid.jpg */}
          <Photo
            src={img('candid.jpg')}
            alt="Rashindi working at her laptop"
            placeholder="candid photo"
            className="aspect-[4/5]"
          />
        </div>
        <figcaption className="absolute -bottom-[18px] left-0 -rotate-[8deg] bg-cream px-2.5 font-script text-[30px] leading-tight font-medium text-accent md:-left-9">
          coffee + code ☕
        </figcaption>
      </Reveal>
    </section>
  );
}
