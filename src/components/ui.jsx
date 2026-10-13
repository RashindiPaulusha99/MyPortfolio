import { useEffect, useRef, useState } from 'react';

/** Photo panel with slow zoom on hover; shows a handwritten placeholder until the image exists. */
export function Photo({ src, alt, placeholder, className = '', imgClassName = '', loading }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className={`group relative overflow-hidden bg-sand ${className}`}>
      {failed ? (
        <span
          aria-hidden="true"
          className="absolute inset-0 grid place-items-center p-4 text-center font-script text-[26px] text-muted"
        >
          {placeholder}
        </span>
      ) : (
        <img
          src={src}
          alt={alt}
          loading={loading}
          onError={() => setFailed(true)}
          className={`absolute inset-0 h-full w-full object-cover transition-transform duration-[6s] ease-soft group-hover:scale-105 ${imgClassName}`}
        />
      )}
    </div>
  );
}

/** Fades its children up once they scroll into view. */
export function Reveal({ as: Tag = 'div', className = '', children, ...rest }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!('IntersectionObserver' in window)) {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`transition-[opacity,translate] duration-1000 ease-soft ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
      } ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}

const iconPaths = {
  github: (
    <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
  ),
  linkedin: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 10v7" />
    </>
  ),
  email: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="1" />
      <path d="m3 6 9 7 9-7" />
    </>
  ),
  server: (
    <>
      <rect x="8" y="8" width="32" height="10" rx="1" />
      <rect x="8" y="22" width="32" height="10" rx="1" />
      <path d="M14 13h.01M14 27h.01M20 13h8M20 27h8M24 32v8M16 40h16" />
    </>
  ),
  browser: (
    <>
      <rect x="6" y="9" width="36" height="26" rx="1.5" />
      <path d="M6 15h36M10 12h.01M13 12h.01M18 39h12M24 35v4M17 22l-4 4 4 4M31 22l4 4-4 4M26 21l-4 10" />
    </>
  ),
  cloud: (
    <>
      <ellipse cx="20" cy="12" rx="12" ry="4" />
      <path d="M8 12v16c0 2.2 5.4 4 12 4M32 12v6M8 20c0 2.2 5.4 4 12 4" />
      <path d="M28 38h12a5 5 0 0 0 0-10 7 7 0 0 0-13.5 1.5A4.3 4.3 0 0 0 28 38Z" />
    </>
  ),
};

/** Thin line icon. Social icons use a 24 grid, service icons a 48 grid. */
export function Icon({ name, className = '', strokeWidth }) {
  const large = ['server', 'browser', 'cloud'].includes(name);
  return (
    <svg
      viewBox={large ? '0 0 48 48' : '0 0 24 24'}
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth ?? (large ? 1.2 : 1.4)}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {iconPaths[name]}
    </svg>
  );
}
