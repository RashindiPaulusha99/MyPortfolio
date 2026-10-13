import { img, links } from '../content.js';
import { Photo, Reveal } from './ui.jsx';

// Opens the visitor's email app with the message filled in.
// Swap for a form service (e.g. Formspree) if you want it to send directly.
function handleSubmit(e) {
  e.preventDefault();
  const data = new FormData(e.currentTarget);
  const subject = `Portfolio enquiry from ${data.get('name')}`;
  const body = `${data.get('message')}\n\n— ${data.get('name')} (${data.get('email')})`;
  window.location.href = `mailto:${links.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

const inputClass =
  'mt-0 min-h-11 w-full rounded-none border-0 border-b border-muted bg-transparent py-2.5 text-espresso transition-colors focus:border-b-2 focus:border-accent focus:outline-none';

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="container-page grid gap-[clamp(40px,6vw,96px)] py-[clamp(72px,10vw,128px)] md:grid-cols-2"
    >
      <Reveal className="relative flex min-h-[440px] items-end p-[clamp(20px,3vw,36px)] md:min-h-[560px]">
        <Photo src={img('portrait.jpg')} alt="" loading="lazy" className="absolute! inset-0" imgClassName="object-[50%_20%]" />
        <div className="relative w-full max-w-[380px] border border-line bg-panel p-8">
          <p className="label mb-[18px]">Say hello</p>
          <h2 id="contact-title" className="mb-3.5 text-[clamp(32px,3.4vw,44px)]">
            Let's get to <em>work!</em>
          </h2>
          <p className="text-muted">
            Email:{' '}
            <a href={`mailto:${links.email}`} className="break-all text-accent underline-offset-4">
              {links.email}
            </a>
          </p>
        </div>
      </Reveal>

      <Reveal as="form" onSubmit={handleSubmit} className="flex flex-col justify-center">
        <p className="mb-8 max-w-[44ch] text-muted">
          Have a role, a project or just an idea? Tell me a little about it and I'll get back to you.
        </p>
        <Field id="name" label="Name">
          <input id="name" name="name" type="text" autoComplete="name" required className={inputClass} />
        </Field>
        <Field id="email" label="Email">
          <input id="email" name="email" type="email" autoComplete="email" required className={inputClass} />
        </Field>
        <Field id="message" label="Message">
          <textarea id="message" name="message" rows={4} required className={`${inputClass} resize-y`} />
        </Field>
        <button type="submit" className="btn btn-solid mt-2 self-start">
          Send message
        </button>
      </Reveal>
    </section>
  );
}

function Field({ id, label, children }) {
  return (
    <div className="mb-7">
      <label htmlFor={id} className="block text-xs font-medium uppercase tracking-[0.2em]">
        {label}
      </label>
      {children}
    </div>
  );
}
