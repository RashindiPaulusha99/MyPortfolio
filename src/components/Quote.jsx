import { Reveal } from './ui.jsx';

export default function Quote() {
  return (
    <section aria-label="Philosophy" className="bg-taupe">
      <Reveal as="blockquote" className="mx-auto max-w-[980px] px-4 py-[clamp(64px,9vw,112px)] text-center sm:px-6 lg:px-10">
        <p className="font-serif text-[clamp(28px,3.6vw,46px)] leading-[1.25]">
          Good software is quiet. It just works — so the people using it can get on with their <em>day.</em>
        </p>
      </Reveal>
    </section>
  );
}
