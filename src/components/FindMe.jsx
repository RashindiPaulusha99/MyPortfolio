import { links } from '../content.js';

export default function FindMe() {
  return (
    <section aria-labelledby="online-title" className="bg-sand">
      <div className="container-page flex flex-wrap items-center justify-center gap-x-10 gap-y-5 py-10">
        <h2 id="online-title" className="label font-sans text-espresso">
          Find me online
        </h2>
        <div className="flex w-full flex-wrap justify-center gap-3 sm:w-auto">
          <a className="btn btn-outline flex-1 basis-full sm:flex-none sm:basis-auto" href={links.github} target="_blank" rel="noopener">
            GitHub
          </a>
          <a className="btn btn-outline flex-1 basis-full sm:flex-none sm:basis-auto" href={links.linkedin} target="_blank" rel="noopener">
            LinkedIn
          </a>
          <a className="btn btn-outline flex-1 basis-full sm:flex-none sm:basis-auto" href={links.cv} download>
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}
